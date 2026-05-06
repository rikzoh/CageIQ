// Fighter database, events, news, and odds.
// In future, this will be replaced by Supabase database queries
// + live Polymarket API calls. For now, this is the static seed data.

const WEIGHT_LBS={"HW":265,"LHW":205,"MW":185,"WW":170,"LW":155,"FW":145,"BW":135,"FlyW":125,"WSW":115,"WFW":125,"WBW":135};
const DIVISIONS={"HW":"Heavyweight","LHW":"Light Heavyweight","MW":"Middleweight","WW":"Welterweight","LW":"Lightweight","FW":"Featherweight","BW":"Bantamweight","FlyW":"Flyweight","WSW":"Women's Strawweight","WFW":"Women's Flyweight","WBW":"Women's Bantamweight"};

// ============ FIGHTER DATABASE ============
const FIGHTERS_FULL=[
{n:"Tom Aspinall",d:"HW",c:"ENG",r:0,nk:"",rec:"15-3-0",age:32,reach:"78\"",height:"6'5\"",stance:"Orthodox",slpm:"5.34",sacc:"62%",sapm:"1.96",sdef:"62%",tdavg:"1.62",tdacc:"60%",tddef:"100%",subavg:"1.6",style:"Striker · BJJ Black Belt · Explosive Finisher",last5:[{r:"W",o:"Curtis Blaydes",m:"KO",rd:1,date:"Jul 2024"},{r:"W",o:"Sergei Pavlovich",m:"KO",rd:1,date:"Nov 2023"},{r:"W",o:"Marcin Tybura",m:"TKO",rd:1,date:"Jul 2023"},{r:"L",o:"Curtis Blaydes",m:"TKO",rd:1,date:"Jul 2022"},{r:"W",o:"Alexander Volkov",m:"Sub",rd:1,date:"Mar 2022"}],bio:"Inherited HW belt when Jon Jones retired June 2025. British powerhouse with KO power and BJJ. Most explosive HW finisher in the division."},
{n:"Ciryl Gane",d:"HW",c:"FRA",r:1,nk:"Bon Gamin",rec:"13-2-0",age:34,reach:"81\"",height:"6'4\"",stance:"Orthodox",slpm:"5.10",sacc:"55%",sapm:"3.56",sdef:"55%",tdavg:"0.34",tdacc:"50%",tddef:"57%",subavg:"0",style:"Technical Striker · Footwork · Muay Thai"},
{n:"Sergei Pavlovich",d:"HW",c:"RUS",r:2,rec:"19-3-0",age:34,style:"Heavy Hands · KO Power"},
{n:"Curtis Blaydes",d:"HW",c:"USA",r:3,nk:"Razor",rec:"19-5-0",age:35,style:"Wrestler · Top Pressure"},
{n:"Alexander Volkov",d:"HW",c:"RUS",r:4,nk:"Drago",rec:"38-11-0",age:37,style:"Tall Striker · Distance Manager"},
{n:"Jailton Almeida",d:"HW",c:"BRA",r:5,nk:"Malhadinho",rec:"21-3-0",age:34,style:"BJJ Specialist"},
{n:"Jon Jones",d:"HW",c:"USA",r:null,nk:"Bones",rec:"27-1-0",age:38,style:"Complete · GOAT Candidate · Retired",bio:"Retired June 2025 as undefeated HW champion."},
{n:"Derrick Lewis",d:"HW",c:"USA",r:6,nk:"The Black Beast"},
{n:"Marcin Tybura",d:"HW",c:"POL",r:7},{n:"Tai Tuivasa",d:"HW",c:"AUS",r:8,nk:"Bam Bam"},
{n:"Sergei Spivac",d:"HW",c:"MDA",r:9,nk:"Polar Bear"},{n:"Jairzinho Rozenstruik",d:"HW",c:"SUR",r:10,nk:"Bigi Boy"},
{n:"Alexandr Romanov",d:"HW",c:"MDA",r:11,nk:"King Kong"},{n:"Waldo Cortes-Acosta",d:"HW",c:"DOM",r:12},
{n:"Mick Parkin",d:"HW",c:"ENG",r:13},{n:"Sean Sharaf",d:"HW",c:"USA",r:14},
{n:"Stipe Miocic",d:"HW",c:"USA",r:null,bio:"Retired UFC HW Champion."},
{n:"Francis Ngannou",d:"HW",c:"CMR",r:null,nk:"The Predator",bio:"Former UFC HW Champion. Left for PFL/Boxing."},

{n:"Carlos Ulberg",d:"LHW",c:"NZL",r:0,rec:"13-1-0",age:34,reach:"79\"",height:"6'4\"",stance:"Orthodox",slpm:"5.20",sacc:"58%",sapm:"3.40",sdef:"58%",tdavg:"0.20",tdacc:"33%",tddef:"68%",subavg:"0",style:"City Kickboxing Striker · Pereira Disciple",bio:"Won LHW title April 11, 2026 at UFC 327 by KO1 over Procházka."},
{n:"Alex Pereira",d:"LHW",c:"BRA",r:1,nk:"Poatan",rec:"12-3-0",age:38,reach:"79\"",height:"6'4\"",stance:"Orthodox",slpm:"5.00",sacc:"61%",sapm:"3.50",sdef:"58%",tdavg:"0",tdacc:"0%",tddef:"55%",subavg:"0",style:"Devastating Striker · Former 2-Div Champ",bio:"Former LHW champ. Booked vs Ankalaev rematch June 14."},
{n:"Magomed Ankalaev",d:"LHW",c:"RUS",r:2,rec:"21-1-1",age:33,reach:"75\"",height:"6'3\"",stance:"Orthodox",slpm:"3.30",sacc:"54%",sapm:"2.10",sdef:"61%",tdavg:"1.80",tdacc:"50%",tddef:"77%",subavg:"0.4",style:"Pressure Wrestler · Heavy Hands",bio:"Former champ. Booked vs Pereira June 14."},
{n:"Jiri Prochazka",d:"LHW",c:"CZE",r:3,nk:"BJP",rec:"30-5-1",age:32,style:"Wild Striker · Samurai Mindset"},
{n:"Khalil Rountree Jr",d:"LHW",c:"USA",r:4,nk:"The War Horse",rec:"14-6-0",age:35,style:"Striker · Body Shot Specialist"},
{n:"Jamahal Hill",d:"LHW",c:"USA",r:5,nk:"Sweet Dreams"},
{n:"Aleksandar Rakic",d:"LHW",c:"AUT",r:6,nk:"Rocket"},
{n:"Anthony Smith",d:"LHW",c:"USA",r:7,nk:"Lionheart"},
{n:"Volkan Oezdemir",d:"LHW",c:"SUI",r:8,nk:"No Time"},
{n:"Azamat Murzakanov",d:"LHW",c:"RUS",r:9},{n:"Dominick Reyes",d:"LHW",c:"USA",r:10,nk:"The Devastator"},
{n:"Bogdan Guskov",d:"LHW",c:"UZB",r:11},{n:"Paul Craig",d:"LHW",c:"SCO",r:12,nk:"Bearjew"},
{n:"Nikita Krylov",d:"LHW",c:"UKR",r:13},{n:"Johnny Walker",d:"LHW",c:"BRA",r:14},
{n:"Jan Blachowicz",d:"LHW",c:"POL",r:15},

{n:"Khamzat Chimaev",d:"MW",c:"SWE",r:0,nk:"Borz",rec:"15-0-0",age:31,reach:"75\"",height:"6'2\"",stance:"Orthodox",slpm:"5.62",sacc:"62%",sapm:"1.80",sdef:"68%",tdavg:"4.20",tdacc:"55%",tddef:"82%",subavg:"1.5",style:"Wrestler · BJJ Brown Belt · Suffocating Top Game",bio:"Won MW title August 2025. Undefeated. Defending vs Strickland at UFC 328 May 9 2026."},
{n:"Sean Strickland",d:"MW",c:"USA",r:1,nk:"Tarzan",rec:"29-7-0",age:35,reach:"76\"",height:"6'1\"",stance:"Switch",slpm:"5.96",sacc:"40%",sapm:"3.20",sdef:"61%",tdavg:"0.30",tdacc:"33%",tddef:"75%",subavg:"0.1",style:"Volume Striker · Philly Shell · Iron Chin",bio:"Challenging Chimaev for the belt at UFC 328 May 9."},
{n:"Dricus du Plessis",d:"MW",c:"RSA",r:2,nk:"Stillknocks",rec:"23-3-0",age:32,reach:"76\"",height:"6'1\"",stance:"Switch",slpm:"5.12",sacc:"54%",sapm:"3.85",sdef:"50%",tdavg:"3.10",tdacc:"42%",tddef:"60%",subavg:"0.8",style:"Awkward Pressure · Cardio · Finishing Instinct",bio:"Lost belt to Chimaev August 2025."},
{n:"Israel Adesanya",d:"MW",c:"NZL",r:3,nk:"The Last Stylebender",rec:"24-5-0",age:36,reach:"80\"",height:"6'4\"",stance:"Switch",slpm:"3.92",sacc:"49%",sapm:"3.10",sdef:"61%",tdavg:"0.10",tdacc:"33%",tddef:"66%",subavg:"0.1",style:"Counter Striker · Range Specialist",bio:"Former MW champ. Style Bender."},
{n:"Nassourdine Imavov",d:"MW",c:"FRA",r:4,rec:"15-4-0",age:31,style:"Technical Striker · Russian Sambo Base"},
{n:"Robert Whittaker",d:"MW",c:"AUS",r:5,nk:"The Reaper",rec:"26-8-0",age:35,style:"Crisp Striker · Footwork · Heavy Body Kicks"},
{n:"Caio Borralho",d:"MW",c:"BRA",r:6,nk:"The Natural"},
{n:"Anthony Hernandez",d:"MW",c:"USA",r:7,nk:"Fluffy"},
{n:"Brendan Allen",d:"MW",c:"USA",r:8,nk:"All In"},
{n:"Marvin Vettori",d:"MW",c:"ITA",r:9},{n:"Roman Dolidze",d:"MW",c:"GEO",r:10},
{n:"Jared Cannonier",d:"MW",c:"USA",r:11,nk:"The Killa Gorilla"},
{n:"Jack Hermansson",d:"MW",c:"SWE",r:12,nk:"The Joker"},
{n:"Paulo Costa",d:"MW",c:"BRA",r:13,nk:"Borrachinha"},
{n:"Reinier de Ridder",d:"MW",c:"NED",r:14,nk:"RDR"},
{n:"Chris Weidman",d:"MW",c:"USA",r:15},{n:"Bo Nickal",d:"MW",c:"USA"},

{n:"Islam Makhachev",d:"WW",c:"RUS",r:0,rec:"28-1-0",age:34,reach:"70\"",height:"5'10\"",stance:"Southpaw",slpm:"3.05",sacc:"55%",sapm:"1.80",sdef:"60%",tdavg:"3.10",tdacc:"58%",tddef:"86%",subavg:"1.2",style:"Sambo · Dominant Wrestler · P4P #1",bio:"Won WW title from JDM at UFC 322 Nov 2025. 2-division champ. Booked vs Edwards June 14."},
{n:"Jack Della Maddalena",d:"WW",c:"AUS",r:1,nk:"JDM",rec:"17-3-0",age:29,reach:"71\"",height:"5'10\"",stance:"Orthodox",slpm:"5.40",sacc:"54%",sapm:"3.80",sdef:"55%",tdavg:"0.20",tdacc:"33%",tddef:"40%",subavg:"0",style:"Boxing · Hand Speed · KO Power",bio:"Lost belt to Makhachev Nov 2025."},
{n:"Belal Muhammad",d:"WW",c:"USA",r:2,rec:"24-5-0",age:36,style:"Pressure Grinder · Volume · Chin"},
{n:"Shavkat Rakhmonov",d:"WW",c:"KAZ",r:3,nk:"Nomad",rec:"19-0-0",age:31,reach:"72\"",height:"6'0\"",stance:"Orthodox",slpm:"4.80",sacc:"58%",sapm:"2.20",sdef:"62%",tdavg:"3.50",tdacc:"60%",tddef:"75%",subavg:"1.8",style:"Complete Fighter · Finisher · Undefeated"},
{n:"Kamaru Usman",d:"WW",c:"NGA",r:4,nk:"The Nigerian Nightmare",rec:"20-5-0",age:38,style:"Wrestle-Boxer · Former GOAT WW"},
{n:"Leon Edwards",d:"WW",c:"ENG",r:5,nk:"Rocky",rec:"22-5-0",age:34,reach:"74\"",height:"6'0\"",stance:"Switch",slpm:"3.42",sacc:"46%",sapm:"2.40",sdef:"60%",tdavg:"1.40",tdacc:"45%",tddef:"68%",subavg:"0.4",style:"Patient Striker · Counter · Switch Stance",bio:"Former champ. Booked vs Makhachev June 14."},
{n:"Sean Brady",d:"WW",c:"USA",r:6},
{n:"Ian Machado Garry",d:"WW",c:"IRL",r:7,nk:"The Future"},
{n:"Joaquin Buckley",d:"WW",c:"USA",r:8,nk:"New Mansa"},
{n:"Carlos Prates",d:"WW",c:"BRA",r:9,nk:"The Nightmare"},
{n:"Geoff Neal",d:"WW",c:"USA",r:10},{n:"Michael Page",d:"WW",c:"ENG",r:11,nk:"MVP"},
{n:"Gilbert Burns",d:"WW",c:"BRA",r:12,nk:"Durinho"},
{n:"Colby Covington",d:"WW",c:"USA",r:13,nk:"Chaos"},
{n:"Stephen Thompson",d:"WW",c:"USA",r:14,nk:"Wonderboy"},
{n:"Vicente Luque",d:"WW",c:"BRA",r:15},

{n:"Ilia Topuria",d:"LW",c:"ESP",r:0,nk:"El Matador",rec:"17-0-0",age:29,reach:"69\"",height:"5'7\"",stance:"Orthodox",slpm:"6.80",sacc:"56%",sapm:"3.10",sdef:"63%",tdavg:"1.80",tdacc:"55%",tddef:"82%",subavg:"0.6",style:"KO Power · Boxing · BJJ · Undefeated",bio:"Undisputed LW champ. 17-0. Defending vs Gaethje (interim) at UFC White House June 14."},
{n:"Justin Gaethje",d:"LW",c:"USA",r:1,nk:"The Highlight",rec:"26-5-0",age:37,reach:"70\"",height:"5'11\"",stance:"Orthodox",slpm:"6.40",sacc:"55%",sapm:"5.10",sdef:"55%",tdavg:"0.40",tdacc:"50%",tddef:"63%",subavg:"0",style:"Leg Kicks · Heavy Hands · BMF",bio:"Interim LW champ. Won interim Jan 24. Unifying with Topuria June 14."},
{n:"Charles Oliveira",d:"LW",c:"BRA",r:2,nk:"Do Bronx",rec:"35-11-0",age:35,style:"BJJ Black Belt · Most Subs in UFC History",bio:"Former LW champ. Lost to Topuria."},
{n:"Arman Tsarukyan",d:"LW",c:"ARM",r:3,rec:"23-3-0",age:29,style:"Wrestler · Russian Top Team"},
{n:"Max Holloway",d:"LW",c:"USA",r:4,nk:"Blessed",rec:"27-9-0",age:34,reach:"69\"",height:"5'11\"",stance:"Orthodox",slpm:"6.40",sacc:"49%",sapm:"4.50",sdef:"55%",tdavg:"0.10",tdacc:"33%",tddef:"83%",subavg:"0.4",style:"Volume King · Cardio · BMF"},
{n:"Dustin Poirier",d:"LW",c:"USA",r:5,nk:"The Diamond",rec:"30-9-0",age:36,style:"Boxer-Brawler · Veteran"},
{n:"Mateusz Gamrot",d:"LW",c:"POL",r:6,nk:"Gamer"},
{n:"Renato Moicano",d:"LW",c:"BRA",r:7,nk:"Money"},
{n:"Beneil Dariush",d:"LW",c:"USA",r:8},
{n:"Rafael Fiziev",d:"LW",c:"KAZ",r:9,nk:"Ataman"},
{n:"Dan Hooker",d:"LW",c:"NZL",r:10,nk:"The Hangman"},
{n:"Paddy Pimblett",d:"LW",c:"ENG",r:11,nk:"The Baddy"},
{n:"Bobby Green",d:"LW",c:"USA",r:12,nk:"King"},
{n:"Michael Chandler",d:"LW",c:"USA",r:13,nk:"Iron"},
{n:"Conor McGregor",d:"LW",c:"IRL",r:14,nk:"The Notorious",rec:"22-6-0",age:37,style:"Southpaw KO Artist · Former 2-Div Champ"},
{n:"Terrance McKinney",d:"LW",c:"USA",r:15,nk:"T.Wrecks"},
{n:"Khabib Nurmagomedov",d:"LW",c:"RUS",r:null,nk:"The Eagle",rec:"29-0-0",bio:"Retired undefeated. GOAT LW."},
{n:"Nate Diaz",d:"LW",c:"USA",r:null},{n:"Tony Ferguson",d:"LW",c:"USA",r:null,nk:"El Cucuy"},

{n:"Alexander Volkanovski",d:"FW",c:"AUS",r:0,nk:"The Great",rec:"27-4-0",age:37,reach:"71\"",height:"5'6\"",stance:"Orthodox",slpm:"6.20",sacc:"56%",sapm:"3.40",sdef:"60%",tdavg:"1.60",tdacc:"45%",tddef:"63%",subavg:"0.2",style:"Complete Fighter · Cardio Monster",bio:"Reclaimed FW belt. Volk back on top after Topuria moved up."},
{n:"Movsar Evloev",d:"FW",c:"RUS",r:1,rec:"19-0-0",age:31,style:"Wrestler · Undefeated · Pressure"},
{n:"Diego Lopes",d:"FW",c:"BRA",r:2},
{n:"Brian Ortega",d:"FW",c:"USA",r:3,nk:"T-City"},
{n:"Yair Rodriguez",d:"FW",c:"MEX",r:4,nk:"El Pantera"},
{n:"Lerone Murphy",d:"FW",c:"ENG",r:5,nk:"The Miracle"},
{n:"Aljamain Sterling",d:"FW",c:"USA",r:6,nk:"Funk Master"},
{n:"Arnold Allen",d:"FW",c:"ENG",r:7,nk:"Almighty"},
{n:"Calvin Kattar",d:"FW",c:"USA",r:8},
{n:"Giga Chikadze",d:"FW",c:"GEO",r:9,nk:"Ninja"},
{n:"Bryce Mitchell",d:"FW",c:"USA",r:10,nk:"Thug Nasty"},
{n:"Dan Ige",d:"FW",c:"USA",r:11,nk:"50K"},
{n:"Josh Emmett",d:"FW",c:"USA",r:12},
{n:"Sodiq Yusuff",d:"FW",c:"NGA",r:13,nk:"Super"},
{n:"Youssef Zalal",d:"FW",c:"MAR",r:14},
{n:"Melquizael Costa",d:"FW",c:"BRA",r:15},

{n:"Petr Yan",d:"BW",c:"RUS",r:0,nk:"No Mercy",rec:"19-5-0",age:32,reach:"67\"",height:"5'7\"",stance:"Orthodox",slpm:"5.50",sacc:"54%",sapm:"3.60",sdef:"61%",tdavg:"1.10",tdacc:"55%",tddef:"75%",subavg:"0.2",style:"Boxing · Body Work · Combinations",bio:"Reclaimed BW title at UFC 323 Dec 2025."},
{n:"Merab Dvalishvili",d:"BW",c:"GEO",r:1,nk:"The Machine",rec:"21-5-0",age:34,reach:"66\"",height:"5'6\"",stance:"Switch",slpm:"5.80",sacc:"45%",sapm:"3.60",sdef:"55%",tdavg:"5.90",tdacc:"40%",tddef:"63%",subavg:"0.2",style:"Wrestling Pace · Cardio Freak",bio:"Lost belt to Yan after 14-fight win streak."},
{n:"Sean O'Malley",d:"BW",c:"USA",r:2,nk:"Suga",rec:"18-2-0",age:31,reach:"72\"",height:"5'11\"",stance:"Switch",slpm:"5.80",sacc:"58%",sapm:"3.10",sdef:"63%",tdavg:"0",tdacc:"0%",tddef:"61%",subavg:"0.4",style:"Range Striker · Long for Division"},
{n:"Cory Sandhagen",d:"BW",c:"USA",r:3,nk:"The Sandman"},
{n:"Umar Nurmagomedov",d:"BW",c:"RUS",r:4},
{n:"Marlon Vera",d:"BW",c:"ECU",r:5,nk:"Chito"},
{n:"Henry Cejudo",d:"BW",c:"USA",r:6,nk:"Triple C"},
{n:"Deiveson Figueiredo",d:"BW",c:"BRA",r:7,nk:"Daico"},
{n:"Song Yadong",d:"BW",c:"CHN",r:8},
{n:"Mario Bautista",d:"BW",c:"USA",r:9},
{n:"Kyler Phillips",d:"BW",c:"USA",r:10,nk:"The Matrix"},
{n:"Rob Font",d:"BW",c:"USA",r:11},
{n:"Said Nurmagomedov",d:"BW",c:"RUS",r:12},
{n:"Jonathan Martinez",d:"BW",c:"USA",r:13},
{n:"Pedro Munhoz",d:"BW",c:"BRA",r:14},
{n:"Ricky Simon",d:"BW",c:"USA",r:15},
{n:"Dominick Cruz",d:"BW",c:"USA",r:null,nk:"The Dominator"},

{n:"Joshua Van",d:"FlyW",c:"MMR",r:0,rec:"16-2-0",age:24,reach:"68\"",height:"5'7\"",stance:"Orthodox",slpm:"5.90",sacc:"50%",sapm:"3.80",sdef:"58%",tdavg:"0.40",tdacc:"50%",tddef:"75%",subavg:"0",style:"Volume Striker · Pressure",bio:"Won FlyW title at UFC 323 Dec 2025 by KO1 over Pantoja. Burmese-American, youngest current champion."},
{n:"Alexandre Pantoja",d:"FlyW",c:"BRA",r:1,nk:"The Cannibal",rec:"30-6-0",age:35,style:"BJJ Black Belt · Complete · 5x Title Defenses",bio:"Lost belt to Van by KO1."},
{n:"Tatsuro Taira",d:"FlyW",c:"JPN",r:2,rec:"16-1-0",age:25,style:"Submission Grappler",bio:"Challenging Van at UFC 328 May 9."},
{n:"Brandon Royval",d:"FlyW",c:"USA",r:3,nk:"Raw Dawg"},
{n:"Brandon Moreno",d:"FlyW",c:"MEX",r:4,nk:"The Assassin Baby"},
{n:"Amir Albazi",d:"FlyW",c:"IRQ",r:5,nk:"The Prince"},
{n:"Manel Kape",d:"FlyW",c:"ANG",r:6,nk:"Starboy"},
{n:"Kai Kara-France",d:"FlyW",c:"NZL",r:7,nk:"Don't Blink"},
{n:"Tim Elliott",d:"FlyW",c:"USA",r:8},
{n:"Matheus Nicolau",d:"FlyW",c:"BRA",r:9},
{n:"Alex Perez",d:"FlyW",c:"USA",r:10},
{n:"Steve Erceg",d:"FlyW",c:"AUS",r:11},
{n:"Muhammad Mokaev",d:"FlyW",c:"RUS",r:12},
{n:"Charles Johnson",d:"FlyW",c:"USA",r:13},
{n:"Asu Almabayev",d:"FlyW",c:"KAZ",r:14},
{n:"Cody Durden",d:"FlyW",c:"USA",r:15},

{n:"Mackenzie Dern",d:"WSW",c:"USA",r:0,rec:"15-5-0",age:32,reach:"63\"",height:"5'4\"",stance:"Orthodox",slpm:"3.60",sacc:"45%",sapm:"3.40",sdef:"50%",tdavg:"1.80",tdacc:"50%",tddef:"55%",subavg:"2.4",style:"BJJ Black Belt · World-Class Grappler",bio:"Won WSW title Oct 2025."},
{n:"Zhang Weili",d:"WSW",c:"CHN",r:1,nk:"Magnum",rec:"26-4-0",age:36,style:"Power Striker · Wrestling",bio:"Vacated to move up."},
{n:"Tatiana Suarez",d:"WSW",c:"USA",r:2},
{n:"Yan Xiaonan",d:"WSW",c:"CHN",r:3,nk:"Fury"},
{n:"Carla Esparza",d:"WSW",c:"USA",r:4,nk:"Cookie Monster"},
{n:"Amanda Lemos",d:"WSW",c:"BRA",r:5},
{n:"Virna Jandiroba",d:"WSW",c:"BRA",r:6,nk:"Carcara"},
{n:"Tecia Pennington",d:"WSW",c:"USA",r:7},
{n:"Iasmin Lucindo",d:"WSW",c:"BRA",r:8},
{n:"Loopy Godinez",d:"WSW",c:"MEX",r:9},
{n:"Gillian Robertson",d:"WSW",c:"CAN",r:10,nk:"The Savage"},
{n:"Marina Rodriguez",d:"WSW",c:"BRA",r:11},
{n:"Rose Namajunas",d:"WSW",c:"USA",r:null,nk:"Thug Rose"},

{n:"Valentina Shevchenko",d:"WFW",c:"KGZ",r:0,nk:"Bullet",rec:"25-4-1",age:38,reach:"67\"",height:"5'5\"",stance:"Switch",slpm:"3.94",sacc:"49%",sapm:"1.85",sdef:"66%",tdavg:"1.42",tdacc:"55%",tddef:"81%",subavg:"0.5",style:"Muay Thai · Multi-discipline · GOAT WFW"},
{n:"Manon Fiorot",d:"WFW",c:"FRA",r:1,nk:"The Beast"},
{n:"Natalia Silva",d:"WFW",c:"BRA",r:2},
{n:"Erin Blanchfield",d:"WFW",c:"USA",r:3,nk:"Cold Blooded"},
{n:"Alexa Grasso",d:"WFW",c:"MEX",r:4},
{n:"Maycee Barber",d:"WFW",c:"USA",r:5,nk:"The Future"},
{n:"Tracy Cortez",d:"WFW",c:"USA",r:6},
{n:"Jasmine Jasudavicius",d:"WFW",c:"CAN",r:7},
{n:"Casey O'Neill",d:"WFW",c:"SCO",r:8,nk:"King"},
{n:"Jessica Andrade",d:"WFW",c:"BRA",r:9,nk:"Bate Estaca"},

{n:"Kayla Harrison",d:"WBW",c:"USA",r:0,rec:"19-1-0",age:35,reach:"71\"",height:"5'8\"",stance:"Southpaw",slpm:"4.20",sacc:"55%",sapm:"2.10",sdef:"55%",tdavg:"4.80",tdacc:"75%",tddef:"80%",subavg:"2.5",style:"2x Olympic Gold Judo · Submission Threat",bio:"Won WBW title June 2025. 2x Olympic gold medalist. Recovering from neck surgery."},
{n:"Amanda Nunes",d:"WBW",c:"BRA",r:1,nk:"The Lioness",rec:"23-5-0",age:37,style:"GOAT WMMA · Power · Boxing",bio:"Came out of retirement. Booked vs Harrison TBA."},
{n:"Julianna Pena",d:"WBW",c:"USA",r:2,nk:"The Venezuelan Vixen"},
{n:"Raquel Pennington",d:"WBW",c:"USA",r:3,nk:"Rocky"},
{n:"Ketlen Vieira",d:"WBW",c:"BRA",r:4,nk:"Fenomeno"},
{n:"Holly Holm",d:"WBW",c:"USA",r:5,nk:"The Preacher's Daughter"},
{n:"Mayra Bueno Silva",d:"WBW",c:"BRA",r:6,nk:"Sheetara"},
{n:"Macy Chiasson",d:"WBW",c:"USA",r:7},
{n:"Norma Dumont",d:"WBW",c:"BRA",r:8,nk:"The Immortal"},
];

