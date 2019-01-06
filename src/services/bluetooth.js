import {BluetoothTerminal} from "../../lib/BluetoothTerminal";

class Bluetooth {
    constructor() {
        this.terminal = null;
    }

    connect() {
        if (this.terminal) {
            this.terminal.disconnect()
        }

        this.terminal = new BluetoothTerminal();
        return this.terminal.connect()
    }
}

export const BluetoothConnector = new Bluetooth();
