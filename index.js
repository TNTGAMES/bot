const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado| com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`granada ❤️`);
// caso queira o bot trasmitindo use:
/*
   client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/ladonegro'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
      */
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`|Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`||Estou em ${client.guilds.size} servidores`);
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  //comando falar
  if(comando === "say") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
//comando apagar
  if(comando === "apagar") {
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
  
  const fetched = message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
}
if(message.content === `<reiniciar`) {
  resetBot(message.channel)
      async function resetBot(channel) {
          channel.send(`Reiniciando...`)
          .then(msg => client.destroy(true))
          .then(() => client.login('SEU TOKEN AQUI'));
       }

  client.on('ready', () => {
      message.channel.send(`Bot reiniciado com sucesso!`);
  });
}
let user = message.mentions.users.first();
      if(comando === "correr"){
          if (!user) return message.reply('**Você não mencionou o usuario que você quer correr!**').catch(console.error);
          const Corrida = "<@" + message.author.id + ">" 
          const corrida2 =  " <@" + user.id + ">"
          var falas = [" fez **200** metros 🏎 ....."," fez **500** metros 🏎 ..........."," fez **800** metros 🏎 .............."," fez **1000** metros 🏎 ................."," fez **1500** metros 🏎 ............................","Explodiu 🔥 ","Bateu e pegou fogo 🔥" ]
          message.channel.send({
              "embed": {
                  "title": "🏎 Corrida",
                  "description": " O " + Corrida + " e" +  corrida2 + " **estao disputando uma corrida**" ,
                  "color": "65535",
                  
                  "fields": [
                      {
                          "name":"Sobre a corrida:",
                          "value":  "O " + Corrida +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + corrida2 +  "\n" + falas[Math.round(Math.random() * falas.length)],
                          "inline": false
                        }
                    ]
                }
            })
          }
  if(comando === "av") {

    let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = client.users.get(args[0]);
    } else {
        user = message.author;
    }

    
   let uicon = user.avatarURL

    let embed = new Discord.RichEmbed()
    
    .setFooter(message.author.tag,message.author.avatarURL )
        .setTimestamp(new Date()) 
    .setAuthor(user.username, 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/whatsapp/116/frame-with-picture_1f5bc.png')
    .setImage(uicon)
    .setColor('#FF00FF')
    message.channel.send(embed)
}
if(comando === "servericone"){
  simg = `${message.guild.iconURL}?size=2048`
      let icone = new Discord.RichEmbed()
      .setDescription("Ícone do server:")
      .setImage(simg)
      message.channel.send(icone)
}
if(comando === "botinfo"){
  let bicon = client.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Informações do Pharaoh Bot")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Nome do Bot:", client.user.username)
  .addField("Versão do Bot:", config.version)
  .addField("Criado em:", client.user.createdAt)
  .addField(` meu criador ${criador}`)
  .addField(` ID o meu criador ${idc}`)
  
  return message.channel.send(botembed);
}
     if(comando === "invite") {
      message.reply(`bot privado pra a programaçao|criado por tnt games , qual quer bugue falar com ele |server de supote: https://discord.gg/Y3ynDuM `)
     }
     if(comando === "severs") {
      message.channel.sendMessage("", {embed: {
       color: 0x39EA81,
       title: `estou em **${client.guilds.size}** servers!`,
     }});
    }
    if(message.content.startsWith('<membros')){
      let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
      let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
      let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
      let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;
  
      let statusembed = new Discord.RichEmbed()
      .addField('Membros',
      ` **Online:** ${MembrosOnline}
       **Ausente:** ${MembrosAusente}
       **Ocupado:** ${MembrosOcupado}
       **Offline:** ${MembrosOffline} `) ;
      
      message.channel.send(statusembed);
  }
    //msg
  // comando chutar 
  if(comando === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator","Explosion Server"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Por favor mencione um membro válido deste servidor");
    if(!member.kickable) 
      return message.reply("Eu não posso expulsar este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de expulsar?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
    message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo: ${reason}`);

    message.channel.send(statusembed);
  }
  // comando ban
  if(comando === "ban") {
    if(!message.member.roles.some(r=>["Administrator","Explosion Server"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor mencione um membro válido deste servidor");
    if(!member.bannable) 
      return message.reply("Eu não posso banir este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de banir?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o : ${error}`));
    message.reply(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`);
  }
  if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("✨Vip de sorteio / evento✨","✨VIP III ✨","✨VIP II ✨","✝[parceiros]✝","📛convite mensagem📛")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }
    }
    var tagUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(comando === "setcargo"){
          if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('**🙅Sem Permissão!**')

          var cargoCmd = args.join(" ").slice(22);

          var dev = message.guild.roles.find('name', `${cargoCmd}`)
          message.guild.members.get(`${tagUser.id}`).addRole(dev)
            message.reply('√ | Cargo Adicionado com sucesso!')
  }
  if(comando === "help"){
    message.author.send(`**oi sou um siples bot feito por discord.js**
    bote **<** antes de qual quer comando
    **comandos basicos:**
    ping                                        |o ping da api
    say <menssagem>                             |faz o bot falar
    av <@usuario>                               |ver o avatar da pessoa mecionada
    servericone                                 |ver o icone do server
    botinfo                                     |ver as minhas informaçoes
    invite                                      |mandarei o meu convite
    severs                                      |ver em quantos severs eu estou
    membros                                     |ver quantos membros tem no server
    correr <@usuario>                           |correra com o mecionado

    **comandos de ADM:**  
    apagar <numero de mensagen para deletar>  |apaga mensagens entre 1-100
    kick <@usuario>                             |kicka a pessoa mecionada do server
    bon <@usuario>                              |bani a pessoa mecionada 
    reiniciar                                   |eu vou reiniciar 
    setcargo <@usuario>                         |seta cargo na pessoa mecionada`);
    message.channel.send("**mandei no seu privado**")
  }
}

  
);

client.login(config.token);