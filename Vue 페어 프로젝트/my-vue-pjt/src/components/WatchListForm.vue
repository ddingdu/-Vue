<template>
  <div>
    <br />
    <h1>Wish List</h1>
    <br />
    <WatchListItem />
  </div>
</template>

<script>
import WatchListItem from "@/components/WatchListItem";

export default {
  name: "WatchListForm",
  components: {
    WatchListItem,
  },
};
</script>

<style>
</style>