import React from 'react'
import s from './style.module.css'
const ListItem = ({item}) => {
  return (
    <tr>
      <th>{item.name}</th>
      <td className={s.price}>{item.price}</td>
    </tr>
  )
}

export default ListItem