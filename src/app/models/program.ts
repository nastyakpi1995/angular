import Story from '@app/models/story';
import Habit from '@app/models/habit';
import Exercise from '@app/models/exercise';

export default class Program {
  id?: string;
  exercises: Exercise[];
  story: Story;
  hlh: Habit;
}
