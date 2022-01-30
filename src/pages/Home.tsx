import React from 'react';
import Transition from './Transition';

function Home() {
  return <>
    {/* <Transition /> */}
    <main className='flex'>
      <img src="/assets/pics/OrangeBackground.svg" className='absolute -z-10 right-0 top-1/4 w-1/2 h-screen' alt="" />
      <section className='flex-left'>
        <h1 className='text-6xl text-main'>Hi, I'm <br />Mike Huang.</h1>
        <p className='text-2xl py-6'>我是一名前端工程師</p>
        <p className='text-2xl py-6'>主要從事網頁開發</p>
      </section>
      <section className='relative flex-right'>
        <img src="/assets/pics/269453.jpg" className='rounded-full w-[20vw] h-[20vw] absolute top-[45vh] right-1/4' alt="background" />
      </section>
    </main>
  </>;
}

export default Home;
