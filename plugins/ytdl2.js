const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "mp4", 
    alias: ["video2", "ytv"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("*𝐏lease provide a YouTube url or Video Name..*");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `
🎶 𝐘𝐓 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈
╭──────────────────╮
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${yts.title}
┃
┃🎧 𝐅𝐨𝐫𝐦𝐚𝐭: ${yts.format} 
┃
┃⏱️ 𝐓𝐢𝐦𝐞: ${yts.timestump}
┃    
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${yts.ago || 'N/A'}
┃    
┃📊 𝐕𝐢𝐞𝐰𝐬: ${yts.views}
┃
┃👍𝐋𝐢𝐤𝐞𝐬: ${yts.likes || 'N/A'}
╰─────────────────╯

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `*${yts.title}*\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       
// play

cmd({ 
     pattern: "mp3", 
     alias: ["song2", "play"], 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("*𝐏lease providea YouTube url or Song Name.*");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `
🎶 𝐘𝐓 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥

◈==================================◈
╭──────────────────╮
┃🎵 𝐓𝐢𝐭𝐥𝐞: ${yts.title}
┃
┃🎧 𝐅𝐨𝐫𝐦𝐚𝐭: ${yts.format} 
┃
┃⏱️ 𝐓𝐢𝐦𝐞: ${yts.timestump}
┃    
┃⏰ 𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${yts.ago || 'N/A'}
┃    
┃📊 𝐕𝐢𝐞𝐰𝐬: ${yts.views}
┃
┃👍𝐋𝐢𝐤𝐞𝐬: ${yts.likes || 'N/A'}
╰─────────────────╯

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