// ============ POLYMARKET ODDS (Real, May 2026) ============
// key: "FighterA|FighterB" → {a:%, b:%, vol:"$367K"}
const POLYMARKET={
  "Khamzat Chimaev|Sean Strickland":{a:75,b:16,vol:"$367K"},
  "Joshua Van|Tatsuro Taira":{a:42,b:53,vol:"$58K"},
  "Petr Yan|Umar Nurmagomedov":{a:59,b:16,vol:"$301K"},
  "Tom Aspinall|Ciryl Gane":{a:54,b:39,vol:"$98K"},
  "Islam Makhachev|Ian Machado Garry":{a:81,b:17,vol:"$37K"},
  "Islam Makhachev|Leon Edwards":{a:78,b:18,vol:"$45K"},
  "Ilia Topuria|Arman Tsarukyan":{a:71,b:25,vol:"$21K"},
  "Ilia Topuria|Justin Gaethje":{a:68,b:28,vol:"$120K"},
  "Alex Pereira|Magomed Ankalaev":{a:52,b:44,vol:"$180K"},
  "Shavkat Rakhmonov|Alexandre Pantoja":{a:49,b:30,vol:"$117K"},
  "Sean Brady|Joaquin Buckley":{a:58,b:34,vol:"$22K"},
};

// ============ EVENTS ============
const EVENTS=[
{name:"UFC 328",sub:"Chimaev vs Strickland",date:"2026-05-09",venue:"Prudential Center",location:"Newark, NJ",poster:"chimaev_strickland",fights:[
{a:"Khamzat Chimaev",b:"Sean Strickland",wc:"MW",isMain:true,isTitle:true,aIsChamp:true},
{a:"Joshua Van",b:"Tatsuro Taira",wc:"FlyW",isMain:false,isTitle:true,aIsChamp:true},
{a:"Sean Brady",b:"Joaquin Buckley",wc:"WW",isMain:false,isTitle:false},
{a:"Alexander Volkov",b:"Waldo Cortes-Acosta",wc:"HW",isMain:false,isTitle:false},
]},
{name:"UFC Fight Night",sub:"Allen vs Costa",date:"2026-05-16",venue:"UFC Apex",location:"Las Vegas",poster:"allen_costa",fights:[
{a:"Arnold Allen",b:"Melquizael Costa",wc:"FW",isMain:true,isTitle:false},
]},
{name:"UFC Fight Night",sub:"Song vs Figueiredo",date:"2026-05-30",venue:"UFC Apex",location:"Las Vegas",poster:"song_fig",fights:[
{a:"Song Yadong",b:"Deiveson Figueiredo",wc:"BW",isMain:true,isTitle:false},
]},
{name:"UFC Freedom 250",sub:"At The White House",date:"2026-06-14",venue:"South Lawn",location:"Washington DC",poster:"freedom250",fights:[
{a:"Islam Makhachev",b:"Leon Edwards",wc:"WW",isMain:true,isTitle:true,aIsChamp:true},
{a:"Ilia Topuria",b:"Justin Gaethje",wc:"LW",isMain:false,isTitle:true,aIsChamp:true},
{a:"Alex Pereira",b:"Magomed Ankalaev",wc:"LHW",isMain:false,isTitle:false},
]},
];

