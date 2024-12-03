const questions = [
{
question: `Den 10:e December varje år äger Stadshusets mest kända
evenemang rum, Nobelfesten. Idag hålls Nobelmiddagen i Blå Hallen
men stämmer det att den tidigare ägt rum i Gyllene Salen?`,
alternatives: ["Sant", "Falskt"],
answers: [0],
description: [
`Det var 1974 som antalet gäster till Nobelfesten vuxit så pass mycket att beslutet togs att permanent flytta middagen ner från Gyllene Salen till Blå Hallen. Det var dock inte första gången middagen flyttats till Blå Hallen utan där har den även ägt rum bl.a under 50-års jubileumet 1951.`,
],
},
{
question: `Blå Hallen är ett av Stadshusets mest berömda rum. Den har har en yta på 1500 kvadratmeter och är starkt influerad av italensk renesans vilket tydligt speglas i bl.a pelargången som omringar hallen. <br>Men hur kommer det sig att Blå Hallen kallas för just Blå Hallen, även fast att den inte är särskilt blå alls?`,
alternatives: [
`Blå var arkitekten Ragnar Östbergs favoritfärg och han ville därför att rummet skulle spegla detta och ha den färgen samt döpas till Blå Hallen,
men han fick avslag av regeringen som tyckte detta var alltför kontroversiellt.`,
`Blå Hallens väggar var från början täckta i sametsgardiner utformade efter svenska flaggans färger, gul och blå.
Eftersom textiler slits snabbare än andra material har dessa gardiner tyvärr tillslut behövts tas ner och man har
ännu inte lyckats återskapa några ersättare för Blå Hallens enorma väggar.`,
`Arkitekten Ragnar Östberg ville att golvet och väggarna i Blå Hallen skulle spegla Stockholms sjöar och hav, 
väggarna skulle därför täckas i blå puts. Men en dag när arkitekten blickade över, den ännu inte färdigställda, Blå Hallen
så tyckte han att det fanns något mycket vackert i de nakna tegelväggarna. Han beslutade då att inte täcka över dem.`,
`Arkitekten hade en mycket dålig handstil och den 'Grå Hallen', som den egentligen skulle hetat, uppfattades som den Blå Hallen
och kallades för detta av alla som arbetade på bygget. Sedan blev det en snöbollseffekt där alla inblandade kallade hallen för detta
och det var då enklare att låta namnet bestå än att försöka sig på att ändra något.`,
],
answers: [2],
description: [
`När arkitekten väl hade ändrat sin uppfattning om Blå Hallens utseende var det försent att försöka ändra på namnet.
Blå Hallens namn stog redan i alla projektets ritningar, och det hade t.o.m skrivits om Blå Hallen i tidningarna, 
att försöka ändra på Blå Hallens namn nu ansågs vara på gränsen till omöjligt.`,
],
},
{
question: `På Gyllene Salens väggar hittar man bilder av händelser och betydelsefulla personer genom svensk historia.
Det rör sig om bl.a olika krig, konungar, biskopar, vetenskapsmänn och kulturpersoner.
Men vem är den stora kvinnan som har en hel vägg för sig själv i mitten av salen?`,
alternatives: [
`Marie Curie, den första kvinnliga Nobelpristagaren`,
`Mälardrottningen, en symbol av Stockholm`,
`Arkitektens första fru, Elsa Skoglund`,
`Drottning Victoria, Drottning till kung Gustav V som satt på tronen under byggnationen av Stadshusets`,
],
answers: [1],
description: [
`Mälardrottningen är en symbol av Stockholm och det sägs att konstnären Einar Forseth ska ha använt sig av
sin egna fru som inspirationskälla när han bildade Mälardrottningen.`,
],
},
{
question: `En vanlig missuppfattning är att nobelpriserna delas ut i Stocholms Stadshus under Nobelfesten, men det stämmer inte alls!
Alla nobelpris förutom fredspriset delas ut i konserthuset, men det har det inte alltid gjort. På vilka fler platser har Nobelpriset delats ut?`,
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
},
];

export default questions;
