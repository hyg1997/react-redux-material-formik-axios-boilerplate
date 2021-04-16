const responseMessage = {
  200: "Usuario creado correctamente",
  400: "Datos necesarios",
  409: "Correo electronico en uso",
};

export const responseMapper = (response) => ({
  accessToken: response?.data?.accessToken || "",
  statusCode: response.status || 0,
  message: responseMessage[response.status || 0] || "",
});
