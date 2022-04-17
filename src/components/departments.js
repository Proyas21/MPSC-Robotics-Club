import Department from "./department";

const Departments = ({ departments_info }) => {
  return (
    <div className="departments">
      <h1>DEPARTMENTS</h1>
      {departments_info.map((department, i) => (
        <Department info={department} key={i} />
      ))}
    </div>
  );
};

export default Departments;
