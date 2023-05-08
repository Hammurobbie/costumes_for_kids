import React from "react";

const IntroForm = () => {
  const harryPotterBirthday = new Date();
  harryPotterBirthday.setFullYear(1980, 7, 31);
  const ageDifMs = Date.now() - harryPotterBirthday;
  const ageDate = new Date(ageDifMs);
  const harryPotterAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  return (
    <div className="w-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <h2 className="text-2xl font-bold text-dark">Tell me about yourself</h2>
      <form className="mt-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="first_name"
            >
              What's your name?
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="first_name"
              type="text"
              placeholder="Harry Potter"
            ></input>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="age"
            >
              How old are you?
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-dark border-2 shadow-sm py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="age"
              type="number"
              placeholder={harryPotterAge}
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

export default IntroForm;
