<template>
  <ChildrenSectionMobile v-if="isMobile" />
  <ChildrenSectionDesktop v-else />
</template>
<script>
  import ChildrenSectionMobile from "@/components/children's-section/ChildrenSectionMobile.vue";
  import ChildrenSectionDesktop from "@/components/children's-section/ChildrenSectionDesktop.vue";

  export default {
    name: 'ChildrenSection',
    components: {ChildrenSectionDesktop, ChildrenSectionMobile},
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    }
  };
</script>