// ============ RECENT RESULTS ============
const RECENT_RESULTS=[
{name:"UFC Fight Night: Sterling vs Zalal",date:"2026-04-25",venue:"UFC Apex, Las Vegas",fights:[
{winner:"Aljamain Sterling",loser:"Youssef Zalal",method:"UD",rd:5,wc:"FW"},
{winner:"Mayra Bueno Silva",loser:"Michelle Montague",method:"Sub R2",rd:2,wc:"WBW"},
]},
{name:"UFC Fight Night: Burns vs Malott",date:"2026-04-18",venue:"UFC Apex, Las Vegas",fights:[
{winner:"Mike Malott",loser:"Gilbert Burns",method:"TKO R3",rd:3,wc:"WW"},
{winner:"Renato Moicano",loser:"Beneil Dariush",method:"Sub R2",rd:2,wc:"LW"},
]},
{name:"UFC 327: Procházka vs Ulberg",date:"2026-04-11",venue:"Kaseya Center, Miami",fights:[
{winner:"Carlos Ulberg",loser:"Jiri Prochazka",method:"KO R1",rd:1,wc:"LHW",titleFight:true},
]},
{name:"UFC 324: Gaethje vs Pimblett",date:"2026-01-24",venue:"T-Mobile Arena, Las Vegas",fights:[
{winner:"Justin Gaethje",loser:"Paddy Pimblett",method:"TKO R5",rd:5,wc:"LW",titleFight:true,note:"Interim Title"},
]},
{name:"UFC 323",date:"2025-12-06",venue:"MGM Grand, Las Vegas",fights:[
{winner:"Petr Yan",loser:"Merab Dvalishvili",method:"UD",rd:5,wc:"BW",titleFight:true},
{winner:"Joshua Van",loser:"Alexandre Pantoja",method:"KO R1",rd:1,wc:"FlyW",titleFight:true},
]},
{name:"UFC 322: Makhachev vs JDM",date:"2025-11-15",venue:"Madison Square Garden, NYC",fights:[
{winner:"Islam Makhachev",loser:"Jack Della Maddalena",method:"UD",rd:5,wc:"WW",titleFight:true,note:"2-Div Champ"},
]},
];

