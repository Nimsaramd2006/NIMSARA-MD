const { cmd, commands } = require("../command");
const { default: getFbVideoInfo } = import("fb-downloader-scrapper");

cmd(
  {
    pattern: "fb",
    alias: ["facebook"],
    react: "📽️",
    desc: "Download Facebook Video",
    category: "download",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!q) return reply("*❌ Please give me a facebook video url!*");

      // Validate the Facebook URL format
      const fbRegex = /(https?:\/\/)?(www\.)?(facebook|fb)\.com\/.+/;
      if (!fbRegex.test(q))
        return reply("*Invalid Facebook URL! Please check and try again.* 🚫");

      // Fetch video details
      reply("*Downloading your video...* ⬇️");

      const result = await getFbVideoInfo(q);

      if (!result || (!result.sd && !result.hd)) {
        return reply("*Failed to download video. Please try again later.* 🔄");
      }

      const { title, sd, hd } = result;

      // Prepare and send the message with video details
   
      
      // Send the video if available
      if (hd) {
        await robin.sendMessage(
          from,
          { video: { url: hd }, caption: "----------HD VIDEO----------\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃" },
          { quoted: mek }
        );
        await robin.sendMessage(
          from,
          { video: { url: sd }, caption: "----------SD VIDEO----------\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃" },
          { quoted: mek }
        );
      } else if (sd) {
        await robin.sendMessage(
          from,
          { video: { url: sd }, caption: "----------SD VIDEO----------\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃" },
          { quoted: mek }
        );
      } else {
        return reply("*No downloadable video found!* 🚫");
      }

    
    } catch (e) {
      console.error(e);
      reply(`*Error:* ${e.message || e}`);
    }
  }
);
