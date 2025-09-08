import type { PortableTextBlock } from "sanity";

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

export type EventSpace = {
  name: string;
  description: string;
  imageUrl: string;
  seated: number;
  standing: number;
  reservationUrl?: string;
};

export type SignUpSection = {
  header: PortableTextBlock[];
  body: PortableTextBlock[];
  ctaText: string;
  ctaUrl: string;
  horizontalImages?: {
    _key: string;
    url: string;
  }[];
  verticalImages?: {
    _key: string;
    url: string;
  }[];
};
