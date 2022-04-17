import panelMembers from "./panelMembersArray";
const PanelMembers = () => {
  return (
    <div className="panel-members">
      <h1>Panel Members</h1>
      {panelMembers.map((member, i) => {
        return (
          <div key={i} className="member">
            <img
              className="member-photo"
              src={member.photo}
              alt={member.name + " PHOTO"}
            />
            <a
              className="nameNfb"
              href={member.fb}
              rel="noreferrer"
              target="_blank"
            >
              <h3>{member.name}</h3>
              <img
                width="30"
                height="30"
                src={require("../img/fb.png")}
                alt="fb logo"
              />
            </a>
            <h5>{member.role}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default PanelMembers;
