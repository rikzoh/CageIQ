// ============ WEIGHT CLASS DATA ============
const WEIGHT_LBS={"HW":265,"LHW":205,"MW":185,"WW":170,"LW":155,"FW":145,"BW":135,"FlyW":125,"WSW":115,"WFW":125,"WBW":135};
const DIVISIONS={"HW":"Heavyweight","LHW":"Light Heavyweight","MW":"Middleweight","WW":"Welterweight","LW":"Lightweight","FW":"Featherweight","BW":"Bantamweight","FlyW":"Flyweight","WSW":"Women's Strawweight","WFW":"Women's Flyweight","WBW":"Women's Bantamweight"};

// ============ FIGHTER DATABASE ============
const FIGHTERS_FULL=[
{n:"Tom Aspinall",d:"HW",c:"ENG",r:0,nk:"",rec:"15-3-0",age:32,reach:"78\"",height:"6'5\"",stance:"Orthodox",slpm:"5.34",sacc:"62%",sapm:"1.96",sdef:"62%",tdavg:"1.62",tdacc:"60%",tddef:"100%",subavg:"1.6",style:"Striker · BJJ Black Belt · Explosive Finisher",last5:[{r:"W",o:"Ciryl Gane",m:"TKO",rd:2,date:"Oct 2025"},{r:"W",o:"Curtis Blaydes",m:"KO",rd:1,date:"Jul 2024"},{r:"W",o:"Sergei Pavlovich",m:"KO",rd:1,date:"Nov 2023"},{r:"W",o:"Marcin Tybura",m:"TKO",rd:1,date:"Jul 2023"},{r:"L",o:"Curtis Blaydes",m:"TKO",rd:1,date:"Jul 2022"}],bio:"Undisputed HW champion. Suffered eye injury during Oct 2025 title defense vs Gane at UFC 321 — currently sidelined and unable to compete at White House. Pereira vs Gane will determine his interim challenger."},
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
{n:"Alex Pereira",d:"HW",c:"BRA",r:1,nk:"Poatan",rec:"12-3-0",age:38,reach:"79\"",height:"6'4\"",stance:"Orthodox",slpm:"5.00",sacc:"61%",sapm:"3.50",sdef:"58%",tdavg:"0",tdacc:"0%",tddef:"55%",subavg:"0",style:"Devastating Striker · Multi-Division Threat",bio:"Former 2-time LHW champion and former MW champion. Vacated LHW title in April 2026 to move up to heavyweight. Faces Ciryl Gane for interim HW title at Freedom 250 on June 14 — a win makes him a 3-division UFC champion."},
{n:"Magomed Ankalaev",d:"LHW",c:"RUS",r:2,rec:"21-1-1",age:33,reach:"75\"",height:"6'3\"",stance:"Orthodox",slpm:"3.30",sacc:"54%",sapm:"2.10",sdef:"61%",tdavg:"1.80",tdacc:"50%",tddef:"77%",subavg:"0.4",style:"Pressure Wrestler · Heavy Hands",bio:"Former LHW champion. Lost belt to Pereira at UFC 320, then dropped the rematch. Without Pereira at LHW, he's the top contender pending matchmaking — likely faces new champ Carlos Ulberg next."},
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
{n:"Charles Oliveira",d:"LW",c:"BRA",r:2,nk:"Do Bronx",rec:"36-11-0",age:36,reach:"74\"",height:"5'10\"",stance:"Orthodox",slpm:"3.62",sacc:"54%",sapm:"3.18",sdef:"56%",tdavg:"2.20",tdacc:"40%",tddef:"50%",subavg:"3.4",style:"BJJ Black Belt · Most Submissions in UFC History · BMF Title Holder",last5:[{r:"W",o:"Max Holloway",m:"UD",rd:5,date:"Mar 2026"},{r:"W",o:"Mateusz Gamrot",m:"Sub",rd:2,date:"Oct 2025"},{r:"L",o:"Ilia Topuria",m:"KO",rd:1,date:"Jun 2025"},{r:"W",o:"Michael Chandler",m:"Sub",rd:2,date:"Nov 2024"},{r:"W",o:"Beneil Dariush",m:"TKO",rd:1,date:"Jun 2023"}],bio:"Former UFC Lightweight Champion and current BMF titleholder after dominating Max Holloway 50-45×3 at UFC 326 in March 2026. Holds UFC records for most submission wins (22), most finishes (21), and most performance bonuses (21). Ranked #3 LW and #11 P4P. Lost LW title fight to Topuria via R1 KO in June 2025 but rebounded with two dominant performances."},
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
{a:"Macy Chiasson",b:"Mayra Bueno Silva",wc:"WBW",isMain:false,isTitle:false},
]},
{name:"UFC Fight Night",sub:"Song vs Figueiredo",date:"2026-05-30",venue:"UFC Apex",location:"Las Vegas",poster:"song_fig",fights:[
{a:"Song Yadong",b:"Deiveson Figueiredo",wc:"BW",isMain:true,isTitle:false},
]},
{name:"UFC Freedom 250",sub:"Topuria vs Gaethje · At The White House",date:"2026-06-14",venue:"South Lawn",location:"Washington DC",poster:"freedom250",fights:[
{a:"Ilia Topuria",b:"Justin Gaethje",wc:"LW",isMain:true,isTitle:true,aIsChamp:true,note:"Title Unification"},
{a:"Alex Pereira",b:"Ciryl Gane",wc:"HW",isMain:false,isTitle:true,note:"Interim HW Title"},
{a:"Sean O'Malley",b:"Aiemann Zahabi",wc:"BW",isMain:false,isTitle:false},
{a:"Mauricio Ruffy",b:"Michael Chandler",wc:"LW",isMain:false,isTitle:false},
{a:"Bo Nickal",b:"Kyle Daukaus",wc:"MW",isMain:false,isTitle:false},
{a:"Diego Lopes",b:"Steve Garcia",wc:"FW",isMain:false,isTitle:false},
{a:"Derrick Lewis",b:"Josh Hokit",wc:"HW",isMain:false,isTitle:false},
]},
];

