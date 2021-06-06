import FirebaseConfig from "#configs/firebase.config";
import AllMiddleware from "#middlewares/all.middleware";
import { ApiHandler, ApiMethod, ApiResponse } from "#types/api.type";

const login: ApiHandler = async (req, res, next) => {
  const { token } = req.body;

  await FirebaseConfig.admin().auth().verifyIdToken(token);

  const response = ApiResponse.success();
  res.json(response.json);

  next();
};

export default AllMiddleware.basic({ handler: login, method: ApiMethod.POST });
