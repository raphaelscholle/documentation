---
sidebar_label: '认识 ROCK 5B'
sidebar_position: 1
---

# ROCK 5B 介绍

Radxa ROCK 5B 是一款基于 RK3588 布局优雅的单板计算机（SBC），在 100 x 75mm 的尺寸上几乎用满 RK3588 的所有特性，提供灵活的扩展性。ROCK 5B 为极客，单板机爱好者，物联网爱好者，院校老师学生等用户提供一个将想法变成现实的基础，可广泛用于边缘计算、人工智能、云计算、智能监控等领域。

ROCK 5B 可作为：

* 个人桌面计算机
* 个人私有服务器
* 安卓影音播放器
* 机器人控制器
* 区块链节点

其他更多使用场景，等你来发掘

ROCK 5B提供多内存选择： 4GB, 8GB 和 16GB LPDDR4x。

![rock5b_01](/zh/img/rock5b/rock-5b-01.png)

*** 注意：实际电路板布局或芯片位置随着时间推移可能会发生变化，但主要连接器类型和位置将保持不变。 ***

# ROCK 5B 规格特性

## 硬件

- SoC：RK3588 四大核 Cortex‑A76 主频在 2.2~2.4Ghz 之间 加上四小核 Cortex‑A55 主频为 1.8Ghz
- GPU：Mali G610MP4 GPU，支持 OpenGLES 1.1、2.0 和 3.2，OpenCL 最高 2.2 和 Vulkan 1.2
- NPU：内置 NPU 支持 INT4/INT8/INT16/FP16 混合运算，计算能力高达6TOPs
- 内存：4GB/8GB/16GB 64 位 LPDDR4x
- 显示接口：通过两个 HDMI、一个DP（type C）、一个 MIPI DSI 最多接四台显示设备
- 分辨率：高达 3x 4K@60FPS + 1x 1080P@60FPS 或者 1x 8K@60FPS + 1x 4K@60FPS + 1x 1080P@60FPS
- 硬件编解码：
	* H.265/VP9 (HEVC)/AVS2 硬件解码（高达 8Kp60）。
	* H.264 硬件解码（最高 8Kp30）
	* H.265/H.264 硬件编码（最高 8Kp30）

## 接口特点

- 1x 全功能 USB C 端口（支持 USB PD 电源、DP 显示高达 4Kp60、USB 3.0）
- 1x microSD 卡插槽
- 2x 标准 HDMI 输出端口，一个支持高达 8Kp60，一个支持高达 4Kp60
- 1x micro HDMI 输入端口，支持高达 4Kp60 显示输入
- 2x USB 2 端口
- 1x USB 3 HOST 端口, 1x USB3 OTG 端口
- 1x 2.5 千兆以太网端口（支持带有附加 PoE HAT 的 PoE）
- 1x M.2 M Key，支持 PCIe 3.0 四通道
- 1x M.2 E Key，支持 PCIe 2.1 一通道、SATA、SDIO、UART
- 1x eMMC 模块连接器，用于支持 eMMC 5.1
- 1x 摄像头端口（四通道 MIPI CSI）
- 1x 显示端口（四通道 MIPI DSI）
- 1x RTC 电池连接器
- 1x PWM 风扇接口
- 1x 电源按钮
- 1x 恢复按钮
- 1x RGB三色灯用于电源指示 / 系统状态 / 用户自定义功能
- 2x 散热器安装孔
- 40x 用户 GPIO 支持各种接口选项：
	* 1 x UART
	* 2 x SPI bus
	* 2 x I2C bus
	* 1 x PCM/I2S
	* 1 x SPDIF
	* 1 x PWM
	* 1 x ADC
	* 6 x GPIO
	* 2 x 5V DC电源输入
	* 2 x 3.3V 电源引脚

## 软件

- ARMv8 指令集
- 支持 Debian 和 Ubuntu 系统
- 支持 Android 12
- RKNN NPU 软件
- 提供用于 Linux 和 Android 下的硬件访问和控制库

# 机械规格

![rock5b_02](/zh/img/rock5b/rock-5b-02.png)

![rock5b_03](/zh/img/rock5b/rock-5b-03.png)
