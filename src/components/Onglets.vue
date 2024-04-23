<template>
    <div>
      <div v-for="tab in tabs" :key="tab.title" @click="changeTab(tab)">
        {{ tab.title }}
      </div>
      <component :is="currentTab" />
    </div>
  </template>
  
  <script>
  import Apegg from './Apegg.vue';
  import Solutions from './Solutions.vue';
  import Mission from './Mission.vue';
  import Engagement from './Engagement.vue';
  import Vision from './Vision.vue';
  
  export default {
    data() {
      return {
        tabs: [
          { title: 'Apegg', component: Apegg },
          { title: 'Solutions', component: Solutions },
          { title: 'Mission', component: Mission },
          { title: 'Engagement', component: Engagement },
          { title: 'Vision', component: Vision }
        ],
        currentTab: Apegg // Onglet actuellement sélectionné
      };
    },
    methods: {
      changeTab(tab) {
        this.currentTab = tab.component;
      }
    }
  }
  </script>
  