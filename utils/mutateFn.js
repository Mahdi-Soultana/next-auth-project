import { toast } from "react-toastify";

export async function postMethod(
  data,
  url = "/api/blog",
  method = "POST",
  session,
) {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        session: JSON.stringify(session),
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
    if (res.error) {
      toast.error(res.error);
      return;
    }
    return res;
  } catch (e) {
    toast.error("error while creating !");
    throw new Error(e);
  }
}
