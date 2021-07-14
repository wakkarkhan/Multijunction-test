<template>
  <div>
    <b-row>
      <b-col md="12">
        <app-collapse :is-submited="true">
          <app-collapse-item
            title="Product Images"
            :is-visible="true"
            class="my-text-primary font-weight-bolder"
          >
            <b-card>
              <hr>
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <!--<b-form-group
                  label="Banner (1920x500)"
                  label-for="h-banner"
                  label-cols-md="4"
                >-->
                    <b-row>
                      <b-col md="4">
                        <!-- <h5>Product Image</h5> -->
                        <br>
                        <p align="justify" class="my-text-primary font-weight-bolder">
                          Product images are one of the most important factors in any customer's decisions
                          to buy product.Provide as many images as it possible.Product images are one of the most important factors in any customer's decisions
                          to buy product.
                        </p>
                        <ul class="my-text-primary font-weight-bolder">
                          <li>Min size 600px x 600px</li>
                          <li>Max size 900px x 900px</li>
                          <li>Max file size 15MB</li>
                        </ul>
                        <p align="justify" class="my-text-primary font-weight-bolder">
                          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandas.
                        </p>
                      </b-col>
                      <b-col md="8">
                        <b-row>
                          <b-col md="6 pr-lg-0">
                            <b-form-file
                              id="primaryImage"
                              v-model="primary.file"
                              class="file"
                              @change="previewImage($event, primary)"
                            />
                            <b-card
                              v-if="primary.src === ''"
                              class="border primaryImage pl-0 pr-0 pointer"
                              @click="chooseFile('primaryImage')"
                            >
                              <div
                                class="text-center primary-icon"
                              >
                                <feather-icon
                                  icon="CameraIcon"
                                  size="25"
                                /><br><br>
                                <span>Upload Primary Image</span>
                              </div>
                            </b-card>
                            <div
                              v-else
                              class="p-0"
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
                                @click="removeImage(primary)"
                              />
                              <b-img
                                class="img-thumbnail img p-0"
                                :src="primary.src"
                                size="25"
                                rounded="0"
                              />
                            </div>
                          </b-col>
                          <b-col md="6">
                            <b-row>
                              <b-col md="6 pr-lg-0">
                                <b-form-file
                                  id="image1"
                                  v-model="file1.file"
                                  class="file"
                                  @change="previewImage($event, file1)"
                                />
                                <b-card
                                  v-if="file1.src === ''"
                                  class="border pl-0 pr-0 upload pointer"
                                  @click="chooseFile('image1')"
                                >
                                  <div
                                    class="text-center mt-2"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="25"
                                    /><br>
                                    <span>Upload Image1</span>
                                  </div>
                                </b-card>
                                <div v-else>
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
                                    @click="removeImage(file1)"
                                  />
                                  <b-img
                                    class="img-thumbnail imgs imges p-0"
                                    :src="file1.src"
                                    size="25"
                                    rounded="0"
                                  />
                                </div>
                              </b-col>
                              <b-col cols="6">
                                <b-form-file
                                  id="image2"
                                  v-model="file2.file"
                                  class="file"
                                  @change="previewImage($event, file2)"
                                />
                                <b-card
                                  v-if="file2.src === ''"
                                  class="border pl-0 pr-0 upload pointer"
                                  @click="chooseFile('image2')"
                                >
                                  <div
                                    class="text-center mt-2"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="25"
                                    /><br>
                                    <span>Upload Image1</span>
                                  </div>
                                </b-card>
                                <div v-else>
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
                                    @click="removeImage(file2)"
                                  />
                                  <b-img
                                    class="img-thumbnail imgs imges p-0"
                                    :src="file2.src"
                                    size="25"
                                    rounded="0"
                                  />
                                </div>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col md="6 pr-lg-0 mt-2">
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
                                  <div

                                    class="text-center mt-2"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="25"
                                    /><br>
                                    <span>Upload Image3</span>
                                  </div>

                                </b-card>
                                <div v-else>
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
                                    class="img-thumbnail imgs imges p-0"
                                    :src="file3.src"
                                    size="25"
                                    rounded="0"
                                  />
                                </div>
                              </b-col>
                              <b-col cols="6 mt-2">
                                <b-form-file
                                  id="image4"
                                  v-model="file4.file"
                                  class="file"
                                  @change="previewImage($event, file4)"
                                />
                                <b-card
                                  v-if="file4.src === ''"
                                  class="border pl-0 pr-0 upload pointer"
                                  @click="chooseFile('image4')"
                                >
                                  <div

                                    class="text-center mt-2"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="25"
                                    /><br>
                                    <span>Upload Image4</span>
                                  </div>
                                </b-card>
                                <div v-else>
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
                                    rounded="0"
                                  />
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                    <!-- </b-form-group>-->
                  </b-col>
                </b-row>
                <b-col class="col-md-12 text-right">
                  <b-button
                    variant="primary"
                    @click="submitImages"
                  >
                    Submit
                  </b-button>
                </b-col>
              </b-form>
            </b-card>
          </app-collapse-item>
        </app-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  // BFormGroup,
  BForm,
  BFormFile,
  BImg,
  BButtonClose,
  BButton,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    // BFormGroup,
    BForm,
    BFormFile,
    BImg,
    BButtonClose,
    BButton,
    AppCollapse,
    AppCollapseItem,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
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
    submitImages() {
      const data = new FormData()
      data.append('product_id', this.productId)
      data.append('primary', this.primary.file)
      data.append('file1', this.file1.file)
      data.append('file2', this.file2.file)
      data.append('file3', this.file3.file)
      data.append('file4', this.file4.file)

      this.$http.post('products/update-product-images', data)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

<style scoped>
.upload {
  background-color: #f4f4f4;
  height: 145px;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.img{
  width: 100%;
  height: 310px;
}

.imgs{
  width: 100%;
  height: 145px;
}

.primary-icon{
  margin-top: 85px;
}

.primaryImage {
  height: 310px;
  background-color: #f4f4f4;
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
.border{
  border: 1px !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}
</style>
