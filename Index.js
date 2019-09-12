const Discord = require('Discord.js');   
const Client = new Discord.Client();

const fs = require(`fs`);
const readFl = fs.readFileSync(`./token.json`);
const Token = JSON.parse(readFl);

Client.on('ready',() =>{
    console.log(`Logged in as ${Client.user.tag}!`);
}); 

Client.on(`message`, msg =>{
    if(msg.content === `t`){
        /* fs.readFile(`./token.json`, `utf8`, (err, jsonString) => {
    if (err) { 
        console.log ("File read failed:", err)
        return
    }
    console.log (`File data:`, jsonString)
    })*/
        const Embed = new Discord.RichEmbed();
        Embed.setAuthor(Client.user.username);
        Embed.setImage(`https://newsland.com/static/u/content_image_from_text/22112016/5565400-1126884.jpg`);
        Embed.setFooter(msg.member.user.username);
        Embed.setColor(`#ab52d6`);
        Embed.addField(`Андронный коллайдер 228 1337`, `2`,);
        Embed.addField(`Андронный коллайдер`, `2`,);
        msg.channel.send(Embed);
        //console.log(msg.member);
    }    
});

Client.login(Token.token);