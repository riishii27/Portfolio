import React from 'react';

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500"> 
                About
            </p>
        </div>
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto maxime incidunt, esse numquam, ratione modi deserunt a voluptatem eligendi dolore accusamus doloribus neque, saepe exercitationem voluptas aliquid atque magnam!
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea reprehenderit at inventore minus facilis optio tempore eum ipsam, ratione veritatis, iusto culpa voluptates velit aliquid cupiditate eaque possimus totam nisi. Doloribus asperiores, placeat aspernatur excepturi, consectetur beatae sequi unde ratione fugiat mollitia veniam accusamus inventore ipsam doloremque explicabo. Suscipit, voluptatem.
        </p>
      </div>
    </div>
  );
};

export default About;
