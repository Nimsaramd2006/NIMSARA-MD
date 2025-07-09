/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Malvin King <https://github.com/kingmalvn>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const { fetchJson } = require("../lib/functions");
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
const { facebook } = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require("axios");
const { cmd, commands } = require('../command');

// twitter-dl

cmd({
  pattern: "twitter",
  alias: ["tweet", "twdl"],
  desc: "Download Twitter videos",
  react: "⬇️",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return conn.sendMessage(from, { text: "❌ Please provide a valid Twitter URL." }, { quoted: m });
    }

    await conn.sendMessage(from, {
      react: { text: '⏳', key: m.key }
    });

    const response = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result) {
      return reply("⚠️ Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { desc, thumb, video_sd, video_hd } = data.result;

    const caption = `🎥 𝐓𝐖𝐈𝐓𝐓𝐄𝐑 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥\n\n`
      + `╭──────────────────╮\n`
      + `┃📜 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍: ${desc || "No description"}\n`
      + `╰──────────────────╯\n\n`
      + `⬇️ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐎𝐏𝐓𝐈𝐎𝐍\n\n`
      + `1️⃣ 𝐒𝐃 𝐐𝐔𝐀𝐋𝐈𝐓𝐘\n`
      + `2️⃣ 𝐇𝐃 𝐐𝐔𝐀𝐋𝐈𝐓𝐘\n\n`
      + `🎵 𝐀𝐔𝐃𝐈𝐎 𝐎𝐏𝐓𝐈𝐎𝐍\n\n`
      + `3️⃣ 𝐀𝐔𝐃𝐈𝐎\n`
      + `4️⃣ 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓\n`
      + `5️⃣ 𝐕𝐎𝐈𝐂𝐄\n\n`
      + `📌 *Reply The Number You Want To Select*`;

    const sentMsg = await conn.sendMessage(from, {
      image: { url: thumb },
      caption: caption
    }, { quoted: m });

    const messageID = sentMsg.key.id;

    conn.ev.on("messages.upsert", async (msgData) => {
      const receivedMsg = msgData.messages[0];
      if (!receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
      const senderID = receivedMsg.key.remoteJid;
      const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

      if (isReplyToBot) {
        await conn.sendMessage(senderID, {
          react: { text: '⬇️', key: receivedMsg.key }
        });

        switch (receivedText) {
          case "1":
            await conn.sendMessage(senderID, {
              video: { url: video_sd },
              caption: "📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐈𝐍 𝐒𝐃 𝐐𝐔𝐀𝐋𝐈𝐓𝐘"
            }, { quoted: receivedMsg });
            break;

          case "2":
            await conn.sendMessage(senderID, {
              video: { url: video_hd },
              caption: "📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐈𝐍 𝐇𝐃 𝐐𝐔𝐀𝐋𝐈𝐓𝐘"
            }, { quoted: receivedMsg });
            break;

          case "3":
            await conn.sendMessage(senderID, {
              audio: { url: video_sd },
              mimetype: "audio/mpeg"
            }, { quoted: receivedMsg });
            break;

          case "4":
            await conn.sendMessage(senderID, {
              document: { url: video_sd },
              mimetype: "audio/mpeg",
              fileName: "Twitter_Audio.mp3",
              caption: "📥 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐀𝐒 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓"
            }, { quoted: receivedMsg });
            break;

          case "5":
            await conn.sendMessage(senderID, {
              audio: { url: video_sd },
              mimetype: "audio/mp4",
              ptt: true
            }, { quoted: receivedMsg });
            break;

          default:
            reply("❌ Invalid option! Please reply with 1, 2, 3, 4, or 5.");
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});

// MediaFire-dl

cmd({
  pattern: "mediafire",
  alias: ["mfire"],
  desc: "To download MediaFire files.",
  react: "⬇️",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("*‼️ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴍᴇᴅɪᴀғɪʀᴇ ʟɪɴᴋ.*");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const response = await axios.get(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result || !data.result.dl_link) {
      return reply("*🏷️ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀɴ ᴍᴇᴅɪᴀғɪʀᴇ ʟɪɴᴋ.ᴇɴsᴜʀᴇ ᴛʜᴇ ʟɪɴᴋ ɪs ᴠᴀʟɪᴅ ᴀɴᴅ ᴘᴜʙʟɪᴄ.*");
    }

    const { dl_link, fileName, fileType } = data.result;
    const file_name = fileName || "mediafire_download";
    const mime_type = fileType || "application/octet-stream";

    await conn.sendMessage(from, {
      react: { text: "⬆️", key: m.key }
    });

    const caption = `🌟 𝐌𝐄𝐃𝐈𝐀 𝐅𝐈𝐑𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥\n`
      + `╭──────────────────╮`
      + `┃📄 𝐅𝐈𝐋𝐄 𝐍𝐀𝐌𝐄: ${file_name}\n`
      + `┃📨 𝐅𝐈𝐋𝐄 𝐓𝐘𝐏𝐄: ${mime_type}\n`
      + `╰──────────────────╯\n\n`
      + `> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃`;

    await conn.sendMessage(from, {
      document: { url: dl_link },
      mimetype: mime_type,
      fileName: file_name,
      caption: caption
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});

// apk-dl

cmd({
  pattern: "apk",
  desc: "Download APK from Aptoide.",
  react: "⬇️",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("*🏷️ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀɴ ᴀᴘᴘ ɴᴀᴍᴇ ᴛᴏ sᴇᴀʀᴄʜ.*");
    }

    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data || !data.datalist || !data.datalist.list.length) {
      return reply("⚠️ No results found for the given app name.");
    }

    const app = data.datalist.list[0];
    const appSize = (app.size / 1048576).toFixed(2); // Convert bytes to MB

    const caption = `🗳️ 𝐀𝐏𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥
    
╭──────────────────╮    
┃ 🏷️ 𝐍𝐀𝐌𝐄: ${app.name}
┃ 📦 𝐒𝐈𝐙𝐄: ${appSize} MB
┃ 📮 𝐏𝐀𝐂𝐊𝐀𝐆𝐄: ${app.package}
┃ 📅 𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐎𝐍: ${app.updated}
┃ 👨🏻‍💻 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: ${app.developer.name}
╰──────────────────╯

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃`;

    await conn.sendMessage(from, { react: { text: "⬆️", key: m.key } });

    await conn.sendMessage(from, {
      document: { url: app.file.path_alt },
      fileName: `${app.name}.apk`,
      mimetype: "application/vnd.android.package-archive",
      caption: caption
    }, { quoted: m });

    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while fetching the APK. Please try again.");
  }
});

// G-Drive-DL

cmd({
  pattern: "gdrive",
  desc: "Download Google Drive files.",
  react: "⬇️",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("*🏷️ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ʟɪɴᴋ.*");
    }

    await conn.sendMessage(from, { react: { text: "⬇️", key: m.key } });

    const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${q}&apikey=mnp3grlZ`;
    const response = await axios.get(apiUrl);
    const downloadUrl = response.data.result.downloadUrl;

    if (downloadUrl) {
      await conn.sendMessage(from, { react: { text: "⬆️", key: m.key } });

      await conn.sendMessage(from, {
        document: { url: downloadUrl },
        mimetype: response.data.result.mimetype,
        fileName: response.data.result.fileName,
        caption: "> *Powered by your Botname 🎐*"
      }, { quoted: m });

      await conn.sendMessage(from, { react: { text: "✅", key: m.key } });
    } else {
      return reply("⚠️ No download URL found. Please check the link and try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while fetching the Google Drive file. Please try again.");
  }
}); 
      
