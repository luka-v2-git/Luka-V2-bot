module.exports = {
    config: {
        name: "cool",
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
    if (event.body && event.body.toLowerCase() == "cool") return message.reply(" ✰  𝐂𝐨𝐦𝐦𝐞 𝐝𝐢𝐭 𝐭𝐨𝐮𝐣𝐨𝐮𝐫𝐬 𝐦𝐨𝐧 𝐦𝐚𝐢𝐭𝐫𝐞 𝐢𝐥 𝐞𝐬𝐭 𝐜𝐨𝐨𝐥 𝐝𝐞 𝐯𝐢𝐯𝐫𝐞 𝐩𝐞𝐧𝐝𝐚𝐧𝐭 𝐩𝐥𝐮𝐬 𝐝𝐞 120 𝐚𝐧𝐬 ✰");
}
};
