import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

const helperMixins = {
  methods: {
    toastPrimary(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'primary',
        },
      })
    },
    toastSecondary(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'secondary',
        },
      })
    },
    toastSuccess(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'success',
        },
      })
    },
    toastDanger(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'danger',
        },
      })
    },
    toastDark(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'dark',
        },
      })
    },
    toastWarning(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'warning',
        },
      })
    },
    toastInfo(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'info',
        },
      })
    },
    // success
    successAlert(text) {
      this.$swal({
        title: 'Good job!',
        text,
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // error
    errorAlert(text) {
      this.$swal({
        title: 'Error!',
        text,
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // warning
    warningAlert(text) {
      this.$swal({
        title: 'Warning!',
        text,
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // info
    infoAlert(text) {
      this.$swal({
        title: 'Info!',
        text,
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    previewImageHelper(event, primary) {
      const file = event.target.files[0]
      const imbObj = primary
      imbObj.file = file
      const fileReader = new FileReader()
      fileReader.readAsDataURL(imbObj.file)
      fileReader.addEventListener('load', () => {
        imbObj.src = fileReader.result
      })
    },
    removeImageHelper(fileObject) {
      // eslint-disable-next-line no-param-reassign
      fileObject.file = []
      // eslint-disable-next-line no-param-reassign
      fileObject.src = ''
    },
    convertObjectInfoFormData(dataObj) {
      const data = new FormData()
      Object.keys(dataObj).forEach(key => {
        data.set(key, dataObj[key])
      })
      return data
    },
    chooseFile(imageId) {
      document.getElementById(imageId).click()
    },
  },
}

export default helperMixins
