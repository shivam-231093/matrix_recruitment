import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    year: '',
    branch: '',
    matrixBranch: '',
    workExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
      <div className='justify-items-center'>
            <h4 className='text-[100px] font-bold bg-clip-text  text-transparent inline bg-custom-text bg-contain bg-center '>RECRUITMENT FORM</h4>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Matrix Membership Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {/* Contact Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter your contact number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter your email-id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          {/* Year of Study (Radio Buttons) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Select your year of study</label>
            <div className="flex space-x-4">
              {['1st', '2nd', '3rd', '4th'].map((year) => (
                <label key={year} className="inline-flex items-center">
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
            <label className="block text-gray-700 font-medium mb-2">Select your branch of study</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            >
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
            </select>
          </div>

          {/* MATRIX Branch (Dropdown) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Select the branch of MATRIX.JEC you want to be a part of</label>
            <select
              name="matrixBranch"
              value={formData.matrixBranch}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            >
              <option value="">Select MATRIX Branch</option>
              <option value="Technical">Technical</option>
              <option value="Editorial">Editorial</option>
              <option value="Production Studio">Production Studio</option>
            </select>
          </div>

          {/* Work Experience (Radio Buttons) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Do you have any previous work experience in the selected domain?</label>
            <div className="flex space-x-4">
              {['Yes', 'No'].map((option) => (
                <label key={option} className="inline-flex items-center">
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


