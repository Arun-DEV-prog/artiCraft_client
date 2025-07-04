import axios from "axios";

const getJwtToken = async (user) => {
  if (!user?.email) throw new Error("User email is missing");

  const loggedUser = { email: user.email };

  return axios.post("http://localhost:3000/jwt", loggedUser, {
    withCredentials: true,
  });
};

export default getJwtToken;
