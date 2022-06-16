<template>
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
			<div class="burger-table-row">
				<div class="order-number">1</div>
				<div>Jão</div>
				<div>Parmesão com Orégano</div>
				<div>30cm</div>
				<div>Alcatra</div>
				<div>
					<ul>
						<li>Azeitona</li>
						<li>Bacon</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Batata</li>
						<li>Milk Shake</li>
					</ul>
				</div>
				<div>
					<select name="status" class="status">
						<option value="">Selecione o Status: </option>
					</select>
					<button class="delete-btn">Cancelar</button>
				</div>
			</div>
			<div class="burger-table-row">
				<div class="order-number">1</div>
				<div>Jão</div>
				<div>Parmesão com Orégano</div>
				<div>30cm</div>
				<div>Alcatra</div>
				<div>
					<ul>
						<li>Azeitona</li>
						<li>Bacon</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Batata</li>
						<li>Milk Shake</li>
					</ul>
				</div>
				<div>
					<select name="status" class="status">
						<option value="">Selecione o Status: </option>
					</select>
					<button class="delete-btn">Cancelar</button>
				</div>
			</div>
			<div class="burger-table-row">
				<div class="order-number">1</div>
				<div>Jão</div>
				<div>Parmesão com Orégano</div>
				<div>30cm</div>
				<div>Alcatra</div>
				<div>
					<ul>
						<li>Azeitona</li>
						<li>Bacon</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Batata</li>
						<li>Milk Shake</li>
					</ul>
				</div>
				<div>
					<select name="status" class="status">
						<option value="">Selecione o Status: </option>
					</select>
					<button class="delete-btn">Cancelar</button>
				</div>
			</div>
			<div class="burger-table-row">
				<div class="order-number">1</div>
				<div>Jão</div>
				<div>Parmesão com Orégano</div>
				<div>30cm</div>
				<div>Alcatra</div>
				<div>
					<ul>
						<li>Azeitona</li>
						<li>Bacon</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Batata</li>
						<li>Milk Shake</li>
					</ul>
				</div>
				<div>
					<select name="status" class="status">
						<option value="">Selecione o Status: </option>
					</select>
					<button class="delete-btn">Cancelar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DashboardVue",
}
</script>

<style lang="scss" src="./Dashboard.scss" scoped />
