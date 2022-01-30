import React from 'react';
import classes from './Info.module.scss';
;

function Info() {
  return <main className='flex flex-wrap'>
    <section className='flex-left w-full'>
      <table className={classes['info-table']}>
        <tr >
          <td>經歷</td>
          <td>毅聲科技</td>
        </tr>
        <tr>
          <td>開發經驗</td>
          <td>毅聲科技</td>
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
      </table>
    </section>
    <section className='flex-right relative flex items-center justify-center'>
      <img className='w-1/3' src="./assets/pics/269453.jpg" alt="self" />
      <div className="hidden md:block bg-main h-full w-1/3 absolute top-10 left-16 -z-10"></div>
    </section>
  </main>;
}

export default Info;
