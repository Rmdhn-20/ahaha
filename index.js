require("./all/global")

const func = require("./all/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
async function startSesi() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(chalk.red.bold('</> #################################### •'))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const anggazyy = func.makeWASocket(connectionOptions)
if(usePairingCode && !anggazyy.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomor Yg Mau Di Pasang Bot Awal 62 Jangan 08 dasar GOBLOK PREMIUM Contoh : 628xxx\nNomor mu :\n');
		const code = await anggazyy.requestPairingCode(phoneNumber.trim())
		console.log(chalk.red.bold(`Kode Mu => [ ${code} ] <=`))

	}
store.bind(anggazyy.ev)

anggazyy.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
anggazyy.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
anggazyy.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
anggazyy.sendMessage(`62858093888033@s.whatsapp.net`, { text: `*_✅ Bot Bug FAXZ-BOTz v1.9 Berhasil Konek_*

*<!> WARNING ⚠*
> MENGGUNAKAN SC BUG INI BERARTI ANDA MENERIMA RESIKO MISAL SEPERTI KENON MAU BAGAI MANA PUN SEND BUG SUDAH SEPERTI SPAM!

~Dengan Terkoneksinya Bot Berarti Anda Menerima Resikonya~

*_My Soccial Media_*
> whatsapp :
 https://wa.me/6285809388803
> tiktok :
 https://tiktok.com/@faxz4you_real
> telegram : 
t.me/Faxz4you
> youtube :
 https://youtube.com/@faxz.attacker
> saluran wa (tentang bot wa)
https://whatsapp.com/channel/0029VaiSVyLEQIam3mgpCD2I

- *[DILARANG KERAS JUAL SC INI TANPA SEPENGETAHUAN BG FAXZ-BOTz JIKA KETAHUAN MAKA AKAN DI DENDA]*`})
if (autoJoin) {
anggazyy.groupAcceptInvite(codeInvite)
}
}
})

anggazyy.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return anggazyy.readMessages([m.key])
if (!anggazyy.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(anggazyy, m, store)
require("./case")(anggazyy, m, store)
} catch (err) {
console.log(err)
}
})

anggazyy.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = anggazyy.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

anggazyy.public = true

anggazyy.ev.on('creds.update', saveCreds)
return anggazyy
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})