export function getActions(instance) {
    return {
        // Toggle input channel mute state, assuming the command format is: MUTE INPUT <channel> <state>
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
                const muteState = await new Promise((resolve, reject) => {
                    instance.socket.send(`GET MUTE INPUT ${channel}\n`);
                    instance.socket.on('data', (data) => {
                        const message = data.toString().trim();
                        const match = message.match(new RegExp(`MUTE INPUT ${channel} (\\d+)`));
                        if (match) {
                            resolve(match[1]);
                        } else {
                            reject(new Error('Failed to get mute state'));
                        }
                    });
                });
                const newMuteState = muteState === '1' ? '0' : '1';
                const cmd = `MUTE INPUT ${channel} ${newMuteState}\n`;
                instance.sendCommand(cmd);
            },
        },
        // Mute input channel, assuming the command format is: MUTE INPUT <channel> 1
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
                const channel = action.options.channel;
                const cmd = `MUTE INPUT ${channel} 1\n`;
                instance.sendCommand(cmd);
            },
        },
        // Unmute input channel, assuming the command format is: MUTE INPUT <channel> 0
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
                const channel = action.options.channel;
                const cmd = `MUTE INPUT ${channel} 0\n`;
                instance.sendCommand(cmd);
            },
        },
        // Set output volume, assuming the command format is: VOLUME OUTPUT <channel> <level>
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
                const channel = action.options.channel;
                const level = action.options.volume;
                const cmd = `VOLUME OUTPUT ${channel} ${level}\n`;
                instance.sendCommand(cmd);
            },
        },
    };
}




// export function getActions(instance) {
//     return {
//         toggle_mute_channel: {
//             name: 'Toggle Mute Channel',
//             options: [
//                 {
//                     type: 'textinput',
//                     label: 'Channel Number',
//                     id: 'channel',
//                     default: '1',
//                     required: true,
//                 },
//             ],
//             callback: async (action, context) => {
//                 const channel = action.options.channel;
//                 const muteState = await this.getMuteState(channel);
//                 const newMuteState = !muteState;
//                 await this.setMuteState(channel, newMuteState);
//             },
//         },

//         mute: {
//             name: 'Mute Channel',
//             options: [
//                 {
//                     type: 'number',
//                     label: 'Channel Number',
//                     id: 'channel',
//                     default: 1,
//                 },
//             ],
//             callback: (action) => {
//                 const cmd = `MUTE ${action.options.channel} 1\n`;
//                 instance.sendCommand(cmd);
//             },
//         },

//         unmute: {
//             name: 'Unmute Channel',
//             options: [
//                 {
//                     type: 'number',
//                     label: 'Channel Number',
//                     id: 'channel',
//                     default: 1,
//                 },
//             ],
//             callback: (action) => {
//                 const cmd = `MUTE ${action.options.channel} 0\n`;
//                 instance.sendCommand(cmd);
//             },
//         },

//         setVolume: {
//             name: 'Set Volume',
//             options: [
//                 {
//                     type: 'number',
//                     label: 'Channel Number',
//                     id: 'channel',
//                     default: 1,
//                 },
//                 {
//                     type: 'number',
//                     label: 'Volume Level (0-100)',
//                     id: 'volume',
//                     default: 50,
//                 },
//             ],
//             callback: (action) => {
//                 const cmd = `SETVOL ${action.options.channel} ${action.options.volume}\n`;
//                 instance.sendCommand(cmd);
//             },
//         },

//         // Mock methods to represent the actual implementation of getting and setting mute state
//         getMuteState: async function (channel) {
//             // Implement logic to get mute state for the given channel
//             return true; // Replace with actual mute state
//         },

//         setMuteState: async function (channel, state) {
//             // Implement logic to set mute state for the given channel
//         },
//     };
// }


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
