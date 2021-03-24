## Windows修改远程桌面端口脚本

```sh
@echo off
color f0
echo 修改远程桌面3389端口(支持Windows 2003 2008 2008R2 2012 2012R2 7 8 10 )
echo 自动添加防火墙规则
echo %date%   %time%
echo    ARK
set /p c= 请输入新的端口:
if "%c%"=="" goto end
goto edit
:edit
netsh advfirewall firewall add rule name="Remote PortNumber" dir=in action=allow protocol=TCP localport="%c%"
netsh advfirewall firewall add rule name="Remote PortNumber" dir=in action=allow protocol=TCP localport="%c%"
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\Wds\rdpwd\Tds\tcp" /v "PortNumber" /t REG_DWORD /d "%c%" /f
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v "PortNumber" /t REG_DWORD /d "%c%" /f
echo 修改成功
echo 重启后生效，按任意键重启
pause
shutdown /r /t 0
exit
:end
echo 修改失败
pause
```

> 执行

```html
复制内容，命名为xxx.bat双击即可执行
```

## mongodb备份脚本

```sh
DUMP=/usr/local/mongodb/bin/mongodump    #mongodump命令路径

OUT_DIR=/data/mongodb_bak/mongodb_bak_now    #临时备份目录

TAR_DIR=/data/mongodb_bak/mongodb_bak_list    #备份存放路径

DATE=`date +%Y_%m_%d_%H_%M`   #获取当前系统时间 

DB_USER=YOUR_DB_USERNAME    #数据库账号 

DB_PASS=YOUR_DB_USER_PASSWORD    #数据库密码

DAYS=20    #DAYS=20代表删除20天前的备份，即只保留近20天的备份

TAR_BAK="mongodb_bak_$DATE.tar.gz"    #最终保存的数据库备份文件

cd $OUT_DIR

rm -rf $OUT_DIR/*

mkdir -p $OUT_DIR/$DATE

$DUMP -h YOUR_DB_HOST -u $DB_USER -p $DB_PASS --authenticationDatabase "YOUR_DB_NAME" -o $OUT_DIR/$DATE   #备份全部数据库

tar -zcvf $TAR_DIR/$TAR_BAK $OUT_DIR/$DATE    #压缩为.tar.gz格式

find $TAR_DIR/ -mtime +$DAYS -delete   #删除20天前的备份文件

exit
```

> 复制代码，命名为mongodb_bak.sh，加入系统定时任务。

```sh
crontab -e
```

