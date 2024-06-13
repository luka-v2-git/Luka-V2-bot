module.exports = {
    config: {
        name: "hum",
        version: "1.0",
        author: "🌹 luka🌹",
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
    if (event.body && event.body.toLowerCase() == "hum") return message.reply(" ✰ 𝐄𝐧𝐜𝐨𝐫𝐞 𝐮𝐧 𝐩𝐢𝐭𝐨𝐲𝐚𝐛𝐥𝐞 𝐪𝐮𝐢 𝐦𝐚𝐧𝐪𝐮𝐞 𝐪𝐮𝐨𝐢 𝐟𝐚𝐢𝐫𝐞 𝐞𝐭 𝐬𝐞 𝐜𝐫𝐨𝐢̂𝐭 𝐩𝐥𝐮𝐬 𝐟𝐨𝐫𝐭 𝐪𝐮𝐞 𝐥𝐞𝐬 𝐚𝐮𝐭𝐫𝐞𝐬 ✰");
}
};
