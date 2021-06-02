<template>
  <div>
    <div class="container mb-5">
      <MDBCard bg="dark" text="white">
        <MDBCardImg
          src="https://mdbootstrap.com/img/new/slides/017.jpg"
          alt="..."
          overlay
          class=""
        >
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </MDBCardText>
          <MDBCardText>Last updated 3 mins ago</MDBCardText>
        </MDBCardImg>
      </MDBCard>
    </div>
  </div>
</template>

<script>
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
} from "mdb-vue-ui-kit";
export default {
  name: "Card",
  components: {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
  },
};
</script>

<style></style>
