import { toast } from "react-toastify";

export async function getMethod(url, method = "GET") {
  try {
    const res = await fetch(url).then((res) => {
      return res.json();
    });
    if (res.error) {
      toast.error(res.error);
      return;
    }
    return res;
  } catch (e) {
    toast.error(e.message);
    throw new Error(e);
  }
}
function useFetch() {
  useEffect(() => {
    Get;
    return () => {
      cleanup;
    };
  }, [input]);
}
