export function GetVariableDefinitions() {
    let variables = [];

    for (let i = 1; i <= 8; i++) {
        variables.push({
            variableId: `mute_status_${i}`, name: `Mute Status Channel ${i}`
        });
        variables.push({
            variableId: `input_mute_status_${i}`, name: `Mute Status Input Channel ${i}`
        });
        variables.push({
            variableId: `volume_level_${i}`, name: `Volume Level Channel ${i}`
        });
        variables.push({
            variableId: `output_volume_level_${i}`, name: `Volume Level Output Channel ${i}`
        });
    };
     
    return variables;
}