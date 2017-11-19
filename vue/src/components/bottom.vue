<template>
	<footer class="footer">{{copyright}} © {{year}}</footer>
</template>

<script>
export default {
    data() {
	  return {
		  copyright: window.vars.copyright,
		  year: new Date().getFullYear()
	  };
    }
};
</script>


<style lang="scss">
@import '../assets/css/bottom.scss';
</style>
