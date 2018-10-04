<template>
  <section class="container">
    <div>
      <h1>allo1</h1>
      <button @click="facebook" variant="outline-success">Facebook</button>
      <div
        class="fb-like"
        data-share="true"
        data-width="450"
        data-show-faces="true">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      loginForm: {
        email:'',
        password:''
      }
    }
  },
  component: {
  },
  watch: {
    $route() {
      this.showLoginModal();
    }
  },
  methods: {
    showLoginModal(){
      if (typeof this.$route.query.login !== 'undefined' && this.$route.query.login === "1") {
        this.$toast.error('Please Login ', {icon: "fingerprint"});
        this.$refs.myModalRef.show()
        this.$router.push('/')
      }
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    async google(){
      await this.$auth.loginWith('google').catch(e => {
        this.$toast.show('Error', {icon: "fingerprint"});
      })
    },
    async facebook(){
       await this.$auth.loginWith('facebook').catch(e => {
        this.$toast.show('Error', {icon: "fingerprint"});
      })
    },
    async login() {
      try {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        });
        await this.$auth.loginWith('local', {
          data: {
            "email": this.loginForm.email,
            "password": this.loginForm.password
          }
        })
        if (this.$auth.loggedIn) {
          this.$toast.success('Successfully Logged In', {icon: "done"});
        }
      } catch (e) {
        this.$toast.error('Username or Password wrong', {icon: "error"});
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
    check(){
      console.log(this.$auth.loggedIn)
    },
    logout() {
      this.$toast.show('Logging out...', {icon: "fingerprint"});
      this.$auth.logout()
    },
  }
}
</script>

<style>

</style>