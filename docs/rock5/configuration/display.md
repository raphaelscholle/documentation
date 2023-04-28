---
sidebar_label: 'Display Setup'
sidebar_position: 10
---

# Display Introduction

When choosing a monitor, you need to be aware of that different products support different display resolutions, please check the information on your [product](../../productlist) for details. 
However, if you want to build a [headless platform](../configuration/headless), it'll not be a problem for you.

Take [ROCK 5A](https://radxa.com/product/detailed?product_name=rock_5a) for example, there are two micro HDMI and one mipi display interface. One micro HDMI supports up to 8K resolution as another suports up to 4K. Theoretically, you can use three screens at the same time.  

## Display Setup

This setting is just available when you operating on the monitor. You can change the display setting by following ways.  

### System Settings-Display Settings

On KDE desktop, you would see the `System Settings` after left clicking on the  `Appliction Launcher` in the lower left corner.  
![System settings](/img/configuration/start_sys_setting.png)  
Select the `System Settings`, find `Display and Monitor` in the `Hardware` option:  
![System Settings](/img/configuration/system_setting.png)  
You can modify the following settings in it:  
![Display Settings](/img/configuration/display_setting.png) 
**Note: If you are using multiple monitors, the same steps are effective.**

### Terminal Command Settings

We also provide `xrandr` for display settings.  
With the following command you can check the current display status:  
```
radxa@rock-5a:~$ xrandr
```
There is an example:
```
radxa@rock-5a:~$ xrandr
Screen 0: minimum 320 x 200, current 1920 x 1080, maximum 16384 x 16384
HDMI-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 0mm x 0mm
   1920x1080     60.00*+  60.00    50.00    59.94
   1920x1080i    60.00    60.00    50.00    59.94
   1600x900      60.00
   1280x1024     75.02    60.02
   1152x864      75.00
   1280x720      60.00    60.00    50.00    59.94
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x576i      50.00
   720x480       60.00    60.00    59.94    59.94    59.94
   720x480i      60.00    59.94
   640x480       75.00    60.00    59.94    59.94
   720x400       70.08
DP-1 disconnected (normal left inverted right x axis y axis)
```
You can check which monitor is connected and the corresponding resolution.  
#### Display Rotation

You can rotate your screen display by modifying the [Display Settings](../configuration/display#system-settings-display-settings)-Orientation.  
Or you can also achieving by command:
```
Single Screen:
   xrandr -o left     # Rotate 90 degrees to the left
   xrandr -o right    # Rotate 90 degrees to the right
   xrandr -o inverted # Flip up and down, rotate 180 degrees
   xrandr -o normal   # Back to the normal angle
   xrandr -s 1024x768 # Set the resolution
   xrandr -s 0        # Set the default resolution, which generally defaults to the highest resolution
   xrandr -rate       # Set refresh rate
```

#### Multiple Screen Settings

ROCK 5A Supports up to three displays, two micro HDMI interfaces and one mipi interface, the **mipi display** should be enabled on overlay:  
You can get the supported mipi screen model on [overlays menu](../configuration/devicetree#how-to-enable-an-overlay), 
before using the mipi screen, you need to enable the corresponding overlay and reboot.  

```
        [ ] Enable Radxa Display 10HD 
        [ ] Enable Radxa Display 8HD
```
**Note: Different product may support different screen.**  

There is a guide for using [Radxa Display 8HD](../rock5a/accessories_guides/LCD_8_HD). 

In addition to Settings, the following commands enable you to modify in the display settings:

```
Dual Screen:
   # HDMI-1 --screen 1   DP-1 --screen 2
   xrandr --output HDMI-1 --primary # SetUp Home Screen
   xrandr --output HDMI-1 --auto --output DP-1 --off # Display only HDMI
   xrandr --output DSI-1 --off --output HDMI-1 --off # No display on either screen
   xrandr --output HDMI-1 --same-as DP-1 --auto # Simultaneous display of the same content
   xrandr --output HDMI-1 --right-of DP-1 --auto # DP-1 is the main display, the HDMI-1 is an extension and to the right of DP-1
```
For more informations , please check [X.Org Server RandR](https://en.wikipedia.org/wiki/X.Org_Server#Other_DDX_components). 