import React, { useState } from "react";
import InfiniteSlider from "./InfiniteSlider";



// gsap.registerPlugin(ScrollTrigger);


const AboutPage = () => {

  // useEffect(() => {
  //   // Animation logic
  //   const page2Animation = () => {
  //     gsap.from(".elem .h ", {
  //       y: 120, // Vertical movement
  //       opacity: 0, // Starts hidden
  //       stagger: 0.5, // Animates one after another with delay
  //       duration: 2, // Animation duration
  //       scrollTrigger: {
  //         trigger: ".page2", // The element to watch for triggering the animation
  //         scroller: ".ty", // The container that scrolls (default is body)
  //         start: "top 47%", // When the animation starts
  //         end: "top 46%", // When the animation ends
  //         markers: true, // Debugging markers (can be disabled)
  //         scrub: 2, // Smooth scrolling effect
  //       },
  //     });
  //   };

  //   // Initialize animation
  //   page2Animation();
  // }, []);


  const [formData, setFormData] = useState({ suggestion: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://matrix-backend-vy0o.onrender.com/submit-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Thank you for your suggestion!");
        setFormData({ suggestion: "" }); // Reset form
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div  className="ty page2 bg z-50 bg-black text-white min-h-screen flex flex-col items-center  px-10">

     <div className="w-full items-end border-b-2 flex justify-between ">
       <h1 className="w-[50vw] p-2">"Empowering innovation, fostering creativity, and building a community of limitless possibilities"</h1>
       <h1>Head's Wise Words😊</h1>
     </div>
     <div className="justify-items-end items-center mt-10 m-5">
      <h1 className=" h text-[3vw] tracking-[-0.1vw] leading-tight">Welcome to Matrix, a vibrant community that excels in the realms of technology, editorial ventures, and production studios. We are a team of innovative thinkers and creative minds dedicated to fostering technical excellence and creativity through engaging events, workshops, and collaborations.</h1>
     </div>

     <div className="w-full mt-20 text-lg items-end border-b-2 flex justify-between ">
       <h1 className="w-[30vw] p-2">Our Mission</h1>
     </div>
     <div className="justify-items-end items-center mb-44 mt-10 m-5">
      <h1 className=" h text-[3vw] tracking-[-0.1vw] leading-tight">At Matrix, our mission is to empower individuals by equipping them with technical skills and creative confidence. We aim to build a platform where students and professionals collaborate, innovate, and create solutions to real-world challenges.</h1>
     </div>
     <div className=" relative w-full">

     <div className="flex items-center justify-center justify-items-center">
      <h1 className="text-[3.5vw] w-[40vw] text-center tracking-[-0.1vw] leading-tight">Our Journey & Achievements Together</h1>
     </div>
    
     <div className="w-full p-8 h-[90vh] lg:h-[100vh] lg:flex justify-between mt-16">
      <div onClick={()=>window.open("https://www.instagram.com/reel/C_ujHhyNXXM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==")} className=" lg:h-full  cursor-pointer h-1/3 w-full  lg:w-[32%] relative ">
      <video className="w-full absolute h-full" autoPlay loop muted >
      <source src="./amog.mp4" type="video/mp4" />
      </video>
        <img className="hover:opacity-0 w-full h-full opacity-0 lg:opacity-100  absolute  rounded-md object-contain lg:object-cover transition duration-300 ease-in-out" src="./amog.JPG" alt=""/>
      </div>
      <div onClick={()=>window.open("https://www.instagram.com/reel/C87Ns_NP4WF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==")} className="lg:h-full relative cursor-pointer w-full h-1/3 lg:w-[32%] ">
      <video className="w-full absolute h-full" autoPlay loop muted>
      <source src="./btcc.mp4" type="video/mp4" />
      
      </video>
        <img className="hover:opacity-0 transition object-contain opacity-0 lg:opacity-100 lg:object-fill duration-300 ease-in w-full h-full absolute rounded-md " src="./btcc.png" alt=""/>
      </div>
      <div onClick={()=>window.open("https://www.instagram.com/reel/DDZi4qHyTtD/?igsh=MWdya25maXdweWpraA==")} className="lg:h-full cursor-pointer h-1/3 relative w-full lg:w-[32%] ">
      <video className="w-full absolute h-full"  autoPlay loop muted>
      <source src="./turf1.mp4" type="video/mp4" />
      </video>
        <img className="hover:opacity-0 transition duration-300 opacity-0 lg:opacity-100 ease-in w-full lg:object-fill h-full absolute object-fit rounded-md " src="./turf.png" alt=""/>
      </div>
     </div>
     </div>
     <InfiniteSlider/>
     <div className="w-full mt-20 text-lg items-end border-b-2 flex justify-between ">
       <h1 className="w-[30vw] p-2">Wanna Be A Part </h1>
     </div>
     <div className="justify-items-end inline-block items-center mb-44 mt-10 m-5">
      <h1 className=" h text-[3vw] tracking-[-0.1vw] leading-tight"> Whether you are a tech enthusiast, a budding editor, or a creative producer, Matrix has a place for you. </h1>
      <h1  className=" h mt-4 text-[3vw] tracking-[-0.1vw] leading-tight"> If you want to be a part of our journey, fill out our recruitment form! Got ideas, suggestions, or something you'd love to see us tackle? Share your thoughts or opinions with us—we're here to collaborate and grow together</h1>
     
      <div className=" items-center shadow-md rounded-lg p-8 w-full ">
      <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[2vw] text-bla font-medium mb-2">
                Give Us Your Suggestions
              </label>
              <input
                type="text"
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                placeholder="Your Suggestion"
                className="w-full border-gray-300 text-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              />
            </div>
            <div className="w-full justify-items-center items-center justify-center">
              <button
                type="submit"
                className="w-[20vw] ml-[37.5%] text-[1.7vw] bg-blue-500 text-white font-medium py-3 rounded-lg shadow-sm hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-[1.5vw] font-medium">
              {responseMessage}
            </div>
          )}
      </div>
     </div>
    </div>
  );
};

export default AboutPage;
