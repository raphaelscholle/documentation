---
sidebar_label: 'Overview'
sidebar_position: 10
---

# Introduction

The Radxa ROCK 5 Model A (ROCK 5A) is a Single Board Computer (SBC) in a compact form factor packed with a wide range of class-leading functionality, features and expansion options. The ROCK 5A is an ideal choice for makers, IoT enthusiasts, hobbyists, gamers, PC users and everyone who need an extremely highly specified platform with outstanding performance and reliability. Radxa offers the ROCK 5A board in various LPDDR4x RAM memory options:

&nbsp;4GB<br/>
&nbsp;8GB<br/>
&nbsp;16GB<br/>

![ROCK5A Front View](/img/rock5a/rock5a-combo-view.webp)

**_Note:_ The actual board layout or components location may change during the time but the main connectors type and location will remain the same**

## Features

### Hardware

- Rockchip RK3588S SoC  
- Quad Cortex®-A76 @ 2.2~2.4GHz and a quad Cortex®-A55 @ 1.8GHz based on Arm® DynamIQ™ configuration  
- Arm Mali™ G610MC4 GPU supporting: 

&nbsp;&nbsp;&nbsp;&nbsp;OpenGL® ES1.1, ES2.0, and ES3.2  
&nbsp;&nbsp;&nbsp;&nbsp;OpenCL® 1.1, 1.2 and 2.2  
&nbsp;&nbsp;&nbsp;&nbsp;Vulkan® 1.1 and 1.2  
&nbsp;&nbsp;&nbsp;&nbsp;Embedded high performance 2D image acceleration module

- NPU supporting INT4/INT8/INT16/FP16/BF16 and TF32 acceleration and computing power is up to 6TOPs
- 64bits LPDDR4x RAM options:4GB. 8GB. 16GB.
- Able to provide 3 display outputs via two HDMI, and one MIPI DSI
- H.265/H.264/AV1/AVS2 multivideo decoder up to 8K@60fps
- H.264/H.265 multivideo decoder up to 8K@30fps

### Interfaces

- 1x USB Type-C™ port for power supporting USB PD 2.0 and QC 2.0
- 1x Micro SD Card
- 2x micro HDMI output ports, one supporting displays up to 8Kp60 resolution, one supporting up to 4Kp60
- 2x USB2 Type A HOST ports
- 1x USB3 Type A HOST port, 1x USB3 Type A OTG/HOST port
- 1x Gigabit Ethernet port (supports PoE with add-on PoE HAT)
- 1x M.2 E Key with PCIe 2.1 one-lane, SATA, USB 2.0 support
- 1x eMMC module connector for eMMC 5.1 support
- 1x Camera port (1x four-lane MIPI CSI or 2x two-lane MIPI CSI)
- 1x LCD Display port (four-lane MIPI DSI)
- Miscellaneous
&nbsp;&nbsp;&nbsp;&nbsp;1x RTC battery connector  
&nbsp;&nbsp;&nbsp;&nbsp;1x PWM fan connector  
&nbsp;&nbsp;&nbsp;&nbsp;1x Power button  
&nbsp;&nbsp;&nbsp;&nbsp;1x Recovery pin, 1x Maskrom pin  
&nbsp;&nbsp;&nbsp;&nbsp;1x Power LED, 1x User LED  
- 40 pin 0.1" (2.54mm) header supporting a wide range of interface options:
&nbsp;&nbsp;&nbsp;&nbsp;Up to 5 x UART(2x with flow control)  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 3 x SPI bus  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 6 x I2C bus  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 1 x PCM/I2S  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 2 x SPDIF  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 7 x PWM  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 1 x CAN  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 1 x ADC  
&nbsp;&nbsp;&nbsp;&nbsp;Up to 27 x GPIO  
&nbsp;&nbsp;&nbsp;&nbsp;2 x 5V DC power in/out  
&nbsp;&nbsp;&nbsp;&nbsp;2 x 3.3V power out  

### Software

- ArmV8 Instruction Set
- Debian/Ubuntu Linux support
- Android 12 support
- OpenFyde OS(Chromium OS fork) support
- RKNPU2 NPU software stack
- Hardware access/control library for Linux/Android

## Mechanical Specification

