const config = require('../config');
const { fetchJson } = require("../lib/functions");
const { igdl } = require("ruhend-scraper");
const axios = require("axios");
const { cmd, commands } = require('../command');

cmd({
  pattern: "ig",
  alias: ["insta", "Instagram"],
  desc: "To download Instagram videos.",
  react: "🎥",
  category: "download",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("http")) {
      return reply("❌ Please provide a valid Instagram link.");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const response = await axios.get(`https://bk9.fun/download/instagram?url=${encodeURIComponent(q)}`);
    const data = response.data;

    if (!data || data.status !== true || !data.BK9 || data.BK9.length === 0) {
      return reply("⚠️ Failed to fetch Instagram content. Please check the link and try again.");
    }

    // Loop through the BK9 array and send the first video or image found
    for (let item of data.BK9) {
      if (item.type === "video" && item.url) {
        await conn.sendMessage(from, {
          video: { url: item.url },
          mimetype: "video/mp4",
          caption: `${config.FOOTER}`
        }, { quoted: m });
        break; // Stop once we send the first video
      } else if (item.type === "image" && item.url) {
        await conn.sendMessage(from, {
          image: { url: item.url },
          caption: `${config.FOOTER}`
        }, { quoted: m });
        break; // Stop once we send the first image
      }
    }

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});
