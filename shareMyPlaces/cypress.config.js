const { defineConfig } = require('cypress');
const {
	cypressBrowserPermissionsPlugin,
} = require('cypress-browser-permissions');

module.exports = defineConfig({
	env: {
		// doesn't work on default Electron browser,
		// run with "npx cypress run --browser chrome"
		browserPermissions: {
			geolocation: 'allow',
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			config = cypressBrowserPermissionsPlugin(on, config);
			return config;
		},
		baseUrl: 'https://petjs-sharemyplaces-61e5d.web.app',
	},
});
