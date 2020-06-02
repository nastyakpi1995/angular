import Story from '@app/models/story';
import Exercise from '@app/models/exercise';
import Habit from '@app/models/habit';

export default class Workout {
  id?: string;
  theme: string;
  dateTime: Date;
  type: string;
  groupType: string;
  typeOfWork: string;
  wodTime: number;
  story: Story;
  exercises: Exercise[];
  healthyLifestyleHabit: Habit;
}
