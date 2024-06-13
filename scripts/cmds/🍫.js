module.exports = {
    config: {
        name: "🍫",
        version: "1.0",
        author: "🌹 𝐋𝐮𝐤𝐚 🌹",
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
    if (event.body && event.body.toLowerCase() == "🍫") return message.reply("✰ 𝐌𝐨𝐧 𝐦𝐚𝐢𝐭𝐫𝐞  🌹 𝐋𝐮𝐤𝐚  🌹𝐝𝐢𝐬 𝐭𝐨𝐮𝐣𝐨𝐮𝐫𝐬 𝐪𝐮𝐞 𝐥𝐞 𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭 𝐞𝐬𝐭 𝐬𝐚 𝐦𝐞𝐢𝐥𝐥𝐞𝐮𝐫 𝐬𝐮𝐜𝐫𝐞𝐫𝐢𝐞 ✰  ");
}
};
