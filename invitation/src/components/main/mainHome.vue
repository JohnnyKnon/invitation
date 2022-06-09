<template>
    <section id="home">
       <header class="home-header">
            <div class="home-img">
        </div>
        <h1>최고의 순간,당신을 <span>초대</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 합니다.</h1>
       </header>
    </section>
</template>

<script>
export default {
    name: 'mainHomeSection',
    components: {

    },
    data(){
        return{

        }
    }
}

</script>

<style lang="scss">
    @mixin ResponsiveMobile {
    @media screen and (max-width: 767px) {
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
    #home{
        // size
        width: 100%;
        height: 100%;
        // padding
        padding: 115px 0;
        // background
        background-color: var(--dark-sub-color);
        // home header
        .home-header{
            // position
            position: relative;
            // flex
            display: flex;
            justify-content: center;
            align-items: center;
            // Image
            .home-img{
            // size
            width: 100%;
            height: 450px;
            // background
            background: url(../../../public/images/wedding/wedding-bg.jpg)no-repeat center/cover;
            // filter
            filter: brightness(70%);
            }
            // Title
            h1{
                // position
                position: absolute;
                // font
                font-family: var(--font-kr);
                font-weight: var(--weight-light);
                font-size: 2rem;
                color: var(--light-sub-color);
                @include ResponsiveMobile() {
                    /* font */
                    font-size: 1.4rem;
                }
                span{
                    // position
                    position: absolute;
                    // font
                    font-weight: var(--weight-bold);
                    color: var(--highlight-color);
                    // animation 
                    animation-name: spanBounceAnimation;
                    animation-iteration-count: infinite;
                    animation-fill-mode: backwards;
                    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    animation-duration: 3s;
                }
            }
        }
        
    }
    @keyframes spanBounceAnimation {
        0%{
            transform: translateY(0);
        }
        50%{
        /* transform */
            transform: translateY(-10px);
        }
        100%{
            transform: translateY(0);
        }
    }

</style>