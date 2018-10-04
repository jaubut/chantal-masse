<template>
  <div>
    <nuxt/>
    <div id="fb-root"></div>
    <div class="fb-customerchat" attribution=setup_tool page_id="470093576844474"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
</script>

<style>
</style>
<!-- Load Facebook SDK for JavaScript -->