"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/images/icon-minus.svg */ "./public/images/icon-minus.svg");
/* harmony import */ var _public_images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/images/icon-plus.svg */ "./public/images/icon-plus.svg");
/* harmony import */ var _public_images_icon_cart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/images/icon-cart.svg */ "./public/images/icon-cart.svg");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductButtons',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      quantity: 0,
      minusIcon: _public_images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
      plusIcon: _public_images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      cartIcon: _public_images_icon_cart_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  methods: {
    increment: function increment() {
      this.quantity++;
    },
    decrement: function decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    addToCart: function addToCart() {
      if (this.quantity > 0) {
        console.log("Emitting Event 'addToCart'");
        this.$emit('addToCart', {
          product: this.product,
          quantity: this.quantity
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductButtons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductButtons.vue */ "./resources/js/components/ProductButtons.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductDetails',
  components: {
    ProductButtons: _ProductButtons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    discountedPercent: function discountedPercent() {
      // Ensure the discounted price percentage is available
      if (!this.product.data.price.discounted) {
        return 0;
      }
      var discountPercent = this.product.data.price.discounted / this.product.data.price.full * 100;
      return discountPercent;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_images_icon_previous_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/images/icon-previous.svg */ "./public/images/icon-previous.svg");
/* harmony import */ var _public_images_icon_next_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/images/icon-next.svg */ "./public/images/icon-next.svg");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductGallery',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      enlargedImage: this.product.data.images[0],
      selectedThumbnailIndex: 0,
      previousIcon: _public_images_icon_previous_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
      nextIcon: _public_images_icon_next_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  methods: {
    selectImage: function selectImage(image, index) {
      this.enlargedImage = image;
      this.selectedThumbnailIndex = index;
    },
    nextImage: function nextImage() {
      if (this.selectedThumbnailIndex < this.product.data.images.length - 1) {
        this.selectImage(this.product.data.images[this.selectedThumbnailIndex + 1], this.selectedThumbnailIndex + 1);
      }
    },
    previousImage: function previousImage() {
      if (this.selectedThumbnailIndex > 0) {
        this.selectImage(this.product.data.images[this.selectedThumbnailIndex - 1], this.selectedThumbnailIndex - 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductDetails_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductDetails.vue */ "./resources/js/components/ProductDetails.vue");
/* harmony import */ var _components_ProductGallery_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductGallery.vue */ "./resources/js/components/ProductGallery.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductPage',
  components: {
    ProductDetails: _components_ProductDetails_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductGallery: _components_ProductGallery_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      product: null,
      loading: true
    };
  },
  mounted: function mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct: function fetchProduct() {
      var _this = this;
      // Using the slug from the route params
      var slug = this.$route.params.slug;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8000/client/products/".concat(slug)).then(function (response) {
        _this.loading = false;
        if (response.data) {
          _this.product = response.data;
        } else {
          _this.error = 'Product not found';
          console.error('Product not found');
        }
      })["catch"](function (error) {
        // Handle errors such as 404s here
        _this.error = 'There was an error fetching the product: ' + error.response.data.message;
        console.error('There was an error fetching the product:', error.response.data.message);
        _this.loading = false;
        _this.$router.push({
          name: 'NotFound'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2da97c86"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "product-button-container"
};
var _hoisted_2 = {
  "class": "quantity-selector"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = ["src"];
var _hoisted_5 = ["src"];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add to cart");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Quantity Selector "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "product-button-decrement",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.decrement && $options.decrement.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.minusIcon,
    alt: "Minus Icon"
  }, null, 8 /* PROPS */, _hoisted_3)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.quantity = $event;
    }),
    readonly: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quantity]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "product-button-increment",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.increment && $options.increment.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.plusIcon,
    alt: "Plus Icon"
  }, null, 8 /* PROPS */, _hoisted_4)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add to Cart Button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "product-add-to-cart-button",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.addToCart && $options.addToCart.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.cartIcon,
    alt: "Cart Icon"
  }, null, 8 /* PROPS */, _hoisted_5), _hoisted_6])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=template&id=504fa804&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=template&id=504fa804&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-504fa804"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "product-details-container"
};
var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "mobile-product-company-title"
  }, "SNEAKER COMPANY", -1 /* HOISTED */);
});
var _hoisted_3 = {
  "class": "product-title-text"
};
var _hoisted_4 = {
  "class": "product-description-text"
};
var _hoisted_5 = {
  "class": "price-container"
};
var _hoisted_6 = {
  key: 0,
  "class": "product-discounted-container"
};
var _hoisted_7 = {
  "class": "current-price-container"
};
var _hoisted_8 = {
  "class": "product-price-text"
};
var _hoisted_9 = {
  "class": "discount-tag"
};
var _hoisted_10 = {
  "class": "product-discount-text"
};
var _hoisted_11 = {
  "class": "product-price-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ProductButtons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProductButtons");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.data.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.data.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Conditionally show the discounted price "), $props.product.data.price.discounted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_8, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.data.price.discounted.toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.discountedPercent) + "%", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.data.price.full.toFixed(2)), 1 /* TEXT */)])) : $props.product.data.price.discounted || $props.product.data.price.discounted == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Show this div if there is no discount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_11, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.data.price.full.toFixed(2)), 1 /* TEXT */)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProductButtons, {
    "class": "button-component",
    product: $props.product
  }, null, 8 /* PROPS */, ["product"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5e3aade4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "product-gallery-container"
};
var _hoisted_2 = {
  "class": "product-image-enlarged-wrapper"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "thumbnail-container"
};
var _hoisted_5 = ["onClick"];
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "mobile-navigation"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Enlarged image "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "product-image-enlarged",
    src: $data.enlargedImage,
    alt: "Enlarged Product Image"
  }, null, 8 /* PROPS */, _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Standard thumbnail container visible on non-mobile devices "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.product.data.images, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["thumbnail-wrapper", {
        'selected-thumbnail': index === $data.selectedThumbnailIndex
      }]),
      onClick: function onClick($event) {
        return $options.selectImage(image, index);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: image,
      alt: "Product Image",
      "class": "thumbnail-image"
    }, null, 8 /* PROPS */, _hoisted_6)], 10 /* CLASS, PROPS */, _hoisted_5);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Mobile-only navigation container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "previous-button",
    "class": "nav-button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.previousImage && $options.previousImage.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.previousIcon,
    alt: "Previous Icon"
  }, null, 8 /* PROPS */, _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "next-button",
    "class": "nav-button",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.nextImage && $options.nextImage.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.nextIcon,
    alt: "Next Icon"
  }, null, 8 /* PROPS */, _hoisted_9)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7b8d5cc0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0,
  "class": "page-container"
};
var _hoisted_2 = {
  "class": "product-container"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "spinner"
  }, null, -1 /* HOISTED */);
});
var _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ProductGallery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProductGallery");
  var _component_ProductDetails = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProductDetails");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProductGallery, {
    product: $data.product
  }, null, 8 /* PROPS */, ["product"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProductDetails, {
    product: $data.product
  }, null, 8 /* PROPS */, ["product"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["product-loading", {
      'hide': !$data.loading
    }])
  }, _hoisted_4, 2 /* CLASS */)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* bellow calculates the margin between images. \n\nWith default $thumbnailsPerView and $thumbnailMargin set $spaceBetweenThumbnail = 0.75\n(4 - 1) * (4 / 3) = 0.75\n\n3 * 0.25 = \n\n0.75rem margin between each item\n\n*/\n.product-gallery-container[data-v-5e3aade4] {\n  display: flex;\n  flex-direction: column;\n}\n.product-image-enlarged[data-v-5e3aade4] {\n  width: 450px;\n  height: auto;\n  border-radius: 1rem;\n  margin-bottom: 1.2rem;\n}\n.thumbnail-container[data-v-5e3aade4] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 450px;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  /*horizontal scroll */\n  overflow-x: auto;\n  overflow-y: hidden;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.thumbnail-container[data-v-5e3aade4]::-webkit-scrollbar {\n  display: none;\n}\n.thumbnail-image[data-v-5e3aade4] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  transition: opacity 0.3s ease;\n}\n.thumbnail-wrapper[data-v-5e3aade4] {\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: calc(112.5px - 0.75rem);\n  height: auto;\n  margin-right: 1rem;\n  border: 3px solid transparent;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.thumbnail-wrapper[data-v-5e3aade4]:last-child {\n  margin-right: 0;\n}\n.thumbnail-image[data-v-5e3aade4] {\n  margin: 0;\n  padding: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.selected-thumbnail[data-v-5e3aade4] {\n  border-color: hsl(26, 100%, 55%);\n}\n.selected-thumbnail .thumbnail-image[data-v-5e3aade4] {\n  opacity: 0.4;\n}\n\n/* Mobile-only navigation styling */\n.mobile-navigation[data-v-5e3aade4] {\n  display: none;\n}\n@media (max-width: 768px) {\n.thumbnail-container[data-v-5e3aade4] {\n    display: none;\n}\n.mobile-navigation[data-v-5e3aade4] {\n    position: absolute;\n    top: 30vh;\n    left: 0;\n    right: 0;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n.nav-button[data-v-5e3aade4] {\n    border-radius: 180px;\n    border: none;\n    width: 40px;\n    height: 40px;\n    margin: 0.5rem;\n}\n.nav-button div[data-v-5e3aade4] {\n    display: flex;\n    justify-content: center;\n}\n.product-image-enlarged[data-v-5e3aade4] {\n    border-radius: unset;\n    width: unset;\n    margin-bottom: 0rem;\n}\n.mobile-navigation[data-v-5e3aade4] {\n    top: 15vh;\n}\n.product-image-enlarged-wrapper[data-v-5e3aade4] {\n    max-height: 600px;\n    overflow: hidden;\n}\n}\n@media (max-width: 375px) {\n.product-image-enlarged-wrapper[data-v-5e3aade4] {\n    max-height: 200px;\n}\n.product-image-enlarged[data-v-5e3aade4] {\n    transform: translateY(-20%);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#product-button-decrement[data-v-2da97c86]{\r\n    border-radius: .5rem 0 0 .5rem;\n}\n#product-button-increment[data-v-2da97c86]{\r\n    border-radius: 0 .5rem .5rem 0;\n}\n.quantity-selector button[data-v-2da97c86], .quantity-selector input[data-v-2da97c86] {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    background-color: hsl(223, 64%, 98%);\r\n    text-align: center;\r\n    vertical-align: middle;\n}\r\n/* vertical centering was slightly off with svg sizes */\n.quantity-selector button div[data-v-2da97c86]{\r\n    display: flex;\r\n    justify-content: center;\n}\n.quantity-selector input[data-v-2da97c86] {\r\n    max-width: 50px; \r\n    text-align: center;\r\n    color: black;\r\n    font-weight: 600;\r\n    font-size: 16px;\n}\n.product-add-to-cart-button[data-v-2da97c86] {\r\n    background-color: hsl(26, 100%, 55%);\r\n    color:  hsl(0, 0%, 100%);\r\n    border: none;\r\n    height: 50px;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n    border-radius: .5rem;\r\n    width: 60%;\r\n    box-shadow: 0px 8px 12px 10px hsl(25, 100%, 94%)\n}\n.product-add-to-cart-button div[data-v-2da97c86]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n    gap:10px\n}\n.product-add-to-cart-button img[data-v-2da97c86]{\r\n    filter: brightness(0) invert(1) saturate(0%);\n}\n.product-button-container[data-v-2da97c86] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n    width: 100%;\n}\nbutton[data-v-2da97c86] {\r\n    cursor: pointer;\n}\n@media (max-width: 1200px) {\n.product-button-container[data-v-2da97c86] {\r\n        flex-wrap: wrap;\n}\n}\n@media (max-width: 768px) {\n.quantity-selector[data-v-2da97c86]{\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: center;\n}\n.quantity-selector input[data-v-2da97c86]{\r\n            max-width: unset;\r\n            width: unset;\n}\n.product-add-to-cart-button[data-v-2da97c86]{\r\n            width: 100%;\n}\n}\n@media (max-width: 375px) {\n.quantity-selector[data-v-2da97c86]{\r\n            width: 100%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: center;\n}\n.quantity-selector input[data-v-2da97c86]{\r\n            max-width: unset;\r\n            width: unset;\n}\n.product-add-to-cart-button[data-v-2da97c86]{\r\n            width: 100%;\n}\n.product-button-container[data-v-2da97c86]{\r\n            margin-top: 1rem;\n}\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.product-title-text[data-v-504fa804]{\r\n  font-size: 44px\n}\n.product-description-text[data-v-504fa804] {\r\n \r\n  font-size: 16px;\r\n  line-height: 1.6;\r\n  \r\n  color: hsl(0, 0%, 40%);\r\n  font-weight: 500;\n}\n.current-price-container[data-v-504fa804]{\r\n  display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\n}\n.product-price-text[data-v-504fa804]{\r\n  font-size: 26px;\r\n  font-weight: 800;\r\n  margin-top: .5rem;\r\n  margin-bottom: .5rem;\n}\n.discount-tag[data-v-504fa804]{\r\n  margin: 1rem;\r\n  padding: .25rem;\r\n  padding-left: .5rem;\r\n  padding-right: .5rem;\r\n  background-color: hsl(25, 100%, 94%);\r\n  color: hsl(26, 100%, 55%);\r\n  border-radius: .5rem;\r\n  font-weight: 600;\n}\n.product-discount-text[data-v-504fa804]{\r\n  margin: 0;\r\n  color: hsl(0, 0%, 80%);\r\n  font-weight: 600;\r\n  text-decoration:line-through;\n}\n.product-details-container[data-v-504fa804]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 6rem;\r\n  height: 100%;\n}\n.price-container[data-v-504fa804]{\r\n  margin-bottom: 2.5rem;\n}\n.mobile-product-company-title[data-v-504fa804]{\r\n    display: none;\n}\n@media (max-width: 1024px) {\n.product-details-container[data-v-504fa804]{\r\n  margin-left: 5vw;\n}\n}\n@media (max-width: 768px) {\n.product-details-container[data-v-504fa804]{\r\n    margin-left:10vw;\r\n    margin-right: 10vw;\r\n    margin-top: 1vh;\n}\n.product-title-text[data-v-504fa804] {\r\n    font-size: 28px;\r\n    margin-top: 0.5rem;\r\n      margin-bottom: 0.5rem;\n}\n.product-description-text[data-v-504fa804]{\r\n      margin-top: 0.5rem;\r\n      margin-bottom: 0.5rem;\n}\n.price-container[data-v-504fa804]{\r\n    margin-bottom: .5rem;\n}\n.mobile-product-company-title[data-v-504fa804]{\r\n    display: block;\r\n    font-size: 12px;\r\n    color: hsl(26, 100%, 55%);\r\n    margin: unset;\n}\n}\n@media (max-width: 375px) {\n.product-details-container[data-v-504fa804]{\r\n    margin-left:6vw;\r\n    margin-right: 6vw;\r\n    margin-top: 3vh;\n}\n.product-title-text[data-v-504fa804] {\r\n    font-size: 28px;\n}\n.price-container[data-v-504fa804]{\r\n    margin-bottom: 0;\n}\n.price-container div[data-v-504fa804]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\n}\n.product-title-text[data-v-504fa804]{\r\n  margin-top: .5rem;\r\n  margin-bottom: .5rem;\n}\n.product-description-text[data-v-504fa804]{\r\n  margin-top: .5rem;\r\n  margin-bottom: .5rem;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* loading wheel */\n.product-loading[data-v-7b8d5cc0] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100%;\n}\n.spinner[data-v-7b8d5cc0] {\r\n  border: 4px solid rgba(255, 255, 255, 0.3); \r\n  border-top: 4px solid hsl(26, 100%, 55%);\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  animation: spin-7b8d5cc0 1s linear infinite;\n}\n@keyframes spin-7b8d5cc0 {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n.product-loading[data-v-7b8d5cc0]{\r\n    margin: auto;\n}\n.page-container[data-v-7b8d5cc0] {\r\n    margin-left: 15vw;\r\n    margin-right: 15vw;\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center; \r\n    height: 100vh;\n}\n.hide[data-v-7b8d5cc0] {\r\n  display: none;\n}\n.product-container[data-v-7b8d5cc0] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    align-items: center;\n}\n@media (max-width: 1024px) {\n.page-container[data-v-7b8d5cc0]{\r\n    margin-left: 5vw;\r\n    margin-right: 5vw;\n}\n}\n@media (max-width: 768px) {\n.page-container[data-v-7b8d5cc0]{\r\n        margin-left: unset;\r\n        margin-right: unset;\r\n        justify-content: unset;\r\n        height: unset;\n}\n.product-container[data-v-7b8d5cc0] {\r\n     \r\n        width: 100%;\r\n        flex-direction: column;\r\n        align-content: center;\r\n        align-items: flex-start;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/images/icon-cart.svg":
/*!*************************************!*\
  !*** ./public/images/icon-cart.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-cart.svg?539ec608f50e707c94d583ec11acf99d");

/***/ }),

/***/ "./public/images/icon-minus.svg":
/*!**************************************!*\
  !*** ./public/images/icon-minus.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-minus.svg?f5073aa8273785ecf6b7811630782736");

/***/ }),

/***/ "./public/images/icon-next.svg":
/*!*************************************!*\
  !*** ./public/images/icon-next.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-next.svg?9621183a551a9985b4bd7536c9a69c66");

/***/ }),

