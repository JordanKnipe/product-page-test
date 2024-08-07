<template>
<div class="page-container" v-if="product">
    <div class="product-container">
        <ProductGallery :product="product"/> 
        <ProductDetails :product="product"/>
    </div>
</div>
<div class="product-loading" :class="{ 'hide': !loading }">
    <div class="spinner">

    </div>
</div>


</template>
  
<script>
  import axios from 'axios';
  import ProductDetails from '../components/ProductDetails.vue';
  import ProductGallery from '../components/ProductGallery.vue'; 
  
  export default {
    name: 'ProductPage',
    components: {
      ProductDetails,
      ProductGallery
    },
    data() {
      return {
        product: null,
        loading: true
      };
    },
    mounted() {
      this.fetchProduct();
    },

    methods: {
        fetchProduct() {
            // Using the slug from the route params
            const slug = this.$route.params.slug;
            axios.get(`http://localhost:8000/client/products/${slug}`)
                .then(response => {
                    this.loading = false;
                    if (response.data) {
                        this.product = response.data;
                    } else {
                        this.error = 'Product not found';
                        console.error('Product not found');
                    }
                })
                .catch(error => {
                    // Handle errors such as 404s here
                    this.error = 'There was an error fetching the product: ' + error.response.data.message;
                    console.error('There was an error fetching the product:', error.response.data.message);
                    this.loading = false;
                    this.$router.push({ name: 'NotFound' });
                });
        }
    }
}

</script>
  


<style scoped>
/* loading wheel */

.product-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3); 
  border-top: 4px solid hsl(26, 100%, 55%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


.product-loading{
    margin: auto;
}
.page-container {
    margin-left: 15vw;
    margin-right: 15vw;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    height: 100vh;
}

.hide {
  display: none;
}
.product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    align-items: center; 
}
@media (max-width: 1024px) {
.page-container{
    margin-left: 5vw;
    margin-right: 5vw;
}
}
@media (max-width: 768px) {
    .page-container{
        margin-left: unset;
        margin-right: unset;
        justify-content: unset;
        height: unset;
    }
    .product-container {
     
        width: 100%;
        flex-direction: column;
        align-content: center;
        align-items: flex-start;
    }
}
</style>