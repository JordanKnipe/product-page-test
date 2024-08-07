import { mount } from '@vue/test-utils';
import ProductDetails from '@/components/ProductDetails.vue';
import { shallowMount } from '@vue/test-utils';
import ProductButtons from '@/components/ProductButtons.vue'; // Adjust path as necessary


describe('ProductDetails.vue', () => {
  it('has product description rendered', async () => {
    const product = {
      data: {
        name: "Fall Limited Edition Sneakers",
        description: "High-quality sneakers for fall.",
        price: { full: 250, discounted: 125 }
      }
    };

    const wrapper = mount(ProductDetails, {
      props: { product }
    });

    const bodyText = wrapper.find('.product-description-text');
    expect(bodyText.exists()).toBe(true);
    expect(bodyText.text()).toContain("High-quality sneakers for fall.");
  });
});

describe('ProductDetails.vue', () => {
  it('has product title rendered', async () => {
    const product = {
      data: {
        name: "Fall Limited Edition Sneakers",
        description: "High-quality sneakers for fall.",
        price: { full: 250, discounted: 125 }
      }
    };

    const wrapper = mount(ProductDetails, {
      props: { product }
    });

    const titleText = wrapper.find('.product-title-text');
    expect(titleText.exists()).toBe(true);
    expect(titleText.text()).toContain("Fall Limited Edition Sneakers");
  });
});
describe('ProductDetails.vue', () => {
  it('has product pricerendered', async () => {
    const product = {
      data: {
        name: "Fall Limited Edition Sneakers",
        description: "High-quality sneakers for fall.",
        price: { full: 250, discounted: 125 }
      }
    };

    const wrapper = mount(ProductDetails, {
      props: { product }
    });

    const bodyText = wrapper.find('.product-price-text');
    expect(bodyText.exists()).toBe(true);
    expect(bodyText.text()).toContain("$125");
  });
});

describe('ProductDetails.vue', () => {
  it('renders correctly with given product', () => {
    const product = {
      data: {
        name: "Fall Limited Edition Sneakers",
        description: "High-quality sneakers for fall.",
        price: { full: 250, discounted: 125 }
      }
    };

    const wrapper = mount(ProductDetails, {
      props: { product }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('ProductDetails.vue', () => {
  it('emits an "addToCart" event when the add button is clicked', async () => {
    const product = {
      data: {
        name: "Fall Limited Edition Sneakers",
        description: "High-quality sneakers for fall.",
        price: { full: 250, discounted: 125 }
      }
    };

    const wrapper = shallowMount(ProductButtons, {
      propsData: { product }
    });

    wrapper.setData({ quantity: 1 });
    await wrapper.find('.product-add-to-cart-button').trigger('click');
    expect(wrapper.emitted('addToCart')[0]).toEqual([
      { product, quantity: 1 }
    ]);
  });
});


  describe('ProductDetails.vue', () => {
    it('updates content when props change', async () => {
      const product = {
        data: {
          name: "Old Sneakers",
          description: "Old sneakers for sale.",
          price: { full: 100, discounted: 50 }
        }
      };

      const wrapper = mount(ProductDetails, {
        props: { product }
      });

      expect(wrapper.find('.product-title-text').text()).toContain("Old Sneakers");

      await wrapper.setProps({
        product: {
          data: {
            name: "New Sneakers",
            description: "Brand new sneakers.",
            price: { full: 300 }
          }
        }
      });

      expect(wrapper.find('.product-description-text').text()).toContain("new sneakers");
    
    });
  });
