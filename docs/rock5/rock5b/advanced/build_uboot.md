---
sidebar_label: '在ROCK 5B 构建U-Boot'
sidebar_position: 7
---

# 在ROCK 5B 构建U-Boot

- 准备：ROCK5B

## 安装必要包

```
sudo apt-get update
sudo apt-get install -y git  device-tree-compiler libncurses5 libncurses5-dev build-essential libssl-dev mtools bc python dosfstools flex bison
```

## 获取源代码

```
mkdir ~/rk3588-sdk && cd ~/rk3588-sdk
git clone -b stable-5.10-rock5 https://github.com/radxa/u-boot.git
git clone -b master https://github.com/radxa/rkbin.git
git clone -b debian https://github.com/radxa/build.git
```

- 你将得到以下内容

```
build   rkbin u-boot
```

### 介绍

- build: 用于构建u-boot、内核和rootfs 的一些脚本文件和配置文件。
- rkbin: 预构建的 Rockchip 二进制文件，包括第一阶段loader和 ATF（Arm Trustzone 固件）。
- u-boot: u-boot 作为第二阶段bootloader

## 构建u-boot

- 需要检查分支到 stable-5.10-rock5。
- 使用默认的 rock-5b-rk3588_defconfig 构建 u-boot。

```
cd ~/rk3588-sdk
./build/mk-uboot.sh rk3588-rock-5b #对于 ROCK 5B
```

- 生成的images将被复制到 out/u-boot 文件夹
```
ls out/u-boot/
idbloader.img rk3588_spl_loader_v1.07.111.bin spi u-boot.itb
```

## 写入u-boot镜像

- 先检查out/u-boot是否与如下一致
```
ls out/u-boot/
idbloader.img  rk3588_spl_loader_v1.07.111.bin  spi  u-boot.itb
```

- 烧录到指定存储介质
```
# emmc
sudo dd if=./idbloader.img of=/dev/mmcblk1 bs=512 seek=64
sudo dd if=./u-boot.itb of=/dev/mmcblk1 bs=512 seek=16384

# sd card
sudo dd if=./idbloader.img of=/dev/mmcblk0 bs=512 seek=64
sudo dd if=./u-boot.itb of=/dev/mmcblk0 bs=512 seek=16384

# spi nor flash
sudo dd if=./idbloader.img of=/dev/mtdblock0 bs=512 seek=64
sudo dd if=./u-boot.itb of=/dev/mtdblock0 bs=512 seek=16384
```