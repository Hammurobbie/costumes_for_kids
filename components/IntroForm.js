import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";

const IntroForm = () => {
  const { globalUser, setGlobalUser } = useContext(UserContext);
  const initUser = {
    name: globalUser?.name || "",
    age: globalUser?.age || "",
    favColor: globalUser?.favColor || "",
    shortDesc: globalUser?.shortDesc || "",
  };
  const [user, setUser] = useState(initUser);
  const harryPotterBirthday = new Date();
  harryPotterBirthday.setFullYear(1980, 7, 31);
  const ageDifMs = Date.now() - harryPotterBirthday;
  const ageDate = new Date(ageDifMs);
  const harryPotterAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  const { push } = useRouter();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push("/dashboard");
    localStorage.setItem("name", user?.name);
    localStorage.setItem("age", user?.age);
    localStorage.setItem("favColor", user?.favColor);
    localStorage.setItem("shortDesc", user?.shortDesc);
    setGlobalUser(user);
    setUser(initUser);
  };

  return (
    <div className="w-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <h1 className="text-2xl text-center font-bold text-dark">
        Nice to meet you!
      </h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="first_name"
            >
              What's your name?
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-tangerine-alt"
              id="first_name"
              name="name"
              type="text"
              value={user?.name}
              onChange={handleChange}
              placeholder="Harry Potter"
            ></input>
          </div>
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="age"
            >
              How old are you?
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-tangerine-alt"
              id="age"
              type="number"
              name="age"
              value={user?.age}
              onChange={handleChange}
              placeholder={harryPotterAge}
            ></input>
          </div>
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="fav_color"
            >
              What's your favorite color?
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-tangerine-alt"
              id="fav_color"
              type="text"
              name="favColor"
              value={user?.favColor}
              onChange={handleChange}
              placeholder="Burgundy"
            ></input>
          </div>
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold mb-2"
              htmlFor="short_desc"
            >
              How would you best describe yourself in just a few words?
            </label>
            <input
              className="appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 leading-tight focus:outline-none focus:bg-tangerine-alt"
              id="short_desc"
              type="text"
              name="shortDesc"
              value={user?.shortDesc}
              onChange={handleChange}
              placeholder="Brave, loyal and kind"
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="w-full flex justify-center">
            <button
              className="bg-lime hover:bg-lime-alt focus:bg-lime-alt font-bold py-2 px-4 border-2 shadow-sm border-dark"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IntroForm;
