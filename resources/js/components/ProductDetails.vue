<template>

  <div class="product-details-container">
    <h2 class="mobile-product-company-title">SNEAKER COMPANY</h2>
    <h1 class="product-title-text">{{ product.data.name }}</h1>
    <p class="product-description-text">{{ product.data.description }}</p>
    
    <div class="price-container">
      <!-- Conditionally show the discounted price -->
      <div class="product-discounted-container" v-if="product.data.price.discounted">
        <div class="current-price-container">
          <h2 class="product-price-text">${{ product.data.price.discounted.toFixed(2) }}</h2>
          <p class="discount-tag">{{ discountedPercent }}%</p>
        </div>
        <p class="product-discount-text">${{ product.data.price.full.toFixed(2) }}</p>
      </div>
      
      <!-- Show this div if there is no discount -->
      <div v-else-if="product.data.price.discounted || product.data.price.discounted == 0">
        <h2 class="product-price-text">${{ product.data.price.full.toFixed(2) }}</h2>
      </div>
    </div>
    <ProductButtons class="button-component" :product="product"/>
  </div>
</template>

<script>
import ProductButtons from './ProductButtons.vue'

export default {
  name: 'ProductDetails',
  components: {
    ProductButtons
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    discountedPercent() {
      // Ensure the discounted price percentage is available
      if (!this.product.data.price.discounted) {
        return 0;
      }
      const discountPercent = ((this.product.data.price.discounted / this.product.data.price.full) * 100);
      return discountPercent;
    }
  }
}
</script>

<style scoped>
.product-title-text{
  font-size: 44px
}
.product-description-text {
 
  font-size: 16px;
  line-height: 1.6;
  
  color: hsl(0, 0%, 40%);
  font-weight: 500;
}
.current-price-container{
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.product-price-text{
  font-size: 26px;
  font-weight: 800;
  margin-top: .5rem;
  margin-bottom: .5rem;
}
.discount-tag{
  margin: 1rem;
  padding: .25rem;
  padding-left: .5rem;
  padding-right: .5rem;
  background-color: hsl(25, 100%, 94%);
  color: hsl(26, 100%, 55%);
  border-radius: .5rem;
  font-weight: 600;
}
.product-discount-text{
  margin: 0;
  color: hsl(0, 0%, 80%);
  font-weight: 600;
  text-decoration:line-through;
}
.product-details-container{
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  height: 100%;
}
.price-container{
  margin-bottom: 2.5rem;
}
.mobile-product-company-title{
    display: none;
  }

@media (max-width: 1024px) {
.product-details-container{
  margin-left: 5vw;
}
}
@media (max-width: 768px) {
  .product-details-container{
    margin-left:10vw;
    margin-right: 10vw;
    margin-top: 1vh;
  }  
  .product-title-text {
    font-size: 28px;
    margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .product-description-text{
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  
    .price-container{
    margin-bottom: .5rem;
  }
  .mobile-product-company-title{
    display: block;
    font-size: 12px;
    color: hsl(26, 100%, 55%);
    margin: unset;
    
  }
}
@media (max-width: 375px) {
  .product-details-container{
    margin-left:6vw;
    margin-right: 6vw;
    margin-top: 3vh;
  }  
  .product-title-text {
    font-size: 28px;
    }
  .price-container{
    margin-bottom: 0;
  }
  .price-container div{
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
 .product-title-text{
  margin-top: .5rem;
  margin-bottom: .5rem;
 }
 .product-description-text{
  margin-top: .5rem;
  margin-bottom: .5rem;
 }
}
</style>
