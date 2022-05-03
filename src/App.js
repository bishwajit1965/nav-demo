import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Links from "./components/Links";
import Single from "./components/Single";
import Blog from "./Blog";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/single" element={<Single />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
