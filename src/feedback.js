export function processFeedback(data, instance) {
    const message = data.toString();
    instance.log('info', `Received data: ${message}`);

    // Example parsing, assuming the feedback message format is "MUTE <channel> <status>"
    const muteMatch = message.match(/MUTE (\d+) (\d+)/);
    if (muteMatch) {
        const channel = muteMatch[1];
        const status = muteMatch[2];
        instance.setVariable(`mute_status_${channel}`, status === '1' ? 'Muted' : 'Unmuted');
        return; // Return after processing to avoid processing the same message twice
    }

    // Example parsing, assuming the feedback message format is "MUTE INPUT <channel> <status>"
    const muteInputMatch = message.match(/MUTE INPUT (\d+) (\d+)/);
    if (muteInputMatch) {
        const channel = muteInputMatch[1];
        const status = muteInputMatch[2];
        instance.setVariable(`input_mute_status_${channel}`, status === '1' ? 'Muted' : 'Unmuted');
        return; // Return after processing to avoid processing the same message twice
    }

    // Example parsing, assuming the feedback message format is "VOL <channel> <level>"
    const volumeMatch = message.match(/VOL (\d+) (\d+)/);
    if (volumeMatch) {
        const channel = volumeMatch[1];
        const level = volumeMatch[2];
        instance.setVariable(`volume_level_${channel}`, level);
        return; // Return after processing to avoid processing the same message twice
    }

    // Example parsing, assuming the feedback message format is "VOLUME OUTPUT <channel> <level>"
    const volumeOutputMatch = message.match(/VOLUME OUTPUT (\d+) (\d+)/);
    if (volumeMatch) {
        const channel = volumeOutputMatch[1];
        const level = volumeOutputMatch[2];
        instance.setVariable(`output_volume_level_${channel}`, level);
        return; // Return after processing to avoid processing the same message twice
    }

    // Log unrecognized message format
    instance.log('warn', `Unrecognized feedback message: ${message}`);
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
