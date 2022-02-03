import React from 'react';
import Transition from './Transition';

function Home() {
  return <>
    {/* <Transition /> */}
    <main className='flex flex-wrap max-w-screen-xl mx-auto'>
      <img src="/assets/pics/OrangeBackground.svg" className='absolute -z-10 right-0 w-1/2 h-screen opacity-25 md:opacity-100' alt="" />
      <section className='flex-left pt-6'>
        <h1 className='text-6xl text-main pb-6'>Hi, I'm <br />Mike Huang.</h1>
        <p className='text-xl py-2'>我是一名前端工程師。</p>
        <p className='text-xl py-2'>目前於毅聲科技從事網頁開發，主要使用Angular，根據客戶操作流程，將傳統線下作業電子化，提升工作效率。</p>
        <p className='text-xl py-2'>具備Scss 規劃響應式網頁版型，串接RESTful API 經驗。</p>
        <p className='text-xl py-2'>近期也在練習使用React進行開發。</p>
        <p className='text-xl py-2'>喜歡寫程式完成功能時帶來的成就感，期望更加精進技術。</p>
        <p className='text-xl py-2'>平時喜歡健身、戶外活動。</p>
      </section>
      <section className='relative flex-right text-center'>
        <img src="/assets/pics/home_selfie.jpg" className='w-[170px] md:w-[20vw] max-w-[220px] static md:absolute top-[33vh] right-1/4' alt="background" />
      </section>
    </main>
  </>;
}

export default Home;
