const responseMessage = {
  200: "Bienvenido",
  401: "No authorizado",
};

export const responseMapper = (response) => ({
  details: response?.data || {},
  statusCode: response.status || 0,
  message: responseMessage[response.status || 0] || "",
});
