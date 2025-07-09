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


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "noh1nJbI#91n_ha6RqUwFbYkvviTF38BQX8AtT32SgcoF5_BVDeg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/SX5N81P0/SulaMd.jpg",
ALIVE_VIDEO: process.env.ALIVE_VIDEO || "https://files.catbox.moe/wtfov8.mp4",
MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/5x5pG4X3/SulaMd.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 *HI* ${pushname} 😎\n\n✅ *Hello, I am Alive Now!*\n\n*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*\n* | 🤖 Bot :- 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 *\n* | 👤 Owner :- R.Rajindu Nimsara *\n* | ☎️ Contact :- +94766351670 *\n* | ✒️ Prefix :- . *\n* | 🧬 Version :- 1.0.5 *\n*╰──────────●●►*\n\n💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 © NIMSARA-MD❤️🩹 ✨\n\n*🔢 Reply below number*\n\n1 │❯❯◦ MENU\n\n2 │❯❯◦ SPEED\n\n> Developed by MR.Rajindu Nimsara\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "『 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
