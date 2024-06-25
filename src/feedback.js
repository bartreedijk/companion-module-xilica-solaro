export function processFeedback(data, instance) {
    const message = data.toString();
    instance.log('info', `Received data: ${message}`);

    // Example parsing, assuming the feedback message format is "MUTE <channel> <status>"
    const muteMatch = message.match(/MUTE (\d+) (\d+)/);
    if (muteMatch) {
        const channel = muteMatch[1];
        const status = muteMatch[2];
        instance.setVariable(`mute_status_${channel}`, status === '1' ? 'Muted' : 'Unmuted');
    }

    // Example parsing, assuming the feedback message format is "VOL <channel> <level>"
    const volumeMatch = message.match(/VOL (\d+) (\d+)/);
    if (volumeMatch) {
        const channel = volumeMatch[1];
        const level = volumeMatch[2];
        instance.setVariable(`volume_level_${channel}`, level);
    }
}

export function getFeedbacks(instance) {
    return {
        mute_status: {
            name: 'Mute Status',
            options: [
                {
                    type: 'textinput',
                    label: 'Channel Number',
                    id: 'channel',
                    default: '1',
                    required: true,
                },
            ],
            callback: async (feedback, context) => {
                const channel = feedback.options.channel;
                const muteState = await getMuteState(channel);
                return {
                    bgcolor: muteState ? '65280' : '255', // Green if muted, Blue otherwise
                };
            },
        },
        // muteStatus: {
        //   type: 'boolean',
        //   label: 'Mute Status',
        //   description: 'Indicates if a specific channel is muted',
        //   options: [
        //     {
        //       type: 'number',
        //       label: 'Channel Number',
        //       id: 'channel',
        //       default: 1,
        //       required: true,
        //     },
        //   ],
        //   callback: (feedback) => {
        //     const channel = feedback.options.channel;
        //     const status = instance.getVariable(`mute_status_${channel}`);
        //     return {
        //       value: status === 'Muted',
        //     };
        //   },
        // },
        volumeLevel: {
            type: 'number',
            label: 'Volume Level',
            description: 'Indicates the volume level of a specific channel',
            options: [
                {
                    type: 'number',
                    label: 'Channel Number',
                    id: 'channel',
                    default: 1,
                    required: true,
                },
            ],
            callback: (feedback) => {
                const channel = feedback.options.channel;
                const level = instance.getVariable(`volume_level_${channel}`);
                return {
                    value: level,
                };
            },
        },
    };
}

export async function getMuteState(channel) {
    // Implement logic to get mute state for the given channel
    return false; // Replace with actual mute state
}