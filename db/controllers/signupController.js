import User from "../model/User";
import cloudinary from "cloudinary";
import { config } from "../../utils/cloudinary";

async function signupController(req, res) {
  const result = config(req.body.avatar)
    .then(async (result) => {
      const { email, password } = req.body;
      const user = await User.create({
        email,
        password,
        avatar: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      });

      res.json(user);
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export default signupController;
