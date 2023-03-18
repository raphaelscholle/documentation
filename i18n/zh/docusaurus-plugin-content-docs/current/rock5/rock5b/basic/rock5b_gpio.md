---
sidebar_label: 'ROCK5B GPIO'
sidebar_position: 5
---


# ROCK5B GPIO

- ROCK5B有一个40针扩展接头。每个引脚都用颜色区分。

| Pin | Function1 | Function2  | Function3   | Function4      | Function5   | Function6    | Function7    | Function8   | GPIO number  |
|:---:|:---------:|:----------:|:-----------:|:--------------:|:-----------:|:------------:|:------------:|:-----------:|:------------:|
| 1   | +3.3V     |            |             |                |             |              |              |             |              |
| 3   | GPIO4_B3  | CAN1_TX_M1 | PWM15_IR_M1 |  UART8_CTSN_M0 | I2C7_SDA_M3 | I2S1_SDO2_M0 |              |             | 139          |
| 5   | GPIO4_B2  | CAN1_RX_M1 | PWM14_M1    | UART8_RTSN_M0  | I2C7_SCL_M3 | I2S1_SDO1_M0 |              |             | 138          |
| 7   | GPIO3_C3  |            | PWM15_IR_M0 | UART7_CTSN_M1  | I2C8_SDA_M4 |              | SPI1_CS1_M1  |             | 115          |
| 9   | GND       |            |             |                |             |              |              |             |              |
| 11  | GPIO3_C1  |            |             | UART7_RX_M1    |             |              | SPI1_CLK_M1  |             | 113          |
| 13  | GPIO3_B7  |            |             |                | I2C3_SCL_M1 |              | SPI1_MOSI_M1 |             | 111          |
| 15  | GPIO3_C0  |            |             | UART7_TX_M1    | I2C3_SDA_M1 |              | SPI1_MISO_M1 |             | 112          |
| 17  | +3.3V     |            |             |                |             |              |              |             |              |
| 19  | GPIO1_B2  |            |             | UART4_RX_M2    |             |              | SPI0_MOSI_M2 |             | 42           |
| 21  | GPIO1_B1  |            |             |                |             |              | SPI0_MISO_M2 |             | 41           |
| 23  | GPIO1_B3  |            |             |  UART4_TX_M2   |             |              |  SPI0_CLK_M2 |             | 43           |
| 25  | GND       |            |             |                |             |              |              |             |              |
| 27  | GPIO4_C6  |            | PWM7_IR_M3  |                | I2C0_SDA_M1 |              | SPI3_CLK_M0  |             | 150          |
| 29  | GPIO1_D7  |            | PWM15_IR_M3 | UART1_CTSN_M1  |             |              |              |             | 63           |
| 31  | GPIO1_B7  |            | PWM13_M2    | UART1_RX_M1    |             |              |              | SPDIF_TX_M0 | 47           |
| 33  | GPIO3_A7  |            | PWM8_M0     |                |             |              |              |             | 103          |
| 35  | GPIO3_B6  | CAN1_TX_M0 | PWM13_M0    | UART3_RX_M1    |             | I2S2_LRCK_M1 |              |             | 110          |
| 37  |           |            |             |                |             |              |              |             |              |
| 39  | GND       |            |             |                |             |              |              |             |              |

| Pin | Function1  | Function2  | Function3  | Function4     | Function5   | Function6    | Function7    | Function8 | GPIO number  |
|:---:|:----------:|:----------:|:----------:|:-------------:|:-----------:|:------------:|:------------:|:---------:|:------------:|
| 2   | +5.0V      |            |            |               |             |              |              |           |              |
| 4   | +5.0V      |            |            |               |             |              |              |           |              |
| 6   | GND        |            |            |               |             |              |              |           |              |
| 8   | GPIO0_B5   |            |            | UART2_TX_M0   | I2C1_SCL_M0 | I2S1_MCLK_M1 |              |           | 13           |
| 10  | GPIO0_B6   |            |            | UART2_RX_M0   | I2C1_SDA_M0 | I2S1_SCLK_M1 |              |           | 14           |
| 12  | GPIO3_B5   | CAN1_RX_M0 | PWM12_M0   | UART3_TX_M1   |             | I2S2_SCLK_M1 |              |           | 109          |
| 14  | GND        |            |            |               |             |              |              |           |              |
| 16  | GPIO3_A4   |            |            |               |             |              |              |           | 100          |
| 18  | GPIO4_C4   |            | PWM5_M2    |               |             |              | SPI3_MISO_M0 |           | 148          |
| 20  | GND        |            |            |               |             |              |              |           |              |
| 22  | SARADC_IN4 |            |            |               |             |              |              |           |              |
| 24  | GPIO1_B4   |            |            | UART7_RX_M2   |             |              | SPI0_CS0_M2  |           | 44           |
| 26  | GPIO1_B5   |            |            | UART7_TX_M2   |             |              | SPI0_CS1_M2  |           | 45           |
| 28  | GPIO4_C5   |            | PWM6_M2    |               | I2C0_SCL_M1 |              | SPI3_MOSI_M0 |           | 149          |
| 30  | GND        |            |            |               |             |              |              |           |              |
| 32  | GPIO3_C2   |            | PWM14_M0   | UART7_RTSN_M1 | I2C8_SCL_M4 |              | SPI1_CS0_M1  |           | 114          |
| 34  | GND        |            |            |               |             |              |              |           |              |
| 36  | GPIO3_B1   |            | PWM2_M1    | UART2_TX_M2   |             |              |              |           | 105          |
| 38  | GPIO3_B2   |            | PWM3_IR_M1 | UART2_RX_M2   |             | I2S2_SDI_M1  |              |           | 106          |
| 40  | GPIO3_B3   |            |            | UART2_RTSN    |             | I2S2_SDO_M1  |              |           | 107          |


- Rockchip RK3588的GPIO有5个库，GPIO0到GPIO4，每个库有32个引脚，命名如下。

```
GPIO0_A0 ~ A7 
GPIO0_B0 ~ B7
GPIO0_C0 ~ C7
GPIO0_D0 ~ D7
   
GPIO1_A0 ~ A7
....
GPIO1_D0 ~ D7
```
```
GPIO2_A0 ~ A7
....
GPIO2_D0 ~ D7
```
```
GPIO3_A0 ~ A7
....
GPIO3_D0 ~ D7
```
```
GPIO4_A0 ~ A7
....
GPIO4_D0 ~ D7
```

- 对于Rockchip 5.10 kernel，GPIO number 的计算方式如下，以GPIO4_D5 为例：

```
GPIO4_D5 = 32*4 + 8*3 + 5 = 157
(A=0, B=1, C=2, D=3)
```

![GPIO_numbew](/zh/img/accessories/Gpio_number.png)

- 设置GPIO4_D5输出
```
# cd /sys/class/gpio
# echo 157 > export
# cd gpio157
# echo out > direction
# echo 1 > value     # output high
# echo 0 > value     # output low
```