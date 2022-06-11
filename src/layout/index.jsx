import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import siteConfig from "../../data/SiteConfig";
import brand from "../../content/images/brand.png";
import "../components/Icons/FontAwesome";
import "../styles/shiba.min.css";
import "../../content/styles/customize.scss";

const MainLayout = ({ children, hasFooter = true }) => (
  <div>
    <Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
      <meta name="description" content={siteConfig.siteDescription} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2038621379918916" crossorigin="anonymous"></script>
    </Helmet>
    <Navigation 
      brand={brand}
      title={siteConfig.navTitle} 
      links={siteConfig.navLinks} 
    />
    {children}
    {hasFooter && (
      <Footer 
        socials={siteConfig.socialLinks}
        links={siteConfig.footerLinks}
        copyright={siteConfig.copyright}
      />
    )}
    <ScrollToTop 
      color="#FFF"
      bgColor="grey-half"
    />
  </div>
)

export default MainLayout;