// ============ RECENT RESULTS ============
const RECENT_RESULTS=[
{name:"UFC Fight Night: Sterling vs Zalal",date:"2026-04-25",venue:"UFC Apex, Las Vegas",fights:[
{winner:"Aljamain Sterling",loser:"Youssef Zalal",method:"UD",rd:5,wc:"FW"},
{winner:"Mayra Bueno Silva",loser:"Michelle Montague",method:"Sub R2",rd:2,wc:"WBW"},
]},
{name:"UFC Fight Night: Burns vs Malott",date:"2026-04-18",venue:"Canada Life Centre, Winnipeg",fights:[
{winner:"Mike Malott",loser:"Gilbert Burns",method:"TKO R3",rd:3,wc:"WW"},
{winner:"Renato Moicano",loser:"Beneil Dariush",method:"Sub R2",rd:2,wc:"LW"},
]},
{name:"UFC 327: Procházka vs Ulberg",date:"2026-04-11",venue:"Kaseya Center, Miami",fights:[
{winner:"Carlos Ulberg",loser:"Jiri Prochazka",method:"KO R1",rd:1,wc:"LHW",titleFight:true,note:"Vacant LHW Title"},
{winner:"Josh Hokit",loser:"Curtis Blaydes",method:"UD",rd:3,wc:"HW"},
]},
{name:"UFC 326: Holloway vs Oliveira 2",date:"2026-03-07",venue:"T-Mobile Arena, Las Vegas",fights:[
{winner:"Charles Oliveira",loser:"Max Holloway",method:"UD",rd:5,wc:"LW",titleFight:true,note:"BMF Title"},
]},
{name:"UFC 325: Volkanovski vs Lopes 2",date:"2026-01-31",venue:"Qudos Bank Arena, Sydney",fights:[
{winner:"Alexander Volkanovski",loser:"Diego Lopes",method:"UD",rd:5,wc:"FW",titleFight:true},
]},
{name:"UFC 324: Gaethje vs Pimblett",date:"2026-01-24",venue:"T-Mobile Arena, Las Vegas",fights:[
{winner:"Justin Gaethje",loser:"Paddy Pimblett",method:"TKO R5",rd:5,wc:"LW",titleFight:true,note:"Interim LW Title"},
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
{tag:"breaking",time:"2h ago",title:"UFC 328: Bad Blood Boils Over at Final Faceoff",summary:"Khamzat Chimaev and Sean Strickland needed extra security separating them at Friday's faceoff in Newark. The middleweight champion enters as a heavy -590 favorite over the former titleholder."},
{tag:"fight",time:"5h ago",title:"Polymarket: Chimaev Crowd Heavily Backs Champ at 82%",summary:"Polymarket bettors have placed over $669K on the UFC 328 main event, with Chimaev sitting at 82% implied probability vs Strickland's 19%. The gap reflects Chimaev's wrestling dominance and undefeated 15-0 record."},
{tag:"fight",time:"6h ago",title:"Pereira Moves Up to Heavyweight, Faces Gane at White House",summary:"Alex Pereira vacated the LHW title in April to chase a 3rd division belt. He'll face Ciryl Gane for the interim HW title at Freedom 250 — Tom Aspinall remains undisputed champ but is sidelined with an eye injury suffered at UFC 321."},
{tag:"results",time:"2d ago",title:"Charles Oliveira Dominates Holloway, Wins BMF Title at UFC 326",summary:"Oliveira put on a grappling clinic, scoring a 50-45 unanimous decision sweep across all judges to claim the symbolic BMF belt. He becomes the 4th BMF titleholder and first to hold both LW and BMF titles in his career."},
{tag:"injury",time:"3d ago",title:"Tom Aspinall Sidelined: Eye Injury Forces Withdrawal from White House",summary:"HW champ Aspinall confirmed he can't compete at Freedom 250 following an eye injury suffered during his October title defense vs Gane at UFC 321. He'll relinquish the spot for Pereira's interim run."},
{tag:"fight",time:"1d ago",title:"Topuria-Gaethje Title Unification Locked In for June 14",summary:"The UFC's June 14 'Freedom 250' card at the White House South Lawn is officially headlined by Topuria vs Gaethje for undisputed LW gold. Topuria enters 17-0 looking to defend, Gaethje carries the interim belt won at UFC 324."},
{tag:"general",time:"4d ago",title:"EA Sports UFC 6 Releases June 19, Just Days After White House",summary:"EA Sports UFC 6 release date locked for June 19, 2026 — five days after Freedom 250. Updated mechanics, full 2026 roster, and Polymarket integration for prediction modes confirmed."},
{tag:"results",time:"1w ago",title:"Carlos Ulberg KO's Procházka in Round 1 to Win Vacant LHW Title",summary:"At UFC 327 in Miami, Ulberg shocked the world with a R1 KO over Jiri Prochazka to claim the vacant LHW title (vacated by Pereira). City Kickboxing's continued dominance shows no signs of slowing."},
{tag:"general",time:"4d ago",title:"UFC White House Card Set for 6-7 Fights, Cageside Limited",summary:"TKO Group's Ari Emanuel confirmed a 6-fight card on the South Lawn with under 5,000 attendees due to security. The Ellipse will host up to 85,000 spectators with large screens for public viewing."},
{tag:"fight",time:"3d ago",title:"Joshua Van Opens as Underdog Against Taira at UFC 328",summary:"Despite being champion, Van enters at +160 against Taira (-192) — bookmakers favor the Japanese grappler's submission game over the volume striking of the burmese-american champion."},
{tag:"results",time:"1w ago",title:"Carlos Prates KOs Jack Della Maddalena at UFC Perth",summary:"In a brutal upset, Prates handed the former WW champ JDM another loss in front of a hostile Australian crowd. Della Maddalena now faces a long road back after the Makhachev defeat in November."},
{tag:"general",time:"2w ago",title:"Polymarket UFC Volume Tops $1.9M for Upcoming Slate",summary:"The crypto-based prediction market continues deepening UFC integration. Real-time odds and 20+ active markets, with UFC 328 alone driving over $700K in trading volume."},
{tag:"general",time:"2w ago",title:"Khamzat Chimaev Breaks UFC Strikes Record vs DDP",summary:"Chimaev landed 529 total strikes in his title-winning performance over Dricus du Plessis at UFC's 2025 finale, breaking the all-time UFC record and answering every cardio question."},
];

const TICKER_MSGS=[
"BREAKING — UFC 328 main event: Chimaev opens as -590 favorite at FanDuel",
"NEWS — Topuria 17-0, looking to add Gaethje to the highlight reel June 14",
"BETS — Polymarket UFC volume tops $1.9M for upcoming slate",
"NEWS — Pereira moves to heavyweight, faces Gane for interim HW title",
"INJURY — Aspinall sidelined for White House with eye injury from UFC 321",
"RESULTS — Oliveira beats Holloway 50-45 across all 3 judges, wins BMF title",
];

const P4P_TOP10=["Islam Makhachev","Ilia Topuria","Khamzat Chimaev","Alex Pereira","Tom Aspinall","Merab Dvalishvili","Alexander Volkanovski","Charles Oliveira","Petr Yan","Max Holloway"];

const HOT_MATCHUPS=[
{a:"Khamzat Chimaev",b:"Sean Strickland",tag:"MAY 9 · 82%"},
{a:"Joshua Van",b:"Tatsuro Taira",tag:"MAY 9 · 42%"},
{a:"Ilia Topuria",b:"Justin Gaethje",tag:"JUN 14 · UNIF"},
{a:"Alex Pereira",b:"Ciryl Gane",tag:"JUN 14 · INT HW"},
{a:"Sean O'Malley",b:"Aiemann Zahabi",tag:"JUN 14"},
{a:"Michael Chandler",b:"Mauricio Ruffy",tag:"JUN 14"},
];

let isDark=true,currentDiv="LW";
const parlay=[];

function toggleTheme(){
  isDark=!isDark;
  document.body.classList.toggle('light',!isDark);
  document.getElementById('themeBtn').textContent=isDark?'☀ Light':'☾ Dark';
}

function switchTab(name,el){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  if(el)el.classList.add('active');
  document.getElementById('tab-'+name).classList.add('active');
  if(name==='rankings'&&!document.getElementById('rankings-container').innerHTML)renderDivisions();
  if(name==='news'&&!document.getElementById('news-container').innerHTML)renderNews();
  window.scrollTo({top:0,behavior:'smooth'});
}

function findFighter(name){
  const lower=name.toLowerCase().trim();
  return FIGHTERS_FULL.find(f=>f.n.toLowerCase()===lower);
}

function getPolymarket(a,b){
  return POLYMARKET[`${a}|${b}`]||(POLYMARKET[`${b}|${a}`]?{a:POLYMARKET[`${b}|${a}`].b,b:POLYMARKET[`${b}|${a}`].a,vol:POLYMARKET[`${b}|${a}`].vol}:null);
}

function showAutocomplete(inputId,value){
  const ac=document.getElementById('ac-'+inputId);
  const q=value.trim().toLowerCase();
  if(!q){ac.classList.remove('show');return}
  const matches=FIGHTERS_FULL.filter(f=>f.n.toLowerCase().includes(q)||(f.nk&&f.nk.toLowerCase().includes(q))).slice(0,12);
  if(!matches.length){ac.classList.remove('show');return}
  ac.innerHTML=matches.map(f=>`
    <div class="ac-item" onclick="pickFighter('${inputId}','${f.n.replace(/'/g,"\\'")}')">
      <div>
        <div class="ac-name">${f.n}</div>
        ${f.nk?`<div style="font-size:10px;color:var(--text3);font-style:italic;margin-top:1px">"${f.nk}"</div>`:''}
      </div>
      <div class="ac-meta">
        ${f.r===0?'<span class="ac-rank">★ CHAMP</span>':f.r?`<span class="ac-rank">#${f.r}</span>`:''}
        <span class="ac-div">${f.d}</span>
        <span class="ac-country">${f.c}</span>
      </div>
    </div>`).join('');
  ac.classList.add('show');
}

function pickFighter(inputId,name){
  document.getElementById(inputId).value=name;
  document.getElementById('ac-'+inputId).classList.remove('show');
  // Auto-search when picked from fighter search dropdown
  if(inputId==='fighter-search'){
    searchFighter();
  }
  // Auto-analyze when both matchup fighters are picked
  else if(inputId==='f1'||inputId==='f2'){
    const f1=document.getElementById('f1').value.trim();
    const f2=document.getElementById('f2').value.trim();
    if(f1&&f2)setTimeout(analyzeMatchup,150);
  }
}

document.addEventListener('click',e=>{
  if(!e.target.closest('.input-group'))document.querySelectorAll('.autocomplete').forEach(a=>a.classList.remove('show'));
});

// ============ EVENT POSTERS (SVG) ============
function buildPoster(ev){
  const main=ev.fights.find(f=>f.isMain)||ev.fights[0];
  const a=main.a.split(' ').pop().toUpperCase();
  const b=main.b.split(' ').pop().toUpperCase();
  const isFreedom=ev.poster==="freedom250";
  const isMainTitle=ev.poster==="chimaev_strickland";
  
  let bg;
  if(isFreedom){
    bg=`<defs>
      <linearGradient id="g_${ev.poster}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a3a8c"/><stop offset="50%" stop-color="#0a1845"/><stop offset="100%" stop-color="#7a0a18"/>
      </linearGradient>
      <radialGradient id="rg_${ev.poster}" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(255,255,255,.15)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#g_${ev.poster})"/>
    <rect width="800" height="450" fill="url(#rg_${ev.poster})"/>
    <!-- stars -->
    ${Array.from({length:30}).map(()=>{const x=Math.random()*800,y=Math.random()*200,r=Math.random()*1.5+0.5;return `<circle cx="${x}" cy="${y}" r="${r}" fill="white" opacity="${Math.random()*.6+.2}"/>`}).join('')}
    <!-- white house silhouette -->
    <path d="M 250 280 L 250 250 L 280 250 L 280 230 L 320 220 L 360 210 L 400 205 L 440 210 L 480 220 L 520 230 L 520 250 L 550 250 L 550 280 Z" fill="rgba(255,255,255,.08)"/>
    <rect x="380" y="220" width="40" height="60" fill="rgba(255,255,255,.05)"/>`;
  }else if(isMainTitle){
    bg=`<defs>
      <linearGradient id="g_${ev.poster}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#3a0a0a"/><stop offset="50%" stop-color="#1a0505"/><stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#g_${ev.poster})"/>
    <!-- Octagon -->
    <polygon points="400,50 600,150 600,350 400,400 200,350 200,150" fill="none" stroke="rgba(232,53,53,.3)" stroke-width="2"/>
    <polygon points="400,80 570,165 570,335 400,370 230,335 230,165" fill="none" stroke="rgba(232,53,53,.15)" stroke-width="1"/>`;
  }else{
    bg=`<defs>
      <linearGradient id="g_${ev.poster}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a1a25"/><stop offset="100%" stop-color="#0a0a10"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#g_${ev.poster})"/>
    <circle cx="200" cy="225" r="180" fill="rgba(232,53,53,.08)"/>
    <circle cx="600" cy="225" r="180" fill="rgba(59,130,246,.08)"/>`;
  }

  // Two fighter silhouettes facing off
  const silhouettes=`
    <!-- Left fighter silhouette -->
    <g transform="translate(170, 180)" opacity="0.85">
      <ellipse cx="0" cy="0" rx="22" ry="26" fill="rgba(232,53,53,.35)"/>
      <path d="M -30 30 Q -30 90 -25 130 L -10 200 L 10 200 L 25 130 Q 30 90 30 30 Z" fill="rgba(232,53,53,.35)"/>
      <path d="M -28 50 L -55 70 L -52 90 L -30 80 Z" fill="rgba(232,53,53,.45)"/>
      <path d="M 28 50 L 55 70 L 52 90 L 30 80 Z" fill="rgba(232,53,53,.45)"/>
    </g>
    <!-- Right fighter silhouette (mirrored) -->
    <g transform="translate(630, 180) scale(-1, 1)" opacity="0.85">
      <ellipse cx="0" cy="0" rx="22" ry="26" fill="rgba(59,130,246,.35)"/>
      <path d="M -30 30 Q -30 90 -25 130 L -10 200 L 10 200 L 25 130 Q 30 90 30 30 Z" fill="rgba(59,130,246,.35)"/>
      <path d="M -28 50 L -55 70 L -52 90 L -30 80 Z" fill="rgba(59,130,246,.45)"/>
      <path d="M 28 50 L 55 70 L 52 90 L 30 80 Z" fill="rgba(59,130,246,.45)"/>
    </g>
    <!-- VS -->
    <text x="400" y="220" font-family="Barlow Condensed,sans-serif" font-size="64" font-weight="900" fill="white" text-anchor="middle" opacity="0.95" style="text-shadow:0 0 20px rgba(232,53,53,0.8)">VS</text>
    <!-- Names -->
    <text x="155" y="380" font-family="Barlow Condensed,sans-serif" font-size="28" font-weight="900" fill="white" text-anchor="middle">${a}</text>
    <text x="645" y="380" font-family="Barlow Condensed,sans-serif" font-size="28" font-weight="900" fill="white" text-anchor="middle">${b}</text>
  `;
  
  return `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${bg}${silhouettes}</svg>`;
}

function renderEventPoster(ev,isHero){
  const cd=getCountdown(ev.date);
  const main=ev.fights.find(f=>f.isMain)||ev.fights[0];
  return `<div class="poster ${isHero?'hero-poster':''}" onclick="setMatchup('${main.a.replace(/'/g,"\\'")}','${main.b.replace(/'/g,"\\'")}')">
    ${buildPoster(ev)}
    <div class="poster-overlay">
      <div class="poster-top">
        <div class="poster-tag">${main.isTitle?'★ TITLE':isHero?'NEXT EVENT':ev.name.includes('Fight Night')?'FIGHT NIGHT':'PPV'}</div>
        <div class="poster-date">${formatDate(ev.date)}</div>
      </div>
      <div class="poster-bottom">
        <div class="poster-title">${ev.name}</div>
        <div class="poster-main">${ev.sub}</div>
        <div class="poster-venue">${ev.venue} · ${ev.location}</div>
      </div>
    </div>
  </div>`;
}

function renderTicker(){
  const msg=TICKER_MSGS[Math.floor(Math.random()*TICKER_MSGS.length)];
  document.getElementById('ticker-container').innerHTML=`
    <div class="ticker">
      <div class="ticker-label">LIVE</div>
      <div class="ticker-text">${msg}</div>
    </div>`;
}

function renderHero(){
  const today=new Date();
  const upcoming=EVENTS.filter(e=>new Date(e.date)>=today).sort((a,b)=>new Date(a.date)-new Date(b.date));
  if(!upcoming.length)return;
  const next=upcoming[0];
  const main=next.fights.find(f=>f.isMain)||next.fights[0];
  const cd=getCountdown(next.date);
  document.getElementById('hero-container').innerHTML=`
    <div class="card" style="background:linear-gradient(135deg,var(--bg2) 0%,var(--red-dim) 200%);border-color:var(--red);padding:24px;cursor:pointer;animation:fadeIn .5s ease" onclick="setMatchup('${main.a.replace(/'/g,"\\'")}','${main.b.replace(/'/g,"\\'")}')">
      <div style="font-size:11px;color:var(--red);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:2px;font-weight:600;margin-bottom:8px">Next Event · ${formatDate(next.date)}</div>
      <div class="display" style="font-size:36px;font-weight:900;line-height:1;margin-bottom:4px">${next.name}</div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:12px">${next.sub} · ${next.venue}, ${next.location}</div>
      <div class="display" style="font-size:22px;font-weight:700;color:var(--text)">${main.a} vs ${main.b}</div>
      ${cd?`<div class="countdown" style="margin-top:14px">
        <div class="countdown-box"><div class="countdown-num">${cd.d}</div><div class="countdown-label">Days</div></div>
        <div class="countdown-box"><div class="countdown-num">${cd.h}</div><div class="countdown-label">Hours</div></div>
        <div class="countdown-box"><div class="countdown-num">${cd.m}</div><div class="countdown-label">Mins</div></div>
      </div>`:''}
    </div>`;
}

function parseLocalDate(iso){
  const [y,m,d]=iso.split('-').map(Number);
  return new Date(y,m-1,d);
}

function getCountdown(d){
  const t=parseLocalDate(d).getTime()-Date.now();
  if(t<0)return null;
  return{d:Math.floor(t/86400000),h:Math.floor((t/3600000)%24),m:Math.floor((t/60000)%60)};
}

function renderDashStats(){
  const champs=FIGHTERS_FULL.filter(f=>f.r===0).length;
  const today=new Date();
  const upcoming=EVENTS.filter(e=>new Date(e.date)>=today).length;
  const undefeated=FIGHTERS_FULL.filter(f=>f.rec&&f.rec.endsWith("-0-0")&&parseInt(f.rec)>5).length;
  document.getElementById('dash-stats').innerHTML=`
    <div class="dash-stat"><div class="dash-stat-num">${champs}</div><div class="dash-stat-label">Active Champs</div></div>
    <div class="dash-stat"><div class="dash-stat-num">${upcoming}</div><div class="dash-stat-label">Upcoming Events</div></div>
    <div class="dash-stat"><div class="dash-stat-num">${FIGHTERS_FULL.length}</div><div class="dash-stat-label">Fighters Tracked</div></div>
    <div class="dash-stat"><div class="dash-stat-num">${undefeated}</div><div class="dash-stat-label">Undefeated</div></div>`;
}

function formatDate(iso){
  // Parse as local time to avoid timezone shifting (e.g. "2026-06-14" → June 14, not June 13)
  const [y,m,d]=iso.split('-').map(Number);
  const dt=new Date(y,m-1,d);
  return dt.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
}

function renderChampions(){
  const champs=FIGHTERS_FULL.filter(f=>f.r===0);
  document.getElementById('champs-grid').innerHTML=champs.map((c,i)=>`
    <div class="champ-card" style="animation-delay:${i*40}ms" onclick="quickFighter('${c.n.replace(/'/g,"\\'")}')">
      <div class="champ-belt">★ ${DIVISIONS[c.d]}</div>
      <div class="champ-name">${c.n}</div>
      <div class="champ-record">${c.rec||''} · ${c.c}</div>
      ${c.bio?`<div class="champ-since">${c.bio.split('.')[0]}</div>`:''}
    </div>`).join('');

  const counts={};
  FIGHTERS_FULL.forEach(f=>{if(f.r!==null)counts[f.c]=(counts[f.c]||0)+1});
  const champCounts={};
  champs.forEach(c=>champCounts[c.c]=(champCounts[c.c]||0)+1);
  const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,12);
  document.getElementById('country-board').innerHTML=sorted.map(([c,n],i)=>`
    <div class="country-row" style="animation-delay:${i*30}ms">
      <div class="country-flag">${c}</div>
      <div class="country-name">${champCounts[c]?champCounts[c]+' champion'+(champCounts[c]>1?'s':'')+' · ':''}${n} ranked fighter${n>1?'s':''}</div>
      <div class="country-count">${n}</div>
    </div>`).join('');
}

function renderP4P(){
  document.getElementById('p4p-grid').innerHTML=P4P_TOP10.map((name,i)=>{
    const f=FIGHTERS_FULL.find(x=>x.n===name);
    return `<div class="p4p-row" style="animation-delay:${i*30}ms" onclick="quickFighter('${name.replace(/'/g,"\\'")}')">
      <div class="p4p-rank">${i+1}</div>
      <div class="p4p-info">
        <div class="p4p-name">${name}</div>
        <div class="p4p-div">${f?DIVISIONS[f.d]:''}${f&&f.rec?' · '+f.rec:''}</div>
      </div>
    </div>`;
  }).join('');
}

function renderHotMatchups(){
  // Hot matchups removed from UI; keeping HOT_MATCHUPS data for potential future use
}

function renderEvents(){
  const today=new Date();
  const upcoming=EVENTS.filter(e=>new Date(e.date)>=today).sort((a,b)=>new Date(a.date)-new Date(b.date));
  document.getElementById('events-container').innerHTML=upcoming.map((ev,i)=>`
    <div class="event-card" style="animation-delay:${i*60}ms">
      <div class="event-header">
        <div>
          <div class="event-name">${ev.name}</div>
          <div style="font-size:13px;color:var(--text2);font-weight:500;margin-top:2px">${ev.sub}</div>
          <div class="event-venue">${ev.venue} · ${ev.location}</div>
        </div>
        <div class="event-date">${formatDate(ev.date)}</div>
      </div>
      ${ev.fights.map(f=>{
        const poly=getPolymarket(f.a,f.b);
        return `<div class="fight-row" onclick="setMatchup('${f.a.replace(/'/g,"\\'")}','${f.b.replace(/'/g,"\\'")}')">
          <div class="fighter-name ${f.aIsChamp?'champ':''}">${f.a}</div>
          <div class="fight-mid">
            ${poly?`<span class="poly-pill">${poly.a}%-${poly.b}%</span>`:''}
            ${f.isMain?'<span class="main-event-badge">MAIN</span>':''}
            ${f.isTitle?'<span class="title-badge">★ TITLE</span>':''}
            <span class="weight-class">${f.wc}</span>
          </div>
          <div class="fighter-name" style="text-align:right">${f.b}</div>
        </div>`;
      }).join('')}
    </div>`).join('');
  document.getElementById('results-container').innerHTML=RECENT_RESULTS.map((ev,i)=>`
    <div class="event-card" style="animation-delay:${i*60}ms">
      <div class="event-header">
        <div>
          <div class="event-name">${ev.name}</div>
          <div class="event-venue">${ev.venue}</div>
        </div>
        <div class="event-date">${formatDate(ev.date)}</div>
      </div>
      ${ev.fights.map(f=>`
        <div style="border-top:1px solid var(--border);padding:10px 0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
            <div class="fighter-name" style="color:var(--green);font-weight:600">${f.winner}</div>
            <div class="fight-mid">
              ${f.titleFight?'<span class="title-badge">★ TITLE</span>':''}
              <span class="weight-class">${f.wc}</span>
              <span class="vs">def.</span>
            </div>
            <div class="fighter-name" style="text-align:right;color:var(--text3)">${f.loser}</div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);font-family:'IBM Plex Mono',monospace;margin-top:4px"><span>${f.method}</span>${f.note?`<span style="color:var(--gold)">${f.note}</span>`:''}</div>
        </div>
      `).join('')}
    </div>`).join('');
}

function renderNews(){
  document.getElementById('news-container').innerHTML=NEWS.map((n,i)=>`
    <div class="news-card" style="animation-delay:${i*40}ms">
      <div class="news-header">
        <div class="news-tag ${n.tag}">${n.tag}</div>
        <div class="news-time">${n.time}</div>
      </div>
      <div class="news-title">${n.title}</div>
      <div class="news-summary">${n.summary}</div>
    </div>`).join('');
}

function renderDivisions(){
  document.getElementById('div-tabs').innerHTML=Object.keys(DIVISIONS).map(k=>`
    <div class="div-pill ${k===currentDiv?'active':''}" onclick="selectDiv('${k}',this)">${DIVISIONS[k]}</div>`).join('');
  showDivision(currentDiv);
}

function selectDiv(div,el){
  currentDiv=div;
  document.querySelectorAll('.div-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  showDivision(div);
}

function showDivision(div){
  const fighters=FIGHTERS_FULL.filter(f=>f.d===div&&f.r!==null).sort((a,b)=>a.r-b.r);
  document.getElementById('rankings-container').innerHTML=`<div class="ranking-list">${fighters.map((f,i)=>`
    <div class="rank-row ${f.r===0?'champion':''}" style="animation-delay:${i*25}ms" onclick="quickFighter('${f.n.replace(/'/g,"\\'")}')">
      <div class="rank-num">${f.r===0?'C':f.r}</div>
      <div class="rank-info">
        <div class="rank-name">${f.n}</div>
        <div class="rank-extra">${f.nk?`"${f.nk}" · `:''}${f.c}${f.rec?' · '+f.rec:''}</div>
      </div>
      ${f.rec?`<div class="rank-record">${f.rec.split(' ')[0]}</div>`:''}
    </div>`).join('')}</div>`;
}

function quickFighter(name){
  document.getElementById('fighter-search').value=name;
  switchTab('fighter',document.querySelectorAll('.tab')[6]);
  searchFighter();
}

function setMatchup(a,b){
  document.getElementById('f1').value=a;
  document.getElementById('f2').value=b;
  switchTab('matchup',document.querySelectorAll('.tab')[5]);
  setTimeout(analyzeMatchup,200);
}

// ============ MATCHUP ANALYSIS WITH WEIGHT CLASS HIERARCHY ============
function parsePercent(s){if(!s)return null;return parseFloat(s.replace('%',''))/100}
function parseFloat2(s){if(!s)return null;return parseFloat(s)}
function parseReach(s){if(!s)return null;return parseInt(s)}

function analyzeMatchup(){
  const f1Name=document.getElementById('f1').value.trim();
  const f2Name=document.getElementById('f2').value.trim();
  if(!f1Name||!f2Name)return;
  const f1=findFighter(f1Name),f2=findFighter(f2Name);
  if(!f1||!f2){
    document.getElementById('matchup-result').innerHTML=`<div class="card" style="color:var(--text2)">One or both fighters not found. Try the autocomplete suggestions.</div>`;
    return;
  }

  // Check Polymarket first - if exists, use it as primary
  const poly=getPolymarket(f1.n,f2.n);
  
  // Weight class hierarchy enforcement
  const w1=WEIGHT_LBS[f1.d],w2=WEIGHT_LBS[f2.d];
  const weightDiff=Math.abs(w1-w2);
  const sameDiv=f1.d===f2.d;
  // Cross-gender check
  const f1IsWomen=f1.d.startsWith("W")&&f1.d!=="WW";
  const f2IsWomen=f2.d.startsWith("W")&&f2.d!=="WW";
  const crossGender=f1IsWomen!==f2IsWomen;
  
  let warning=null;
  if(crossGender){
    warning="⚠ Cross-gender matchup — for entertainment only. Real-world fights don't occur across genders.";
  }else if(!sameDiv&&weightDiff>=30){
    warning=`⚠ Massive weight difference (${weightDiff} lbs). In real fights, the heavier fighter wins ~95% of the time regardless of skill.`;
  }else if(!sameDiv&&weightDiff>=15){
    warning=`⚠ ${weightDiff} lbs weight difference. Heavier fighter has significant advantage.`;
  }

  let f1Score=0,f2Score=0,edges=[];

  // WEIGHT CLASS — HUGE FACTOR
  if(weightDiff>0){
    const heavier=w1>w2?f1:f2;
    const lighter=w1>w2?f2:f1;
    if(weightDiff>=30){
      // Massive bonus to heavier
      if(heavier===f1)f1Score+=8;else f2Score+=8;
      edges.push(`${heavier.n.split(' ').pop()} has ${weightDiff}lb size advantage — overwhelming factor`);
    }else if(weightDiff>=15){
      if(heavier===f1)f1Score+=4;else f2Score+=4;
      edges.push(`${heavier.n.split(' ').pop()} has ${weightDiff}lb size advantage`);
    }else if(weightDiff>=5){
      if(heavier===f1)f1Score+=1.5;else f2Score+=1.5;
      edges.push(`${heavier.n.split(' ').pop()} ${weightDiff}lbs heavier`);
    }
  }

  // Striking comparison
  const f1slpm=parseFloat2(f1.slpm),f2slpm=parseFloat2(f2.slpm);
  if(f1slpm&&f2slpm){
    if(f1slpm>f2slpm+0.5){f1Score+=1.5;edges.push(`${f1.n.split(' ').pop()} lands ${(f1slpm-f2slpm).toFixed(1)} more sig strikes/min`)}
    else if(f2slpm>f1slpm+0.5){f2Score+=1.5;edges.push(`${f2.n.split(' ').pop()} lands ${(f2slpm-f1slpm).toFixed(1)} more sig strikes/min`)}
  }
  const f1sacc=parsePercent(f1.sacc),f2sacc=parsePercent(f2.sacc);
  if(f1sacc&&f2sacc){
    if(f1sacc>f2sacc+0.05){f1Score+=1;edges.push(`${f1.n.split(' ').pop()} more accurate striker (${f1.sacc} vs ${f2.sacc})`)}
    else if(f2sacc>f1sacc+0.05){f2Score+=1;edges.push(`${f2.n.split(' ').pop()} more accurate striker (${f2.sacc} vs ${f1.sacc})`)}
  }

  // Grappling
  const f1tdavg=parseFloat2(f1.tdavg),f2tdavg=parseFloat2(f2.tdavg);
  if(f1tdavg&&f2tdavg){
    if(f1tdavg>f2tdavg+1){f1Score+=1.5;edges.push(`${f1.n.split(' ').pop()} averages ${f1tdavg} TDs/15min vs ${f2tdavg}`)}
    else if(f2tdavg>f1tdavg+1){f2Score+=1.5;edges.push(`${f2.n.split(' ').pop()} averages ${f2tdavg} TDs/15min vs ${f1tdavg}`)}
  }
  const f1tddef=parsePercent(f1.tddef),f2tddef=parsePercent(f2.tddef);
  if(f1tddef&&f2tddef){
    if(f1tddef>f2tddef+0.1){f1Score+=1;edges.push(`${f1.n.split(' ').pop()} elite TD defense (${f1.tddef})`)}
    else if(f2tddef>f1tddef+0.1){f2Score+=1;edges.push(`${f2.n.split(' ').pop()} elite TD defense (${f2.tddef})`)}
  }
  const f1sub=parseFloat2(f1.subavg),f2sub=parseFloat2(f2.subavg);
  if(f1sub&&f2sub){
    if(f1sub>f2sub+0.5){f1Score+=0.5;edges.push(`${f1.n.split(' ').pop()} bigger sub threat (${f1.subavg} avg)`)}
    else if(f2sub>f1sub+0.5){f2Score+=0.5;edges.push(`${f2.n.split(' ').pop()} bigger sub threat (${f2.subavg} avg)`)}
  }

  // Reach
  const f1reach=parseReach(f1.reach),f2reach=parseReach(f2.reach);
  if(f1reach&&f2reach){
    const diff=Math.abs(f1reach-f2reach);
    if(diff>=3){
      if(f1reach>f2reach){f1Score+=1;edges.push(`${f1.n.split(' ').pop()} ${diff}" reach advantage`)}
      else{f2Score+=1;edges.push(`${f2.n.split(' ').pop()} ${diff}" reach advantage`)}
    }
  }

  // Champion bonus
  if(f1.r===0)f1Score+=0.5;
  if(f2.r===0)f2Score+=0.5;
  if(f1.rec&&f1.rec.endsWith("-0-0"))f1Score+=0.5;
  if(f2.rec&&f2.rec.endsWith("-0-0"))f2Score+=0.5;

  // Use Polymarket if available, override calculations
  let edgeFighter,winProb,edgeScore;
  if(poly){
    const polyTotal=poly.a+poly.b;
    const f1Prob=poly.a/polyTotal*100;
    const f2Prob=poly.b/polyTotal*100;
    if(poly.a>poly.b){
      edgeFighter=f1.n;
      winProb=Math.round(f1Prob);
      edgeScore=Math.min(10,Math.round(5+((poly.a-poly.b)/100)*8));
    }else{
      edgeFighter=f2.n;
      winProb=Math.round(f2Prob);
      edgeScore=Math.min(10,Math.round(5+((poly.b-poly.a)/100)*8));
    }
    if(edgeScore<3)edgeScore=3;
  }else{
    const totalScore=f1Score+f2Score;
    if(f1Score>=f2Score){
      edgeFighter=f1.n;
      edgeScore=Math.min(10,Math.round(5+((f1Score-f2Score)/Math.max(totalScore,1))*5));
      winProb=Math.round(50+((f1Score-f2Score)/Math.max(totalScore,1))*30);
    }else{
      edgeFighter=f2.n;
      edgeScore=Math.min(10,Math.round(5+((f2Score-f1Score)/Math.max(totalScore,1))*5));
      winProb=Math.round(50+((f2Score-f1Score)/Math.max(totalScore,1))*30);
    }
    if(edgeScore<3)edgeScore=3;
    if(winProb>92)winProb=92;
    // Cap weight class effect at 90% if extreme
    if(weightDiff>=30&&winProb<90)winProb=90;
  }

  let method="Decision";
  const edgeFighterObj=edgeFighter===f1.n?f1:f2;
  if(edgeFighterObj.style){
    const sty=edgeFighterObj.style.toLowerCase();
    if(sty.includes("ko")||sty.includes("striker"))method="KO/TKO";
    else if(sty.includes("bjj")||sty.includes("submission"))method="Submission";
    else if(sty.includes("wrestler"))method="Decision";
  }

  const f1Odds=edgeFighter===f1.n?'-'+(100+Math.round(winProb*1.8)):('+'+Math.round(winProb*1.5));
  const f2Odds=edgeFighter===f2.n?'-'+(100+Math.round(winProb*1.8)):('+'+Math.round(winProb*1.5));

  const breakdown=generateBreakdown(f1,f2,edgeFighter,edges,weightDiff,sameDiv,poly);
  const recommendation=generateRecommendation(f1,f2,edgeFighter,edgeScore,winProb,method,poly);

  renderMatchupResult({
    f1,f2,edgeFighter,edgeScore,winProb,method,
    f1OddsML:f1Odds,f2OddsML:f2Odds,
    keyEdges:edges.slice(0,6),
    styleBreakdown:breakdown,
    recommendation,
    polymarket:poly,
    warning,
  });
}

