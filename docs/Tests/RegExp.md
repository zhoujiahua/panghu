## Python RegExp

### 1.基本示例

```python
# 内置方法
a = 'C|C++|C#|Python|Javascript'
a.index('Python') # True

# 正则表达式
import re

r = re.findall('pyhton',a)
if len(r) > 0:
    print('yes')
else:
    print('no')
```

### 2.元字符与普通字符

```python
import re

a = 'C0C5|C++|C#|Python|77Javascript'

# 无聊的方式
re.findall('5',a)
re.findall('77',a)
....

# 正确的方式
r = re.findall('\d',a)
print(r)
```

### 3.字符集

```python
import re

s = 'abc, acc, adc, aec, ahc'

r = re.findall('a[c|f]c',s)
r = re.findall('a[^cf]c',s)
r = re.findall('a[c-f]c',s)
print(r)

```

### 4.范围字符集

```python

\d
\D
\s
\S
\w
\W
.
.....
```

### 5.数量词

```python

import re
r = 'asdf5asd56f7 58sdf9asdqwetequrtioert75688r3'
r = re.findall('[a-z]{3,6}',a)
print(r)
```

### 6.贪婪与非贪婪

```python
# 默认为贪婪匹配
import re
r = 'asdf5asd56f7 58sdf9asdqwetequrtioert75688r3'
r = re.findall('[a-z]{3,6}?',a)
print(r)
```

### 7.0次1次多次

```python

# * 0次或多次
# + 1次或多次
# ？0次或1次

# ？在范围匹配时或转换为 贪婪或者非贪婪
```

### 8.边界匹配

```python
import re

qq = '100001'

r = re.findall('^\d{4-8}$',qq)
print(r)
```

### 9.组

```python
import re
a = 'asdf5asd56f7python58sdf9asdqwetpythonequrtioertpython75688r3'
r = re.findall('(python){3}',a)
```

10.匹配模式

```python
import re
a = 'asdf5asd56f7python58sdf9asdqwet\npythonequrtioertpython75688r3'
r = re.findall('pthon.{1}', a, re.I | re.S)
print(r)
```

### 10.re.sub替换

```python
import re
a = 'asdf5asd56f7python58sdf9asdqwet\npythonequrtioertpython75688r3'
r = re.sub('python', 'java', a, 1)
nr = a.replace('python','go')
print(r)
print(nr)
```



