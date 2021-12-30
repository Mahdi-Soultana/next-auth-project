import mongoose from "mongoose";
import cloudinary from "cloudinary";

const Schema = mongoose.Schema;

const user = new Schema(
  {
    password: {
      type: String,
      required: true,
    },

    likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
    likesCount: { type: Number, default: 0 },
    blogs: [{ type: Schema.Types.ObjectId, ref: "blogPost" }],
    follower: [{ type: Schema.Types.ObjectId, ref: "user" }],
    following: [{ type: Schema.Types.ObjectId, ref: "user" }],
    ///info About Me Profile  setting
    avatar: {
      public_id: {
        type: String,
        default: "854179451261813",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg",
      },
    },
    header: {
      public_id: {
        type: String,
        default: "854179451261813",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg",
      },
    },
    name: {
      type: String,
      required: [true, "name required"],
    },
    email: {
      type: String,
      required: [true, "name required"],
      unique: [true, "this email is aleardy used !"],
    },
    title: {
      type: String,
      default: "# FullStack web Developper (Ex)",
    },
    description: {
      type: String,
      default:
        "'Description exemple' : I am web developer by JavaScript HTML CSS I Specialize at: ReactJS NextJs Gatsby and GraphQL MongoDB (Mongoose) NodeJS, I love challenging",
    },
    experience: {
      type: String,
      default: `
##### FrontEnd Design
#### Open Projects | August 2020 - October 2020

-  Working in project form Design Figma to GastbyJs Integrated with
              WordPress CMS
- Best Practices and refactor split code challenges projects with
              JavaScript

##### Full Stack Projects
#### Private Project on GitHub| October 2020 - 2021 Mars

-  Complete Full-stack Ecommerce App from the front to the Back with
              PayPal and Stripe payment Integration , NextJs And Framer motion
              in FrontEnd, in the BackEnd NodeJS GraphQL Apollo Server MongoDB
              ,generating rooms for video calls online via WebRTC
    `,
    },
    study: {
      type: String,
      default: `
##### FrontEnd Masters & Udemy Student
#### Student of Completion Course
- JavaScript: The Hard Parts by Will Sentance Founder Codesmith. - Deep JavaScript Foundations by Kyle Simpson .
- CSS In-Depth by Estelle Weyl at Mozilla Developer Network.
-  Intermediate React by Brian Holt at Microsoft.
- State Management in Pure React by Steve Kinney at Twilio.
- Next.js & React - The Complete Guide by Maximilian  Schwarzmüller...

#### Bac +2Technicians Specialized in Automation and Electromechanics
#### Electrical Technical Science Baccalaureate
     `,
    },
    skills: {
      type: String,
      default: `
- React JS
- Next JS
- Gatsby JS
- MongoDB
- GraphQL
- NodeJS
- WebRTC
    `,
    },
    languages: {
      type: String,
      default: `
- English
- French
- Arabic
    `,
    },
    mobile: { type: String, default: "(+212) 662352532" },
    linkedin: { type: String, default: "https://linkedin.com/mahdisoultana" },
    address: {
      type: String,
      default: "Local adress exemple : morrocco Kenitra ",
    },
    color: { type: String, default: "#333" },
  },
  { timestamps: true },
);

user.pre("remove", async function (next) {
  const BlogPost = mongoose.model("blogPost");
  // this === joe

  await BlogPost.deleteMany({ _id: { $in: this.blogs } });

  cloudinary.v2.uploader.destroy(
    this.avatar.public_id,
    function (error, result) {
      console.log(result, error);
      if (!error) {
        cloudinary.v2.uploader.destroy(
          this.avatar.public_id,
          function (error, result) {
            console.log("all righty everything is carbage correctly !");
            next();
          },
        );
      }
    },
  );
});
user.set("toJson", { virtual: true });

const User = mongoose.models.user || mongoose.model("user", user);
export default User;
