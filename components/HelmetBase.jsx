import { Helmet } from "react-helmet";

// const SITE_URL = import.meta.env.VITE_APP_SITE_URL

const HelmetBase = ({ title, name, description, link }) => {
  return (
    // <Helmet htmlAttributes={{ lang: "ar" }}>
    <Helmet>
      {/* <title>{`MKishan Tech | ${title}`}</title> */}
      <title>{`${title}`}</title>
      <meta name={name} content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property='og:url' content={SITE_URL + link} /> */}
      <meta name="google-site-verification" content="" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="keywords" content=""></meta>
      {/* <link rel="canonical" href={SITE_URL + link} /> */}
    </Helmet>
  );
};

export default HelmetBase;
