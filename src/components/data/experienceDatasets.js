const experienceDatasets = [
  {
    id: 1,
    number: 0,
    image: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
    title: "Personal Projects",
    subtitle: "Just a holder",
    date: "August 2020 - Present",
    achievements: [
      {
        id: 1,
        item: "Designed a Netflix-style web app which pulls movie posters and trailers from an API displayed back to users.",
      },

      {
        id: 2,
        item: "Successfully generated a Tesla front page built in React and deployed Firebase which snaps to section on scroll.",
      },

      {
        id: 3,
        item: "Created Leaf Note, a MERN style web app built in React which takes notes and saves them to an Atlas cluster.",
      },

      {
        id: 4,
        item: "Developed an Authentication app (Whisper Mockup) allowing users to anonymously sign in and submit secrets.",
      },
      {
        id: 5,
        item: "Launched an advertisement for the dog dating app Fetchbone.",
      },

      {
        id: 6,
        item: "Produced Quizzler, a True or False trivia app built in PyCharm, that gets questions from the opentdb.com API.",
      },

      {
        id: 7,
        item: "Developed an International Space Station (ISS) tracker on Python Anywhere which updates every 60 seconds and sends an email to a user if ISS is above the user’s specified latitude and longitude location at night.",
      },
    ],
  },
  {
    id: 2,
    number: 1,
    image: process.env.PUBLIC_URL + "images/carousel/light_bulb.jpg",
    title: "AlNembCo Services LLC",
    subtitle: "Electrician Associate",
    date: "June 2012 - Present",
    achievements: [
      {
        id: 1,
        item: "Installed, maintained, repaired, and tested equipment for the generation and utilization of electric energy for diverse industry clients.",
      },

      {
        id: 2,
        item: "Interpreted blueprints, schematics, and diagrams used for mapping electrical power to households and commercial buildings in Northern Virginia, Maryland, and Washington D.C.",
      },

      {
        id: 3,
        item: "Cultivated excellent relationships with clients, resulting in a strong base of referral business through listserv.",
      },

      {
        id: 4,
        item: "Maintained customer records and managed bookkeeping of expenditures using QuickBooks.",
      },
    ],
  },
  {
    id: 3,
    number: 2,
    image: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
    title: "George Mason University (GMU)",
    subtitle: "Rapid Reliable Urban Mobility System (RRUMS) Project Member",
    date: "August 2019 - May 2020",
    achievements: [
      {
        id: 1,
        item: "Capstone project developed with the goal of reducing the travel Planning Time Index (PTI) from 1.6 to 1.\n\tUrban Air Mobility (UAM) simulation model built in Java comprised of 5 UAM destinations and 13 flight paths between airport and business districts in the Washington, D.C. area.",
      },

      {
        id: 2,
        item: "Composed Business Case proposing 20% faster transportation with 97.9% reliability through the D.C. area.\n\tDetailed 10% penetration rate of high-value market with an anticipated 10-year profit forecast of $195.6M, and a 2-year breakeven point with an estimated 122.26% ROI at $200 per passenger ticket.",
      },

      {
        id: 3,
        item: "Designed mobile app layout in Adobe XD enabling passengers to purchase tickets, and view boarding, departure, and arrival information for expected UAM vehicles.",
      },

      {
        id: 4,
        item: "Developed webpage visualizations in RStudio with RShiny to generate RRUMS transportation logistics output data at each arrival and departure location for up to a 24-day period.",
      },

      {
        id: 5,
        item: "Defined Context, Stakeholder, and Enterprise Analyses.\n\tUsed to set the stage for RRUMS development and define interactions between industry clients and the surrounding environment.",
      },
    ],
  },
];

export default experienceDatasets;
