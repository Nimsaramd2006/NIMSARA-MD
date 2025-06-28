const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
return await robin.sendMessage(from,{video: {url: config.ALIVE_VIDEO},image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
const buttons = [
  { buttonId: '.menu', buttonText: { displayText: '📜 MENU' }, type: 1 },
  { buttonId: '.owner', buttonText: { displayText: '👤 OWNER' }, type: 1 }
];

}catch(e){
console.log(e)
reply(`${e}`)
}
})