![ROCK5A Dimension Top](/img/rock5a/rock5a-dimension-top.png)
![ROCK5A Dimension Bottom](/img/rock5a/rock5a-dimension-bottom.png)

## Electrical Specification

### Power Requirements

The ROCK 5A supports various power supply technologies including smart power adapter as well as fixed voltage:

1. USB Type-C™ PD Version 2.0 with 9V/2A, 12V/2A, 15V/2A and 20V/2A.
2. Qualcomm® Quick Charge™ 2.0 QC 3.0/2.0 adapter, 9V/2A, 12V/2A
3. Power adapter with fixed voltage in 5.2V to 20V range on the USB Type-C port
4. 5V Power applied to the GPIO PIN 2 & 4

The recommended power source should be able to produce, at least, 24W without a M.2 SSD or 30W with a M.2 SSD.

### GPIO Voltage

| GPIO       | Voltage Level | Tolerance |
| ---------- | ------------- | --------- |
| All GPIO   | 3.3V          | 3.63V     |
| SARADC_IN5 | 3.3V          | 3.3V     |

## Operating Conditions

The ROCK 5A has been designed to operate between 0°C to 50°C.

This temperature range was defined based on typical usage where the efficient use of Arm big.LITTLE technology can automatically select which processor core to utilise for a given task, the result of which is minimal heat generation and responsive user experience.

The ROCK 5A is built on a high‑performance mobile chipset which is designed to operate for extended durations on batteries with efficiency at its core. As with all electronic devices heat is a by‑product of operation which increases with performance and workload; during basic use cases such as web browsing, editing text or listening to music the SoC will automatically select the smallest processors available or dedicated hardware accelerators to reduce heat generation thus reserving the higher performance processors and thermal window for demanding tasks as and when required.

The SoC (RK3588S) is specified to limit its maximum internal temperature to 80°C before throttling the clock speeds to maintain reliability within the allowed temperature range. If the ROCK 5A is intended to be used continuously in high performance applications, it may be necessary to use external cooling methods (for example, heat sink, fan, etc.) which will allow the SoC to continue running at maximum clock speed indefinitely below its predefined 80°C peak temperature limiter.

## Peripherals

### GPIO Interface

The ROCK 5A offers a 40 pin GPIO expansion header which provides extensive compatibility with a wide range of accessories developed for the SBC market.

#### GPIO Alternate Functions

