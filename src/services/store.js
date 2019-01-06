import Vuex from "vuex";
import Vue from "vue";
import {BluetoothConnector} from "./bluetooth";

Vue.use(Vuex);

const CONNECT_TO_DEVICE = 'CONNECT_TO_DEVICE';

export const ACTIONS = {
    CONNECT_TO_DEVICE,
};

const SET_CONNECTED_STATUS = 'SET_CONNECTED_STATUS';

export const MUTATIONS = {
    SET_CONNECTED_STATUS,
};

export const createStore = () => {
    return new Vuex.Store({
        state: {
            isConnected: false
        },

        actions: {
            [CONNECT_TO_DEVICE]({commit}) {
                console.log('stub', CONNECT_TO_DEVICE);
                BluetoothConnector.connect()
                    .then(commit.bind(this, SET_CONNECTED_STATUS, true))
                    .catch((err) => {
                        commit(SET_CONNECTED_STATUS, false);
                        console.error(err);
                    })
            }
        },

        mutations: {
            [SET_CONNECTED_STATUS](state, value) {
                state.isConnected = value
            }
        }
    })
};
