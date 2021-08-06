import FirebaseAdmin from "#configs/firebase.config";
import AllMiddleware from "#middlewares/all.middleware";
import Models from "#models/mysql";
import { ApiHandler, ApiMethod, ApiResponse } from "$types/api-response.type";
import { Codes, Exception } from "$types/error.type";
import firebase from "firebase/app";

const signIn: ApiHandler = async (req, res, next) => {
  const {
    credential: { user },
  } = <{ credential: firebase.auth.UserCredential }>req.body;

  if (!user?.uid) throw Exception.internal(Codes.NOT_FOUND, "User not found");

  // check user in MySQL
  const writer = await Models.writer.findOne({
    where: { firebase_id: user.uid },
  });

  if (!writer) {
    await Models.writer.create({ firebase_id: user.uid, username: undefined });
  }

  // check user in Firestore
  const doc = await FirebaseAdmin.firestore()
    .collection("users")
    .doc(user.uid)
    .get();
  console.log(doc.data());

  const response = ApiResponse.success();
  res.json(response.json);

  next();
};

export default AllMiddleware.basic({ handler: signIn, method: ApiMethod.POST });
