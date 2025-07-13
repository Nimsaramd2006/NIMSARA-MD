const axios = require('axios');
const { ALIVE_MSG, ALIVE_VIDEO } = require('./config');

// Inside your message handler
if (text === '.alive') {
  try {
    const res = await axios.get(ALIVE_VIDEO, { responseType: 'arraybuffer' });
    const videoBuffer = Buffer.from(res.data);

    await sock.sendMessage(m.chat, {
      video: videoBuffer,
      caption: ALIVE_MSG,
      mimetype: 'video/mp4',
      ptt: true, // this makes it a circular video note
      gifPlayback: true
    }, { quoted: m });

  } catch (err) {
    await sock.sendMessage(m.chat, { text: '❌ Error loading alive video!' }, { quoted: m });
    console.error(err);
  }
}
