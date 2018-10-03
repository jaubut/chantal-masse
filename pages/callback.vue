<template>
	<section>
		<div>

		</div>
	</section>
</template>

<script>
  export default {
    data() {
      return {
        request_progress: true,
      }
    },
    beforeCreate() {
    },
    beforeMount() {
    },
    async mounted() {
      await this.$nextTick(() => {
        this.$nuxt.$loading.start()
      });
    },
    methods: {
    }
  }
</script>

<style>

</style>
