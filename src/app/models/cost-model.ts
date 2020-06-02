import ProfitModel from '@app/models/profit-model.enum';
import Pricing from '@app/models/pricing';

export default class CostModel {
  profitModel: ProfitModel;
  currencyCode: string;
  pricing: Pricing;
  isTrialTraining: boolean;
}
