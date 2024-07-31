<template>
    <!-- Hero 4 - Bootstrap Brain Component -->
<section class="bg-secondary" style="margin: 12px; border-radius: 15px;">
  <div class="container-fluid overflow-hidden">
    <div class="row">
      <div class="col-12 col-md-6 order-1 order-md-0 align-self-md-end">
        <div class="row py-3 py-sm-5 py-xl-9 mt-md-10 justify-content-sm-center">
          <div class="col-12 col-sm-10">
            <h2 class="display-2 fw-bolder mb-4 text-white">We Offer Modern Web App Solutions</h2>
            <div class="row">
              <div class="col-12 col-xxl-8">
                <p class="fs-5 mb-5 text-white">Transform your online presence with our cutting-edge web solutions. Contact us today to get started on creating a modern, impactful website tailored to your needs</p>
              </div>
            </div>
            <div class="d-grid gap-2 d-sm-flex">
                <a href="/about" class="custom-button">Explore Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-0">
        <img class="img-fluid w-85 h-85 object-fit-cover" loading="lazy" src="../assets/BLogo.png" alt="We Offer Modern Web Solutions">
      </div>
    </div>
  </div>
</section>
</template>

<style>
.button-container {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically if height is set */
    height: 100vh; /* Full viewport height for vertical centering */
}

/* Custom button styles */
.custom-button {
    display: inline-block;
    padding: 10px 20px; /* Adjust padding to make the button bigger */
    font-size: 1.5 rem; /* Adjust font size for a bigger text */
    text-align: center;
    color: #fff; /* Text color */
    background-color: #000; /* Button background color */
    border: none;
    border-radius: 25px; /* Round corners */
    text-decoration: none; /* Remove underline */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.custom-button:hover {
    background-color: #ff0000; /* Darker background color on hover */
}
</style>