<template>
  <v-ons-page>
    <v-card color="basil" class="v-card-basil">
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow style="">
        <v-tab class="my_tab" v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      
      <v-tabs-items v-model="tab" style="position: absolute; top: 0; width: 100%;">
        <v-tab-item v-for="item in items" :key="item" class="v-tab-item">
          <v-card color="basil" flat class="v-card">
            <form action="" class="p-form">
              <div v-if="item == 'BookLibrary'"><BookLibrary/></div>
              <div v-if="item == 'OtherLibrary'"><OtherLibrary/></div>
              <div v-if="item == 'VHSLibrary'"><VHSLibrary/></div>
            </form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-ons-page>
</template>>

<script>
import BookLibrary from './BookLibrary.vue';
import OtherLibrary from './OtherLibrary.vue';
import VHSLibrary from './VHSLibrary.vue';

export default {
  components: {
    BookLibrary,
    OtherLibrary,
    VHSLibrary
  },
  data () {
    return {
      member_post: [],
      watchClass: null,
      tab: null,
      items: [
        'BookLibrary', 'OtherLibrary', 'VHSLibrary'
      ],
      page: [
        {BookLibrary, OtherLibrary, VHSLibrary}
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