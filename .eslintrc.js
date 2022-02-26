module.exports = {
	env: {
		es6: true
	},

	extends: [
		'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    		'prettier'
	],

	plugins: ['jest'],
}
