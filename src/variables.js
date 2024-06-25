export function GetVariableDefinitions() {
    let variables = [];

    for (let i = 1; i <= 8; i++) {
        variables.push({
            variableId: `mute_status_${i}`, name: `Mute Status Channel ${i}`
        });
        variables.push({
            variableId: `volume_level_${i}`, name: `Volume Level Channel ${i}`
        });
    };
     
    return variables;
}