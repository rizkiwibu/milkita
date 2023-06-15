var handler = async m => m.reply(`
╭─「 Donasi 」
│ • Qirisallpay: https://srv.neoxr.tk/f/cK5oNk.jpg
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285878836361
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['']
handler.command = /^dona(te|si)$/i

module.exports = handler
