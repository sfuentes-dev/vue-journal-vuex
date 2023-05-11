<template>
  <div class="d-flex justify-content-center h-100">
    <h1 class="align-self-center">Nothing Selected</h1>
  </div>

  <FaBtn />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    FaBtn: defineAsyncComponent(() => import('../components/FaBtn.vue'))
  }
}
</script>

<style lang="scss" scoped></style>
