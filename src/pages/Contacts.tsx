import React, { FormEvent, useRef } from 'react';

function Contacts() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const needRef = useRef<HTMLTextAreaElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const requestBody = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      need: needRef.current?.value,
    }
    console.log(requestBody);
  }

  return <main className='flex flex-wrap max-w-screen-xl mx-auto pt-6'>
    <section className='flex-left'>
      <form className="w-full max-w-sm" onSubmit={submitHandler}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
              姓名
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:main" id="name" type="text" ref={nameRef} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
              電子郵件
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:main" id="email" type="text" ref={emailRef} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phone">
              電話
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:main" id="phone" type="text" ref={phoneRef} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="needs">
              需求
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:main" id="needs" rows={4} ref={needRef} />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button type='submit' className='bg-main font-semibold text-white p-2 rounded btn'>提交表單</button>
          </div>
        </div>
      </form>

    </section>
    <div className='test'></div>
    <section className='flex-right'>
      <div className="content">
        <h2 className='mb-3 font-bold text-xl'>電話:0989-315-415</h2>
        <h2 className='mb-3 font-bold text-xl'>Email:chienhowh@gmail.com</h2>
        <h2 className='mb-3 font-bold text-xl'>方便聯絡時間：0900-2100</h2>
      </div>
    </section>
  </main>;
}

export default Contacts;
