import React from 'react';

function MovieList() {
    return <main className='p-6 mx-auto max-w-screen-xl flex flex-wrap'>
        <div className='lg:flex-[1_1_400px]'>
            <section className='flex items-center'>
                <h2 className='font-bold text-xl mr-4'>電影清單</h2>
                <button className='bg-main font-semibold text-white p-2 rounded btn mr-4'>
                    <a href="https://movielist-silk.vercel.app/" target="_blank" rel="noopener noreferrer">網站連結</a>
                </button>
                <button className='bg-main font-semibold text-white p-2 rounded btn mr-4'>
                    <a href="https://github.com/chienhowh/movielist#readme" target="_blank" rel="noopener noreferrer">Github</a>
                </button>
            </section>
            <section className='mb-2'>
                <h3 className='text-lg'>功能</h3>
                <p>使用者可以在此網站查找喜歡的電影，點擊觀看電影詳細資訊</p>
                <p>加入會員後，還可自訂清單，分類儲存喜愛的電影</p>
            </section>
            <section className='mb-2'>
                <h3 className='text-lg'>技術</h3>
                <ul>
                    <li>前端使用Angular，完成SPA，搭配Bootstrap, NG-ZORRO建立樣式、RWD</li>
                    <li>後端搭配Firebase，儲存使用者清單</li>
                    <li>電影資訊連接TMDB API</li>
                </ul>
            </section>
        </div>
        <div className='lg:flex-[3_1_576px]'>
            <section className='mb-2'>
                <h3 className='lg:hidden text-lg'>預覽</h3>
                <img src="./assets/pics/movielist_home.png" alt="" />
            </section>
        </div>
    </main>;
}

export default MovieList;
