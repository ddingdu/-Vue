<template>
  <div>
    <h2>찾으시려는 페이지가 존재하지 않습니다!</h2>
    <br>
    <div class="noResult">
      <img src="../assets/noResult.png" alt="" class="image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',
}
</script>

<style>
.noResult {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>