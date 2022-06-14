<template>
    <section id="contact">
        <!-- request pop up -->
        <section class="request-wrapper" :class="{requestBG : requestActive}">
            <!-- form -->
             <form class="request-form" :class="{requestForm : requestActive}">
                <!-- times -->
                <i class="fas fa-times"></i>
                <!-- if request to comment v-if="requestItemVind === 'delete'"   v-else-if="requestItemVind === 'comment'" v-else-if="requestItemVind === 'qna'"-->
                <section id="request-delete" >

                </section>
                <section id="notOpen"></section>
                <section id="request-qna" >
                </section>
            </form>
        </section>
        <section class="contact-wrapper">
            <section class="contact-content">
                <header id="contact-header"><h1>Contact</h1></header>
                <div class="contact-items">
                    <section class="contact-icons">
                        <!-- request -->
                        <section class="icon-style" data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" >
                            <i class="fas fa-clipboard-list"></i>
                        </section>
                        <!-- comment -->
                        <section class="icon-style" data-aos="flip-left" data-aos-delay="350" data-aos-duration="2000" >
                            <i class="fas fa-comment"></i>
                        </section>
                        <!-- qna -->
                        <section class="icon-style" data-aos="flip-left" data-aos-delay="650" data-aos-duration="2000" >
                            <i class="fas fa-headset"></i>
                        </section>
                    </section>
                    <section class="contact-item-style">
                       <div class="contact-item-contents-wrapper" v-for="(contactItemsTitle, i) in contactItemsTitle " :key="i" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000">
                            <h2 class="contact-item-title"> {{ contactItemsTitle }}</h2>
                            <a :href="contactBtnLink[i]">{{ contactBtnName[i] }}</a>
                            <button @click="requestEventHandler(contactBtnLink[i])" :id="'request'+ i">{{ contactRequestBtnName[i] }}</button>
                       </div>
                    </section>
                </div>
            </section>
        </section>
    </section>
</template>

<script>
export default {
  name: 'mainContact',
  components: {
  },

  data(){
    return{
        contactItemsTitle : ['신청 확인', '인사말 찾기', '문의하기'],
        contactBtnLink : ['신청', '인사말', '문의하기'],
        contactBtnName : ['확인하기', '추천목록 가기', '문의내역 가기' ],
        contactRequestBtnName : ['신청 취소하기', '추천 받기', '문의작성' ],
        requestActive : false,
        requestItemVind : '',
    }
  },
   methods:{
       requestEventHandler(i){
           if(i === "신청"){
               this.requestItemVind = 'delete';
               this.requestActive = true;
           } else if(i === "인사말"){
               this.requestItemVind = 'notOpen';
               this.requestActive = true;
           } else if (i === "문의하기"){
               this.requestItemVind = 'qna';
               this.requestActive = true;
           } else{
               this.requestItemVind = '';
               this.requestActive = false;
           }
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
    // request wrapper
    // .request-wrapper{
    //     // position
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     // size
    //     width: 100%;
    //     height: 100%;
    //     // background
    //     background-color: rgba(0, 0, 0, 0.454);
    //     // opacity
    //     opacity: 1;
    //     // visible
    //     visibility: visible;
    //     // z-index
    //     z-index: 1000;
    //     // flex
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     // form
    //     .request-form{
    //         // position
    //         position: relative;
    //         // size
    //         width: 800px;
    //         height: 800px;
    //         // background
    //         background-color: #fff;
    //         // border
    //         border-radius: 30px;
    //         // times
    //         i{
    //             // font
    //             font-size: 2rem;
    //             // position
    //             position: absolute;
    //             top: 30px;
    //             right: 35px;
    //             // cursor
    //             cursor: pointer;
    //         }
    //     }

    // }
    // contact wrapper
    .contact-wrapper{
         // max-size
        max-width: 1200px;
        // size
        width: 95%;
        // margin
        margin: 0 auto;
        // padding
        padding: 70px 0;
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
            // items
            .contact-items{
                 // size
                width: 100%;
                // padding
                padding-top: 20px;
                padding-bottom: 50px;
                // flex
                display: flex;
                flex-direction: column;
                align-items: center;
                // icons
                .contact-icons{
                     // size
                    width: 100%;
                    // flex
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    // icon style
                    .icon-style{
                        // size
                        width: 150px;
                        // flex
                        display: flex;
                        justify-content: center;
                        @include ResponsiveMobile() {
                            // size
                            width: 100px;
                        }
                        i{
                            // font
                            font-size: 5rem;
                            color: var(--sub-color);
                            @include ResponsiveMobile() {
                                // font
                                font-size: 3rem;
                            }
                        }
                    }
                }
                // contact item style
                .contact-item-style{
                    // size
                    width: 100%;
                     // flex
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    @include ResponsiveMobile() {
                        // flex
                        flex-direction: column;   
                    }
                    // item contents wrapper
                    .contact-item-contents-wrapper{
                        // font
                        font-family: var(--font-kr);
                        // size
                        width: 150px;
                        // padding
                        padding-top: 10px;
                        // flex
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        @include ResponsiveMobile() {
                             // size
                            width: 90%;
                            // padding
                            padding: 30px 0;
                            // margin
                            margin-top: 40px;
                            // border
                            border-top: 1px solid var(--dark-sub-color);
                            // flex
                            align-items: flex-start;
                        }
                        // title
                        .contact-item-title{
                            // font
                            font-size: 1.4rem;
                            font-weight: var(--weight-regular);
                            color: var(--dark-sub-color);
                        }
                        // link button
                        a{
                            // display
                            display: block;
                            // font
                            font-size: 1rem;
                            color: var(--main-color);
                            // text
                            text-align: center;
                            // size
                            width: 100%;
                            // padding
                            padding: 4px 0;
                            // margin
                            margin-bottom: 10px;
                            // background
                            background-color: var(--dark-sub-color);
                            // border
                            border: 2px solid var(--dark-sub-color);
                            border-radius: 20px;
                            // transition
                            transition: all 250ms ease-in-out;
                            &:hover{
                                // font
                                color: var(--dark-sub-color);
                                // background
                                background-color: var(--light-sub-color);
                            }
                        }
                        button{
                            // font
                            font-size: 1rem;
                            color: var(--dark-sub-color);
                            // size
                            width: 100%;
                             // padding
                            padding: 7px 0;
                            // background
                            background-color: var(--main-color);
                            // border
                            border: 0;
                            border-radius: 20px;
                            // cursor
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}

</style>