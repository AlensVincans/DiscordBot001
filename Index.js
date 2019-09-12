const Discord = require('Discord.js');   
const Client = new Discord.Client();
const fs = require(`fs`);
const readFl = fs.readFileSync(`./token.json`);
const Token = JSON.parse(readFl);

Client.on('ready',() =>{
    console.log(`Logged in as ${Client.user.tag} !`);
}); 

Client.on(`message`, msg =>{
    if(msg.content === `t`){
        const Embed = new Discord.RichEmbed();
        Embed.setAuthor(Client.user.username)
             .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGHgSKE_p8DfMNg0iIFFmw-fURlrYxrzqAk-X5iXAn2LTftFw`)
             .setFooter(msg.member.user.username)
             .setColor(`#ab52d6`)
             .addField(`Андронный коллайдер 228 1337`, `2`,)
             .addField(`Андронный коллайдер`, `2`,)
        msg.channel.send(Embed);
    } 
    
    if (msg.content === `lol`){
        msg.channel.send("Пау Пау Пау Деда в здании 🦐");
    }   
});

Client.login(Token.token);