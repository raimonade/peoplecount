const withFonts = require('next-fonts');
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
	target: 'serverless',
};

module.exports = withFonts(withSvgr(nextConfig));