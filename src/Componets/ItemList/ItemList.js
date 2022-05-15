import React from 'react'
import Item from '../Item/Item'

export default function ItemList ({productsList}) {
    
  return (
    <div className='ItemList'>
        {productsList.map((product) => <Item product={product} key={product.id}/> )}
    </div>
  )
}