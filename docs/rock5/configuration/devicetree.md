---
sidebar_label: 'Device Tree Configuration'
sidebar_position: 10
---

# Device Tree Configuration

## Introduction

This directory contains Device Tree overlays. Device Tree makes it possible to support many hardware configurations with a single kernel and without the need to explicitly load or blacklisr kernel modules.

On Radxa borad which uses linux5.10 kernel, you can use `rsetup` to load overlays that you want to enable, rsetup load overlays' dtbo from [Radxa/overlay](https://github.com/radxa/overlays/tree/main/arch/arm64/boot/dts/rockchip/overlays).  

## How to enable an overlay

### usage

run `rsetup` command as below:
```
radxa@rock-5a:~$ rsetup
```
After typing the password, you can see the [rsetup tool interface](../configuration/rsetup-tool).  
Select `Overlays`:
```
Configure Device Tree Overlay
        Manage overlays
        View overlay info
        Install overlay from source
        Reset overlays
        <Ok>             <Cancel>
```
Then, select `Manage overlays`:
```
Configure Device Tree Overlay  
        Manage overlays  
        View overlay info  
        Install overlay from source  
        Reset overlays  
       

      <Ok>            <Cancel>
```

Next, the installed device tree would shown, it may be different on different product.  
For example, those are for ROCK 5A:  
```
Please select overlays: 
        [ ] Enable 1-Wire on GPIO4_B1
        [ ] Enable FIQ Debugger on UART4-M2
        [ ] Enable FIQ Debugger on UART6-M1
        [ ] Enable FIQ Debugger on UART7-M2
        [ ] Enable FIQ Debugger on UART8-M0
        [ ] Enable I2C1-M0
        [ ] Enable I2C2-M4
        [ ] Enable I2C4-M3
        [ ] Enable I2C6-M0
        [ ] Enable I2C6-M3
        [ ] Enable I2C7-M3
        [ ] Enable PWM0-M2
        [ ] Enable PWM1-M2
        [ ] Enable PWM11-M1
        [ ] Enable PWM14-M1
        [ ] Enable PWM14-M2 
        [ ] Enable PWM15-M1
        [ ] Enable PWM15-M3 
        [ ] Enable PWM6-M0
        [ ] Enable PWM7-M0
        [ ] Enable Radxa Camera 4K
        [ ] Enable Radxa Display 10HD 
        [ ] Enable Radxa Display 8HD
        [ ] Enable Raspberry Pi Camera V2
        [ ] Enable UART2-M0
        [ ] Enable UART2-M2
        [ ] Enable UART3-M1
        [ ] Enable UART4-M2
        [ ] Enable UART6-M1
        [ ] Enable UART7-M1
        [ ] Enable UART7-M1 with Hardware Flow Control
        [ ] Enable UART7-M2
        [ ] Enable UART8-M0
        [ ] Enable spidev on SPI0-M1 over CS0
        [ ] Enable spidev on SPI0-M2 over CS0
        [ ] Enable spidev on SPI4-M2 over CS0
        [ ] Set OTG port to Host modeq
        [ ] Set OTG port to Peripheral mode
        <Ok>                   <Cancel>
```
**Note: Supported options are subject to change.**  
Select the overlays you want to load with the space bar,
```
[*] Enable Radxa Camera 4K
```
Overlay with a `*` indicates that it is enabled. It would work after reboot.

## How to use an overylay written by yourself

Write the overlay and put the overlay under `rockchip-bsp/kernel/arch/arm64/boot/dts/rockchip/overlay/`,then add the overlay name to the makefile in the `overlay/` directory. Then, recompile and build a new image.  

In the recompiled image, you can find the overlay you have added.  