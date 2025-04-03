 // Retrieve stored scores or set to 0 if not found
 let player1Count = parseInt(localStorage.getItem("player1Count")) || 0;
 let player2Count = parseInt(localStorage.getItem("player2Count")) || 0;
 let drawCount = parseInt(localStorage.getItem("drawCount")) || 0;

 // Generate random dice rolls
 let i = Math.ceil(Math.random() * 6);
 let j = Math.ceil(Math.random() * 6);

 // Determine the winner and update counts
 if (i > j) {
   document.querySelector('.container h1').textContent = '🎉 Player 1 Wins!';
   player1Count++;
   localStorage.setItem("player1Count", player1Count);
 } else if (i < j) {
   document.querySelector('.container h1').textContent = '🎉 Player 2 Wins!';
   player2Count++;
   localStorage.setItem("player2Count", player2Count);
 } else {
   document.querySelector('.container h1').textContent = '🤝 It\'s a Draw!';
   drawCount++;
   localStorage.setItem("drawCount", drawCount);
 }

 // Update the displayed dice images
 document.querySelector('.img1').setAttribute('src', `images/dice${i}.png`);
 document.querySelector('.img2').setAttribute('src', `images/dice${j}.png`);

 // Update the score display
 document.querySelector('#player1 span').textContent = player1Count;
 document.querySelector('#player2 span').textContent = player2Count;
 document.querySelector('#draw span').textContent = drawCount;

 // Reload the page to play again
 function reloadPage() {
   location.reload();
 }

 // Reset all scores
 function resetCount() {
   localStorage.setItem("player1Count", 0);
   localStorage.setItem("player2Count", 0);
   localStorage.setItem("drawCount", 0);
   reloadPage();
 }