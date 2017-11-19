<template>
<div class="wrap">
    <top/>
    <div class="container">
        <router-view/>
    </div>
    <bottom/>
</div>
</template>

<script>
import top from './components/top';
import middle from './pages/index';
import bottom from './components/bottom';

export default {
    name: 'App',
    components: {
        top,
        middle,
        bottom
    },
    data() {
        return {
            info: {}
        };
    }
};
</script>

<style lang="scss">
@import '/assets/css/global.scss';
</style>
