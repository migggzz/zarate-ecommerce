import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"

const navbar = () => {
  return (
    <div className="navbar bg-base-100 m-5">
    <div className="flex-1">
         <img  src={logo} className="w-40 h-40"></img> 
         <Link to={"/"} className="btn btn-ghost normal-case text-xl">Paffs Clothing</Link>
    </div>
    <div className="flex-none m-5">
      <ul className="menu menu-horizontal p-0 gap-2">
       <Link className="mt-3" to={"/category/remera"}>Remera</Link>
        <li tabIndex={0}>
          <a>
            Abrigos
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
            <Link to={"/category/buzo"}>Buzos</Link>
            <Link to={"/category/campera"}>Campera</Link>
          </ul>
        </li>
        <Link className="mt-3" to={"/category/pantalon"}>Pantalon</Link>
        <CartWidget/>
      </ul>
    </div>
  </div>
  )
}
export default navbar