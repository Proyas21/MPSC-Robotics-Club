import { Link } from "react-router-dom";

const Department = ({ info }) => {
  const { name, logo, route } = info;
  return (
    <Link to={route}>
      <div className="department">
        <img src={logo} className="department-logo" alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default Department;
