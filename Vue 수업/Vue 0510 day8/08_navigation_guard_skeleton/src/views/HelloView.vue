<template>
    <div>
        <h1>hello, {{ userName }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloView',
    data() {
        return {
            userName: this.$route.params.userName
        }
    },
    // CODE HERE
    // about 창에서 새로운 값 입력했을 때, url주소가 기본으로 지정해둔 'woong'이 아닌 새로운 값으로 변경되도록
    beforeRouteUpdate(to, from, next) {
        this.userName = to.params.userName
        next()
    }
}
</script>


