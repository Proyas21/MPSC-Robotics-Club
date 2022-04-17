import Department from "./department";
import Metas from "./metas";

const Departments = ({ departments_info }) => {
  return (
    <div className="departments">
      <h1>DEPARTMENTS</h1>
      {departments_info.map((department, i) => (
        <Department info={department} key={i} />
      ))}

      <Metas
        title={" Departments - MPSC Robotics Club"}
        description={
          "All departments of MPSC Robotics Club.MPSCRC can be a beacon of light for your successful progress.So welcome to the path of our dreams."
        }
        image={require("../img/poster.jpeg")}
      />
    </div>
  );
};

export default Departments;
