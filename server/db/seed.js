const db = require('.');
const { Legislator, User, Rating } = require('./models');

const legislators = [
  {
    name: 'Mike Pence',
    role: 'Vice President of the United States',
    address:'1600 Pennsylvania Avenue Northwest Washington DC 20500',
    party: 'Republican Party',
    phones: ['(202) 456-1111'],
    urls: ['https://www.whitehouse.gov/'],
    photoUrl:
      'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg',
    channels: [
      {
        type: 'Facebook',
        id: 'mikepence',
      },
      {
        type: 'Twitter',
        id: 'VP',
      },
    ],
  },
  {
    name: 'Kirsten E. Gillibrand',
    role: 'U.S. Senator',
    address:'478 Russell Senate Office Building Washington DC 20510',
    party: 'Democratic Party',
    phones: ['(202) 224-4451'],
    urls: ['https://www.gillibrand.senate.gov/'],
    photoUrl: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
    channels: [
      {
        type: 'Facebook',
        id: 'KirstenGillibrand',
      },
      {
        type: 'Twitter',
        id: 'SenGillibrand',
      },
      {
        type: 'YouTube',
        id: 'KirstenEGillibrand',
      },
    ],
  },
  {
    name: 'Charles E. Schumer',
    role: 'U.S. Senator',
    address:'322 Hart Senate Office Building Washington DC 20510',
    party: 'Democratic Party',
    phones: ['(202) 224-6542'],
    urls: ['https://www.schumer.senate.gov/'],
    photoUrl: 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg',
    channels: [
      {
        type: 'Facebook',
        id: 'senschumer',
      },
      {
        type: 'Twitter',
        id: 'SenSchumer',
      },
      {
        type: 'YouTube',
        id: 'SenatorSchumer',
      },
      {
        type: 'YouTube',
        id: 'ChuckSchumer',
      },
    ],
  },
  {
    name: 'Kathleen C. Hochul',
    role: 'Lieutenant Governor of New York',
    address: 'Lieutenant Governor of New York State Albany NY 12224',
    party: 'Democratic Party',
    phones: ['(518) 474-8390'],
    urls: ['http://kathyhochul.com/'],
    channels: [
      {
        type: 'Facebook',
        id: 'ltgovhochulny',
      },
      {
        type: 'Twitter',
        id: 'LtGovHochulNY',
      },
      {
        type: 'YouTube',
        id: 'UCNgh6Me2UyKXOuNDCnsCzPg',
      },
    ],
  }
];

const users = [
  {
    first_name: 'Seline',
    last_name: 'Cox',
    email: 'scox0@t-online.de',
    password: 'Female',
    address: '62168 Burning Wood Street',
    identifyAsBLK: true
  },
  {
    first_name: 'Jan',
    last_name: 'Nares',
    email: 'jnares1@businesswire.com',
    password: 'Male',
    address: '29 Hanson Crossing',
    identifyAsBLK: true
  },
  {
    first_name: 'Karlan',
    last_name: 'Blakeney',
    email: 'kblakeney2@webs.com',
    password: 'Male',
    address: '96071 Sugar Place',
  },
  {
    first_name: 'Nicko',
    last_name: 'Tokley',
    email: 'ntokley3@diigo.com',
    password: 'Male',
    address: '76276 Magdeline Trail',
  },
  {
    first_name: 'Boris',
    last_name: 'Berringer',
    email: 'bberringer4@alexa.com',
    password: 'Male',
    address: '6 Bultman Hill',
  },
];

const ratings = [
  {userId: 1, legislatorId: 1, transparency: 1, publicEngagement: 0, alignWithValues: 1, description: "I can't stand them, they completely disregard the public need and have done so for years."},
  {userId: 2, legislatorId: 1, transparency: 1, publicEngagement: 0, alignWithValues: 1, description: "This tyranny needs to stop, what have they done to help the lower class?"},
  {userId: 3, legislatorId: 1, transparency: 2, publicEngagement: 1, alignWithValues: 4, description: "I don't like that they do not always publicly announce their plans, but they get the job done."},
  {userId: 4, legislatorId: 1, transparency: 2, publicEngagement: 2, alignWithValues: 4, description: "They are someone I can get behind."},
  {userId: 5, legislatorId: 1, transparency: 3, publicEngagement: 5, alignWithValues: 4, description: "They came by the community center and spoke with kids about the dangers of drugs and alcohol abuse. They have good intentions."},
]

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  await Promise.all(
    users.map((user) => {
      return User.create(user);
    })
  );
  await Promise.all(
    legislators.map((legislator) => {
      return Legislator.create(legislator);
    })
  );

  await Promise.all(
    ratings.map((rating) => {
      return Rating.create(rating);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${legislators.length} legislators`);
  console.log(`seeded ${ratings.length} ratings`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}
