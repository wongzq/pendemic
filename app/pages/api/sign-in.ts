import AllMiddleware from "#middlewares/all.middleware";
import Models from "#models/cleardb";
import { ApiHandler, ApiMethod, ApiResponse } from "#types/api.type";
import { Codes, Exception } from "#types/error.type";
import firebase from "firebase/app";

const signIn: ApiHandler = async (req, res, next) => {
  const {
    credential: { user },
  } = <{ credential: firebase.auth.UserCredential }>req.body;

  if (!user?.uid) throw Exception.internal(Codes.NOT_FOUND, "User not found");

  const writer = await Models.writer.findOne({
    where: { writer_id: user.uid },
  });

  if (!writer) {
    await Models.writer.create({
      writer_id: user.uid,
      username: undefined,
    });
  }

  const response = ApiResponse.success();
  res.json(response.json);

  next();
};

export default AllMiddleware.basic({ handler: signIn, method: ApiMethod.POST });
