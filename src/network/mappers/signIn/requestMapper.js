export const requestMapper = (body) => ({
  username: body?.username || "",
  password: body?.password || "",
});
