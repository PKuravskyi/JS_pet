const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		baseUrl: 'https://petjs-sharemyplaces-61e5d.web.app',
	},
});
