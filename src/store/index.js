import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { API_URL } from "../config";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    collections: {},
    auction: {
      isLoading: true,
      data: {},
    },
    authors: [],
  },
  getters: {
    getCollections(state) {
      return function (userId) {
        return state.collections[userId];
      };
    },
    getAuthors(state) {
      return state.authors;
    },
    getAuthor(state) {
      return function (userId) {
        return state.authors.find((item) => {
          return item._id === userId;
        });
      };
    },
    getAuction(state) {
      return state.authors;
    },
  },
  mutations: {
    SET_AUTHORS(state, payload) {
      const isIndex = state.authors.findIndex((item) => {
        return item._id === payload._id;
      });
      if (!state.authors.length) {
        state.authors = [{ ...payload }];
      } else {
        if (isIndex >= 0) {
          state.authors = [{ ...payload }];
        } else {
          const newState = [...state.authors, payload];
          state.authors = newState;
        }
      }
    },
    SET_AUTHOR(state, payload) {
      const isIndex = state.authors.findIndex((item) => {
        return item._id === payload._id;
      });
      if (!state.authors.length) {
        state.authors = [{ ...payload }];
      } else {
        if (isIndex >= 0) {
          state.authors = [{ ...payload }];
        } else {
          const newState = [...state.authors, payload];
          state.authors = newState;
        }
      }
    },
    SET_AUCTION(state, payload) {
      state.auction = {
        isLoading: false,
        data: payload,
      };
    },
    SET_COLLECTIONS(state, payload) {
      // eslint-disable-next-line no-debugger
      debugger;
      state.collections = {
        [payload._id]: payload,
      };
    },
  },
  actions: {
    GET_AUTHORS: async ({ commit }, payload) => {
      const { data } = await axios.get(`${API_URL}/collection/${payload}`);
      commit("SET_AUTHORS", data);
    },
    GET_AUTHOR: async ({ commit }, payload) => {
      const { data } = await axios.get(`${API_URL}/author/${payload}`);
      commit("SET_AUTHOR", data);
    },
    GET_AUCTION: async ({ commit }) => {
      const { data } = await axios.get(
        `${API_URL}/asset/60d4523f72645378e4c41d91`
      );
      commit("SET_AUCTION", data);
    },
    GET_COLLECTIONS: async ({ commit }, payload) => {
      const { data } = await axios.get(`${API_URL}/collection/${payload}`);
      commit("SET_COLLECTIONS", data);
    },
  },
});
