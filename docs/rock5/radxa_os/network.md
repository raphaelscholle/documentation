---
sidebar_label: 'Network Setting'
sidebar_position: 20
---

# Set Ethernet

ROCK 5A offers a 10/100/1000Mbit RJ45 connector for wired networking. With additional PoE module/HAT, ROCK 5A can be powered by ethernet cable via RJ45 port by a PoE capable switch/router.   

When you use wired Internet, please plug the network cable into the RJ45 connector. There will be a network connection icon in the lower right corner of the desktop, select the network you want to connect to and enter the password to connect to the Internet.  

![rock5a/rock5a_wifi](/img/rock5a/rock5a_ethernet.webp) 


# Set WLAN

If you need to connect to the Internet wirelessly, you need to install a wireless module. Radxa recommends you to use Radxa Wireless Module A8.
The following is the tutorial of ROCK 5A wireless Internet access:  

• Click the WiFi icon in the lower right corner of the desktop, select the WiFi you want to connect to and enter the password.

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_1.webp)  

• In the KDE Wallet Service interface, please select “Classic, blowfish encryted file” and click Finish.

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_2.webp)  

• As shown in the figure below, just click "OK" without entering a password.

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_3.webp)  

• Click YES.  

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_4.webp)  

• If the WiFi connection is successful, network management will show that your wifi name is activated. If you want to turn off wifi, click the box pointed by the arrow to cancel the wifi connection.  

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_5.webp)  

## Static IP settings

Networks typically use dynamic IP addresses to better manage IP address allocation on the network. Dynamic IP addresses are automatically assigned through DHCP (Dynamic Host Configuration Protocol), which means that each device is assigned a unique IP address when it connects to the network. This approach makes it easier to manage the network and avoids the possibility of IP address conflicts between devices.  

If you want to set a static IP address, you will need to manually assign a fixed IP address for the device.

As shown in the following operations:  

    system setting >> connections >> wire-ed Ethernet or Wi-Fi >> IPv4 >> select Manual >> Add >> enter address, netmask, gatewat >> Apply  

![rock5a/rock5a_wifi](/img/rock5a/rock5a_static_ip.webp)