---
sidebar_label: 'Audio Setup'
sidebar_position: 10
---

# Audio Introdution

The ROCK 5 platform has up to four audio output modes: HDMI 1 and 2, a headphone jack, and bluetooth audio. You can switch between these modes at any time. 

The system default sound output priority is that:Bluetooth Audio> Headphones > HDMI Audio. After manual selection of audio output, The selection will be raised to the highest priority.  
It means that connecting other audio devices does not switch the audio output when the device is playing at the highest priority device. 

## Audio Settings

In addition to the graphical interface, we can also set up the audio by terminal. 

### Desktop Settings
Left-clicking the volume icon on the desktop taskbar brings up the audio output selector; this allows you to select between the internal audio outputs. 
It also allows you to select any external audio devices, such as USB sound cards and Bluetooth audio devices.  
A blue tick is shown against the currently selected audio output device — simply left-click the desired output to change this. 
The volume control and mute operate on the currently selected device.  
![audio manager](/img/configuration/audio_manager.jpg)


### Command Line Config

We provide `alsamixer` for volume management, entering the setting ui by this command:
```
radxa@rock-5a:~$ alsamixer
```
Use the `up` and `down` arrow keys to adjust the volume.  
```
┌────────────────────────────── AlsaMixer v1.2.4 ──────────────────────────────┐
│ Card: PulseAudio                                     F1:  Help               │
│ Chip: PulseAudio                                     F2:  System information │
│ View: F3:[Playback] F4: Capture  F5: All             F6:  Select sound card  │
│ Item: Master                                         Esc: Exit               │
│                                                                              │
│                                     ┌──┐                                     │
│                                     │  │                                     │
│                                     │  │                                     │
│                                     │  │                                     │
│                                     │  │                                     │
│                                     │  │                                     │
│                                     │  │                                     │
│                                     │▒▒│                                     │
│                                     │▒▒│                                     │
│                                     │▒▒│                                     │
│                                     │▒▒│                                     │
│                                     │▒▒│                                     │
│                                     ├──┤                                     │
│                                     │OO│                                     │
│                                     └──┘                                     │
│                                    50<>50                                    │
│                                  < Master >     
```

For changing to other audio output devices, you should get which devices are connected at first, a search is provided below:  
```
radxa@rock-5a:~$ pacmd list-sinks | grep -e 'index:' -e 'name:'
```
You will see the index and name of the connected audio devices like this: 
```
    index: 0
        name: <alsa_output.platform-dp0-sound.HDMI__hw_rockchiphdmi1__sink>
    index: 1
        name: <alsa_output.platform-es8316-sound.HiFi__hw_rockchipes8316__sink>
  * index: 7
        name: <bluez_sink.C0_09_0B_48_26_53.a2dp_sink>
```
The index with `*` indicates that it's  the highest priority device.  
The following command would help you to change default output device:
```
radxa@rock-5a:~$ pacmd set-default-sink alsa_output.platform-es8316-sound.HiFi__hw_rockchipes8316__sink  # 'alsa_output.platform-es8316-sound.HiFi__hw_rockchipes8316__sink' is the name of the device you want to set.
```

For more information, please check [pacmd page](https://linux.die.net/man/1/pacmd).