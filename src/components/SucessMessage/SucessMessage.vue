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
	name: 'SucessMessage',

	props: {
		msg: String,
	}
}
</script>

<style lang="scss" src="./SucessMessage.scss" scoped />
