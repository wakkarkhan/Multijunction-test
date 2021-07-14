<template>
  <div>
    <b-row>
      <b-col cols="12">
        <!------------------------------------------------------------------------->
        <!-----------------------------Footer Widget------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Footer Widget</h4>
              <hr>
            </b-col>
            <b-col md="12">
              <b-row>
                <!------------------------------------------------------------------------->
                <!-----------------------------About Widget-------------------------------->
                <!------------------------------------------------------------------------->
                <b-col md="6">
                  <validation-observer ref="footer_about_widget">
                    <b-form>
                      <b-card class="border-light">
                        <h5>About Widget</h5>
                        <hr>
                        <b-form-group
                          label="Footer Logo"
                          label-for="Footer"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Footer Logo"
                            rules="required"
                          >
                            <b-form-file
                              id="image4"
                              v-model="data.aboutWidget.footer_logo.file"
                              :state="errors.length > 0 ? false : null"
                              class="file"
                              @change="previewImageHelper($event, data.aboutWidget.footer_logo)"
                            />
                            <b-card
                              v-if="data.aboutWidget.footer_logo.src === ''"
                              class="border pl-0 pr-0 upload pointer"
                              @click="chooseFile('image4')"
                            >
                              <div class="text-center mt-2">
                                <feather-icon
                                  icon="CameraIcon"
                                  size="25"
                                /><br>
                                <span>Footer Logo</span>
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
                                @click="removeImageHelper(data.aboutWidget.footer_logo)"
                              />
                              <b-img
                                class="img-thumbnail imgs p-0"
                                :src="data.aboutWidget.footer_logo.src"
                                size="25"
                              />
                            </div>
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-form-group
                          label="About Description"
                          label-for="Footer"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="About Description"
                            rules="required"
                          >
                            <b-form-input
                              v-model="data.aboutWidget.about_description"
                              placeholder="About Description"
                              :state="errors.length > 0 ? false : null"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>
                        <b-button
                          variant="primary"
                          class="float-right"
                          @click.prevent="submit('footer_about_widget')"
                        >
                          update
                        </b-button>
                      </b-card>
                    </b-form>
                  </validation-observer>
                </b-col>
                <!------------------------------------------------------------------------->
                <!----------------------Content Info Widget-------------------------------->
                <!------------------------------------------------------------------------->

                <b-col md="6">
                  <validation-observer ref="contact_info">
                    <b-form>
                      <b-card class="border-light">
                        <h5>Contact Info Widget</h5>
                        <hr>
                        <b-form-group
                          label="Contact Address"
                          label-for="address"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Contact Address"
                            rules="required"
                          >
                            <b-form-input
                              id="address"
                              v-model="data.contactInfo.address"
                              :state="errors.length > 0 ? false : null"
                              placeholder="Street # 27 London"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-form-group
                          label="Contact Phone"
                          label-for="phone"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Contact Phone"
                            rules="required"
                          >
                            <b-form-input
                              id="phone"
                              v-model="data.contactInfo.phone"
                              :state="errors.length > 0 ? false : null"
                              placeholder="99238404"
                              type="number"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-form-group
                          label="Contact Email"
                          label-for="email"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Contact Email"
                            rules="required"
                          >
                            <b-form-input
                              id="email"
                              v-model="data.contactInfo.email"
                              placeholder="support@gmail.com"
                              :state="errors.length > 0 ? false : null"
                              type="email"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-button
                          variant="primary"
                          class="float-right"
                          @click.prevent="submit('contact_info')"
                        >
                          update
                        </b-button>
                      </b-card>
                    </b-form>
                  </validation-observer>
                </b-col>

                <!------------------------------------------------------------------------->
                <!----------------------Link Widget One------------------------------------>
                <!------------------------------------------------------------------------->

                <b-col md="12">
                  <validation-observer ref="footer_link_widget_one">
                    <b-form>
                      <b-card class="border-light">
                        <b-row>
                          <b-col cols="12">
                            <h5>Link Widget One</h5>
                            <hr>
                          </b-col>
                          <b-col cols="12">
                            <b-form-group
                              label="Title"
                              label-for="title"
                            >
                              <validation-provider
                                #default="{ errors }"
                                name="title"
                                rules="required"
                              >

                                <b-form-input
                                  id="title"
                                  v-model="data.linkWidgetOneTitle"
                                  placeholder="Title"
                                  :state="errors.length > 0 ? false : null"
                                /><br>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </b-form-group>
                          </b-col>
                          <b-col cols="12">
                            <p>Links</p>
                            <b-row
                              v-for="(link, linkIndex) in data.linkWidgetOneLinks"
                              :key="linkIndex"
                              class="mb-2"
                            >
                              <b-col cols="4">
                                <validation-provider
                                  #default="{ errors }"
                                  name="Label"
                                  rules="required"
                                >
                                  <b-form-input
                                    v-model="link.label"
                                    placeholder="Label"
                                    :state="errors.length > 0 ? false : null"
                                  />
                                </validation-provider>
                              </b-col>
                              <b-col cols="8 d-flex justify-content-between">
                                  <b-form-input
                                    v-model="link.value"
                                    placeholder="https:// or http://"
                                    class="inputs"
                                  />
                                <b-button
                                  variant="outline-danger"
                                  class="btn-icon rounded-circle"
                                  @click="removeMenu(linkIndex)"
                                >
                                  <feather-icon icon="XIcon" />
                                </b-button>
                              </b-col> </b-row>
                            <b-row>
                              <b-col cols="12 mt-2">
                                <b-button
                                  @click="addMenu"
                                >
                                  Add New
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-col>
                          <b-col cols="12">
                            <b-button
                              variant="primary"
                              class="float-right"
                              @click.prevent="submit('footer_link_widget_one')"
                            >
                              Update
                            </b-button>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-form>
                  </validation-observer>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!-----------------------------Footer Bottom------------------------------->
        <!------------------------------------------------------------------------->
        <validation-observer ref="social_links_widget">
          <b-form>
            <b-card>
              <b-row>
                <b-col md="12">
                  <h4>Footer Bottom</h4>
                  <hr>
                </b-col>
                <b-col md="12">
                  <!------------------------------------------------------------------------->
                  <!--------------------------Copyright Widget------------------------------->
                  <!------------------------------------------------------------------------->

                  <b-card class="border-light">
                    <h5>Copyright Widget</h5>
                    <hr>

                    <b-form-group
                      label="Copyright Text"
                      label-for="Footer"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Copyright Text"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.socialLinksWidget.copyright_text"
                          placeholder="Copyright Text"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-card>

                  <!------------------------------------------------------------------------->
                  <!--------------------------Social Links Widget---------------------------->
                  <!------------------------------------------------------------------------->

                  <b-card class="border-light">
                    <h5>Social Links Widget</h5>
                    <hr>

                    <b-form-group
                      label="Show Social Links ?"
                      label-for="h-refundable"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Show Social Links"
                      >
                        <div class="custom-control custom-switch">
                          <input
                            id="customSwitch6"
                            v-model="data.socialLinksWidget.show_social_link"
                            type="checkbox"
                            :state="errors.length > 0 ? false : null"
                            class="custom-control-input"
                          >
                          <label
                            class="custom-control-label"
                            for="customSwitch6"
                          />
                        </div>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Facebook"
                        rules="required"
                      >
                        <label>Social Links</label><br>
                        <b-input-group class="mt-1">
                          <b-input-group-prepend is-text>
                            <feather-icon icon="FacebookIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            v-model="data.socialLinksWidget.facebook"
                            placeholder="Facebook"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Twitter"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="TwitterIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            v-model="data.socialLinksWidget.twitter"
                            placeholder="Twitter"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Instagram"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="InstagramIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            v-model="data.socialLinksWidget.instagram"
                            placeholder="Instagram"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Youtube"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="YoutubeIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            v-model="data.socialLinksWidget.youtube"
                            placeholder="Youtube"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Linkedin"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="LinkedinIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            v-model="data.socialLinksWidget.linkin"
                            placeholder="Linkin"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-card>

                  <b-card class="border-light">
                    <h5>Payment Method Widget</h5>
                    <hr>
                    <b-form-group
                      label="Payment Methods"
                      label-for="payment"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Payment Method"
                      >
                        <b-form-file
                          id="image3"
                          v-model="data.paymentWidget.file"
                          :state="errors.length > 0 ? false : null"
                          class="file"
                          @change="previewImageHelper($event, data.paymentWidget)"
                        />
                        <b-card
                          v-if="data.paymentWidget.src === ''"
                          class="border pl-0 pr-0 upload3 pointer"
                          @click="chooseFile('image3')"
                        >
                          <div class="text-center mt-2">
                            <feather-icon
                              icon="CameraIcon"
                              size="25"
                            /><br>
                            <span>payment method Img</span>
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
                            @click="removeImageHelper(data.paymentWidget)"
                          />
                          <b-img
                            class="img-thumbnail imges p-0"
                            :src="data.paymentWidget.src"
                            size="25"
                          />
                        </div>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('social_links_widget')"
                    >
                      update
                    </b-button>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </b-form>
        </validation-observer>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BInputGroupPrepend,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BForm,
  BImg,
  BButtonClose,
  BFormFile,
  BButton,
  // BFormTextarea,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import StoreModule from './StoreModule'

