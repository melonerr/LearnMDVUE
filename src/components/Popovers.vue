<template>
  <div class="text-center mb-5">
    <MDBPopover v-model="popover6" dismissible>
      <template #reference><a class="btn btn-secondary" tabindex="0" @click="popover6 = !popover6">Dismissible popover</a></template>
      <template #header>Dismissible popover</template>
      <template #body>And here's some amazing content. It's very engaging. Right?</template>
    </MDBPopover>
  </div>
</template>

<script>
import { MDBPopover } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBPopover,
  },
  setup() {
    const popover6 = ref(false);

    return {
      popover6,
    };
  },
};
</script>

<style></style>
