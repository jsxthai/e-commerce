import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$3', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$30', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg' },
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
      </main>    
    )
}

export default Products;