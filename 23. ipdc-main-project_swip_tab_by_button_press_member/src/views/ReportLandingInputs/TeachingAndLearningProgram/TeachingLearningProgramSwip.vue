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
              <div v-if="item == 'Program'"><Program/></div>
              <div v-if="item == 'GroupStudyDiscussion'"><GroupStudyDiscussion/></div>
              <div v-if="item == 'StudyCircleAM'"><StudyCircleAM/></div>
              <div v-if="item == 'StudyCircle'"><StudyCircle/></div>
              <div v-if="item == 'PracticeDarsSpeech'"><PracticeDarsSpeech/></div>
              <div v-if="item == 'StateLearningCamp'"><StateLearningCamp/></div>
              <div v-if="item == 'QuranStudy'"><QuranStudy/></div>
              <div v-if="item == 'HadithStudy'"><HadithStudy/></div>
              <div v-if="item == 'QuranClass'"><QuranClass/></div>
              <div v-if="item == 'WeekendIslamicSchool'"><WeekendIslamicSchool/></div>
              <div v-if="item == 'MemorizingAyat'"><MemorizingAyat/></div>
              <div v-if="item == 'MemorizingHadith'"><MemorizingHadith/></div>
              <div v-if="item == 'MemorizingDoa'"><MemorizingDoa/></div>
              <div v-if="item == 'StateLearningSession'"><StateLearningSession/></div>
              <div v-if="item == 'StateQiyamulLali'"><StateQiyamulLali/></div>
              <div v-if="item == 'Other'"><Other/></div>
            </form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-ons-page>
</template>>

<script>
import GroupStudyDiscussion from './GroupStudyDiscussion.vue';
import StudyCircleAM from './StudyCircleAM.vue';
import StudyCircle from './StudyCircle.vue';
import PracticeDarsSpeech from './PracticeDarsSpeech.vue';
import StateLearningCamp from './StateLearningCamp.vue';
import QuranStudy from './QuranStudy.vue';
import HadithStudy from './HadithStudy.vue';
import QuranClass from './QuranClass.vue';
import WeekendIslamicSchool from './WeekendIslamicSchool.vue';
import MemorizingAyat from './MemorizingAyat.vue';
import MemorizingHadith from './MemorizingHadith.vue';
import MemorizingDoa from './MemorizingDoa.vue';
import StateLearningSession from './StateLearningSession.vue';
import StateQiyamulLali from './StateQiyamulLail.vue';
import Other from './Other.vue';

export default {
  components: {
    GroupStudyDiscussion,
    StudyCircleAM,
    StudyCircle,
    PracticeDarsSpeech,
    StateLearningCamp,
    QuranStudy,
    HadithStudy,
    QuranClass,
    WeekendIslamicSchool,
    MemorizingAyat,
    MemorizingHadith,
    MemorizingDoa,
    StateLearningSession,
    StateQiyamulLali,
    Other
  },
  data () {
    return {
      member_post: [],
      watchClass: null,
      tab: null,
      items: [
        'GroupStudyDiscussion', 'StudyCircleAM', 'StudyCircle', 'PracticeDarsSpeech', 'StateLearningCamp', 'QuranStudy', 'HadithStudy', 'QuranClass', 'WeekendIslamicSchool', 'MemorizingAyat', 'MemorizingHadith', 'MemorizingDoa', 'StateLearningSession', 'StateQiyamulLali', 'Other'
      ],
      page: [
        {GroupStudyDiscussion, StudyCircleAM, StudyCircle, PracticeDarsSpeech, StateLearningCamp, QuranStudy, HadithStudy, QuranClass, WeekendIslamicSchool, MemorizingAyat, MemorizingHadith, MemorizingDoa, StateLearningSession, StateQiyamulLali, Other}
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