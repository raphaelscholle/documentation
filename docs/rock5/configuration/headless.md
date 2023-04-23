---
sidebar_label: 'Headless Setup'
sidebar_position: 10
---

# Headless Setup

This guide is intended to guide you in the use without the keyboard and the monitor.  
The SSh service is automatically enabled when no monitor is available. Despite this, you still need to link to LAN so that you can get the ***IP address*** of SBC.

## Ethernet

You can refer to this guide: [network guide](../radxa_os/network).  
Connect the SBC to **the same switching network** as your computer via an RJ45 network cable. It usually manifested as the same router.

## Wireless

The [wireless guide](../radxa_os/network) may be helpful.

*Note: Some solutions require a WiFi module to be installed in order to connect to the wireless network. For more details, please check product parameters on https://radxa.com/product.*

After flashing the image to a micro SD card, keep it connected with your Linux or Windows machines, the config folder will be available on file system. There are two files	**before.txt** and **config.txt** in it.  
&nbsp;&nbsp;&nbsp;&nbsp;**before.txt**: Radxa First Boot Configuration, it will be copied into the correct location in the Linux root file system, the machine will use those settings to start up wireless networking.  
&nbsp;&nbsp;&nbsp;&nbsp;**config.txt**: rsetup config file, it will be applied on every boot.

Wireless setup is available in file **before.txt**.  
Add the following code to **before.txt**:  
>`connect_wi-fi private_network password`  

Where 'private_network' is the SSID and 'password' is the password of it.  


## Get IP Address

It will be simple when you can connect the SBC to your personal computer by serial port tool:  
Please refer to the [Serial Console Guide](https://wiki.radxa.com/Rock5/dev/serial-console).  
- Access to the terminal via the serial software like SecureCRTPortable, MobaXterm.
- Power on the product, product launch completed when the output like the following appears:  
>rock-5a login:
- Enter the account to log in, then enter the password.  
- Get the IP address via the following code:
>`ip addr`

Without the tool, you can get the IP though Router Management Console. 

If both of them don't work, it will be defficult, getting help via the internet or our support.

## SSH Connection

There is the [SSH guide](../radxa_os/remote_login), you can ignore it if you're familiar with it.  

After installing the ssh service, connect remotely directly on terminal via username and ip address like following code.  
`ssh <username>@[IP address]` 

For example, `ssh radxa@192.168.42.100`.
![ssh connect](/img/configuration/ssh_connect.png)