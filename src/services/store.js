import Vuex from "vuex";
import Vue from "vue";
import {BluetoothConnector} from "./bluetooth";
import {COMMANDS, POSITION} from "../constants";

Vue.use(Vuex);

const CONNECT_TO_DEVICE = 'CONNECT_TO_DEVICE';
const CONTROL_DIRECTION = 'CONTROL_DIRECTION';
const CONTROL_POSITION = 'CONTROL_POSITION';
const STOP = 'STOP';
const SHOW_ERROR = 'SHOW_ERROR';

export const ACTIONS = {
    CONNECT_TO_DEVICE,
    CONTROL_DIRECTION,
    STOP,
    CONTROL_POSITION,
    SHOW_ERROR,
};

const SET_CONNECTED_STATUS = 'SET_CONNECTED_STATUS';
const SET_POSITION = 'SET_POSITION';
const SET_ERROR = 'SET_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

export const MUTATIONS = {
    SET_CONNECTED_STATUS,
    SET_POSITION,
    SET_ERROR,
    CLEAR_ERROR,
};

export const createStore = () => {
    return new Vuex.Store({
        state: {
            isConnected: false,
            position: '', // 'open'|'close'|'middle'|'' - unknown
            error: [],
        },

        actions: {
            [CONNECT_TO_DEVICE](store) {
                const {commit, dispatch} = store;
                return BluetoothConnector.connect(store)
                    .then(() => commit(MUTATIONS.SET_CONNECTED_STATUS, true))
                    .catch((err) => {
                        commit(MUTATIONS.SET_CONNECTED_STATUS, false);
                        dispatch(ACTIONS.SHOW_ERROR, err.message);
                        console.error(err);
                    });
            },
            [STOP]() {
                return BluetoothConnector.send(COMMANDS.stop);
            },
            [CONTROL_POSITION](store, target) {
                return BluetoothConnector.send(target === POSITION.OPEN ? COMMANDS.open : COMMANDS.close);
            },
            [CONTROL_DIRECTION](store, target) {
                console.log(target);
                return BluetoothConnector.send(target === POSITION.OPEN ? COMMANDS.startOpening : COMMANDS.startClosing);
            },
            [SHOW_ERROR]({commit}, error) {
                commit(SET_ERROR, error);
                setTimeout(() => {
                    commit(CLEAR_ERROR, error)
                }, 5000)
            },
        },

        mutations: {
            [SET_CONNECTED_STATUS](state, value) {
                state.isConnected = value;
            },
            [SET_POSITION](state, value) {
                state.position = value;
            },
            [SET_ERROR](state, value) {
                state.error.push(value);
            },
            [CLEAR_ERROR](state, error) {
                state.error = state.error.filter(err => err !== error)
            },
        },
    })
};
