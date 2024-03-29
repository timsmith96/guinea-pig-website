const tiles = document.querySelectorAll('.tile');
let tilesFlipped = [];
let correctTiles = [];
const girls = [
  'beans',
  'dooda',
  'dooda2',
  'beans2',
  'allthree',
  'pingu',
  'dooda',
  'beans',
  'pingu',
  'allthree',
  'beans2',
  'dooda2',
];



// Looping through all tiles
for (let i = 0; i < girls.length; i++) {
  tiles[i].addEventListener('click', function () {
    // Toggling background image on click for each tile
    tiles[i].classList.toggle(`${girls[i]}`);
    // Adding the clicked on tile to the empty tilesFlipped array
    tilesFlipped.push(tiles[i]);
    // Once two tiles have been clicked, call function reset tiles after 2seconds
    if (tilesFlipped.length === 2) {
      // Checking if the two tiles flipped over are the same
      if (tilesFlipped[0].classList[1] === tilesFlipped[1].classList[1]) {
        console.log('match!');
        // If they are, add them to an array called correctTiles
        correctTiles.push(tilesFlipped[0]);
        correctTiles.push(tilesFlipped[1]);
        // And give the correct tiles a bright green border
        for (correctTile of correctTiles) {
          correctTile.style.border = '3px solid #66ff00';
        }
      } else {
        for (tileFlipped of tilesFlipped) {
          tileFlipped.style.border = '3px solid red';
        }
        console.log('no match!');
        setTimeout(resetTiles, 1000);
      }
      tilesFlipped = [];
    }
  });
}

function resetTiles() {
  // Loop through all tiles
  for (let i = 0; i < tiles.length; i++) {
    // If the current tile is in the correct tiles list
    if (correctTiles.includes(tiles[i])) {
      // Don't do anything
      console.log('do nothing');
    } else {
      // If the current tile has the bacgkround image class of the girls showing and isn't in the correct list...
      if (tiles[i].classList.contains(`${girls[i]}`)) {
        // Toggle that class off to hide the background image of the girls
        tiles[i].style.border = 'none';
        tiles[i].classList.toggle(`${girls[i]}`);
      }
    }
  }
}

