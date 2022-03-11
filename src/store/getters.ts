const getters = {
  open: (state: any) => state.sideMenu.open,
  asyncRoutes: (state: any) => state.router.routes,
  token: (state: any) => state.user.token,
};

export default getters;
