---
sidebar_label: 'Using Ubuntu'
sidebar_position: 7
---


# Ubuntu系统使用

## Ubuntu系统信息

ROCK 5B Ubuntu服务器使用systemd来管理系统。

命令前缀为$意味着该命令可以由非特权用户执行。而以#开头的命令意味着该命令可以由特权用户执行。但$或#这个符号不是命令的一部分。

1. 分区表

| Part Number | Offset | Name    | Description                |
|:-----------:|:------:|:-------:|:--------------------------:|
| (raw)       | 32KB   | loader1 | First stage loader         |
| (raw)       | 8MB    | loader2 | U-boot image               |
| 1           | 16MB   | boot    | Kernel partition, bootable |
| 2           | 528MB  | rootfs  | Rootfs                     |

2. 使用dd写入时的偏移量
```
dd if=idbloader.img   of=/dev/sdx seek=64
dd if=u-boot.itb      of=/dev/sdx seek=16384 
dd if=boot.img        of=/dev/sdx seek=32768 
dd if=rootfs.img      of=/dev/sdx seek=1081344
```

3. Radxa APT
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

4. 更新必要的包
下面是升级rockchip-overlay和kernel软件包的例子。
```
$ sudo apt-get update
$ sudo apt-get install -y rockchip-overlay
```

5. LED
在rock5上，一个LED被配置为LED类设备。

你可以通过/sys/class/leds/来控制它。

三个板载LED的默认状态是闪烁

```
root@rock-5b:/home/rock# echo none > /sys/class/leds/sta/trigger
root@rock-5b:/home/rock# echo activity > /sys/class/leds/sta/trigger
root@rock-5b:/home/rock# echo timer > /sys/class/leds/sta/trigger
```

你可以使用 cat 命令列出/sys/class/leds/sta/trigger支持的LED模式

```
root@rock-5b:/home/rock# cat /sys/class/leds/sta/trigger 
none rfkill-any rfkill-none kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock tcpm- source-psy-4-0022-online timer oneshot disk-activity disk-read disk-write id-disk mtd nand-disk heartbeat backlight gpio cpu cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 cpu6 cpu7 mmc0 mmc2 activity [default-on] transient flash torch panic netdev
```

6. RTC电池设备
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

7. 风扇

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

8. 以太网
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

9. 存储设备
- MicroSD卡: /dev/mmcblk0
- eMMC: /dev/mmcblk1
- NVME M.W SDD: /dev/nvme0n1
