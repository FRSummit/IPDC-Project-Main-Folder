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
              <div v-if="item == 'BookSale'"><BookSale/></div>
              <div v-if="item == 'BookDistribution'"><BookDistribution/></div>
              <div v-if="item == 'EmailDistribution'"><EmailDistribution/></div>
              <div v-if="item == 'IPDCLeafletDistribution'"><IPDCLeafletDistribution/></div>
              <div v-if="item == 'OtherSale'"><OtherSale/></div>
              <div v-if="item == 'OtherDistribution'"><OtherDistribution/></div>
            </form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-ons-page>
</template>>

<script>
import BookSale from './BookSale.vue';
import BookDistribution from './BookDistribution.vue';
import EmailDistribution from './EmailDistribution.vue';
import IPDCLeafletDistribution from './IPDCLeafletDistribution.vue';
import OtherSale from './OtherSale.vue';
import OtherDistribution from './OtherDistribution.vue';

export default {
  components: {
    BookSale,
    BookDistribution,
    EmailDistribution,
    IPDCLeafletDistribution,
    OtherSale,
    OtherDistribution
  },
  data () {
    return {
      member_post: [],
      watchClass: null,
      tab: null,
      items: [
        'BookSale', 'BookDistribution', 'EmailDistribution', 'IPDCLeafletDistribution', 'OtherSale', 'OtherDistribution'
      ],
      page: [
        {BookSale, BookDistribution, EmailDistribution, IPDCLeafletDistribution, OtherSale, OtherDistribution}
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