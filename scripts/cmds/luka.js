const axios = require('axios');

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAIResponse(input, userId, messageID) {
  const services = [
    { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
    { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
    { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
    { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
  ];

  let response = "✰ 𝐘𝐨 𝐬𝐚𝐥𝐮𝐭 𝐩𝐨𝐬𝐞 𝐦𝐨𝐢 𝐭𝐞𝐬 𝐝𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭𝐞𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 𝐞𝐭 𝐣𝐞 𝐭𝐞 𝐥𝐞𝐬 𝐫𝐞𝐬𝐨𝐥𝐯𝐫𝐚𝐢𝐬 🪶✰";
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Move to the next service in the cycle
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'luka',
    author: 'Arn',
    role: 0,
    category: 'luka',
    shortDescription: 'ai to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage(`🌹𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 🌹\n✰✰✰✰✰✰✰✰\n   𝐃𝐢𝐭 𝐦𝐨𝐢 𝐪𝐮𝐞𝐥𝐬 𝐬𝐨𝐧𝐭 𝐭𝐞𝐬 𝐝𝐢𝐟𝐟𝐢𝐜𝐮𝐥𝐭𝐞́𝐬 𝐩𝐨𝐮𝐫 𝐪𝐮𝐞 𝐣𝐞 𝐩𝐮𝐢𝐬𝐬𝐞 𝐭'𝐚𝐢𝐝𝐞𝐫 𝐚̀ 𝐥𝐞𝐬 𝐫𝐞𝐬𝐨𝐮𝐝𝐫𝐞  🪶.\n✰✰✰✰✰✰✰✰`, event.threadID, event.messageID);
      return;
    }

    const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
    api.sendMessage(` 🌹𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 🌹 \n✰✰✰✰✰✰✰✰\n${response}\n✰✰✰✰✰✰✰✰`, event.threadID, messageID);
  },
  onChat: async function ({ event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("luka")) {
      const input = messageContent.replace(/^luka\s*/, "").trim();
      const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
      message.reply(`🌹 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 🌹\n🪶${response}🪶\n`, messageID);
    }
  }
};
