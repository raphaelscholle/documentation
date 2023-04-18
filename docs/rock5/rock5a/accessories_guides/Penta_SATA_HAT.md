---
sidebar_label: 'Using Penta SATA HAT on ROCK 5A'
sidebar_position: 20
---

# How to setup Penta SATA HAT on ROCK 5A

- The picture shows the ROCK 5A with Radxa PENTA SATA HAT.
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-05.jpg)

- The picture below shows the RADXA Penta SATA HAT and the included parts.
**Please click the link for details. [Penta SATA HAT](../../../accessories/penta_sata_hat)**
![ROCK5A Install M.2 Extension Board](/img/accessories/penta-sata-hat-01.jpg)

- Please distinguish the front and back side of the EDP cable first. As shown in the picture. **The two ends of the EDP cable we provide for ROCK5A are oriented in the same direction.**
![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-04.jpg)

- Please note that the ring buckle needs to jam into the connector.
![E key to M key](/img/accessories/ekey-to-mkey-01.jpg)

## Install Guide

1. M.2 E key to M.2 M key Board with EDP Cable. **Note that the EDP cable is installed here with the front side up and the ring buckle needs to be jammed to the interface to ensure that it is fixed.**
![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-02.jpg)

2. Radxa Penta SATA HAT Board with EDP Cable. **Note that the EDP cable is installed here with the front side up and the ring buckle needs to be jammed to the interface to ensure that it is fixed.**
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-04.jpg)

3. Please install the M2.5x18+6 copper post and M2.5x5 copper post included with the product on the ROCK5A as shown in the picture.
![ROCK5A Install M.2 Extension Board](/img/rock5a/rock5a-m2-extension-board-04.jpg)

4. Please Connect one end of the EDP cable to the M.2 E key to M Key board and the other end to the Radxa Penta SATA HAT and Install the M.2 E key to M key board to the M.2 E key connector of ROCK5A. As shown in the picture.
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-03.jpg)

5. Finally, the Radxa Penta SATA HAT is assembled using M2.5x5+5 copper posts.
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-01.jpg)
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-02.jpg)

## As a storage drive

1.  you can check whether the SATA devices is recognized by ```lsblk```.
```
radxa@rock-5a:~$ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda            8:0    0 465.8G  0 disk 
└─sda1         8:1    0 465.8G  0 part 
sdb            8:16   0 465.8G  0 disk 
└─sdb1         8:17   0 465.8G  0 part 
sdc            8:32   0 465.8G  0 disk 
└─sdc1         8:33   0 465.8G  0 part 
sdd            8:48   0 465.8G  0 disk 
└─sdd1         8:49   0 465.8G  0 part 
mmcblk0      179:0    0  14.5G  0 disk 
├─mmcblk0p1  179:1    0    16M  0 part /config
└─mmcblk0p2  179:2    0  14.4G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
zram0        254:0    0   3.8G  0 disk [SWAP]
radxa@rock-5a:~$ 
```
2. As you can see, the system has recognized the SATA devices(sda/sdb/sdc/sdd).