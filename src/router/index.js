import Vue from "vue";
import Router from "vue-router";
import Apegg from "@/components/Apegg.vue";
import Solutions from "@/components/Solutions.vue";
import Mission from "@/components/Mission.vue";
import Engagement from "@/components/Engagement.vue";
import Vision from "@/components/Vision.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/apegg",
      name: "Apegg",
      component: Apegg,
    },
    {
      path: "/solutions",
      name: "Solutions",
      component: Solutions,
    },
    {
      path: "/mission",
      name: "Mission",
      component: Mission,
    },
    {
      path: "/engagement",
      name: "Engagement",
      component: Engagement,
    },
    {
      path: "/vision",
      name: "Vision",
      component: Vision,
    },
  ],
});
