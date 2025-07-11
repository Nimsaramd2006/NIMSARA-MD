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

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "play2",
    alias: ["play"],
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = ` 
🎶 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈
╭──────────────────╮
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${data.title}
┃    
┃⏱️ 𝐓𝐢𝐦𝐞: ${data.timestump}
┃    
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${data.ago}
┃    
┃📊 𝐕𝐢𝐞𝐰𝐬: ${data.views}
┃
┃👍𝐋𝐢𝐤𝐞𝐬: ${data.likes}
╰─────────────────╯

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© Powered by Your Botname*"},{quoted:mek})

}catch(e){
console.log(e)
  reply(`_Hi ${pushname} retry later_`)
}
})

//====================video_dl=======================

cmd({
    pattern: "darama",
    alias: ["video2"],
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
🎶 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈
╭──────────────────╮
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${data.title}
┃    
┃⏱️ 𝐓𝐢𝐦𝐞: ${data.timestump}
┃    
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${data.ago}
┃    
┃📊 𝐕𝐢𝐞𝐰𝐬: ${data.views}
┃
┃👍𝐋𝐢𝐤𝐞𝐬: ${data.likes}
╰─────────────────╯

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© Powered by your Botname*"},{quoted:mek})

}catch(e){
console.log(e)
  reply(`_Hi ${pushname} retry later_`)
}
})
//
