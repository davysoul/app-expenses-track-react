import React from 'react'
import ListItem from '../listItem/ListItem';
function List({items}) {
  return (
    <div >
       <table className='table table-hover table-borderless'>
         <tbody>
            {
             items &&   items.map((item,index)=>(
                    <ListItem item={item} key={`${item.name}${index}`}/>
                ))
            }
            
           
         </tbody>
       </table>
    </div>
  )
}

export default List