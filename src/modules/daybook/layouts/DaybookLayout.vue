<template>
  <NavBar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    RouterView,

    NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  }
}
</script>
