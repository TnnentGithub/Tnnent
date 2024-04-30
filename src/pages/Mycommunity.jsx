import React, { useState } from 'react';
import movieEditIcon from '../images/movie_edit.svg';
import profileImage from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png';
import iosshare from '../images/ios_share (1).svg'
import Navbar from '../components/Navbar';
import threedots from '../images/image 2.svg';
import './Heart.css';

function MyCommunity() {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <>
    <section className='lg:hidden'>
     <div className="fixed bg-white z-40 w-full top-0">
      <div className="flex justify-between p-3 mt-2">
       <div className='flex justify-center w-[22vw] h-[16vw] border-2 rounded-xl'>
        <div className='flex flex-col items-center mt-[1.3vw]'>
            <h2 className='font-bold text-[5.4vw]'>17</h2>
            <h2 className='font-bold text-[3.5vw] opacity-60 mt-[-13%]'>Posts</h2>
        </div>
       </div>
        <div className="w-[6vh] h-[6vh] rounded-full bg-[#F5F5F5] flex justify-center items-center mt-2 mr-2 p-3">
        <svg width="60%" height="60%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        
        </div>
      </div>
        
      
    </div>
    <div className="flex justify-center mt-[35%]">
      <div className="w-[93vw] flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-[5vh] h-[5vh] rounded-full bg-[#343434]"></div>
            <h2 className="font-bold text-[5vw] mt-2">Kunal Deb</h2>
          </div>
          <div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={threedots} alt="" className="w-5" />
                </div>
        </div>
        <div className="flex justify-center mt-4 px-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className='mt-4 text-[3.4vw] font-bold opacity-50'>&nbsp; 8h ago</span></p>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-400 w-[99%] h-[62vw] rounded-sm mt-4 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${profileImage})` }}>
          </div>
        </div>
        <div className='flex justify-between mb-4'>
         <div className='flex gap-2'>
                <div className='flex gap-3 border-2 border-[#BEBEBE]  rounded-3xl px-4 py-1  ml-2 items-center'>
                <div className="con-like">
      <input
          className="like w-2"
          type="checkbox"
          title="like"
          checked={liked}
          onChange={toggleLike}
      />
      <div className="checkmark">
        {liked ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
          <path fill="#FF0000" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24">
  <path fill="none" stroke="#FF0000" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
</svg>
        )}
       
      </div>
    </div>
    <p className="font-bold opacity-70 text-[4vw]" >{likeCount}</p>
                </div>
                <div className="p-4 h-[4.4vh] border-2 border-[#BEBEBE] rounded-3xl flex justify-center items-center">
                <a href="https://uiverse.io/" target="_blank" rel="noopener noreferrer" className="text-[3.5vw] text-[#989797]">link: https://uiverse.io/</a>


               </div>
         
            </div>
            
            
        <img className='w-[4vw] mt-[-2%] mr-1' src={iosshare} alt="" />
            
        </div>
      </div>
     
    </div>
    

    </section>
    </>
  )
}

export default MyCommunity
