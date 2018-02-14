<template>
    <nav class="bt bb tc mw7 center mt4">
        <nuxt-link exact class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">All</nuxt-link>
        <nuxt-link class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/active">Active</nuxt-link>
        <nuxt-link class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/completed">Completed</nuxt-link>
    </nav>
</template>

<style scoped>
.nuxt-link-active {
    background-color: cornflowerblue;
    color: white;
}
</style>

