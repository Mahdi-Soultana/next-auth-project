import User from "../model/User";
import { config } from "../../utils/cloudinary";

async function signupController(req, res) {
   console.log(req.body.name);
  if (req.body.avatar) {
    config(req.body.avatar)
      .then(async (result) => {
        const { email, password,name } = req.body;
        const user = await User.create({
          email,
          password,
          name
          avatar: {
            public_id: result.public_id,
            url: result.secure_url,
          },
        });

        res.json({ success: "user created ", user });
      })
      .catch((e) => {
        res.json({ error: "try diffrent email or password" });
      });
  } else {
    try {

      const { email, password, name } = req.body;
      const user = await User.create({
        email,
        password,
        name,
      });

      res.json({ success: "user created ", user });
    } catch (e) {
      res.json({ error: e.message });
    }
  }
}

export default signupController;
