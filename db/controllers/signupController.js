import User from "../model/User";
import { config } from "../../utils/cloudinary";

async function signupController(req, res) {
  if (req.body.avatar) {
    config(req.body.avatar)
      .then(async (result) => {
        const { email, password, name } = req.body;
        const user = await User.create({
          email,
          password,
          name,
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
  } else if (req.body.password) {
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
  } else {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const userCreate = await User.create({
        email: req.body.email,
        name: req.body.name,
        avatar: { url: req.body.image },
      });
      res.json({ success: "user created ", user });
    } else {
      res.json({ success: "user found ", user });
    }
  }
}

export default signupController;
