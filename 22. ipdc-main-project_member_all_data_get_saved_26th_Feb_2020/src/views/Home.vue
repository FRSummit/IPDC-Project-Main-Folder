<template>
    <div>
        <v-ons-page>
            <v-card color="basil" class="v-card-basil" style="height: 90%; box-shadow: none;">
            <v-tabs v-model="tab" background-color="transparent" color="basil" grow style="">
                <v-tab class="my_tab" v-for="item in items" :key="item">{{ item }}</v-tab>
            </v-tabs>
            
            <v-tabs-items v-model="tab" style="position: absolute; top: 0; width: 100%; height: 100%; background: #ECEFF1;">
            <!-- <v-tabs-items v-model="tab" class="v-tab-items" style="height: 100%;"> -->
                <v-tab-item v-for="item in items" :key="item" class="v-tab-item">
                <v-card color="basil" flat class="v-card">
                    <!-- <div>{{ text }}</div> -->
                    <form action="" class="p-form" style="background: #ECEFF1;">
                        <div v-if="item == 'Login'"><Login/></div>
                        <div v-if="item == 'Dashboard'"><Dashboard/></div>
                    </form>
                </v-card>
                </v-tab-item>
            </v-tabs-items>
            </v-card>
        </v-ons-page>
    </div>
</template>

<script>
import Login from './Login.vue';
import Dashboard from './Dashboard.vue';

export default {
  components: {
    Login,
    Dashboard,
  },
  data () {
    return {
      tab: null,
      items: [
        'Login', 'Dashboard',
      ],
      page: [
        {Login, Dashboard}
      ],
      text: 'Swip pages goes from here',
    }
  },
}
</script>