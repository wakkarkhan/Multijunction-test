<template>
  <div>
    <b-form-radio-group
      v-model="value"
      :options="options"
      :state="state"
      class="demo-inline-spacing"
      name="radio-validation"
    >
      <b-form-invalid-feedback :state="state">
        Please select one
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">
        Thank you
      </b-form-valid-feedback>
    </b-form-radio-group>
  </div>
</template>

<script>
import {
  BFormRadioGroup, BFormInvalidFeedback, BFormValidFeedback, BCardCode,
} from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BCardCode,
  },
  data() {
    return {
      value: null,
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' },
      ],
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
    },
  },
}
</script>
