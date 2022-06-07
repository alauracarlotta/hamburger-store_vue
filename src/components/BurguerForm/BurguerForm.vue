<template>
	<div>
		<p>Componente de Mensagem</p>
		<div>
			<form id="burguerForm">
				<!-- User data -->
				<div class="input-container">
					<label for="userName">Nome do Cliente: </label>
					<input
						type="text"
						id="userName"
						name="userName"
						v-model="name"
						placeholder="Digite o seu nome"
					>
				</div>

				<!-- Bread data -->
				<div class="input-container">
					<label for="bread">Escolha o pão: </label>
					<select id="bread" name="bread" v-model="bread">
						<option value="">Selecione o seu pão: </option>
						<option value="integral">Integral</option>
					</select>
				</div>

				<!-- Meat data -->
				<div class="input-container">
					<label for="meat">Escolha a carne: </label>
					<select id="meat" name="meat" v-model="meat">
						<option value="">Selecione a carne: </option>
						<option value="maminha">Maminha</option>
					</select>
				</div>

				<!-- Optional data -->
				<div id="optional-container" class="input-container">
					<label class="optional-title" for="optional">Selecione os opcionais: </label>
					<div class="checkbox-container">
						<input type="checkbox" name="optional" v-model="optional" value="salame">
						<span>Salame</span>
					</div>

					<div class="checkbox-container">
						<input type="checkbox" name="optional" v-model="optional" value="salame">
						<span>Salame</span>
					</div>

					<div class="checkbox-container">
						<input type="checkbox" name="optional" v-model="optional" value="salame">
						<span>Salame</span>
					</div>

					<div class="checkbox-container">
						<input type="checkbox" name="optional" v-model="optional" value="salame">
						<span>Salame</span>
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
export default {
	name: 'BurguerForm',
}
</script>

<style lang="scss" src="./BurguerForm.scss" scoped />
