//console.log("javascript is working")

$(document).ready(function()
{
	
	
	var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var currentWord = "hello";
	var guesses = $("#guessLetters");
	var guessBtn = $("#enterGuess");
	var restartBtn= $("#restart");
	var numGuessL = $("#numberGuess");
	var lettersRem = $("#letters");
	var checked = null;
	var correctGuessA = [];
	
	Starting()
	
	function Starting()
	{
		startWord();
		
		$("#numberGuess").text(6);
		insertPic();
		var length = alpha.length;
		console.log(length);
		for(let i = 0;i< alpha.length;i++)
		{
			lettersRem.text(lettersRem.text()+ alpha[i] + " ")
		}
		
	}
	
	function startWord()
	{
		for(let i = 0; (i)<currentWord.length;i++)
		{
			var sString = currentWord.substring(i,(i+1));
			$("#win").append("<span id=" + i + ">_ </span>" )
		}
	}
	
	guessBtn.click(function()
	{
		var letterGuess = document.getElementById("guessEntered").value;
		makeAGuess(letterGuess)
		insertPic();
		
		if(checkWord() == true)
		{
			location.reload()
			alert("You Win!!!!!!!!!!!!!!!!!!!!!!!!!!!")
		}
		if(numGuessL.text() <= 0)
			alert("You Are Out of Guesses. Try Again");
		
	});
	
	function makeAGuess(guess)
	{
		
		$("#sameLetter").text("");
		


		if(checkGuessValid(guess) == true && checkGuess(guess) == true)
		{
			
			removeRemaining();
			guesses.text(guesses.text() + " " + guess);
		}
		else if(checkGuessValid(guess) == true && checkGuess(guess) == false)
		{
			removeRemaining();
			guesses.text(guesses.text() + " " + guess);
			numGuessL.text(numGuessL.text() - 1);
			$("#sameLetter").text("Thats Not In The Word Try Again");
		}
		else
			$("#sameLetter").text("You Already Guessed that Letter");
		

		
	}
	
	
	
	function removeRemaining()
	{
		alpha = alpha.filter(function(elem)
		{
			return elem != document.getElementById("guessEntered").value;
		});
		lettersRem.text("");
		for(let i = 0;i< alpha.length;i++)
		{
			
			lettersRem.text(lettersRem.text()+ alpha[i] + " ");
		}
		
		
	}
	
	function checkGuessValid(guess)
	{
		var locate = false;
		for(let i = 0;i<alpha.length;i++)
		{
			if(guess == alpha[i])
			{
				locate = true;
			}
				
				
		}
		
		return locate;
			
	}
	
	function checkGuess(guess)
	{
		var rightGuess = false;
		
		for(let i = 0;i<currentWord.length;i++)
		{
			if(guess == currentWord.substring(i,i+1))
			{
				var rightLetter = ("#" + i);
				$(rightLetter).text("");
				$(rightLetter).text(guess);
				
				rightGuess = true;
				
			}
			
		}
		
		
		
		return rightGuess;
	}
	
	function checkWord()
	{
		console.log(currentWord)
		var winning = true;
		for(let i = 0;i<currentWord.length;i++)
		{
			var spot = ("#" + i);
			if($(spot).text() == "_ ")
			{
				winning = false;
				break;
			}
		}
		
		return winning;
		
	}
	
	function insertPic()
	{
		var element = document.getElementById("picture");
		element.parentNode.removeChild(element);
		var picture = "picture";
		var picURL = "C:/Users/admin/workspace/Hangman/resources/static/pictures/hangman" + $("#numberGuess").text() + ".png";
		$("#pic").append("<div id=" + picture + "><img src=" + picURL + "></img></div>")
	}
	
	
	restartBtn.click(function()
	{
		location.reload()
	});
	
	

	
	
	
	
});