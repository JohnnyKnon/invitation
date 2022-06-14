<template>
<!-- Main -->
  <main id="main">
    <mainHome />
    <mainCategory/>
    <mainContact/>
  </main>
</template>

<script>

import mainHome from './mainHome.vue'
import mainCategory from './mainCategory.vue'
import mainContact from './mainContact.vue'

export default {
  name: 'MainPage',
  components: {
    mainHome,
    mainCategory,
    mainContact,
  },
}
</script>

<style lang="scss">
// Main
#main{
  // flex
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>