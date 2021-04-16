export const requestMapper = (body) => ({
  firstName: body?.firstName || "",
  lastName: body?.lastName || "",
  email: body?.email || "",
  username: body?.username || "",
  password: body?.password || "",
});
