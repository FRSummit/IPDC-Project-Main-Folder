<template>
  <v-ons-page>
    <v-card color="basil">
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow style="">
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      
      <v-tabs-items v-model="tab" style="position: absolute; top: 0; width: 100%;">
      <!-- <v-tabs-items v-model="tab"> -->
        <v-tab-item v-for="item in items" :key="item">
          <!-- <v-card color="basil" flat class="v-card" @click="cardClick" v-touch-swipe.right="handler" @swipeleft="doSomething"> -->
          <v-card color="basil" flat class="v-card" v-touch-swipe.right="handler" @swipeleft="doSomething">
            <!-- <v-card-text>{{ text }}</v-card-text> -->
            <!-- <SwipPage1/> -->
            <form action="">
              <div v-if="item == 'Member'"><Member/></div>
              <div v-if="item == 'AssociteMember'"><AssociteMember/></div>
              <div v-if="item == 'PreliminaryMember'"><PreliminaryMember/></div>
              <div v-if="item == 'SupporterMember'"><SupporterMember/></div>
              <!-- <div class="member-swip-submit-btn-sec">
                <button type="submit" class="member-swip-submit-btn">Submit</button>
              </div> -->
            </form>
            <!-- <div>{{item}}</div> -->
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-ons-page>
</template>>

<script>
import Member from './Member.vue';
import AssociteMember from './AssociateMember.vue';
import PreliminaryMember from './PreliminaryMember.vue';
import SupporterMember from './SupporterMember.vue';

export default {
  components: {
    Member,
    AssociteMember,
    PreliminaryMember,
    SupporterMember
  },
  data () {
    return {
      tab: null,
      items: [
        'Member', 'AssociteMember', 'PreliminaryMember', 'SupporterMember'
      ],
      page: [
        {Member, AssociteMember, PreliminaryMember, SupporterMember}
      ],
      text: 'Swip pages goes from here',
    }
  },
  methods: {
    cardClick() {
      console.log('card click');
    },
    handler(obj) {
      console.log(obj.direction) // "right"
      console.log(obj.duration) // 78
      console.log(obj.distance.x) // 273
    },
    doSomething() {
      console.log('obj.direction') // "right"
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