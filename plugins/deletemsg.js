const deletedMsgs = {};

client.on('message_create', msg => {
    if (!msg.fromMe && msg.type !== 'ciphertext') {
        deletedMsgs[msg.id._serialized] = msg;
    }
});

client.on('message_revoke_everyone', async (after, before) => {
    const msg = deletedMsgs[before.id._serialized];
    if (!msg) return;

    let sender = msg._data.notifyName || msg._data.pushName;
    let time = new Date().toLocaleString();

    let replyText = '';
    let mediaBuffer;

    switch (msg.type) {
        case 'chat':
            replyText = `🚫  𝐕𝐈𝐄𝐖𝐈𝐍𝐆  𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐌𝐒𝐆  📝

◈==================================◈

👤 ꜱᴇɴᴅᴇʀ: ${sender}
⏰ ᴅᴇʟᴇᴛᴇ ᴛɪᴍᴇ: ${time}
⚠ ᴀᴄᴛɪᴏɴ: Deleted a Message
💬 ᴍᴇꜱꜱᴀɢᴇ: ${msg.body}

⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃`;
            await client.sendMessage(msg.from, replyText);
            break;

        case 'image':
            mediaBuffer = await msg.downloadMedia();
            replyText = `🚫  𝐕𝐈𝐄𝐖𝐈𝐍𝐆  𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐏𝐇𝐎𝐓𝐎 🖼
              
◈==================================◈

👤 ꜱᴇɴᴅᴇʀ: ${sender}
⏰ ᴅᴇʟᴇᴛᴇ ᴛɪᴍᴇ: ${time}
⚠ ᴀᴄᴛɪᴏɴ: Deleted a Photo
  
⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃`;

            await client.sendMessage(msg.from, mediaBuffer,  {caption: replyText });
            break;

        case 'video':
            mediaBuffer = await msg.downloadMedia();
            replyText = `🚫  𝐕𝐈𝐄𝐖𝐈𝐍𝐆  𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐕𝐈𝐃𝐄𝐎 🎥

◈==================================◈

👤 ꜱᴇɴᴅᴇʀ: ${sender}
⏰ ᴅᴇʟᴇᴛᴇ ᴛɪᴍᴇ: ${time}
⚠ ᴀᴄᴛɪᴏɴ: Deleted a Video
  
⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃`;

            await client.sendMessage(msg.from, mediaBuffer,  {caption: replyText });
            break;

        case 'ptt':
            mediaBuffer = await msg.downloadMedia();
            replyText = `🚫  𝐕𝐈𝐄𝐖𝐈𝐍𝐆  𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐕𝐎𝐈𝐂𝐄 🎙

◈==================================◈

👤 ꜱᴇɴᴅᴇʀ: ${sender}
⏰ ᴅᴇʟᴇᴛᴇ ᴛɪᴍᴇ: ${time}
⚠ ᴀᴄᴛɪᴏɴ: Deleted a Voice
  
⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃`;

            await client.sendMessage(msg.from, mediaBuffer, { caption: replyText });
            break;
    }
});
```
