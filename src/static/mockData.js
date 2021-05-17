const mockData = [
    {
        uid: 1,
        from: "aaa@example.com",
        to: ["zzz@zzz@example.com"],
        subject: "[ HR-888 ] Notice of official announcement",
        date: 1577999999,
        body: "The Way of the warrior (bushido) is to be found in dying. If one is faced with two options of life or death, simply settle for death. It is not an especially difficult choice; just go forth and meet it confidently. To declare that dying without aiming for the right purpose is nothing more than a “dog’s death” is the timid and shallow way of Kamigata warriors. Whenever faced with the choice of life and death, there is no need to try and achieve one’s aims. <br/><br/>\
        Hagakure (1716)<br/>\
Yamamoto Tsunetomo<br/>\
English translation by Alexander Bennett ",
    },
    {
        uid: 2,
        from: "bbb.bbbb@example.com",
        to: ["yyy@example.com"],
        subject: '[web:333] "Web Contact"',
        date: 1577998999,
        body: "body of the email",
    },
    {
        uid: 3,
        from: "ccc@example.com",
        to: ["xxx@example.com", "yyy@example.com"],
        subject: "Happy New Year! Greetings for the New Year.",
        date: 1577997999,
        body: "body of the email",
        attach: {
            text: "pale_blue_dot.md",
            link: "pale_blue_dot.md",
        },
    },
    {
        uid: 4,
        from: "ddd.dddd@example.com",
        to: ["vvv.vvv@example.com", "yyy@example.com"],
        subject:
            "[HR-887(Revised: Office Expansion Project Team)] Notice of offical announcement",
        date: 1577889000,
        body: "<b class='text-bold' style='color:tomato;'>Melichrone:</b> \"I was supernal, immortal, omnipotent and omniscient. All things were resident in me - even dissident opinions about myself. Not a blade of grass grew that was not some infinitesimal portion of my being. The very mountains and rivers were shaped by me. I was the life in the sperm cells, and I was the death in the plague bacillus. I was the All and the Many, That Which Always Was And That Which Always Will Be.\"<br/>\
        <b class='text-bold' style='color:tomato;'>Carmody:</b> \"That's really something.\"<br/>\
        <b class='text-bold' style='color:tomato;'>Melichrone:</b> \"Yes. I was the Big Wheel in the Heavenly Bicycle Factory, as one of my poets expressed it.\"<br/><br/>\
        Dimension of Miracles (1968)<br/>\
        Robert Sheckley<br/>\
        From chapter 7",
    },
    {
        uid: 5,
        from: "eee.dddd@example.com",
        to: ["sss@example.com", "yyy@example.com", "ddd.dddd@example.com"],
        subject: "[Github] Logout page",
        date: 1577885400,
        body: "行く年や親に白髪をかくしけり <br /><br />越人 (1656–1739)",
    },
    {
        uid: 6,
        from: "fff.ffff@example.com",
        to: ["qqq.qqq@example.com"],
        subject: "[dev] Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
        date: 1577863800,
        body: "No quiero que le tapen la cara con pañuelos<br/>\
        para que se acostumbre con la muerte que lleva.<br/>\
        Vete, Ignacio: No sientas el caliente bramido.<br/>\
        Duerme, vuela, reposa: ¡También se muere el mar!<br/><br/>\
        Llanto por Ignacio Sánchez Mejías (1935)<br/>\
        Federico García Lorca (1898 - 1936)",
    },
    {
        uid: 7,
        from: "ggg@example.com",
        to: ["ppp@example.com"],
        subject: "Re: [Github] Brush-up on loading animation",
        date: 1577849400,
        body: "故有之以為利，<br/>\
        無之以為用。<br/><br/>\
        Tao te ching<br/>\
        Chapter 11",
    },
    {
        uid: 8,
        from: "hhh.hhh@example.com",
        to: ["ooo.ooo@example.com"],
        subject: "Workplace Summary for sample, Inc.: Jun 2 - Jun 9",
        date: 1577824206,
        body: "body of the email",
        attach: {
            text: "pale_blue_dot.md",
            link: "pale_blue_dot.md",
        },
    },
    {
        uid: 9,
        from: "iii@example.com",
        to: ["nnn@example.com"],
        subject: "I love you",
        date: 1577763000,
        body: "«קָרוֹב יְהוָה, לְנִשְׁבְּרֵי-לֵב; וְאֶת-דַּכְּאֵי-רוּחַ יוֹשִׁיעַ.»<br/>\
        T'hilim 34:18 (34:19)<br/><br/>\
        «Iuxta est Dominus contritis corde et confractos spiritu salvabit.»<br/>\
Biblia Sacra Vulgata, Liber Psalmorum 34:18 (33:19) <br/><br/>",
        attach: {
            text: "pale_blue_dot.md",
            link: "pale_blue_dot.md",
        },
    },
    {
        uid: 10,
        from: "Pablo-Diego-maradona-diesa-rodriguez@example.com",
        to: ["Pablo-Diego-José-Francisco-de-soya@example.com"],
        subject: "[info:888] ABC EQUIPMENT COMPANY",
        date: 1577745000,
        body: "夢にくる 母をかへすか 郭公<br/><br/>\
        宝井其角 (1661–1707)",
    },
];

export default mockData;