function generateBreakdown(f1,f2,edgeFighter,edges,weightDiff,sameDiv,poly){
  const winner=edgeFighter===f1.n?f1:f2;
  const loser=edgeFighter===f1.n?f2:f1;
  let s='';
  if(poly)s+=`Polymarket bettors back ${winner.n.split(' ').pop()} with ${poly.a>poly.b?poly.a:poly.b}% probability backed by ${poly.vol} in trading volume. `;
  if(!sameDiv&&weightDiff>=15){
    s+=`This is a cross-division matchup with a ${weightDiff}lb size gap, which would be a fight-defining factor. `;
  }
  if(edges.length<2)s+=`Tightly matched fight with limited statistical separation. `;
  else if(edges.length>4)s+=`Clear stylistic mismatch on paper. `;
  else s+=`Competitive fight with measurable lean. `;
  s+=`${winner.n.split(' ').pop()} brings ${winner.style||'a well-rounded skillset'}. `;
  if(winner.r===0)s+=`Champion's experience favors them in deep waters. `;
  if(winner.rec&&winner.rec.endsWith("-0-0"))s+=`Their undefeated record adds to the threat. `;
  return s;
}

function generateRecommendation(f1,f2,edgeFighter,edgeScore,winProb,method,poly){
  const winner=edgeFighter===f1.n?f1:f2;
  let s=`Lean ${winner.n.split(' ').pop()} `;
  if(edgeScore>=8)s+=`with high confidence. Strong edge — straight ML or method bet (${winner.n.split(' ').pop()} by ${method}). `;
  else if(edgeScore>=6)s+=`with moderate confidence. Best value likely on the method (${winner.n.split(' ').pop()} by ${method}). `;
  else if(edgeScore>=4)s+=`as slight favorite — small unit only or pass. `;
  else s+=`but edge is thin. Consider over/under prop bets instead. `;
  if(poly)s+=`With ${winProb}% Polymarket implied probability, value exists at -200 or shorter ML.`;
  else if(winProb>65)s+=`Implied ${winProb}% suggests value at -200 or shorter.`;
  return s;
}

