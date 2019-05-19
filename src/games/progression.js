import launchGame from '../launchGame';
import { randomNum } from '../utils';

const description = 'What number is missing in the progression?';

const progression = (initialNumber, progressionStep, lengthProgression) => {
  const arr = [initialNumber];
  for (let i = 1; i < lengthProgression; i += 1) {
    arr.push(progressionStep + arr[i - 1]);
  }
  const missNumberProgression = randomNum(0, 9);
  const correctAnswer = arr[missNumberProgression];
  arr[missNumberProgression] = '..';
  return [arr, correctAnswer];
};


const game = () => {
  const initialNumber = randomNum(1, 10);
  const progressionStep = randomNum(4, 12);
  const lengthProgression = 10;
  const [arr, num] = progression(initialNumber, progressionStep, lengthProgression);
  const question = arr.join(' ');
  const correctAnswer = String(num);
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
