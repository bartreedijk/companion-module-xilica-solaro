import { combineRgb } from '@companion-module/base'

export function GetPresetDefinitions () {
    const presets = {
        'mute:toggle': {
            category: 'Mute Control',
            label: 'Toggle Mute Channel',
            bank: {
                style: 'text',
                text: 'Toggle Mute Channel $(channel)',
                size: '14',
                color: combineRgb(255, 255, 255), // White
                bgcolor: combineRgb(0, 0, 255),   // Blue
            },
            actions: [
                {
                    action: 'toggle_mute_channel',
                    options: {
                        channel: '$(channel)',
                    },
                },
            ],
            feedbacks: [
                {
                    type: 'mute_status',
                    options: {
                        channel: '$(channel)',
                    },
                    style: {
                        color: combineRgb(255, 255, 255), // White
                        bgcolor: combineRgb(0, 255, 0),   // Green if muted
                    },
                },
            ],
        },
    }

    return presets;
}

// module.exports = {
// 	getPresets() {
// 	  return [
// 		{
// 		  category: 'Mute Control',
// 		  label: 'Toggle Mute Channel',
// 		  bank: {
// 			style: 'text',
// 			text: 'Toggle Mute Channel $(channel)',
// 			size: '14',
// 			color: '16777215', // White
// 			bgcolor: '255',    // Blue
// 		  },
// 		  actions: [
// 			{
// 			  action: 'toggle_mute_channel',
// 			  options: {
// 				channel: '$(channel)',
// 			  },
// 			},
// 		  ],
// 		  feedbacks: [
// 			{
// 			  type: 'mute_status',
// 			  options: {
// 				channel: '$(channel)',
// 			  },
// 			  style: {
// 				color: '16777215', // White
// 				bgcolor: '65280',  // Green if muted
// 			  },
// 			},
// 		  ],
// 		},
// 	  ];
// 	},
//   };
  



// export function getPresets() {
//     let presets = {}

//     // Preset for muting a channel
// 	presets['mute'] = {
// 		type: 'button',
// 		category: 'Mute Control',
// 		name: 'Mute Channel',
// 		style: {
// 			text: 'Mute Channel',
// 			size: 'auto',
// 			color: combineRgb(255, 255, 255),
// 			bgcolor: combineRgb(0, 0, 0),
// 		},
// 		steps: [
// 			{
// 				down: [
// 					{
// 						actionId: 'Mute',
//                         options: {
//                             channel: '$(channel)',
//                             muted: 'toggle',
//                         }
// 					},
// 				],
// 				up: [],
// 			},
// 		],
// 		feedbacks: [
// 			{
//                 type: 'mute_status',
// 				options: {
// 					bg: ColorRed,
// 					fg: ColorWhite,
// 					bg_paused: ColorYellow,
// 					fg_paused: ColorWhite,
//                     channel: '$(channel)',
// 				},
// 			},
// 		],
// 	}


//     return presets;
// }


// // module.exports = {
// //     getPresets() {
// //       return [
// //         {
// //           category: 'Mute Control',
// //           label: 'Mute Channel',
// //           bank: {
// //             style: 'text',
// //             text: 'Mute Channel',
// //             size: '14',
// //             color: '16777215', // White
// //             bgcolor: '255',    // Blue
// //           },
// //           actions: [
// //             {
// //               action: 'mute_channel',
// //               options: {
// //                 channel: '1', // Default channel to mute, you can change this to a variable
// //               },
// //             },
// //           ],
// //           feedbacks: [
// //             {
// //               type: 'mute_status',
// //               options: {
// //                 channel: '1',
// //               },
// //               style: {
// //                 color: '16777215', // White
// //                 bgcolor: '65280',  // Green if muted
// //               },
// //             },
// //           ],
// //         },
// //       ];
// //     },
// //   };
  









// // const presets = {}
// // presets[`my_first_preset`] = {
// // 	type: 'button', // This must be 'button' for now
// // 	category: 'Test', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
// // 	name: `My button`, // A name for the preset. Shown to the user when they hover over it
// // 	style: {
// // 		// This is the minimal set of style properties you must define
// // 		text: `$(generic-module:some-variable)`, // You can use variables from your module here
// // 		size: 'auto',
// // 		color: combineRgb(255, 255, 255),
// // 		bgcolor: combineRgb(0, 0, 0),
// // 	},
// // 	steps: [
// // 		{
// // 			down: [
// // 				{
// // 					// add an action on down press
// // 					actionId: 'my-action',
// // 					options: {
// // 						// options values to use
// // 						brightness: 100,
// // 					},
// // 				},
// // 			],
// // 			up: [],
// // 		},
// // 	],
// // 	feedbacks: [], // You can add some presets from your module here
// // }
// // this.setPresetDefinitions(presets)