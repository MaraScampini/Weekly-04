'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      id_movie: 1,
      title: "The Godfather",
      original_language: "English",
      genre: "drama",
      description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      vote_count: 16829,
      vote_average: 8.7,
      on_theaters: false,
      ArticleIdArticle: 1
    },
    {
      id_movie: 2,
      title: "The Shawshank Redemption",
      original_language: "English",
      genre: "drama",
      description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      release_date: "1994-09-23",
      vote_count: 22561,
      vote_average: 8.7,
      on_theaters: false,
      ArticleIdArticle: 2
    },
    {
      id_movie: 3,
      title: "Schindler's List",
      original_language: "English",
      genre: "drama",
      description: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      release_date: "1993-12-15",
      vote_count: 13393,
      vote_average: 8.6,
      on_theaters: false,
      ArticleIdArticle: 3
    },
    {
      id_movie: 4,
      title: "Terrifier 2",
      original_language: "English",
      genre: "horror",
      description: "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      poster_path: "/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
      release_date: "2022-10-06",
      vote_count: 305,
      vote_average: 7.2,
      on_theaters: true,
      ArticleIdArticle: 4
    },
    {
      id_movie: 5,
      title: "Black Adam",
      original_language: "English",
      genre: "superheroes",
      description: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      release_date: "2022-10-19",
      vote_count: 742,
      vote_average: 7,
      on_theaters: true,
      ArticleIdArticle: 5
    },
    {
      id_movie: 6,
      title: "Coco",
      original_language: "English",
      genre: "animation",
      description: "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      poster_path: "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      release_date: "2017-10-27",
      vote_count: 16362,
      vote_average: 8.2,
      on_theaters: false,
      ArticleIdArticle: 6
    },
    {
      id_movie: 7,
      title: "Halloween Ends",
      original_language: "English",
      genre: "horror",
      description: "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can't control, once and for all.",
      poster_path: "/kFMntvUmKhvw1uAHXecqqNSFXt.jpg",
      release_date: "2022-10-12",
      vote_count: 805,
      vote_average: 6.6,
      on_theaters: true,
      ArticleIdArticle: 7
    },
    {
      id_movie: 8,
      title: "Bullet Train",
      original_language: "English",
      genre: "action",
      description: "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
      poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
      release_date: "2022-07-03",
      vote_count: 2117,
      vote_average: 7.5,
      on_theaters: false,
      ArticleIdArticle: 8
    },
    {
      id_movie: 9,
      title: "Cerdita",
      original_language: "Spanish",
      genre: "horror",
      description: "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
      poster_path: "/8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
      release_date: "2022-10-07",
      vote_count: 148,
      vote_average: 6.8,
      on_theaters: true,
      ArticleIdArticle: 9
    },
    {
      id_movie: 10,
      title: "Thor: Love and Thunder",
      original_language: "English",
      genre: "superheroes",
      description: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late.",
      poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      release_date: "2022-07-06",
      vote_count: 4510,
      vote_average: 6.7,
      on_theaters: false,
      ArticleIdArticle: 10
    },
    {
      id_movie: 11,
      title: "Smile",
      original_language: "English",
      genre: "horror",
      description: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      poster_path: "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
      release_date: "2022-09-23",
      vote_count: 387,
      vote_average: 6.8,
      on_theaters: false,
      ArticleIdArticle: 11
    },
    {
      id_movie: 12,
      title: "Top Gun: Maverick",
      original_language: "English",
      genre: "action",
      description: "After more than thirty years of service as one of the Navy's top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      release_date: "2022-05-24",
      vote_count: 4561,
      vote_average: 8.3,
      on_theaters: false,
      ArticleIdArticle: 12
    },
    {
      id_movie: 13,
      title: "Don't Worry Darling",
      original_language: "English",
      genre: "action",
      description: "Alice and Jack are lucky to be living in the idealized community of Victory, the experimental company town housing the men who work for the top-secret Victory Project and their families. But when cracks in their idyllic life begin to appear, exposing flashes of something much more sinister lurking beneath the attractive façade, Alice can't help questioning exactly what they're doing in Victory, and why.",
      poster_path: "/9BXYLjXtSipBp2GfAlsri4i8hPC.jpg",
      release_date: "2022-09-21",
      vote_count: 708,
      vote_average: 6.9,
      on_theaters: false,
      ArticleIdArticle: 13
    },
    {
      id_movie: 14,
      title: "Barbarian",
      original_language: "English",
      genre: "horror",
      description: "In town for a job interview, a young woman arrives at her Airbnb late at night only to find that it has been mistakenly double-booked and a strange man is already staying there. Against her better judgement, she decides to stay the night anyway, but soon discovers that there is much more to be afraid of in the house than the other guest.",
      poster_path: "/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg",
      release_date: "2022-09-08",
      vote_count: 526,
      vote_average: 7,
      on_theaters: true,
      ArticleIdArticle: 14
    },
    {
      id_movie: 15,
      title: "Doctor Strange in the Multiverse of Madness",
      original_language: "English",
      genre: "superheroes",
      description: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      poster_path: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      release_date: "2022-05-04",
      vote_count: 6217,
      vote_average: 7.4,
      on_theaters: false,
      ArticleIdArticle: 15
    },
    {
      id_movie: 16,
      title: "The Quintessential Quintuplets Movie",
      original_language: "Japanese",
      genre: "romance",
      description: "When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what's next. Is there a future with one of them and Futaro?",
      poster_path: "/sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
      release_date: "2022-05-20",
      vote_count: 81,
      vote_average: 9.2,
      on_theaters: false,
      ArticleIdArticle: 16
    },
    {
      id_movie: 17,
      title: "Deinfluencer",
      original_language: "English",
      genre: "horror",
      description: "An influential cheerleader finds herself held captive by a masked psychopath with a God complex. She must complete a series of sadistic social media challenges to save her life and the lives of her fellow captives. However, the masked kidnapper has a secret agenda for his most recent victim.",
      poster_path: "/gLnrBoSENk32SKjHDiZv7E4zwzK.jpg",
      release_date: "2022-10-01",
      vote_count: 2,
      vote_average: 4,
      on_theaters: true,
      ArticleIdArticle: 17
    },
    {
      id_movie: 18,
      title: "Un crimen argentino",
      original_language: "Spanish",
      genre: "crime",
      description: "Rosario in the 80s. The disappearance of a man during the military dictatorship. Two young people from the court must do everything possible to solve the case while facing police corruption and various dangers that put their lives at risk.",
      poster_path: "/qdNog6ueztBWUAw8tsKlebmngRu.jpg",
      release_date: "2022-08-25",
      vote_count: 10,
      vote_average: 6.2,
      on_theaters: false,
      ArticleIdArticle: 18
    },
    {
      id_movie: 19,
      title: "The Black Phone",
      original_language: "English",
      genre: "horror",
      description: "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer's previous victims. And they are dead set on making sure that what happened to them doesn't happen to Finney.",
      poster_path: "/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
      release_date: "2022-06-22",
      vote_count: 3007,
      vote_average: 7.9,
      on_theaters: false,
      ArticleIdArticle: 19
    },
    {
      id_movie: 20,
      title: "Jujutsu Kaisen 0",
      original_language: "Japanese",
      genre: "anime",
      description: "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
      poster_path: "/yzkgx79vj1KsZBzxFBIsQBwBkPE.jpg",
      release_date: "2021-12-24",
      vote_count: 652,
      vote_average: 8.3,
      on_theaters: false,
      ArticleIdArticle: 20
    }




    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});

  }
};
