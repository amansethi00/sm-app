import axios from "axios";
export const fetchAllPosts = async () => {
  const response = await axios.get(
    "https://SocialMedia.amansethi00.repl.co/posts"
  );
  console.log({ response });
  if (response.data.success) {
    return response.data.posts;
  }
};
