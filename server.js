const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async() => {
    console.log('Client is ready!');
    //Get Profile Picture
    console.log(
         await client.getProfilePicUrl(client.info.wid._serialized)
     );
});

client.on('message', async(message) => {
    const msg = message.body;
    if(msg === 'pls mem') {
        await message.reply('pong');
       //await client.sendMessage(message.from, 'pong');
    } else {
        await message.reply('podi');
    }
	console.log(message.body); // Display All incoming message
});
 
client.initialize();
