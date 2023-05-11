<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="textd" class="form-control" placeholder="Search Entry" />
    </div>

    <div class="entry-scrollarea">
      <h2 v-for="item in 100" :key="item">
        <Entry />
      </h2>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./EntryComponent.vue'))
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
