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
						required
					>
				</div>

				<!-- Bread Types -->
				<div class="input-container">
					<label for="breadType">Escolha o pão: </label>
					<select id="breadType" name="breadType" v-model="breadType" required>
						<option disabled>Selecione o seu pão: </option>
						<option v-for="bread in breadTypes" :key="bread.id" :value="bread.type">
							{{ bread.type }}
						</option>
					</select>
				</div>

				<!-- Bread Size -->
				<div id="breadSize-container" class="input-container">
					<label class="optional-title" for="breadSizeRadio">Selecione o tamanho do pão: </label>
					<div v-for="breadSize in breadSizeIngredients" :key="breadSize.id" class="checkbox-container">
						<input type="radio" name="breadSizeRadio" v-model="breadSizes" :value="breadSize.type" :checked="checkedState">
						<span>
							{{ breadSize.type }}
						</span>
					</div>
				</div>

				<!-- Meat Types -->
				<div class="input-container">
					<label for="meat">Escolha a carne: </label>
					<select id="meat" name="meat" v-model="meatType" required>
						<option disabled>Selecione a carne: </option>
						<option v-for="meat in meatTypes" :key="meat.id" :value="meat.type">
							{{ meat.type }}
						</option>
					</select>
				</div>

				<!-- Optionals -->
				<div id="optional-container" class="input-container">
					<label class="optional-title" for="optionals">Selecione os opcionais: </label>
					<div v-for="optional in optionalIngredients" :key="optional.id" class="checkbox-container">
						<input type="checkbox" name="optionals" v-model="optionals" :value="optional.type">
						<span>{{ optional.type }}</span>
					</div>
				</div>

				<!-- Side Dishes -->
				<div id="sideDishes-container" class="input-container">
					<label class="optional-title" for="sideDishes">Selecione os acompanhamentos: </label>
					<div v-for="sideDish in sideDishesIngredients" :key="sideDish.id" class="checkbox-container">
						<input type="checkbox" name="sideDishes" v-model="sideDishes" :value="sideDish.type">
						<span>{{ sideDish.type }}</span>
					</div>
				</div>

				<!-- Submit order -->
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
			breadSizes: "45cm",
			checkedState: 1,
			meatType: null,
			optionals: [],
			sideDishes: [],
			msg: null,
		}
	},

	methods: {
		async getIngredients() {
			const urlIngredients = 'http://localhost:3000/ingredients';

			await axios
				.get(urlIngredients)
				.then((response) => {
					this.breadTypes = response.data.breads;
					this.breadSizeIngredients = response.data.sizeBreads;
					this.meatTypes = response.data.meats;
					this.optionalIngredients = response.data.optionals;
					this.sideDishesIngredients = response.data.sideDishes;
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
					name: this.userName,
					breads: this.breadType,
					sizeBreads: this.breadSizes,
					meats: this.meatType,
					optionals: Array.from(this.optionals),
					sideDishes: Array.from(this.sideDishes),
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
