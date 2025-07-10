

const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a city name. Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
🌍 𝐖𝐞𝐚𝐭𝐡𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 ${data.name}, ${data.sys.country} 🌍

🌡️ 𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞: ${data.main.temp}°C
🌡️ 𝐅𝐞𝐞𝐥𝐬 𝐋𝐢𝐤𝐞: ${data.main.feels_like}°C
🌡️ 𝐌𝐢𝐧 𝐓𝐞𝐦𝐩: ${data.main.temp_min}°C
🌡️ 𝐌𝐚𝐱 𝐓𝐞𝐦𝐩: ${data.main.temp_max}°C
💧 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲: ${data.main.humidity}%
☁️ 𝐖𝐞𝐚𝐭𝐡𝐞𝐫: ${data.weather[0].main}
🌫️ 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${data.weather[0].description}
💨 𝐖𝐢𝐧𝐝 𝐒𝐩𝐞𝐞𝐝: ${data.wind.speed} m/s
🔽 𝐏𝐫𝐞𝐬𝐬𝐮𝐫𝐞: ${data.main.pressure} hPa

> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃
`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("🚫 City not found. Please check the spelling and try again.");
        }
        return reply("⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});
