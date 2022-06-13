<template>
    <section id="contact">
        <!-- BG color -->
        <div class="contact-wrapper">
            <section class="contact-content">
                <header id="contact-header"><h1>Contact</h1></header>
                <div class="contact-items">
                    <section class="contact-icons">

                    </section>
                    <section class="contact-item-style" v-for="(contactItemsTitle, i) in contactItemsTitle " :key="i">
                        <h2 class="contact-item-title"> {{ contactItemsTitle }}</h2>
                        <a :href="contactBtnLink[i]">바로가기</a>
                        <button @click="requestEventHandler(contactBtnLink[i])" :id="'request'+ i">신청하기</button>
                    </section>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
  name: 'mainContact',
  components: {
  },

  data(){
    return{
        contactItemsTitle : ['신청 게시판', '인사말 찾기', '문의하기'],
        contactBtnLink : ['신청', '인사말', '문의하기'],
        requestActive : false,
        requestItemVind : '',
    }
  },
   methods:{
       requestEventHandler(i){
           console.log(i);
       }
   },

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


//  Contact
#contact{
    // size
    width: 100%;
    height: 100%;
    // background
    background-color: var(--light-sub-color);
    // contact wrapper
    .contact-wrapper{
         // max-size
        max-width: 1200px;
        // size
        width: 95%;
        // margin
        margin: 0 auto;
        // padding
        padding: 60px 0;
        .contact-content{
            // size
            width: 100%;
            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
            // contact header
            #contact-header{
            // font
                font-family: var(--font-eng);
                // size
                width: 90%;
                @include ResponsiveMobile() {
                    // size
                    width: 70%;
                }
                // h1
                h1{
                    // position
                    position: relative;
                    // font
                    font-weight: var(--weight-regular);
                    font-size: 2.2rem;
                    color: var(--dark-main-color);
                    &::after{
                        // content
                        content: "";
                        // position
                        position: absolute;
                        top: 50%;
                        left: -35px;
                        // szie
                        width: 30px;
                        height: 1px;
                        // background
                        background-color: var(--dark-sub-color);
                    }
                }
            }
        }
    }
}

</style>