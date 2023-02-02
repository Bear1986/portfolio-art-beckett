import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {DiDart} from 'react-icons/di'
import {SiFlutter} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import BlackWhite from './BlackWhite'
import orffProject from '../public/images/orffProject.png'
import comingSoon from '../public/images/comingSoon.png'
export default function Work() {
    return (<>
        <div className="bg-black">
            <h1 className="text-4xl text-[#D94D29] text-center py-8">My Work</h1>
        </div>
        <div className=" h-[2px] bg-[#D94D29]" />
        <div className=" bg-white flex justify-center" >
        <div className="p-8 text-lg border-2 border-[#D94D29] drop-shadow-2xl w-[95%] m-8">
        <h1 className="text-center text-2xl">My main Tech Stack</h1>
        <div className='flex justify-center'>
        <ImHtmlFive className='text-[#D94D29] text-5xl m-4'/>
        <SiCss3 className='text-[#D94D29] text-5xl m-4'/>
        <SiTailwindcss className='text-[#D94D29] text-5xl m-4'/>
        <SiJavascript className='text-[#D94D29] text-5xl m-4'/>
        <SiReact className='text-[#D94D29] text-5xl m-4'/>
        </div>
        <h1 className='text-center text-2xl'>Foundational understanding</h1>
        <div className='flex justify-center'>
        
        <SiPython className='text-[#D94D29] text-5xl m-4'/>
        <DiDart className='text-[#D94D29] text-6xl m-4'/>
        <SiFlutter className='text-[#D94D29] text-5xl m-4'/>
        </div>
        
        <div className='flex flex-col md:flex-row'>
        <div className='w-[20rem]'>
        <BlackWhite
        src={orffProject}
        alt="Coming Soon"
        />
        </div>
        <div className="p-2 text-lg border-2 border-[#D94D29] drop-shadow-2xl w-[95%] m-2">
        <h1 className='text-2xl'>Last project:</h1>
        <p>As a Front-end Developer, I recently had the opportunity to contribute to the development of an Off-Road Fun Finder App and Website. This platform was designed to help off-road enthusiasts find suitable locations for their activities. Utilizing the Google Maps API, the website offered updated information on off-road sites, including the available services and amenities.</p>
        <br/>
        <p>My role in this project was focused on the front-end development of the website, ensuring that it was user-friendly and visually appealing. Additionally, I provided support to my team in integrating various third-party services, enabling the platform to offer more comprehensive information to its users. The main objective of the project was to provide an experience similar to Yelp, including the ability to promote events and provide advertisement services.</p>
        </div>
        </div>
        <div className='flex flex-col md:flex-row'>
        <div className='w-[20rem]'>
        <BlackWhite
        src={comingSoon}
        alt="Coming Soon"
        />
        </div>
        <div className="p-2 text-lg border-2 border-[#D94D29] drop-shadow-2xl w-[95%] m-2">
        <h1 className='text-2xl'>Coming soon:</h1>
        <p>Currently, I am in the planning phase of building a blog using NextJS. This platform will allow users to engage by making comments, and I have been contemplating this idea for some time. Now that I have the opportunity, I am eager to bring this project to life.</p>
        <br/>
        <p>My areas of interest in the field of Front-end Development include accessibility, particularly as I am partially color blind. Furthermore, I have gained valuable experience teaching English to Developers and would like to share my insights through my blog. I also intend to cover a wide range of Front-end topics related to CSS and share my knowledge and experiences with others.</p>
        </div>
        </div>
       
        </div>
        </div>
        <div className="w-full h-[2px] bg-[#D94D29]" />
    </>)}