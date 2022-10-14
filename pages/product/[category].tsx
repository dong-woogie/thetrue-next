import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { getProductList } from "../../apis";
import { productListState } from "../../states";

interface Product {
  id: number;
}

interface ProductProps {
  productList: {
    params: {
      [key: string]: string;
    };
    value: Product[];
  };
}

function Product({ productList }: ProductProps) {
  const router = useRouter();
  const { category = "all" }: { category?: string } = router.query;
  const [recoilProductList, setRecoilProductList] = useRecoilState(
    productListState({ category })
  );

  useEffect(() => {
    if (recoilProductList.length > 0) return;
    if (!productList.value) return;
    if (productList.value.length === 0) return;
    setRecoilProductList(productList.value);
  }, [productList.value, recoilProductList.length, setRecoilProductList]);

  return (
    <div>
      {recoilProductList.map((product) => (
        <li key={product.id}>{product.id}</li>
      ))}
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const { category } = ctx.query;

  const productList = await getProductList({
    category,
  });

  return {
    props: {
      productList: {
        params: { category },
        value: productList,
      },
    },
  };
}

export default Product;
