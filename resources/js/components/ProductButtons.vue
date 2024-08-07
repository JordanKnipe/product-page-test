<template>
    <div class="product-button-container">
      <!-- Quantity Selector -->
      <div class="quantity-selector">
        <button id='product-button-decrement' @click="decrement"><div><img :src="minusIcon" alt="Minus Icon"/></div></button>

        <input type="text" v-model="quantity" readonly>
        <button id='product-button-increment' @click="increment"><div><img :src="plusIcon" alt="Plus Icon"/></div></button>
      </div>
      
      <!-- Add to Cart Button -->
      <button class="product-add-to-cart-button" @click="addToCart"><div><img :src="cartIcon" alt="Cart Icon"/>Add to cart</div></button>
    </div>
  </template>
  
  <script>
  import MinusIcon from '../../../public/images/icon-minus.svg';
  import PlusIcon from '../../../public/images/icon-plus.svg';
  import CartIcon from '../../../public/images/icon-cart.svg';
  export default {
    name: 'ProductButtons',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        quantity: 0,
        minusIcon: MinusIcon,
        plusIcon: PlusIcon,
        cartIcon: CartIcon
      };
    },
    methods: {
      increment() {
        this.quantity++;
      },
      decrement() {
        if (this.quantity > 0) {
          this.quantity--;
        }
      },
      addToCart() {
        if (this.quantity > 0) {
                console.log("Emitting Event 'addToCart'")
        this.$emit('addToCart', {
          product: this.product,
          quantity: this.quantity
        });
      }
      }
    }
  }
  </script>
  
  <style scoped>
  #product-button-decrement{
    border-radius: .5rem 0 0 .5rem;
  }

  #product-button-increment{
    border-radius: 0 .5rem .5rem 0;
  }
  .quantity-selector button, .quantity-selector input {
    width: 50px;
    height: 50px;
    border: none;
    background-color: hsl(223, 64%, 98%);
    text-align: center;
    vertical-align: middle;

}
/* vertical centering was slightly off with svg sizes */
.quantity-selector button div{
    display: flex;
    justify-content: center;
}
  
  .quantity-selector input {
    max-width: 50px; 
    text-align: center;
    color: black;
    font-weight: 600;
    font-size: 16px;
  }
  
  .product-add-to-cart-button {
    background-color: hsl(26, 100%, 55%);
    color:  hsl(0, 0%, 100%);
    border: none;
    height: 50px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: .5rem;
    width: 60%;
    box-shadow: 0px 8px 12px 10px hsl(25, 100%, 94%)
    
  }
  .product-add-to-cart-button div{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: center;
    font-weight: 600;
    gap:10px
  }
  .product-add-to-cart-button img{
    filter: brightness(0) invert(1) saturate(0%);

  }
  
  .product-button-container {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
  
  button {
    cursor: pointer; 
  }

  @media (max-width: 1200px) {
    .product-button-container {
        flex-wrap: wrap;
    }

  }
  @media (max-width: 768px) {
        .quantity-selector{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        
        }
        .quantity-selector input{
            max-width: unset;
            width: unset;
        }
        .product-add-to-cart-button{
            width: 100%;
        }
  }
  @media (max-width: 375px) {
        .quantity-selector{
            width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        
        }
        .quantity-selector input{
            max-width: unset;
            width: unset;
        }
        .product-add-to-cart-button{
            width: 100%;
        }
        .product-button-container{
            margin-top: 1rem;
        }
  }
  </style>
  