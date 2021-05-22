## 身份证校验

```javascript
function validate(code) {
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var sum = 0;
    var i = 0;

    if (!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        return false;
    }

    for (i = 0; i < 17; i = i + 1) {
        sum += code.charAt(i) * factor[i];
    }

    return parity[sum % 11] === code[17].toUpperCase();
}
```