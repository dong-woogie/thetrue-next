import Link from "next/link";
import React from "react";
import { getProductList } from "../../apis";

interface ProductListProps {
  productList: {
    id: number;
    product_name: string;
  }[];
}

function ProductList({ productList }: ProductListProps) {
  return (
    <div>
      {productList.map((product) => (
        <Link href={`/product/detail/${product.id}`} key={product.id}>
          <li>{product.product_name}</li>
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { category } = context.query;

  const productList = await getProductList({ category });
  return {
    props: {
      productList,
    },
  };
}

export default ProductList;
