import React from "react";

const Form = () => {
  return (
    <div className="w-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <h2 className="text-2xl font-bold text-dark">Create Your Own Costume</h2>
      <form className="mt-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Costume Name
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="grid-first-name"
              type="text"
              placeholder="Spider-Man"
            ></input>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Costume Description
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-dark border-2 shadow-sm py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="grid-last-name"
              type="text"
              placeholder="A classic red and blue costume with web-slinging abilities."
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Costume Image
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-dark border-2 shadow-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="grid-password"
              type="file"
              placeholder="Upload an image of your costume"
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="w-full flex justify-center">
            <button
              className="shadow bg-lime hover:bg-purple-400 focus:shadow-outline focus:outline-none text-dark font-bold py-2 px-4 border-2 shadow-sm border-dark"
              type="submit"
            >
              Create Costume
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
