import useAuth from "@hooks/auth.hook";
import React from "react";
import { useRouter } from "next/router";
import NextRoutes from "@routes/next.routes";
import { useClickAway } from "react-use";

const useNavigation = (ref: React.RefObject<HTMLDivElement>) => {
  const router = useRouter();

  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);

  const { user } = useAuth();

  useClickAway(ref, () => setIsOptionsVisible(false));

  React.useEffect(() => {
    setIsOptionsVisible(false);
    if (user && !NextRoutes.isWriterRoute(router.pathname)) {
      router.replace(NextRoutes.routes.write);
    } else if (!user && !NextRoutes.isVisitorRoute(router.pathname)) {
      router.replace(NextRoutes.routes.home);
    }
  }, [user, router.pathname]);

  const isPlanning = router.pathname === NextRoutes.routes.plan;
  const isWriting = router.pathname === NextRoutes.routes.write;

  const onClickOptions = () => setIsOptionsVisible((v) => !v);

  return { isPlanning, isWriting, isOptionsVisible, onClickOptions };
};

export default useNavigation;
