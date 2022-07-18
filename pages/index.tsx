import axios from "axios";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { Video } from "../types";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);

  return (
    <div className="flex flex-col gap-10 videos h-full w-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Videos found"} />
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let res = null;
  if (topic) {
    res = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    res = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: {
      videos: res.data,
    },
  };
};

export default Home;
