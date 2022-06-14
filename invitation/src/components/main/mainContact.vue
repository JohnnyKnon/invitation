<template>
    <section id="contact">
        <!-- request pop up -->
        <section class="request-wrapper" :class="{requestBGActive : requestActive}">
            <!-- form -->
             <form class="request-form" :class="{requestFormActive : requestActive}">
                <!-- times -->
                <i class="fas fa-times" @click="requestActive = false"></i>
                <!-- if request to comment v-if="requestItemVind === 'delete'"   v-else-if="requestItemVind === 'comment'" v-else-if="requestItemVind === 'qna'"-->
                <section id="request-delete" v-if="requestItemVind === 'delete'">
                    <!-- items title -->
                    <header class="request-items-title"><h1>신청 취소하기</h1></header>
                    <!-- items contents -->
                    <section class="agree delete-agree">
                        <label for="delete-agree-text">개인정보 수집 및 이용 동의</label>
                        <textarea name="deleteAgree" id="delete-agree-text" readonly>
1. 수집하는 개인정보 항목
본 사이트는 온라인 상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.
수집항목: 이름, 전화번호, 이메일
개인정보 수집방법: 신청취소하기

2. 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 사용합니다.
신청취소하기

3. 개인정보의 보유 및 이용기간
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                        </textarea>
                        <div class="agree-check">
                            <input type="checkbox" name="deleteCheck" id="delete-check" class="checkbox" required>
                            <label for="delete-check">동의하시겠습니까?</label>
                        </div>
                    </section>
                    <section class="request-total-style delete-select-type">
                        <label for="delete-type">신청종류</label>
                        <select name="deleteType" id="delete-type" @change="deleteInfoHandler($event)">
                            <option value="모바일 초대장">모바일 초대장</option>
                            <option value="모바일 청첩장">모바일 감사장</option>
                            <option value="모바일 부고장">모바일 부고장</option>
                            <option value="답례품">답례품</option>
                            <option value="디자인 신청">디자인 신청</option>
                        </select>
                        <span class="highlight">{{ deleteInfo }}</span>
                    </section>
                    <section class="request-total-style request-delete-name">
                        <label for="delete-name">신청자명</label>
                        <input type="text" name="deleteName" id="delete-name" placeholder="예) 홍길동" maxlength="15" required>
                    </section>
                    <section class="request-total-style request-delete-tel">
                        <label for="delete-tel">신청자 전화번호</label>
                        <input type="tel" name="deleteTel" id="delete-tel" placeholder="예) 01012341234" required>
                    </section>
                    <section class="request-total-style request-delete-email">
                        <label for="delete-email">신청자 이메일</label>
                        <input type="email" name="deleteEmail" id="delete-email" placeholder="예) example@mossic.com" required>
                        <span class="highlight">* 취소여부는 해당 이메일로 전송됩니다. *</span>
                    </section>
                    <section class="request-submit">
                        <input type="submit" value="신청취소하기">
                    </section>
                </section>
                <!-- Not open -->
                <section id="notOpen" v-else-if="requestItemVind === 'notOpen'">
                    <h1>Sorry..</h1>
                    <h2>해당 서비스는 아직 지원하지 않습니다.</h2>
                </section>
                <!-- qna -->
                <section id="request-qna"  v-else-if="requestItemVind === 'qna'">
                    <header class="request-items-title"><h1>문의하기</h1></header>
                    <section class="agree qna-agree">
                        <label for="qna-agree-text">개인정보 수집 및 이용 동의</label>
                        <textarea name="qnaAgree" id="qna-agree-text" readonly>
1. 수집하는 개인정보 항목
본 사이트는 온라인 상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.
수집항목: 이름, 전화번호, 이메일
개인정보 수집방법: 문의하기

2. 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 사용합니다.
문의하기

