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

const {readEnv} = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ${config.BOT_NAME} 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.5*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • MAIN*
*├ 2 • SEARCH*
*├ 3 • DOWNLOAD*
*├ 4 • GROUP*
*├ 5 • OWNER*
*├ 6 • FUN*
*╰╼╼╼╼╼╼╼╼╼╼*

🌟 𝐑𝐞𝐩𝐥𝐲 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐍𝐮𝐦𝐛𝐞𝐫 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐞𝐥𝐞𝐜𝐭

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃`;

        const vv = await conn.sendMessage(from, { image: { url: config.MENU_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                    reply(`
                    

╔════════════════════════╗  
║ 🔧 𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 🔧 ║  
╚════════════════════════╝  

╭─━─〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━━╮  
┃ ◈ *alive*
┃ ◈ *menu**  
┃ ◈ *menu2* 
┃ ◈ *system*  
┃ ◈ *ping*  
┃ ◈ *runtime*
┃ ◈ *jid*
╰─━─━─━─━─━─━─━─━─╯  

📊 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐢𝐧 𝐌𝐀𝐈𝐍: 7  
 
> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃  

`);

                        break;
                    case '2':               
                        reply(`

╔══════════════════════════╗  
║ 🔍 𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 🔍 ║  
╚══════════════════════════╝  

╭─━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━──━╮  
┃ ◈ *yts*  
┃ ◈ *image* 
╰─━─━─━━─━─━─━─━─━─╯  

📊 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐢𝐧 𝐒𝐄𝐀𝐑𝐂𝐇: 2

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`);
                        break;
                    case '3':               
                        reply(`
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
┃ ◈ *play2*  
┃ ◈ *video*   
┃ ◈ *video2*  
┃ ◈ *yta*  
┃ ◈ *tiktok*
┃ ◈ *ytmp3*
╰─━─━─━─━─━─━─━─━─━─╯  

📊 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐢𝐧 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃: 12
 
> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`);
                    
                        break;
                    case '4':               
                        reply(`
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

📊 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐢𝐧 𝐆𝐑𝐎𝐔𝐏: 20  


> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`);
                    break;
                    case '5':               
                        reply(`
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
╰─━━─━─━──━─━─━━─━─╯  

📊 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐢𝐧 𝐎𝐰𝐧𝐞𝐫: 9

 
> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 
`);
                    break;
                    case '6':               
                        reply(`
╔═════════════════════════╗  
║ 🧰 𝐓𝐎𝐎𝐋𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 🧰 ║  
╚═════════════════════════╝  

╭─━〔 ⚡ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚡ 〕━──━╮ 
┃ ◈ *joke*  
┃ ◈ *flirt*  
┃ ◈ *truth*  
┃ ◈ *dare*  
┃ ◈ *fact*
┃ ◈ *pickupline*
┃ ◈ *character*
┃ ◈ *repeat*
┃ ◈ *spam*
┃ ◈ *readmore*
╰─━━─━─━──━─━─━━─━─╯  

📊 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐢𝐧 𝐎𝐰𝐧𝐞𝐫: 10

 
> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`);
                       
                        
                    break;
                    default:
                    
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
