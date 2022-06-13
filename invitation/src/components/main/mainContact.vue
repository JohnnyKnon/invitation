<template>
    <section id="contact"></section>
</template>
<script>
export default {
  name: 'mainContact',
  components: {
  },
  data(){
    return{}
  },
   methods:{},
   
}
</script>

<style lang="scss">
@mixin ResponsiveMobile {
  @media screen and (max-width: 768px) {
    @content;
  }
}

@mixin ResponsiveSmallTablet {
  @media screen and (max-width: 820px) {
    @content;
  }
}

@mixin ResponsiveTablet {
  @media screen and (max-width: 912px) {
    @content;
  }
}
</style>