import axiosInstance, { getToken } from "./axiosInstance";

export const getMarketplaceData = async (
  limit,
  offset,
  category,
  sortByPrice,
  priceFilter,
  name
) => {
  const params = new URLSearchParams();

  if (limit) params.append("limit", limit);
  if (offset) params.append("offset", offset);
  if (category) params.append("category", category);
  if (sortByPrice) params.append("sortByPrice", sortByPrice);
  if (priceFilter) params.append("priceFilter", priceFilter);
  if (name) params.append("name", name);

  const response = await axiosInstance.get(`/marketplace?${params.toString()}`);
  return response.data;
};
export const getMarketplaceProduct = async (productId) => {
  const response = await axiosInstance.get(`/marketplace/${productId}`);
  return response.data;
};

export const getCart = async () => {
  try {
    const response = await axiosInstance.get(`/cart?userId=${getToken()}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      error?.response?.data?.message || "Failed to fetch cart data"
    );
  }
};

export const getAuctionsData = async () => {
  const response = await axiosInstance.get("/auctions");
  return response.data.auctions;
};
