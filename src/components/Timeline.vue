<template>
  <div class="container mt-5 mb-5 p-5">
    <div class="position-relative" style="width: 100%">
      <div class="progress" style="height: 1px">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 50%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <MDBBtn
        color="primary"
        size="sm"
        class="position-absolute top-0 start-0 translate-middle rounded-pill"
      >
        1
      </MDBBtn>
      <MDBBtn
        color="primary"
        size="sm"
        class="position-absolute top-0 start-50 translate-middle rounded-pill"
      >
        2
      </MDBBtn>
      <MDBBtn
        color="secondary"
        size="sm"
        class="position-absolute top-0 start-100 translate-middle rounded-pill"
      >
        3
      </MDBBtn>
    </div>
  </div>
</template>

<script>
import { MDBBtn } from "mdb-vue-ui-kit";
export default {
  components: {
    MDBBtn,
  },
};
</script>

<style></style>
