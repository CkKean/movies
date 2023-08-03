export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// {
//     "dates": {
//       "maximum": "2023-08-08",
//       "minimum": "2023-06-21"
//     },
//     "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
//         "genre_ids": [
//           35,
//           12,
//           14
//         ],
//         "id": 346698,
//         "original_language": "en",
//         "original_title": "Barbie",
//         "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
//         "popularity": 3447.567,
//         "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
//         "release_date": "2023-07-19",
//         "title": "Barbie",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 2102
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
//         "genre_ids": [
//           28,
//           12,
//           878
//         ],
//         "id": 298618,
//         "original_language": "en",
//         "original_title": "The Flash",
//         "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
//         "popularity": 2986.048,
//         "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
//         "release_date": "2023-06-13",
//         "title": "The Flash",
//         "video": false,
//         "vote_average": 7,
//         "vote_count": 1933
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
//         "genre_ids": [
//           28,
//           12,
//           878
//         ],
//         "id": 667538,
//         "original_language": "en",
//         "original_title": "Transformers: Rise of the Beasts",
//         "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
//         "popularity": 2904.721,
//         "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
//         "release_date": "2023-06-06",
//         "title": "Transformers: Rise of the Beasts",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 2247
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
//         "genre_ids": [
//           16,
//           10751,
//           28,
//           14,
//           10749
//         ],
//         "id": 496450,
//         "original_language": "fr",
//         "original_title": "Miraculous - le film",
//         "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
//         "popularity": 2047.765,
//         "poster_path": "/bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg",
//         "release_date": "2023-07-05",
//         "title": "Miraculous: Ladybug & Cat Noir, The Movie",
//         "video": false,
//         "vote_average": 8.2,
//         "vote_count": 244
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/uj2duAkn6zUmRSbjyEr7XUeIWsJ.jpg",
//         "genre_ids": [
//           16,
//           28,
//           27
//         ],
//         "id": 1083862,
//         "original_language": "ja",
//         "original_title": "バイオハザード：デスアイランド",
//         "overview": "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
//         "popularity": 1968.89,
//         "poster_path": "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
//         "release_date": "2023-06-22",
//         "title": "Resident Evil: Death Island",
//         "video": false,
//         "vote_average": 7.9,
//         "vote_count": 341
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/iJ0UZaC7XW7BUpRQ7OLPZSms8Ou.jpg",
//         "genre_ids": [
//           28,
//           878,
//           53
//         ],
//         "id": 813477,
//         "original_language": "ja",
//         "original_title": "シン・仮面ライダー",
//         "overview": "A man forced to bear power and stripped of humanity. A woman skeptical of happiness. Takeshi Hongo, an Augmentation made by SHOCKER, and Ruriko Midorikawa, a rebel of the organization, escape while fighting off assassins. What’s justice? What’s evil? Will this violence end? Despite his power, Hongo tries to remain human. Along with freedom, Ruriko has regained a heart. What paths will they choose?",
//         "popularity": 1554.534,
//         "poster_path": "/9dTO2RygcDT0cQkawABw4QkDegN.jpg",
//         "release_date": "2023-03-17",
//         "title": "Shin Kamen Rider",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 55
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
//         "genre_ids": [
//           16,
//           10751,
//           14,
//           35
//         ],
//         "id": 1040148,
//         "original_language": "en",
//         "original_title": "Ruby Gillman, Teenage Kraken",
//         "overview": "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
//         "popularity": 1348.727,
//         "poster_path": "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
//         "release_date": "2023-06-28",
//         "title": "Ruby Gillman, Teenage Kraken",
//         "video": false,
//         "vote_average": 7.8,
//         "vote_count": 379
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/i2GVEvltEu3BXn5crBSxgKuTaca.jpg",
//         "genre_ids": [
//           27,
//           9648,
//           53
//         ],
//         "id": 614479,
//         "original_language": "en",
//         "original_title": "Insidious: The Red Door",
//         "overview": "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
//         "popularity": 1282.953,
//         "poster_path": "/azTC5osYiqei1ofw6Z3GmUrxQbi.jpg",
//         "release_date": "2023-07-05",
//         "title": "Insidious: The Red Door",
//         "video": false,
//         "vote_average": 6.4,
//         "vote_count": 359
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/J0XkW5toJLGEucm1pLDvTHXaKC.jpg",
//         "genre_ids": [
//           28,
//           18,
//           10752
//         ],
//         "id": 1076487,
//         "original_language": "en",
//         "original_title": "Warhorse One",
//         "overview": "A gunned down Navy SEAL Master Chief must guide a child to safety through a gauntlet of hostile Taliban insurgents and survive the brutal Afghanistan wilderness.",
//         "popularity": 1120.368,
//         "poster_path": "/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg",
//         "release_date": "2023-06-30",
//         "title": "Warhorse One",
//         "video": false,
//         "vote_average": 7.3,
//         "vote_count": 107
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
//         "genre_ids": [
//           16,
//           12,
//           10751,
//           14
//         ],
//         "id": 459003,
//         "original_language": "uk",
//         "original_title": "Мавка: Лісова пісня",
//         "overview": "Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.",
//         "popularity": 1152.803,
//         "poster_path": "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
//         "release_date": "2023-03-02",
//         "title": "Mavka: The Forest Song",
//         "video": false,
//         "vote_average": 7.4,
//         "vote_count": 226
//       },
//       {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//           28,
//           12,
//           36,
//           10752
//         ],
//         "id": 1061181,
//         "original_language": "ja",
//         "original_title": "キングダム 運命の炎",
//         "overview": "It follows Li Xin and Wang Qi as they stand on the battlefield for the first time to fight off an invasion by Zhao, and it also follows Ying Zheng's unknown past.",
//         "popularity": 940.678,
//         "poster_path": "/qnmV2Wq2H5ThqASx6vcwh25sUiG.jpg",
//         "release_date": "2023-07-28",
//         "title": "Kingdom 3: The Flame of Fate",
//         "video": false,
//         "vote_average": 10,
//         "vote_count": 1
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
//         "genre_ids": [
//           18,
//           36
//         ],
//         "id": 872585,
//         "original_language": "en",
//         "original_title": "Oppenheimer",
//         "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
//         "popularity": 1043.728,
//         "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
//         "release_date": "2023-07-19",
//         "title": "Oppenheimer",
//         "video": false,
//         "vote_average": 8.3,
//         "vote_count": 1285
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/2iNUodSKykQ4VtvtG280ntNy7hB.jpg",
//         "genre_ids": [
//           28,
//           878,
//           27,
//           35
//         ],
//         "id": 615656,
//         "original_language": "en",
//         "original_title": "Meg 2: The Trench",
//         "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
//         "popularity": 943.693,
//         "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
//         "release_date": "2023-08-02",
//         "title": "Meg 2: The Trench",
//         "video": false,
//         "vote_average": 7.1,
//         "vote_count": 24
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg",
//         "genre_ids": [
//           14,
//           28,
//           12
//         ],
//         "id": 455476,
//         "original_language": "en",
//         "original_title": "Knights of the Zodiac",
//         "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
//         "popularity": 801.074,
//         "poster_path": "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
//         "release_date": "2023-04-27",
//         "title": "Knights of the Zodiac",
//         "video": false,
//         "vote_average": 6.7,
//         "vote_count": 688
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
//         "genre_ids": [
//           28,
//           12,
//           16,
//           878
//         ],
//         "id": 569094,
//         "original_language": "en",
//         "original_title": "Spider-Man: Across the Spider-Verse",
//         "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
//         "popularity": 849.228,
//         "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
//         "release_date": "2023-05-31",
//         "title": "Spider-Man: Across the Spider-Verse",
//         "video": false,
//         "vote_average": 8.5,
//         "vote_count": 2624
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/eMPxmNvJjxVZIQWI2t1VmNC5IuR.jpg",
//         "genre_ids": [
//           28,
//           18
//         ],
//         "id": 678512,
//         "original_language": "en",
//         "original_title": "Sound of Freedom",
//         "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
//         "popularity": 813.099,
//         "poster_path": "/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
//         "release_date": "2023-07-03",
//         "title": "Sound of Freedom",
//         "video": false,
//         "vote_average": 8.1,
//         "vote_count": 285
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
//         "genre_ids": [
//           16,
//           35,
//           10751,
//           14,
//           10749
//         ],
//         "id": 976573,
//         "original_language": "en",
//         "original_title": "Elemental",
//         "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
//         "popularity": 827.901,
//         "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
//         "release_date": "2023-06-14",
//         "title": "Elemental",
//         "video": false,
//         "vote_average": 7.6,
//         "vote_count": 708
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg",
//         "genre_ids": [
//           28,
//           12,
//           53
//         ],
//         "id": 457332,
//         "original_language": "en",
//         "original_title": "Hidden Strike",
//         "overview": "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.",
//         "popularity": 1127.283,
//         "poster_path": "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
//         "release_date": "2023-07-06",
//         "title": "Hidden Strike",
//         "video": false,
//         "vote_average": 7.1,
//         "vote_count": 260
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/mRdNsdTJsn5FGjnMs8FyyiQKCaV.jpg",
//         "genre_ids": [
//           28,
//           12,
//           53,
//           878
//         ],
//         "id": 575264,
//         "original_language": "en",
//         "original_title": "Mission: Impossible - Dead Reckoning Part One",
//         "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
//         "popularity": 506.951,
//         "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
//         "release_date": "2023-07-08",
//         "title": "Mission: Impossible - Dead Reckoning Part One",
//         "video": false,
//         "vote_average": 7.8,
//         "vote_count": 833
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/sGGNrDPV8VFJzOTZOcsFiJ45Xp3.jpg",
//         "genre_ids": [
//           28,
//           80
//         ],
//         "id": 987507,
//         "original_language": "ja",
//         "original_title": "バッドシティ",
//         "overview": "Kensuke Sonomura directs the legendary Hitoshi Ozawa in this ultimate V-Cinema actioner.  Kaiko City is plagued with poverty and crime. When a corrupt businessman decides to run for mayor and starts eliminating opponents from the rival mafia, a former police captain serving time for murder is secretly released and put in charge of a special task force to arrest him.",
//         "popularity": 386.976,
//         "poster_path": "/zjWAjosdXELkaqCnlc1s8FQtIZL.jpg",
//         "release_date": "2022-07-05",
//         "title": "Bad City",
//         "video": false,
//         "vote_average": 7.6,
//         "vote_count": 28
//       }
//     ],
//     "total_pages": 75,
//     "total_results": 1486
//   }
