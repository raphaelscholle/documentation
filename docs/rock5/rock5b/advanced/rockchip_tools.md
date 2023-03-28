---
sidebar_label: 'RockChip Flashing Tools User Guide'
sidebar_position: 10
---

# RockChip工具使用

ROCK 5B支持maskrom模式，这是一种CPU 等待 USB OTG口命令的特殊运行模式。 

我们使用工具RKDevTool，这能让处于maskrom模式的ROCK 5B与 Linux/macOS PC通信。

Linux/macOS PC上的rkdeveloptool和Windows PC上的RKDevTool。

## Windows 上的 RKDevTool

1. 安装RKDevTool
该工具以压缩包形式提供。 请下载该工具的压缩包并解压文件。
[RKDevTool_v2.81](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.81.zip)
[RKDevTool_v2.92](https://dl.radxa.com/tools/windows/windows_RKDevTool_Release_v2.92.zip)
[RKDevTool_v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96-20221121.rar)

RKDevTool_v2.96 包含 ROCK 5B eMMC/SPI flash配置文件。推荐使用。


第二步：安装驱动

- 使用RK驱动助手工具（RK Driver Assitant）安装驱动。

- 在此过程中无需连接您的 ROCK 5B ，只需下载并解压 [RKDriverAssistant.zip](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

- 然后双击 RKDriverAssistant 目录中的 DriverInstall.exe 以启动该程序。 如果您已经为任何其他 Rockchip 设备安装了 Rockchip USB 驱动程序，请确保先单击“卸载驱动程序”。推荐先uninstall Driver，然后再Install Driver。

- 然后点击“Install Driver”安装驱动程序。 并重启电脑。

## Linux 上的 rkdeveloptool（X86 或 ARM）

- 对于 Linux，我们从源代码构建最新的 rkdeveloptool（版本 >=1.32）。

- 要在基于 Debian 的 Linux 发行版上构建 rkdeveloptool，请按照以下说明操作：

1. 安装构建依赖项：
```
  sudo apt-get install libudev-dev libusb-1.0-0-dev dh-autoreconf
```

2. 克隆源代码并构建：
```
  git clone https://github.com/radxa/rkdeveloptool.git
  cd rkdeveloptool
  autoreconf -i
  ./configure
  make
```

3. 如果遇到如下编译错误
```
./configure: line 4269: syntax error near unexpected token `LIBUSB1,libusb-1.0'
 ./configure: line 4269: `PKG_CHECK_MODULES(LIBUSB1,libusb-1.0)'
```

4. 你应该安装 pkg-config libusb-1.0
```
  sudo apt-get install pkg-config libusb-1.0
```

5. 然后重新运行
```
  autoreconf -i
  ./configure
  make
```

6. 现在您在当前目录中有了 rkdeveloptool 可执行文件。
```
  sudo cp rkdeveloptool /usr/local/bin/
  sudo ldconfig
```

7. 确保其版本为 1.32. 或更高版本
```
  rkdeveloptool -v
  rkdeveloptool ver 1.32
```

## rkdeveloptool on macOS(Intel & Apple Silicon)

1. 要在 macOS 上构建 rkdeveloptool，您需要 homebrew（或类似的包管理器）来安装所需的包。

2. 安装构建依赖项：
```
  brew install automake autoconf libusb
```

3. 克隆源代码并构建：
```
  git clone https://github.com/radxa/rkdeveloptool.git
  cd rkdeveloptool
  autoreconf -i
  ./configure
  make
```
4. 如果遇到如下编译错误
```
 ./configure: line 5384: syntax error near unexpected token `LIBUSB1,libusb-1.0'
 ./configure: line 5384: `PKG_CHECK_MODULES(LIBUSB1,libusb-1.0)'
```

5. 你应该安装 pkg-config libusb-1.0
```
  brew install pkg-config
```

6. 然后重新运行
```
  autoreconf -i
  ./configure
  make
```

7. 现在您在当前目录中有了 rkdeveloptool 可执行文件。
```
  sudo cp rkdeveloptool /opt/homebrew/bin/
```

8. 确保其版本为 1.32 或更高版本。
```
  rkdeveloptool -v
  rkdeveloptool ver 1.32
```