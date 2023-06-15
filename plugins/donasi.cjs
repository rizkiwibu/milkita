var handler = async m => m.reply(`
╭─「 Donasi 」
│ • Qirisallpay:6285878836361
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285878836361
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['']
handler.command = /^dona(te|si)$/i

module.exports = handler
