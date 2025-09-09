import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  AddedToCartOverlay,
  QuantityContainer,
  QuantityButton,
  QuantityValue,
} from './product-card.styles';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  // Find the current item in cart to get quantity
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2500);
  };

  const removeProductFromCart = () => {
    if (cartItem) {
      dispatch(removeItemFromCart(cartItems, cartItem));
    }
  };


  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      {showAddedMessage && (
        <AddedToCartOverlay>
          <span>✓ Added to Cart</span>
        </AddedToCartOverlay>
      )}
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
