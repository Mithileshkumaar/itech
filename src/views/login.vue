<template>
  <div>
    <div class="container-fluid" style="margin-left: 400px">
      <div class="row">
        <div
          class="card mt-5 shadow p-3 mb-5 bg-white rounded"
          style="width: 600px"
        >
          <h3>LOGIN</h3>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <input
                  placeholder="Email Address"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <input
                  placeholder="Password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check"></div>
              <router-link to="/donate"
                ><button type="submit" class="btn btn-danger">
                  Submit
                </button></router-link
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
