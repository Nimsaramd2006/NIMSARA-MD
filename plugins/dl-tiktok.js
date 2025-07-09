
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

const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "tiktok",
    alias: ["ttdl", "tt", "tiktokdl"],
    desc: "Download TikTok video without watermark",
    category: "downloader",
    react: "⬇️",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("Please provide a TikTok video link.");
        if (!q.includes("tiktok.com")) return reply("Invalid TikTok link.");
        
        
        const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status || !data.data) return reply("Failed to fetch TikTok video.");
        
        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;
        
        const caption = `*❒ Your Botname VⵊDEO DOWNLOADER ❒*\n\n` +
                        `👤 *User:* ${author.nickname}\n` +
                        `♥️ *Likes:* ${like}\n💬 *Comments:* ${comment}\n♻️ *Shares:* ${share}`
         
         
🎶 𝐘𝐓 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈
╭──────────────────╮
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${audio.title}
┃
┃🎧 𝐅𝐨𝐫𝐦𝐚𝐭: ${audio.format} 
┃
┃⏱️ 𝐓𝐢𝐦𝐞: ${audio.timestump || 'N/A'}
┃    
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${audio.ago || 'N/A'}
┃    
┃📊 𝐕𝐢𝐞𝐰𝐬: ${audio.views || 'N/A'}
┃
┃👍𝐋𝐢𝐤𝐞𝐬: ${audio.likes || 'N/A'}
╰─────────────────╯;
        
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
          
