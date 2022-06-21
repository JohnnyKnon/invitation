<template>
    <form id="userInfo">
        <!-- header -->
        <header class="userInfo-header">
            <h1>신청자 정보</h1>
            <span>※ 신청확인, 수정 및 비밀번호 찾기 등 에 사용됩니다.</span>
        </header>
        <!-- input -->
        <ul class="userInfo-input-wrapper">
            <li class="userInfo-info">
                <h3>*신청자명은 신청자 및 상호명을 입력해주세요.</h3>
            </li>
            <li class="userInfo-input-items">
                <label for="request-name">신청자명<span class="required">*</span></label>
                <input type="text" name="request-name-thanks" id="request-name" placeholder="이름 혹은 상호를 입력해주세요." required>
            </li>
            <li class="userInfo-input-items">
                <label for="request-pass">비밀번호<span class="required">*</span></label>
                <input type="password" name="request-pass-thanks" id="request-pass" placeholder="비밀번호를 입력해주세요." required>
            </li>
            <li class="userInfo-input-items">
                <label for="request-email">이메일 주소<span class="required">*</span></label>
                <input type="email" name="request-email-thanks" id="request-email" placeholder="ex) example@mossic.com" required>
            </li>
        </ul>
    </form>
</template>
<script>


export default {
  name: 'userInfoForm',
  components: {

  },
}
</script>

<style lang="scss">


    #userInfo{
        // font
        font-family: var(--font-kr);
        // max-size
        max-width: 1200px;
        // size
        width: 90%;
        // padding
        padding: 40px 0;
        // margin
        margin: 0px auto;
        // background
        background-color: var(--light-grey-color);

        // flex
        display: flex;
        flex-direction: column;
        align-items: center;
        .userInfo-header{
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
        .userInfo-input-wrapper{
            // size
            width: 85%;
            // padding
            padding: 0;
            .userInfo-info{
                h3{
                    // font
                    font-weight: var(--weight-regular);
                    font-size: 0.8rem;
                    color: var(--dark-grey-color);
                }
            }
            .userInfo-input-items{
                // flex
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
                // padding
                padding-bottom: 20px;
                // label
                label{
                    color: var(--dark-sub-color);
                    .required{
                        // font
                        font-size: 1.2rem;
                        color: var(--highlight-color);
                    }
                }
                input{
                    // size
                    width: 80%;
                    height: 35px;
                    // padding
                    padding-left: 10px;
                    // border
                    border: 2px solid #fff;
                    border-radius: 15px;
                }
            }
        }
    }
</style>