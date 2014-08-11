copy /B /Y ^
..\scripts\map.js + ^
..\scripts\mall.js ^
~script.js

java -jar yuicompressor-2.4.8.jar "~script.js" -o "..\script.js"

del /F ~script.js