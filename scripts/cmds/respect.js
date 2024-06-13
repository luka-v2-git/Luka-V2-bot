module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "AceGun x Samir Œ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["61553923074004"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          " ✰ 𝐃𝐞́𝐬𝐨𝐥𝐞́ 𝐬𝐞𝐮𝐥 𝐦𝐨𝐧 𝐦𝐚𝐢𝐭𝐫𝐞  🌹𝐋𝐮𝐤𝐚 𝐫𝐲𝐨𝐭𝐚 𝐤𝐢𝐬𝐬𝐞́  🌹𝐩𝐞𝐮𝐭 𝐮𝐭𝐢𝐥𝐢𝐬𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞  🙂  ✰ ",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        ` ✰ partir d'aujourd'hui vous êtes administrateur du groupe de mon maître 🌹 𝐋𝐮𝐤𝐚 𝐫𝐲𝐨𝐭𝐚 𝐤𝐢𝐬𝐬𝐞́ 🌹 ! ✰`,
        threadID
      );
    } catch (error) {
      console.error("✰🏵Maitre je suis pas parmi les admin 👥 pour vous y intégrer toute mes excuses 😭 🛐 ✰:", error);
      api.sendMessage(" ✰ 𝐃𝐞́𝐬𝐨𝐥𝐞́ 🌹𝐋𝐮𝐤𝐚🌹 𝐯𝐞𝐢𝐥𝐥𝐞𝐳 𝐫𝐞́𝐞𝐬𝐬𝐚𝐲𝐞𝐫 ✰", event.threadID);
    }
  },
};
