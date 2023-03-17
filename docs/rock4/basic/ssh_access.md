---
sidebar_label: 'SSH访问教程'
sidebar_position: 3
---

# SSH访问教程

## 必要准备

- ROCK5B 主板
- RJ45 网线
- 主机PC
- 路由器/交换机

## 使用Angryip找到ROCK5B的ip地址

- 首先主机PC需要下载[Angryip](https://angryip.org/download/),然后确保主机PC 和 ROCK5B 处于同一局域网。

- 打开Angryip，选择IP 范围，范围在192.168.2.0 - 192.168.2.255。 点击开始，如图所示。

- ![Angryip](../../../static/img/rock5b/rock-5b-ssh-01.png)

- Ctrl + F 查找```rock```关键词，找到ROCK 5B的IP地址。

## 连接:

- ssh登录rock5b

```
ping rock5b的ip地址
ssh rock@rock5b的ip地址
```

- 若支持**本地域名(Local Domain)**,则可以使用一下命令，而不用扫描rock5b的ip地址。

```
ping rock-5b.local
ssh rock@rock-5b.local
```
