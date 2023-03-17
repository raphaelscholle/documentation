---
sidebar_label: '注意事项'
sidebar_position: 2
---
# 注意事项

## 电气规格

### 电源要求

ROCK 5B只能通过以下方式供电：

- USB C PD 电源适配器
- 来自 GPIO PIN 2 和 4 的 5V 电源

建议的电源容量至少为 24W（不带 M.2 SSD）或 36W（带 M.2）
固态硬盘

### GPIO电压

| GPIO       | Voltage Level | Tolerance |
|------------|---------------|-----------|
| GPIO3_C0   | 3.3V          | 3.465V    |
| ADC_IN0    |  1.8V         | 1.98V     |
| Other GPIO |  3.0V         | 3.14V     |

## Radxa APT

Radxa APT是Radxa维护的Debian软件包库，提供ROCK Pi和Rockchip供应商的特定软件包。

目前Radxa APT支持Debian Stretch、Debian Buster和Ubuntu Bionic，每个发行版都有测试版和稳定版软件库，请选择以下其中一个。
```
export DISTRO=bionic-stable
 export DISTRO=bionic-testing      # update more frequently but maybe unstable
 export DISTRO=focal-stable
 export DISTRO=focal-testing      # update more frequently but maybe unstable
 export DISTRO=stretch-stable
 export DISTRO=stretch-testing      # update more frequently but maybe unstable
 export DISTRO=buster-stable
 export DISTRO=buster-testing      # update more frequently but maybe unstable
 export DISTRO=bullseye-stable
 export DISTRO=bullseye-testing      # update more frequently but maybe unstable
```

添加Radxa APT
```
echo "deb http://apt.radxa.com/$DISTRO/ ${DISTRO%-*} main" | sudo tee -a /etc/apt/sources.list.d/apt-radxa-com.list
```

### 对于中国用户

将http://apt.radxa.com 或者 apt.radxa.com 替换为 https://radxa-apt.aghost.cn使用。

radxa-apt.aghost.cn为个人对apt.radxa.com做的镜像站，仅有5mbps带宽，并且不对可用性以及更新及时性做任何保证，仅保证提供的包的内容与官方一致。

By aghost< ggg17226@gmail.com >

公匙
```
wget -O - apt.radxa.com/$DISTRO/public.key | sudo apt-key add -
```
更新
```
sudo apt update
```
