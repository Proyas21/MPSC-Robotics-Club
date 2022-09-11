import Metas from "./metas";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for might have been removed or <br />
                had its name changed or is temporarily unavailable.
            </p>

            <Metas
                title={"404 Not Found"}
                description={
                    "This page might have been removed or had its name changed or is temporarily unavailable"
                }
            />
        </div>
    );
};

export default NotFound;
