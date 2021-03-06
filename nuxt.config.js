import colors from "vuetify/es5/util/colors"

export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		titleTemplate: "%s - " + process.env.npm_package_name,
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || ""
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
	router: {
		base: "/firma/"
	},
	server: {
		host: "0.0.0.0",
		port: 3000
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#610a1a" },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{
			src: "~/plugins/vue-mask.js",
			ssr: false
		}
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ["@nuxtjs/vuetify"],
	/*
	 ** Nuxt.js modules
	 */
	modules: [],
	/*
	 ** vuetify module configuration
	 ** https://github.com/nuxt-community/vuetify-module
	 */
	vuetify: {
		customVariables: ["~/assets/variables.scss"],
		theme: {
			dark: true,
			themes: {
				dark: {
					// primary: colors.blue.darken2,
					primary: "#26262b",
					// accent: colors.grey.darken3,
					accent: "#000",
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
}
