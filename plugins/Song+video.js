
const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song Download --------
cmd({
    pattern: 'song',
    alias: "yt",
    desc: 'download songs',
    react: "🎶",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a Title or url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `🎶 𝐘𝐓 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈

┏━❮ 🩵𝐃𝐄𝐓𝐀𝐋𝐄𝐒🩵 ❯━
┃
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${data.title}
┃
┃⏱️ 𝐓𝐢𝐦𝐞: ${data.timestamp}
┃
┃📊 𝐕𝐢𝐞𝐰𝐬: ${data.views}
┃
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${data.ago}
┃
┃👍 𝐋𝐢𝐤𝐞𝐬: ${data.likes}
┃
┗━━━━━━━━━━━━━━𖣔𖣔

╭━━〔🔢 *Please Reply the option number below*〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃•1 | Download Audio 🎧
┃◈┃•2 | Download Document 📁
┃◈└───────────┈⊷
╰──────────────┈⊷

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉┉━┉━┉━┉┉┉━⦁⦂⦁

${config.FOOTER}
`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
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


//==================== Video downloader =========================

cmd({
    pattern: 'video',
    desc: 'download videos',
    react: "📽️",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a query or a url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `🎶 𝐘𝐓 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈

┏━❮ 🩵𝐃𝐄𝐓𝐀𝐋𝐄𝐒🩵 ❯━
┃
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${data.title}
┃
┃⏱️ 𝐓𝐢𝐦𝐞: ${data.timestamp}
┃
┃📊 𝐕𝐢𝐞𝐰𝐬: ${data.views}
┃
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${data.ago}
┃
┃👍 𝐋𝐢𝐤𝐞𝐬: ${data.likes}
┃
┗━━━━━━━━━━━━━━𖣔𖣔

╭━━〔🔢 *Please Reply the option number below*〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃•1 | Download Video 🎧
┃◈┃•2 | Download Document 📁
┃◈└───────────┈⊷
╰──────────────┈⊷

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉┉━┉━┉━┉┉┉━⦁⦂⦁

${config.FOOTER}`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
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
 
