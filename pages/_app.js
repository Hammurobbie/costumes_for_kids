import "../styles/globals.css";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function App({ Component, pageProps }) {
  let userName = "";
  let age = "";
  let favColor = "";
  let shortDesc = "";
  if (typeof window !== "undefined") {
    userName = localStorage.getItem("userName");
    age = localStorage.getItem("age");
    favColor = localStorage.getItem("favColor");
    shortDesc = localStorage.getItem("shortDesc");
  }
  const [globalUser, setGlobalUser] = useState({
    userName: userName,
    age: age,
    favColor: favColor,
    shortDesc: shortDesc,
  });

  return (
    <UserContext.Provider value={{ globalUser, setGlobalUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
