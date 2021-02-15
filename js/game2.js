// A function to shuffle the positions of an array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const tiles = document.querySelectorAll('.tile');
const buttons = document.querySelectorAll('.paw-tile');
const squeakerOne = document.querySelector('#squeaker-one');
const squeakerTwo = document.querySelector('#squeaker-two');
const squeakerThree = document.querySelector('#squeaker-three');
const squeakerFour = document.querySelector('#squeaker-four');
const squeakerFive = document.querySelector('#squeaker-five');

const manySqueakers = [
  squeakerOne,
  squeakerTwo,
  squeakerThree,
  squeakerThree,
  squeakerFour,
  squeakerFive,
];

console.log(squeakerOne);

const classes = [
  'beans',
  'dooda',
  'pingu',
  'allthree',
  'beans2',
  'dooda2',
  'beans',
  'dooda',
  'pingu',
  'allthree',
  'beans2',
  'dooda2',
];

shuffle(classes);

let tilesFlipped = [];
const correctTiles = [];

// loop through all tiles
for (let i = 0; i < tiles.length; i++) {
  // add click event listener
  tiles[i].addEventListener('click', function () {
    // turn on the class (randomised now) to show the guinea pig

    tiles[i].classList.toggle(`${classes[i]}`);
    tiles[i].style.pointerEvents = 'none';
    tiles[i].closest('.paw-tile').style.cursor = 'auto';
    // adding turned over tile to the tilesflipped array
    tilesFlipped.push(tiles[i]);
    // checking for when 2 tiles have been turned off
    console.log(tilesFlipped.length);
    if (tilesFlipped.length === 2) {
      // if two tiles have been turned over, check if they are the same
      if (tilesFlipped[0].classList[1] === tilesFlipped[1].classList[1]) {
        // if they are the same, add both to an array called correctTiles
        correctTiles.push(tilesFlipped[0]);
        correctTiles.push(tilesFlipped[1]);
        // making all tiles unclickable
        turnOffAllClick(tiles);
        // change the border to green for the correct tiles
        for (correctTile of correctTiles) {
          correctTile.style.border = '3px solid #66ff00';
        }
        setTimeout(resetTilesCorrect, 1000);
        // if they are not the same
      } else {
        // disable all tiles
        turnOffAllClick(tiles);
        for (tileFlipped of tilesFlipped) {
          // add a red border
          tileFlipped.style.border = '3px solid red';
        }
        setTimeout(resetTilesIncorrect, 1200);
      }
      tilesFlipped = [];
    }
    if (correctTiles.length === 12) {
      setTimeout(toFireworks, 5000);
      playWinningSqueak(squeakerOne);
      setTimeout(playWinningSqueak, 500, squeakerTwo);
      setTimeout(playWinningSqueak, 1000, squeakerThree);
      setTimeout(playWinningSqueak, 1500, squeakerFour);
      setTimeout(playWinningSqueak, 2000, squeakerFive);
      setTimeout(pauseSqueakers, 5000);
    }
  });
}

function resetTilesIncorrect() {
  // Looping through all tiles
  for (let i = 0; i < tiles.length; i++) {
    // for all tiles not in the correct list and not flipped over, sort out the clickability and formatting
    if (!correctTiles.includes(tiles[i])) {
      tiles[i].style.border = 'none';
      tiles[i].style.pointerEvents = 'auto';
      tiles[i].closest('.paw-tile').style.cursor = 'pointer';
    }
    // if the tile is currently flipped over
    if (tiles[i].classList.contains(`${classes[i]}`)) {
      // if the flipped over tiles aren't in the correct tiles list, flip them back over
      if (!correctTiles.includes(tiles[i])) {
        tiles[i].classList.toggle(`${classes[i]}`);
      }
    }
  }
}

function resetTilesCorrect() {
  for (let i = 0; i < tiles.length; i++) {
    if (!correctTiles.includes(tiles[i])) {
      tiles[i].style.border = 'none';
      tiles[i].style.pointerEvents = 'auto';
      tiles[i].closest('.paw-tile').style.cursor = 'pointer';
    }
  }
}

function turnOffAllClick(tiles) {
  for (tile of tiles) {
    tile.style.pointerEvents = 'none';
    tile.closest('.paw-tile').style.cursor = 'auto';
  }
}

function playWinningSqueak(squeaker) {
  squeaker.loop = 'true';
  squeaker.play();
}

function pauseSqueakers() {
  for (let squeaker of manySqueakers) squeaker.pause();
}

function toFireworks() {
  window.location.replace('http://www.theguineagirls.com/fireworks.html');
}

const joke = document.querySelector('#joke');
const jokeButton = document.querySelector('#jokegenerator');

const getJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  return res.data.joke;
};

const addNewJoke = async () => {
  const jokeText = await getJoke();
  joke.innerText = jokeText;

};

jokeButton.addEventListener('click', addNewJoke);
