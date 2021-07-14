/* eslint-disable vue/no-unused-vars */
<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Header Setting</h4>
              <hr>
              <!-- BODY -->
              <validation-observer
                ref="header"
              >
                <b-form @submit.prevent>
                  <b-row>
                    <b-col cols="12">
                      <!-- logo -->
                      <b-form-group
                        label="Header Logo"
                        label-for="data.header_logo"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Footer Logo"
                          rules="required"
                        >
                          <b-form-file
                            id="image4"
                            v-model="file4.file"
                            :state="errors.length > 0 ? false : null"
                            class="file"
                            @change="previewImage($event, file4)"
                          />
                          <b-card
                            v-if="file4.src === ''"
                            class="border pl-0 pr-0 upload pointer"
                            @click="chooseFile('image4')"
                          >
                            <div class="text-center mt-2">
                              <feather-icon
                                icon="CameraIcon"
                                size="25"
                              /><br>
                              <span>Upload Image4</span>
                            </div>
                          </b-card>
                          <div
                            v-else
                            class="btnRemover"
                          >
                            <b-button-close
                              v-wave="{
                                color: 'red',
                                easing: 'ease-out',
                                duration: 0.4,
                                initialOpacity: 0.3,
                                finalOpacity: 0.4,
                                cancellationPeriod: 75,
                              }"
                              class="remover"
                              @click="removeImage(file4)"
                            />
                            <b-img
                              class="img-thumbnail imgs imges p-0"
                              :src="file4.src"
                              size="25"
                            />
                          </div>
                          <small class="text-danger">{{
                            errors[0]
                          }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
                      <b-form-group
                        label="Show Language Switcher ?"
                        label-for="h-refundable"
                        label-cols-md="4"
                      >
                        <div class="custom-control custom-switch">
                          <input
                            id="customSwitch2"
                            v-model="data.show_language_switcher"
                            type="checkbox"
                            class="custom-control-input"
                          >
                          <label
                            class="custom-control-label"
                            for="customSwitch2"
                          />
                        </div>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
                      <b-form-group
                        label="Show Currency Switcher?"
                        label-for="currency"
                        label-cols-md="4"
                      >
                        <div class="custom-control custom-switch">
                          <input
                            id="customSwitch3"
                            v-model="data.show_currency_switcher"
                            type="checkbox"
                            class="custom-control-input"
                          >
                          <label
                            class="custom-control-label"
                            for="customSwitch3"
                          />
                        </div>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
                      <b-form-group
                        label="Enable sticky header?"
                        label-for="sticky"
                        label-cols-md="4"
                      >
                        <div class="custom-control custom-switch">
                          <input
                            id="customSwitch4"
                            v-model="data.header_stikcy"
                            type="checkbox"
                            class="custom-control-input"
                          >
                          <label
                            class="custom-control-label"
                            for="customSwitch4"
                          />
                        </div>
                      </b-form-group>
                      <hr>
                    </b-col>
                    <b-col cols="12">
                      <h5>Header Nav Menu</h5>
                      <!--  menue row -->
                      <b-row
                        v-for="(menu, index) in data.header_menu"
                        :key="index"
                        class="mb-1"
                      >
                        <b-col cols="4">
                          <b-form-input
                            v-model="menu.label"
                            placeholder="Label"
                          />
                        </b-col>
                        <b-col cols="7">
                          <b-form-input
                            v-model="menu.value"
                            placeholder="Daily Deals"
                          />
                        </b-col>
                        <b-col cols="1">
                          <b-button
                            variant="outline-danger"
                            class="btn-icon rounded-circle"
                            @click="removeMenu(index)"
                          >
                            <feather-icon icon="XIcon" />
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-button
                        variant="primary"
                        class="float-right"
                        @click="submit('header')"
                      >
                        Update
                      </b-button>
                      <b-button
                        variant="primary"
                        class="float-lef"
                        @click="addMenu"
                      >
                        add Menu
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </validation-observer>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BFormFile,
  BButton,
  // BFormInvalidFeedback,
  // BBadge,
  BImg,
  BButtonClose,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { required } from '@validations'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BCard,
    BRow,
    BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButtonClose,
    // BFormTextarea,
    // vSelect,
    BFormFile,
    ValidationProvider,
    ValidationObserver,
    // BFormInvalidFeedback,
    // BBadge,
    BImg,
  },
  data() {
    return {
      required,
      // primary: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      // file1: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      // file2: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      file3: {
        file: [],
        src: '',
        loading: false,
      },
      file4: {
        file: [],
        src: '',
        loading: false,
      },
    }
  },
  mounted() {
    // form refs
    this.updateFields('header')
  },
  methods: {
    // chooseFile(imageId) {
    //   document.getElementById(imageId).click()
    // },
    previewImage(event, primary) {
      const file = event.target.files[0]
      const imbObj = primary
      imbObj.file = file
      const fileReader = new FileReader()
      fileReader.readAsDataURL(imbObj.file)
      fileReader.addEventListener('load', () => {
        imbObj.src = fileReader.result
      })
    },
    removeImage(fileObject) {
      // eslint-disable-next-line no-param-reassign
      fileObject.file = []
      // eslint-disable-next-line no-param-reassign
      fileObject.src = ''
    },

    // form refs
    submit(module) {
      this.$refs[module].validate().then(success => {
        if (success) {
          const submitedData = this.convertObjectInfoFormData(this.data)
          submitedData.set('header_menu', JSON.stringify(this.data.header_menu))
          submitedData.set('header_logo', this.data.header_logo.file)
          this.$http.post(`/admin/website/${module}`, submitedData).then(response => {
            const { data } = response
            if (data.status) {
              this.successAlert(data.message)
            } else {
              this.errorAlert(data.message)
            }
          })
            .catch(error => {
              this.toastDanger('There is a Error in Your Product Information Form')
              this.$refs.refFormObserver.setErrors(error.response.data.errors)
            })
        }
      })
    },
    removeMenu(index) {
      this.data.header_menu.splice(index, 1)
      this.toastSuccess('Menu removed form list successfyll!')
    },
    addMenu() {
      this.data.header_menu.push({ label: '', value: '' })
    },
    updateFields(module) {
      this.$http.get(`/admin/website/${module}`).then(response => {
        const responseData = response.data
        const { settings } = response.data.data
        if (responseData.status) {
          this.data.header_logo.src = settings.header_logo
          this.data.show_language_switcher = settings.show_language_switcher
          this.data.show_currency_switcher = settings.show_currency_switcher
          this.data.header_stikcy = settings.header_stikcy
          this.data.header_menu = JSON.parse(settings.header_menu)
        } else {
          this.errorAlert(responseData.message)
        }
      })
        .catch(error => {
          this.toastDanger('There is a Error in Your Product Information Form')
          this.$refs.refFormObserver.setErrors(error.response.data.errors)
        })
    },
  },
  setup() {
    const blankData = {
      header_logo: { file: [], src: '' },
      show_language_switcher: false,
      show_currency_switcher: false,
      header_stikcy: false,
      header_menu: [{ label: '', value: '' }],
    }
    const data = ref(JSON.parse(JSON.stringify(blankData)))
    const resetData = () => {
      data.value = JSON.parse(JSON.stringify(blankData))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetData,
    )
    return {
      data,
      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
}
</script>
<style scoped>
.border-light {
  background-color: #f7f7f7;
}
.upload {
  background-color: #f4f4f4;
  height: 160px;
  width: 18%;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 18%;
  height: 160px;
  border-radius:0px;
}

.upload3 {
  background-color: #f4f4f4;
  height: 140px;
  width: 20%;
}

.primary-icon {
  margin-top: 85px;
}

.btnRemover {
  position: relative;
}

.remover {
  position: absolute;
  top: 0px;
  left: 5px;
}

.banner {
  font-size: 11px;
}

.searchProduct {
  margin-top: 7px;
}

.file {
  display: none;
}

.border {
  border: 1px !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}
</style>
