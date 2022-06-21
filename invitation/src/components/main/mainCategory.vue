<template>
    <section id="category">
        <!-- images wrapper -->
        <atropos class="my-atropos">
            <figure class="category-images-wrapper">
                <!-- wedding image one -->
                <img class="wedding-img-one" src="../../../public/images/wedding/wedding-image02.png" alt="웨딩이미지1" 
                    data-aos="fade-up" 
                    data-aos-delay="50"
                    data-aos-duration="2000" />
                <!-- wedding image two --> 
                <atropos class="my-atropos" data-atropos-offset="-5"> 
                    <img class="wedding-img-two" src="../../../public/images/wedding/wedding-img01.png" alt="웨딩이미지2"
                     data-aos="fade-down" 
                    data-aos-delay="500"
                    data-aos-duration="2000" 
                    />
                </atropos>
            </figure>
        </atropos>
        <section class="category-contents">
           <header id="category-header"><h1>Category</h1></header>
           <div class="category-contents-item-wrapper">
               <section class="category-item" id="invite" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" >
                   <!-- icon -->
                   <i class="icon fas fa-envelope"></i>
                   <!-- title -->
                    <h2 class="category-item-title">{{ categoryName[0] }}</h2>
                   <!-- link -->
                   <router-link :to="categoryLink[0]"  class="category-item-link"><i class="arrow fas fa-angle-right"></i>바로가기</router-link>
               </section>
               <section class="category-item" id="thanks" data-aos="fade-right" data-aos-delay="450" data-aos-duration="2000">
                   <!-- icon -->
                   <i class="icon fas fa-heart"></i>
                   <!-- title -->
                    <h2 class="category-item-title">{{ categoryName[1] }}</h2>
                   <!-- link -->
                   <router-link :to="categoryLink[1]"  class="category-item-link"><i class="arrow fas fa-angle-right"></i>바로가기</router-link>
               </section>
               <section class="category-item" id="bugo" data-aos="fade-right" data-aos-delay="850" data-aos-duration="2000">
                   <!-- icon -->
                   <i class="icon fas fa-ribbon"></i>
                   <!-- title -->
                    <h2 class="category-item-title">{{ categoryName[2] }}</h2>
                   <!-- link -->
                   <router-link :to="categoryLink[2]"  class="category-item-link"><i class="arrow fas fa-angle-right"></i>바로가기</router-link>
               </section>
           </div>
           <div class="qr-wrapper">
               <a href="#" class="qr">QR코드 생성</a>
           </div>
        </section>
    </section>
</template>

<script>

  // import Atropos component
  import Atropos from 'atropos/vue';

export default {
  name: 'mainCategory',
  components: {
      Atropos,
  },
  data(){
    return{
        categoryName:['모바일 초대장', '모바일 감사장', '모바일 부고장'],
        categoryLink:['/Invite', '/Thanks', '/Bugo']
    }
  },
  methods:{
  }
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
  @media screen and (max-width: 1200px) {
    @content;
  }
}

@for $i from 1 through 4 {
    .slidesItems:nth-child(#{$i}) {
      animation-delay: $i * 300ms;
    }
}
    #category{
        // max-size
        max-width: 1200px;
        // size
        width: 95%;
        // margin
        margin: 0 auto;
        // padding
        padding: 30px 0 100px 0;
        // overflow
        overflow-x:hidden;
        // images
        .category-images-wrapper{
            // position
            position: relative;
            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
            .my-atropos{
                height: 550px;
                @include ResponsiveMobile() {
                    height: 420px;
                }
            }
            // Image
            .wedding-img-one{
              // position
            position: absolute;
            // size
            width: 280px;
            @include ResponsiveMobile() {
                // size
                width: 200px;
            }
            }
            .wedding-img-two{
                // position
                position: relative;
                top: 100px;
                // size
                width: 650px;
            @include ResponsiveMobile() {
                // size
                width: 450px;
            }
            }
        }
        
        .atropos-shadow{
            background: transparent;
        }
        // Category Contents
        .category-contents{
            // size
            width: 100%;
            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
            // Category header
            #category-header{
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
            // Category items
            .category-contents-item-wrapper{
                // size
                width: 100%;
                // flex
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;
                gap: 20px;
                @include ResponsiveTablet() {
                    justify-content: center;
                    gap: 30px;
                }
                // Category item
                .category-item{
                    // size
                    width: 350px;
                    height: 250px;
                    // flex
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    // border
                    border: 1px solid var(--light-grey-color);
                    // box shadow
                    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.21);
                    @include ResponsiveMobile(){
                        // size
                        width: 80%;
                        height: 230px;
                    }
                    // icon
                    .icon{
                        // font
                        font-size: 3.5rem;
                        color: var(--dark-sub-color);
                    }
                    // title
                    .category-item-title{
                        // font
                        font-family: var(--font-kr);
                        font-size: 1.4rem;
                        font-weight: var(--weight-regular);
                        color: var(--dark-sub-color);
                    }
                    // link
                    .category-item-link{
                        // display
                        display: block;
                        // font
                        font-family: var(--font-kr);
                        font-weight: var(--weight-light);
                        color: var(--sub-color);
                        // position
                        position: relative;
                        // transition
                        transition: all 250ms ease-in-out;
                        &:hover{
                            // font
                            color: var(--dark-sub-color);
                            &::after{
                                // border
                                border: 1px solid var(--dark-sub-color);
                                border-right: 1px solid #fff;
                            }

                            .arrow{
                                 /* animation */
                                animation-name: moreArrowAnimation;
                                animation-iteration-count: infinite;
                                animation-timing-function: linear;
                                animation-duration: 1s;
                            }
                        }
                        &::after{
                            // content
                            content: "";
                            // position
                            position: absolute;
                            top: -3px;
                            left: -12px;
                            // size
                            width: 30px;
                            height: 30px;
                            // border
                            border: 1px solid var(--sub-color);
                            border-right: 1px solid #fff;
                            border-radius: 50%;
                            // transition
                            transition: all 250ms ease-in-out;
                            // z-index
                            z-index: -1;
                        }
                    }
                }
            } 
            // QR code link
            .qr-wrapper{
                // padding
                padding-top: 20px;
                .qr{
                    // font
                    font-family: var(--font-kr);
                    color: var(--sub-color);
                    // border
                    border-bottom: 1px solid var(--sub-color);
                    // padding
                    padding-bottom: 2px;
                }
            }
        }
    }

    @keyframes moreArrowAnimation {
        0%{
            transform: translateX(0px);
            opacity: 100%;
        }
        50%{
            transform: translateX(-5px);
            opacity: 50%;
        }
        100%{
            transform: translateX(0px);
            opacity: 100%;
        }
    }

</style>