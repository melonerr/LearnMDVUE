<template>
  <div class="container py-5 my-5">
    <section class="p-md-3 mx-md-5 text-center text-lg-left">
      <h2 class="text-center mx-auto font-weight-bold mb-5">Pricing Courses</h2>
      <div class="row">
        <div class="col-lg-4 mb-3 p-2">
          <div class="card text-center shadow">
            <div class="card-header white">
              <h4 class="h3 text-danger my-2">Basic</h4>
            </div>
            <div>
              <i class="fab fa-youtube fa-4x text-danger p-4"></i>
              <h1 class="h1 text-danger">
               Free
              </h1>
            </div>
            <div class="card-body pt-0 pb-0">
              <p class="card-text p-2">
                <ul class="list-none p-0 pl-25">
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Basic Courses</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>20Hr</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i>Sheet</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i> Documents</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i> Premium contents</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i> Support customer</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i> Certificate</li>
               </ul>
              </p>
            </div>
            <div class="card-footer white  mb-3">
              <a class="btn btn-danger btn-md" href="" role="button"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3 p-2">
          <div class="card text-center shadow">
            <div class="card-header white">
              <h4 class="h3 text-warning my-2">Group</h4>
            </div>
            <div>
              <i class="fa fa-users fa-4x text-warning p-4"></i>
              <h1 class="h1 text-warning">
                &emsp;&ensp;200฿
                <span class="h5 sell text-muted">400฿</span>
              </h1>
            </div>
            <div class="card-body pt-0 pb-0">
              <p class="card-text p-2">
               <ul class="list-none p-0 pl-25">
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Advanced</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>40Hr</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i> Sheet</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Documents Online</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Premium contents</li>
                   <li class="text-start"><i class="fas fa-times text-danger pr-1"></i> Support customer</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Certificate</li>
               </ul>
              </p>
            </div>
            <div class="card-footer white mb-3">
              <a class="btn btn-warning btn-md btn-mat" href="" role="button"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3 p-2">
          <div class="card text-center shadow">
            <div class="card-header white">
              <h4 class="h3 text-primary my-2">Single</h4>
            </div>
            <div>
              <i class="fa fa-user fa-4x text-primary p-4"></i>
              <h1 class="h1 text-primary">
                &emsp;&ensp;300฿ <span class="h5 sell text-muted">600฿</span>
              </h1>
            </div>
            <div class="card-body pt-0 pb-0">
              <p class="card-text p-2">
               <ul class="list-none p-0 pl-25">
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Advanced</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>40Hr</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Sheet</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Documents Online</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Premium contents</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Support customer</li>
                   <li class="text-start"><i class="fas fa-check text-success pr-1"></i>Certificate</li>
               </ul>
              </p>
            </div>
            <div class="card-footer white mb-3">
              <a class="btn btn-primary btn-md" href="" role="button"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-header {
  border-bottom: none;
}
.card-footer {
  border-top: none;
}
.sell {
  text-decoration: line-through;
}
.btn-mat {
    color: #fff;
    background-color: #fbbf74;
}
.list-none{
    list-style-type:none
}
.pl-10{
padding-left: 10%!important;
}
.pl-20{
padding-left: 20%!important;
}
.pl-25{
padding-left: 25%!important;
}
.pl-30{
padding-left: 30%!important;
}
.pl-40{
padding-left: 40%!important;
}
.pr-1{
    padding-right: 1rem;
}
.pr-2{
    padding-right: 2rem;
}
.pr-3{
    padding-right: 3rem;
}
.pr-4{
    padding-right: 4rem;
}
.pr-5{
    padding-right: 5rem;
}

</style>
