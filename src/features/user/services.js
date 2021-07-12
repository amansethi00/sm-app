import axios from "axios";
export const getUser = async (username) => {
  try {
    const response = await axios.get(
      `https://SocialMedia.amansethi00.repl.co/${username}`
    );
    console.log(response);
    if (response.data.success) {
      return response.data.user;
    } else {
      return response.data.message;
    }
  } catch (error) {
    return error.response.data.message;
  }
};
