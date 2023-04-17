---

sidebar_label: 'Using M.2 E Key extension board on ROCK 5A'
sidebar_position: 20
---

# How to setup M.2 E Key extension board on ROCK 5A

- This is the overall effect of ROCK5A with M.2 Extension Board.   
**Here you need M.2 E key to M key Board. please continue to see the installation steps below.**
![ROCK5A Install M.2 Extension Board](/img/rock5a/rock5a-m2-extension-board-01.jpg)

- The picture below shows the M.2 Extension Board for ROCK5A.  
**Please make sure you have the M.2 E key to M.2 M key adapter board before you buy. We have configured a different adapter board to support Radxa products. For details, you click the link.[M.2 Extension Board](../../../accessories/m2_extension_board)**
![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-03.jpg)

- Please distinguish the front and back side of the EDP cable first. Please put the EDP cable front side up and then install it to the M.2 E key to M key adapter board and M.2 Extension Board. As shown in the picture.   
**The EDP cable is oriented towards the ROCK5A, i.e. the front side is on the same side.**
![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-04.jpg)

- M.2 E key to M.2 M key Board with EDP Cable
![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-02.jpg)

- M.2 Extension Board with EDP Cable
![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-01.jpg)

## Install Guide

1. Please install the M2.5 copper post that comes with the product as shown.
![ROCK5A Install M.2 Extension Board](/img/rock5a/rock5a-m2-extension-board-04.jpg)

2. Install the M.2 E key to M key board into the M.2 E key interface of ROCK5A. As shown in the picture.
![ROCK5A Install M.2 Extension Board](/img/rock5a/rock5a-m2-extension-board-03.jpg)

3. Finally, the M.2 extension board is assembled using M2.5 copper posts.
![ROCK5A Install M.2 Extension Board](/img/rock5a/rock5a-m2-extension-board-02.jpg)

## As a storage drive

1.  you can check whether the SSD card is recognized by ```lsblk```.
```
radxa@rock-5a:~$ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.5G  0 disk 
├─mmcblk0p1  179:1    0    16M  0 part /config
└─mmcblk0p2  179:2    0  14.4G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
zram0        254:0    0   3.8G  0 disk [SWAP]
nvme0n1      259:0    0 238.5G  0 disk 
radxa@rock-5a:~$ 
```
2. As you can see, the system has recognized the SSD(**nvme0n1**).

## As a system drive

1. Please check the tutorial [Install OS to M.2 NVMe SSD](../getting_started/m2_install)