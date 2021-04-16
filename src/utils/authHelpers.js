export const authHelpers = {
  signIn: (accessToken) => localStorage.setItem("access-token", accessToken),
  signOut: () => localStorage.removeItem("access-token"),
  getAccessToken: () => localStorage.getItem("access-token"),
};
