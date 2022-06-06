<template>
	<NavbarMenu />
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
	}
}
</script>

<style>
</style>
