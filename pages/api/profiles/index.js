import ncFn, { authenticated } from "../../../utils/ncFn";

import {
  followManagment,
  findUserAll,
} from "../../../db/controllers/profilesController";

ncFn.get(findUserAll).use(authenticated).put(followManagment);

export default ncFn;
