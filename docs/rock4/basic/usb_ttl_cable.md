---
sidebar_label: '串口设置教程'
sidebar_position: 4
---


# USB to TTL Cable 使用教程

- ROCK 5B有专门的串口控制台，可以访问低级的调试消息。

## 必要准备

- ROCK 5B 主板
- USB Type C口电源适配器和USB Type C 转 USB Type C线材
- 主机PC（Windows 或者 Linux 系统）

- USB to TTL串口线材
- ![USB to TTL Cable](../../../static/img/accessories/usb-ttl-01.jpeg)

***注意： 这里演示使用的电源适配器配件是官方[Radxa Power PD 30W](../../../static/img/accessories/pd_30w) 和 官方的 USB to TTL Cable（如上图所示）***

***注意： ROCK 5B 默认波特率为 1500000(1.5Mbps)，请检查您的 USB 转 TTL 线是否支持 1.5Mbps 波特率。 [CP210X](https://www.silabs.com/interface/usb-bridges)和[PL2303x](https://www.prolific.com.tw/US/index.aspx)部分型号有波特率限制，FT232RL有一些[电源问题](https://forum.radxa.com/t/u-boot-cant-boot-with-serial-console-attached/7684)，请查看指定型号。 我们还测试了一些电缆不能正常工作。 确保选择高质量的。 以下说明使用基于 [CH340_series](http://wch-ic.com/products/CH340.html) 的电缆。***

***注意： macOS平台的串口工具好像受驱动限制不能支持1.5Mbps等自定义波特率。 如果您知道如何在 macOS 上设置自定义波特率，请在此处添加一项以显示您的发现。***

## 串口连接

- 如下所示连接 USB 转 TTL 串行电缆。 **不要连接红线**，如图所示。

| ROCK 5B    | 连接    | USB to TTL cable |
|------------|-------|------------------|
| RX(pin 10) | <---> | 绿色线       |
| TX(pin 8)  | <---> | 白色线       |
| GND(pin 6) | <---> | 黑色线       |

- ![USB to TTL Cable](../../../static/img/accessories/usb-ttl-02.jpeg)

## 主机串口连接ROCK5B

ROCK 5B u-boot 和内核控制台的默认串行设置是：
```
baudrate: 1500000
data bit: 8
stop bit: 1
parity  : none
flow control: none
```

### minicom

***支持 Linux***

1. 将串口USB端插入主机PC后，TTL端正确插入主板后。请先确定找到串口设备，输入以下命令，查看是否有输出。
```
ls /dev/ttyUSB0
```

***注意： 这里串口存在无权限读取的情况.***

***临时处理: 通过chmod命令***
```
sudo chmod 777 /dev/ttyUSB0
```

***永久处理： 通过将当前用户加入dialout组***
```
sudo usermod -aG dialout 当前用户名
``` 

2. minicom 是支持宽范围波特率的串口工具。 安装minicom：
```
sudo apt-get update
sudo apt-get install minicom
```

3. 设置minicom。首先将当前非root或者不使用sudo的用户加入plugdev组
```
sudo usermod -aG plugdev 当前用户名
``` 

4. 编辑 ~/.bashrc，添加一下参数，打开新的终端后即可生效。
```
alias minicom='minicom -w -t xterm -l -R UTF-8'
```

5. 创建并且编辑文件 ~/.minirc.rock5b，添加下列内容，该处目的是设置ROCK5的配置。
```
pu port             /dev/ttyUSB0
pu baudrate         1500000
pu bits             8
pu parity           N
pu stopbits         1
pu rtscts           No
```

6. 现在运行以下命令，即可连接ROCK 5B主板。 参数rock5b是为了使用上面的配置。
```
minicom rock5b
```

***注意***
- 按照上面的正确线序插入USB to TTL线材，然后将 USB 一端插入主机后。命令行输入```dmesg | tail```会输出以下信息：
```
[1036835.654076] usb 1-6.4.3: new full-speed USB device number 103 using xhci_hcd
[1036835.755730] usb 1-6.4.3: New USB device found, idVendor=0403, idProduct=6001
[1036835.755732] usb 1-6.4.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[1036835.755733] usb 1-6.4.3: Product: USB <-> Serial
[1036835.755734] usb 1-6.4.3: Manufacturer: FTDI
[1036835.756728] ftdi_sio 1-6.4.3:1.0: FTDI USB Serial Device converter detected
[1036835.756750] usb 1-6.4.3: Detected FT232BM
[1036835.757195] usb 1-6.4.3: FTDI USB Serial Device converter now attached to ttyUSB0
```

### Putty

***支持 Windows***

[Putty](https://www.putty.org/) 是一个很棒的串口工具，支持宽范围的波特率。

1. 将 USB 转 TTL 线材的 USB 一端插入 Windows PC。 查看**设备管理器**，您可以找到 COM 编号。 这里是 COM3。

2. 在 Windows PC 上启动应用程序 Putty。 并按如下方式进行设置：
	- 在左边栏目中选择Session，将串行线路设置为 COM3，波特率设置 1500000，连接类型为Serial。
	- 在 Saved Sessions 列中写入 rock5b，然后按 Save。
	- ![Putty-Setting-01](../../../static/img/rock5b/rock-5b-putty-01.jpg)

3. 在左边栏目选择最底下的Serial，如图设置：
	- ![Putty-Setting-02](../../../static/img/rock5b/rock-5b-putty-02.jpg)

4. 一旦设置完成，点击Open打开串口，确保TTL端正确接入之后，接通ROCK5B的电源即可。


### Tabby

***支持Windows、Linux、MacOS***

[Tabby](https://tabby.sh/) 也是一个很棒的串口工具，支持宽范围的波特率。 

1. 打开Tabby后，点击图中红色方框，如图所示：
- ![Tabby-Setting-01](../../../static/img/rock5b/rock-5b-tabby-01.png)

2. 下拉找到自动识别的串口设备，点击打开即可，如图所示：
- ![Tabby-Setting-02](../../../static/img/rock5b/rock-5b-tabby-02.png)

3. 选择波特率 1500000，如图所示：
- ![Tabby-Setting-03](../../../static/img/rock5b/rock-5b-tabby-03.png)

4. 显示串口打开即可。 这里存在Linux无权限读取串口，请查看该页面下minicom的串口权限设置方法。
- ![Tabby-Setting-04](../../../static/img/rock5b/rock-5b-tabby-04.png)

### Picocom

***支持MacOS***

1. 安装picocom
```
% brew install --build-from-source radxa/picocom/picocom
```

2. 开启picocom
```
% picocom -b 1500000 -d 8 /dev/tty.usbserial-2130
```

## FAQs

1. 使用调试控制台时，屏幕上有系统启动信息，但无法使用键盘输入文字？

- 原因之一可能是串口工具设置错误，比如Hardware Flow Control等，这里我们应该关闭Hardware Flow Control。

