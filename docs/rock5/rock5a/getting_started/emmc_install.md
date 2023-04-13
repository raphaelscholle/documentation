---
sidebar_label: 'Install OS to an eMMC Module'
sidebar_position: 33
---

# Install OS to an eMMC Module

## Prepare 

- Prepare an eMMC module and a [Radxa eMMC Reader](../../../accessories/emmc_reader).  
![Radxa eMMC](/img/accessories/emmc_related_01.webp)
- Download the official Ubuntu/Debian system image from [Downloads](../downloads/official_images.md).
- Download the flash tool etcher from [downloads](https://www.balena.io/etcher#download-etcher).  
![ROCK5A via Ethcher](/img/rock5a/rock5a-etcher.png)

## Installation

1. Insert the eMMC module into the Rock Pi eMMC USB reader, then insert the Rock Pi eMMC USB reader into the USB port of the computer. 
    **Note: Please align the A1 port with the A2 port and insert the B1 port with the B2 port when inserting the eMMC module into the Radxa eMMC Reader**
    
    ![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.png)
    ![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.png)

- Open etcher and prepare to flash OS image to Micro SD card. In the etcher window, click flash from file to select the OS image you juet downloaded.
    
    ![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.png)

- In the etcher window, click Select target(Drive).

    ![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.png)

- In the etcher window, click Flash and wait for flashing image process.

    ![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.png)

- In the etcher window, it means success when it shows flash compete.
    
    ![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.png)

