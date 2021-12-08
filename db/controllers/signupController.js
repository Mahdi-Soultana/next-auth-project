import User from "../model/User";
import { config } from "../../utils/cloudinary";

async function signupController(req, res) {
  let result;
  if (req.body.avatar) {
    result = config(req.body.avatar)
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
        console.log(e);
        throw new Error(e);
      });
  } else {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });

    res.json(user);
  }
}

export default signupController;
