<template>
	<StatusMessages :msg="msg" v-show="msg" />

	<!-- Validação se há burgers, v-if -->
	<div id="burger-table">
		<div>
			<div id="burger-table-heading">
				<div class="order-id">#:</div>
				<div>Cliente:</div>
				<div>Pão:</div>
				<div >Tamanho do Pão: </div>
				<div>Carne: </div>
				<div>Opcionais: </div>
				<div>Acompanhamentos: </div>
				<div>Ações: </div>
			</div>
		</div>

		<div id="burger-table-rows">
			<!-- Aqui faremos o nosso v-for -->
			<div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
				<div class="order-number">{{ burger.id }}</div>
				<div>{{ burger.userName }}</div>
				<div>{{ burger.breadType }}</div>
				<div>{{ burger.breadSizes }}</div>
				<div>{{ burger.meatType }}</div>
				<div>
					<ul>
						<li v-for="(optionals, index) in burger.optionals" :key="index">
							{{ optionals }}
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li v-for="(sideDishes, index) in burger.sideDishes" :key="index">
							{{ sideDishes }}
						</li>
					</ul>
				</div>
				<div>
					<select name="status" class="status" @change="updateStatusOrder($event, burger.id)">
						<option>Selecione o Status: </option>
						<option :value="ref.type" v-for="ref in status" :key="ref.id" :selected="burger.status == ref.type">
							{{ ref.type }}
						</option>
					</select>
					<button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import StatusMessages from '../StatusMessages/StatusMessages.vue';

export default {
	name: "DashboardVue",

	components: {
		StatusMessages
	},

	data() {
		return {
			burgers: null,
			burger_id: null,
			status: [],
			msg: null
		}
	},

	methods: {
		/* -----------------
			Buscar Pedidos
		-------------------- */
		async getOrders() {
			const urlOrders = 'http://localhost:3000/burgers';

			await axios
				.get(urlOrders)
				.then((response) => {
					console.log('resposta', response.data);
					this.burgers = response.data;
				})
				.catch((response) => {
					console.log(response);
				})


			this.getStatus();
		},

		/* -------------------
			Resgatar status
		---------------------- */
		async getStatus() {
			const urlStatus = 'http://localhost:3000/status';

			await axios
				.get(urlStatus)
				.then((response) => {
					console.log('status', response.data);
					this.status = response.data;
				})
				.catch((response) => {
					console.log(response);
				})
		},

		/* -------------------
			Delete Burger
		---------------------- */
		async deleteBurger(orderId) {
			console.log(orderId);

			const urlOrders = `http://localhost:3000/burgers/${orderId}`;

			await axios
				.delete(urlOrders)
				.then(() => {
					console.log('Delete successful');
					this.msg = `O pedido nº${orderId} foi REMOVIDO com sucesso!`;
				})

			this.scrollToTop();

			this.removeMessage();

			this.getOrders();
		},

		/* -------------------
			Update Status
		---------------------- */
		async updateStatusOrder(event, orderId) {
			const option = event.target.value;

			const urlOrder = `http://localhost:3000/burgers/${orderId}`;

			await axios
				.patch(urlOrder, {
					status: option
				})
				.then(() => {
					console.log('Order Updated');
					this.msg = `Status atual do pedido nº${orderId}: ${option}`;
				})

			this.scrollToTop();

			this.removeMessage();

			this.getOrders();
		},

		removeMessage() {
			setTimeout(() => {
				this.msg = '';
			}, 3000)
		},

		scrollToTop() {
			window.scrollTo(0,70);
		}
	},

	mounted() {
		this.getOrders();
	}

	/* -------------------------------------------------------------
		Ex: A criterio de melhoria: todas as infos do campo msg,
			podem vir por props, podemos também deixar o temporizador
			para retirar a msg como default e dentro do componente
	---------------------------------------------------------------- */
}
</script>

<style lang="scss" src="./Dashboard.scss" scoped />
