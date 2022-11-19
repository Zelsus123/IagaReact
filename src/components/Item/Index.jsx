import React from 'react'
import { NavLink } from 'react-router-dom'
import {normal, linkOpen} from './styles.module.scss'

function Item({text, to, icon, open}) {
  return (
    <NavLink className={open ? linkOpen : normal} to={to}>
        <div>{icon}</div>
        {open ? <p>{text}</p> : null}
    </NavLink>
  )
}

export default Item