// ============ NEWS (Real headlines May 2026) ============
const NEWS=[
{tag:"breaking",time:"2h ago",title:"UFC 328: Bad Blood Boils Over at Final Faceoff",summary:"Khamzat Chimaev and Sean Strickland needed extra security separating them at Friday's faceoff in Newark. The two former training partners have traded constant insults all week."},
{tag:"fight",time:"5h ago",title:"Polymarket: Chimaev Crowd Heavily Backs Champ at 75%",summary:"Polymarket bettors have placed over $367K on the UFC 328 main event, with Chimaev sitting at a heavy 75% implied probability vs Strickland's 16%. The gap reflects Chimaev's wrestling dominance."},
{tag:"injury",time:"8h ago",title:"Kayla Harrison Cleared to Train, Targets Late 2026 Return",summary:"WBW champ Kayla Harrison says her return to the octagon is imminent after recovering from neck surgery. Title defense vs Amanda Nunes likely rebooked for UFC 330 in August or MSG in November."},
{tag:"fight",time:"1d ago",title:"Topuria-Gaethje Title Unification Set for White House Card",summary:"The UFC's June 14 'Freedom 250' card at the White House South Lawn is officially headlined by Makhachev vs Edwards, Topuria vs Gaethje for undisputed LW gold, and Pereira vs Ankalaev rematch."},
{tag:"results",time:"1d ago",title:"Aljamain Sterling Returns with Win over Zalal at UFC Vegas 116",summary:"Sterling admitted he considered retirement before the fight but secured a unanimous decision win in the main event. He's now positioning for a top-5 FW contender slot."},
{tag:"general",time:"2d ago",title:"UFC EA Sports Game Release Date Leaked",summary:"EA Sports UFC 6 release date allegedly leaked. Expected to drop in fall 2026 with full roster and updated mechanics including Polymarket integration for prediction modes."},
{tag:"fight",time:"3d ago",title:"Joshua Van Defends Against Tatsuro Taira at UFC 328",summary:"Despite being champion, Van opens as the +160 underdog against Taira (-192) — bookmakers favor the Japanese grappler's submission game."},
{tag:"general",time:"4d ago",title:"Tom Aspinall: 'I Want Jon Jones Back to Settle It Forever'",summary:"HW champ Aspinall reiterates his stance that he'd come out of retirement to settle the GOAT debate with Jones, who retired in June 2025."},
{tag:"injury",time:"5d ago",title:"Alex Pereira Confirms 100% Healed Ahead of Ankalaev Rematch",summary:"Poatan posted training footage showing he's fully recovered ahead of the June 14 grudge match against Ankalaev at the White House event."},
{tag:"general",time:"1w ago",title:"Polymarket Becomes Official UFC Predictions Partner",summary:"The crypto-based prediction market platform announces deeper UFC integration. Real-time odds and over $1.9M trading volume across 20+ active markets."},
{tag:"results",time:"1w ago",title:"Carlos Ulberg KO's Procházka in Round 1 to Take LHW Title",summary:"At UFC 327 in Miami, Ulberg shocked the world with a 3:45 R1 KO over Jiri Prochazka, becoming the new LHW champion and continuing City Kickboxing's dominance."},
{tag:"fight",time:"2w ago",title:"Khamzat Chimaev Breaks UFC Total Strikes Record vs DDP",summary:"Chimaev landed 529 total strikes in his title-winning performance over Dricus du Plessis, breaking the all-time UFC record and answering all cardio questions."},
];

