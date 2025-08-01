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
SESSION_ID: process.env.SESSION_ID || "z5R3HbYT#cR1-aulVH36nIgxIY7HpBPm62ujmJXmwcdRctq46DRA",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/SX5N81P0/SulaMd.jpg",
MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/5x5pG4X3/SulaMd.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || " *Hello Dear, I am Alive Now!👻*\n\n*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*\n| 🤖 Bot :- 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 \n| 👤 Owner :- R.Rajindu Nimsara \n| ☎️ Contact :- +94766351670 \n| ✒️ Prefix :- . \n| 🧬 Version :- 1.0.5 \n*╰──────────●●►*\n\n💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 © NIMSARA-MD❤️🩹 ✨\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n🥰💚🍒𝐍𝐈𝐌𝐒𝐀𝐑𝐀 𝐌𝐃 𝐖𝐇 𝐁𝐎𝐓🍒💚🥰\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n> 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐌𝐑.𝐑𝐚𝐣𝐢𝐧𝐝𝐮 𝐍𝐢𝐦𝐬𝐚𝐫𝐚\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94766351670",
OWNER_EMOJI: process.env.OWNER_EMOJI || "👨🏻‍💻",
BOT_NAME: process.env.BOT_NAME || "『 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 』",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
OWNER_NAME: process.env.OWNER_NAME || "𝐑.𝐑𝐀𝐉𝐈𝐍𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀",
FOOTER: process.env.FOOTER || "> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|94aac4f93524e99da72cca4d679ac5975e696390",
};
