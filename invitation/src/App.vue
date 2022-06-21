<template>
  <nav id="navbar">
    <!-- top -->
    <section class="top-nav">
      <!-- logo -->
      <router-link class="logo-a" to="/" @click="isToggleActive = false">
        <svg version="1.1" class="logo" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">

<g>
	<g>
		<g>
			<path class="st0" d="M130.68,90.57l-15.64,24.26c-8.38,12.79-12.53,16.41-22.05,16.41c-10.17,0-17.1-7.4-17.1-17.12
				c0-8.4,5.43-14.19,16.27-20.24c10.23-5.77,13.31-9.04,13.31-14.99c0-4.16-2.62-9.04-8.88-9.04c-5.84,0-8.99,4.01-8.99,9.48
				c0,4.61,2.17,7.85,7.75,13.28l38.21,37.7h-8.34L90.37,95.61c-5.42-5.48-8.54-9.88-8.54-16.17c0-7.46,5.11-14.58,15-14.58
				c8.75,0,14.27,6.19,14.27,13.92c0,8.34-5.04,12.36-15.3,18.39c-10.31,6.14-13.63,10.24-13.63,16.6c0,6.68,4.75,11.78,11.33,11.78
				c8.22,0,11.59-4.88,17.16-13.59l13.56-21.38H130.68z"/>
		</g>
	</g>
	<g>
		<g>
			<g>
				<path class="st0" d="M47.79,30.86c-2.23-3-4.71-6.43-6.04-8.37l-0.11,0.08c1.73,3.97,4.66,12.24,6.68,18.29l-2.68,1.99
					c-4.23-3.2-11.94-9.15-15.23-12l-0.12,0.09c1.62,1.89,4.47,5.58,6.66,8.52l4.71,6.34l-2.82,2.1L26.13,30.8l4.57-3.39
					c4.67,3.3,11.17,8.27,13.56,10.39l0.03-0.02c-1.14-2.29-3.91-10.73-5.69-16.24L43,18.25l12.71,17.11l-2.95,2.19L47.79,30.86z"/>
				<path class="st0" d="M74.81,16.4c2.06,5.77,0.95,11.43-5.29,13.66c-6.03,2.16-10.42-1.52-12.49-7.33
					c-1.81-5.05-0.9-11.16,5.39-13.41C68.36,7.19,72.83,10.86,74.81,16.4z M60.73,21.4c1.52,4.25,4.44,6.99,7.93,5.74
					c3.75-1.34,4.05-5.04,2.48-9.42c-1.43-4-4.07-6.84-7.86-5.48C59.67,13.53,59.28,17.34,60.73,21.4z"/>
				<path class="st0" d="M82.57,4.28l7.31-0.52c6.15-0.44,10.2,3.06,10.66,9.45c0.5,6.92-2.93,11.37-9.38,11.83l-7.07,0.51
					L82.57,4.28z M87.69,22.28l3.19-0.23c4.18-0.3,6.1-3.44,5.74-8.49c-0.31-4.37-2.69-7.04-6.8-6.75L86.6,7.04L87.69,22.28z"/>
				<path class="st0" d="M121.83,17.82l-9.33-1.64l-1.12,6.34l10.28,1.81l-1,2.99l-13.47-2.37l3.7-20.99l13.39,2.36l-0.55,3.09
					L114,7.68l-0.95,5.4l9.33,1.64L121.83,17.82z"/>
				<path class="st0" d="M133.14,22.11l-3.64,8.36l-3.43-1.49l8.51-19.55l7.68,3.35c3.64,1.59,5.45,4.51,3.97,7.92
					c-1.18,2.72-3.25,3.33-5.12,3.21c1.68,1.59,1.77,3.48,0.68,5.99l-0.2,0.45c-0.76,1.76-1.41,3.46-1.71,4.66l-3.38-1.47
					c0.07-0.93,0.64-2.45,1.63-4.73l0.2-0.47c1.05-2.42,0.55-3.7-2.26-4.92L133.14,22.11z M134.34,19.34l3.22,1.4
					c2.14,0.93,4.04,1.07,5.06-1.3c0.83-1.91-0.17-3.3-2.04-4.12l-3.78-1.65L134.34,19.34z"/>
				<path class="st0" d="M145.04,38l13.22-16.71l3.84,3.04c-2.91,15.19-3.36,17.49-3.69,18.48l0.04,0.03
					c1.47-2.2,3.6-4.94,5.75-7.66l4.47-5.66l2.74,2.17L158.2,48.4l-3.65-2.89c3.3-16.52,3.7-18.21,3.93-19.09l-0.02-0.02
					c-1.56,2.23-3.82,5.09-6.18,8.08l-4.49,5.68L145.04,38z"/>
			</g>
		</g>
		<g>
			<g>
				<path class="st0" d="M47.72,171.23c-2.97,1.99-7.01,2.55-10.7-1.34c-4.56-4.8-2.72-9.89,1.77-14.15
					c4.26-4.04,9.96-5.33,14.24-0.81c3.8,4,2.86,8.01,0.58,10.55l-2.57-2.71c1.13-1.73,1.78-3.62-0.32-5.83
					c-2.62-2.77-6.29-1.16-9.23,1.63c-3.05,2.89-4.96,6.38-2.21,9.29c2.06,2.17,4.17,1.58,5.86,0.65L47.72,171.23z"/>
				<path class="st0" d="M62.24,163.51l3.28,1.92l-9.19,15.71l8.52,4.98l-1.96,2.47l-11.42-6.67L62.24,163.51z"/>
				<path class="st0" d="M78.21,188.22l-2.94,5.01l-3.65-0.86c1.16-1.85,10.13-17.1,11.43-19.21l4.76,1.12l1.98,22.37l-3.9-0.92
					l-0.5-5.82L78.21,188.22z M85.35,186.67c-0.38-4.94-0.65-8.18-0.67-10.13l-0.04-0.01c-1.09,2.23-2.84,5.22-4.97,8.8
					L85.35,186.67z"/>
				<path class="st0" d="M102.13,190.77c0.48,2.19,2.04,3.39,4.42,3.25c2.49-0.15,3.57-1.35,3.46-3.16
					c-0.12-2.08-1.34-2.87-4.73-3.65c-4.9-1.08-6.7-2.65-6.89-5.71c-0.23-3.75,2.62-6.09,6.68-6.33c4.97-0.3,7.24,2.25,7.68,5.51
					l-3.73,0.22c-0.4-1.76-1.41-2.96-3.82-2.82c-2.13,0.13-3.12,1.19-3.02,2.83c0.1,1.73,1.23,2.23,4.47,2.97
					c5.51,1.27,7.03,3.3,7.21,6.31c0.21,3.49-2,6.47-7.3,6.78c-4.61,0.27-7.65-1.9-8.18-5.99L102.13,190.77z"/>
				<path class="st0" d="M125.19,187.24c1.08,1.97,2.91,2.69,5.15,1.88c2.35-0.84,3.05-2.3,2.44-4c-0.7-1.96-2.09-2.38-5.56-2.18
					c-5,0.34-7.18-0.66-8.21-3.55c-1.26-3.54,0.82-6.59,4.65-7.96c4.7-1.68,7.59,0.13,8.92,3.14l-3.53,1.26
					c-0.87-1.58-2.18-2.45-4.46-1.63c-2.01,0.72-2.67,2.02-2.11,3.56c0.58,1.63,1.8,1.8,5.12,1.6c5.65-0.33,7.67,1.2,8.69,4.04
					c1.18,3.3-0.11,6.77-5.12,8.56c-4.35,1.56-7.89,0.32-9.53-3.46L125.19,187.24z"/>
				<path class="st0" d="M138.75,164.18l11.4,18.01l-3.21,2.03l-11.4-18.01L138.75,164.18z"/>
				<path class="st0" d="M166.19,159.17c2.11,2.89,2.84,6.9-0.89,10.75c-4.61,4.75-9.77,3.13-14.21-1.18
					c-4.22-4.09-5.74-9.73-1.41-14.2c3.84-3.96,7.88-3.19,10.52-1.02l-2.6,2.68c-1.77-1.06-3.69-1.62-5.81,0.56
					c-2.65,2.73-0.9,6.33,2.02,9.16c3.02,2.92,6.59,4.69,9.37,1.82c2.08-2.14,1.4-4.23,0.4-5.88L166.19,159.17z"/>
			</g>
		</g>
		<path class="st1" d="M14.45,65.16c0,0-18.38,37.27,3.24,75.1"/>
		<path class="st1" d="M184.87,65.14c0,0,19.08,36.91-1.82,75.15"/>
	</g>
	<g>
		<g>
			<path class="st0" d="M144.64,97.36v-0.09c0-1.34,0.65-3.2,3.43-5.44c1.67-1.37,2.32-1.92,2.32-3.24c0-1.06-0.57-2.01-1.92-2.01
				c-1.39,0-1.98,0.89-2.14,2.29h-1.6c0.11-1.93,1.18-3.65,3.8-3.65c2.41,0,3.57,1.53,3.57,3.34c0,1.71-0.8,2.6-2.91,4.27
				c-1.39,1.12-2.24,2.2-2.55,3.1h5.81l-0.23,1.42H144.64z"/>
			<path class="st0" d="M163.83,91.1c0,3.26-0.76,6.44-3.92,6.44c-3.27,0-3.95-3.26-3.95-6.39c0-3.13,1.07-5.92,3.98-5.92
				C162.92,85.23,163.83,87.9,163.83,91.1z M157.66,91.11c0,2.9,0.49,5.08,2.25,5.08c1.84,0,2.22-2.21,2.22-5.06
				c0-2.55-0.5-4.57-2.2-4.57C158.15,86.56,157.66,88.57,157.66,91.11z"/>
			<path class="st0" d="M144.78,118.86v-0.09c0-1.34,0.65-3.2,3.43-5.44c1.67-1.37,2.32-1.92,2.32-3.24c0-1.06-0.57-2.01-1.92-2.01
				c-1.39,0-1.98,0.89-2.14,2.29h-1.6c0.11-1.93,1.18-3.65,3.8-3.65c2.41,0,3.57,1.53,3.57,3.34c0,1.71-0.8,2.6-2.91,4.27
				c-1.39,1.12-2.24,2.2-2.55,3.1h5.81l-0.23,1.42H144.78z"/>
			<path class="st0" d="M156.1,118.86v-0.09c0-1.34,0.65-3.2,3.43-5.44c1.67-1.37,2.32-1.92,2.32-3.24c0-1.06-0.57-2.01-1.92-2.01
				c-1.39,0-1.98,0.89-2.14,2.29h-1.6c0.11-1.93,1.18-3.65,3.8-3.65c2.41,0,3.57,1.53,3.57,3.34c0,1.71-0.8,2.6-2.91,4.27
				c-1.39,1.12-2.24,2.2-2.55,3.1h5.81l-0.23,1.42H156.1z"/>
		</g>
	</g>
	<g>
		<g>
			<path class="st0" d="M46.62,91.25c0,3.22-0.75,6.36-3.88,6.36c-3.23,0-3.9-3.22-3.9-6.32c0-3.09,1.06-5.84,3.93-5.84
				C45.72,85.45,46.62,88.08,46.62,91.25z M40.52,91.26c0,2.86,0.49,5.02,2.23,5.02c1.82,0,2.19-2.18,2.19-5
				c0-2.51-0.49-4.51-2.17-4.51C41,86.76,40.52,88.74,40.52,91.26z"/>
			<path class="st0" d="M56.33,88.07c-0.21-0.72-0.66-1.32-1.75-1.32c-2.04,0-2.41,2.6-2.43,4.27c0.45-0.72,1.32-1.4,2.73-1.4
				c1.93,0,3.38,1.35,3.38,3.8c0,2.31-1.28,4.17-3.77,4.17c-3.1,0-3.98-2.39-3.98-5.71c0-3.3,0.93-6.44,4.16-6.44
				c2.15,0,3.07,1.27,3.29,2.63H56.33z M56.59,93.49c0-1.47-0.68-2.52-2.09-2.52c-1.6,0-2.25,1.09-2.25,2.32
				c0,1.46,0.53,2.98,2.22,2.98C55.81,96.28,56.59,95.3,56.59,93.49z"/>
			<path class="st0" d="M46.63,112.48c0,3.22-0.75,6.36-3.88,6.36c-3.23,0-3.9-3.22-3.9-6.32c0-3.09,1.06-5.84,3.93-5.84
				C45.73,106.68,46.63,109.31,46.63,112.48z M40.53,112.49c0,2.86,0.49,5.02,2.23,5.02c1.82,0,2.19-2.18,2.19-5
				c0-2.51-0.49-4.51-2.17-4.51C41.01,108,40.53,109.98,40.53,112.49z"/>
			<path class="st0" d="M50.6,109.88c0.2-1.61,1.19-3.2,3.63-3.2c2.41,0,3.47,1.4,3.47,3.04c0,1.39-0.87,2.16-1.58,2.44v0.04
				c1.04,0.35,2.06,1.22,2.06,2.96c0,1.82-1.1,3.67-4.01,3.67c-2.6,0-3.69-1.58-3.83-3.26h1.61c0.22,1.06,0.86,1.92,2.3,1.92
				c1.69,0,2.24-1.1,2.24-2.3c0-1.65-1.03-2.22-2.5-2.22h-0.81v-1.33h0.73c1.41,0,2.13-0.53,2.13-1.85c0-1.16-0.7-1.81-1.87-1.81
				c-1.21,0-1.84,0.68-2.05,1.89H50.6z"/>
		</g>
	</g>
