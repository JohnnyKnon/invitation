<template>
    <main id="Thanksmain">
      <header class="request-header"><h1>모바일 감사장<br/><span class="small">(Mobile Thanks Cards)</span></h1></header>
      <!-- UserInfo -->
      <userInfoForm/>
      <!-- Preview -->
      <ThanksDefault/>
      <!-- photo -->
      <photo/>
    </main>
</template>
<script>

import userInfoForm from "../userInfoForm.vue"
import ThanksDefault from "./thanksDefaultForm.vue"
import photo from "../photoForm.vue"

export default {
  name: 'ThanksRequestPhoto',
  components: {
    userInfoForm,
    ThanksDefault,
    photo
  },
}
</script>

<style lang="scss">
.thanks-form-header{
      // size
      width: 85%;
      // margin
      margin-bottom: 10px;
      // flex
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      // border
      border-bottom: 1px solid var(--dark-grey-color);
      h1{
        // font
        font-size: 1.5rem;
        color: var(--dark-main-color);
      }
      span{
        // font
        font-size: 0.75rem;
      }
    }


  #Thanksmain{
    // flex
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 20px;
    // padding
    padding-bottom: 50px;
    .required{
    // font
    font-size: 1.2rem;
    color: var(--highlight-color);
  }
    // header
    .request-header{
      // text
      text-align: center;
      // padding
      padding: 80px 0 20px 0;
      //h1
      h1{
        // font
        font-size: 2rem;
        color: var(--dark-sub-color);
        .small{
          // font
          font-weight: var(--weight-regular);
          font-size: 1.4rem;
        }
      }
    }
  }

</style>