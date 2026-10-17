import axios from "axios";

export const loginRequest = async (formData) => {
  const response = await axios.post(
    "https://test-backend.abdulrahman-hares.com/api/auth/login",
    formData,
  );

  return response.data;
};
