import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    year: "",
    branch: "",
    matrixBranch: "",
    workExperience: "",
    qualities: "",
    right: "",
    reject: "",
    teamwork: "",
    adaptation: "",
    problem: "",
    Case1: "",
    Case2: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Ensure all fields are filled
    for (const key in formData) {
      if (!formData[key].trim()) {
        setError(`Please fill out the ${key} field.`);
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit-recruitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setError("");
        setFormData({
          name: "",
          contact: "",
          email: "",
          year: "",
          branch: "",
          matrixBranch: "",
          workExperience: "",
          qualities: "",
          right: "",
          reject: "",
          teamwork: "",
          adaptation: "",
          problem: "",
          Case1: "",
          Case2: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="  pl-14 shadow-md rounded-lg p-8 w-[70vw]">
      <div className=' flex justify-items-center'>
            <h4 className='text-[7vw] font-bold bg-clip-text text-stroke  text-transparent inline bg-custom-text bg-contain bg-center '>RECRUITMENT 2.0</h4>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
        
          {/* Name Input */}
          <div>
            <label className="block text-white font-medium mb-2">Enter your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {/* Contact Input */}
          <div>
            <label className="block text-white font-medium mb-2">Enter your contact number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white font-medium mb-2">Enter your email-id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {/* Year of Study (Radio Buttons) */}
          <div>
            <label className="block text-white font-medium mb-2">Select your year of study</label>
            <div className="flex space-x-4">
              {['1st', '2nd'].map((year) => (
                <label key={year} className="inline-flex text-white items-center">
                  <input
                    type="radio"
                    name="year"
                    value={year}
                    onChange={handleChange}
                    checked={formData.year === year}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">{year} Year</span>
                </label>
              ))}
            </div>
          </div>

          {/* Branch of Study (Dropdown) */}
          <div>
            <label className="block text-white font-medium mb-2">Select your branch of study</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border-white text-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            >
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="IT">Information Technology Engineering</option>
              <option value="ECE">Electronics & Telecommunication Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="AIDS">Artificial Intelligence & Data Science Engineering</option>
              <option value="MT">Mechatronics Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="IP">Industrial & Production Engineering</option>
              <option value="CE">Civil Engineering</option>
            </select>
          </div>

          {/* MATRIX Branch (Dropdown) */}
          <div>
            <label className="block text-white font-medium mb-2">Select the branch of MATRIX.JEC you want to be a part of</label>
            <select
              name="matrixBranch"
              value={formData.matrixBranch}
              onChange={handleChange}
              className="w-full text-black border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            >
              <option value="">Select MATRIX Branch</option>
              <option value="Technical">Student Technical Council ( technical )</option>
              <option value="Production Studio poster">Matrix Studio ( graphics-poster )</option>
              <option value="Production Studio 3d">Matrix Studio ( 3D Motion Designer )</option>
              <option value="Public Relations">Public Relations & Marketing</option>
              <option value="Production Studio editing">Matrix Studio (cinematography and video editing)</option>
              <option value="Editorial">Student Editorial Council ( content and creative )</option>
            </select>
          </div>

          {/* Work Experience (Radio Buttons) */}
          <div>
            <label className="block text-white font-medium mb-2">Do you have any previous work experience in the selected domain?</label>
            <div className="flex space-x-4">
              {['Yes', 'No'].map((option) => (
                <label key={option} className="inline-flex text-white items-center">
                  <input
                    type="radio"
                    name="workExperience"
                    value={option}
                    onChange={handleChange}
                    checked={formData.workExperience === option}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">What do you think are your three best qualities that make you stand out? (Please list 3 qualities numbered 1,2,3 only)</label>
            <input
              type="text"
              name="qualities"
              value={formData.qualities}
              onChange={handleChange}
              placeholder="Best Qualities"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2"> <h1>What do you believe is the right approach :</h1>
<h1>a. being jack of all trades</h1> 
 <h1>b. being the master of one</h1>
 <h1>Please give a brief reason for your choice.
 </h1>
</label>
            <input
              type="text"
              name="right"
              value={formData.right}
              onChange={handleChange}
              placeholder="Your Approach"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">If we were to reject your application, what do you think the possible reasons could be?</label>
            <input
              type="text"
              name="reject"
              value={formData.reject}
              onChange={handleChange}
              placeholder="Reason"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>
          <div>
          <label className="block text-white font-medium mb-2">Rate yourself out of 5 in the following areas  ( 5 being the highest</label>
            <label className="block text-white font-medium mb-2">A. Teamwork </label>
            <div className="flex space-x-4">
              {['1', '2','3','4','5'].map((option) => (
                <label key={option} className="inline-flex text-white items-center">
                  <input
                    type="radio"
                    name="teamwork"
                    value={option}
                    onChange={handleChange}
                    checked={formData.teamwork === option}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
            <label className="block text-white font-medium mb-2">B. Learning ability & adaptation </label>
            
            <div className="flex space-x-4">
              {['1', '2','3','4','5'].map((option) => (
                <label key={option} className="inline-flex text-white items-center">
                  <input
                    type="radio"
                    name="adaptation"
                    value={option}
                    onChange={handleChange}
                    checked={formData.adaptation === option}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
            <label className="block text-white font-medium mb-2">C. Problem solving and damage control </label>
            
            <div className="flex space-x-4">
              {['1', '2','3','4','5'].map((option) => (
                <label key={option} className="inline-flex text-white items-center">
                  <input
                    type="radio"
                    name="problem"
                    value={option}
                    onChange={handleChange}
                    checked={formData.problem === option}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-white font-medium mb-2"> <h1>Case Study 1</h1><h1>You discover that your team mate is leaking confidential information of the club to non members. The information ruined an event. 

The team mate lets say is your best friend from the start of the college. </h1>
<h1>A. Tell on your friend to your seniors ( you do what is  right for the club compromising your friendship) </h1> 
 <h1>B.  Do not tell anyone about it. 

(Friendship above the club) </h1>
 <h1>What will you do and why ?
 </h1>
</label>
            <input
              type="text"
              name="Case1"
              value={formData.Case1}
              onChange={handleChange}
              placeholder="Case Study 1"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2"> <h1>Case Study 2</h1><h1>What if a female member of the club has problems with a certain male member of the club. </h1>
<h1>What if a female member of the club has problems with a certain male member of the club.</h1>
<h1>1. The male member is of importance, meaning he is an essential member to the working of the club. The domain falls apart without him.  </h1> 
 <h1>2. ⁠The female member is an easy replacement. Someone else can easily do what she does for the club</h1>
 <h1>Now you have to only remove one of them ( remove and remove only )
 Who do you remove and why ?</h1>
 <h1>Please note that male member talked about here of the club is actually problematic.</h1>
</label>
            <input
              type="text"
              name="Case2"
              value={formData.Case2}
              onChange={handleChange}
              placeholder="Case Study 2"
              className="w-full border-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg shadow-sm hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;


