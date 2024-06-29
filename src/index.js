import { InstanceBase, runEntrypoint, TCPHelper } from '@companion-module/base';
import { getActions } from './actions.js';
import { GetConfigFields } from './config.js'
import { processFeedback, getFeedbacks } from './feedback.js';
import { GetVariableDefinitions } from './variables.js';
// import { GetPresetDefinitions } from './presets.js'; // presets not working

class XilicaSolaroInstance extends InstanceBase {
    constructor(internal) {
        super(internal);
        this.updateStatus('disconnected');
    }

    async init(config) {
        this.config = config;
        this.initTCP();
        this.setActionDefinitions(getActions(this));
        this.setFeedbackDefinitions(getFeedbacks(this));
//        this.setPresetDefinitions(GetPresetDefinitions());
        this.setVariableDefinitions(GetVariableDefinitions());
    }

    async destroy() {
        if (this.socket) {
            this.socket.destroy();
        }
    }

    initTCP() {
        if (this.socket) {
            this.socket.destroy();
            delete this.socket;
        }

        this.socket = new TCPHelper(this.config.host, this.config.port);

        this.socket.on('status_change', (status, message) => {
            this.updateStatus(status, message);
        });

        this.socket.on('error', (err) => {
            this.log('error', `TCP Connection error: ${err.message}`);
        });

        this.socket.on('connect', () => {
            this.log('info', 'Connected to Xilica Solaro');

            this.subscribeToFeedback();
        });

        this.socket.on('data', (data) => {
            processFeedback(data, this);
        });
    }

    // Subscribe to events from xilica solaro (volume change, etc.)
    subscribeToFeedback() {
        // Subscribe to input mute status feedback
        if (this.config.inputChannels) {
            const muteInputs = this.config.inputChannels.split(',').map(input => input.trim());
            muteInputs.forEach(input => {
                this.sendCommand(`SUBSCRIBE MUTE INPUT ${input}`);
            });
        }
    
        // Subscribe to output volume level feedback
        if (this.config.outputChannels) {
            const volumeOutputs = this.config.outputChannels.split(',').map(output => output.trim());
            volumeOutputs.forEach(output => {
                this.sendCommand(`SUBSCRIBE VOLUME OUTPUT ${output}`);
            });
        }
    }
    

    // Return config fields for web config
	getConfigFields() {
		return GetConfigFields();
	}

    sendCommand(cmd) {
        if (this.socket && this.socket.isConnected) {
            this.socket.send(cmd + '\n'); // Ensure each command ends with a newline
        } else {
            this.log('error', 'Cannot send command, socket not connected');
        }
    }

    static getUpgradeScripts() {
        return [];
    }
}

runEntrypoint(XilicaSolaroInstance, []);
