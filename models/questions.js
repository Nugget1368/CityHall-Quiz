const questions = [
  {
    question: `Vilket år påbörjades byggnationen av Stockhoms Stadshus?`,
    alternatives: ["År. 1723", "År. 1809", "År. 1896", "År. 1911"],
    answers: [3],
    description: [`Byggnationen av Stockholms Stadshus påbörjades 1911 och det mycket påkostade bygget stog färdigt 1923, och öppnades upp för folket samma år.`],
    iscorrect: false,
  },
  {
    question: `Stämmer det att Stadshuset är byggt på den mark där den s.k Eldkvarn tidigare stog innan den brann ner?`,
    alternatives: ["Ja, det stämmer", "Nej, det är inte alls sant"],
    answers: [0],
    description: [`Stadshuset är byggt på Eldkvarnstomten som platsen faktiskt heter. På tomten stog det som i folkmun kallas för Eldkvarn, en ångkvarn som avsåg vattenånga. 1878 väcktes en kraftig brand i kvarnen, men kvarnen totalförstördes inte, utan var i bruk fram till 1906 då man började riva den för att få plats med ett visst Stadshus.`],
    iscorrect: false,
  },
  {
    question: `Vad heter arkitekten som har ritat Stockhoms Stadshus?`,
    alternatives: ["Ruben Västberg", "Ragnar Östberg", "Roger Nordman", "Robert Söderman"],
    answers: [1],
    description: [`1902 hölls en arkitekt-tävling som Ragnar Östberg vann, och han belönades med den stora äran att rita Stockholm Stadshus.`],
    iscorrect: false,
  },
  {
    question: `Den 10:e December varje år äger Stadshusets mest kända evenemang rum, Nobelfesten. Idag hålls Nobelmiddagen i Blå Hallen men stämmer det att den tidigare ägt rum i Gyllene Salen?`,
    alternatives: ["Sant", "Falskt"],
    answers: [0],
    description: [
      `Det var 1974 som antalet gäster till Nobelfesten vuxit så pass mycket att beslutet togs att permanent flytta middagen ner från Gyllene Salen till Blå Hallen. Det var dock inte första gången middagen flyttats till Blå Hallen utan där har den även ägt rum bl.a under 50-års jubileumet 1951.`,
    ],
    iscorrect: false,
  },
  {
    question: `En vanlig missuppfattning är att nobelpriserna delas ut i Stocholms Stadshus under Nobelfesten, men det stämmer inte alls! Alla nobelpris förutom fredspriset delas ut i konserthuset, men det har det inte alltid gjort. \n\nPå vilka fler platser har Nobelpriset delats ut?`,
    alternatives: [
      `Globen`,
      `Stockholmsmässan i Älvsjö`,
      `Kungliga Tekniska Högskolan i Stockholm`,
      `Grand Hôtel`,
    ],
    answers: [0, 1, 3],
    description: [
      `Den första Nobelcermonin ägde rum 1901 på Grand Hôtel i Stockholm.`,
      `1972 var Konserthuset stängt för renovering och Nobelpriset delades ut på Stockholmsmässan i Älvsjö, på den tiden hette det S:t Eriksmässan.`,
      `1991 firade man 90-årsjubileum i Globen.`,
    ],
    iscorrect: false,
  },
  {
    question: `Blå Hallen är ett av Stadshusets mest berömda rum. Den har har en yta på 1500 kvadratmeter och är starkt influerad av italiensk renässans vilket tydligt speglas i bl.a pelargången som omringar hallen. \n\nMen hur kommer det sig att Blå Hallen kallas för just Blå Hallen, även fast att den inte är särskilt blå alls?`,
    alternatives: [
      `Blå var arkitekten Ragnar Östbergs favoritfärg och han ville därför att rummet skulle spegla detta och ha den färgen samt döpas till Blå Hallen, men han fick avslag av regeringen som tyckte detta var alltför kontroversiellt.`,
      `Blå Hallens väggar var från början täckta i sametsgardiner utformade efter svenska flaggans färger, gul och blå. Eftersom textiler slits snabbare än andra material har dessa gardiner tyvärr tillslut behövts tas ner och man har ännu inte lyckats återskapa några ersättare för Blå Hallens enorma väggar.`,
      `Arkitekten Ragnar Östberg ville att golvet och väggarna i Blå Hallen skulle spegla Stockholms sjöar och hav, väggarna skulle därför täckas i blå puts. Men en dag när arkitekten blickade över, den ännu inte färdigställda, Blå Hallen så tyckte han att det fanns något mycket vackert i de nakna tegelväggarna. Han beslutade då att inte täcka över dem.`,
      `Arkitekten hade en mycket dålig handstil och den 'Grå Hallen', som den egentligen skulle hetat, uppfattades som den Blå Hallen och kallades för detta av alla som arbetade på bygget. Sedan blev det en snöbollseffekt där alla inblandade kallade hallen för detta och det var då enklare att låta namnet bestå än att försöka sig på att ändra något.`,
    ],
    answers: [2],
    description: [
      `När arkitekten väl hade ändrat sin uppfattning om Blå Hallens utseende var det försent att försöka ändra på namnet. Blå Hallens namn stog redan i alla projektets ritningar, och det hade t.o.m skrivits om Blå Hallen i tidningarna, att försöka ändra på Blå Hallens namn nu ansågs vara på gränsen till omöjligt.`,
    ],
    iscorrect: false,
  },
  {
    question: `Trappstegen i Blå Hallen-Trappen har specifika dimensioner och är lägre än vanliga trappsteg. Hur kommer det sig att den stora trappen i mitten av Blå Hallen är designad som den är?`,
    alternatives: ["De som arbetade under bygget läste fel på ritningarna för trappen, och som ett resultat blev trappstegen mycket lägre och trappan mycket längre", "Trappen är inspirerad av en trapp i det gamla slottet Tre Kronor, vars trappsteg är lägre än vanliga trappsteg", "Det var väldigt typiskt för Nationalromantiken att ha låga trappsteg", "Trappan är designad att vara så bekväm som möjligt att gå i"],
    answers: [3],
    description: [`Under byggnationen av Stadshuset, byggde Ragnar flertalet trätrappor. Därefter bad han sin fru och hennes vän att sätta på sig en klänning med högklackat, och gå upp och ner i trapporna för att därefter berätta för Ragnar vilken trappa de upplevde var den lättaste att gå i.`],
    iscorrect: false,
  },
  {
    question: `Om man tittar noga på Blå Hallens långa vägg, mittemot den stora trappan och Gyllene salen, så kan man mellan det 2:a och 3:e fönstret se en stjärna inristad i teglet. Hur kommer det sig att den stjärnan sitter där?`,
    alternatives: ["Stjärnan är en hyllning till Ragnar Östbergs bortgågna hund, som sägs vaka över Blå Hallen och allt som äger rum där.", "Arkitekten var mycket förtjust den vackra natthimlen och hur stjärnor och planeter är grupperade på ett sätt som människan inte riktigt kunde förstå sig på. Han tyckte därför att det var mycket vackert att i stadshusets rum ha diverse himlakroppar.", "Stjärnan ristades in som en protest av arbetarna på bygget, men eftersom man inte kan se stjärnan om man inte tittar väldigt noga på väggen så påträffades inte denna protest förnst långt efter bygget var klart.", "När hedersgäster under bl.a Nobelfesten går ner för den stora trappen kan de fästa blicken på stjärnan, och detta ska hjälpa de att bibehålla en god hållning."],
    answers: [1, 3],
    description: [`Det kan kännas mycket nervöst för såväl kungligheter som nobelpristagare att gå ner för den stora trappen i Blå Hallen, med tusentals människor som beaktar en. Stjärnan sägs därför var till god hjälp för diverse hedersgäster när de går ner för trappan.`],
    iscorrect: false,
  },
  {
    question: `På Gyllene Salens väggar hittar man bilder av händelser och betydelsefulla personer genom svensk historia. Det rör sig om bl.a olika krig, konungar, biskopar, vetenskapsmänn och kulturpersoner. \n\nMen vem är den stora kvinnan som har en hel vägg för sig själv i mitten av salen?`,
    alternatives: [
      `Marie Curie, den första kvinnliga Nobelpristagaren`,
      `Mälardrottningen, en symbol av Stockholm`,
      `Arkitektens första fru, Elsa Skoglund`,
      `Drottning Victoria, Drottning till kung Gustav V som satt på tronen under byggnationen av Stadshusets`,
    ],
    answers: [1],
    description: [
      `Mälardrottningen är en symbol av Stockholm och det sägs att konstnären Einar Forseth ska ha använt sig av sin egna fru som inspirationskälla när han bildade Mälardrottningen.`,
    ],
    iscorrect: false,
  },
  {
    question: `Arkitekten var starkt influerad av olika historiska arkitetur-stilar, och det finns tydliga spår av detta i alla husets rum. Vilka av följande stilar var arkitekten inpirerad av?`,
    alternatives: ["National Romantiken", "Gotisk stil", "Italiensk renässans", "Svensk Barock"],
    answers: [0, 2, 3],
    description: [`Den dominerande stilen är nationalromantiken som återfinns i mycket av Stadshusets konst och material.`, `Man kan se tydliga inlslag av italiensk renässans i bl.a Blå Hallen där man kan dra tydliga likheter med en itlaiensk innergård.`, `Man kan se hur arkitekten var mycket inspirerad av svensk barock och hur ett rum som är lågt i tak ofta följs av ett rum som är högt i tak, eller hur ett mörkt rum ofta följs av ett betydligt ljusare rum.`],
    iscorrect: false,
  },
  //Man kan ha en fråga om någon kung
  // {
  //   question: ``,
  //   alternatives: ["", ""],
  //   answers: [0],
  //   description: [``],
  //   iscorrect: false,
  // },
  // {
  //   question: ``,
  //   alternatives: ["", ""],
  //   answers: [0],
  //   description: [``],
  //   iscorrect: false,
  // },
  // {
  //   question: ``,
  //   alternatives: ["", ""],
  //   answers: [0],
  //   description: [``],
  //   iscorrect: false,
  // },
  // {
  //   question: ``,
  //   alternatives: ["", ""],
  //   answers: [0],
  //   description: [``],
  //   iscorrect: false,
  // },
  // {
  //   question: ``,
  //   alternatives: ["", ""],
  //   answers: [0],
  //   description: [``],
  //   iscorrect: false,
  // },
];

export default questions;
