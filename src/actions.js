export function getActions(instance) {
    return {
        toggle_mute_channel: {
            name: 'Toggle Mute Channel',
            options: [
                {
                    type: 'textinput',
                    label: 'Channel Number',
                    id: 'channel',
                    default: '1',
                    required: true,
                },
            ],
            callback: async (action, context) => {
                const channel = action.options.channel;
                const muteState = await this.getMuteState(channel);
                const newMuteState = !muteState;
                await this.setMuteState(channel, newMuteState);
            },
        },

        mute: {
            name: 'Mute Channel',
            options: [
                {
                    type: 'number',
                    label: 'Channel Number',
                    id: 'channel',
                    default: 1,
                },
            ],
            callback: (action) => {
                const cmd = `MUTE ${action.options.channel} 1\n`;
                instance.sendCommand(cmd);
            },
        },

        unmute: {
            name: 'Unmute Channel',
            options: [
                {
                    type: 'number',
                    label: 'Channel Number',
                    id: 'channel',
                    default: 1,
                },
            ],
            callback: (action) => {
                const cmd = `MUTE ${action.options.channel} 0\n`;
                instance.sendCommand(cmd);
            },
        },

        setVolume: {
            name: 'Set Volume',
            options: [
                {
                    type: 'number',
                    label: 'Channel Number',
                    id: 'channel',
                    default: 1,
                },
                {
                    type: 'number',
                    label: 'Volume Level (0-100)',
                    id: 'volume',
                    default: 50,
                },
            ],
            callback: (action) => {
                const cmd = `SETVOL ${action.options.channel} ${action.options.volume}\n`;
                instance.sendCommand(cmd);
            },
        },

        // Mock methods to represent the actual implementation of getting and setting mute state
        getMuteState: async function (channel) {
            // Implement logic to get mute state for the given channel
            return true; // Replace with actual mute state
        },

        setMuteState: async function (channel, state) {
            // Implement logic to set mute state for the given channel
        },
    };
}














// module.exports = {
//   actions: function () {
//     return {
//       toggle_mute_channel: {
//         name: 'Toggle Mute Channel',
//         options: [
//           {
//             type: 'textinput',
//             label: 'Channel Number',
//             id: 'channel',
//             default: '1',
//             required: true,
//           },
//         ],
//         callback: async (action, context) => {
//           const channel = action.options.channel;
//           const muteState = await this.getMuteState(channel);
//           const newMuteState = !muteState;
//           await this.setMuteState(channel, newMuteState);
//         },
//       },
//     };
//   },

//   // Mock methods to represent the actual implementation of getting and setting mute state
//   getMuteState: async function (channel) {
//     // Implement logic to get mute state for the given channel
//     return false; // Replace with actual mute state
//   },

//   setMuteState: async function (channel, state) {
//     // Implement logic to set mute state for the given channel
//   },
// };
