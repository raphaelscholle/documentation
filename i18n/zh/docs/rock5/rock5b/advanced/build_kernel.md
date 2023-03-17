---
sidebar_label: '在ROCK 5B 构建Kernel'
sidebar_position: 6
---

# 在ROCK 5B 构建Kernel

- 准备 ROCK5B

## 安装必要包

```
$ sudo apt-get update
$ sudo apt-get install -y git  device-tree-compiler libncurses5 libncurses5-dev build-essential libssl-dev mtools bc python dosfstools bison flex rsync u-boot-tools make
```

## 获取源代码

```
$ mkdir ~/rk3588-sdk && cd ~/rk3588-sdk
$ git clone -b linux-5.10-gen-rkr3.4 https://github.com/radxa/kernel.git
$ git clone -b master https://github.com/radxa/rkbin.git
$ git clone -b debian https://github.com/radxa/build.git
```

- 你将获得如下内容
```
build  kernel  rkbin
```

### 介绍

- build: 用于构建u-boot、内核和rootfs 的一些脚本文件和配置文件。
- rkbin: 预构建的 Rockchip 二进制文件，包括第一阶段loader和 ATF（Arm Trustzone 固件）。
- u-boot: u-boot 作为第二阶段bootloader

## 构建Kernel

- 默认选择内核分支： linux-5.10-gen-rkr3.4.
- 构建Kernel默认 rockchip_linux_defconfig.

```
$ cd ~/rk3588-sdk
$ ./build/mk-kernel.sh rk3588-rock-5b    # For ROCK 5B
```

## 修改内核配置文件

- 可以选择修改内核配置文件

```
$ cd ~/rk3588-sdk
$ cd kernel
$ make rockchip_linux_defconfig
$ make menuconfig
$ make savedefconfig
$ cp defconfig arch/arm64/configs/rockchip_linux_defconfig
```

- 用新的配置文件构建Kernel

```
$ cd ~/rk3588-sdk
$ ./build/mk-kernel.sh rk3588-rock-5b    # For ROCK 5B
```

- 你将得到内核image 和 dtb 文件

```
$ ls out/kernel/
Image  rk3588-rock-5b.dtb
```

## 构建Kernel包

- 内核包kernel package构建可以将内核、设备树、模块和固件打包成 Debian 包，这使得在 ROCK 5B 上安装更容易。

```
$ ./build/pack-kernel.sh -d rockchip_linux_defconfig -r 99 # [-d rockchip_linux_defconfig: kernel defconfig] [99: release number]
```

- 生成的包将被复制到 out/packages 目录。

```
$ ls out/packages/
linux-5.10.110-99-rockchip-g9fd61a9a9912_5.10.110-99-rockchip_arm64.changes
linux-headers-5.10.110-99-rockchip-g9fd61a9a9912_5.10.110-99-rockchip_arm64.deb
linux-image-5.10.110-99-rockchip-g9fd61a9a9912-dbg_5.10.110-99-rockchip_arm64.deb
linux-image-5.10.110-99-rockchip-g9fd61a9a9912_5.10.110-99-rockchip_arm64.deb
linux-libc-dev_5.10.110-99-rockchip_arm64.deb
```

## 安装kernel包

- 当您想要将指定的内核包安装到您的操作系统时，请尝试以下步骤。

```
$ sudo dpkg -i out/packages/linux-headers-5.10.110-99-rockchip-g9fd61a9a9912_5.10.110-99-rockchip_arm64.deb
$ sudo dpkg -i out/packages/linux-image-5.10.110-99-rockchip-g9fd61a9a9912_5.10.110-99-rockchip_arm64.deb
```

- 你会发现在/boot目录下生成了一些文件。
- 检查**配置文件/boot/extlinux/extlinux.conf。**

