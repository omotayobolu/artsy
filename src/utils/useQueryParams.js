import { useSearchParams } from "react-router-dom";

export const useQueryParam = () => {
  const [_, setSearchParams] = useSearchParams();

  const updateQueryParam = (key, value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set(key, value);
      return params;
    });
  };

  return updateQueryParam;
};
