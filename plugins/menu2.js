/*created by King Malvin 🕵
contact dev1 263780934873 ♻️
contact dev2 https://t.me/malvinking2 ♻️
© just give credit will you ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu",
    alias: ["list"],
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
convert: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `
*╭─────────────────────❒⁠⁠⁠⁠*
 *⇆ ʜɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*
*┕─────────────────────❒*

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 𝐌𝐞𝐧𝐮
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


╔══════════════════════════════╗  
║ 📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 📥 ║  
╚══════════════════════════════╝  

╭─━━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━─━━╮  
┃ ◈ *apk*  
┃ ◈ *twitter*  
┃ ◈ *gdrive*  
┃ ◈ *mediafire*  
┃ ◈ *fb*  
┃ ◈ *play*
┃ ◈ *song* 
┃ ◈ *song2*
┃ ◈ *video*   
┃ ◈ *video2*  
┃ ◈ *yts*  
┃ ◈ *tiktok*
┃ ◈ *mp3*
┃ ◈ *mp4*
┃ ◈ *movie*
╰─━─━─━─━─━─━─━─━─━─╯  

╔════════════════════════╗  
║ 🔧 𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 🔧 ║  
╚════════════════════════╝  

╭─━─〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━━╮  
┃ ◈ *alive*
┃ ◈ *menu*  
┃ ◈ *system*  
┃ ◈ *ping*  
┃ ◈ *runtime*
┃ ◈ *jid*
╰─━─━─━─━─━─━─━─━─╯  

╔═════════════════════════╗  
║ 👥 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 👥 ║  
╚═════════════════════════╝ 

╭─━──━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━─━╮  
┃ ◈ *mute*  
┃ ◈ *unmute*  
┃ ◈ *promote*  
┃ ◈ *demote*  
┃ ◈ *del*  
┃ ◈ *add*  
┃ ◈ *admins*  
┃ ◈ *groupdesc*  
┃ ◈ *groupinfo*  
┃ ◈ *gname*  
┃ ◈ *setsubject*  
┃ ◈ *tagall*  
┃ ◈ *hidetag*  
┃ ◈ *unlock*  
┃ ◈ *lock*
┃ ◈ *gname*  
┃ ◈ *join*  
┃ ◈ *leave*  
┃ ◈ *invite*  
┃ ◈ *tagadmin*  
╰─━─━─━─━─━─━─━─━─━━─╯  

╔══════════════════════════╗  
║ 👨‍💻 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 👨‍💻 ║  
╚══════════════════════════╝  

╭─━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━──━╮ 
┃ ◈ *shutdown*  
┃ ◈ *alive*  
┃ ◈ *ping*  
┃ ◈ *clearchats*  
┃ ◈ *block*
┃ ◈ *unblock*
┃ ◈ *repo*
┃ ◈ *owner*
┃ ◈ *owner2*
┃ ◈ *hack*
┃ ◈ *vv*
┃ ◈ *spam*
╰─━━─━─━──━─━─━━─━─╯  

╔══════════════════════════╗ 
║ 🔄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 🔄 ║
╚══════════════════════════╝ 

╭─━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━──━╮
┃ ◈ *readmore*
┃ ◈ *repeat*
╰─━━─━─━──━─━─━━─━─╯

╔══════════════════════════╗  
║ 🔍 𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 🔍 ║  
╚══════════════════════════╝  

╭─━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━──━╮  
┃ ◈ *yts*  
┃ ◈ *image* 
╰─━─━─━━─━─━─━─━─━─╯ 


𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐑.𝐑𝐀𝐉𝐈𝐍𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀👨🏻‍💻

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃

`;

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
