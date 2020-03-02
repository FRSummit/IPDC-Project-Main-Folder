<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
              <ons-back-button>Reports</ons-back-button>
          </div>
          Quran Study
        </v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field">
            <input name="actual"  label="Actual" placeholder="Actual" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="averageAttended" label="Average Attended" placeholder="Average Attended" single-line/>
          </v-col>
          <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
        </v-row>
      </form>
      <Navbar2/>
    </div>
  </v-container>
</template>

<script>
import Navbar2 from '../../../components/NavBar2'

export default {
  name: 'MemberForm',
  components: {
    Navbar2,
  },
  props: {

  },
  data() {
    return {
      actual: "",
      averageAttended: "",
    }
  },
  methods: {
    onSubmit() {
      const post = {
        quran_study: {
          actual: this.actual,
          averageAttended: this.averageAttended
        }
      };
      console.log(post);
    },
    backButton() {
      console.log('working')
      this.$router.push('/planandreports/report_landing_page')
    }
  },
  created() {

  }
}
</script>


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
.v-subheader {
  padding: 0;
}

.v-subheader {
  padding: 0;
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
  background-color: #b2beb5;
  color: #fff;
  border-radius: 8px;
  width: 140px;
  height: 35px;
  text-align: center;
  display: block;
  margin-bottom: 12px;
  padding: 0 !important;
  margin: 12px auto 8px;
}

.page-title{
  padding-left: 12px;
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