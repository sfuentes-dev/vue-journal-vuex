<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex mb-2">
      <span class="text-success fs-5 fw-bold">10</span>
      <span class="mx-1 fs-5">May</span>
      <span class="mx-2 fs-5 fw-light">2022, Wednesday</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae deserunt impedit
      praesentium iste eius commodi in soluta corporis quidem aut necessitatibus repellendus
      voluptates, eaque, obcaecati pariatur optio, veniam quo?
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
