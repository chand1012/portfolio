const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token") as string,
    },
  }).then((r) => r.json());

export default fetcher;
