import React from 'react';
import classes from './Info.module.scss';
;

function Info() {
  return <main className='flex flex-wrap max-w-screen-xl mx-auto pt-6'>
    <section className='flex-left w-full'>
      <table className={classes['info-table']}>
        <tbody>
          <tr >
            <td>經歷</td>
            <td>毅聲科技</td>
          </tr>
          <tr>
            <td>開發經驗</td>
            <td>
              <ul>
                <li>工作上以Angular進行開發，主要負責將客戶傳統線下流程電子化，優化畫面，提升用戶體驗。</li>
                <li>個人專案建立一個電影查詢網站，使用者可以自訂清單，並把喜歡的電影蒐藏。</li>
                <li>目前自學React中，目標開發一款APP。</li></ul>
            </td>
          </tr>
          <tr>
            <td>技術</td>
            <td>
              <img src="./assets/icons/icons8-html-5.svg" alt="" />
              <img src="./assets/icons/icons8-css3.svg" alt="" />
              <img src="./assets/icons/icons8-javascript.svg" alt="" />
              <img className='w-[48px]' src="./assets/icons/1145600_angular_coding_development_front-end_javascript_icon.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>學歷</td>
            <td>國立成功大學 機械工程學系</td>
          </tr>
          <tr>
            <td>語言</td>
            <td>中文、英文、韓文</td>
          </tr>
          <tr>
            <td>興趣</td>
            <td>健身、健行</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section className='flex-right relative flex items-center justify-center'>
      <div className='relative text-center'>
        <img className='w-4/5' src="./assets/pics/info_selfie.jpg" alt="self" />
        <div className="hidden md:block bg-main h-full w-4/5 absolute top-10 left-16 -z-10"></div>
      </div>
    </section>
  </main>;
}

export default Info;
