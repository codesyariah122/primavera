<template>
	<nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto text-white">
        <li class="nav-item active text-white">
          <router-link active-class="active" exact :to="{name: 'Home'}">
              Home
          </router-link>
        </li>
        <li class="nav-item ml-3">
           <router-link active-class="active" exact :to="{name: 'About'}">
              About
            </router-link>
        </li>
      </ul>
  </div>
</nav>
</template>

<script>

</script>

<style>
.navbar {
  position: relative;
  z-index: 1;
}
.navbar-brand {
  font-family: "Poiret One";
  font-weight: 900;
  font-size: 32px !important;
  text-transform: capitalize;
}
.transparent-nav {
  background: rgba(255, 255, 240, 0.3);
  margin-top: 0.5rem;
}
.white {
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}

@media (min-width: 992px) {
.nav-item{
  color:#fff;
}
.nav-link {
    text-transform: uppercase;
    margin-right: 30px;
    color: #fff;
  }

  .nav-link:hover::after {
    content: "";
    display: block;
    border-bottom: 3px solid #0B63DC;
    width: 50%;
    margin: auto;
    padding-bottom: 5px;
    margin-bottom: -8px;
  }

  /*.active {
    font-weight: 900;
    font-style: italic;
    text-transform: capitalize;
    color: salmon !important;
  }*/

  .active{
    color:rgba(0, 0, 0, 1) !important;
    }
    a {
      color: rgba(0, 0, 0, 0.5) !important;
  }

  .transparent-nav {
    background: rgba(0, 0, 0, 0.3);
    margin-top: 0.5rem;
  }
}
</style>