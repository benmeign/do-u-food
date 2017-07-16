# do-u-food

1. Objective and context of the game

    This game is a food education game.

    It involves 1 player.
    The player has 1 minute to answer as many questions as possible.
    He is suggested with a fruit or a vegetable and needs to find the right season in France for this fruit or vegetable.
    There may be several answers for 1 fruit or vegetable.
    The number of points depends on the difficulty and varies from 1 to 4.

    After 1 minute, the timer ends the game. The player can play again.

    Enjoy & learn so as to improve and master seasons for fruits & vegetables!


2. Approach

      Visually, used bootstrap and hiding/showing boxes thanks to flex display for positions + jquery for animation.
      For the logic of the game, 3 js files:
        - 1 with the library of elements "foodLibrary.js"
        - 1 game consol "index.js"
        - 1 with the Timer code "timer.js"
        - 1 with the whole game logic "seasonGame.js"

      Unsolved problems:
        - I would like to pause the timer once the player clicks on 1 option so as for him to have time to read the answer > I didn't manage to do so
        - I would like to restructure the SeasonGame.js file to have it cleaner
        - I would like to change the message of the game depending on the final score. (<10, 10-20, 20-30, >30)
        - I would like to add randomn smileys to the right or wrong answers options
        - I would like to add some fruits and vegetables that are not cultivated in France so as to add an option "This is never the season in France", if a user gets wrong to these, the score goes down to zero.
        - I would like to save the scores in a database and have a ranking of all players after each session, each player entering her/his name and displaying the Top 3 scores.