</g>
        </svg>
      </router-link>
      <!-- toggle btn -->
      <div class="toggleBtn-nav" @click="navToggleOnOff" :class="{isToggleBtnActive: isToggleActive}">
        <span class="toggle-btn top"></span>
        <span class="toggle-btn middle"></span>
        <span class="toggle-btn bottom"></span>
      </div>
    </section>
  </nav>
   <!-- slide -->
  <aside class="slides-nav" :class="{slidesNavActive: isToggleActive}">
    <div class="slides-contents-wrap">
      <ul class="slides-content-right slides-content">
        <li class="slides-items" :class="{slidesItems: isToggleActive}" v-for="(navItemsRight, i) in navItemsRight" :key="i"> 
          <a class="slides-items-text" @click="isToggleActive = false"><router-link :to="navItemsRightLink[i]" > {{navItemsRight}}</router-link></a>
        </li>
      </ul>
      <ul class="slides-content-left slides-content">
        <li class="slides-items" :class="{slidesItems: isToggleActive}" v-for="(navItemsLeft, i) in navItemsLeft " :key="i">
        <!--  slides-items-left -->
          <a class="slides-items-text" @click="isToggleActive = false"><router-link :to="navItemsLeftLink[i]">{{ navItemsLeft }}</router-link></a>
        </li>
      </ul>
    </div>
  </aside>
  <!-- Router View -->
  <router-view />
  <footerDefault/>

