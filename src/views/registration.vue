<template >
  <div class="container-fluid" style="">
    <div class="row">
      <div class="col-5"></div>
      <div class="col-6">
        <div class="card mt-5 shadow p-3 mb-5 bg-white rounded">
          <h3>Registration</h3>
          <div class="card-body">
            <form>
              <div
                class="d-flex flex-row bd-highlight mb-3 justify-content-center"
              >
                <div class="p-2 bd-highlight">
                  <input
                    placeholder="FirstName"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    key=""
                    style="border-radius: 10px"
                  />
                </div>
                <div class="p-2 bd-highlight">
                  <input
                    placeholder="LastName"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style="border-radius: 10px"
                  />
                </div>
              </div>
              <textarea
                class="form-control"
                placeholder="Address"
                id="floatingTextare"
              ></textarea>
              <div class="my-4">
                <input
                  placeholder="Email Address"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style="border-radius: 10px"
                />
              </div>
              <div class="mb-4">
                <input
                  placeholder="Password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  style="border-radius: 10px"
                />
              </div>
              <div class="mb-4">
                <input
                  placeholder="Confirm Password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  style="border-radius: 10px"
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                style="border-radius: 10px"
              >
                Register<router-link to="/login.vue"></router-link>
              </button>
            </form>
            have an Account?
            <a href="../views/login.vue">Login!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
input {
}
</style>
<script setup>
</script>
