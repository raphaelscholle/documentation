---
sidebar_label: 'RockChip MPP'
sidebar_position: 9
---

# 在ROCK 5B 构件 MPP

- MPP：Media Process Platform module

1. 下载必要的包
```
rock@rock-5b:~$ sudo apt install -y git make cmake gcc g++ wget
```

2. 下载MPP源代码
```
rock@rock-5b:~$ wget https://github.com/rockchip-linux/mpp/archive/refs/heads/develop.zip
rock@rock-5b:~$ unzip develop.zip
rock@rock-5b:~$ cd ~/mpp-develop/build/linux/aarch64
rock@rock-5b:~/mpp-develop/build/linux/aarch64$ ./make-Makefiles.bash
rock@rock-5b:~/mpp-develop/build/linux/aarch64$ make
```

3. 查看mpp测试demo
```
rock@rock-5b:~/mpp-develop/build/linux/aarch64$ ls test/
CMakeFiles           mpi_dec_mt_test     mpi_dec_test     mpi_rc2_test
Makefile             mpi_dec_multi_test  mpi_enc_mt_test  mpp_info_test
cmake_install.cmake  mpi_dec_nt_test     mpi_enc_test     vpu_api_test
```

## MPP demo

### mpi_dec_test

1. 获取测试视频
```
rock@rock-5b:~$ wget https://dl.radxa.com/media/video/1080p.264
```

2. 输出调试信息
```
rock@rock-5b:~$ export mpi_debug=1
rock@rock-5b:~$ export mpp_debug=1
rock@rock-5b:~$ export h264d_debug=1
rock@rock-5b:~$ export mpp_syslog_perror=1
```

3. 运行mpi_dec_test.
```
rock@rock-5b:~/mpp-develop/build/linux/aarch64/test$ ./mpi_dec_test -i ~/1080p.264 -t 7 -h 1080 -w 1920

mpp[1253]: mpi_dec_utils: input file /home/rock/1080p.264 size 10076324
mpp[1253]: mpi_dec_utils: cmd parse result:
mpp[1253]: mpi_dec_utils: input  file name: /home/rock/1080p.264
mpp[1253]: mpi_dec_utils: output file name: 
mpp[1253]: mpi_dec_utils: width      : 1920
mpp[1253]: mpi_dec_utils: height     : 1080
mpp[1253]: mpi_dec_utils: type       :    7
mpp[1253]: mpi_dec_utils: max frames :    0
mpp[1253]: mpi_dec_test: mpi_dec_test start
...
mpp[1253]: mpi_dec_test: 0x558fb02300 found last packet
mpp[1253]: mpi_dec_test: decode 1129 frames time 1172 ms delay  14 ms fps 962.62
mpp[1253]: mpi: mpi_reset enter ctx 0x558fb02300
mpp[1253]: mpi: mpi_reset leave ctx 0x558fb02300 ret 0
mpp[1253]: mpi: mpp_destroy enter ctx 0x558fb02300
mpp[1253]: mpi: mpp_destroy leave ctx 0x558fb02300 ret 0
mpp[1253]: mpi_dec_test: test success max memory 19.92 MB
```
