import { atomFamily } from "recoil";
import { v1 } from "uuid";

export const productListState = atomFamily<
  { id: number }[],
  { category: string }
>({
  key: `productListState/${v1()}`,
  default: [],
});

export const pageState = atomFamily<number, { category: string }>({
  key: `pageState/${v1()}`,
  default: 1,
});

export const productState = atomFamily<{ id: number }, { id: number }>({
  key: `productState/${v1()}`,
});

export const rootAtom = {
  productList: productListState,
  page: pageState,
  product: productState,
};
