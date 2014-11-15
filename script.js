/* Game logic */

	function initGame() {
		var mainArray = [ [0,0,0], [0,0,0], [0,0,0] ],
			playerFlag = false; // if hui then true, else pizda
			arrayLength = mainArray.length;

		function trackChanges(posX, posY) {
				
			mainArray[poX][posY] = (playerFlag) ? 'x' : 'o';

			playerFlag = !playerFlag;
		}

		function checkWinner() {
			// ...
		}
	}

jQuery(document).ready(function($) {
	$('#start').on('click', function() {
		initGame();
	})
});