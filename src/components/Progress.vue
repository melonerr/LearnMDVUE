<template>
  <div class="container p-5 mb-5">
    <h5>Value : 25%</h5>
    <div class="p-4 rounded shadow m-3">
      <MDBProgress>
        <MDBProgressBar :value="25" bg="primary" />
      </MDBProgress>
    </div>
    <h5 class="mt-4">Value : 35%</h5>
    <div class="p-4 rounded shadow m-3">
      <MDBProgress>
        <MDBProgressBar :value="35" bg="success" />
      </MDBProgress>
    </div>
    <h5 class="mt-4">Value : 45%</h5>
    <div class="p-4 rounded shadow m-3">
      <MDBProgress>
        <MDBProgressBar :value="45" bg="info" />
      </MDBProgress>
    </div>
    <h5 class="mt-4">Value : 55%</h5>
    <div class="p-4 rounded shadow m-3">
      <MDBProgress>
        <MDBProgressBar :value="55" bg="warning" />
      </MDBProgress>
    </div>
    <h5 class="mt-4">Value : 75%</h5>
    <div class="p-4 rounded shadow m-3">
      <MDBProgress>
        <MDBProgressBar :value="75" bg="danger" />
      </MDBProgress>
    </div>
    <h5 class="mt-4">Value : 75% Slim </h5>
    <div class="p-4 rounded shadow m-3">
      <MDBProgress>
        <MDBProgressBar :value="15" />
        <MDBProgressBar :value="15" bg="danger" />
        <MDBProgressBar :value="15" bg="warning" />
        <MDBProgressBar :value="15" bg="success" />
        <MDBProgressBar :value="15" bg="info" />
      </MDBProgress>
    </div>
  </div>
</template>

<script>
import { MDBProgress, MDBProgressBar } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBProgress,
    MDBProgressBar,
  },
};
</script>

<style></style>
