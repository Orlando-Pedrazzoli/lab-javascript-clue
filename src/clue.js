// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple',
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue',
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description:
      'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow',
  },
];

// Rooms Array

const roomsArray = [
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio',
];

// Weapons Array

const weaponsArray = [
  { name: 'Rope', weight: 10 },
  { name: 'Knife', weight: 8 },
  { name: 'Candlestick', weight: 2 },
  { name: 'Dumbbell', weight: 30 },
  { name: 'Poison', weight: 2 },
  { name: 'Axe', weight: 15 },
  { name: 'Bat', weight: 13 },
  { name: 'Trophy', weight: 25 },
  { name: 'Pistol', weight: 20 },
];

// ITERATION 2

function selectRandom(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return undefined;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

function pickMystery() {
  const randomSuspect = selectRandom(suspectsArray);
  const randomWeapon = selectRandom(weaponsArray);
  const randomRoom = selectRandom(roomsArray);

  const mystery = {
    suspect: randomSuspect.firstName + ' ' + randomSuspect.lastName,
    weapon: randomWeapon.name,
    room: randomRoom,
  };

  return mystery;
}

// Function to select a random element from an array
function selectRandom(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// ITERATION 3

function revealMystery(mystery) {
  return `${mystery.suspect} killed Mr. Boddy using the ${mystery.weapon} in the ${mystery.room}!`;
}
