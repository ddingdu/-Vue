<template>
  <div>
    <h3>username: {{ user.username }}</h3>
    <h3>email: {{ user.email }}</h3>
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    user: Object
  }
}
</script>

<style>

</style>