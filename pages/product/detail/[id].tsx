import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { getProduct } from "../../../apis";
import { productState } from "../../../states";

interface ProductDetailProps {
  product: {
    value: {
      id: number;
      product_name: string;
    };
  };
}

function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const { id = 0 }: { id?: number } = router.query;
  const recoilProduct = useRecoilValue(productState({ id: +id }));

  return <div>ProductDetail : {product.value.product_name}</div>;
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const product = await getProduct(+id);

  return {
    props: {
      product: {
        params: { id: +id },
        value: product,
      },
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "347" } }],
    fallback: true,
  };
}

export default ProductDetail;
