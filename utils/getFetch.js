import { toast } from "react-toastify";

export async function GetMethod(url = "/api/profiles/", method = "GET") {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
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
