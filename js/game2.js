// A function to shuffle the positions of an array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const tiles = document.querySelectorAll('.tile');

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

shuffle(classes)


for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', function () {
    tiles[i].classList.toggle(`${classes[i]}`);
  });
}