</template>

<script>

import footerDefault from './components/footer.vue'

export default {
  name: 'App',
  components: {
    footerDefault,
  },
  data(){
    return{
      // Nav For
      navItemsRightLink : ['/Invite', '/Thanks', 'gift', 'design'],
      navItemsRight : ['모바일 초대장', '모바일 감사장', '답례품 제작', '디자인 신청'],
      navItemsLeftLink : ['request', 'qna', 'greeting', 'qr-code'],
      navItemsLeft : ['신청게시판', '문의하기', '인사말 찾기', 'QR코드 생성'],

      // Toggle
      isToggleActive: false,
      isToggleAnimationOut: true,
    }
  },
  methods:{
    navToggleOnOff(){
      if(!this.isToggleActive){
        this.isToggleActive = true;
        this.isToggleAnimationOut = false;
      }else{
        this.isToggleActive = false;
        this.isToggleAnimationOut = true;
      }
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

@for $i from 1 through 4 {
    .slidesItems:nth-child(#{$i}) {
      animation-delay: $i * 300ms;
    }
}
/* Navigation */
#navbar{
  /* max-width */
  max-width: 1500px;
  /* position */
  position: fixed;
  left: 50%;
  /* size */
  width: 90%;
  height: 100px;
  /* padding */
  padding-top: 20px;
  /* transform */
  transform: translateX(-50%);

  z-index: 1000;

    /* TOP */
  .top-nav{
    /* size */
    width: 100%;
    /* margin */
    margin: 0 auto;
    /* flex */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* z-index */
    z-index: 900;

    // Logo

    .logo-a{
      /* display */
      display: inline-block;
    }

    /* Logo SVG style */
    .logo-a {
        svg{
          /* size */
        width: 70px;
        /* margin */
        margin: 0 auto;
          /* SVG color */
        fill: var(--dark-main-color); 
        stroke: var(--dark-main-color);
        }
        .st1{fill:none;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}
    }
    
    .toggleBtn-nav{
      // padding
      padding: 5px;
      /* cursor */
      cursor: pointer;
      // flex
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      // transition
      transition: all 250ms ease-in-out;
        .toggle-btn{
        /* display */
        display: block;
        /* size */
        width: 26px;
        height: 2px;
        /* background */
        background-color: var(--dark-main-color);
        /* cursor */
        cursor: pointer;
        // transition
        transition: all 250ms ease-in-out;
      }
    }
    .isToggleBtnActive{
      // flex
      gap: 0px;
      .top{
        transform: rotate(46deg)translateY(1.5px);
      }
      .middle{
        // display
        display: none;
      }
      .bottom{
        transform: rotate(-46deg) translateY(-1.5px);
      }
    }
  }
}
/* SLIDE */
.slides-nav{
  /* position */
  position: fixed;
  /* size */
  width: 100%;
  height: 100vh;
  /* background */
  background-color: var(--dark-sub-color);
  // opacity
  opacity: 0;
  // visibilty
  visibility: hidden;
  // transition
  transition: all 300ms ease-in-out;
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index */
  z-index: 800;
  .slides-contents-wrap{
    /* font */
    font-family: var(--font-kr);
    /* flex */
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 40px;
    // Responsive
    @include ResponsiveMobile() {

      gap: 0;
    }
    .slides-content{
      .slidesItems{
        /* animation */
        animation-name: navItemsAnimation;
        animation-iteration-count: inherit;
        animation-fill-mode: forwards;
        animation-duration: 1s;
      }
      li{
          /* padding */
        padding: 20px;
          /* transform */
        transform: translateX(-50px);
        /* opacity */
        opacity: 0;   
        @include ResponsiveMobile() {
          /* padding */
          padding: 15px;
        }    
        a{
          /* position */
          position: relative;
          /* font */
          font-size: 1.3rem;
          font-weight: var(--weight-light);
          color: var(--light-main-color);
          /* transition */
          transition: all 250ms ease-in-out;
          // cursor
          cursor: pointer;
          @include ResponsiveMobile() {
            /* font */
            font-size: 1rem;
          }
          &:hover{
            /* font */
            color: var(--sub-color);
          }
          &::after{
            content: "";
            /* position */
            position: absolute;
            top: 15px;
            left: -26px;
            /* display */
            display: block;
            /* size */
            width: 20px;
            height: 1px;
            /* background */
            background-color: var(--dark-main-color);
            /* transition */
            transition: all 250ms ease-in-out;
          }
          &:hover::after{
            /* size */
            width: 115%;
          }
        }
      }
    }
  }
}
.slidesNavActive{
  // opacity
  opacity: 1;
  // visibilty
  visibility: visible;
}

// Nav animation
@keyframes navItemsAnimation {
  to{
     /* transform */
    transform: translateX(0px);
    /* opacity */
    opacity: 1;
  }
}

@keyframes navItemsAnimationOut {
  to{
     /* transform */
    transform: translateX(-50px);
    /* opacity */
    opacity: 0; 
  }
}
// Navigation End


</style>
