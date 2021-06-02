<template>
  <div class="mb-5">
    <div class="container">
      <p>
        Hover the link to see the
        <MDBTooltip v-model="tooltip1" tag="a">
          <template reference>
            <u class="text-primary pointer">tooltip</u>
          </template>
          <template tip>
            Hi! I'm tooltip
          </template>
        </MDBTooltip>
      </p>
    </div>
    <div class="container text-center">
      <MDBTooltip v-model="tooltip2">
        <template reference>
          <MDBBtn color="secondary">Tooltip on top</MDBBtn>
        </template>
        <template tip>
          Tooltip on top
        </template>
      </MDBTooltip>
      <MDBTooltip v-model="tooltip3" direction="right">
        <template reference>
          <MDBBtn color="secondary">Tooltip on right</MDBBtn>
        </template>
        <template tip>
          Tooltip on right
        </template>
      </MDBTooltip>
      <MDBTooltip v-model="tooltip4" direction="bottom">
        <template reference>
          <MDBBtn color="secondary">Tooltip on bottom</MDBBtn>
        </template>
        <template tip>
          Tooltip on bottom
        </template>
      </MDBTooltip>
      <MDBTooltip v-model="tooltip5" direction="left">
        <template reference>
          <MDBBtn color="secondary" disabled>Tooltip on left</MDBBtn>
        </template>
        <template tip>
          Tooltip on left
        </template>
      </MDBTooltip>
    </div>
    <div class="container text-center mt-5">
      <MDBTooltip v-model="tooltip6">
        <template reference>
          <MDBBtn color="secondary">Tooltip with HTML</MDBBtn>
        </template>
        <template tip> <em>Tooltip</em> <u>with</u> <b>HTML</b> </template>
      </MDBTooltip>
    </div>
  </div>
</template>

<script>
import { MDBTooltip, MDBBtn } from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBTooltip,
    MDBBtn,
  },
  setup() {
    const tooltip1 = ref(false);
    const tooltip2 = ref(false);
    const tooltip3 = ref(false);
    const tooltip4 = ref(false);
    const tooltip5 = ref(false);
    const tooltip6 = ref(false);
    return {
      tooltip1,
      tooltip2,
      tooltip3,
      tooltip4,
      tooltip5,
      tooltip6,
    };
  },
};
</script>

<style></style>
