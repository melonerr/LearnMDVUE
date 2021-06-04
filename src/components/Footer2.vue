<template>
  <div>
    <!-- Footer -->
    <footer class="page-footer font-small cyan darken-3">
      <!-- Footer Text -->
      <div class="container text-center text-md-left pt-5 mt5">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3 mb-3">
            <!-- Content -->
            <h5 class="text-uppercase font-weight-bold text-white">
              Footer text 1
            </h5>
            <p class="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              sapiente sint, nulla, nihil repudiandae commodi voluptatibus
              corrupti animi sequi aliquid magnam debitis, maxime quam
              recusandae harum esse fugiat. Itaque, culpa?
            </p>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->
          <div class="col-md-6 mb-md-0 mb-3">
            <!-- Content -->
            <h5 class="text-uppercase font-weight-bold text-white">
              Footer text 2
            </h5>
            <p class="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              deserunt fuga perferendis modi earum commodi aperiam temporibus
              quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
              aspernatur id excepturi hic.
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Text -->
      <!-- Footer Elements -->
      <div class="container">
        <hr class="text-white hr-2" />
        <!-- Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
              <!-- Facebook -->
              <a class="fb-ic p-lr-10">
                <i
                  class="
                    fab
                    fa-facebook-f fa-lg
                    white-text
                    mr-md-5 mr-3
                    fa-2x
                    fab-white
                  "
                >
                </i>
              </a>
              <!-- Twitter -->
              <a class="tw-ic p-lr-10">
                <i
                  class="
                    fab
                    fa-twitter fa-lg
                    white-text
                    mr-md-5 mr-3
                    fa-2x
                    fab-white
                  "
                >
                </i>
              </a>
              <!-- Google +-->
              <a class="gplus-ic p-lr-10">
                <i
                  class="
                    fab
                    fa-google-plus-g fa-lg
                    white-text
                    mr-md-5 mr-3
                    fa-2x
                    fab-white
                  "
                >
                </i>
              </a>
              <!--Linkedin -->
              <a class="li-ic p-lr-10">
                <i
                  class="
                    fab
                    fa-linkedin-in fa-lg
                    white-text
                    mr-md-5 mr-3
                    fa-2x
                    fab-white
                  "
                >
                </i>
              </a>
              <!--Instagram-->
              <a class="ins-ic p-lr-10">
                <i
                  class="
                    fab
                    fa-instagram fa-lg
                    white-text
                    mr-md-5 mr-3
                    fa-2x
                    fab-white
                  "
                >
                </i>
              </a>
              <!--Pinterest-->
              <a class="pin-ic p-lr-10">
                <i class="fab fa-pinterest fa-lg white-text fa-2x fab-white">
                </i>
              </a>
            </div>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">
          MDBootstrap.com</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
    <button
      type="button"
      class="btn btn-mat btn-floating btn-lg"
      id="btn-back-to-top"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cyan.darken-3 {
  background-color: #00838f !important;
}
footer.page-footer .footer-copyright {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(0, 0, 0, 0.2);
}
.flex-center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
}
.p-lr-10 {
  padding: 0 10px;
}
.fab-white {
  color: white !important;
}
#btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
}
.btn-mat {
    color: #fff;
    background-color: #fbbf74;
}
</style>
