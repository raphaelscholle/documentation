---
sidebar_label: 'Remote Login'
sidebar_position: 60
---

# SSH
Here is a tutorial on how to remotely login to ROCK 5A using SSH from a Windows computer.  

To connect to a Debian system via the SSH protocol, you need to ensure that an SSH server has been installed on the Debian system. You can follow the steps below:  

1. Make sure the SSH server has been installed on the Debian system. Run the following command in a terminal:  

    sudo service ssh status
If the SSH server is not installed, you can install it with the following command:

    sudo apt-get update
    sudo apt-get install ssh
2. Make sure the firewall of the Debian system allows SSH connections. By default, a Debian system's firewall may block SSH connections. You can view the firewall status with the following command:  

    sudo ufw status    
If the ufw command cannot be executed, please install the ufw command:  

    sudo apt-get install ufw

  If a firewall is running and SSH connections are not allowed, you can add an SSH rule with the following command:  

    sudo ufw allow ssh
3. Open the terminal program and enter the following command:  

    ssh [username]@[hostname].local  
    or  
    ssh [username]@[IP address]  
For example:  

    ssh username@192.168.1.100
4. You need to enter the user's password to successfully connect to the Debian system.
This is a basic SSH connection process. You can use other SSH options for more advanced connections.  


# Remote Desktop
Here is a tutorial on how to remotely control a ROCK 5A using VNC from a Windows computer.  

### Install VNC Server on the Rock 5A  
1. Open a terminal application and enter the following command to update the package list:   

    sudo apt-get update
2. Enter the following command to install TightVNC Server:  

    sudo apt-get install tightvncserver
3. sudo apt-get install tightvncserver

    tightvncserver
This will prompt you to set a password for VNC connection.  
4. To stop TightVNC Server, you can use the following command:   

    tightvncserver -kill :1
Note: if you did not use the ":1" parameter when running TightVNC Server for the first time, adjust it accordingly.  


### Configure VNC Server
1. Once TightVNC Server is started on the RK3588 chip, it will create a VNC session that contains the IP address and port number (usually 5901) of the VNC Server.  
2. In the terminal application, enter the following command to edit the VNC Server's configuration file:  

    sudo nano ~/.vnc/xstartup
3. Add the following line to the end of the file to enable the LXDE desktop environment:  

    lxsession -s LXDE &
4. Enter the following command to restart VNC Server:  

    tightvncserver -kill :1
    tightvncserver  
5. Test the connection on VNC Viewer: On your Windows PC, open VNC Viewer, enter the IP address and port number of the ROCK 5A, then authenticate with the VNC Server's username and password.    

### Install VNC Viewer on Windows PC
1. Go to the VNC Viewer download page on your web browser, e.g. https://www.realvnc.com/en/connect/download/viewer/  
2. Download and install VNC Viewer.  


### Connect to the ROCK 5A
1. On VNC Viewer, enter the IP address and port number of the ROCK 5A.  
2. Authenticate with the VNC Server's username and password.  
3. Once successfully connected, you can remotely control the ROCK 5A.  





