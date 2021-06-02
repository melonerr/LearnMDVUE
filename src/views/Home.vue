<template>
  <Navbar />
  <Carousel />
  <!-- MDB -->
  <MDB />
  <div class="container mb-3">
    <h1>Card</h1>
  </div>
  <Card />
  <div class="container mb-3">
    <h1>Spinner</h1>
  </div>
  <Spinner />
  <div class="container mb-3">
    <h1>Tabs</h1>
  </div>
  <Tabs />
  <div class="container mb-3">
    <h1>Button</h1>
  </div>
  <Btn />
  <div class="container mb-3">
    <h1>Card Image</h1>
  </div>
  <Cardimg />
  <div class="container mb-3">
    <h1>Popovers</h1>
  </div>
  <Popovers />
  <div class="container mb-3">
    <h1>Progress</h1>
  </div>
  <Progress />
  <div class="container mb-3">
    <h1>Tooltips</h1>
  </div>
  <Tooltips />
  <div class="container mb-3">
    <h1>Masks</h1>
  </div>
  <Masks />
  <div class="container mb-3">
    <h1>Validatio</h1>
  </div>
  <FormValidation />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import MDB from "@/components/MDB.vue";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";
import Tabs from "@/components/Tabs.vue";
import Btn from "@/components/Btn.vue";
import Cardimg from "@/components/Cardimg.vue";
import Popovers from "@/components/Popovers.vue";
import Progress from "@/components/Progress.vue";
import Tooltips from "@/components/Tooltips.vue";
import Masks from "@/components/Masks.vue";
import FormValidation from "@/components/FormValidation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    MDB,
    Card,
    Spinner,
    Footer,
    Navbar,
    Tabs,
    Btn,
    Cardimg,
    Popovers,
    Progress,
    Tooltips,
    Masks,
    FormValidation,
  },
};
</script>
<style>
.pointer {
  cursor: pointer;
}
/* margin top */
.m-t-0 {
  margin-top: 0rem !important;
}
.m-t-1 {
  margin-top: 1rem !important;
}
.m-t-2 {
  margin-top: 2rem !important;
}
.m-t-3 {
  margin-top: 3rem !important;
}
.m-t-4 {
  margin-top: 4rem !important;
}
.m-t-5 {
  margin-top: 5rem !important;
}
.m-t-6 {
  margin-top: 6rem !important;
}
/* margin Bottom */
.m-b-0 {
  margin-bottom: 0rem !important;
}
.m-b-1 {
  margin-bottom: 1rem !important;
}
.m-b-2 {
  margin-bottom: 2rem !important;
}
.m-b-3 {
  margin-bottom: 3rem !important;
}
.m-b-4 {
  margin-bottom: 4rem !important;
}
.m-b-5 {
  margin-bottom: 5rem !important;
}
.m-b-6 {
  margin-bottom: 6rem !important;
}
/* margin left */
.m-l-0 {
  margin-left: 0rem !important;
}
.m-l-1 {
  margin-left: 1rem !important;
}
.m-l-2 {
  margin-left: 2rem !important;
}
.m-l-3 {
  margin-left: 3rem !important;
}
.m-l-4 {
  margin-left: 4rem !important;
}
.m-l-5 {
  margin-left: 5rem !important;
}
.m-l-6 {
  margin-left: 6rem !important;
}
/* margin right */
.m-r-0 {
  margin-right: 0rem !important;
}
.m-r-1 {
  margin-right: 1rem !important;
}
.m-r-2 {
  margin-right: 2rem !important;
}
.m-r-3 {
  margin-right: 3rem !important;
}
.m-r-4 {
  margin-right: 4rem !important;
}
.m-r-5 {
  margin-right: 5rem !important;
}
.m-r-6 {
  margin-right: 6rem !important;
}
</style>
