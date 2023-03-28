---
sidebar_label: 'Build Debian with debos-radxa'
sidebar_position: 8
---

# Rockchip Debian SDK

## 准备

- 准备ROCK 5B

### 获取源代码

- 您需要 Git 获取多个 git 存储库来构建映像。
```
sudo apt-get update
sudo apt-get install git
```
- 克隆源代码
```
mkdir ~/rk3588-sdk && cd ~/rk3588-sdk
git clone -b stable-5.10-rock5 https://github.com/radxa/u-boot.git
git clone -b stable-5.10-rock5 https://github.com/radxa/kernel.git
git clone -b master https://github.com/radxa/rkbin.git
git clone -b debian https://github.com/radxa/build.git
git clone -b main https://github.com/radxa/debos-radxa.git
```
- 你将得到以下
```
build  kernel  rkbin u-boot
```

### 介绍

- build： 用于构建u-boot、内核和rootfs 的一些脚本文件和配置文件。
- kernel：内核源代码，当前版本为4.19.193。
- rkbin： 预构建的 Rockchip 二进制文件，包括第一阶段loader和 ATF（Arm Trustzone 固件）。
- u-boot： u-boot 作为第二阶段bootloader。


### 安装工具链

```
wget https://dl.radxa.com/tools/linux/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu.tar.gz
sudo tar zxvf gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu.tar.gz -C /usr/local/
```

- 将以下行添加到文件末尾 ~/.bashrc
```
export PATH="/usr/local/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin:$PATH"
```

- 重置~/.bashrc
```
source ~/.bashrc
```

- 检查toolchain版本
```
radxa@x86-64:~$ which aarch64-none-linux-gnu-gcc
/usr/local/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc

radxa@x86-64:~$ aarch64-none-linux-gnu-gcc -v
Using built-in specs.
COLLECT_GCC=aarch64-none-linux-gnu-gcc
COLLECT_LTO_WRAPPER=/usr/local/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/../libexec/gcc/aarch64-none-linux-gnu/10.3.1/lto-wrapper
Target: aarch64-none-linux-gnu
Configured with: /data/jenkins/workspace/GNU-toolchain/arm-10/src/gcc/configure --target=aarch64-none-linux-gnu --prefix= --with-sysroot=/aarch64-none-linux-gnu/libc --with-build-sysroot=/data/jenkins/workspace/GNU-toolchain/arm-10/build-aarch64-none-linux-gnu/install//aarch64-none-linux-gnu/libc --with-bugurl=https://bugs.linaro.org/ --enable-gnu-indirect-function --enable-shared --disable-libssp --disable-libmudflap --enable-checking=release --enable-languages=c,c++,fortran --with-gmp=/data/jenkins/workspace/GNU-toolchain/arm-10/build-aarch64-none-linux-gnu/host-tools --with-mpfr=/data/jenkins/workspace/GNU-toolchain/arm-10/build-aarch64-none-linux-gnu/host-tools --with-mpc=/data/jenkins/workspace/GNU-toolchain/arm-10/build-aarch64-none-linux-gnu/host-tools --with-isl=/data/jenkins/workspace/GNU-toolchain/arm-10/build-aarch64-none-linux-gnu/host-tools --enable-fix-cortex-a53-843419 --with-pkgversion='GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)'
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 10.3.1 20210621 (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29))
```

- 安装其余工具
```
sudo apt-get install device-tree-compiler libncurses5 libncurses5-dev build-essential libssl-dev mtools bc python dosfstools
```

## 构建u-boot

- 需要检查分支 stable-5.10-rock5。

- 使用默认的 rock-5b-rk3588_defconfig 构建 u-boot。
```
cd ~/rk3588-sdk
./build/mk-uboot.sh rk3588-rock-5b # For ROCK 5B
```

- 生成的images将被复制到 out/u-boot 文件夹
```
ls out/u-boot/
idbloader.img rk3588_spl_loader_v1.07.111.bin spi u-boot.itb
```

## 写入u-boot

- 先检查out/u-boot 中的文件内容是否与如下一致：
```
ls out/u-boot/
idbloader.img  rk3588_spl_loader_v1.07.111.bin  spi  u-boot.itb
```

