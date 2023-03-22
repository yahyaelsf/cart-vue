<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
    <div>
        <header-tag/>       
        <router-view></router-view>
        <footer-tag/>
    </div>
</template>

<style scoped></style>
