const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({

	experimentalDisableTemplateSupport: true,

	transpileDependencies: true,

	pages: {
		index: {
			entry: 'src/main.js',
			title: 'Hamburger Store',
		},
	},
});