function edgeColor(s){return s>=7?'var(--green)':s>=5?'var(--gold)':'var(--red)'}
function edgeLabel(s){return s>=8?'STRONG EDGE':s>=6?'MODERATE EDGE':s>=4?'SLIGHT EDGE':'TOSS-UP'}

function buildEdgeMeter(score){
  const r=46,circ=2*Math.PI*r,dash=(score/10)*circ,col=edgeColor(score);
  return`<div class="edge-panel">
    <div class="section-label" style="margin:0">Edge Score</div>
    <div class="edge-score-ring">
      <svg viewBox="0 0 110 110">
        <circle class="edge-track" cx="55" cy="55" r="${r}"/>
        <circle class="edge-fill" cx="55" cy="55" r="${r}" stroke="${col}" stroke-dasharray="${circ}" stroke-dashoffset="${circ-dash}"/>
      </svg>
      <div class="edge-value">
        <div class="edge-num" style="color:${col}">${score}</div>
        <div class="edge-label">/ 10</div>
      </div>
    </div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:800;color:${col};letter-spacing:1px">${edgeLabel(score)}</div>
  </div>`;
}

function renderMatchupResult(d){
  const f1=d.f1,f2=d.f2,col=edgeColor(d.edgeScore);
  const polyHtml=d.polymarket?`
    <div class="poly-meter">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <div style="font-size:11px;color:var(--blue);font-family:'IBM Plex Mono',monospace;font-weight:600;text-transform:uppercase;letter-spacing:1px">★ Polymarket Live</div>
        <div style="font-size:10px;color:var(--text3);font-family:'IBM Plex Mono',monospace">Vol ${d.polymarket.vol}</div>
      </div>
      <div class="poly-bar">
        <div class="poly-bar-a" style="width:${d.polymarket.a/(d.polymarket.a+d.polymarket.b)*100}%"></div>
        <div class="poly-bar-b" style="width:${d.polymarket.b/(d.polymarket.a+d.polymarket.b)*100}%"></div>
      </div>
      <div class="poly-row">
        <span style="color:var(--red);font-weight:600">${f1.n.split(' ').pop()} ${d.polymarket.a}%</span>
        <span style="color:var(--blue);font-weight:600">${f2.n.split(' ').pop()} ${d.polymarket.b}%</span>
      </div>
    </div>
  `:'';
  
  const html=`
    ${d.warning?`<div class="warning-banner"><span>${d.warning}</span></div>`:''}
    <div class="matchup-result-grid" style="display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:stretch;margin-top:16px;animation:fadeIn .4s ease">
      <div class="card-sm" style="animation:fadeInLeft .4s ease">
        <div class="display" style="font-size:20px;font-weight:800;line-height:1.05">${f1.n}</div>
        <div class="mono" style="font-size:11px;color:var(--text3);margin-top:2px">${DIVISIONS[f1.d]} · ${f1.c}${f1.r===0?' · ★ CHAMP':f1.r?' · #'+f1.r:''}</div>
        <div style="margin-top:10px">
          <div class="stat-row"><span class="stat-key">Record</span><span class="stat-val">${f1.rec||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">SLpM</span><span class="stat-val">${f1.slpm||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">Str Acc</span><span class="stat-val">${f1.sacc||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">TD Avg</span><span class="stat-val">${f1.tdavg||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">TD Def</span><span class="stat-val">${f1.tddef||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">Reach</span><span class="stat-val">${f1.reach||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">ML Odds</span><span class="stat-val" style="color:${String(d.f1OddsML).startsWith('-')?'var(--red)':'var(--green)'}">${d.f1OddsML}</span></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
        <div class="display" style="font-size:18px;font-weight:800;color:var(--text3)">VS</div>
        ${buildEdgeMeter(d.edgeScore)}
      </div>
      <div class="card-sm" style="animation:fadeInRight .4s ease">
        <div class="display" style="font-size:20px;font-weight:800;line-height:1.05">${f2.n}</div>
        <div class="mono" style="font-size:11px;color:var(--text3);margin-top:2px">${DIVISIONS[f2.d]} · ${f2.c}${f2.r===0?' · ★ CHAMP':f2.r?' · #'+f2.r:''}</div>
        <div style="margin-top:10px">
          <div class="stat-row"><span class="stat-key">Record</span><span class="stat-val">${f2.rec||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">SLpM</span><span class="stat-val">${f2.slpm||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">Str Acc</span><span class="stat-val">${f2.sacc||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">TD Avg</span><span class="stat-val">${f2.tdavg||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">TD Def</span><span class="stat-val">${f2.tddef||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">Reach</span><span class="stat-val">${f2.reach||'—'}</span></div>
          <div class="stat-row"><span class="stat-key">ML Odds</span><span class="stat-val" style="color:${String(d.f2OddsML).startsWith('-')?'var(--red)':'var(--green)'}">${d.f2OddsML}</span></div>
        </div>
      </div>
    </div>

    ${polyHtml}

    <div class="card" style="margin-top:14px">
      <div class="section-label" style="margin-bottom:12px">Key Edges</div>
      ${d.keyEdges.length?d.keyEdges.map((k,i)=>`<div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);font-size:13px;color:var(--text2);animation:fadeInLeft .3s ease backwards;animation-delay:${i*50}ms"><span style="color:var(--red);margin-top:1px;flex-shrink:0">◆</span>${k}</div>`).join(''):'<div style="font-size:13px;color:var(--text2)">No major statistical separation between these fighters.</div>'}
      <div style="margin-top:12px;font-size:13px;color:var(--text2);line-height:1.7">${d.styleBreakdown}</div>
    </div>

    <div class="card">
      <div class="section-label" style="margin-bottom:12px">Value Analysis</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">
        <div class="card-sm" style="text-align:center;background:var(--bg2)">
          <div class="display" style="font-size:18px;font-weight:800;color:${col};line-height:1">${d.edgeFighter.split(' ').pop()}</div>
          <div style="font-size:10px;color:var(--text3);margin-top:4px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.6px">Edge Pick</div>
        </div>
        <div class="card-sm" style="text-align:center;background:var(--bg2)">
          <div class="display" style="font-size:18px;font-weight:800;line-height:1">${d.winProb}%</div>
          <div style="font-size:10px;color:var(--text3);margin-top:4px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.6px">Win Prob</div>
        </div>
        <div class="card-sm" style="text-align:center;background:var(--bg2)">
          <div class="display" style="font-size:18px;font-weight:800;line-height:1">${d.method}</div>
          <div style="font-size:10px;color:var(--text3);margin-top:4px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.6px">Method</div>
        </div>
      </div>
      <div class="recommendation"><strong>Pick:</strong> ${d.recommendation}</div>
      <div style="margin-top:10px;font-size:10px;color:var(--text3);font-family:'IBM Plex Mono',monospace">⚠ POLYMARKET-WEIGHTED ANALYSIS · ENTERTAINMENT ONLY</div>
    </div>`;
  document.getElementById('matchup-result').innerHTML=html;
  setTimeout(()=>document.getElementById('matchup-result').scrollIntoView({behavior:'smooth',block:'start'}),100);
}

function searchFighter(){
  const name=document.getElementById('fighter-search').value.trim();
  if(!name)return;
  const f=findFighter(name);
  if(!f){
    document.getElementById('fighter-result').innerHTML=`<div class="card" style="color:var(--text2)">Fighter not found.</div>`;
    return;
  }
  renderFighter(f);
}

function generateFighterBio(f){
  if(f.bio)return f.bio;
  const parts=[];
  if(f.r===0)parts.push(`Reigning ${DIVISIONS[f.d]} champion`);
  else if(f.r&&f.r<=5)parts.push(`Top-5 ${DIVISIONS[f.d]} contender at #${f.r}`);
  else if(f.r&&f.r<=15)parts.push(`Ranked #${f.r} in the ${DIVISIONS[f.d]} division`);
  else parts.push(`${DIVISIONS[f.d]} fighter`);
  if(f.c)parts.push(`representing ${f.c}`);
  if(f.rec){
    if(f.rec.endsWith("-0-0"))parts.push(`with an undefeated ${f.rec} professional record`);
    else parts.push(`with a ${f.rec} pro record`);
  }
  if(f.style)parts.push(`Style: ${f.style}`);
  return parts.join(' · ')+'.';
}

