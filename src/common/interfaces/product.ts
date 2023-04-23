interface Base {
  id: string;
  name: string;
  description: string;
  assets: {
    preview: string;
  }[];
}

export interface Product extends Base {
  variants: {
    id: string;
    price: number;
    product: Base;
  }[];
}
