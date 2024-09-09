import readline from 'readline';
async function generateEllipsis()
{
    for(let i = 0; i < 3; i++)
    {
        process.stdout.write('.');
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(1000);
    }
    console.log('');
}

async function calculator(num1, num2, operator)
{
    process.stdout.write('Generating the result');
    await generateEllipsis();

    let result = 0;

    switch(operator)
    {
        case('+'):
        {
            result = num1 + num2;
            break;
        }
        case('-'):
        {
            result = num1 - num2;
            break;
        }
        case('*'):
        {
            result = num1 * num2;
            break;
        }
        case('/'):
        {
            result = num1 / num2;
            break;
        }
        default:
        {
            throw new Error('Invalid operator');
        }
    }
    return result;
}


/*
 * @returns {Promise<string>}
 */
async function getInput(prompt, number)
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = await new Promise((resolve) =>
    {
        rl.question(prompt, (answer) =>
        {
            if (number)
            {
                resolve(parseFloat(answer));
            }
            else
            {
                resolve(answer);
            }
        });
    });
    rl.close()

    return input;
}

async function start()
{

    let num1 = await getInput('Enter your first operand: ', true);
    let num2 = await getInput('Enter your second operand: ', true);
    let operator = await getInput('Enter your operator: ');

    try
    {
        let result = await calculator(num1, num2, operator);
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    }
    catch(error)
    {
        console.error(error.message);
    }
}

await start();