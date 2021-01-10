const config = {
  // Site info
  siteTitle: "LakeScript", // Site title.
  siteTitleShort: "lakescript", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "LakeScript", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://leehosu.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "기억을 위한 블로그", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
//  siteFBAppID: "399626517562189", // FB Application ID for using app insights
  googleAnalyticsID: "G-2ZF5F3414R", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 4,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "yy년 M월 D일", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "lakescript", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "페이지를 찾을 수 없습니다. 확인 후 다시 접속해주세요.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Keyword,,",
  searchEngineID: "dd3256ddf4ea108f4",
  hasSearch: false,
  // Use for links widget
  sidebarSticky: false,
  // sidebarLinks: [
  //   {
  //     label: "Complete JavaScript",
  //     url: "https://completejavascript.com/"
  //   },
  //   {
  //     label: "Lam Pham Blog",
  //     url: "https://phamvanlam.com/"
  //   },
  //   {
  //     label: "Lam Pham Portfolio",
  //     url: "http://about.phamvanlam.com/"
  //   },
  // ],
  // Use for user info
  userName: "l2h", // Username to display in the author segment.
  userEmail: "hosu4549@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Gyeonggi-do, Korea", // User location to display in the author segment.
  userAvatar: "/logos/profile.jpeg", // User avatar to display in the author segment.
  userDescription:
    " Junior Web Developer", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mhosu4549@gmail.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://leehosu.github.io/",
      iconClassName: "fas globe"
    },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/CmpltJavaScript",
    //   iconClassName: "fab twitter"
    // },
    // { 
    //   label: "Facebook", 
    //   url: "https://www.facebook.com/completejavascript/", 
    //   iconClassName: "fab facebook-f" 
    // },
    // { 
    //   label: "Linkedin", 
    //   url: "https://www.linkedin.com/in/completejavascript/", 
    //   iconClassName: "fab linkedin-in"
    // },
  ],
  // Use for navigation
  navTitle: "Lakescript",
  navLinks: [
    { label: "About", url: "/about" },
  //  { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    // { 
    //   label: "Codepen", 
    //   url: "https://codepen.io/completejavascript/", 
    //   iconClassName: "fab codepen" 
    //},
    // { 
    //   label: "FreeCodeCamp", 
    //   url: "", // Ignore 
    //   iconClassName: "fab free-code-camp"
    //},
    { 
      label: "GitHub",
      url: "https://github.com/leehosu",
      iconClassName: "fab github"
    },
    // { 
    //   label: "Facebook", 
    //   url: "https://www.facebook.com/completejavascript/", 
    //   iconClassName: "fab facebook-f"
    // },
    // { 
    //   label: "Linkedin", 
    //   url: "https://www.linkedin.com/in/completejavascript/", 
    //   iconClassName: "fab linkedin-in"
    // },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/CmpltJavaScript",
    //   iconClassName: "fab twitter"
    // },
    {
      label: "RSS",
      url: "https://gb-template.netlify.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
   // { label: "Contact", url: "/contact" },
   // { label: "Terms of Use", url: "/terms" },
   // { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://leehosu.github.io/sitemap.xml" },
  ],
  copyright: "Copyright © 2021 leehosu. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
