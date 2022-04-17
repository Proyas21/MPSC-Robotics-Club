const Member = ({ name, role, photo }) => {
  return (
    <div className="member">
      <img className="member-photo" src={photo} alt={name + " PHOTO"} />
      <h3>{name}</h3>
      <h5>{role}</h5>
    </div>
  );
};

export default Member;
