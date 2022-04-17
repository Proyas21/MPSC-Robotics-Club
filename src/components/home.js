import poster from "../img/title.png";
import Head from "../img/nobglogo.PNG";
import Helmet from "react-helmet";
import Metas from "./metas";

const Home = () => {
  return (
    <div className="App-body">
      <img src={poster} className="poster" alt="poster" />
      <p>
        The growing and evolving field of robotics today is showing the dream of
        building a better world without physical exertion. You can be a
        successful traveler in the pursuit of that dream. All you need is a
        strong will to robotics and a formal inauguration. MPSCRC can be a
        beacon of light for your successful progress.So welcome to the path of
        our dreams.
      </p>
      <p>WELCOME TO MPSCRC</p>
      <img src={Head} className="nobglogo" alt="poster" />

      <Metas
        title={"MPSC Robotics Club"}
        description={
          "MPSCRC can be a beacon of light for your successful progress.So welcome to the path of our dreams."
        }
        image={require("../img/poster.jpeg").slice(1)}
      />
    </div>
  );
};

export default Home;
