const Discord = require("discord.js");
const myid = ['655064919548362753'];//هنا ايدي الحساب حقك
const prefix = ['$'];//هنا البريفكس ما يقبل ارقام رموز فقط
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠


client.login("NzM4MjE2NDIzOTA1NTU4NTg5.XyIsLw.E4iowcceyGsQYQhCeHiJaACcy88");//هنا التوكن
client2.login("NzM4MjIyMTMzMjA5MDcxNzI3.XyIyEA.s6XkeImXhnWcvq7eBV0jfAk_Kfc");
client3.login("NzM4MjEwNzQ5MDEyMzc3NzIw.XyIm1g.N0DOJ8jYjcaW9vKVBa0oopK29yA");
client4.login("NzQxNDE4MjY1NjA3MTQzNTQ1.Xy3bpg.fapgTFn4hgqsAYnbtt0EuTexWFw");
client5.login("NzQxNDMzNjA2NDI1MDE4NDg5.Xy3gTw.9-633W2mY69S_JRQUoVpARXQxKc");
client6.login("NzQxNDM2ODMzMjU0MzQyNzk3.Xy3jOw.aLe4lNjn6kUFFjT4nrTK24POkRM");
client7.login("NzQxNDM4MTY5MTk4ODg2OTQz.Xy3lfw.bn7b5qIb0GRjzdKb3pnKutkNdtA");
client8.login("NzQxNDQ1MDAzMzAxMjI0NTcx.Xy4CGg.f3l63DGVOT0lES7FRxaUomPu8Ds");
client9.login("NzQxNDQ3ODU5NjA5NjY1NjQ4.Xy3teQ.FIOPx8K6TJjIms3D6MBnwOhe5uk");
client10.login("NzQxNDQ4NzI4ODEyMTkxNzU1.Xy3uNQ.E7pCU8NCdSv2z7sUpeIJ0s9hjTY");
client11.login("NzQxNDQ5ODU0MTMxMTA5OTM5.Xy3v9A.XGP6j7SlqHuY1FjFdGYk0jKMpaY");
client12.login("NzQxNDUyNDEwNTA5MDY2NDE0.Xy3xwA.s06B3RjHi7boUPsSDwBY7m11Dqg");
client13.login("NzQxNDUzNDIyMjg0NTA1MjAw.Xy3zcw.-mJPcB81gv4mTxw4uc2aJBh9t6Y");
client14.login("NzQxNDU2NTQxOTUzMDMyMjIy.Xy31cQ.i11QTjF1t1jwfhpMkOkHancI6aI");
client15.login("NzQxNDU3NDkyNjQyNDk2NjQ0.Xy32og.AEA_F9irloUr5zciZT0ID3ZL3K8");
client16.login("NzQxNDU5NjQ3OTg2MjcwMjEw.Xy34eQ.oFxwgKmCcSQ_5iXN-lf1jvFxm14");
client17.login("NzQxNDYxMjk5NDk3Nzk1NjI1.Xy351A.YdNFnjcA34JLo5Az7ZoXiYnInpY");
client18.login("NzQxNDYyMTk5NDY5NjA0ODc0.Xy36wQ.NecdwqGkRPGzYulTKAj4g_3QlAQ");
client19.login("NzQxNDYzMDg0NzQ4NzY3MjUz.Xy37hQ.lVHLeKc9IUnM3-LY3pW-EpjQEi0");
client20.login("NzQxNDYzOTgzNzk3NTY3NTc4.Xy38ZQ.xVjONg5BMNGYITYCKzQ3yvPkXgw");

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client9.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠
client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client9.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠
client.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client9.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠
client.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client9.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠
client.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client9.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠
client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client7.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client8.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client9.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client10.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client11.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client12.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client13.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client14.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client15.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client16.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client17.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client18.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client19.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client20.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client2.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client3.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client4.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client5.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client6.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client7.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client8.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client9.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client10.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client11.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client12.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client13.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client14.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client15.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client16.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client17.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client18.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client19.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

client20.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client2.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client3.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client4.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client5.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client6.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client7.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client8.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client9.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client10.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client11.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client12.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client13.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client14.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client15.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client16.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client17.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client18.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client19.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client20.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠


client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client7.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client8.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client9.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client10.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client11.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client12.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client13.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client14.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client15.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client16.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client17.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client18.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client19.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client20.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠


client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client2.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client3.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client4.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client5.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client6.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client7.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client8.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client9.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client10.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client11.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client12.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client13.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client14.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client15.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client16.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client17.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client18.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client19.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client20.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

client7.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``7`` ")
    }
});

client8.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``8`` ")
    }
});

client9.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``9`` ")
    }
});

client10.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``10`` ")
    }
});

client11.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``11`` ")
    }
});

client12.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``12`` ")
    }
});

client13.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``13`` ")
    }
});

client14.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``14`` ")
    }
});

client15.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``15`` ")
    }
});

client16.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``16`` ")
    }
});

client17.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``17`` ")
    }
});

client18.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``18`` ")
    }
});

client19.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``19`` ")
    }
});

client20.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``20`` ")
    }
});
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