import useSWR from "swr";

import fetcher from "../services/fetcher";

const useArticles = (max: number = 10) => {
  const { data, error } = useSWR(`/api/getArticles?max=${max}`, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useArticles;
