import axios from '@axios'

export default {
  namespaced: true,
  state: {
    records: {},
    record: {},
    parentCategories: {},
    listOfDropDowns: [],
    breadCrum: [],
    fields: [],
    submitedFields: [],
  },
  getters: {
    records(state) {
      if (Object.keys(state.records).length > 0) {
        return state.records.categories.data
      }
      return state.records
    },
    getRecordById: state => id => state.records.categories.data.find(record => record.id === id),
    record(state) {
      return state.record
    },
    parentCategories: state => state.parentCategories,
    breadCrum: state => state.breadCrum,
    listOfDropDowns: state => state.listOfDropDowns,

  },
  mutations: {
    updateRecords(state, payload) {
      state.records = payload
    },
    updateRecord(state, payload) {
      state.record = payload
    },
    updateparentCategories(state, payload) {
      // payload.forEach(record => {
      //   record.isSelected = false
      // })
      state.parentCategories = payload
    },
    updateListOfDropDowns(state, payload) {
      // update bread crum
      state.breadCrum = payload.breadCrum
      // get list of dropdown form state which store after response
      const { listOfDropDowns } = state
      // find index of the selected dropdopw
      let dropdownIndex = listOfDropDowns.findIndex(list => list.key === payload.dropDownId)
      dropdownIndex += 1
      if (payload.childs.length > 0) {
        const arr = {
          key: payload.parent_id,
          value: payload.childs,
        }
        if (listOfDropDowns.length > 0) {
          if (payload.dropDownId === undefined) {
            listOfDropDowns.splice(0)
          } else {
            listOfDropDowns.splice(dropdownIndex)
          }
          const index = listOfDropDowns.findIndex(list => list.key === payload.parent_id)
          if (index === -1) {
            listOfDropDowns.push(arr)
          } else {
            listOfDropDowns.splice(index)
          }
        } else {
          listOfDropDowns.splice(0)
          listOfDropDowns.push(arr)
        }
      } else {
        console.log(dropdownIndex)
        listOfDropDowns.splice(dropdownIndex)
      }
    },
    updateFields(state, payload) {
      state.fields = payload
    },
    showNextField(state, index) {
      let tmpIndex = index
      tmpIndex += 1
      console.log(tmpIndex)
      if (tmpIndex < state.fields.length) {
        state.fields[tmpIndex].hidden = 1
      }
    },
    /* eslint no-param-reassign: "error" */
    updateSubmitedCustomFields(state, payload) {
      state.updateSubmitedCustomFields = payload
      // const data = new FormData()
      // state.updateSubmitedCustomFields.fields.forEach(field => {
      //   field.select = []
      //   if (field.name.length > 0) {
      //     field.name.forEach((fileName, nameIndex) => {
      //       data.append('file', fileName)
      //       console.log(fileName, nameIndex)
      //     // console.log(nameIndex)
      //     })
      //     // field.name = data
      //   }

      //   // field.name = JSON.stringify(field.name)
      // })
      // state.updateSubmitedCustomFields = payload
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    fetchRecords(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/categories', { params: queryParams })
          .then(response => {
            ctx.commit('updateRecords', response.data.data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchRecord(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/user/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addRecord(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/categories', userData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateRecord(ctx, payload) {
      return new Promise((resolve, reject) => {
        const { id, data } = payload
        axios
          // .post(`catt/update/${id}`, data)
          .post(`/categories/${id}`, data)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    destoryRecord(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`categories/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // useable end point
    getParentCategory(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get('/category/parent/record')
          .then(response => {
            ctx.commit('updateparentCategories', response.data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getCategoryChild(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`category-child/${payload.id}`)
          .then(response => {
            const { data } = response.data
            data.dropDownId = payload.dropDownId
            ctx.commit('updateListOfDropDowns', data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchCategoryCustomFields(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`fields/${id}/category`)
          .then(response => {
            // const fff = response.data.data.fields.map(field => field.fields = JSON.parse(field.fields))
            const fields = response.data.data.fields.map(field => {
              const tempField = field
              tempField.fields = JSON.parse(field.fields)
              return tempField
            })
            // show first custom field
            if (fields.length > 0) {
              fields[0].hidden = 1
            }
            ctx.commit('updateFields', fields)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    addProduct(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/products', payload)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
