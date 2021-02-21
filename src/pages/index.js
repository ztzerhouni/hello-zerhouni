import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div style={{ color: 'purple'}}>
    <Link to="/about/">About</Link>
    <p></p>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Welcome to the Zak Test Page!" />
    <h3>Let's try some basic HTML</h3>
    <p>Click on the image below.</p>
    <a href="https://gundam.fandom.com/wiki/Char_Aznable"><img src="../images/char.jpg" alt="" /></a>
  </div>
  );
}
