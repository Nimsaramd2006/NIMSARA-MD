/*created by King Malvin 🕵
contact dev1 263780934873 ♻️
contact dev2 https://t.me/malvinking2 ♻️
© just give credit will you ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

*⇆ ʜɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

┏━━━━━━━━━━━━━━━━━━━━
  𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 𝟐𝐧𝐝 𝐌𝐞𝐧𝐮
┗━━━━━━━━━━━━━━━━━━━━

𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐑.𝐑𝐀𝐉𝐈𝐍𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀👨🏻‍💻


*╭───────────────❒⁠⁠⁠⁠*
*│* 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐌𝐃
*┕───────────────❒*
*╭──────────●●►*
${menu.download}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* 𝐌𝐀𝐈𝐍 𝐂𝐌𝐃
*┕───────────────❒*
*╭──────────●●►*
${menu.main}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* 𝐆𝐑𝐎𝐔𝐏 𝐂𝐌𝐃
*┕───────────────❒*

*╭──────────●●►*
${menu.group}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* 𝐎𝐖𝐍𝐄𝐑 𝐂𝐌𝐃 
*┕───────────────❒*

*╭──────────●●►*
${menu.owner}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐌𝐃 
*┕───────────────❒*

*╭──────────●●►*
${menu.convert}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* 𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐌𝐃 
*┕───────────────❒*

*╭──────────●●►*
${menu.search}
*╰──────────●●►*


> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃

`;

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
