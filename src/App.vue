<template>
	<NavbarMenu :logo_header="logoHeader" :alt_header="altHeader"/>
	<router-view />
	<FooterMain />
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';
import FooterMain from './components/FooterMain.vue';

export default {
	name: 'App',

	components: {
    	NavbarMenu,
		FooterMain,
	},

	data() {
		return {
			logoHeader: '/img/logo.png',
			altHeader: 'Make your burguer',
		}
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	font-family: Helvetica, sans-serif;

	.main-container {
		padding-top: 2rem;

		h1 {
			text-align: center;
		}
	}
}
</style>
