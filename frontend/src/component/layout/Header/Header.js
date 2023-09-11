import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/miu_.png";

import { FaCartArrowDown, FaSearch, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return <ReactNavbar 
  burgerColor="#212020" 
  burgerColorHover= "#A07863"
  logo={logo}
  logoWidth= "20vmax"
  navColor1= "white"
 logoHoverColor="white"
 

  link1Text= "HOME"
  link2Text= "PRODUCTS"
  link3Text= "CONTACT"
  link4Text= "ABOUT"
  
  link1Url= "/"
  link2Url= "/products"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "1.7vmax"
  link1Color= "rgba(35, 35, 35,0.8)"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#A07863"
  link1Margin= "1vmax"
  profileIconUrl= "/login"

  profileIconColor= "rgba(35, 35, 35,0.8)"
  searchIconColor= "rgba(35, 35, 35,0.8)"
  cartIconColor= "rgba(35, 35, 35,0.8)"
  profileIconColorHover= "#A07863"
  searchIconColorHover= "#A07863"
  cartIconColorHover= "#A07863"
  cartIconMargin= "1vmax"
  profileIcon={true}
  ProfileIconElement={FaUserAlt}
  cartIcon={true}
  CartIconElement={FaCartArrowDown}
  searchIcon={true}
  SearchIconElement={FaSearch}

 />;
};

export default Header;


