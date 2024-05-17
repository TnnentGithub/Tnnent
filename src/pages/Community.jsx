import React, { useState, useEffect } from 'react';
import movieEditIcon from '../images/movie_edit.svg';
import profileImage from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png';
import iosshare from '../images/ios_share (1).svg'
import Navbar from '../components/Navbar';
import profilepic from '../images/05ebdc349a885d1104456e5d51b082b7.jpeg'
import './Heart.css';
import post1 from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png'
import post2 from '../images/Rectangle 2269.png'
import Communitypostcard from '../components/Communitypostcard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";

function Community() {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const storeCollectionRef = collection(db, "Store");
      const storeQuerySnapshot = await getDocs(storeCollectionRef);
      const combinedPosts = [];

      for (const storeDoc of storeQuerySnapshot.docs) {
        const postCollectionRef = collection(db, "Store", storeDoc.id, "CommunityPost");
        const postQuerySnapshot = await getDocs(postCollectionRef);
        postQuerySnapshot.forEach((postDoc) => {
          combinedPosts.push({
            ...postDoc.data(),
            storeId: storeDoc.id,
          });
        });
      }

      setPosts(combinedPosts);
    };

    fetchPosts();
  }, []);

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
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-8">

            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">COMMUNITY</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh]  mt-1"></div>
            </div>

        <div className="rounded-full bg-black w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <img className='w-[6vw]' src={movieEditIcon} alt="" />              
        </div>
                </div>
    </div>
    <div className=" mt-[29%] mb-32">
      {posts.length > 0 ? (
            posts.map((post, index) => (
              <Communitypostcard key={index} post={post} />
            ))
          ) : (
            <p>No posts available</p>
          )}
    </div>
    
    <Navbar color="#2D332F" color2= "white" color3= "#2D332F" color4= "#2D332F"/>
    </section>
    </>
  )
}

export default Community
