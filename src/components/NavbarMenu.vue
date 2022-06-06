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

<style lang="scss" scoped>

#navbarMenu{
	background-color: #222;
	border-bottom: 4px solid #111;
	padding: 15px 50px;

	#logoNavbarMenu {
		height: 40px;
		width: 40px;
	}

	#headerLinks {
		a {
			color: #FCBA03;
			margin: .75rem;
			padding-bottom: .25rem;
			text-decoration-line: none;
			transition: .5s;

			&:hover {
				color: #FFF;
				border-bottom: 1px double #FFF;
			}
		}
	}
}

</style>
