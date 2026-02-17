/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
module.exports = {
	'*': 'prettier . --check',
	'*.{js,jsx,ts,tsx}': 'eslint'
};
