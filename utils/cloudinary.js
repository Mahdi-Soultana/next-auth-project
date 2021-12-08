import cloudinary from "cloudinary";

export function config(image) {
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
        folder: "/next-auth-demo/avatars",
        width: "200",
        crop: "scale",
      },
      (err, url) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        return resolve(url);
      },
    );
  });
}
