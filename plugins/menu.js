const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "menu",
    alise: ["1"],
    react: "📃",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
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
      reply,
    }
  ) => {
    try {
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*

🫟 *Wᴇʟᴄᴏᴍᴇ Tᴏ  𝐍𝐈𝐌𝐒𝐀𝐑𝐀 〽️𝐃*🫟

╭───────────●●►
| 🌟*MAIN COMMANDS* 
╰───────────●●►

┏▣ 
┃ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.alive*
┃ 🔖 𝐔𝐒𝐄 : Bot Online/Offline
┗▣
┏▣
┃ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.menu*
┃ 🔖 𝐔𝐒𝐄 : All Menu
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.ai* 
┃ 🔖 𝐔𝐒𝐄 : .ai <test>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.system*
┃ 🔖 𝐔𝐒𝐄 : Bot Infor
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.owner*
┃ 🔖 𝐔𝐒𝐄 : Owner Cmd
┗▣

╭───────────●●►
| 📥*DOWNLOAD COMMANDS*
╰───────────●●►

┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.song* 
┃ 🔖 𝐔𝐒𝐄 : .song <name / url>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.video* 
┃ 🔖 𝐔𝐒𝐄 : .video <name / url>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.fb* 
┃ 🔖 𝐔𝐒𝐄 : .fb <url>
┗▣

╭───────────●●►
| 👥*GROUP COMMANDS* 
╰───────────●●►

┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.add*
│ 🔖 𝐔𝐒𝐄 : .add <9476########>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.kick*
│ 🔖 𝐔𝐒𝐄 : .kick <@~ / 9476########>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.mute*
│ 🔖 𝐔𝐒𝐄 : .mute 
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.unmute*
│ 🔖 𝐔𝐒𝐄 : .unmute
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.left*
│ 🔖 𝐔𝐒𝐄 : .left
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.promote*
│ 🔖 𝐔𝐒𝐄 : .promote <@~ / 9476#####>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.demote*
│ 🔖 𝐔𝐒𝐄 : .demote <@~ / 9476#####>
┗▣

╭───────────●●►
| 🧑‍💻*OWNER COMMANDS* 
╰───────────●●►
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.restart*
│ 🔖 𝐔𝐒𝐄 : .restart wh bot
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.update*
│ 🔖 𝐔𝐒𝐄 : .update wh bot
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.block*
│ 🔖 𝐔𝐒𝐄 : .block user
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.left*
│ 🔖 𝐔𝐒𝐄 : .left
┗▣

╭───────────●●►
| 🔄*CONVERT COMMANDS* 
╰───────────●●►

┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.sticker* 
│ 🔖 𝐔𝐒𝐄 : .sticker <Img>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.img* 
│ 🔖 𝐔𝐒𝐄 : .img <sticker / gif>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.trn* 
│ 🔖 𝐔𝐒𝐄 : .trn <test>
┗▣
┏▣
│ 📌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 : *.tts* 
│ 🔖 𝐔𝐒𝐄 : .tts <test>
┗▣


> Developed by MR.Rajindu Nimsara
> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃


`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://i.ibb.co/5x5pG4X3/SulaMd.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
