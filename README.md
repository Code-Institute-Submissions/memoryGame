# Memory Game

The brief of the project was to create a simple memory games based on the famous memory game known as Simon. The game needed to be a single page application, be responsive and make use of JavaScript, semantic HTML and CSS
## Game Logic
The game creates a random sequence of boxes that will light up in order and get bigger after each turn. The random sequence will need to continue on from the previous sequence and not start as a new sequence after each turn. The user is then required to repeat this sequence back by clicking the boxes in the same order they were highlighted and pressing the answer button when completed.
The game layout is 2 by 2 grid of four boxes each coloured red blue green and yellow. Each box is given an ID within the index.html file depending on its colour.


    <div class="container main">
        <div class="row justify-content-centre">
            <div class="box col-4 align-self-centre" id="red-box"></div>
            <div class="box col-4 align-self-centre" id="blue-box"></div>
            <div class="w-100"></div>
            <div class="box col-4 align-self-centre" id="green-box"></div>
            <div class="box col-4 align-self-centre" id="yellow-box"></div>
            <div class="w-100"></div>
        </div>

In order to create the sequence, an array called boxes was created and a variable called i was created

```var boxes = ["red", "blue", "green", "yellow"];```.

These were used in a function called gamePlay 
The first thing the function did was create a random number between 0 and 3 and applied this value to the variable i.

```i = Math.floor((Math.random() * 4));```

This random number is then applied to a variable call selected that is defined as follows 

```var selected = "#" + boxes[i] + "-box";```
 
 Therefore, depending on what number was generated would define the value of selected.

**i=0 would return "#red-box"**

**i=1 would return "#blue-box"**

**i=2 would return "#green-box"**

**i=3 would return "#yellow-box"**

The next thing the function did was add this randomly generated item to a new array called "sequence". The more the function runs the more randomly selected boxes will be added to our array called sequence.

```javascript 
function buildSequence() {
            sequence.push(selected);
        }
```

Once the sequence was created the next process we wanted to do was for the actual game to highlight the sequence to the user.
In order to do this a new function was created called animate. jQuery was used in the coding as below

```JavaScript
    function animates(n) {
        $(sequence[n]).animate({ opacity: "0.5" }, "slow");
        $(sequence[n]).animate({ opacity: "1" }, "slow");
        n++;

        if (n <= sequence.length) {
            setTimeout(function() { animates(n); }, 2000);
        }
    }
```
The first piece of the code animates an item from the array sequence with the index n. The function will run while n increases by 1 until it is equal to the size of the array sequence.
Each box in our game was given an id in the html as

*"#red-box"*

*"#blue-box"*

*"#green-box"*

*"#yellow-box"*

As per the sequence builder, when a box is randomly selected it is added to the array sequence. Therefore, the function will animate each box with an ID matching to that in the sequence array and in the correct order until all items in the array have been animated.
The animation is a simple change in opacity that shows the player which boxes are part of the sequence.

For example, the build sequence function could build an array of **["#green-box", "#yellow-box", "#blue-box"]** and would therefore animate the same ids in this order.

The reason for the if statement was to set a time limit between each animation, without this all items in the array would animate at the same time.

The opening page of the game will just have one start button. Once this button is pressed the game begins.
The start button will run the two functions explained above, GamePlay and animate, as well as now show all the boxes and hide the start button. A new button will also appear called answer.
On the first go one box will be animated which will be highlight to the player this is the first box in the sequence. The player is required to repeat the sequence back by clicking the correct boxes and then clicking the answer button. If the answer is correct a message will appear advising the player they can move on to the next sequence where two boxes will animate. If their selected sequence is incorrect then they will get a message advising the same and a new button will appear to restart the game.
The player can keep going until they are no longer able to repeat the sequence.
In order for the game to determine which box a user has selected a for loop was created

```JavaScript
    for (a = 0; a <= 3; a++) {
        $("#" + boxes[a] + "-box").click(function() {
            var clickedBox = "#" + this.id;
            answers.push(clickedBox);
            $(this).animate({ opacity: "0.5" }, "slow");
            $(this).animate({ opacity: "1" }, "slow");
        });
    }
```

The for loop starts at a = 0 and runs thru a = 1, 2, and 3 so that each id will run the same code if it is clicked by the user.
Therefore, if a person clicks the "#red-box" then the red box on the game will be animated and the id "#red-box" added to a new array called answers.

once the answer button is clicked the following code is run.

