<template>
	<div class="container">
		<h1>Gerenciar Pedidos</h1>
		<Dashboard/>
	</div>
</template>

<script>
import Dashboard from '../components/Dashboard/Dashboard.vue';

export default {
	name: "PedidosView",

	components: {
		Dashboard,
	}
}
</script>