function findFighterNews(f){
  const lastName=f.n.split(' ').pop().toLowerCase();
  const fullName=f.n.toLowerCase();
  const nick=(f.nk||'').toLowerCase();
  return NEWS.filter(n=>{
    const text=(n.title+' '+n.summary).toLowerCase();
    return text.includes(lastName)||text.includes(fullName)||(nick&&nick.length>3&&text.includes(nick));
  });
}

function findFighterUpcomingFights(f){
  const today=new Date();
  const matches=[];
  EVENTS.filter(e=>new Date(e.date)>=today).forEach(ev=>{
    ev.fights.forEach(fight=>{
      if(fight.a===f.n||fight.b===f.n){
        const opponent=fight.a===f.n?fight.b:fight.a;
        matches.push({event:ev.name,sub:ev.sub,date:ev.date,opponent,wc:fight.wc,isTitle:fight.isTitle,venue:ev.venue});
      }
    });
  });
  return matches;
}

function renderFighter(f){
  const colors={'W':'var(--green)','L':'var(--red)','D':'var(--gold)','NC':'var(--text3)'};
  const bio=generateFighterBio(f);
  const news=findFighterNews(f);
  const upcoming=findFighterUpcomingFights(f);
  
  // Calculate finish rate from last5 if available
  let finishRate=null,winsByFinish=null;
  if(f.last5){
    const wins=f.last5.filter(x=>x.r==='W');
    const finishes=wins.filter(x=>x.m&&(x.m.includes('KO')||x.m.includes('TKO')||x.m.toLowerCase().includes('sub')));
    if(wins.length){
      finishRate=Math.round((finishes.length/wins.length)*100);
      winsByFinish=finishes.length;
    }
  }
  
  // Build stats array - only show what's available
  const stats=[];
  if(f.slpm)stats.push({n:f.slpm,l:'SLpM',hint:'Sig. Strikes Landed/min'});
  if(f.sacc)stats.push({n:f.sacc,l:'Str Acc',hint:'Striking Accuracy'});
  if(f.sapm)stats.push({n:f.sapm,l:'SApM',hint:'Sig. Strikes Absorbed/min'});
  if(f.sdef)stats.push({n:f.sdef,l:'Str Def',hint:'Strike Defense'});
  if(f.tdavg)stats.push({n:f.tdavg,l:'TD Avg',hint:'Takedowns/15min'});
  if(f.tdacc)stats.push({n:f.tdacc,l:'TD Acc',hint:'Takedown Accuracy'});
  if(f.tddef)stats.push({n:f.tddef,l:'TD Def',hint:'Takedown Defense'});
  if(f.subavg)stats.push({n:f.subavg,l:'Sub Avg',hint:'Sub Attempts/15min'});
  
  const physicals=[];
  if(f.height)physicals.push({l:'Height',v:f.height});
  if(f.reach)physicals.push({l:'Reach',v:f.reach});
  if(f.stance)physicals.push({l:'Stance',v:f.stance});
  if(f.age)physicals.push({l:'Age',v:f.age});
  
  document.getElementById('fighter-result').innerHTML=`
    <div class="fighter-card">
      <div class="fighter-header">
        <div class="fighter-title">${f.n}</div>
        ${f.nk?`<div style="font-size:13px;color:var(--text3);font-style:italic;margin-top:2px">"${f.nk}"</div>`:''}
        <div class="fighter-meta">
          <span class="tag tag-red">${DIVISIONS[f.d]}</span>
          ${f.r===0?'<span class="tag tag-gold">★ CHAMPION</span>':f.r?`<span class="tag tag-gold">#${f.r}</span>`:'<span class="tag tag-neutral">UNRANKED</span>'}
          <span class="tag tag-neutral">${f.c}</span>
          ${f.rec?`<span class="tag tag-blue mono">${f.rec}</span>`:''}
          ${f.rec&&f.rec.endsWith("-0-0")?'<span class="tag tag-green">UNDEFEATED</span>':''}
        </div>
      </div>

      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:14px;font-size:13px;color:var(--text2);line-height:1.6;animation:fadeIn .4s ease">${bio}</div>

      ${upcoming.length?`
        <div class="section-label" style="margin-bottom:10px">Upcoming Fight${upcoming.length>1?'s':''}</div>
        ${upcoming.map(u=>`
          <div style="background:var(--red-dim);border:1px solid var(--red);border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:10px;animation:fadeIn .4s ease">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
              <div>
                <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;line-height:1.1">vs ${u.opponent}</div>
                <div style="font-size:12px;color:var(--text2);margin-top:2px">${u.event} · ${u.sub}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div class="mono" style="font-size:11px;color:var(--red);font-weight:600">${formatDate(u.date)}</div>
                ${u.isTitle?'<div class="mono" style="font-size:10px;color:var(--gold);font-weight:600;margin-top:2px">★ TITLE FIGHT</div>':''}
              </div>
            </div>
            <button class="search-btn" style="margin-top:6px;font-size:12px;padding:6px 12px;height:auto" onclick="setMatchup('${f.n.replace(/'/g,"\\'")}','${u.opponent.replace(/'/g,"\\'")}')">View Matchup Analysis →</button>
          </div>`).join('')}
      `:''}

      ${stats.length?`
        <div class="section-label" style="margin-bottom:10px">Career Stats</div>
        <div class="stats-grid">
          ${stats.map((s,i)=>`<div class="stat-box" style="animation-delay:${i*40}ms" title="${s.hint}"><div class="stat-box-num mono">${s.n}</div><div class="stat-box-label">${s.l}</div></div>`).join('')}
        </div>
      `:''}

      ${physicals.length?`
        <div style="display:grid;grid-template-columns:repeat(${physicals.length},1fr);gap:8px;margin-bottom:14px">
          ${physicals.map(p=>`<div class="card-sm" style="text-align:center"><div class="mono" style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px">${p.l}</div><div style="font-size:14px;font-weight:600;margin-top:4px">${p.v}</div></div>`).join('')}
        </div>
      `:''}

      ${finishRate!==null?`
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
          <div class="card-sm" style="text-align:center"><div class="display" style="font-size:22px;font-weight:800;color:var(--red);line-height:1">${finishRate}%</div><div style="font-size:10px;color:var(--text3);margin-top:4px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.6px">Finish Rate (L5)</div></div>
          <div class="card-sm" style="text-align:center"><div class="display" style="font-size:22px;font-weight:800;color:var(--green);line-height:1">${f.last5.filter(x=>x.r==='W').length}</div><div style="font-size:10px;color:var(--text3);margin-top:4px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.6px">Wins (L5)</div></div>
          <div class="card-sm" style="text-align:center"><div class="display" style="font-size:22px;font-weight:800;line-height:1">${winsByFinish}</div><div style="font-size:10px;color:var(--text3);margin-top:4px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.6px">Finishes (L5)</div></div>
        </div>
      `:''}

      ${f.last5?`
        <div class="section-label" style="margin-bottom:10px">Recent Fights</div>
        <div style="margin-bottom:14px">
          ${f.last5.map((x,i)=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);animation:fadeInLeft .3s ease backwards;animation-delay:${i*60}ms">
              <div style="display:flex;align-items:center;gap:10px">
                <div class="mono" style="font-size:13px;font-weight:700;color:${colors[x.r]||'var(--text)'};width:14px">${x.r}</div>
                <div><div style="font-weight:500;font-size:13px">${x.o}</div><div style="font-size:11px;color:var(--text3);font-family:'IBM Plex Mono',monospace">${x.date}</div></div>
              </div>
              <div style="text-align:right"><div style="font-size:12px;color:var(--text2)">${x.m}</div><div class="mono" style="font-size:10px;color:var(--text3)">R${x.rd}</div></div>
            </div>`).join('')}
        </div>`:''}

      ${f.style?`
        <div class="section-label" style="margin-bottom:8px">Fighting Style</div>
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px;line-height:1.7;font-size:13px;color:var(--text2);margin-bottom:14px">${f.style}</div>
      `:''}

      ${news.length?`
        <div class="section-label" style="margin-bottom:10px">Related News (${news.length})</div>
        ${news.map((n,i)=>`
          <div class="news-card" style="margin-bottom:8px;animation-delay:${i*60}ms;cursor:default">
            <div class="news-header">
              <div class="news-tag ${n.tag}">${n.tag}</div>
              <div class="news-time">${n.time}</div>
            </div>
            <div class="news-title">${n.title}</div>
            <div class="news-summary">${n.summary}</div>
          </div>
        `).join('')}
      `:''}

      ${!stats.length?`<div class="card-sm" style="color:var(--text2);font-size:13px;padding:14px;margin-top:8px">Detailed career stats are tracked for top-15 ranked fighters. ${f.n} is currently outside the active roster's top tier — basic profile shown above.</div>`:''}
    </div>`;
}

// ============ INIT ============
renderTicker();
renderHero();
renderDashStats();
renderP4P();
renderEvents();
renderChampions();
// Cycle ticker every 8s
setInterval(renderTicker,8000);

// ============ LIVE POLYMARKET FETCH ============
// Tries to fetch live odds from our /api/polymarket/ufc endpoint.
// On success, merges live data into the existing POLYMARKET object
// and re-renders any active screens. On failure, silently keeps
// the static fallback data.
async function loadLivePolymarket(){
  try{
    const res=await fetch('/api/polymarket/ufc');
    if(!res.ok)return;
    const data=await res.json();
    if(!data.markets||!data.markets.length)return;
    
    let merged=0;
    // For each known fight in the app, try to find a matching live market
    // by matching fighter last names against the market's outcome tokens.
    const allFights=[];
    EVENTS.forEach(ev=>ev.fights.forEach(f=>allFights.push(f)));
    HOT_MATCHUPS.forEach(m=>allFights.push({a:m.a,b:m.b}));
    
    allFights.forEach(f=>{
      const aLast=f.a.split(' ').pop().toLowerCase();
      const bLast=f.b.split(' ').pop().toLowerCase();
      const live=data.markets.find(m=>{
        const fa=(m.fighterA||'').toLowerCase();
        const fb=(m.fighterB||'').toLowerCase();
        return (fa.includes(aLast)&&fb.includes(bLast))||(fa.includes(bLast)&&fb.includes(aLast));
      });
      if(live){
        // Determine which side maps to which
        const liveAIsOurA=live.fighterA.toLowerCase().includes(aLast);
        POLYMARKET[`${f.a}|${f.b}`]={
          a:liveAIsOurA?live.probA:live.probB,
          b:liveAIsOurA?live.probB:live.probA,
          vol:live.volume||'live',
          isLive:true,
        };
        merged++;
      }
    });
    
    if(merged>0){
      // Re-render any visible content that uses polymarket data
      renderEvents();
      // Update the LIVE badge to show count
      const badge=document.querySelector('.live-badge');
      if(badge)badge.innerHTML=`<div class="live-dot"></div>LIVE · ${merged} markets`;
      console.log(`[CageIQ] Loaded ${merged} live Polymarket markets`);
    }
  }catch(err){
    console.warn('[CageIQ] Polymarket fetch failed, using static data:',err.message);
  }
}
loadLivePolymarket();
// Refresh live odds every 2 minutes
setInterval(loadLivePolymarket,120000);

// ============ SCROLL SNAP TRACKING ============
function scrollToSection(idx){
  const container=document.getElementById('snap-container');
  const sections=container.querySelectorAll('.snap-section');
  if(sections[idx])sections[idx].scrollIntoView({behavior:'smooth',block:'start'});
}

const snapContainer=document.getElementById('snap-container');
if(snapContainer){
  snapContainer.addEventListener('scroll',()=>{
    const sections=snapContainer.querySelectorAll('.snap-section');
    const dots=document.querySelectorAll('.snap-dot');
    const scrollTop=snapContainer.scrollTop;
    const containerHeight=snapContainer.clientHeight;
    let activeIdx=0;
    sections.forEach((s,i)=>{
      const top=s.offsetTop-snapContainer.offsetTop;
      if(scrollTop>=top-containerHeight/2)activeIdx=i;
    });
    dots.forEach((d,i)=>d.classList.toggle('active',i===activeIdx));
  });
}
