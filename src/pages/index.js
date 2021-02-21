import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import CharImg from "../images/char.jpg"

export default function Home() {
  return (
  <div style={{ color: 'purple'}}>
    <Link to="/about/">About</Link>
    <p></p>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Welcome to the Zak Test Page!" />
    <h3>Let's try some basic HTML</h3>
    <p>Click on the image below.</p>
    <a href="https://gundam.fandom.com/wiki/Char_Aznable"><img src={CharImg} alt="" /></a>

    <form method="get">

      <label for="fname">First Name: </label>
      <input type="text" id="fname" name="firstname" placeholder="First Name">

      <label for="lname">First Name: </label>
      <input type="text" id="lname" name="lastname" placeholder="Last Name">
      <p></p>

      <label for="uemail"></label>
      <input type="email" id="uemail" name="useremail" placeholder="user@email.com">

      <label for="upass"></label>
      <input type="password" id="upass" name="userpassword" placeholder="Enter Password">
      <p></p>

      <input type="submit" name="usersubmission" value="Submit">

    </form>

  </div>

  
  );
}
