const { cmd, commands } = require("../command");
const { Sticker } = require("wa-sticker-formatter");
const { downloadMediaMessage } = require("../lib/msg.js"); // Adjust the path as needed
const fs = require("fs");

cmd(
  {
    pattern: "toimg",
    alias: ["img", "photo"],
    react: "🪄",
    desc: "Convert a sticker to an image",
    category: "utility",
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
      // Ensure the message contains a sticker to convert
      if (!quoted || quoted.stickerMessage == null) {
        return reply("❌ *Please Give Me A Sticker!*");
      }

      // Download the sticker from the quoted message
      const stickerBuffer = await downloadMediaMessage(quoted, "stickerInput");
      if (!stickerBuffer)
        return reply("*Failed to download the sticker. 🔄Try again!*");

      // Convert the sticker buffer to an image (using Sticker class)
      const sticker = new Sticker(stickerBuffer, {
        pack: "𝐍𝐈𝐌𝐒𝐀𝐑𝐀 〽𝐃",
        author: "Rajindu Nimsara",
        type: "FULL", // This may not be needed, but ensures we're using the full sticker format
        quality: 100, // Quality of the output image (0-100)
      });

      // Get the image buffer
      const imageBuffer = await sticker.toBuffer({ format: "image/jpeg" });

      // Send the image as a response
      await robin.sendMessage(
        from,
        {
          image: imageBuffer,
          caption: "> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃",
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      reply(`Error: ${e.message || e}`);
    }
  }
);
