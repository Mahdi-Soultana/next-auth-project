import cloudinary from "cloudinary";

export async function config(image, folder = "avatar") {
  let width;
  switch (folder) {
    case "avatar":
      width = 200;
      break;
    case "thumbnial":
      width = 600;
      break;
    default:
      width = 200;
  }

  cloudinary.config({
    cloud_name: process.env.COULDINARY_COULD_NAME,
    api_key: process.env.COULDINARY_API_KEY,
    api_secret: process.env.COULDINARY_API_SECRET,
  });

  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      image,
      {
        resource_type: "auto",
        folder: `/next-auth-demo/${folder}`,
        width,
        crop: "scale",
      },
      (err, res) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        return resolve(res);
      },
    );
  });
}
