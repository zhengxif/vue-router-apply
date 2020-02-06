<template>
    <div>
        <input type="text" v-model="username" />
        <button @click="toList">去列表页</button>
    </div>
</template>

<script>
export default {
    methods: {
        toList() {
            this.$router.push('/user/list');
        }
    },
    // 路由钩子函数
    beforeRouteLeave(to, from, next) {
        if (this.username) {
            let confirm = window.confirm('你需要切换吗');
            if (confirm) {
                next();
            }
        } else {
            next();
        }
       
    },
    data() {
        return {
            username: ''
        }
    }
}
</script>