import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export * from "./ProductButtons"
export * from "./ProductImage"
export * from "./ProductTitle"

const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Buttons: ProductButtons,
    Image: ProductImage,
    Title: ProductTitle,
})


export default ProductCard