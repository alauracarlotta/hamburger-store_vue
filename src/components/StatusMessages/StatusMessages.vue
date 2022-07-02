<template>
	<div>
		<div class="message-container">
			<div class="alert alert-success" role="alert">
				{{ msg }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StatusMessages',

	props: {
		msg: String,
	}
}
</script>

<style lang="scss" src="./StatusMessages.scss" scoped />
