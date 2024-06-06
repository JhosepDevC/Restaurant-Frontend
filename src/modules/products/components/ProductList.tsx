import React from 'react'
import { ProductCard } from './ProductCard'
import { ModalNewProduct } from './new product/ModalNewProduct'

export const ProductList = () => {
  return (
    <section>
      <div className="container">
        <div className='flex items-center justify-between mb-6'>
          <h2>Lista de <span className='font-light '>Categorias</span></h2>
          <ModalNewProduct/>
        </div>
        <ul className='product__list'>
            {
                [0,1,2,3,4,5,6,7,8,9,10,11,12].map(product => (
                    <li key={product}>
                        <ProductCard/>
                    </li>
                ))
            }
        </ul>
      </div>
      
      
      
    </section>
  )
}

