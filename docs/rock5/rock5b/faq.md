---
sidebar_label: 'FAQs'
sidebar_position: 4
---

# ROCK5B 相关问题FAQ

## 通用

- **怎么跟Radxa社区建立联系**
	* 论坛地址： [Radxa Wiki](http://forum.radxa.com)
	* Discord社群: [Radxa Discord](https://rock.sh/go)
	* QQ群： 591048098
	* Wechat： 
		- ![Radxa ROCK5B](../../../static/img/wechat_group/ROCK5B.png)

- **问：Rock 5B 将支持 WiFi 6E。 新的 rock 5b 主板是否带有 (6E) wifi 芯片。 还是要单独购买？**

	* 默认情况下不包括 WiFi 卡，因为不同的用户需要不同的 WiFi 速度。 Radxa 团队推荐使用 RTL8852BE 芯片的无线网卡，以在价格和性能之间取得平衡。

- **问：没有eMMC和TF卡，ROCK 5B可以从PCIe M.2 NVME SSD启动吗？**

	* 是的。 ROCK 5B 可以从 PCIe M.2 NVME SSD 启动。ROCK 5B 配备一个 16MB SPI Nor Flash 和 PCIe M.2 M-Key 连接器。SPI Nor Flash 存储 bootloader。 NVME SSD 存储整个系统映像（至少内核和 rootfs）。[SPI Nor Flash and PCIe NVME SSD boot](./advanced/install_images_nvme)

- **问：另外，散热器和风扇是否包含在价格中？**
	
	* 不，默认情况下不包括散热器和风扇。

- **问：我的新 ROCK 5B 无法启动/卡在无限启动循环中**
	
	* ROCK 5B 支持 USB PD 电源协商到更高的电压，如 9V、12V、15V、20V，以满足系统总电源负载要求（约 30W，WiFi、SSD、USB 外围设备等）。 目前PD协商是在内核驱动中实现的，需要开机到内核运行阶段才能开始协商，但是有些电源适配器等不到ROCK 5B的电源协商阶段，超时就断电，造成死循环。我们提供以下建议：
		- 这里强烈建议使用官方电源适配器[Radxa Power PD 30W](../../accessories/pd_30w). Radxa Power PD 30W 在 ROCK 5B 的所有条件下进行了测试。
		- 使用更高速的 SD 卡或 eMMC 模块并禁用引导加载程序/内核串行控制台
		- 使用虚拟 12V USB C 电源
		- 检查Radxa社区报告的其他电源是否可用[Others Supply Power](./accessories/support_accessories)。
		- 等待Radxa将PD协商移植到bootloader(u-boot)

- **问：我的ROCK 5B不开机，如何查看是否死机**

	* ROCK 5B故障排除步骤如下：
		1. ROCK 5B断电，取出eMMC模块、SD卡、NVMe SSD
		2. 按住 Maskrom Button按钮（**请查看ROCK5B标注图的标签 25**）[Maskrom Button](./intro)。
		3. 使用 USB Type A 转 Type C 线材将 ROCK 5B USB C 插入 PC
		4. 检查PC设备管理器中是否有新的USB设备，如果有，则ROCK 5B已上电。 如果没有，请尝试其他 USB 端口，我们建议将 ROCK 5B 连接到 PC主机的后面板。

- **问：Radxa APT 公钥不可用**

1. 当我尝试运行 apt update 时，出现以下错误：

```
root@rock-5b:~# apt update
Hit:1 http://security.debian.org/debian-security bullseye-security InRelease   
Hit:2 http://httpredir.debian.org/debian bullseye InRelease                    
Get:3 http://apt.radxa.com/bullseye-stable bullseye InRelease [2362 B]
Hit:4 http://httpredir.debian.org/debian bullseye-updates InRelease
Hit:5 http://httpredir.debian.org/debian bullseye-backports InRelease
Err:3 http://apt.radxa.com/bullseye-stable bullseye InRelease
  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 9B98116C9AA302C7
Reading package lists... Done
W: GPG error: http://apt.radxa.com/bullseye-stable bullseye InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 9B98116C9AA302C7
E: The repository 'http://apt.radxa.com/bullseye-stable bullseye InRelease' is not signed.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```
2. 原因是公钥已过期。 您可以执行以下命令以获得新的可用。

```
sudo apt-get install -y wget
export DISTRO=bullseye-stable
wget -O - apt.radxa.com/$DISTRO/public.key | sudo apt-key add -
sudo apt-get update
```
