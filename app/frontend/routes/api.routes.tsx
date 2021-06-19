import { ApiResult } from "$types/api-result.type";
import axios from "axios";
import firebase from "firebase/app";

const ApiRoutes = {
  signIn: async (credential: firebase.auth.UserCredential) => {
    try {
      const res = await axios.post("/api/sign-in", { credential });
      console.log(res);

      if (!res.data.success) throw Error();

      return ApiResult.success();
    } catch (err) {
      console.log(err);
      return ApiResult.failure();
    }
  },
};

export default ApiRoutes;
