import ncFn, { authenticated } from "../../../utils/ncFn";

import { followManagment } from "../../../db/controllers/profilesController";

ncFn.use(authenticated).put(followManagment);

export default ncFn;