const TICKER_MSGS=[
"BREAKING — UFC 328 main event: Chimaev opens as -590 favorite at FanDuel",
"NEWS — Topuria 17-0, looking to add Gaethje to the highlight reel June 14",
"BETS — Polymarket UFC volume tops $1.9M for upcoming slate",
"NEWS — Aspinall calls out Pereira for cross-division superfight",
];

const P4P_TOP10=["Islam Makhachev","Ilia Topuria","Alex Pereira","Tom Aspinall","Khamzat Chimaev","Merab Dvalishvili","Alexander Volkanovski","Petr Yan","Magomed Ankalaev","Max Holloway"];

const HOT_MATCHUPS=[
{a:"Khamzat Chimaev",b:"Sean Strickland",tag:"MAY 9 · 75%"},
{a:"Joshua Van",b:"Tatsuro Taira",tag:"MAY 9 · 53%"},
{a:"Islam Makhachev",b:"Leon Edwards",tag:"JUN 14 · 78%"},
{a:"Ilia Topuria",b:"Justin Gaethje",tag:"JUN 14 · 68%"},
{a:"Alex Pereira",b:"Magomed Ankalaev",tag:"JUN 14 · 52%"},
{a:"Tom Aspinall",b:"Ciryl Gane",tag:"DREAM · 54%"},
];


export {
  WEIGHT_LBS,
  DIVISIONS,
  FIGHTERS_FULL,
  POLYMARKET,
  EVENTS,
  RECENT_RESULTS,
  NEWS,
  TICKER_MSGS,
  P4P_TOP10,
  HOT_MATCHUPS,
};