```JavaScript
    $("#answer-button").click(function() {
        for (y = 0; y < sequence.length; y++) {
            if (sequence[y] == answers[y]) {
                $("#next-button").show();
                $("#correct-message").show();
                $("#answer-button").hide();
                $(".box").hide();
            }


            else {
                $(".box").hide();
                $("#lose-message").show();
                $("#correct-message").hide();
                $("#start-button").show();
                $("#answer-button").hide();
                $("#next-button").hide();

                for (var t = sequence.length; t > 0; t--) {
                    sequence.pop();
                }
            }
        }
    });
```

The for loop is what compares the answer array to the sequence array. The if statement is asking the program to compare an item from array sequence to an item with the same index in array answer. 
Sequence array is built as per the random selected boxes and the answer array is built depending on what the user selects. Therefore, the order of the arrays will need to be the same for the answer to be correct.

The reason a for loop is used for this is because sequence and array will grow with each turn.

If the arrays match, the “correct message box” will appear as well as a next button. When the next button is clicked then the gamePlay and animate functions will run only this time there will be a bigger sequence as the sequence array will be able to have more items added to it.

If the arrays don’t match the lose message will appear as well as the start button so the game can be played again. 
In order to make sure the game creates a new sequence for a new game, a for loop has been added that empties the array called sequence if the user’s answer is incorrect.

After the comparison has been made a for loop will also run to empty the answer array so that the user can’t start their answer again from scratch. This means that the user will need to repeat the sequence again from the start rather than just add on to the previous answer.

```JavaScript
        for (var t = answers.length; t > 0; t--) {
            answers.pop();
            console.log(answers);
        }
```
## UX
As part of the UX one persona was created known as the game player.
Persona –Game player
Game will need to be easy to follow and not have any complicated functions. The boxes should be highlighted so that they are easily seen. Rules will need to be clear and easy to follow. Will need an option to re-start the game. Would like to be prompted when their answer is correct or incorrect. Would like to be able to play on laptop but also on the go via mobile / tablets.
Wire frames were also created in order to design the layout of the game and these can be found [here][1]

[1]: https://github.com/cjmorgan1185/interactive-front-end-project/tree/master/Design
## Features
### Existing Features
•	Boxes are highlighted when clicked by user
•	Restart button when game finished so user can start again
•	Answer button once user happy with their sequence.
### Features Left to Implement
•	Scoreboard for users
•	User profiles

### Technologies Used
*	JQuery
    * The project uses JQuery to simplify javascript functions and the game play. 
    * https://jquery.com/
* Bootstrap
    * Grid layout for boxes
    * https://getbootstrap.com/

# Testing
1.	Start Button:
    1.	Click “Start Button”
    2. Game loads
2.	Check boxes highlight when clicked
    1.	Click all boxes
    2.	All boxes light up as expected
3.	Submit answer
    1.	Select correct answer and verify “answer correct” message appears
    2.	Select incorrect answer and verify “incorrect answer” message appear
4.	Next button
    1.	Get answer correct
    2.	Click next button
    3.	Verify sequence begins the same as before with one extra box highlighted.
5.	Restart 
    1.	Get answer incorrect
    2.	Click start button
    3.	Verify new sequence starts and only one box lights up
6.	Test different answer types
    1.	Too many boxes selected verify gives incorrect answer
    2.	Too few boxes selected verify gives incorrect answer
    3.	No boxes selected verify gives incorrect answer
    4.	Incorrect sequence selected verify gives incorrect answer
    5.	Correct sequence gives correct answer

7. link to browser test can be found [here][4]

[4]:https://github.com/cjmorgan1185/memoryGame/blob/master/design/testing.xlsx?raw=true

In relation to test 6, the first test showed that if you selected the correct sequence but added more boxes to you sequence it would still show answer correct. (i.e. sequence was red, red, blue, if user selected red, red, blue, blue, it would return correct answer message.) To fix this an extra condition was added to the answer if statement that took into account the size of the arrays
```JavaScript
    $("#answer-button").click(function() {
        for (y = 0; y < sequence.length; y++) {
            if (sequence[y] == answers[y] && sequence.length == answers.length {
                $("#next-button").show();
                $("#correct-message").show();
                $("#answer-button").hide();
                $(".box").hide();
            }
```

# Deployment
The website has been deployed to github pages and can be found [here][3]

[3]: https://cjmorgan1185.github.io/memoryGame/
# Credits
## Acknowledgements
•	Details of the original game called SIMON can be found [here][2]

[2]: https://en.wikipedia.org/wiki/Simon_(game)
