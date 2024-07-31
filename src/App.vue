<template>
  <nav class="navbar navbar-expand-lg nav-underline relative" style="background-color: #6c757d; border-radius: 15px; margin: 12px;">
    <div class="container">
      <router-link to="/" class="navbar-brand">
      <img src="./assets/BLogo.png" alt="logo" width="70" height="auto" class="d-inline-block align-text-top">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
 
   

  <router-view/>
  <FooterView />
</template>

<script>
import FooterView from './views/FooterView';

export default {
  components: {
    FooterView
  }
};
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
body {
    font-family: Arial, sans-serif; 
    background-color: #6c757d;
    padding: 20px;
}
/* Navbar styles */
.navbar-brand img {
  border-radius: 50px;
  margin: 0;
  margin-top: 0;
}
.navbar-nav .nav-link {
  color: #ff0000;
  font-size: 18px; 
  font-weight: bold; 
  padding: 0.5rem 1rem;
}

.navbar-nav .nav-link:hover {
  background-color: #f1ebea;
}

.navbar-toggler {
  border-color: #ff0000;
}

.form-control {
  background-color: #fff;
  color: #000;
  border-color: #ff0000;
}

.form-control:focus {
  background-color: #555;
  border-color: transparent;
  color: #000;
}

.btn-outline-light {
  border-color: #fff;
  color: #000;
}

.btn-outline-light:hover {
  background-color: #555;
  
  color: #fff;
}

/* Media queries */
@media (max-width: 991.98px) {
  .navbar-nav .nav-link {
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 767.98px) {
  .navbar-brand img {
    margin-right: 0;
  }
}
</style>