export default {
  components: {
    BCard,
    BRow,
    BButton,
    BCol,
    BImg,
    BButtonClose,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    ValidationProvider,
    ValidationObserver,
    BForm,
    // BFormTextarea,
    // vSelect,
    BFormFile,
  },
  data() {
    return {
      required,
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
    this.updateFields('footer_about_widget')
    this.updateFields('contact_info')
    this.updateFields('footer_link_widget_one')
    this.updateFields('social_links_widget')
  },
  methods: {
    // chooseFile(imageId) {
    //   document.getElementById(imageId).click()
    // },
    // parameter will be observer refs and it will be store as in db column whose name as module
    submit(form) {
      // eslint-disable-next-line dot-notation
      this.$refs[form].validate().then(success => {
        if (success) {
          // module is also use for query string variable
          const payload = { module: form }
          if (form === 'footer_about_widget') {
            const formData = new FormData()
            formData.append('footer_logo', this.data.aboutWidget.footer_logo.file)
            formData.append('about_description', this.data.aboutWidget.about_description)
            payload.data = formData
          }
          if (form === 'contact_info') {
            payload.data = this.convertObjectInfoFormData(this.data.contactInfo)
          }
          if (form === 'footer_link_widget_one') {
            const linkData = new FormData()
            linkData.append('footer_link_widget_one_title', this.data.linkWidgetOneTitle)
            linkData.append('footer_link_widget_one_links', JSON.stringify(this.data.linkWidgetOneLinks))
            payload.data = linkData
          }
          if (form === 'social_links_widget') {
            const socialData = this.data.socialLinksWidget
            socialData.payment_method_widget_img = this.data.paymentWidget.file
            payload.data = this.convertObjectInfoFormData(socialData)
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
    removeMenu(index) {
      this.data.linkWidgetOneLinks.splice(index, 1)
      this.toastSuccess('Menu removed form list successfyll!')
    },
    addMenu() {
      this.data.linkWidgetOneLinks.push({ label: '', value: '', isRequired: true })
    },
    updateFields(module) {
      this.$http.get(`/admin/website/${module}`).then(response => {
        const responseData = response.data
        const { settings } = response.data.data
        if (responseData.status) {
          if (module === 'footer_about_widget') {
            this.data.aboutWidget.footer_logo.src = settings.footer_logo
            this.data.aboutWidget.about_description = settings.about_description
          }
          if (module === 'contact_info') {
            this.data.contactInfo.address = settings.address
            this.data.contactInfo.phone = settings.phone
            this.data.contactInfo.email = settings.email
          }
          if (module === 'footer_link_widget_one') {
            this.data.linkWidgetOneTitle = settings.footer_link_widget_one_title
            this.data.linkWidgetOneLinks = JSON.parse(settings.footer_link_widget_one_links)
          }
          if (module === 'social_links_widget') {
            this.data.socialLinksWidget.copyright_text = settings.copyright_text
            this.data.socialLinksWidget.show_social_link = settings.show_social_link
            this.data.socialLinksWidget.facebook = settings.facebook
            this.data.socialLinksWidget.twitter = settings.twitter
            this.data.socialLinksWidget.instagram = settings.instagram
            this.data.socialLinksWidget.youtube = settings.youtube
            this.data.socialLinksWidget.linkin = settings.linkin
            this.data.paymentWidget.src = settings.payment_method_widget_img
          }
          // paymentWidget: { file: [], src: '' },

        //   this.data.show_currency_switcher = settings.show_currency_switcher
        //   this.data.header_stikcy = settings.header_stikcy
        //   this.data.header_menu = JSON.parse(settings.header_menu)
        } else {
          this.errorAlert(responseData.message)
        }
      })
        .catch(error => {
          this.toastDanger('There is a Error in Your Product Information Form')
          this.$refs.refFormObserver.setErrors(error.response.data.errors)
        })
    },
    validationForm1() {
      this.$refs.simpleRules1.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
    validationForm2() {
      this.$refs.simpleRules2.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
    validationForm3() {
      this.$refs.social_link_widget.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
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
    // due to syntax error i define by using this notation
    const blankData = {
      aboutWidget: { footer_logo: { file: [], src: '' }, about_description: '' },
      contactInfo: { address: '', phone: '', email: '' },
      linkWidgetOneTitle: '',
      linkWidgetOneLinks: [{ label: '', value: '', isRequired: true }],
      socialLinksWidget: {
        copyright_text: '',
        show_social_link: true,
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        linkin: '',
      },
      paymentWidget: { file: [], src: '' },
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
  height: 140px;
  width: 35%;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 35%;
  border-radius: 0px;
  height: 140px;
}

.upload3 {
  background-color: #f4f4f4;
  height: 170px;
  width: 20%;
}

.imges {
  width: 20%;
  border-radius: 0px;
  height: 170px;
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

.inputs {
  width: 90% !important;
}

@media screen and (max-width: 768px) {
  .inputs {
    width: 80% !important;
  }
}

@media screen and (max-width: 408px) {
  .inputs {
    width: 70% !important;
  }
}
</style>
