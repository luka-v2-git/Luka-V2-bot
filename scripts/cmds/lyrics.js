const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: 'lyrics',
    version: '2.0',
    author: 'ArYAN',
    role: 0,
    category: 'music',
    longDescription: {
      en: 'Get any songs lyrics',
    },
    guide: {
      en: '{p}lyrics [ Song Name ]',
    },
  },

  onStart: async function ({ api, event, args }) {
    try {
      const songName = args.join(" ");
      if (!songName) {
        api.sendMessage(`⛔ "𝐈𝐧𝐯𝐚𝐥𝐢𝐝𝐞 𝐮𝐬𝐚𝐠𝐞"\n✰✰✰✰✰✰✰✰\n\nPlease provide a song name!`, event.threadID, event.messageID);
        return;
      }

      const apiUrl = `https://aryan-apis.onrender.com/api/lyrics?songName=${encodeURIComponent(songName)}&apikey=aryan`;
  
   const response = await axios.get(apiUrl);
      const { lyrics, title, artist, image } = response.data;

      if (!lyrics) {
        api.sendMessage(`⛔ "𝐍𝐨𝐭 𝐟𝐨𝐮𝐧𝐝"\n✰✰✰✰✰✰✰✰\n\nSorry, lyrics ${songName} not found, please provide another song name!`, event.threadID, event.messageID);
        return;
      }

      let message = `ℹ️ "Lyrics Title"\n➤ ${title}\n👑 ARTIST\n➤ ${artist}\n\\n✅ Here is your lyrics\n✰✰✰✰✰✰✰✰\n${lyrics}\n\n✰✰✰✰✰𝐟𝐢𝐧✰✰✰✰✰`;
      let attachment = await global.utils.getStreamFromURL(image);
      api.sendMessage({ body: message, attachment }, event.threadID, (err, info) => {
        let id = info.messageID;
      });
    } catch (error) {
      console.error(error);
      api.sendMessage(`⛔ 𝐏𝐚𝐠𝐞 𝐧𝐨𝐧 𝐭𝐫𝐨𝐮𝐯𝐞𝐞́\n✰✰✰✰✰✰✰✰\n\nSorry, lyrics not found, please provide another song name!`, event.threadID, event.messageID);
    }
  },
};
