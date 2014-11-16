/* Game logic */

	function initGame() {
		var mainArray = [ [0,0,0], [0,0,0], [0,0,0] ],
			playerFlag = true; // if hui then true, else pizda
			arrayLength = mainArray.length;

		trackChanges(0,0,'x');
		trackChanges(1,0,'x');
		trackChanges(2,0,'x');
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
				heplerFlagArray = [],
				winFlagByRow = true,
				winFlagByColumn = true;
				//winFlag3 = true;
				finalWinFlag = false;

			for (i; i < arrayLength; i++) {
				for (j = 0; j < arrayLength; j++) {
					// Check if player win by row values
					if (mainArray[i][j] && mainArray[i][j+1] != undefined) {
						if (mainArray[i][j] !== mainArray[i][j+1]) {
							winFlagByRow = false;
						}
					}
					// Check if player win by column values
					if (i>=1 && heplerFlagArray.indexOf(j) === -1) {
						if (mainArray[i][j] !== mainArray[i-1][j] || mainArray[i][j] === 0) {
							heplerFlagArray.push(j);
						}
					}
				}
				if (winFlagByRow) {
					finalWinFlag = true;
				}
			}

			if (heplerFlagArray.length !== arrayLength) {
				finalWinFlag = true;
			}
			
			return finalWinFlag ? 'Congrats!!! Somebody has won!' : 'Sorry you are not a winner!';
		}
	}

jQuery(document).ready(function($) {
	$('#start').on('click', function() {
		initGame();
	})
});