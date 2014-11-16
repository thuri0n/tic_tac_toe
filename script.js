/* Game logic */

	function initGame() {
		var mainArray = [ [0,0,0], [0,0,0], [0,0,0] ],
			playerFlag = true; // if hui then true, else pizda
			arrayLength = mainArray.length;

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
				helperDiagonalValue1 = mainArray[0][0],
				helperDiagonalDesc = arrayLength-1,
				helperDiagonalValue2 = mainArray[0][helperDiagonalDesc],
				heplerFlagArray = [],
				winFlagByRow = true,
				winFlagByColumn = true,
				winFlagByDiagonal1 = true,
				winFlagByDiagonal2 = true,
				finalWinFlag = false;

			for (i; i < arrayLength; i++) {
				for (j = 0; j < arrayLength; j++) {
					winFlagByRow = true;
					// Check if player win by row values
					if (mainArray[i][j-1] != undefined) {
						if (mainArray[i][j] !== mainArray[i][j-1] || mainArray[i][j] === 0) {
							winFlagByRow = false;
						}
					}
					// Check if player win by column values
					if (i>=1 && heplerFlagArray.indexOf(j) === -1) {
						if (mainArray[i][j] !== mainArray[i-1][j] || mainArray[i][j] === 0) {
							heplerFlagArray.push(j);
						}
					}
					// Check if player win by diagonal
					if (i==j) {
						if (mainArray[i][j] !== helperDiagonalValue1 || mainArray[i][j] === 0) {
							winFlagByDiagonal1 = false;
						}
						helperDiagonalValue1 = mainArray[i][j];
					}
					if (j==helperDiagonalDesc) {
						console.log(mainArray[i][j] + '['+i+']' + '['+j+']' +':' + helperDiagonalDesc + ':' + helperDiagonalValue2);
						if (mainArray[i][j] !== helperDiagonalValue2 || mainArray[i][j] === 0) {
							winFlagByDiagonal2 = false;
						}
						helperDiagonalValue2 = mainArray[i][j];
						helperDiagonalDesc--;
					}
				}
				if (winFlagByRow) {
					finalWinFlag = true;
				}
			}

			if (heplerFlagArray.length !== arrayLength || winFlagByDiagonal1 || winFlagByDiagonal2) {
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