/***/ "./public/images/icon-plus.svg":
/*!*************************************!*\
  !*** ./public/images/icon-plus.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-plus.svg?b297868c5f938612f4f099f9f9d73aea");

/***/ }),

/***/ "./public/images/icon-previous.svg":
/*!*****************************************!*\
  !*** ./public/images/icon-previous.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-previous.svg?80616402c611cc0a6651d0b751da8a9b");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_style_index_0_id_5e3aade4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_style_index_0_id_5e3aade4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_style_index_0_id_5e3aade4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_style_index_0_id_2da97c86_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_style_index_0_id_2da97c86_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_style_index_0_id_2da97c86_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_style_index_0_id_504fa804_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_style_index_0_id_504fa804_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_style_index_0_id_504fa804_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/ProductButtons.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ProductButtons.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductButtons_vue_vue_type_template_id_2da97c86_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true */ "./resources/js/components/ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true");
/* harmony import */ var _ProductButtons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductButtons.vue?vue&type=script&lang=js */ "./resources/js/components/ProductButtons.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductButtons_vue_vue_type_style_index_0_id_2da97c86_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css */ "./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProductButtons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductButtons_vue_vue_type_template_id_2da97c86_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2da97c86"],['__file',"resources/js/components/ProductButtons.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ProductDetails.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ProductDetails.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetails_vue_vue_type_template_id_504fa804_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=template&id=504fa804&scoped=true */ "./resources/js/components/ProductDetails.vue?vue&type=template&id=504fa804&scoped=true");
/* harmony import */ var _ProductDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=script&lang=js */ "./resources/js/components/ProductDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductDetails_vue_vue_type_style_index_0_id_504fa804_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css */ "./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProductDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductDetails_vue_vue_type_template_id_504fa804_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-504fa804"],['__file',"resources/js/components/ProductDetails.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ProductGallery.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ProductGallery.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductGallery_vue_vue_type_template_id_5e3aade4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true */ "./resources/js/components/ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true");
/* harmony import */ var _ProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductGallery.vue?vue&type=script&lang=js */ "./resources/js/components/ProductGallery.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductGallery_vue_vue_type_style_index_0_id_5e3aade4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss */ "./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductGallery_vue_vue_type_template_id_5e3aade4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5e3aade4"],['__file',"resources/js/components/ProductGallery.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Product.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0&scoped=true */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true");
/* harmony import */ var _Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js */ "./resources/js/views/Product.vue?vue&type=script&lang=js");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7b8d5cc0"],['__file',"resources/js/views/Product.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ProductButtons.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ProductButtons.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductButtons.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ProductDetails.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ProductDetails.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ProductGallery.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ProductGallery.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductGallery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_template_id_2da97c86_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_template_id_2da97c86_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=template&id=2da97c86&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProductDetails.vue?vue&type=template&id=504fa804&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ProductDetails.vue?vue&type=template&id=504fa804&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_template_id_504fa804_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_template_id_504fa804_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetails.vue?vue&type=template&id=504fa804&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=template&id=504fa804&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_template_id_5e3aade4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_template_id_5e3aade4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=template&id=5e3aade4&scoped=true");


/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=template&id=7b8d5cc0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductGallery_vue_vue_type_style_index_0_id_5e3aade4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductGallery.vue?vue&type=style&index=0&id=5e3aade4&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductButtons_vue_vue_type_style_index_0_id_2da97c86_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductButtons.vue?vue&type=style&index=0&id=2da97c86&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetails_vue_vue_type_style_index_0_id_504fa804_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProductDetails.vue?vue&type=style&index=0&id=504fa804&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");


/***/ })

}]);