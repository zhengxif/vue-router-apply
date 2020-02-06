<template>
    <div>
        userDetail
        {{this.$route.query.id}}
    </div>
</template>
<script>
export default {
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate');
        next();
    },
    beforeRouteEnter(to, from,next) {
        console.log('beforeRouteEnter');
        next();
    }
    // watch: {
    //     $route() {
    //         alert(1);
    //     }
    // }
}
</script>