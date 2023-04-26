---
sidebar_label: 'Audio and Video'
sidebar_position: 70
---

# Audio

The Radxa ROCK 5A product provides 2 audio output options, including the 3.5mm headphone jack and HDMI interface.  

- When you use headphones to listen to music, please plug your headphones into the 3.5mm headphone jack. Open the sound icon in the lower right corner of the desktop and switch to the headphone driver.  

- Additionally, through the HDMI interface, users can directly transmit audio and video signals to the connected display or TV without the need for additional audio cables. The HDMI interface also supports high-quality digital audio transmission, providing similar audio quality to the digital audio interface. Similarly, to switch to HDMI output, you only need to select HDMI/Display port in the audio output mode.

![ROCK5A_Audio](/img/rock5a/rock5a_audio.webp)


# Video

- Dragon Player is the default media player included in the Debian system, If Dragon Player is not installed in the system, you can execute the following command to install it.  



    sudo apt-get update  
    sudo apt-get install dragonplayer  

- Enter your password if prompted, and then wait for the installation to complete.  
Once Dragon Player is installed, you can use the following command to open a video:  
    
    dragon /path/to/video/file
- Replace "/path/to/video/file" with the actual path and filename of the video you want to play. For example, if your video is located in the "Videos" folder in your home directory and is called "myvideo.mp4", the command would look like this:  


    dragon ~/Videos/myvideo.mp4

- Of course, you can also directly double-click the video file icon to play it.  

As for the video formats supported by Dragon Player, it can decode any format that is supported by the FFmpeg library. This includes popular video formats such as MP4, AVI, MKV, WMV, FLV, MOV, and more.

