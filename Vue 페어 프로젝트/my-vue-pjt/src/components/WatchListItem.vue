<template>
  <div>
    <div class="d-flex justify-content-center">
      <input
        class="form-control"
        style="width: 20rem"
        type="text"
        v-model.trim="watchname"
        @keyup.enter="createWatchName"
      />
      <button @click="createWatchName" class="btn btn-outline-secondary">
        Add
      </button>
    </div>
    <br />
    <p
      v-for="(watch, index) in watch_list"
      :key="index"
      @click="updateWatch(watch)"
      :class="{ 'is-completed': watch.is_completed }"
      class="fs-5"
    >
      {{ watch.watchname }}
    </p>
  </div>
</template>

<script>
export default {
  name: "WatchListItem",
  data() {
    return {
      watchname: null,
      watch_list: [],
    };
  },
  created() {
    const savedWatchList = localStorage.getItem("watch_list");
    if (savedWatchList) {
      this.watch_list = JSON.parse(savedWatchList);
    }
  },
  methods: {
    createWatchName() {
      const watchname = this.watchname;
      if (!watchname) {
        alert("입력해주세요!");
        return;
      } else {
        this.watch_list.push({
          watchname: this.watchname,
          is_completed: false,
        });
        this.watchname = "";
        this.saveWatchList();
      }
    },
    updateWatch(watch) {
      watch.is_completed = !watch.is_completed;
      this.saveWatchList();
    },
    saveWatchList() {
      localStorage.setItem("watch_list", JSON.stringify(this.watch_list));
    },
  },
};
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
</style>