- 烧录 u-boot 到你的存储介质
```
sudo dd if=./idbloader.img of=/path/to/storage/device bs=512 seek=64
sudo dd if=./u-boot.itb of=/path/to/storage/device bs=512 seek=16384
```

## 构建内核Kernel

- 需要检查分支到 stable-5.10-rock5。

- 使用默认的 rockchip_linux_defconfig 构建内核kernel。
```
cd ~/rk3588-sdk
./build/mk-kernel.sh rk3588-rock-5b #For ROCK 5B
```

### 更改内核配置

可以选择性更改默认内核配置
```
cd ~/rk3588-sdk
cd kernel
export ARCH=arm64
export CROSS_COMPILE=aarch64-none-linux-gnu-
make rockchip_linux_defconfig
make menuconfig
make savedefconfig
cp defconfig arch/arm64/configs/rockchip_linux_defconfig
cd ..
./build/mk-kernel.sh rk3588-rock-5b    #For ROCK 5B
```

- 您将获得内核映像和 dtb 文件
```
ls out/kernel/
Image  rk3588-rock-5b.dtb
```

## 构建内核deb包

- 内核包构建可以将内核、设备树、模块和固件打包成 Debian 包，这使得在 ROCK 5B 上安装更容易。

```
./build/pack-kernel.sh -d rockchip_linux_defconfig -r 10 # rockchip_linux_defconfig: kernel defconfig; 1: release number
```

- 生成的包将被复制到 out/packages 目录。

```
ls out/packages/
linux-5.10.66-10-rockchip-ge5013df5e066_5.10.66-10-rockchip_arm64.changes
linux-image-5.10.66-10-rockchip-ge5013df5e066-dbg_5.10.66-10-rockchip_arm64.deb
linux-headers-5.10.66-10-rockchip-ge5013df5e066_5.10.66-10-rockchip_arm64.deb
linux-libc-dev_5.10.66-10-rockchip_arm64.deb
linux-image-5.10.66-10-rockchip-ge5013df5e066_5.10.66-10-rockchip_arm64.deb
```

- 当您想要将指定的内核包安装到您的操作系统时，请尝试以下步骤。
- 将 linux-image-5.10.66-10-rockchip-ge5013df5e066-dbg_5.10.66-10-rockchip_arm64.deb 复制到您的 ROCK 5B。
- 将它们安装在 ROCK 5 上。
```
# dpkg -i linux-image-5.10.66-10-rockchip-ge5013df5e066-dbg_5.10.66-10-rockchip_arm64.deb
```

## 生成系统镜像image

- 删除旧的 ROCK 5B U-boot 和内核包。

```
$ cd ~/rk3588-sdk/debos-radxa

$ ls rootfs/packages/arm64/kernel/*5.10.66*
rootfs/packages/arm64/kernel/linux-headers-5.10.66-6-rockchip-gbb60f4aeba31_5.10.66-6-rockchip_arm64.deb
rootfs/packages/arm64/kernel/linux-image-5.10.66-6-rockchip-gbb60f4aeba31_5.10.66-6-rockchip_arm64.deb

$ ls rootfs/packages/arm64/u-boot/rock-5b*
rootfs/packages/arm64/u-boot/rock-5b-rk-ubootimg_2017.09-g592fa62ffe2-220419_all.deb
```

- 将新的 ROCK 5B U-boot 和 Kernel 包复制到指定位置。 
- 比如 Kernel packages 在 rootfs/packages/arm64/kernel/ 和 U-boot 在 rootfs/packages/arm64/u-boot。

- 设置Docker

```
$ cd ~/rk3588-sdk/debos-radxa
$ ./docker/dev-shell
```

- 在 Docker 容器中构建镜像image。
```
# ./build.sh -c rk3588 -b rock-5b -m debian -d bullseye -v xfce4 -a arm64 -f gpt
```

- 生成的系统镜像system images会被复制到~/rk3588-sdk/debos-radxa/output 目录。

- 最后烧录镜像即可。Flash the image
