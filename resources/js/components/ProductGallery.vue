<template>
    <div class="product-gallery-container">
      <!-- Enlarged image -->
       <div class="product-image-enlarged-wrapper">
      <img class="product-image-enlarged" :src="enlargedImage" alt="Enlarged Product Image">
    </div>
      <!-- Standard thumbnail container visible on non-mobile devices -->
      <div class="thumbnail-container">
    
          <div v-for="(image, index) in product.data.images" :key="index" class="thumbnail-wrapper" :class="{ 'selected-thumbnail': index === selectedThumbnailIndex }" @click="selectImage(image, index)">
              <img :src="image" alt="Product Image" class="thumbnail-image">
            </div>
        
        </div>
        
        <!-- Mobile-only navigation container -->
        <div class="mobile-navigation">
            <button id='previous-button' class="nav-button" @click="previousImage"><div><img :src="previousIcon" alt="Previous Icon"/></div></button>
            <button id='next-button' class="nav-button" @click="nextImage"><div><img :src="nextIcon" alt="Next Icon"/></div></button>
       
        </div>
    </div>
  </template>
  
  <script>
  import PreviousIcon from '../../../public/images/icon-previous.svg';
  import NextIcon from '../../../public/images/icon-next.svg';
  
  export default {
    name: 'ProductGallery',
    props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      enlargedImage: this.product.data.images[0],
      selectedThumbnailIndex: 0,
      previousIcon:PreviousIcon,
      nextIcon: NextIcon
    };
  },
  methods: {
    selectImage(image, index) {
      this.enlargedImage = image;
      this.selectedThumbnailIndex = index;
    },
    nextImage() {
      if (this.selectedThumbnailIndex < this.product.data.images.length - 1) {
        this.selectImage(this.product.data.images[this.selectedThumbnailIndex + 1], this.selectedThumbnailIndex + 1);
      }
    },
    previousImage() {
      if (this.selectedThumbnailIndex > 0) {
        this.selectImage(this.product.data.images[this.selectedThumbnailIndex - 1], this.selectedThumbnailIndex - 1);
      }
    }
  }
}
</script>
  
  <style scoped lang="scss">
    $enlargedImageWidth: 450px; //Enlarged image size
    $thumbnailsPerView: 4; //Images per thumbnail carousel
    $thumbnailMargin: 1rem; //margin between thumbnail base size (static base)

    /* bellow calculates the margin between images. 
    
    With default $thumbnailsPerView and $thumbnailMargin set $spaceBetweenThumbnail = 0.75
    (4 - 1) * (4 / 3) = 0.75
    
    3 * 0.25 = 

    0.75rem margin between each item

    */
    $spaceBetweenThumbnail: calc(($thumbnailsPerView - 1) * ($thumbnailMargin / $thumbnailsPerView)); 
    
    .product-gallery-container {
      display: flex;
      flex-direction: column;
    }
    .product-image-enlarged {
      width: $enlargedImageWidth;
      height: auto;
      border-radius: 1rem;
      margin-bottom: 1.2rem;
    }

    .thumbnail-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: $enlargedImageWidth;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
        
        /*horizontal scroll */
        overflow-x: auto;   // Initially hide horizontal scrolling
        overflow-y:hidden; // no vertical scrolling
        -ms-overflow-style: none; // IE and Edge
        scrollbar-width: none; // Firefox
        &::-webkit-scrollbar {
            display: none; // Hide scrollbar for WebKit browsers by default
        }
        
}
.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center; 
  transition: opacity 0.3s ease;
}


.thumbnail-wrapper {
  flex-shrink: 0;
  box-sizing: border-box;
  width: calc(($enlargedImageWidth / $thumbnailsPerView) - $spaceBetweenThumbnail);
  height: auto;
  margin-right: $thumbnailMargin;
  border: 3px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  &:last-child {
    margin-right: 0;
  }
}

.thumbnail-image {
  margin: 0; 
  padding: 0; 
  display: block; 
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.selected-thumbnail {
  border-color: hsl(26, 100%, 55%); 

  .thumbnail-image {
    opacity: 0.4; 
  }
}

/* Mobile-only navigation styling */
.mobile-navigation {
    display: none; 
  }

@media (max-width: 768px) {
    .thumbnail-container {
        display: none; 
    }
    .mobile-navigation {
        position: absolute;
        top: 30vh;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .nav-button{
        border-radius: 180px;
        border: none;
        width: 40px;
        height: 40px;
        margin: .5rem;
    }
    .nav-button div{
        display: flex;
        justify-content: center;
    }
    
    .product-image-enlarged{
        border-radius: unset;
        width: unset;
        margin-bottom: 0rem;
    }
    .mobile-navigation {
        top:15vh;
    }
    .product-image-enlarged-wrapper{
        max-height: 600px;
        overflow: hidden;
    }

}

@media (max-width: 375px) {
    .product-image-enlarged-wrapper{
        max-height: 200px;
    }
    .product-image-enlarged{
        transform: translateY(-20%);
    }
  }
  </style>
  