```
timeout 10
menu title select kernel

# Set default kernel version
default kernel-5.10.110-99-rockchip-g9fd61a9a9912

label kernel-5.10.110-99-rockchip-g9fd61a9a9912
    kernel /vmlinuz-5.10.110-99-rockchip-g9fd61a9a9912
    initrd /initrd.img-5.10.110-99-rockchip-g9fd61a9a9912
    devicetreedir /dtbs/5.10.110-99-rockchip-g9fd61a9a9912
    append   root=UUID=a6820e76-421d-4275-bdae-0ad612df361b earlycon=uart8250,mmio32,0xfeb50000 console=ttyFIQ0 console=tty1 consoleblank=0 loglevel=7 panic=10 rootwait rw init=/sbin/init rootfstype=ext4 cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory swapaccount=1 irqchip.gicv3_pseudo_nmi=0 switolb=1 coherent_pool=2M

label kernel-5.10.110-34-rockchip-gca15bbe36e6c
    kernel /vmlinuz-5.10.110-34-rockchip-gca15bbe36e6c
    initrd /initrd.img-5.10.110-34-rockchip-gca15bbe36e6c
    devicetreedir /dtbs/5.10.110-34-rockchip-gca15bbe36e6c
    append   root=UUID=a6820e76-421d-4275-bdae-0ad612df361b earlycon=uart8250,mmio32,0xfeb50000 console=ttyFIQ0 console=tty1 consoleblank=0 loglevel=7 panic=10 rootwait rw init=/sbin/init rootfstype=ext4 cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory swapaccount=1 irqchip.gicv3_pseudo_nmi=0 switolb=1 coherent_pool=2M
```

-  重启设备之后，检查内核版本

```
$ uname -a
Linux rock-5b 5.10.110-99-rockchip-g9fd61a9a9912 #rockchip SMP Sun Jan 29 17:51:26 UTC 2023 aarch64 GNU/Linux
```

## FAQs

- 构建内核包时，出现“internal compiler error: Segmentation fault”错误，如下：
```
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8852bu/phl/test/verify/phl_test_verify.o
during GIMPLE pass: local-fnsummary
drivers/net/wireless/rockchip_wlan/rtl8852be/phl/test/mp/phl_test_mp_reg.c: In function 'phl_mp_reg_read_macreg':
drivers/net/wireless/rockchip_wlan/rtl8852be/phl/test/mp/phl_test_mp_reg.c:320:1: internal compiler error: Segmentation fault
  320 | }
      | ^
Please submit a full bug report,
with preprocessed source if appropriate.
See <file:///usr/share/doc/gcc-10/README.Bugs> for instructions.
The bug is not reproducible, so it is likely a hardware or OS problem.
make[9]: *** [scripts/Makefile.build:274: drivers/net/wireless/rockchip_wlan/rtl8852be/phl/test/mp/phl_test_mp_reg.o] Error 1
make[9]: *** Waiting for unfinished jobs....
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8852bu/phl/test/verify/dbcc/phl_test_dbcc.o
```

- 我们可以忽略它。 请在repository build构建中添加以下补丁。 并通过命令再次构建内核
```
./build/pack-kernel.sh -d rockchip_linux_defconfig -r 99
```

```
diff --git a/pack-kernel.sh b/pack-kernel.sh
index 5aa2e89ca..2ec116808 100755
--- a/pack-kernel.sh
+++ b/pack-kernel.sh
@@ -34,7 +34,7 @@ if [ "X$(uname -m)" == "Xaarch64" ]; then
 fi
 
 echo -e "\e[31m Start to pack kernel. \e[0m"
-cd ${KERNEL_DIR} && make distclean && make -f $ROCKCHIP_BSP_DIR/build/kernel-package.mk kernel-package
+cd ${KERNEL_DIR} && make -f $ROCKCHIP_BSP_DIR/build/kernel-package.mk kernel-package
 
 mv $ROCKCHIP_BSP_DIR/linux-*${RELEASE_NUMBER}-rockchip*.deb $PACKAGES_DIR
 mv $ROCKCHIP_BSP_DIR/linux-*${RELEASE_NUMBER}-rockchip*.changes $PACKAGES_DIR
```
