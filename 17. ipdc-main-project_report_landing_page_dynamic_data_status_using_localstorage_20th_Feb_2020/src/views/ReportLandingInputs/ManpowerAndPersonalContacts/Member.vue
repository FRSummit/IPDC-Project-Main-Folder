<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left">
            <router-link to='/planandreports/report_landing_page'>
              <ons-back-button>Reports</ons-back-button>
            </router-link>
          </div>
          Member
        </v-subheader>
        <v-row class="form-row">
          <div>{{ msg }}</div>
          <v-col cols="12" class="col-field">
            <input name="lastPeriod" v-model="lastPeriod" label="Last Period" placeholder="Last Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="target" v-model="target" label="Target" placeholder="Target" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="actual" v-model="actual" label="Actual" placeholder="Actual" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="increased" v-model="increased" label="Increased" placeholder="Increased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="decreased" v-model="decreased" label="Decreased" placeholder="Decreased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="memberContact" v-model="memberContact" label="Member Contact" placeholder="Member Contact" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line/>
          </v-col>
          <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
        </v-row>
      </form>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'MemberForm',
  props: {
    msg: String,
  },
  data() {
    return {
      lastPeriod: "",
      target: "",
      actual: "",
      increased: "",
      decreased: "",
      memberContact: "",
      comment: "",
      testase: 'FRSummit'
    }
  },
  methods: {
    onSubmit() {
      const post = {
        member: {
          lastPeriod: this.lastPeriod,
          target: this.target,
          actual: this.actual,
          increased: this.increased,
          decreased: this.decreased,
          memberContact: this.memberContact,
          comment: this.comment
        }
      };
      console.log(post);
      this.$emit("memberPostCreated", this.member);
      // event.target.parentElement.parentElement.classList.add('hide');
      const tabClassList = (event.target.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement.parentElement.firstElementChild.querySelectorAll('.my_tab'));

      /*const windowClassList = (event.target.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.querySelectorAll('.v-window-item.v-tab-item'));*/
      /*const windowClassList = (event.target.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement.querySelectorAll('.v-window-item.v-tab-item'));
      console.log(windowClassList);
      for(let i=0; i<windowClassList.length; i++){
        console.log(windowClassList[i].className);
      }*/
      /*for(let i=0; i<tabClassList.length; i++) {
        if(tabClassList[i].className === 'my_tab v-tab v-tab--active') {
          tabClassList[i].className = 'my_tab v-tab';
          tabClassList[i+1].className = 'my_tab v-tab v-tab--active';
          break;
          // console.log(tabClassList[i].className);
          // console.log(tabClassList[i+1].className);
        } else {
          // console.log(i + ' : has not active class')
        }
      }*/
    },
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
/* Custom css */
input {
    margin: 0;
}
input::placeholder {
  color: #9e9e9e;
  /* opacity: 1; */
}
</style>