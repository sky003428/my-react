# 台灣郵遞區號連動式下拉表單元素

(參考範例：https://dennykuo.github.io/tw-city-selector/#/)

(參考格式：https://github.com/essoduke/jQuery-TWzipcode/blob/master/jquery.twzipcode.js 或 https://github.com/dennykuo/tw-city-selector/blob/master/src/data-zh.js)

製作一個兩個下拉表單(select)，分別是選台灣的縣市後，之後出現對應的縣市包含區域下拉選單。

範例資料:

```js
const counties=['台北市', '桃園市']
const townships = [['中正區', '大同區', '中山區'], ['中壢區', '平鎮區', '龍潭區']]
```

## 延伸應用

加入選擇之後，出現對應的三碼郵遞區號。