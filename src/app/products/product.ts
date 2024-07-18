export interface Product {
  identifier: string;
  description: string;
  price: number;
  type: ProductType;
}

type ProductType = 'pizza' | 'pasta' | 'schnitzel' | 'snacks';
