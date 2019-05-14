const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Matt Black Web Design Studio', // Navigation and Site Title
  siteTitleAlt: 'Matt Black', // Alternative Site title for SEO
  siteTitleShort: 'Matt Black', // short_name for manifest
  siteHeadline: 'Creating digital products & blazginly fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://mattblac.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Web Design & Marketing Studio',
  author: 'MattBlac', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@mattblac', // Twitter Username
  ogSiteName: 'MattBlac', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-140136476-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
