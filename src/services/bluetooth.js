import {BluetoothTerminal} from "../../lib/BluetoothTerminal";
import {SEPARATOR} from "../constants";
import {ACTIONS, MUTATIONS} from "./store";

class Bluetooth {
    constructor() {
        this.terminal = null;
    }

    connect(store) {
        if (this.terminal) {
            this.terminal.disconnect()
        }

        this.store = store;
        this.terminal = new BluetoothTerminal(this.receive.bind(this), 0xFFE0, 0xFFE1);
        return this.terminal.connect();
    }

    send(action, value = '') {
        const message = `${action}${value ? SEPARATOR : ''}${value}`;
        return this.terminal.send(message)
    }

    receive(data) {
        console.log('receive', data);
        const [name, value] = data.split(SEPARATOR);
        switch (name) {
            case 'position':
                return this.store.commit(MUTATIONS.SET_POSITION, value);
            case 'error':
                return this.store.dispatch(ACTIONS.SHOW_ERROR, value);
        }
    }
}

export const BluetoothConnector = new Bluetooth();
