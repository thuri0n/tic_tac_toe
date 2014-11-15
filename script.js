/* Game logic */

	function initGame() {
		var mainArray = [ [0,0,0], [0,0,0], [0,0,0] ],
			playerFlag = true; // if hui then true, else pizda
			arrayLength = mainArray.length;

		checkWinner();

		function trackChanges(posX, posY) {
				
			mainArray[posX][posY] = (playerFlag) ? 'x' : 'o';

			playerFlag = !playerFlag;

			return mainArray[posX][posY];
		}

		function checkWinner() {
			var i = 0,
				j = 0,
				k = 0;

			for (i; i < arrayLength; i++) {
				for (j = 0; j < arrayLength; j++) {
					console.log(mainArray[i][j]);
					k++;
				}
			}
			console.log('------------');
			console.log(k + ' times');
		}
	}

jQuery(document).ready(function($) {
	$('#start').on('click', function() {
		initGame();
	})
});