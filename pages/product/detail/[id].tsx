import React from "react";
import { getProduct } from "../../../apis";

interface ProductDetailProps {
  productDetail: {
    id: number;
    product_name: string;
  };
}

function ProductDetail({ productDetail }: ProductDetailProps) {
  return <div>ProductDetail : {productDetail?.product_name}</div>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "347" } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const productDetail = await getProduct(+id);
  return {
    props: {
      productDetail,
    },
  };
}

export default ProductDetail;
