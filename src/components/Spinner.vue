<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5 pb-5">
          <center>
            <MDBSpinner color="primary" />
            <MDBSpinner color="secondary" />
            <MDBSpinner color="success" />
            <MDBSpinner color="danger" />
            <MDBSpinner color="warning" />
            <MDBSpinner color="info" />
            <MDBSpinner color="light" />
            <MDBSpinner color="dark" />
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBSpinner } from "mdb-vue-ui-kit";
export default {
  name: "Spinner",
  components: {
    MDBSpinner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-code {
  background: f5f2f0;
}
.ul-none {
  list-style-type: none;
}
.ul-border-right {
  border-right: 1px solid black;
}
.pr-1 {
  padding-right: 1rem;
}
.pr-2 {
  padding-right: 2rem;
}
.pr-3 {
  padding-right: 3rem;
}
.pr-4 {
  padding-right: 4rem;
}
.pr-5 {
  padding-right: 5rem;
}
.pr-6 {
  padding-right: 6rem;
}
</style>
