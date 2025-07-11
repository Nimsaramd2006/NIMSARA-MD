

const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

// Command to fetch movie details
cmd({
    pattern: "movieinfo",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎞️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("! Movie not found.");
        }

        const movieInfo = `🎬 𝐌𝐎𝐕𝐈𝐄 𝐒𝐄𝐑𝐂𝐇 🎬
        
◈==================================◈
╭──────────────────╮
┃🏷 𝐓𝐢𝐭𝐥𝐞: ${data.Title}
┃
┃📅 𝐘𝐄𝐀𝐑: ${data.Year}
┃
┃🌟 𝐑𝐀𝐓𝐄𝐃: ${data.Rated}
┃
┃📆 𝐑𝐄𝐋𝐄𝐀𝐒𝐄𝐃: ${data.Released}
┃
┃⏳ 𝐑𝐔𝐍𝐓𝐈𝐌𝐄: ${data.Runtime}
┃
┃💾 𝐆𝐄𝐍𝐑𝐄: ${data.Genre}
┃
┃🎬 𝐃𝐈𝐑𝐄𝐂𝐓𝐈𝐎𝐍: ${data.Director}
┃
┃🖊 𝐖𝐑𝐈𝐓𝐄𝐑: ${data.Writer}
┃
┃🧑🏻 𝐀𝐂𝐓𝐎𝐑𝐒: ${data.Actors}
┃
┃🆎 𝐋𝐀𝐍𝐆𝐔𝐀𝐆𝐄: ${data.Language}
┃
┃🌏 𝐂𝐎𝐔𝐍𝐓𝐑𝐘: ${data.Country}
┃
┃🪩 𝐀𝐖𝐀𝐑𝐃𝐒: ${data.Awards}
┃
┃💎 𝐈𝐌𝐃𝐁 𝐑𝐀𝐓𝐓𝐈𝐍𝐆: ${data.imdbRating}
╰─────────────────────╯
◈==================================◈

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃

`;

        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐑𝐀𝐉𝐈𝐍𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});
