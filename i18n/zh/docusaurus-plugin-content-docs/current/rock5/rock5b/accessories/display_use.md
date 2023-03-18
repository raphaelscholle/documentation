---
sidebar_label: '8/10寸显示屏使用教程'
sidebar_position: 3
---


# 8/10寸显示屏使用教程

![显示屏安装-01](/zh/img/rock5b/display-8hd-01.png)
![显示屏安装-02](/zh/img/rock5b/display-8hd-02.png)
- 准备好Radxa Display8HD或者Radxa Display8HD，通过FPC线接上ROCK5B。
- 启动后，添加一行到文件/boot/config.txt末尾
```
dtoverlay=rock-5b-radxa-display-8hd
# 或者
dtoverlay=rock-5b-radxa-display-10hd
```
- root权限执行命令，然后重启设备即可。
```
$ sudo su
# update_extlinux.sh
# reboot
```
