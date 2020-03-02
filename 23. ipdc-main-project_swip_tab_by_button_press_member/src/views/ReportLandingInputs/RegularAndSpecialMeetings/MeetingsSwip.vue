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
              <div v-if="item == 'WorkerMeetings'"><WorkerMeetings/></div>
              <div v-if="item == 'CMSMeetings'"><CMSMeetings/></div>
              <div v-if="item == 'SMMeetings'"><SMMeetings/></div>
              <div v-if="item == 'MemberMeetings'"><MemberMeetings/></div>
              <div v-if="item == 'DawahMeetings'"><DawahMeetings/></div>
              <div v-if="item == 'StateLeaderMeetings'"><StateLeaderMeetings/></div>
              <div v-if="item == 'StateOuting'"><StateOuting/></div>
              <div v-if="item == 'IftarGatherings'"><IftarGatherings/></div>
              <div v-if="item == 'LearningMeetings'"><LearningMeetings/></div>
              <div v-if="item == 'SocialDawahPrograms'"><SocialDawahPrograms/></div>
              <div v-if="item == 'DawahGroups'"><DawahGroups/></div>
              <div v-if="item == 'NextGMeetings'"><NextGMeetings/></div>
              <div v-if="item == 'TafsirMeetings'"><TafsirMeetings/></div>
              <div v-if="item == 'UnitMeetings'"><UnitMeetings/></div>
              <div v-if="item == 'BBQMeetings'"><BBQMeetings/></div>
              <div v-if="item == 'GatheringMeetings'"><GatheringMeetings/></div>
              <div v-if="item == 'FamilyVisitMeetings'"><FamilyVisitMeetings/></div>
              <div v-if="item == 'EidReunionMeetings'"><EidReunionMeetings/></div>
              <div v-if="item == 'OtherMeetings'"><OtherMeetings/></div>
            </form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-ons-page>
</template>>

<script>
import WorkerMeetings from './WorkerMeetings.vue';
import CMSMeetings from './CMSMeetings.vue';
import SMMeetings from './SMMeetings.vue';
import MemberMeetings from './MemberMeetings.vue';
import DawahMeetings from './DawahMeetings.vue';
import StateLeaderMeetings from './StateLeaderMeetings.vue';
import StateOuting from './StateOuting.vue';
import IftarGatherings from './IftarGatherings.vue';
import LearningMeetings from './LearningMeetings.vue';
import SocialDawahPrograms from './SocialDawahPrograms.vue';
import DawahGroups from './DawahGroups.vue';
import NextGMeetings from './NextGMeetings.vue';
import TafsirMeetings from './TafsirMeetings.vue';
import UnitMeetings from './UnitMeetings.vue';
import BBQMeetings from './BBQMeetings.vue';
import GatheringMeetings from './GatheringMeetings.vue';
import FamilyVisitMeetings from './FamilyVisitMeetings.vue';
import EidReunionMeetings from './EidReunionMeetings.vue';
import OtherMeetings from './OtherMeetings.vue';

export default {
  components: {
    WorkerMeetings,
    CMSMeetings,
    SMMeetings,
    MemberMeetings,
    DawahMeetings,
    StateLeaderMeetings,
    StateOuting,
    IftarGatherings,
    LearningMeetings,
    SocialDawahPrograms,
    DawahGroups,
    NextGMeetings,
    TafsirMeetings,
    UnitMeetings,
    BBQMeetings,
    GatheringMeetings,
    FamilyVisitMeetings,
    EidReunionMeetings,
    OtherMeetings
  },
  data () {
    return {
      member_post: [],
      watchClass: null,
      tab: null,
      items: [
        'WorkerMeetings', 'CMSMeetings', 'SMMeetings', 'MemberMeetings', 'DawahMeetings', 'StateLeaderMeetings', 'StateOuting', 'IftarGatherings', 'LearningMeetings', 'SocialDawahPrograms', 'DawahGroups', 'NextGMeetings', 'TafsirMeetings', 'UnitMeetings', 'BBQMeetings', 'GatheringMeetings', 'FamilyVisitMeetings', 'EidReunionMeetings', 'OtherMeetings'
      ],
      page: [
        {WorkerMeetings, CMSMeetings, SMMeetings, MemberMeetings, DawahMeetings, StateLeaderMeetings, StateOuting, IftarGatherings, LearningMeetings, SocialDawahPrograms, DawahGroups, NextGMeetings, TafsirMeetings, UnitMeetings, BBQMeetings, GatheringMeetings, FamilyVisitMeetings, EidReunionMeetings, OtherMeetings}
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