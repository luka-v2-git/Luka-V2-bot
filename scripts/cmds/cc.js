module.exports = {
    config: {
        name: "cc",
        version: "1.0",
        author: "TK joel",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "cc") return message.reply(" 🌹𝐂𝐜 𝐭𝐨𝐢 , 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭  ✰ 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 ✰ 𝐞𝐜𝐫𝐢𝐭 𝐣𝐮𝐬𝐭𝐞 •𝐋𝐮𝐤𝐚𝐠𝐜 𝐞𝐭 𝐣𝐞 𝐭'𝐚𝐣𝐨𝐮𝐭𝐞 𝐚𝐮 𝐠𝐫𝐨𝐮𝐩𝐞 𝐝𝐞 𝐦𝐨𝐧 𝐜𝐫𝐞́𝐚𝐭𝐞𝐮𝐫 . 🌹 ");
    }
};
