const responseMessage = {
  200: "Bienvenido",
  400: "Datos necesarios",
  401: "Usuario o contraseña incorrectos",
};

export const responseMapper = (response) => ({
  accessToken: response?.data?.accessToken || "",
  statusCode: response.status || 0,
  message: responseMessage[response.status || 0] || "",
});
