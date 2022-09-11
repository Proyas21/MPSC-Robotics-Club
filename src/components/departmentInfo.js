import { useParams } from "react-router-dom";
import Member from "./member";
import ScrollToTop from "./scrollToTop";
import Metas from "./metas";
import NotFound from "./notFound";

const DepartmentInfo = ({ departments_info }) => {
    const { department } = useParams();
    const info = departments_info.filter((dep) => dep.route === department)[0];

    if (!info) {
        return <NotFound />;
    }

    return (
        <div className="department-info">
            <ScrollToTop />
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
            <Metas
                title={info.name + " - MPSC Robotics Club"}
                description={
                    info.name + " of MPSC Robotics Club. " + info.intro
                }
                image={info.logo}
            />
        </div>
    );
};

export default DepartmentInfo;
