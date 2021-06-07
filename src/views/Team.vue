<template>
  <Navbar />
  <!-- <Ckeditor /> -->
  <!-- MDB -->
  <MDB />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import MDB from "@/components/MDB.vue";
import Footer from "@/components/Footer2.vue";

export default {
  name: "Home",
  components: {
    MDB,
    Footer,
    Navbar,
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
