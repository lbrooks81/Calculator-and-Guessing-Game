/**
 * Generates a random integer between a lower and an upper bound (inclusive).
 * If only one argument is provided, assumes the lower bound is 0.
 * @param {number} lower The lower bound of the range.
 * @param {number} [upper] The upper bound of the range (optional).
 * @returns {number} A random integer between lower and upper (inclusive).
 */

import readline from 'readline';
function randomInteger(lower, upper)
{
    if (upper === undefined)
    {
        upper = lower;
        lower = 0;
    }
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function guessingGame()
{
    const numberToGuess = randomInteger(0, 10);
    let guessesRemaining = 5;
    while(guessesRemaining > 0)
    {
        let userGuess = await new Promise((resolve) =>
        {
            rl.question('Please enter your guess: ', (answer) =>
                {
                    resolve(parseInt(answer));
                });
        });

        if (userGuess !== numberToGuess)
        {
            guessesRemaining--;
            console.log(`You guessed incorrectly. You have ${guessesRemaining} guesses remaining.`);
            continue;
        }

        if (userGuess === numberToGuess)
        {
            console.log('You guessed correctly!');
            return;
        }
    }
    console.log(`You ran out of guesses. The correct answer was ${numberToGuess}`);

}

await guessingGame();
rl.close();