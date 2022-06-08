<template>
	<div>
		<p>Componente de Mensagem</p>
		<div>
			<form id="burguerForm" @submit="createBurger">
				<!-- User Name -->
				<div class="input-container">
					<label for="userName">Nome do Cliente: </label>
					<input
						type="text"
						id="userName"
						name="userName"
						v-model="userName"
						placeholder="Digite o seu nome"
					>
				</div>

				<!-- Bread Types -->
				<div class="input-container">
					<label for="breadType">Escolha o pão: </label>
					<select id="breadType" name="breadType" v-model="breadType">
						<option disabled>Selecione o seu pão: </option>
						<option v-for="bread in breadTypes" :key="bread.id" :value="bread.tipo">
							{{ bread.tipo }}
						</option>
					</select>
				</div>

				<!-- Bread Size -->
				<div id="breadSize-container" class="input-container">
					<label class="optional-title" for="breadSizeRadio">Selecione o tamanho do pão: </label>
					<div v-for="breadSize in breadSizeIngredients" :key="breadSize.id" class="checkbox-container">
						<input type="radio" name="breadSizeRadio" v-model="breadSizes" :value="breadSize.tipo">
						<span>{{ breadSize.tipo }}</span>
					</div>
				</div>

				<!-- Meat Types -->
				<div class="input-container">
					<label for="meat">Escolha a carne: </label>
					<select id="meat" name="meat" v-model="meatType">
						<option disabled>Selecione a carne: </option>
						<option v-for="meat in meatTypes" :key="meat.id" :value="meat.tipo">
							{{ meat.tipo }}
						</option>
					</select>
				</div>

				<!-- Optionals -->
				<div id="optional-container" class="input-container">
					<label class="optional-title" for="optionals">Selecione os opcionais: </label>
					<div v-for="optional in optionalIngredients" :key="optional.id" class="checkbox-container">
						<input type="checkbox" name="optionals" v-model="optionals" :value="optional.tipo">
						<span>{{ optional.tipo }}</span>
					</div>
				</div>

				<!-- Side Dishes -->
				<div id="sideDishes-container" class="input-container">
					<label class="optional-title" for="sideDishes">Selecione os acompanhamentos: </label>
					<div v-for="sideDish in sideDishesIngredients" :key="sideDish.id" class="checkbox-container">
						<input type="checkbox" name="sideDishes" v-model="sideDishes" :value="sideDish.tipo">
						<span>{{ sideDish.tipo }}</span>
					</div>
				</div>

				<!-- Submit order OK  -->
				<div class="input-container">
					<input type="submit" class="submit-btn" value="Criar meu Burger">
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'BurguerForm',

	data() {
		return {
			breadTypes: null,
			breadSizeIngredients: null,
			meatTypes:null,
			optionalIngredients: null,
			sideDishesIngredients: null,

			userName: null,
			breadType: null,
			breadSizes: null,
			meatType: null,
			optionals: [],
			sideDishes: [],
			msg: null,
		}
	},

	methods: {
		async getIngredients() {
			const urlIngredients = 'http://localhost:3000/ingredientes';

			await axios
				.get(urlIngredients)
				.then((response) => {
					this.breadTypes = response.data.paes;
					this.breadSizeIngredients = response.data.tamanhoPao;
					this.meatTypes = response.data.carnes;
					this.optionalIngredients = response.data.opcionais;
					this.sideDishesIngredients = response.data.acompanhamento;
				})
				.catch((response) => {
					console.log(response);
				});
		},

		async createBurger(e) {

			e.preventDefault();

			const urlOrders = 'http://localhost:3000/burgers';

			axios
				.post(urlOrders, {
					nome: this.userName,
					pao: this.breadType,
					tamanhoPao: this.breadSizes,
					carne: this.meatType,
					opcionais: Array.from(this.optionals),
					acompanhamento: Array.from(this.sideDishes),
					status: 'Solicitado',
				})
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},

	mounted() {
		this.getIngredients();
	}
}
</script>

<style lang="scss" src="./BurguerForm.scss" scoped />
