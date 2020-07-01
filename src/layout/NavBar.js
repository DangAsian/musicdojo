import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import css from './NavBar.module.css'


export const NavBar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.navMenu}>
        <NavLink className={css.navLink} to="/"> Register </NavLink>
        <NavLink className={css.navLink} to="/"> Login </NavLink>
        <NavLink className={css.navLink} to="/"> Home </NavLink>
      </div>
    </nav>
  )
}