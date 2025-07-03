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
   *Welcome to 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃 2nd Menu*
┗━━━━━━━━━━━━━━━━━━━━

*Created By R.Rajindu Nimsara👨🏻‍💻*


*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ DOWNLOAD CMDS 📥❂*
*┕───────────────❒*
*╭──────────●●►*
${menu.download}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂MAIN CMDS 🔧❂*
*┕───────────────❒*
*╭──────────●●►*
${menu.main}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂GROUP CMDS 👥❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.group}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂OWNER CMDS 👨‍💻❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.owner}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂CONVERTER CMDS 🔄❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.convert}
*╰──────────●●►*

*╭─────────────────❒⁠⁠⁠⁠*
*│* *❂SEARCH CMDS 🔍❂*
*┕─────────────────❒*

*╭──────────●●►*
${menu.search}
*╰──────────●●►*


> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃

`;

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
