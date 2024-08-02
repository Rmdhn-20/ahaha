require("./all/module")

global.owner = "6285809388803" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "FAXZ-BOTz v1.9" //NAMA BOT GANTI
global.namaCreator = "Faxz-Botz" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/2bedc606be7ff385826f5.png.' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029VaiSVyLEQIam3mgpCD2I' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.packname = "FAXZ-BOTz v1.9" //GANTI AJ
global.author = "FAXZ-BOTz v1.9" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})