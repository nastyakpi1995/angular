import Direction from '@app/models/direction.enum';
import Address from '@app/models/address';
import CostModel from '@app/models/cost-model';

export default class Gym {
  id?: number;
  name: string;
  direction: Direction;
  address: Address;
  phone: string;
  image: string;
  costModel: CostModel;
}
