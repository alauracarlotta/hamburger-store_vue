<template>
	<NavbarMenu :logo_header="logoHeader" :alt_header="altHeader"/>
	<router-view />
	<FooterMain />
</template>

<script>
import NavbarMenu from './components/Base/NavbarMenu/NavbarMenu.vue';
import FooterMain from './components/Base/FooterMain/FooterMain.vue';

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

<style lang="scss" src="./style.scss" />
