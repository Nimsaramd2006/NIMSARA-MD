const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "G1Z0BJoC#aB_l1EHqWA9BVMzXy4R3aHSXj5Fe5IHycf6E0wFn3mg",
  OWNER_NUM: process.env.OWNER_NUM || "94766351670",
  PRIFIX: process.env.PRIFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/SX5N81P0/SulaMd.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "👋 *HI*,\n*${pushname}* 😎\n\n✅ *Hello, I am Alive Now!*\n\n*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*\n* | 🤖 Bot :- 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 *\n* | 👤 Owner :- R.Rajindu Nimsara *\n* | ☎️ Contact :- +94766351670 *\n* | ✒️ Prefix :- . *\n* | 🧬 Version :- 1.0.5 *\n*╰──────────●●►*\n\n💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 © NIMSARA-MD❤️‍🩹 ✨\n\n*🔢 Reply below number*\n\n1 │❯❯◦ MENU\n\n2 │❯❯◦ SPEED\n\n> Developed by MR.Rajindu Nimsara\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: proces.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDv3Nv_G6cspA7ZxgkdlP5pXDvjm7sm7GA",
};
