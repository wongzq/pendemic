import AllMiddleware from "#middlewares/all.middleware";
import { ApiHandler, ApiMethod, ApiResponse } from "#types/api.type";

const signIn: ApiHandler = async (req, res, next) => {
  const { uid } = req.body;

  console.log(uid);

  const response = ApiResponse.success();
  res.json(response.json);

  next();
};

export default AllMiddleware.basic({ handler: signIn, method: ApiMethod.POST });
