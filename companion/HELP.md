# Xilica Solaro Module for Bitfocus Companion

## Overview

This module allows you to control Xilica Solaro DSPs using Bitfocus Companion. You can send commands to mute/unmute channels, set volume levels, and more.

## Configuration

To use this module, you'll need to configure the following settings:

1. **Xilica Solaro IP**: The IP address of your Xilica Solaro device.
2. **Port**: The port number for TCP/IP communication. The default port is `23`.

### Steps to Configure

1. Open Bitfocus Companion.
2. Add a new instance and select the Xilica Solaro module.
3. Enter the IP address of your Xilica Solaro device.
4. Enter the port number (default is `23`).
5. Save the configuration.

## Actions

The following actions are available in this module:

### Mute Channel

Mute a specific channel on the Xilica Solaro device.

- **Channel Number**: The number of the channel to mute.

### Unmute Channel

Unmute a specific channel on the Xilica Solaro device.

- **Channel Number**: The number of the channel to unmute.

### Set Volume

Set the volume level for a specific channel on the Xilica Solaro device.

- **Channel Number**: The number of the channel to adjust the volume for.
- **Volume Level (0-100)**: The desired volume level (0 being the lowest and 100 being the highest).

## Feedback

Currently, the module logs received data for debugging purposes. Feedback processing can be extended based on specific requirements.

## Troubleshooting

### Connection Issues

- Ensure the IP address and port number are correctly entered.
- Verify network connectivity between the Bitfocus Companion device and the Xilica Solaro device.
- Check if the Xilica Solaro device is powered on and operational.

### Command Issues

- Make sure the channel numbers entered are valid.
- Verify that the volume level is within the 0-100 range.
