<template>
  <div class="container-fluid testimonial-group">
    <basic-form
      :product-id="userData.product_id"
      class="mb-2"
      @basicFormData="basicFormSubmit"
    />
    <product-dimention
      :product-id="userData.product_id"
      class="mb-2"
    />
    <product-category
      class="mb-2"
      @updateAttributes="updateAttributes"
      @updateCategoryId="updateCategoryId"
    />
    <product-video
      :product-id="userData.product_id"
      class="mb-2"
    />
    <product-images
      :product-id="userData.product_id"
      class="mb-2"
    />

    <custom-field-views
      :fields="fields"
      :product-id="userData.product_id"
      :category-id="userData.category_id"
    />

    <product-variations
      :product-id="userData.product_id"
      :attributes="attributes"
      product-title='p-title'
    />
    <!-- <product-price-stock
      :product-id="userData.product_id"
      :products="variationProducts"
    /> -->
  </div>
</template>

<script>
// import {

// } from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import productStoreModule from '../productStoreModule'
import useProductList from '../useProductList'
import customFieldViews from './customFieldViews.vue'
import productImages from './productImages.vue'
import basicForm from './basicForm.vue'
import productDimention from './productDimention.vue'
import productVideo from './productVideo.vue'
import productVariations from './productVariations.vue'
import productCategory from './productCategory.vue'

export default {
  components: {
    customFieldViews,
    productImages,
    basicForm,
    productDimention,
    productVideo,
    productVariations,
    productCategory,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      required,
      alphaNum,
      email,
    }
  },
  computed: {
    fields() {
      return store.state.adminProduct.fields
    },
  },
  methods: {
    basicFormSubmit(productId) {
      this.userData.product_id = productId
    },
    updateAttributes(attributes) {
      this.attributes = attributes
    },
    updateCategoryId(categoryId) {
      this.userData.category_id = categoryId
    },
  },
  setup() {
    const grandParent = ref(null)
    const dropDownSellector = ref([])
    const attributes = ref([])
    // index of the custom field card
    const USER_APP_STORE_MODULE_NAME = 'adminProduct'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, productStoreModule)
    const { categorychildRequest, subChilds, searchCategory } = useProductList()
    // UnRegister on leave
    // onMounted(() => {
    //   store.dispatch('adminProduct/getParentCategory')
    // })
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })
    const blankUserData = {
      product_id: 0,
      category_id: 0,
      fields: [],
      sumitedField: [],
    }
    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetuserData,
    )
    const statusOptions = ref([
      { value: '1', label: 'Enabled' },
      { value: '0', label: 'Disabled' },
    ])

    return {
      userData,
      refFormObserver,
      getValidationState,
      resetForm,
      statusOptions,
      subChilds,
      categorychildRequest,
      searchCategory,
      grandParent,
      dropDownSellector,
      attributes,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>

<style scoped>
.sidebar li {
  padding: 6px;
}

.sidebar li:hover {
  background: #0071ce;
  color: white;
}

.scroll {
  max-height: 350px;
  overflow-y: auto;
}

.search {
  position: sticky; /* The magic */
  z-index: 1; /* Ensure it stays on top of other player divs */
  top: 0px; /* Where it should stick to */
}

.card-block {
  height: 300px;
}

.cursor {
  cursor: pointer;
}

.selectedlist {
  background-color: lightgreen;
}
.breadcrumbs {
  font-weight: bolder;
  font-size: 17px;
}
.lists {
  cursor: pointer;
}
</style>
