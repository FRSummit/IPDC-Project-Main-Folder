<template>
  <v-ons-page style="position: absolute; top: -56px; z-index: 10;">
    <v-card color="basil" class="v-card-basil">
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow style="">
        <v-tab class="my_tab" v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      
      <v-tabs-items v-model="tab" style="position: absolute; top: 0; width: 100%;">
        <v-tab-item v-for="item in items" :key="item" class="v-tab-item">
          <v-card color="basil" flat class="v-card">
            <form action="" class="p-form">
              <div v-if="item == 'QardEHasana'"><QardEHasana/></div>
              <div v-if="item == 'PatientVisit'"><PatientVisit/></div>
              <div v-if="item == 'SocialVisit'"><SocialVisit/></div>
              <div v-if="item == 'Transport'"><Transport/></div>
              <div v-if="item == 'Shifting'"><Shifting/></div>
              <div v-if="item == 'Shopping'"><Shopping/></div>
              <div v-if="item == 'FoodDistribution'"><FoodDistribution/></div>
              <div v-if="item == 'CleanUpAustralia'"><CleanUpAustralia/></div>
              <div v-if="item == 'Other'"><Other/></div>
            </form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-ons-page>
</template>>

<script>
import QardEHasana from './QardEHasana.vue';
import PatientVisit from './PatientVisit.vue';
import SocialVisit from './SocialVisit.vue';
import Transport from './Transport.vue';
import Shifting from './Shifting.vue';
import Shopping from './Shopping.vue';
import FoodDistribution from './FoodDistribution.vue';
import CleanUpAustralia from './CleanUpAustralia.vue';
import Other from './Other.vue';

export default {
  components: {
    QardEHasana,
    PatientVisit,
    SocialVisit,
    Transport,
    Shifting,
    Shopping,
    FoodDistribution,
    CleanUpAustralia,
    Other
  },
  data () {
    return {
      member_post: [],
      watchClass: null,
      tab: null,
      items: [
        'QardEHasana', 'PatientVisit', 'SocialVisit', 'Transport', 'Shifting', 'Shopping', 'FoodDistribution', 'CleanUpAustralia', 'Other'
      ],
      page: [
        {QardEHasana, PatientVisit, SocialVisit, Transport, Shifting, Shopping, FoodDistribution, CleanUpAustralia, Other}
      ],
      text: 'Swip pages goes from here',
    }
  },
  methods: {
    cardClick() {
      console.log('card click');
    },
    handler(obj) {
    },
    doSomething() {
      console.log('obj.direction') // "right"
    },
    addPost(member_post) {
      console.log('working member post');
    },
    onClassChange(classAttrValue) {
    }
  }
}
</script>

<style scoped>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
.member-swip-submit-btn-sec {
  text-align: center;
}
.member-swip-submit-btn {
  background-color: #2196F3 !important;
  border: 1px solid #0071bb;
  height: 44px;
  min-width: 50%;
  margin: 0 auto;
  border-radius: 4px;
}
</style>