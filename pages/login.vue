<template>
	<section>
		<div>
			<h1>login</h1>
			<facebook-login></facebook-login>
		</div>
	</section>
</template>

<script>
import FacebookLogin from '~/components/FacebookLogin'
export default {
	components: {
		FacebookLogin
	}
}
</script>
