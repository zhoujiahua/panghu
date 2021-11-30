# VNC Server

> 1.Open Port

`sudo iptables -I INPUT -p tcp --dport 5901 -j ACCEPT`

> 2.Create Desktop

`vncserver -geometry 1900x998 or 1920x1080`

`vncserver -localhost no -geometry 1920x1110 :1`

> 3.Delete Desktop

`vncserver -kill :2`
