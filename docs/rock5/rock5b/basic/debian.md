---
sidebar_label: 'Using Debian'
sidebar_position: 6
---


# Debian系统使用

## 基本使用

- 以 $ 开头的命令意味着该命令可以由非特权用户执行。 而命令前面加上# 表示该命令可以由特权用户执行。 但是符号 $ 或 # 不是命令的一部分。

1. 默认账户
```
User Name : rock
Password  : rock
```

2. 切换到root用户
- rock 是 sudo 用户，可以使用以下命令以 rock 用户身份切换到 root：
```
sudo su
```
- For example:
```
rock@rock-5b:~$ 
rock@rock-5b:~$ sudo su
[sudo] password for rock: 
root@rock-5b:/home/rock# 
```
- root用户默认没有密码，可以使用命令passwd修改
```
root@rock-5b:/home/rock# passwd root
New password: 
Retype new password: 
passwd: password updated successfully
root@rock-5b:/home/rock#
```

3. 分区表

| Part Number | Offset | Name    | Description                |
|:-----------:|:------:|:-------:|:--------------------------:|
| (raw)       | 32KB   | loader1 | First stage loader         |
| (raw)       | 8MB    | loader2 | U-boot image               |
| 1           | 16MB   | boot    | Kernel partition, bootable |
| 2           | 528MB  | rootfs  | Rootfs                     |

- 使用dd写入时的偏移量
```
dd if=idbloader.img   of=/dev/sdx seek=64
dd if=u-boot.itb      of=/dev/sdx seek=16384 
dd if=boot.img        of=/dev/sdx seek=32768 
dd if=rootfs.img      of=/dev/sdx seek=1081344
```

4. LED

- 在ROCK5B中，可以自定义蓝色LED的行为模式。通过写入 /sys/class/leds/blue:status/trigger 来控制蓝色 LED 的行为模式,只有root用户可以写入设备。
- 默认情况下， 蓝色LED为心跳模式。
- 默认情况下， 绿色LED激活表示为电路板已经通电。

- 你可以通过Cat命令查看可以设置的LED模式，输出的内容中，括号内为当前激活的模式。
```
root@rock-5b:/home/rock# cat /sys/class/leds/blue:status/trigger 
none rfkill-any rfkill-none kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock tcpm-source-psy-4-0022-online timer oneshot disk-activity disk-read disk-write ide-disk mtd nand-disk [heartbeat] backlight gpio cpu cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 cpu6 cpu7 activity default-on transient flash torch panic netdev mmc1 mmc0
```
- 例如设置为timer模式
```
root@rock-5b:/home/rock# echo activity > /sys/class/leds/blue:status/trigger
root@rock-5b:/home/rock# echo timer > /sys/class/leds/blue:status/trigger
```

5. RTC电池设备
- ROCK 5B配备了一颗RTC IC **hym8563**。  
- 首先，插入RTC电池给RTC IC供电。 
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中。插入电源适配器为 ROCK 5B 供电。并确认 rtc hym8563 设备已创建
```
root@rock-5b:/home/rock#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。
```
root@rock-5b:/home/rock# hwclock -r
2021-06-12 08:10:02.613381+08:00
root@rock-5b:/home/rock# date
Wed Jun 22 10:06:10 CST 2022
root@rock-5b:/home/rock# hwclock -w
root@rock-5b:/home/rock# hwclock -r 
root@rock-5b:/home/rock# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并打开rock5b，检查RTC是否与系统时钟同步
```
root@rock-5b:/home/rock# hwclock -r
2022-06-22 10:09:59.214788+08:00
root@rock-5b:/home/rock# date
Wed Jun 22 10:17:01 CST 2022
```

6. 以太网
- ROCK 5B配备1个2.5G网口。 您可以使用网线（一端连接到外部网络端口或路由）将您的 ROCK 5B 连接到网络。 ROCK 5B 会自动为您上网配置网络。

手动配置以太网
- 切换root用户
```
sudo su
```

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 eth0 或 enP4p65s0 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。
```
ifconfig
ping www.baidu.com
```

- 如果无法ping通，尝试
```
$ sudo dhclient eth0
or
$ sudo dhclient enP4p65s0
```

