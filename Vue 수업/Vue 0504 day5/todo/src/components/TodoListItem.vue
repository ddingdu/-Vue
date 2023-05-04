<template>
  <div>
    <!-- (index.js 와 맞아야함) -->
    <p>{{ todoitem.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoitem: Object,
  }
}
</script>

<style>

</style>