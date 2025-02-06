import React from 'react'
import { Link } from 'react-router-dom';
import {Preview,CategoryPreviewContainer,Title} from './category-preview.styles.jsx';
import ProductCard from '../productCard/product-card.component';


const CategoryPreview = ({title,products}) => {
  return (
    <CategoryPreviewContainer className='category-preview-container'>
        <Title>
            <Link to={title}>{title.toUpperCase()}</Link>
        </Title>
        <Preview>
            {products.filter((_,idx) => idx < 4).map((product) => (<ProductCard key = {product.id} product = {product} />))}
        </Preview>
    </CategoryPreviewContainer>
  )
} 

export default CategoryPreview