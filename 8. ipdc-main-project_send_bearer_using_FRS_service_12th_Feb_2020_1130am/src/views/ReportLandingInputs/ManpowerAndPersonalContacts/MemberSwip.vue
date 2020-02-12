<template>
  <v-ons-page>
    <v-card color="basil" class="v-card-basil">
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow style="">
        <v-tab class="my_tab" v-for="item in items" :key="item">{{ item }}</v-tab>
        <!-- <v-tab class="my_tab">Member</v-tab>
        <v-tab class="my_tab">AssociateMember</v-tab> -->
      </v-tabs>
      
      <v-tabs-items v-model="tab" style="position: absolute; top: 0; width: 100%;">
      <!-- <v-tabs-items v-model="tab" class="v-tab-items"> -->
        <v-tab-item v-for="item in items" :key="item" class="v-tab-item">
          <!-- <v-card color="basil" flat class="v-card" @click="cardClick" v-touch-swipe.right="handler" @swipeleft="doSomething"> -->
          <v-card color="basil" flat class="v-card">
            <!-- <v-card-text>{{ text }}</v-card-text> -->
            <!-- <SwipPage1/> -->
            <form action="" class="p-form">
              <div v-if="item == 'Member'"><Member @postCreated="addPost"/></div>
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
      member_post: [],
      watchClass: null,
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
    }
  },
  mounted() {
    this.item1Mutation();
    this.item2Mutation();
    this.item3Mutation();
    this.item4Mutation();


    /*console.log('Mutaion start');
    const targetNode1 = document.querySelectorAll('.my_tab')[0];
    const targetNode2 = document.querySelectorAll('.my_tab')[1];
    const targetNode3 = document.querySelectorAll('.my_tab')[2];
    const targetNode4 = document.querySelectorAll('.my_tab')[3];
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        // if (mutation.type === 'childList') {
        //     console.log('A child node has been added or removed.');
        // }
        // else if (mutation.type === 'attributes') {
        //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
        // }
        if(targetNode1.className == 'my_tab v-tab v-tab--active') {
          console.log('Member active');
        }
        if(targetNode2.className == 'my_tab v-tab v-tab--active') {
          console.log('AssociateMember active');
        }
        if(targetNode3.className == 'my_tab v-tab v-tab--active') {
          console.log('PreliminaryMember active');
        }
        if(targetNode4.className == 'my_tab v-tab v-tab--active') {
          console.log('SupporterMember active');
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode1, targetNode2, targetNode3, targetNode4, config);
    // observer.disconnect();
    console.log('Mutaion stop');*/



    /*console.log('mount start');
    console.log(document.querySelectorAll('.my_tab'));
    console.log('mount stop');
    if(document.querySelectorAll('.my_tab')[1].className === 'my_tab v-tab v-tab--active') {
      console.log('mount working');
    }*/
  },
  beforeDestroy() {
    // this.observer.disconnect();
  },
  created() {
    console.log('Member swip created() working');
    console.log(document.querySelectorAll('.my_tab').length);
  },
  watch: {
    /*watchClass2() {
      if(document.querySelectorAll('.my_tab')[1].className === 'my_tab v-tab v-tab--active') {
        console.log('mount working');
      }
    }*/
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