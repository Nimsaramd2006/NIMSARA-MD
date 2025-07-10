

const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "settings",
    react: "⚙️",
    alias: ["setting", "env"],
    desc: "Get bot's settings list.",
    category: "main",
    use: '.settings',
    filename: __filename
}, async (conn, mek, m, {
    from,
    quoted,
    body,
    isCmd,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply
}) => {
    try {
        // Function to return ✅ or ❌ based on the boolean value, considering multiple formats
        const statusIcon = (status) => {
            return (status === true || status === 'true' || status === 1) ? "✅" : "❌";
        };

        // Create the settings message with the updated format
        let madeSetting = `╭───⚙️ 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 ⚙️───╮
│
│ 🟢 ➤ 𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐃 𝐒𝐓𝐀𝐓𝐔𝐒: ${statusIcon(config.AUTO_READ_STATUS)}
│ ⚙️ ➤ 𝐌𝐎𝐃𝐄: *${config.MODE}*
│ 🎙️ ➤ 𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄: ${statusIcon(config.AUTO_VOICE)}
│ 🖼️ ➤ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑: ${statusIcon(config.AUTO_STICKER)}
│ 💬 ➤ 𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘: ${statusIcon(config.AUTO_REPLY)}
│ 🔗 ➤ 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊: ${statusIcon(config.ANTI_LINK)}
│ 🚫 ➤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐃: ${statusIcon(config.ANTI_BAD)}
│ ⌨️ ➤ 𝐏𝐑𝐄𝐅𝐈𝐗: *[ ${config.PREFIX} ]*
│ 🎥 ➤ 𝐅𝐀𝐊𝐄 𝐑𝐄𝐂𝐎𝐑𝐃𝐈𝐍𝐆: ${statusIcon(config.FAKE_RECORDING)}
│ 😀 ➤ 𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓: ${statusIcon(config.AUTO_REACT)}
│ ❤️ ➤ 𝐇𝐄𝐀𝐑𝐓 𝐑𝐄𝐀𝐂𝐓: ${statusIcon(config.HEART_REACT)}
│ 👑 ➤ 𝐎𝐖𝐍𝐄𝐑 𝐑𝐄𝐀𝐂𝐓: ${statusIcon(config.OWNER_REACT)}
│ 🤖 ➤ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: *${config.BOT_NAME}*
│
╰──────────────────────────╯

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`;

        // Send the settings message with the updated format
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeSetting
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
