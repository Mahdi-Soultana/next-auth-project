import cloudinary from "cloudinary";

export function config(image) {
  cloudinary.config({
    cloud_name: "soultana-mahdi",
    api_key: "854179451261813",
    api_secret: "_WVO8zT9yB_gQEFiSAjPXn-ncE4",
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
        if (err) return reject(err);
        return resolve(url);
      },
    );
  });
}
