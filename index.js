// Dice Generation
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomnumber1 + '.png');
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomnumber2 + '.png');

// Title Generation
if (randomnumber1 > randomnumber2) {
  document.querySelector('h1').innerHTML = '<i class="fas fa-flag"></i> Player 1 Wins!';
} else if (randomnumber2 > randomnumber1) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins! <i class="fas fa-flag"></i>';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
