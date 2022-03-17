require("dotenv").config();
const { Telegraf } = require("telegraf");
const { getCriptosApi } = require("./cripto");

(async () => {
  const response = await getCriptosApi();
  const btc = response.find((coin) => coin.name === "Bitcoin");
})();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
bot.launch();
bot.start((ctx) =>
  ctx.reply(
    `Olá ${ctx.from.first_name}, Seja bem vindo ao Cripto News 🙃 \nQual Ativo te interessa hoje ?`
  )
);

bot.hears("bitcoin", (ctx) => {
  (async () => {
    const response = await getCriptosApi();

    const btc = response.find((coin) => coin.name === "Bitcoin");

    let bitcoinMessage = `A respeito de Bitcoin (BTC), aqui está:`;

    bot.telegram.sendMessage(ctx.chat.id, bitcoinMessage);
    bot.telegram.sendMessage(
      ctx.chat.id,
      `
      Nome: ${btc.name}
      Simbolo: ${btc.symbol}
      Preço atual: ${btc.current_price}
      `
    );
  })();
});
