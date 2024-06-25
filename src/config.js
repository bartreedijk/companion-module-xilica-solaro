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
    return variables;
}