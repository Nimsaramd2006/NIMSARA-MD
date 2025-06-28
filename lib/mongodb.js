const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://youtu.be/xe2RUTerCJA?si=kxEToFkHw6u4EcTm' },
    { key: 'ALIVE_MSG', value: '👋 *HI*,\n\n*${message.pushName}* 😎\n\n\n\n✅ *Hello, I am Alive Now!*\n\n\n\n*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*\n\n*| 🤖 Bot :- 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃*\n\n*| 👤 Owner :- R.Rajindu Nimsara*\n\n*| ☎️ Contact :- +94766351670*\n\n*| ✒️ Prefix :- .*\n\n*| 🧬 Version :- 1.0.5*\n\n*╰──────────●●►*\n\n\n\n💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 © NIMSARA-MD❤️‍🩹 ✨\n\n\n\n> Developed by MR.Rajindu Nimsara\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
