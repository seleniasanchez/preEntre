
import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget';

export const Categorias = () => {
    return (
        <>
            <div className='categorias d-flex pt-4'>
                <div >
                    <CartWidget />
                </div>

                <Link><a>Traje de Baño</a></Link>
                <Link><a>Ropa interior</a></Link>
            </div>
        </>
    )
}