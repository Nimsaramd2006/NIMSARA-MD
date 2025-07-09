const { cmd } = require("../command");
const yts = require("yt-search");
const axios = require("axios");

cmd(
  {
    pattern: "video",
    react: "🎥",
    desc: "Download YouTube Video",
    category: "download",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }
  ) => {
    try {
      if (!q) return reply("*❌ Please give me a text or url that I want to search!*");

      // Search for the video
      const search = await yts(q);
      const data = search.videos[0];
      const url = data.url;

      // Video metadata description
      let desc = `🌟 NIMSARA-MD VIDEO DOWNLOADER 🌟

◈==================================◈
╭──────────────────╮
┃🎵 title : ${data.title}
┃    
┃💾 description : ${data.description}
┃    
┃⏱️ time : ${data.timestamp}
┃    
┃⏰ ago : ${data.ago}
┃    
┃📊 views : ${data.views}
┃
┃🔗 url : ${data.url}
╰─────────────────╯

⦁⦂⦁*━┉━┉━┉━┉━━┉━┉━┉━┉━┉━┉━┉━┉━┉┉┉━⦁⦂⦁


> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`;

      // Send metadata and thumbnail message
      await robin.sendMessage(
        from,
        { image: { url: data.thumbnail }, caption: desc },
        { quoted: mek }
      );

      // Video download function
      const downloadVideo = async (url, quality) => {
        const apiUrl = 'https://p.oceansaver.in/ajax/download.php?format=${quality}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222';
        const response = await axios.get(apiUrl);

        if (response.data && response.data.success) {
          const { id, title } = response.data;

          // Wait for download URL generation
          const progressUrl = 'https://p.oceansaver.in/ajax/progress.php?id=${id}';
          while (true) {
            const progress = await axios.get(progressUrl);
            if (progress.data.success && progress.data.progress === 1000) {
              const videoBuffer = await axios.get(progress.data.download_url, {
                responseType: "arraybuffer",
              });
              return { buffer: videoBuffer.data, title };
            }
            await new Promise((resolve) => setTimeout(resolve, 5000));
          }
        } else {
          throw new Error("Failed to fetch video details.");
        }
      };

      // Specify desired quality (default: 720p)
      const quality = "360";

      // Download and send video
      const video = await downloadVideo(url, quality);
      await robin.sendMessage(
        from,
        {
          video: video.buffer,
          caption: '🎥 *${video.title}*\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃',
          react: "✔️"
        },
        { quoted: mek }
      );

    
    } catch (e) {
      console.error(e);
      reply('❌ Error: ${e.message}');
    }
  }
);
