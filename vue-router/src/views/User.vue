<template>
    <div>
        <div class="col-md-3">
            <div class="nav nav-stacked">
                <li><router-link :to="{path: '/user/add'}">添加用户</router-link></li>
                <li><router-link :to="{path: '/user/list'}">用户列表</router-link></li>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>