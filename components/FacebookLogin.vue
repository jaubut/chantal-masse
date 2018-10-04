<template>
	<section>
		<div>
			<button primary @click.native="facebookLogin">facebook</button>
		</div>
	</section>
</template>

<script>
export default {
	data () {
		return {
			formEmail: '',
			formPassword: ''
		}
	},
	methods: {
		facebookLogin () {
			this.$store.dispatch('signInWithFacebook').then(() => {
				location.reload()
			}).catch((e) => {
				console.log(e.message)
			})
		}
	}
}
</script>
