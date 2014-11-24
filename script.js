/* Game logic */


jQuery(document).ready(function($) {

	// Game start
	//$('#start').on('click', function() {
	//	initGame();
	//})

	function initGame() {
		var mainArray = [ [0,0,0], [0,0,0], [0,0,0] ],
			playerFlag = true; // if hui then true, else pizda
			arrayLength = mainArray.length;

	$("input", "#table_game").on('change', function() {
		var posx = $(this).data('posx'),
			posy = $(this).data('posy'),
			classFlag = playerFlag ? 'penis' : 'vagina';
		$(this).addClass(classFlag);
		trackChanges(posx, posy);
		if(checkWinner()) {
			alert(classFlag + ' has won!!!');
			$('input[type="reset"]').trigger('click');
		}
	});

	$("input[type=reset]").on('click',function() {
		$("input", "#table_game").each(function() {
			$(this).removeClass('penis');
		});
		resetGame();
	});

	function trackChanges(posX, posY) {
			var playerSign = playerFlag ? 'x' : 'o';
				
			mainArray[posX][posY] = playerSign;

			playerFlag = !playerFlag;

			return mainArray[posX][posY];
			
		}

	function resetGame() {
		mainArray = [ [0,0,0], [0,0,0], [0,0,0] ];
		playerFlag = true;
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
				winFlagByRow = true;
				for (j = 0; j < arrayLength; j++) {
					
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
			
			return finalWinFlag;
		}
	}
	initGame();
});