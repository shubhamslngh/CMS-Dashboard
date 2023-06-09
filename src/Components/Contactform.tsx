import React from 'react';

function ContactForm() {
  return (
    
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6">Contact Page</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="fname">
              First name:
            </label>
            <input
              className="w-full border border-gray-300 rounded py-2 px-3"
              type="text"
              id="fname"
              name="fname"
            />  
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="lname">
              Last name:
            </label>
            <input
              className="w-full border border-gray-300 rounded py-2 px-3"
              type="text"
              id="lname"
              name="lname"
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
