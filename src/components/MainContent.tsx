// components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main className="font-sans p-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-orange-300 text-white text-center p-16 rounded-lg mb-8">
        <div>
          <h1 className='text-4xl m-'>Wariha Khan</h1>
          <p className='text-lg mt-4'>Crafting beautiful, responsive, and performant websites tailored to your needs.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center my-8">
        <h2 className='text-4xl my-9'>About Me</h2>
        <p className='max-w-3xl mx-auto text-lg text-gray-600'>
          I am a passionate web developer with experience in creating functional and visually appealing
          websites. My goal is to bring your ideas to life in the digital world with clean, modern designs.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-16 text-center ">
        <h2 className='text-4xl mb-8'>What I Offer</h2>

        <div className="flex flex-wrap justify-center gap-8 ">
          <div className="hover:translate-y-[-5] hover:shadow-lg bg-white p-8 rounded-lg shadow-md w-full max-w-xs text-center opacity-1 transition-transform duration-500 ease-in-out">
            <h3 className='text-3xl mb-10'>Responsive Design</h3>
            <p>Beautiful designs that adapt perfectly to any screen size.</p>
          </div>
          <div className="hover:translate-y-[-5] hover:shadow-lg bg-white p-8 rounded-lg shadow-md w-full max-w-xs text-center opacity-1 transition-transform duration-500 ease-in-out ">
            <h3 className='text-3xl mb-10'>Fast Performance</h3>
            <p>Optimized code to ensure fast loading and a smooth experience.</p>
          </div>
          <div className="hover:translate-y-[-5] hover:shadow-lg bg-white p-8 rounded-lg shadow-md w-full max-w-xs text-center opacity-1 transition-transform duration-500 ease-in-out ">
            <h3 className='text-3xl mb-10'>SEO Friendly</h3>
            <p>Ensuring your site is visible to search engines from day one.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;