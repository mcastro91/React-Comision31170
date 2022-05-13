import React from 'react'
import Item from '../Item/Item'

export default function ItemList ({listaProductos}) {
    
  return (
    <div className='ItemList'>
        {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/> )}
    </div>
  )
}