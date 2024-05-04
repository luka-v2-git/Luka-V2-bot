const fs = require("fs-extra");

module.exports = {
	config: {
		name: "restart",
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Khởi động lại bot",
			en: "Restart bot"
		},
		category: "Owner",
		guide: {
			vi: "   {pn}: Khởi động lại bot",
			en: "   {pn}: Restart bot"
		}
	},

	langs: {
		vi: {
			restartting: "🔄 | Đang khởi động lại bot..."
		},
		en: {
			restartting: " ✰ 𝐃𝐨𝐧𝐧𝐞 𝐦𝐨𝐢 𝐪𝐮𝐞𝐥𝐪𝐮𝐞𝐬 𝐦𝐢𝐧𝐮𝐭𝐞𝐬 𝐚𝐟𝐢𝐧 𝐪𝐮𝐞 𝐣𝐞 𝐦𝐞 𝐫𝐞𝐜𝐡𝐚𝐫𝐠𝐞 𝐛𝐨𝐬𝐬 ....(❀╹◡╹) ✰ "
		}
	},

	onLoad: function ({ api }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		if (fs.existsSync(pathFile)) {
			const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
			api.sendMessage(`📝 | 𝐁𝐨𝐭 𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐞𝐬𝐭𝐚𝐫𝐭  \n⏰ | 𝐓𝐈𝐌𝐄: ${(Date.now() - time) / 1000}s`, tid);
			fs.unlinkSync(pathFile);
		}
	},

	onStart: async function ({ message, event, getLang }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
		await message.reply(getLang("restarting"));
		process.exit(2);
	}
};
