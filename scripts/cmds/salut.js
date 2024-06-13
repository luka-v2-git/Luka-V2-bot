module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "luka",
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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("✰ 𝐘𝐨 𝐬𝐚𝐥𝐮𝐭 𝐦𝐞𝐜 𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐩𝐨𝐮𝐫𝐚𝐢-𝐣𝐞 𝐭'𝐚𝐢𝐝𝐞𝐫 𝐚𝐮𝐣𝐨𝐮𝐫𝐝'𝐡𝐮𝐢 𝐝𝐚𝐧𝐬 𝐥𝐚 𝐜𝐨𝐧𝐪𝐮𝐞̂𝐭𝐞 𝐝𝐞 𝐭𝐨𝐧 𝐬𝐚𝐯𝐨𝐢𝐫 ? 😃 ✰");
}
};
