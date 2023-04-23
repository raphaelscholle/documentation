---
sidebar_label: 'LED Setup'
sidebar_position: 10
---

# LED Setup

Generally, there are two LEDs on the SBC, one for blue light and another for green light.
Both of the light status of them can be modified on [GPIO LEDs](../configuration/rsetup-tool#gpio-leds).  
![GPIO LEDs](/img/configuration/GPIO_LEDs.png)
`user-led1` is the green light, `user-led2` is the blue light.The content of '[ ]' at the end shows the current light statu.

The following steps help us to change light statu:
>1. Use the `up` and `down` arrow keys to move the highlighted selection to which LED you want to edit the statu;  
2. Use the `Space` key to confirm your choose, a '\*' would appeare on the '[ ]' at the start.  
![GPIO LEDs_Select](/img/configuration/GPIO_LEDs_Select.png)  
3.Use the `Tab` key to <Ok\> button and then press `Enter` to enter the status menu.  
![LED_status_menu](/img/configuration/LED_status_menu.png)  
4.Use the `up` and `down` arrow keys to select which you like and press `Space` to confirm, a '\*' would appeare on the '( )' like step 2.  
5.Use the `Tab` key to <Ok\> button and then press `Enter` to save your choose and aplly it.  
6.Your LED statu would change after step 5 at once.  