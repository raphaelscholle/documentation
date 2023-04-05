---
sidebar_label: 'Power off'
sidebar_position: 50
---

# Power on / off your ROCK 5A

## Software Restart

** Take the debian system as an example here**

### Shutdown and restart of the graphical interface

- Click on the rock on the upper right of the desktop  
![ROCK5A GUI 01](/img/rock5a/rock5a-gui-on-off.webp)

- Click Log out  
![ROCK5A GUI 02](/img/rock5a/rock5a-gui-logout.webp)

- Shut down or reboot  
![ROCK5A GUI 03](/img/rock5a/rock5a-gui-reboot.webp)

### Shutdown and restart of the terminal interface

Open the terminal command in the desktop  
![ROCK5A terminal reboot 01](../../../../static/img/rock5a/rock5a-terminal-reboot-1.png)

**Restart**  
Enter the following command and press Enter.
It will reboot the system if the password is correct. 
If wrong, please re-enter the correct password.
```
sudo reboot
```
![ROCK5A terminal reboot 02](../../../../static/img/rock5a/rock5a-terminal-reboot-2.png)
![ROCK5A terminal reboot 03](../../../../static/img/rock5a/rock5a-terminal-reboot-3.png)

**Shutdown**  
Enter the following command and press Enter.
It will shutdown the system if the password is correct. 
If wrong, please re-enter the correct password.
```
sudo shutdown now
```
![ROCK5A terminal shutdown 01](../../../../static/img/rock5a/rock5a-terminal-shutdown-1.png)
![ROCK5A terminal shutdown 01](../../../../static/img/rock5a/rock5a-terminal-shutdown-2.png)

## Power Key Start  

As shown in the figure, the place where the arrow is pointing to is the switch button.  

- When the device is on, press the power key and the device will shut down
- When the device is off, press the power key and the device will turn on

![ROCK5A Power](../../../../static/img/rock5a/rock5a-power.png)


