const config = require('../config');
const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  pattern: 'fb',
  alias: ['fbdl', 'facebook'],
  desc: 'Download Facebook videos and reels by providing the video URL.',
  react: "⬇️",
  category: 'utility',
  use: '.fbdl <facebook_url>',
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const fbUrl = args.join(" ");
    if (!fbUrl) {
      return reply('*Please Provide A FB Video URL..*');
    }

    // Fetch video download links from the API
    const apiKey = 'e276311658d835109c'; // Replace with your API key if required
    const apiUrl = `https://api.nexoracle.com/downloader/facebook?apikey=${apiKey}&url=${encodeURIComponent(fbUrl)}`;
    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.result || !response.data.result.sd) {
      return reply('*Please Provide A FB Video URL..*');
    }

    const { thumb, title, desc, sd } = response.data.result;

    // Send the video as an attachment
    await conn.sendMessage(from, {
      video: { url: sd }, // Attach the video
      caption: `*🌟 𝐅𝐁 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📥*\n\n🔖 𝐓𝐈𝐓𝐋𝐄: ${title}\n📑 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍: ${desc}\n🖇️ 𝐔𝐑𝐋: ${fbUrl}\n\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃`,
    });
  } catch (error) {
    console.error('Error downloading Facebook video:', error);
    reply('❌ Unable to download the Facebook video. Please try again later.');
  }
});
