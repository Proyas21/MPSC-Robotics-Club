import { useParams } from "react-router-dom";
import Member from "./member";

const DepartmentInfo = ({ departments_info }) => {
  const { department } = useParams();
  const info = departments_info.filter((dep) => dep.route == department)[0];

  return (
    <div className="department-info">
      <h1>{info.name}</h1>
      <p>{info.intro}</p>

      <div className="members-info">
        <h2>Team Members</h2>
        {info.members.map((member, i) => {
          return (
            <Member
              key={i}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentInfo;
