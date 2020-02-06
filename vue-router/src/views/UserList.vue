<template>
    <div>
        <ul>
            <li><router-link to="/user/detail?id=1">用户1</router-link></li>
            <li><router-link to="/user/detail?id=2">用户2</router-link></li>

        </ul>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        if (from.name == 'userAdd') {
            alert(1);
        }
        next(vm => {
            console.log(vm); // 组件渲染完成后， 会调用beforeRouteEnter，把vm传进去
        });
    }
}
</script>