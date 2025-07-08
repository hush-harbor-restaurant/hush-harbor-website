export interface MenuItem {
  _id: string;
  name: string;
  description?: string;
  price: number;
  tags?: string[];
  isHappyHour?: boolean;
}

export interface MenuSection {
  _id: string;
  title: string;
  type:
    | "food"
    | "cocktail"
    | "draft beer"
    | "bottles & cans"
    | "wine"
    | "non-alcoholic"
    | "special"
    | "happy hour";
  items: MenuItem[];
}
