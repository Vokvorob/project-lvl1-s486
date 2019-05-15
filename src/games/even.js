import launchGame from '../common/launchGame'
import { randomNum } from '../common/utils'

const checkEven = (num) => num % 2 === 0 ? 'yes' : 'no';

const game = () => {
    const arg = randomNum(1, 20);
    const correctAnswer = checkEven(arg);
    return [arg, correctAnswer];
};

export default () => launchGame(game, 'Answer "yes" if number even otherwise answer "no".');