<template>
	<div id="navbarMenu" class="d-flex justify-content-between align-items-center">
		<router-link to="/">
			<img id="logoNavbarMenu" :src="logo_header" :alt="alt_header">
		</router-link>
		<div id="headerLinks">
			<router-link to="/">HOME</router-link>
			<router-link to="/pedidos">PEDIDOS</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavbarMenu',

	props: [
		'logo_header',
		'alt_header'
	]
}
</script>

<style lang="scss" src="./NavbarMenu.scss"  scoped />
