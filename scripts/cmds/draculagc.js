module.exports = {
  config: {
    name: "𝐋𝐮𝐤𝐚𝐠𝐜",
    version: "1.0",
    author: "SiAM",
    countDown: 30,
    role: 0,
    shortDescription: {
      en: "Add user to support group"
    },
    longDescription: {
      en: "This command adds the user to the admin support group."
    },
    category: "support",
    guide: {
      en: "To use this command, simply type -support."
    }
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = "7880509981978669"; // ID of the support group

    const threadID = event.threadID;
    const userID = event.senderID;

    // Check if the user is already in the support group
    try {
      const threadInfo = await api.getThreadInfo(supportGroupId);
      const participantIDs = threadInfo.participantIDs;
      if (participantIDs.includes(userID)) {
        // User is already in the support group
        api.sendMessage(
          "✰𝐓𝐮 𝐞𝐬 𝐝𝐞́𝐣𝐚̀ 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 𝐝𝐞 𝐦𝐨𝐧 𝐜𝐫𝐞́𝐚𝐭𝐞𝐮𝐫 𝐬𝐢 𝐭𝐮 𝐧𝐞 𝐭𝐫𝐨𝐮𝐯𝐞 𝐫𝐞𝐠𝐮𝐚𝐫𝐝𝐞 𝐝𝐚𝐧𝐬 𝐭𝐚 𝐛𝐨𝐢𝐭𝐞 𝐝𝐞 𝐬𝐩𝐚𝐦 ✰  .",
          threadID
        );
      } else {
        // Add user to the support group
        api.addUserToGroup(userID, supportGroupId, (err) => {
          if (err) {
            console.error("✰ 𝐃𝐞́𝐬𝐨𝐥𝐞́ 𝐦𝐚𝐢𝐬 𝐝𝐞́𝐠𝐚𝐠𝐞 ✰:", err);
            api.sendMessage(
              "😐 𝘿𝙀𝙎𝙊𝙇𝙀𝙕 𝙍𝙀𝙀𝙎𝘼𝙔𝙀𝙍 🧑‍🦯...",
              threadID
            );
          } else {
            api.sendMessage(
              " ✰ 🪄 𝙏𝙐 𝘼𝙎 𝙀𝙏𝙀 𝘼𝙅𝙊𝙐𝙏𝙀𝙍 𝘼𝙅𝙊𝙐𝙏𝙀𝙍 𝘼𝙐 𝙂𝙍𝙊𝙐𝙋𝙀 𝙑𝙀𝙍𝙄𝙁𝙄𝙀 𝙏𝙊𝙉 𝙎𝙋𝘼𝙈 𝙊𝙐 𝙇𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙋𝘼𝙍 𝙄𝙉𝙑𝙄𝙏𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙍𝘾𝙄 𝐍𝐁:𝙉𝙀 𝙋𝘼𝙎 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 𝙇𝙀 𝙉𝙊𝙈 𝘿𝙐 𝐆𝐫𝐨𝐮𝐩𝐞 ✰  ",
              threadID
            );
          }
        });
      }
    } catch (e) {
      console.error("Failed to get thread info:", e);
      api.sendMessage(
        "Failed to retrieve the support group information. Please try again later.",
        threadID
      );
    }
  }
}