3. 개인정보의 보유 및 이용기간
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                        </textarea>
                        <div class="agree-check">
                            <input type="checkbox" name="qnaCheck" id="qna-check" class="checkbox" required>
                            <label for="qna-check">동의하시겠습니까?</label>
                        </div>
                        <section class="request-total-style request-delete-name">
                            <label for="qna-name">신청자명</label>
                            <input type="text" name="qnaName" id="qna-name" placeholder="예) 홍길동" maxlength="15" required>
                        </section>
                        <section class="request-total-style request-qna-tel">
                            <label for="qna-tel">신청자 전화번호</label>
                            <input type="tel" name="qnaTel" id="qna-tel" placeholder="예) 01012341234" required>
                        </section>
                        <section class="request-total-style request-delete-email">
                            <label for="qna-email">신청자 이메일</label>
                            <input type="email" name="qnaEmail" id="qna-email" placeholder="예) example@mossic.com" required>
                        </section>
                        <section class="request-total-style request-qna-content">
                            <label for="qna-contents">내용</label>
                            <textarea name="qnaContents" id="qna-contents"></textarea>
                            <span class="highlight">* 문의는 해당 이메일로도 전송됩니다. *</span>
                        </section>
                        <section class="request-submit">
                            <input type="submit" value="문의하기">
                        </section>
                    </section>
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
        // contact BTN
        contactItemsTitle : ['신청 확인', '인사말 찾기', '문의하기'],
        contactBtnLink : ['신청', '인사말', '문의하기'],
        contactBtnName : ['확인하기', '추천목록 가기', '문의내역 가기' ],
        contactRequestBtnName : ['신청 취소하기', '추천 받기', '문의작성' ],
        // Request
        requestActive : false,
        requestItemVind : '',
        // deleteSelectInfo
        deleteInfo: '',
    }
  },
   methods:{
    // Request Change contents handler
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
       },
    // select reaction
    deleteInfoHandler(event){
        if(event.target.value === '답례품'){
            this.deleteInfo = '* 답례품은 제작의뢰일 로부터 3일이내에만 취소 가능합니다. *';
        } else if (event.target.value === '디자인 신청'){
            this.deleteInfo = '* 디자인 신청은 제작의뢰일 로부터 3일이내에만 취소 가능합니다. *';
        }else{
            this.deleteInfo = '';
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
     //  active
    .requestBGActive {
        // opacity
        opacity: 1!important;
        visibility: visible!important;
        // form acitve
        .requestFormActive{
            // transform
            transform: translateY(0)!important;
        }
    }
    // request wrapper
    .request-wrapper{
        // position
        position: fixed;
        top: 0;
        left: 0;
        // size
        width: 100%;
        height: 100%;
        // background
        background-color: rgba(0, 0, 0, 0.585);
        // opacity
        opacity: 0;
        visibility: hidden;
        // z-index
        z-index: 1000;
        // flex
        display: flex;
        justify-content: center;
        align-items: center;
        // transition
        transition: all 350ms ease-in-out;
        // form
        .request-form{
            // position
            position: relative;
            // size
            width: 700px;
            height: 840px;
            // background
            background-color: #fff;
            // border
            border-radius: 30px;
            // transform
            transform: translateY(-2000px);
            // transition
            transition: all 350ms ease-in-out;
            @include ResponsiveMobile(){
                // size
                width: 90%;
                height: 650px;
            }
            // times
            i{
                // font
                font-size: 2rem;
                // position
                position: absolute;
                top: 30px;
                right: 35px;
                z-index: 1000;
                // cursor
                cursor: pointer;
            }
             // title
            .request-items-title{
                    // font
                    font-family: var(--font-kr);
                    font-size: 1.8rem;
                    color: var(--dark-sub-color);
                    @include ResponsiveMobile(){
                        // font
                        font-size: 1.5rem;
                    }
            }
            // total style input & select
            .request-total-style{
                    // size
                    width: 100%;
                    // flex
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    // highlight
                    .highlight{
                        // font
                        font-size: 0.8rem;
                        color: var(--dark-main-color);
                        @include ResponsiveMobile(){
                            // font
                            font-size: 0.7rem;
                        }
                    }
                    // label
                    label{
                        // font
                        font-size: 1rem;
                        color: var(--dark-sub-color);
                    }
                    // input
                    input{
                        // size
                        width: 95%;
                        height: 30px;
                        // border
                        border: 1px solid var(--dark-sub-color);
                        border-radius: 5px;
                        @include ResponsiveMobile(){
                            // size
                            height: 20px;
                        }
                    }
                    select{
                        // size
                        width: 97%;
                        height: 30px;
                    }
            }
            .request-submit{
                    // margin
                    margin-top: 10px;
                    // size
                    width: 100%;
                    // submit
                    input{
                        // font
                        font-family: var(--font-kr);
                        font-size: 0.9rem;
                        color: #fff;
                        // size
                        width: 100%;
                        height: 35px;
                        // background
                        background-color: var(--dark-sub-color);
                        // border
                        border: 0;
                        border-radius: 20px;
                        // cursor
                        cursor: pointer;
                    }
                }
             // agree
            .agree{
                // size
                width: 100%;
                // flex
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                @include ResponsiveMobile(){
                    // margin
                    margin-top: -20px;
                }
                // label
                label{
                    @include ResponsiveMobile(){
                        // font
                        font-size: 0.8rem;
                    }
                }
                // textarea
                textarea{
                    // font
                    font-family: var(--font-kr);
                    font-size: 0.8rem;
                    color: rgb(92, 92, 92);
                    // text
                    text-align: justify;
                    // size
                    width: 100%;
                    height: 100px;
                    // resize
                    resize: none;
                    @include ResponsiveMobile(){
                        height: 60px;
                    }
                }
                .agree-check{
                        // flex
                        display: flex;
                        align-items:center;
                    label{
                         // font
                        font-size: 0.8rem;
                        // cursor
                        cursor: pointer;
                    }
                }
            }
            // Delete Request
            #request-delete{
                // font
                font-family: var(--font-kr);
                // position
                position: absolute;
                top: 20%;
                left: 50%;
                // size
                width: 90%;
                height: 90%;
                // transfrom
                transform: translate(-50%, -20%);
                // flex
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                @include ResponsiveMobile(){
                    // flex
                    gap: 10px;
                }
            }
            // NotOpen
            #notOpen{
                // position
                position: absolute;
                top: 50%;
                left: 50%;
                // size
                width: 90%;
                height: 90%;
                // transform
                transform: translate(-50%, -50%);
                // flex
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h1{
                    // font
                    font-family: var(--font-eng);
                    font-size: 3rem;
                    color: var(--dark-sub-color);
                }
                h2{
                    // font
                    font-family: var(--font-kr);
                    font-size: 1rem;
                    color: var(--sub-color);
                    // margin
                    margin-top: -40px ;
                }
            }
            // qna
            #request-qna{
                // font
                font-family: var(--font-kr);
                // position
                position: absolute;
                top: 20%;
                left: 50%;
                // size
                width: 90%;
                height: 90%;
                // transfrom
                transform: translate(-50%, -20%);
                // flex
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                // qna-contents
                .request-qna-content{
                    // size
                    width: 100%;
                    // textarea
                    textarea{
                        // size
                        width: 95%;
                        @include ResponsiveMobile(){
                            // height
                            height: 60px;
                        }
                    }
                }
            }
        }
    }
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