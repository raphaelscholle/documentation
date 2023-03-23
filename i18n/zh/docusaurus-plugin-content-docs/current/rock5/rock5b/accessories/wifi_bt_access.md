---
sidebar_label: 'WIFI&BT使用教程'
sidebar_position: 2
---


# WIFI & BT 使用教程

- ROCK 5B 不配备板载 WiFi/BT模块，需要外接模块。测试并支持的[WIFI/BT卡](../accessories/support_accessories)
- 该处示范的M.2无线模块为: Radxa Wireless Module A8
![Radxa Wireless Module A8](/zh/img/accessories/a8-module-01.png)
- 安装如图所示：
![Radxa Wireless Module A8](/zh/img/accessories/a8-module-02.png)

## WIFI 使用

1. 先进入到ROOT用户模式
```
sudo su
```

2. 打开 WIFI
```
nmcli r wifi on
```

3. 扫描 WIFI
```
nmcli dev wifi
```

4. 连接 WIFI 网络
```
nmcli dev wifi connect "wifi_name" password "wifi_password"
```

## 蓝牙使用
- 当您使用 Radxa Wireless A8 Module 时，您必须添加如下黑名单才能使 BT 正常工作。
```
root@rock-5b:~# cat /etc/modprobe.d/blacklist.conf 
blacklist pgdrv
blacklist btusb
blacklist btrtl
blacklist btbcm
blacklist btintel

root@rock-5b:~# reboot
```

- Radxa APT 包括 Broadcom 无线模块的 broadcom-wifibt-firmware 包和 Intel 无线模块的 intel-wifibt-firmware 包。 需要下载相应的包。
```
root@rock-5b:~# apt-get update -y
root@rock-5b:~# apt-get install -y broadcom-wifibt-firmware intel-wifibt-firmware
```

1. 测试蓝牙模块情况，检查蓝牙设备。
```
root@rock-5b:~# systemctl status bluetooth
```

2. 运行蓝牙设备。
```
root@rock-5b:~# systemctl start bluetooth
```

3. 检测蓝牙设备
```
root@rock-5b:~# hciconfig
hci0:   Type: Primary  Bus: UART
       BD Address: 10:2C:6B:49:D5:53  ACL MTU: 1021:8  SCO MTU: 64:1
       UP RUNNING 
       RX bytes:850 acl:0 sco:0 events:58 errors:0
       TX bytes:2814 acl:0 sco:0 commands:58 errors:0
```

4. 测试：连接蓝牙扬声器,首先安装 pulseaudio 
```
root@rock-5b:~# apt-get install -y pulseaudio-module-bluetooth pulseaudio
```

5. 运行 pulseaudio
```
root@rock-5b:~# pulseaudio --start
```

6. 使用 pulseaudio连接
```
root@rock-5b:~# bluetoothctl
[bluetooth]# default-agent 
[bluetooth]# power on
[bluetooth]# scan on
[bluetooth]# trust 41:42:1A:8D:A9:65       #BT-280
[bluetooth]# pair 41:42:1A:8D:A9:65
[bluetooth]# connect 41:42:1A:8D:A9:65
```

7. 音乐试听即可
