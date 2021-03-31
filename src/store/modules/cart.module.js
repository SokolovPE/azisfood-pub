const state = {
    items: [],
};

const getters = {
    getItems: (state) => state.items,
    getItemCnt: (state) => state.items.length,
};

const mutations = {
    ADD_ITEM(state, payload) {
        state.items.push(payload);
    },
    DEL_ITEM(state, payload) {
        state.items.filter((item) => item.id !== payload);
    },
};

const actions = {
    addItem: ({ commit }, payload) => {
        commit('ADD_ITEM', payload);
    },
    delItem: ({ commit }, payload) => {
        commit('DEL_ITEM', payload);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
};
