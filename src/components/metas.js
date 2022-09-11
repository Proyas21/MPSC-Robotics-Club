import Helmet from "react-helmet";

const Metas = ({ title, description, image }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href="mpsc-rc.web.app" />
            <meta name="description" content={description} />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={"https://mpsc-rc.web.app/"} />
            <meta property="og:type" content="website" />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta
                property="og:image"
                content={
                    "https://mpsc-rc.web.app/" +
                    (image ? image : require("../img/poster.jpeg"))
                }
            />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="mpsc-rc.web.app" />
            <meta property="twitter:url" content={"https://mpsc-rc.web.app/"} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta
                name="twitter:image"
                content={
                    "https://mpsc-rc.web.app/" +
                    (image ? image : require("../img/poster.jpeg"))
                }
            />
        </Helmet>
    );
};

export default Metas;
