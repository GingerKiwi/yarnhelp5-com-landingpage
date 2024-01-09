// import Head from "next/head";
import Image from 'next/image'
import coverImageDesktop from '../assets/Image_LandingPage_Balls_Desktop_425x832.png'

export default function Home() {
  return (
    // <>
    
    
    <main className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 h-screen'>
      
      <Image src={ coverImageDesktop } alt="balls of yarn"  className='object-scale-down h-screen bg-contain md:object-right md:col-start-3 row-span-3'/>
      

      <div className='lg:col-span-2 lg:col-start-1 row-span-3 pl-24'>
        <h1 className="text-blackBrown font-code text-6xl">Yarn Help!</h1>
        <h2 className='text-darkPlum font-extrabold font-sans text-4xl'>Coming Soon</h2>
        <div className='lg:col-span-2 lg:col-start-1 row-span-2'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit mollitia eaque commodi velit odio voluptatem porro necessitatibus consequatur nam, doloribus maiores officia explicabo ipsa eius quam, hic provident tempore optio.</p>
          <ul>
            <li>Item 1 link</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
     </div>
    </main>
    // </>
  )
}

