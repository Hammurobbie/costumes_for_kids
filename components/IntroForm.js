import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import cx from "classnames";
import { Wavy } from "../icons/Wavy";

const IntroForm = () => {
  const { globalUser, setGlobalUser } = useContext(UserContext);
  const initUser = {
    name: globalUser?.name || "",
    age: globalUser?.age || "",
    favColor: globalUser?.favColor || "",
    shortDesc: globalUser?.shortDesc || "",
  };
  const [user, setUser] = useState(initUser);
  const [errors, setErrors] = useState([]);
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
    const errorInd = errors?.indexOf(e.target.name);
    if (errorInd >= 0 && e.target.value) {
      const newErrors = errors.filter((err) => err !== e.target.name);
      setErrors(newErrors);
    }
  };

  const validate = () => {
    const errorsBank = [];

    if (!user?.name) {
      errorsBank.push("name");
    }
    if (!user?.age) {
      errorsBank.push("age");
    }
    if (!user?.favColor) {
      errorsBank.push("favColor");
    }
    if (!user?.shortDesc) {
      errorsBank.push("shortDesc");
    }
    if (errorsBank?.length) {
      setErrors(errorsBank);
      return true;
    } else return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) return;
    push("/dashboard");
    setGlobalUser(user);
    localStorage.setItem("name", user?.name);
    localStorage.setItem("age", user?.age);
    localStorage.setItem("favColor", user?.favColor);
    localStorage.setItem("shortDesc", user?.shortDesc);
  };

  return (
    <div className="w-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <h1 className="text-2xl text-center font-bold text-dark">
        Nice to meet you!
        <span className="relative">
          <Wavy className="fill-dark w-28 absolute -left-32 rotate-1" />
        </span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold"
              htmlFor="first_name"
            >
              {"What's your name?"}
            </label>
            <em
              className={cx("text-error text-sm transition-all", {
                "opacity-0": errors?.indexOf("name") < 0,
              })}
            >
              Please add your name
            </em>
            <input
              className={cx(
                "appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-tangerine-alt transition-all",
                {
                  "border-error shadow-error": errors?.indexOf("name") >= 0,
                }
              )}
              id="first_name"
              name="name"
              type="text"
              value={user?.name}
              onChange={handleChange}
              placeholder="Harry Potter"
            ></input>
          </div>
          <div className="w-full px-3 mb-3 relative">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold"
              htmlFor="age"
            >
              How old are you?
            </label>
            <em
              className={cx("text-error text-sm transition-all", {
                "opacity-0": errors?.indexOf("age") < 0,
              })}
            >
              Please add your age
            </em>
            <input
              className={cx(
                "appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-tangerine-alt transition-all",
                {
                  "border-error shadow-error": errors?.indexOf("age") >= 0,
                }
              )}
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
              className="block uppercase tracking-wide text-dark text-xs font-bold"
              htmlFor="fav_color"
            >
              {"What's your favorite color?"}
            </label>
            <em
              className={cx("text-error text-sm transition-all", {
                "opacity-0": errors?.indexOf("favColor") < 0,
              })}
            >
              Please add your favorite color
            </em>
            <input
              className={cx(
                "appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-tangerine-alt transition-all",
                {
                  "border-error shadow-error": errors?.indexOf("favColor") >= 0,
                }
              )}
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
              className="block uppercase tracking-wide text-dark text-xs font-bold"
              htmlFor="short_desc"
            >
              How would you best describe yourself in just a few words?
            </label>
            <em
              className={cx("text-error text-sm transition-all", {
                "opacity-0": errors?.indexOf("shortDesc") < 0,
              })}
            >
              Please tell me a bit about you
            </em>
            <input
              className={cx(
                "appearance-none block w-full bg-tangerine text-dark border-2 shadow-sm border-dark py-3 px-4 leading-tight focus:outline-none focus:bg-tangerine-alt transition-all",
                {
                  "border-error shadow-error":
                    errors?.indexOf("shortDesc") >= 0,
                }
              )}
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
