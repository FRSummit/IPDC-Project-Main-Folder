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
              <div v-if="item == 'Member'"><Member @postCreated="addPost"/></div>
              <div v-if="item == 'AssociteMember'"><AssociteMember/></div>
              <div v-if="item == 'PreliminaryMember'"><PreliminaryMember/></div>
              <div v-if="item == 'SupporterMember'"><SupporterMember/></div>
            </form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    
    <!-- <div>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
        <v-tab v-for="item in items" :key="item" ripple> {{ item }}</v-tab>
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat>
            <v-card-text v-if="item == 'Page1'"><Member/></v-card-text>
            <v-card-text v-if="item == 'Page2'"><AssociteMember/></v-card-text>
            <v-card-text v-if="item == 'Page3'"><PreliminaryMember/></v-card-text>
            <v-card-text v-if="item == 'Page4'"><SupporterMember/></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <div class="text-xs-center mt-3">
        <v-btn @click="next">next tab</v-btn>
      </div>
    </div> -->

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
      member_post: [],
      watchClass: null,
      tab: null,
      items: [
        'Member', 'AssociteMember', 'PreliminaryMember', 'SupporterMember'
        // 'AssociteMember', 'PreliminaryMember', 'SupporterMember'
      ],
      page: [
        {Member, AssociteMember, PreliminaryMember, SupporterMember}
        // {AssociteMember, PreliminaryMember, SupporterMember}
      ],
      text: 'Swip pages goes from here',
        active: null,
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
    },
    addPost(member_post) {
      console.log('working member post');
    },
    onClassChange(classAttrValue) {
      const classList = classAttrValue.split(' ');
      if (classList.includes('v-tab--active')) {
        console.log('has fully-in-viewport');
      }
    },
    item1Mutation() {
      this.observer2 = new MutationObserver(mutations => {
        for (const m of mutations) {
          if(document.querySelectorAll('.my_tab')[0].classList.contains('v-tab--active')) {
            console.log('Member contains active');
          }
          console.log(document.querySelector('.member.save-btn'));
          // console.log(event.target);
        }
      });
      this.observer2.observe(document.querySelectorAll('.my_tab')[0],{
        attributes: true,
        attributeOldValue : true,
        attributeFilter: ['class'],
      });
    },
    item2Mutation() {
      this.observer2 = new MutationObserver(mutations => {
        for (const m of mutations) {
          if(document.querySelectorAll('.my_tab')[1].classList.contains('v-tab--active')) {
            console.log('AssociativeMember contains active');
          }
        }
      });
      this.observer2.observe(document.querySelectorAll('.my_tab')[1],{
        attributes: true,
        attributeOldValue : true,
        attributeFilter: ['class'],
      });
    },
    item3Mutation() {
      this.observer2 = new MutationObserver(mutations => {
        for (const m of mutations) {
          if(document.querySelectorAll('.my_tab')[2].classList.contains('v-tab--active')) {
            console.log('PreliminaryMember contains active');
          }
        }
      });
      this.observer2.observe(document.querySelectorAll('.my_tab')[2],{
        attributes: true,
        attributeOldValue : true,
        attributeFilter: ['class'],
      });
    },
    item4Mutation() {
      this.observer2 = new MutationObserver(mutations => {
        for (const m of mutations) {
          if(document.querySelectorAll('.my_tab')[3].classList.contains('v-tab--active')) {
            console.log('SupporterMember contains active');
          }
        }
      });
      this.observer2.observe(document.querySelectorAll('.my_tab')[3],{
        attributes: true,
        attributeOldValue : true,
        attributeFilter: ['class'],
      });
    },
    
    next () {
      const active = parseInt(this.active)
      if(active == 0) {
        this.active = 1
      } else if(active == 1) {
        this.active = 2
      } else if(active == 2) {
        this.active = 3
      }
      console.log('sending data');
    }
  },
  mounted() {
    // this.item1Mutation();
    this.item2Mutation();
    this.item3Mutation();
    this.item4Mutation();
  },
  beforeDestroy() {
  },
  created() {
    console.log('Member swip created() working');
    console.log(document.querySelectorAll('.my_tab').length);
  },
  watch: {
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