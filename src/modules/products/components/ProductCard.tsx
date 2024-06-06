import React from 'react'


export const ProductCard = () => {
    return (
      <div className='product__card'>
        <div className='mb-4 raunded-xl overflow-hidden'>
            <img className='' src='https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Producto'/>
        </div>
        <h3 className='mb-2 text-2xl text-center text-gray-700'>Nombre del producto</h3>
        <p className='text-center text-xl text-gray-500'>$65.3</p>
        {/* <p>Descripción del producto</p> */}
      </div>
    )
  }