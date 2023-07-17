import { database } from '../../firebase/index'
import { getDocument, getDocumentLimit, getDocumentLimitNext, getDocumentByType, getDocumentByTypeAndName, getDocumentID } from '../../utils/firestore';

const state = {
  count: 0,
  products: [],
  loading: false,
  contructors: null,
  contructor: null,
  itemSuggest: null,
};

const mutations = {
  async setProducts(state, data) {
    state.products = [...data]
  },
  async setContructors(state, data) {
    state.contructors = [...data]
  },

  async setContructorsDetail(state, data) {
    state.contructor = {...data}
  },

  async setContructorsLimit(state, data) {
    state.itemSuggest = [...data]
  },
  async isLoading(state) {
    state.loading = true
  },
  async isLoaded(state) {
    state.loading = false
  },
};

const actions = {
  async SET_PRODUCTS({ commit }, params) {
    const data = await getDocumentByTypeAndName(params.type, params.name, params.collectionName)
    commit('setProducts', data);
    commit('isLoaded');
  },
  async SET_CONTRUCTORS({ commit }, collection) {
    const data = await getDocument(collection)
    commit('setContructors', data);
    commit('isLoaded');
  },
  async SET_CONTRUCTORS_DETAIL({ commit }, params) {
    const data = await getDocumentID(params.collection, params.id)
    commit('setContructorsDetail', data[0]);
    commit('isLoaded');
  },
  async SET_CONTRUCTORS_LIMIT({ commit }, params) {
    const data = await getDocumentLimit(params.collection, params.limit)
    commit('setContructorsLimit', data);
    commit('isLoaded');
  },
  async IS_LOADING({ commit }) {
    commit('isLoading');
  },
  async IS_LOADED({ commit }) {
    commit('isLoaded');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