| Function6 | Function5 |  Function4 |  Function3 | Function2 | Function1 | Pin# | Pin# |  Function1  | Function2 |  Function3 |  Function4 | Function5 | Function6 | Function7 |
|-----------|-----------|:----------:|:----------:|:---------:|:---------:|:----:|:----:|:-----------:|:---------:|:----------:|:----------:|-----------|-----------|-----------|
|           |           |            |            |           | +3.3V     | 1    | 2    | +5.0V       |           |            |            |           |           |           |
|           |           | UART6_RX   | SPI4_MISO  | I2C2_SDA  | GPIO1_A0  | 3    | 4    | +5.0V       |           |            |            |           |           |           |
|           |           | UART6_TX   | SPI4_MOSI  | I2C2_SCL  | GPIO1_A1  | 5    | 6    | GND         |           |            |            |           |           |           |
|           |           | PDM1_CLK1  | UART4_TX   | SPI0_CLK  | GPIO1_B3  | 7    | 8    | GPIO0_B5    | UART2_TX  | I2C1_SCL   | I2S1_MCLK  |           |           |           |
|           |           |            |            |           | GND       | 9    | 10   | GPIO0_B6    | UART2_RX  | I2C1_SDA   | I2S1_SCLK  |           |           |           |
|           | PWM0      | UART6_RTS  | SPI4_CLK   | I2C4_SDA  | GPIO1_A2  | 11   | 12   | GPIO4_A1    | SPI0_MOSI | UART9_CTS  | I2S1_SCLK  |           |           |           |
|           | PWM1      | UART6_CTS  | SPI4_CS0   | I2C4_SCL  | GPIO1_A3  | 13   | 14   | GND         |           |            |            |           |           |           |
|           | I2S1_SDO3 | SPDIF0_TX  | PWM11      | UART9_TX  | GPIO4_B4  | 15   | 16   | GPIO1_D6    | I2C8_SCL  | UART1_RTS  | PWM14      |           |           |           |
|           |           |            |            |           | +3.3V     | 17   | 18   | GPIO1_D7    | I2C8_SDA  | UART1_CTS  | PWM15      |           |           |           |
|           |           |            |            | SPI2_MOSI | GPIO1_A5  | 19   | 20   | GND         |           |            |            |           |           |           |
|           |           |            |            | SPI2_MISO | GPIO1_A4  | 21   | 22   | GPIO1_B5    | SPI0_CS1  | UART7_TX   |            |           |           |           |
|           |           |            |            | SPI2_CLK  | GPIO1_A6  | 23   | 24   | GPIO1_A7    | SPI2_CS0  | PDM1_SDI0  | PWM3       |           |           |           |
|           |           |            |            |           | GND       | 25   | 26   | SARADC_VIN5 |           |            |            |           |           |           |
| CAN1_TX   | I2S1_SDO2 | PWM15      | UART8_CTS  | I2C7_SDA  | GPIO4_B3  | 27   | 28   | GPIO4_B2    | I2C7_SCL  | SPI0_CS0   | UART8_RTS  | PWM14     | I2S1_SDO1 | CAN1_RX   |
|           |           | PDM1_SDI3  | UART4_RX   | SPI0_MOSI | GPIO1_B2  | 29   | 30   | GND         |           |            |            |           |           |           |
|           |           |            | PDM1_SDI2  | SPI0_MISO | GPIO1_B1  | 31   | 32   | GPIO4_B0    | I2C6_SDA  | UART8_TX   | I2S1_SDI3  |           |           |           |
|           |           |            | PDM1_CLK0  | UART7_RX  | GPIO1_B4  | 33   | 34   | GND         |           |            |            |           |           |           |
|           |           | I2S1_MCLK  | UART9_RTS  | SPI0_MISO | GPIO4_A0  | 35   | 36   | GPIO4_A2    | SPI0_CLK  | I2S1_LRCK  |            |           |           |           |
|           |           |            | PDM1_SDI1  | SPI2_CS1  | GPIO1_B0  | 37   | 38   | GPIO4_A5    | I2C3_SDA  | UART3_TX   | I2S1_SDI0  |           |           |           |
|           |           |            |            |           | GND       | 39   | 40   | GPIO4_B1    | I2C6_SCL  | SPI0_CS1   | UART8_RX   | SPDIF1_TX | I2S1_SDO0 |           |

## Network

ROCK 5A offers a 10/100/1000Mbit RJ45 connector for wired networking. With additional PoE module/HAT, ROCK 5A can be powered by ethernet cable via RJ45 port by a PoE capable switch/router.

## eMMC Socket

ROCK 5A offers a high speed eMMC socket for eMMC modules which can be used for OS and data storage. The eMMC socket is compatible with readily available industrial pinout and form factor hardware. 

It is worth noting that the eMMC module shall be larger than 8GB and there is not maximum size limitation.

## Camera and Display Interfaces

The ROCK 5A has one four-lane(can be split into 2x two-lane) MIPI CSI Camera and one four-lane MIPI DSI Display connector. These connectors are designed for Radxa Camera and Display accessories and also backwards compatible with standard industrial camera and display peripherals with adapter FPC cables by Radxa. 

## USB

The ROCK 5A has two USB2 HOST, one USB3 HOST and one USB3 OTG/HOST type-A connectors. The power output across these ports is 2.8A in aggregate over the four connectors.

## HDMI Output

The ROCK 5A has two micro HDMI output ports(Type D), both support CEC and HDMI 2.1 with resolutions of 8Kp60 and 4Kp60 respectively.

## Audio Jack

The ROCK 5A supports high quality analogue audio output via a 4-ring 3.5mm headphone jack. The analog audio output can drive 32 Ohm headphones directly. The audio jack also supports microphone input as default.

## M.2 Connector

The ROCK 5A offers a M.2 E Key with 2230 mouting hole providing PCIe 2.1 one-lane or SATA and USB signal, supporting industrial standard M.2 WiFi 6 modules.

## Fan Connector

The ROCK 5A has a 2pin 1.25mm header that enables users to connect a 5V fan (or other peripheral). The fan can be PWM controlled without speed feedback.

# Availability

Radxa guarantees availability of the ROCK 5A until at least September 2033.
