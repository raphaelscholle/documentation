---
sidebar_label: 'rsetup Tool Introduction'
sidebar_position: 10
---

# Introduce rsetup

`rsetup` is the Radxa system setup utility devloped by radxa team. To enter the configrution utility, type the following on the terminal:  
```
sudo rsetup  
```
After typing your password, you will see the screen with options like this:  

![rsetup](/img/configuration/rsetup.png)  
**Note: The menu shown may differ slightly.**  

Use the `up` and `down` arrow keys to move the highlighted selection between the options available.
Pressing the `right` and `left` arrow key will jump out of the options menu and take you to the <Ok\> and <Cancel\> buttons. 
Alternatively, you can use the Tab key to switch between these.
Press `Enter` to go to the corresponding option.

## System Maintaince

You can update **System** and **Bootloader** on this option.  
*Warning: Upgrading the bootloader may pose a risk of failure to boot, do not upgrade unless necessary.*  

## Hardware

Some peripherals can be modified on this menu, the following is the introduction of them.  
![rsetup_hardwarw](/img/configuration/rsetup_hardware.png)

### Video capture devices

If you have connect a video device, this option can help you to capture an image for testing.  

### GPIO LEDs

On this option, you can change the status of power LED and user LED on the board.  
For the details, please refer to the [LED Setup](../configuration/led).  

### Thermal governor

This module is used to adjust the fan and other temperature options.  
Denerally, we select `power_allcator` when using DC fan or fanless, select `step_wise` when using PWM fan.  
Other options are for senior developer, we don't normally modify them.  
**Note: If you connect the fan directly to the GPIO on 5V and GND pins, it would not be controlled and allways work.**

### Configure DSI display mirroring

If DSI display has some peoblems when using HDMI display and DSI display at the same time, enable this option will helpful.  

## Overlays

This option is for Configure Device Tree Overlay, please check [Device Tree Configuration](../configuration/devicetree) for more imaformations. 

## Connectivity

This option is normally similar to [Network Setting](../radxa_os/network). 

## User Settings

The `Password` of the current login account and the `Hostname` of the device can be changed on this option.  

## Localization

On this option, you can change `Timezone` `Locale` `Keybaed layout` `Wi-Fi Country`.  

## About

Here is the imformation of `rsetup`.
