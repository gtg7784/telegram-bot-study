const TelegramBot = require('node-telegram-bot-api')

const token = '954076951:AAHnFK677XFnOjbkcrcbRvtov7v3M8Spk1U'

const bot = new TelegramBot(token, {polling: true})

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id
  const res = match[1]
    
  bot.sendMessage(chatId, res)
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  const url = 'https://github.com/gtg7784'

  if (msg.text === 'github') {
    bot.sendMessage(chatId, url)
  } else {
    bot.sendMessage(chatId, 'asf')
  }
});