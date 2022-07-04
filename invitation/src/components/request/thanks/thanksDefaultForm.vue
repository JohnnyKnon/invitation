<template>
    <section id="preview">
        <!-- header -->
        <header class="thanks-form-header">
            <h1>링크 미리보기 정보</h1>
            <span>※ 감사장 공유시 링크 미리보기에 표시되는 내용입니다.</span>
        </header>
        <!-- input -->
        <ul class="preview-input-wrapper">
            <li class="preview-input-items">
                <label for="request-title">감사장 타이틀</label>
                <input type="text" name="request-title-thanks" id="request-title" placeholder="감사장 타이틀을 입력해주세요.">
            </li>
            <li class="preview-input-items">
                <label for="request-from">보내는 이</label>
                <input type="text" name="request-from" id="request-from" placeholder="보내는 이를 입력해주세요.">
            </li>
        </ul>
    </section>
    <section id="comment">
         <!-- header -->
        <header class="thanks-form-header">
            <h1>문구 입력</h1>
            <span>※ 감사장 인사 문구를 입력해 주세요.</span>
        </header>
        <form class="comment-contents">
            <p>인사 문구<span class="required">*</span></p>
            <div class="textbox-wrapper">
                <QuillEditor :toolbar="editorTool" theme="snow" />
            </div>
        </form>
    </section>
</template>
<script>


import { QuillEditor } from '@vueup/vue-quill'

export default {
  name: 'ThanksDefault',
  components: {
     QuillEditor,

  },
  data(){
    return{
     editorTool: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'color': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        [{ 'align': [] }]

     ]
    }
  }
}
</script>

<style lang="scss">
@mixin BoxStyle {
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
}

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

#preview{
    @include BoxStyle();
    .preview-input-wrapper{
            // size
            width: 85%;
            // padding
            padding: 0;
            .preview-input-items{
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
#comment{
    @include BoxStyle();
    .comment-contents{
        // size
        width: 85%;
        // padding
        padding-bottom: 40px;
        // flex
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .textbox-wrapper{
            // size
            width: 90%;
        }
    }
}

</style>