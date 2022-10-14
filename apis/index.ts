import axios from "axios";

const endpoint = "https://api.thetrue.fifteenh.io/api";

export const getProduct = async (id: number) => {
  try {
    const { data } = await axios.get(`${endpoint}/product/detail`, {
      params: {
        id,
      },
    });
    if (!data.success) throw new Error();
    return data.data.products;
  } catch (e) {
    return null;
  }
};

export const getProductList = async ({ category }: { category: string }) => {
  try {
    const { data } = await axios.get(`${endpoint}/product/search`, {
      params: {
        category:
          category.toLowerCase() === "all" ? "" : category.toLowerCase(),
      },
    });

    if (!data.success) throw new Error();

    return data.data.products.data;
  } catch {
    return [];
  }
};
