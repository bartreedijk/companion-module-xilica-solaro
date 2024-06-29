export function GetConfigFields() {
    let variables = [];

    variables.push({
        type: 'textinput',
        id: 'host',
        label: 'Xilica Solaro IP',
        width: 6,
        default: '192.168.1.100',
        required: true,
    });

    variables.push({
        type: 'number',
        id: 'port',
        label: 'Port',
        width: 6,
        default: 23,
        required: true,
    });

    variables.push({
        type: 'textinput',
        id: 'inputChannels',
        label: 'Feedback input channels (comma-separated)',
        width: 12,
        default: '1,2,3',
    });

    variables.push({
        type: 'textinput',
        id: 'outputChannels',
        label: 'Feedback output channels (comma-separated)',
        width: 12,
        default: '1,2,3',
    });

    return variables;
}
