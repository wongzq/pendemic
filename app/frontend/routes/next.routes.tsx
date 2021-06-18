const routes = {
  home: "/",
  signIn: "/sign-in",
  plan: "/plan",
  write: "/write",
};

const writerRoutes = [routes.home, routes.plan, routes.write];

const visitorRoutes = [routes.home, routes.signIn];

const isWriterRoute = (route: string) => {
  return writerRoutes.includes(route);
};

const isVisitorRoute = (route: string) => {
  return visitorRoutes.includes(route);
};

const NextRoutes = { routes, isVisitorRoute, isWriterRoute };

export default NextRoutes;
