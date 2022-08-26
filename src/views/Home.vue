<template>
  <div class="home">
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        style="height: 400px"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/3.png"
              class="d-block w-100"
              alt="..."
              style="height: 350px"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/1.jpg"
              class="d-block w-100"
              alt="..."
              style="height: 350px; opacity: 1"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/1.jpg"
              class="d-block w-100"
              alt="..."
              style="height: 350px"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <h2 style="color: whitesmoke; letter-spacing: 3px" class="pt-3">
          Whether it is freshly cooked food or raw grains, we’re all hands on
          deck to take care of the food requirements for your beneficiaries.
        </h2>
      </div>

      <div class="row">
        <div class="col-8 pt-5">
          <p
            style="
              font-size: 20px;
              color: whitesmoke;
              padding-top: 70px;
              letter-spacing: 3px;
            "
          >
            people who places bulk orders are left out with some leftovers which
            are in vain instead people can update their food quantity and their
            place so our team could collect the food and serve it to the
            orphanages and old age homes who are very much in need of food. So
            lets make a change and hope we could make hunger free India. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Similique, vero
            unde et nulla laudantium in impedit cumque saepe placeat optio sint
            dolorem. Aliquid nam voluptatibus at facere alias doloribus rem?
          </p>
        </div>
        <div class="col-4" style="padding-top: 100px">
          <img
            src="../assets/istockphoto-521602350-612x612.jpeg"
            alt=""
            style="width: 400px; border-radius: 15px"
          />
          <!--  -->
        </div>
        <router-link to="/reg">
          <button
            type="button"
            class="btn btn-danger fixed-bottom"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Register
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>


