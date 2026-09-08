export type CravingType = 'Noodles' | 'Rice' | 'Soup' | 'Snacks' | 'Drinks';

export type BudgetType = 'All' | 'Under $5' | '$5–$8' | 'Above $8';

export type DietaryType = 'Any' | 'Halal' | 'Vegetarian';

export type WaitTimeType = 'Any' | 'Under 10 min' | '10–20 min';

export type ScreenType = 'discover' | 'recommend' | 'order' | 'success';

export interface HawkerStall {
  id: string;
  name: string;
  unitNo: string;
  hawkerCentre: string;
  dish: string;
  price: number;
  rating: number;
  waitTimeMin: number;
  waitCategory: 'Under 10 min' | '10–20 min';
  crowdLevel: 'Low' | 'Medium' | 'High';
  dietary: 'Non-Halal' | 'Halal' | 'Vegetarian';
  craving: CravingType;
  budgetCategory: 'Under $5' | '$5–$8' | 'Above $8';
  tags: string[];
  isSoldOut: boolean;
  whyMatch: string;
  description?: string;
  caloriesApprox?: number;
}

export interface FilterState {
  craving: CravingType | '';
  budget: BudgetType;
  dietary: DietaryType;
  wait: WaitTimeType;
}

export interface ActiveOrder {
  orderNum: string;
  stall: HawkerStall | null;
  quantity: number;
  readyTime: string;
  totalPrice: string;
  placedAt: string;
  pickupNotes?: string;
}
