<template>
  <b-row>
    <b-col md="12">
      <!------------------------------------------------------------------------->
      <!----------------------Product Information-------------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>General</h4>
            <hr>
            <validation-observer ref="general">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Frontend Website Name"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Frontend Website Name"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.front_website_name"
                          :state="errors.length > 0 ? false : null"
                          placeholder="MultiJunction"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Site Motto"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Site Motto"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.site_moto"
                          :state="errors.length > 0 ? false : null"
                          placeholder="Online Market Place"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Site Icon"
                      label-for="siteIcon"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Site Icon"
                        rules="required"
                      >
                        <b-form-file
                          id="image3"
                          v-model="file3.file"
                          class="file"
                          @change="previewImage($event, file3)"
                        />
                        <b-card
                          v-if="file3.src === ''"
                          class="border pl-0 pr-0 upload pointer"
                          @click="chooseFile('image3')"
                        >
                          <div class="text-center mt-2">
                            <feather-icon
                              icon="CameraIcon"
                              size="25"
                            /><br>
                            <span>Upload Image3</span>
                          </div>
                        </b-card>
                        <div
                          v-else
                          class="image-btn"
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
                            @click="removeImage(file3)"
                          />
                          <b-img
                            class="img-thumbnail imgs p-0"
                            :src="file3.src"
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
                      label="Website Base Color"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Website Base Color"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.website_base_color"
                          placeholder="#37654"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        <span class="color"> Hexa code color</span>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Website Base Hover Color"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Website Base Hover Color"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.website_base_hover_color"
                          :state="errors.length > 0 ? false : null"
                          placeholder="#346719"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        <span class="color"> Hexa code color</span>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('general')"
                    >
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer>
          </b-col>
        </b-row>
      </b-card>

      <!------------------------------------------------------------------------->
      <!-------------------------------Global SEO-------------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>Global SEO</h4>
            <hr>
            <validation-observer ref="global_seo">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Title"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Meta Title"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.globalSeo.meta_title"
                          placeholder="Meta Title"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Description"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Meta Description"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.globalSeo.meta_description"
                          placeholder="Description"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Keywords"
                      label-cols-md="4"
                      label-for="keywords"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Keywords"
                        rules="required"
                      >
                        <b-form-tags
                          v-model="data.globalSeo.keywords"
                          input-id="keywords"
                          separator=" ,;"
                          placeholder="Enter new tags separated by space, comma or semicolon"
                          no-add-on-enter
                          :state="true"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <span class="color"> Separate with coma</span>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Image"
                      label-for="metaImage"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Meta Image"
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
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('global_seo')"
                    >
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer>
          </b-col>
        </b-row>
      </b-card>

      <!------------------------------------------------------------------------->
      <!-----------------------------Cookies Agreement--------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>Cookies Agreement</h4>
            <hr>
            <validation-observer ref="cookies_agreement">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Cookies Agreement Text"
                      label-cols-md="4"
                    >
                      <quill-editor
                        ref="myQuillEditor"
                        v-model="data.coookiesAgreement.cookies_agreement_text"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Show Cookies Agreement"
                      label-cols-md="4"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch4"
                          v-model="data.coookiesAgreement.show_cookies_agreemeent"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch4"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('cookies_agreement')"
                    >
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer></b-col>
        </b-row>
      </b-card>

      <!------------------------------------------------------------------------->
      <!---------------------------------Custom Script--------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>Custom Script</h4>
            <hr>
            <validation-observer ref="custom_script">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Header custom script-before </head>"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Header Textarea"
                        rules="required"
                      >
                        <b-form-textarea
                          id="textarea-default"
                          v-model="data.customScript.header_custom_script"
                          :state="errors.length > 0 ? false : null"
                          placeholder="Textarea"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Footer custom script-before </body>"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Footer Textarea"
                        rules="required"
                      >
                        <b-form-textarea
                          id="textarea-default-1"
                          v-model="data.customScript.footer_custom_script"
                          :state="errors.length > 0 ? false : null"
                          placeholder="Textarea"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('custom_script')"
                    >
                      Update
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
  BFormTextarea,
  BButtonClose,
  BImg,
  BFormTags,
} from 'bootstrap-vue'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import { required } from '@validations'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import store from '@/store'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, onUnmounted } from '@vue/composition-api'
import StoreModule from './StoreModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    quillEditor,
    BFormGroup,
    BFormInput,
    BForm,
    BFormFile,
    BButton,
    BFormTextarea,
    ValidationProvider,
    ValidationObserver,
    BButtonClose,
    BImg,
    BFormTags,
  },
  data() {
    return {
      primary: {
        file: [],
        src: '',
        loading: false,
      },
      file1: {
        file: [],
        src: '',
        loading: false,
      },
      file2: {
        file: [],
        src: '',
        loading: false,
      },
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
      file5: {
        file: [],
        src: '',
        loading: false,
      },
      file6: {
        file: [],
        src: '',
        loading: false,
      },
      required,
    }
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
    submit(form) {
      // eslint-disable-next-line dot-notation
      this.$refs[form].validate().then(success => {
        if (success) {
          // module is also use for query string variable
          const payload = { module: form }
          if (form === 'general') {
            const general = this.convertObjectInfoFormData(this.data.general)
            general.set('site_icon', this.data.general.site_icon.file)
            payload.data = general
          }
          if (form === 'global_seo') {
            const globalSeo = this.convertObjectInfoFormData(this.data.globalSeo)
            globalSeo.set('meta_image', this.data.globalSeo.meta_image.file)
            payload.data = globalSeo
          }
          if (form === 'cookies_agreement') {
            payload.data = this.convertObjectInfoFormData(this.data.coookiesAgreement)
          }
          if (form === 'custom_script') {
            payload.data = this.convertObjectInfoFormData(this.data.customScript)
          }
          // send axios request
          store.dispatch('adminWebsiteSettings/updateWebsiteSettings', payload)
            .then(response => {
              const { data } = response
              if (data.status) {
                this.successAlert(data.message)
              } else {
                this.errorAlert(data.message)
              }
            })
            .catch(error => {
              this.toastDanger('There is a Error in Your Product Information Form')
              this.$refs[form].setErrors(error.response.data.errors)
            })
        }
      })
    },
  },
  setup() {
    // index of the custom field card
    const USER_APP_STORE_MODULE_NAME = 'adminWebsiteSettings'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)
    // destroy store module
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })
    const blankData = {
      general: {
        front_website_name: '',
        site_moto: '',
        site_icon: { file: [], src: '' },
        website_base_color: '',
        website_base_hover_color: '',
      },
      globalSeo: {
        meta_title: '',
        meta_description: '',
        keywords: [],
        meta_image: { file: [], src: '' },
      },
      coookiesAgreement: {
        cookies_agreement_text: '',
        show_cookies_agreemeent: false,
      },
      customScript: {
        header_custom_script: '',
        footer_custom_script: '',
      },
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
.color {
  font-size: 11px;
}
.image-btn{
  position: relative;
}
.remover{
  position: absolute;
  top: 0px;
  left: 145px;
}

.upload {
  background-color: #f4f4f4;
  height: 145px;
  width:25%;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 25%;
  height: 145px;
  border-radius: 0px;
}

.primary-icon {
  margin-top: 85px;
}

.primaryImage span {
  font-weight: bolder;
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
.previewImg {
  object-fit: cover;
}
.border {
  border: 1px !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}
</style>