7. DP音响
- 通过 aplay 列出现有的声卡
```
root@rock-5b:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi1 [rockchip-hdmi1], device 0: rockchip-hdmi1 i2s-hifi-0 [rockchip-hdmi1 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-00
11-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- 指定声卡播放音频文件
```
//hw:0,0 means card 0,device 0. Here it refers to rockchipdp0 (DP sound)
root@rock-5b:/# aplay -D hw:0,0 /mnt/test.wav 
Playing WAVE '/mnt/test.wav' : Signed 16 bit Little Endian, Rate 44100 Hz, Stereo
```

8. 储存设备
- MicroSD卡: /dev/mmcblk0
- eMMC: /dev/mmcblk1
- NVME M.W SDD: /dev/nvme0n1

9. Benchmark表展示
    1. 以太网
        - 以太网吞吐量测试结果表。
    | Direction  | Bitrate        |
    |------------|----------------|
    | Upstream   | 2.34 Gbits/sec |
    | Downstream | 2.35 Gbits/sec |
    2. SD 卡
        - 这是128GB闪迪卡在ROCK 5B上的测试结果。
    | Operation | Speed    |
    |-----------|----------|
    | Read      | 87.9MB/s |
    | Write     | 66.3MB/s |
    3. GPU
    跑以下命令
    ```
    test_gpu_glmark2_fullscreen.sh
    ```
    ```
    test_gpu_glmark2_offscreen.sh
    ```

## ROCK5B配件使用

1. 风扇

![风扇安装-01](../../../../static/img/rock5b/fan-01.png)
- ROCK5B 有PWM风扇连接座。执行脚本test_fan_run.sh打开风扇
```
test_fan_run.sh
```

- test_fan_run.sh 脚本代码
```
# cat usr/local/bin/test_fan_run.sh 
#!/bin/bash
echo "Trun on Fan"
echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/export 
echo 10000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/period 
echo 5000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/duty_cycle 
echo normal > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/polarity 
echo 1 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable 
#echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable 
```

2. HDMI 8K

- 需要准备8K显示屏和一条质量较好的HDMI线缆,接上ROCK5B
- 启动后，添加一行到文件/boot/config.txt末尾
```
# 二选一添加。指定HDMI端口支持HDMI 8K
dtoverlay=rock-5b-hdmi1-8k
dtoverlay=rock-5b-hdmi2-8k
```                                                            

- 执行命令，然后重启设备。
```
$ sudo su
# update_extlinux.sh
# reboot
```

## 系统信息

1. 设备序列号
```
root@rock-5b:~# cat /proc/cpuinfo | grep Serial
Serial		: 099b83b055b47b27
```

2. 系统更新
- Radxa APT
Radxa APT源包括稳定源和测试源。稳定源包括稳定的软件包，而测试源包括最新但可能不稳定的软件包。
Radxa APT 稳定源是默认添加的，而测试源是不添加的。
你可以取消注释/etc/apt/sources.list.d/apt-radxa-com.list文件中的像"deb http://apt.radxa.com/bullseye-testing/ bullseye main"的行，以此来添加测试源。
例如，看/etc/apt/sources.list.d/apt-radxa-com.list文件
```
deb http://apt.radxa.com/bullseye-stable/ bullseye main
deb http://apt.radxa.com/bullseye-testing/ bullseye main
```
在添加测试源之后，你需要更新APT，然后再安装你需要的软件包
```
sudo apt-get update
```
更多细节请查看[Radxa APT](./apt#radxa-apt)


3. /boot/config.txt
/boot/config.txt是为内核参数和硬件配置设计的。请注意，在改变/boot/config.txt文件后，要执行 "update_extlinux.sh"。

- kernel parameters 内核参数
内核命令行：以 "cmdline: "开始。例如
```
# For console
cmdline: earlycon=uart8250,mmio32,0xfeb50000 console=ttyFIQ0 console=tty1 consoleblank=0 loglevel=7
# For rootfs
cmdline: panic=10 rootwait rw init=/sbin/init rootfstype=ext4
```

- 设备树overlay
设备树添加，此处有追加效果。一个dtoverlay占一行。例如
```
dtoverlay=rk3588-uart7-m2
```

## 通用硬件接口
GPIO, I2C, PWM, SPI, UART, CAN等
ROCK 5B的系统使用配置文件/boot/config.txt。

请注意，在修改文件/boot/config.txt之后，执行 "update_extlinux.sh "来更新/boot/extlinux/extlinux.conf。

dtbo文件位于 /boot/dtbs/$(uname -r)/rockchip/overlay/

- [GPIO](./rock5b_gpio)
- UART
- I2C
I2C0_M1

使能 I2C0_M1 (/dev/i2c-0)，添加一行 "dtoverlay=rk3588-i2c0-m1"。
```
dtoverlay=rk3588-i2c0-m1
```

I2C3_M1

使能 I2C3_M1 (/dev/i2c-3)，添加一行 "dtoverlay=rk3588-i2c3-m1"。
```
dtoverlay=rk3588-i2c3-m1
```

I2C8_M4

使能 I2C8_M4  (/dev/i2c-8)，添加一行 "dtoverlay=rk3588-i2c8-m4"。
```
dtoverlay=rk3588-i2c8-m4
```

- PWM
PWM2-M1

使能 PWM2-M1 (/sys/class/pwm/pwmchip2), 添加一行 "dtoverlay=rk3588-spi0-m2-cs0-spidev".
```
dtoverlay=rk3588-pwm2-m1
```

PWM3-M1

使能 PWM3-M1 (/sys/class/pwm/pwmchip3), 添加一行 "dtoverlay=rk3588-spi0-m2-cs0-spidev".
```
dtoverlay=rk3588-pwm3-m1
```

- SPI
SPI0-M2-CS0

使能 SPI0-M2-CS0 (/dev/spidev0.0), 添加一行 "dtoverlay=rk3588-spi0-m2-cs0-spidev".
```
dtoverlay=rk3588-spi0-m2-cs0-spidev
```

SPI0 M2 with CS1

使能 SPI0-M2-CS1 (/dev/spidev0.1), 添加一行 "dtoverlay=rk3588-spi0-m2-cs1-spidev".
```
dtoverlay=rk3588-spi0-m2-cs1-spidev
```

SPI1 M1 with CS0

使能 SPI1-M1-CS0 (/dev/spidev1.0), 添加一行 "dtoverlay=rk3588-spi1-m1-cs0-spidev".
```
dtoverlay=rk3588-spi1-m1-cs0-spidev
```

SPI1 M1 with CS1

使能 SPI1-M1-CS1 (/dev/spidev1.1), 添加一行 "dtoverlay=rk3588-spi1-m1-cs1-spidev".
```
dtoverlay=rk3588-spi1-m1-cs1-spidev
```
