var handler = async (m, { text, conn }) => {
  if (!text) throw 'apa cuba';
  try {
    let response = await fetch(API('xzn','api/dood', {url: text }, 'apikey'))
    let wtf = await response.json()
    if (/MB/.test(wtf.size) && parseInt(wtf.size) > 100) throw 'kegedean antum mana tahan nonton'
    let axiosConfig = {
      responseType: 'arraybuffer',
      headers: {
        referer: 'https://dood.com/'
      }
    };
    let { data: buffer } = await axios.get(wtf.direct_link, axiosConfig);
    await conn.sendMessage(m.chat, { video: buffer, caption: wtf.title}, { quoted: m });
  } catch (e) {
    m.reply("mana gada hoax hoax")
  };
};
handler.help = handler.command = ['dood'];
handler.tags = ['18+'];

module.exports = handler;