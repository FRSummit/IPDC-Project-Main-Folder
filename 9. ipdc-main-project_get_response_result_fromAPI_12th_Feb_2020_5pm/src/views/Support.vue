<template>
  <v-ons-page>
    <div class="support">
      <!-- <h1>Support</h1> -->
      <div class="img-section">
        <img src="../assets/images/s5_logo_inverted.png" alt="s5_logo_inverted">
        <p>Welcome to IPDC Reporting System</p>
      </div>
      <div class="support-dtl-sec">
        <p class="support-text">IPDC Reporting System Support: </p>
        <a class="ipdc-link" href="itssupport@ipdc.org.au">itssupport@ipdc.org.au</a>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.support {
  text-align: center;
  margin-top: 5px;
}
.support-text {
  font-size: 26px;
  margin: 0px;
}
.img-section {
  background: #F8F9FB;
}
img {
  width: 100%;
}
.support-dtl-sec {
  text-align: center;
}
.ipdc-link {
  color: blue;
  font-size: 20px;
}
</style>