client.on('message', fkk => {
    if (fkk.content == "#اسئله") {//الامر
        var x = ["المتاح للجميع لا يتاح لي",
"ما هي حاسة الشم عند الثعبان ؟",
"ماذا يقول الجدار للجدار؟ ",
"لمن ينحني الإمبراطور رأسه ؟",
"من هو الذي مات و لم يولد ؟",
"ما هو الحيوان الذي لا يلد ولا يبيض ؟",
"بحركه من إصبعك يحدثك بكل لسان .. فما هو ؟ ",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو الباب الذي لا يمكن فتحه ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هي الكلمه التي يبطل معناها إذا نطقنا بها ؟",
"سلم لا يصعد عليه أحد , فما هو ؟",
"ما هو الشي الذي تذبحه و تبكي عليه ؟",
"ما الذي يكون بين السماء و الارض ؟",
"ما هو الشي الذي يخترق الزجاج ولا يكسره ؟",

];
        var x2 = ['',
        "لسان",
        "سنلتقي عند الزاويه",
        "للحلاق",
        "ادم",
        "ذكر حيوان",
        "مذياع",
        "الإبره",
        "الماء",
        "باب مفتوح",
        "تموز",
        "صمت",
        "سلم رواتب",
        "البصل",
        "حرف الواو",
        "الضوء",

        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`╔════════【۩ :soccer: :trophy:  ***__ اسئله صعبه __*** :trophy: :soccer:  ۩】════════╗
 
***${x[x3]}***

=====================================

**__لديك 15 ثانية للاجابة __**
╚════════════════════════════════════╝`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,//واقات
                errors : ['https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} :soccer: ** ح معلم كوره ** :soccer: `);
        })
        })
    }
})

client.login(process.env.BOT_TOKEN);
