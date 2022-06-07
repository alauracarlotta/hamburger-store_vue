<template>
	<BannerMain />
	<div class="container">
		<h1>MONTE O SEU HAMBURGUER: </h1>
		<BurguerForm />
	</div>
</template>

<script>
import BannerMain from '../components/Banner/BannerMain.vue';
import BurguerForm from '../components/BurguerForm/BurguerForm.vue';

export default {
	name: "HomeView",

	components: {
		BannerMain,
		BurguerForm
	},
}
</script>
