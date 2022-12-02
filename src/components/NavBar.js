import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar bg-base-100 m-5">
    <div className="flex-1">
         <CartWidget/>
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
      </ul>
      <label tabindex="0" class="btn btn-ghost btn-circle m-5">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">0</span>
        </div>
      </label>
    </div>
  </div>
  )
}
export default navbar