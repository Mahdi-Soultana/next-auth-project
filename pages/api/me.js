import ncFn, { authenticated } from "../../utils/ncFn";

import { updateProfile } from "../../db/controllers/profilesController";
ncFn.use(authenticated).put(updateProfile);

export default ncFn;
