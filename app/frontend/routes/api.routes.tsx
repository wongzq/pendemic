import { ApiResponse } from "#types/api.type";
import axios from "axios";

const ApiRoutes = {
  signIn: async (uid: string) => {
    try {
      const res = await axios.post("/api/sign-in", { uid });
      console.log(res);

      if (!res.data.success) throw Error();

      return ApiResponse.success();
    } catch (err) {
      console.log(err);
      return ApiResponse.failure();
    }
  },
};

export default ApiRoutes;
