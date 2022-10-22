const videos = [
  {
    id: 1,
    name: "Jyothiprakash Trishuleshwar",
    video: "https://youtube.com/embed/YtFL5Xaj9co",
    content: `Had a huge deficit in the verbal section, took just 3 months to nail a 770 in his first attempt. He was admitted to the Michigan Ross School of Business.
    Today, Jyothiprakash is a Director and heading the Product vertical at GoDaddy. 
    `,
    year: 2007,
  },
  {
    id: 2,
    name: "Pratik Khandelwal ",
    video: "https://youtube.com/embed/SNWydznie1c",
    content: `Was excellent in quant but verbal was a massive problem. In his first attempt, he scored a 750 and took a few more weeks to reach his dream score of 770 and an admit to the University of Chicago Booth.
    Today, Pratik is a Product lead at Walmart e-commerce. 
   
    `,
    year: 2008,
  },
  {
    id: 3,
    name: " Karthykeyan Aiyar",
    video: "https://youtube.com/embed/v6chFg92p0w",
    content: `Struggled with the whole of verbal, especially in Reading Comprehension. As sincere as one could be, he practiced all the given extra assignments, worked on his weakness, and reached a commendable score of 42 from just 16.
    Today, Karthykeyan is a consultant at one of the finest consulting companies, AT Kearney.
     
    `,
    year: 2009,
  },
  {
    id: 4,
    name: "Raghav Goel ",
    video: "https://youtube.com/embed/rhl_j1iUtbw",
    content: `Having an exceptional profile and being good in Quant, struggled a lot with verbal. He aspired to MIT Sloan and made his dream into a reality through a score of 770.
    Raghav is currently working with Linkedin, Strategy & Operation.
    
    `,
    year: 2010,
  },
  {
    id: 5,
    name: "Avik Gupta",
    video: "https://youtube.com/embed/Y5UoSQbDK4w",
    content: `Problem areas were mainly with Reading Comprehension and Data Sufficiency.
    Avik racked up to score a 770 in his first attempt and was admitted to the M.Ross School of Business.
    
    `,
    year: 2011,
  },
  {
    id: 6,
    name: "Harsha k nagaraj ",
    video: "https://youtube.com/embed/JNh9dz6hvGs",
    content: `In his first attempt Harsh scored a 720 and on reaching out to Top-One-Percent, tightened all the loose ends in Verbal to score a 770. He pursued his Master's in the Darden Graduate School of Business Administration and is now an Associate Partner with Deloitte.  
 
    `,
    year: 2012,
  },
  {
    id: 7,
    name: "Teja Achanta",
    video: "https://youtube.com/embed/ogAMub2t5ro",
    content: `Faced an extreme problem with Sentence correction with almost no accuracy. He joined classes at Top-One-Percent and prepared from a 630  to an exemplary 780. Teja pursued his MBA from Georgetown University.
    `,
    year: 2013,
  },
  {
    id: 8,
    name: "Trishika Pattabiraman",
    video: "https://youtube.com/embed/4rFSIgmgqJc",
    content: `Scored a massive 770, juggling with work and her GMAT. After going to Carnegie Mellon University, she is now working with Amazon AWS as a Senior Product Manager. Watch to know more about her preparation process. 
    `,
    year: 2014,
  },
  {
    id: 9,
    name: "Tanvi Sahani",
    video: "https://youtube.com/embed/Xtxup9MBmk0",
    content: `Tanvi's weaker areas were both Quant & Verbal and had tried various institutes before coming to Top-One. She closed in with a 770 and a towering 45 Verbal in her first attempt. After relentless training for the B-school interviews, received a final admit to the Michigan Ross School of Business.
    Worked majorly in the field of Product strategy and consulting and is now a Senior Product Manager at Splunk.
     
    `,
    year: 2015,
  },
  {
    id: 10,
    name: "Akshat Mittal",
    video: "https://youtube.com/embed/n4SHZIDphHQ",
    content: `After trying pretty much everything, Akshat found very little improvement in the areas of RC, CR & SC. He took Top-One services for both Gmat and admissions and after nailing a score of 770, received final admits from London Business School, Michigan Ross, and ISB.
    He is now the Strategic Product lead at Revolut.
     
    `,
    year: 2016,
  },
  {
    id: 11,
    name: "Akansha Pevekar",
    video: "https://youtube.com/embed/vTYgk8MrslY",
    content: `Following every single instruction diligently, scored an incredible 700 in her first attempt. She was admitted to the Chicago Booth School of Business and is currently working with Mckinsey & Company. 
    `,
    year: 2017,
  },
  {
    id: 12,
    name: "Sushmitha Krishnamoorthy",
    video: "https://youtube.com/embed/EITVSAJdSPQ",
    content: `Was a part of the Self-paced course and with a custom-tailored plan to blend in with both work and undergrad, managed to score a marvelous 770 in her first attempt.  Her 2 months of hard work paid off as she was admitted to Cornell University. 
    `,
    year: 2018,
  },
  {
    id: 13,
    name: "Rishabh Bansal",
    video: "https://youtube.com/embed/z0W-b2oP5JM",
    content: `Had a massive struggle with verbal and pacing. Battling on his timing diligently came through with a score of 770. With admission to the University of Virginia Darden School of Business, he is currently working as an Investment Banker.
    `,
    year: 2019,
  },
  {
    id: 14,
    name: "Vivek Mall",
    video: "https://youtube.com/embed/cLQuv0h5lSI",
    content: `With a lot of personal support, mentoring, and guidance, Vivek scored a stunning 770 in his first attempt.  Watch to know more about his preparation. 
    `,
    year: 2020,
  },
  {
    id: 15,
    name: "Vandita Kamath",
    video: "https://youtube.com/embed/mUXSPafGn24",
    content: `Exhausting all her possible resources ended up with 690 several times and reached out to Sandeep. RC being her weakest point, Octave method completely changed the game and in Just 3 weeks scored a commendable 770. She got final admits to various colleges and chose Wharton with a significant scholarship.
    `,
    year: 2021,
  },

  {
    id: 16,
    name: "Anushka",
    video: "https://youtube.com/embed/zmO5Xhw5jSA",
    content: `Came to Top-One-Percent with a goal of a 680-700 score and an admit to ISB. She scored a jaw-dropping 780 and this has opened her gates to the crème de la creme of B-schools. Catch all the action about her preparation in detail.
    `,
    year: 2022,
  },
  {
    id: 17,
    name: "Amit Kumar",
    video: "https://youtube.com/embed/scJ86XX7vbc",
    content: `In simple terms, an absolute Nationwide GMAT sensation scoring a 770. If you feel you have hardships of any sort, then watch him and learn. A must watch.
    .
    `,
    year: 2022,
  },
];
export default videos;
