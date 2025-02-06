import React, { Fragment, useEffect } from 'react'
import { useContext ,useState} from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import { useParams } from 'react-router-dom'
import './category.styles.scss'
import ProductCard from '../../components/productCard/product-card.component'

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);

    },[category,categoriesMap])
  return (
    <Fragment>
    <h1 className='category-title'>{category.toUpperCase()}</h1>
    <div className='category-container'>
        {products &&
        products.map((product) =>(
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </Fragment>
  )
}

export default Category