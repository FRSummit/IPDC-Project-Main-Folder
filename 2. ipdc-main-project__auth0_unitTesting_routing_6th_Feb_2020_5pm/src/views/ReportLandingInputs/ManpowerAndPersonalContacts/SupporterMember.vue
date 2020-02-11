<template>
  <v-container class="head-container">
    <div class="content-div">
      <v-form class="form-cls">
        <v-subheader class="content-header">Supporter Member</v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field">
            <input label="Last Period" placeholder="Last Period" single-line/>
          </v-col>

          <v-col cols="12" class="col-field">
            <input label="Target" placeholder="Target" single-line/>
          </v-col>

          <v-col cols="12" class="col-field">
            <input label="Actual" placeholder="Actual" single-line/>
          </v-col>

          <v-col cols="12" class="col-field">
            <input label="Increased" placeholder="Increased" single-line/>
          </v-col>

          <v-col cols="12" class="col-field">
            <input label="Decreased" placeholder="Decreased" single-line/>
          </v-col>

          <v-col cols="12" class="col-field">
            <input label="Member Contact" placeholder="Member Contact" single-line/>
          </v-col>

          <v-col cols="12" class="col-field">
            <input label="Comment" placeholder="Comment" single-line/>
          </v-col>

          <v-btn large color="blue white--text" class="save-btn">Save</v-btn>

        </v-row>
      </v-form>
    </div>
  </v-container>
</template>


<style scoped>
.head-container {
  background-color: #efeff4 !important;
  padding: 0;
}

.content-div {
  padding: 0;
}

.content-header {
  font-size: 18px;
  color: #8a8484;
}

.form-cls{
  background-color: #ffffff;
  padding: 0px;
}

.form-row{
  /* margin-top: -7px; */
  margin: 0;
}

.col-field{
  padding: 0px 12px;
}

.v-text-field{
  padding: 0;
  margin-bottom: -20px;
}

.save-btn{
  margin: 10px auto;
  padding: 0 40px !important;
}
/* Custom css */
input {
    margin: 0;
}
input::placeholder {
  color: #9e9e9e;
  /* opacity: 1; */
}
</style>