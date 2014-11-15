/* Game logic */

	function initGame() {
		var mainArray = [ [0,0,0], [0,0,0], [0,0,0] ],
			playerFlag = true; // if hui then true, else pizda
			arrayLength = mainArray.length;

		trackChanges(2,0,'x');
		trackChanges(2,1,'x');
		trackChanges(2,2,'x');
		alert(checkWinner());
		alert(mainArray);

		function trackChanges(posX, posY, pSign) {
			var playerSign = playerFlag ? 'x' : 'o';

			if (pSign) {
				playerSign = pSign;
			}
				
			mainArray[posX][posY] = playerSign;

			playerFlag = !playerFlag;

			return mainArray[posX][posY];
			
		}

		function checkWinner() {
			var i = 0,
				j = 0,
				winFlagByRow = false;
				//winFlagByColumn = false;
				//winFlag3 = true;
				finalWinFlag = false;

			for (i; i < arrayLength; i++) {
				for (j = 0; j < arrayLength; j++) {
					if (mainArray[i][j] && (mainArray[i][j+1] != undefined)) {
						if ((mainArray[i][j] == mainArray[i][j+1])) {
							winFlagByRow = true;
						}
					}
				}
				if (winFlagByRow) {
					finalWinFlag = true;
				}
			}
			
			return finalWinFlag ? 'Congrats!!! Somebody has won!' : 'Sorry you not a winner!';
		}
	}

jQuery(document).ready(function($) {
	$('#start').on('click', function() {
		initGame();
	})
});