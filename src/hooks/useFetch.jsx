import { useAsync } from "./useAsync";

export function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }).then(res => {
        if(res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    });
  }, dependencies);
}
