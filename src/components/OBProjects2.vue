<template>
  <div class="container my-5">
    <!-- Section: Block Content -->
    <section class="dark-grey-text text-center">
      <h3 class="text-center font-weight-bold mb-4 pb-2">
        Our best projects V1
      </h3>
      <p class="text-center text-muted w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>

      <!-- First row -->
      <div class="row">
        <!-- First column -->
        <div class="col-lg-4 col-md-12 mb-4">
          <div class="bg-image">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/img3.jpg"
              class="img-fluid"
              alt="Sample"
              width="100%"
            />
            <div class="mask mask-show">
              <div
                class="d-flex justify-content-center align-items-center h-100 mask-hover"
              >
                <p class="btn btn-outline-white btn-rounded">see more</p>
              </div>
            </div>
          </div>
          <p class="text-uppercase text-center text-muted mt-4 mb-0">
            Lorem ipsum dolor sit
          </p>
        </div>
        <!-- First column -->

        <!-- Second column -->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="bg-image">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/img4.jpg"
              class="img-fluid"
              alt="Sample"
              width="100%"
            />
            <div class="mask mask-show">
              <div
                class="d-flex justify-content-center align-items-center h-100 mask-hover"
              >
                <p class="btn btn-outline-white btn-rounded">see more</p>
              </div>
            </div>
          </div>
          <p class="text-uppercase text-center text-muted mt-4 mb-0">
            Lorem ipsum dolor sit
          </p>
        </div>
        <!-- Second column -->

        <!-- Third column -->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="bg-image">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/img8.jpg"
              class="img-fluid"
              alt="Sample"
              width="100%"
            />
            <div class="mask mask-show">
              <div
                class="d-flex justify-content-center align-items-center h-100 mask-hover"
              >
                <p class="btn btn-outline-white btn-rounded">see more</p>
              </div>
            </div>
          </div>
          <p class="text-uppercase text-center text-muted mt-4 mb-0">
            Lorem ipsum dolor sit
          </p>
        </div>
        <!-- Third column -->
      </div>
      <!-- First row -->
    </section>
    <!-- Section: Block Content -->
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pointer {
  cursor: pointer;
  opacity: 100%;
}
.pointer:hover {
  opacity: 70%;
}
.mask-hover {
  opacity: 0%;
}
.mask-hover:hover {
  opacity: 100%;
  transition-duration: 0.8s;
}
.mask-show:hover {
  background-color: rgba(0, 0, 0, 0.3);
  transition-duration: 0.8s;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
