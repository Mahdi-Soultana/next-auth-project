import ncFn, { authenticated } from "../../../../utils/ncFn";

import { topComments } from "../../../../db/controllers/commentController";
ncFn.get(topComments);

export default ncFn;
