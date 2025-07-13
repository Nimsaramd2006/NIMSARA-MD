const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const config = require('../config');

const API_URL = "https://api.skymansion.site/movies-dl/search";
const DOWNLOAD_URL = "https://api.skymansion.site/movies-dl/download";
const API_KEY = config.MOVIE_API_KEY;

cmd({
    pattern: "movie",
    alias: ["moviedl", "films"],
    react: '🎬',
    category: "download",
    desc: "Search and download movies from PixelDrain",
    filename: __filename
}, async (robin, m, mek, { from, q, reply }) => {
    try {
        if (!q || q.trim() === '') return await reply('❌ 𝐏𝐥𝐞𝐚𝐬𝐞 𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐚 𝐦𝐨𝐯𝐢𝐞 𝐧𝐚𝐦𝐞! (𝐞.𝐠., 𝐃𝐞𝐚𝐝𝐩𝐨𝐨𝐥)');

        // Fetch movie search results
        const searchUrl = `${API_URL}?q=${encodeURIComponent(q)}&api_key=${API_KEY}`;
        let response = await fetchJson(searchUrl);

        if (!response || !response.SearchResult || !response.SearchResult.result.length) {
            return await reply(`❌ 𝐍𝐨 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐟𝐨𝐮𝐧𝐝 𝐟𝐨𝐫: *${q}*`);
        }

        const selectedMovie = response.SearchResult.result[0]; // Select first result
        const detailsUrl = `${DOWNLOAD_URL}/?id=${selectedMovie.id}&api_key=${API_KEY}`;
        let detailsResponse = await fetchJson(detailsUrl);

        if (!detailsResponse || !detailsResponse.downloadLinks || !detailsResponse.downloadLinks.result.links.driveLinks.length) {
            return await reply('❌ 𝐍𝐨 𝐏𝐢𝐱𝐞𝐥𝐃𝐫𝐚𝐢𝐧 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐥𝐢𝐧𝐤𝐬 𝐟𝐨𝐮𝐧𝐝');
        }

        // Select the 720p PixelDrain link
        const pixelDrainLinks = detailsResponse.downloadLinks.result.links.driveLinks;
        const selectedDownload = pixelDrainLinks.find(link => link.quality === "HD 720p");
        
        if (!selectedDownload || !selectedDownload.link.startsWith('http')) {
            return await reply('❌ 𝐍𝐨 𝐯𝐚𝐥𝐢𝐝 720𝐩 𝐏𝐢𝐱𝐞𝐥𝐃𝐫𝐚𝐢𝐧 𝐥𝐢𝐧𝐤 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞.');
        }

        // Convert to direct download link
        const fileId = selectedDownload.link.split('/').pop();
        const directDownloadLink = `https://pixeldrain.com/api/file/${fileId}?download`;
        
        
        // Download movie
        const filePath = path.join(__dirname, `${selectedMovie.title}-720p.mp4`);
        const writer = fs.createWriteStream(filePath);
        
        const { data } = await axios({
            url: directDownloadLink,
            method: 'GET',
            responseType: 'stream'
        });

        data.pipe(writer);

        writer.on('finish', async () => {
            await robin.sendMessage(from, {
                document: fs.readFileSync(filePath),
                mimetype: 'video/mp4',
                fileName: `${selectedMovie.title}-720p.mp4`,
                caption: `🎬 *${selectedMovie.title}*\n📌 Quality: 720p\n✅ *Download Complete!*\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽𝐃\n\n> 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐑.𝐑𝐀𝐉𝐈𝐍𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀`,
                quoted: mek 
            });
            fs.unlinkSync(filePath);
        });

        writer.on('error', async (err) => {
            console.error('Download Error:', err);
            await reply('❌ 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐦𝐨𝐯𝐢𝐞, 𝐏𝐥𝐞𝐚𝐬𝐞 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧');
        });
    } catch (error) {
        console.error('Error in movie command:', error);
        await reply('❌ 𝐒𝐨𝐫𝐫𝐲, 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐰𝐞𝐧𝐭 𝐰𝐫𝐨𝐧𝐠. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧 𝐥𝐚𝐭𝐞𝐫');
    }
});
