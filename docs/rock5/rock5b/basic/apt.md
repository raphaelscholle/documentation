---
sidebar_label: '软件源'
sidebar_position: 2
---

## Radxa APT

Radxa APT 是 Radxa 维护的 Debian 软件包库，提供 Radxa 维护的 ROCK 产品相关的软件包和 Rockchip 提供的二进制软件包。

目前 Radxa APT 支持 Debian Stretch、Debian Buster和Ubuntu Bionic，每个发行版都有测试版和稳定版软件库，请选择以下其中一个。
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
