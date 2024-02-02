import { defineConfig } from 'cypress';

module.exports = defineConfig({
	projectId: 'qwpfbu',
	viewportWidth: 1920,
	viewportHeight: 1080,
	e2e: {
		baseUrl: 'https://petjs-sharemyplaces-61e5d.web.app',
		specPattern: 'cypress/tests/**/*.{js,jsx,ts,tsx}',
		setupNodeEvents(on, config) {},
	},
});
