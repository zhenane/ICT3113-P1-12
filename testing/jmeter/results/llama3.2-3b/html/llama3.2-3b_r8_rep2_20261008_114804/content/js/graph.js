/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 12454.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 183.0], [0.3, 183.0], [0.4, 183.0], [0.5, 188.0], [0.6, 188.0], [0.7, 188.0], [0.8, 188.0], [0.9, 190.0], [1.0, 190.0], [1.1, 190.0], [1.2, 190.0], [1.3, 191.0], [1.4, 191.0], [1.5, 191.0], [1.6, 191.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 191.0], [2.1, 193.0], [2.2, 193.0], [2.3, 193.0], [2.4, 193.0], [2.5, 193.0], [2.6, 193.0], [2.7, 193.0], [2.8, 193.0], [2.9, 193.0], [3.0, 195.0], [3.1, 195.0], [3.2, 195.0], [3.3, 195.0], [3.4, 195.0], [3.5, 195.0], [3.6, 195.0], [3.7, 195.0], [3.8, 195.0], [3.9, 195.0], [4.0, 195.0], [4.1, 195.0], [4.2, 197.0], [4.3, 197.0], [4.4, 197.0], [4.5, 197.0], [4.6, 198.0], [4.7, 198.0], [4.8, 198.0], [4.9, 198.0], [5.0, 198.0], [5.1, 198.0], [5.2, 198.0], [5.3, 198.0], [5.4, 198.0], [5.5, 202.0], [5.6, 202.0], [5.7, 202.0], [5.8, 202.0], [5.9, 204.0], [6.0, 204.0], [6.1, 204.0], [6.2, 204.0], [6.3, 205.0], [6.4, 205.0], [6.5, 205.0], [6.6, 205.0], [6.7, 205.0], [6.8, 205.0], [6.9, 205.0], [7.0, 205.0], [7.1, 206.0], [7.2, 206.0], [7.3, 206.0], [7.4, 206.0], [7.5, 206.0], [7.6, 206.0], [7.7, 206.0], [7.8, 206.0], [7.9, 206.0], [8.0, 207.0], [8.1, 207.0], [8.2, 207.0], [8.3, 207.0], [8.4, 208.0], [8.5, 208.0], [8.6, 208.0], [8.7, 208.0], [8.8, 209.0], [8.9, 209.0], [9.0, 209.0], [9.1, 209.0], [9.2, 210.0], [9.3, 210.0], [9.4, 210.0], [9.5, 210.0], [9.6, 210.0], [9.7, 210.0], [9.8, 210.0], [9.9, 210.0], [10.0, 211.0], [10.1, 211.0], [10.2, 211.0], [10.3, 211.0], [10.4, 211.0], [10.5, 212.0], [10.6, 212.0], [10.7, 212.0], [10.8, 212.0], [10.9, 212.0], [11.0, 212.0], [11.1, 212.0], [11.2, 212.0], [11.3, 214.0], [11.4, 214.0], [11.5, 214.0], [11.6, 214.0], [11.7, 214.0], [11.8, 214.0], [11.9, 214.0], [12.0, 214.0], [12.1, 214.0], [12.2, 214.0], [12.3, 214.0], [12.4, 214.0], [12.5, 214.0], [12.6, 214.0], [12.7, 214.0], [12.8, 214.0], [12.9, 214.0], [13.0, 214.0], [13.1, 214.0], [13.2, 214.0], [13.3, 214.0], [13.4, 215.0], [13.5, 215.0], [13.6, 215.0], [13.7, 215.0], [13.8, 216.0], [13.9, 216.0], [14.0, 216.0], [14.1, 216.0], [14.2, 218.0], [14.3, 218.0], [14.4, 218.0], [14.5, 218.0], [14.6, 219.0], [14.7, 219.0], [14.8, 219.0], [14.9, 219.0], [15.0, 220.0], [15.1, 220.0], [15.2, 220.0], [15.3, 220.0], [15.4, 220.0], [15.5, 223.0], [15.6, 223.0], [15.7, 223.0], [15.8, 223.0], [15.9, 226.0], [16.0, 226.0], [16.1, 226.0], [16.2, 226.0], [16.3, 226.0], [16.4, 226.0], [16.5, 226.0], [16.6, 226.0], [16.7, 227.0], [16.8, 227.0], [16.9, 227.0], [17.0, 227.0], [17.1, 228.0], [17.2, 228.0], [17.3, 228.0], [17.4, 228.0], [17.5, 228.0], [17.6, 228.0], [17.7, 228.0], [17.8, 228.0], [17.9, 228.0], [18.0, 228.0], [18.1, 228.0], [18.2, 228.0], [18.3, 228.0], [18.4, 229.0], [18.5, 229.0], [18.6, 229.0], [18.7, 229.0], [18.8, 231.0], [18.9, 231.0], [19.0, 231.0], [19.1, 231.0], [19.2, 232.0], [19.3, 232.0], [19.4, 232.0], [19.5, 232.0], [19.6, 233.0], [19.7, 233.0], [19.8, 233.0], [19.9, 233.0], [20.0, 233.0], [20.1, 234.0], [20.2, 234.0], [20.3, 234.0], [20.4, 234.0], [20.5, 238.0], [20.6, 238.0], [20.7, 238.0], [20.8, 238.0], [20.9, 243.0], [21.0, 243.0], [21.1, 243.0], [21.2, 243.0], [21.3, 249.0], [21.4, 249.0], [21.5, 249.0], [21.6, 249.0], [21.7, 250.0], [21.8, 250.0], [21.9, 250.0], [22.0, 250.0], [22.1, 256.0], [22.2, 256.0], [22.3, 256.0], [22.4, 256.0], [22.5, 256.0], [22.6, 257.0], [22.7, 257.0], [22.8, 257.0], [22.9, 257.0], [23.0, 272.0], [23.1, 272.0], [23.2, 272.0], [23.3, 272.0], [23.4, 284.0], [23.5, 284.0], [23.6, 284.0], [23.7, 284.0], [23.8, 315.0], [23.9, 315.0], [24.0, 315.0], [24.1, 315.0], [24.2, 322.0], [24.3, 322.0], [24.4, 322.0], [24.5, 322.0], [24.6, 363.0], [24.7, 363.0], [24.8, 363.0], [24.9, 363.0], [25.0, 363.0], [25.1, 407.0], [25.2, 407.0], [25.3, 407.0], [25.4, 407.0], [25.5, 411.0], [25.6, 411.0], [25.7, 411.0], [25.8, 411.0], [25.9, 413.0], [26.0, 413.0], [26.1, 413.0], [26.2, 413.0], [26.3, 457.0], [26.4, 457.0], [26.5, 457.0], [26.6, 457.0], [26.7, 479.0], [26.8, 479.0], [26.9, 479.0], [27.0, 479.0], [27.1, 557.0], [27.2, 557.0], [27.3, 557.0], [27.4, 557.0], [27.5, 557.0], [27.6, 799.0], [27.7, 799.0], [27.8, 799.0], [27.9, 799.0], [28.0, 905.0], [28.1, 905.0], [28.2, 905.0], [28.3, 905.0], [28.4, 955.0], [28.5, 955.0], [28.6, 955.0], [28.7, 955.0], [28.8, 973.0], [28.9, 973.0], [29.0, 973.0], [29.1, 973.0], [29.2, 989.0], [29.3, 989.0], [29.4, 989.0], [29.5, 989.0], [29.6, 996.0], [29.7, 996.0], [29.8, 996.0], [29.9, 996.0], [30.0, 996.0], [30.1, 1003.0], [30.2, 1003.0], [30.3, 1003.0], [30.4, 1003.0], [30.5, 1004.0], [30.6, 1004.0], [30.7, 1004.0], [30.8, 1004.0], [30.9, 1051.0], [31.0, 1051.0], [31.1, 1051.0], [31.2, 1051.0], [31.3, 1051.0], [31.4, 1051.0], [31.5, 1051.0], [31.6, 1051.0], [31.7, 1054.0], [31.8, 1054.0], [31.9, 1054.0], [32.0, 1054.0], [32.1, 1064.0], [32.2, 1064.0], [32.3, 1064.0], [32.4, 1064.0], [32.5, 1064.0], [32.6, 1107.0], [32.7, 1107.0], [32.8, 1107.0], [32.9, 1107.0], [33.0, 1129.0], [33.1, 1129.0], [33.2, 1129.0], [33.3, 1129.0], [33.4, 1143.0], [33.5, 1143.0], [33.6, 1143.0], [33.7, 1143.0], [33.8, 1165.0], [33.9, 1165.0], [34.0, 1165.0], [34.1, 1165.0], [34.2, 1194.0], [34.3, 1194.0], [34.4, 1194.0], [34.5, 1194.0], [34.6, 1195.0], [34.7, 1195.0], [34.8, 1195.0], [34.9, 1195.0], [35.0, 1195.0], [35.1, 1198.0], [35.2, 1198.0], [35.3, 1198.0], [35.4, 1198.0], [35.5, 1265.0], [35.6, 1265.0], [35.7, 1265.0], [35.8, 1265.0], [35.9, 1285.0], [36.0, 1285.0], [36.1, 1285.0], [36.2, 1285.0], [36.3, 1291.0], [36.4, 1291.0], [36.5, 1291.0], [36.6, 1291.0], [36.7, 1292.0], [36.8, 1292.0], [36.9, 1292.0], [37.0, 1292.0], [37.1, 1386.0], [37.2, 1386.0], [37.3, 1386.0], [37.4, 1386.0], [37.5, 1390.0], [37.6, 1390.0], [37.7, 1390.0], [37.8, 1390.0], [37.9, 1390.0], [38.0, 1405.0], [38.1, 1405.0], [38.2, 1405.0], [38.3, 1405.0], [38.4, 1407.0], [38.5, 1407.0], [38.6, 1407.0], [38.7, 1407.0], [38.8, 1439.0], [38.9, 1439.0], [39.0, 1439.0], [39.1, 1439.0], [39.2, 1453.0], [39.3, 1453.0], [39.4, 1453.0], [39.5, 1453.0], [39.6, 1467.0], [39.7, 1467.0], [39.8, 1467.0], [39.9, 1467.0], [40.0, 1468.0], [40.1, 1468.0], [40.2, 1468.0], [40.3, 1468.0], [40.4, 1468.0], [40.5, 1483.0], [40.6, 1483.0], [40.7, 1483.0], [40.8, 1483.0], [40.9, 1487.0], [41.0, 1487.0], [41.1, 1487.0], [41.2, 1487.0], [41.3, 1492.0], [41.4, 1492.0], [41.5, 1492.0], [41.6, 1492.0], [41.7, 1502.0], [41.8, 1502.0], [41.9, 1502.0], [42.0, 1502.0], [42.1, 1520.0], [42.2, 1520.0], [42.3, 1520.0], [42.4, 1520.0], [42.5, 1533.0], [42.6, 1533.0], [42.7, 1533.0], [42.8, 1533.0], [42.9, 1533.0], [43.0, 1546.0], [43.1, 1546.0], [43.2, 1546.0], [43.3, 1546.0], [43.4, 1556.0], [43.5, 1556.0], [43.6, 1556.0], [43.7, 1556.0], [43.8, 1567.0], [43.9, 1567.0], [44.0, 1567.0], [44.1, 1567.0], [44.2, 1590.0], [44.3, 1590.0], [44.4, 1590.0], [44.5, 1590.0], [44.6, 1595.0], [44.7, 1595.0], [44.8, 1595.0], [44.9, 1595.0], [45.0, 1668.0], [45.1, 1668.0], [45.2, 1668.0], [45.3, 1668.0], [45.4, 1668.0], [45.5, 1698.0], [45.6, 1698.0], [45.7, 1698.0], [45.8, 1698.0], [45.9, 1698.0], [46.0, 1698.0], [46.1, 1698.0], [46.2, 1698.0], [46.3, 1702.0], [46.4, 1702.0], [46.5, 1702.0], [46.6, 1702.0], [46.7, 1706.0], [46.8, 1706.0], [46.9, 1706.0], [47.0, 1706.0], [47.1, 1707.0], [47.2, 1707.0], [47.3, 1707.0], [47.4, 1707.0], [47.5, 1713.0], [47.6, 1713.0], [47.7, 1713.0], [47.8, 1713.0], [47.9, 1713.0], [48.0, 1756.0], [48.1, 1756.0], [48.2, 1756.0], [48.3, 1756.0], [48.4, 1775.0], [48.5, 1775.0], [48.6, 1775.0], [48.7, 1775.0], [48.8, 1805.0], [48.9, 1805.0], [49.0, 1805.0], [49.1, 1805.0], [49.2, 1815.0], [49.3, 1815.0], [49.4, 1815.0], [49.5, 1815.0], [49.6, 1845.0], [49.7, 1845.0], [49.8, 1845.0], [49.9, 1845.0], [50.0, 1846.0], [50.1, 1846.0], [50.2, 1846.0], [50.3, 1846.0], [50.4, 1846.0], [50.5, 1923.0], [50.6, 1923.0], [50.7, 1923.0], [50.8, 1923.0], [50.9, 1924.0], [51.0, 1924.0], [51.1, 1924.0], [51.2, 1924.0], [51.3, 1967.0], [51.4, 1967.0], [51.5, 1967.0], [51.6, 1967.0], [51.7, 1971.0], [51.8, 1971.0], [51.9, 1971.0], [52.0, 1971.0], [52.1, 1987.0], [52.2, 1987.0], [52.3, 1987.0], [52.4, 1987.0], [52.5, 1991.0], [52.6, 1991.0], [52.7, 1991.0], [52.8, 1991.0], [52.9, 1991.0], [53.0, 2041.0], [53.1, 2041.0], [53.2, 2041.0], [53.3, 2041.0], [53.4, 2061.0], [53.5, 2061.0], [53.6, 2061.0], [53.7, 2061.0], [53.8, 2063.0], [53.9, 2063.0], [54.0, 2063.0], [54.1, 2063.0], [54.2, 2155.0], [54.3, 2155.0], [54.4, 2155.0], [54.5, 2155.0], [54.6, 2225.0], [54.7, 2225.0], [54.8, 2225.0], [54.9, 2225.0], [55.0, 2237.0], [55.1, 2237.0], [55.2, 2237.0], [55.3, 2237.0], [55.4, 2237.0], [55.5, 2240.0], [55.6, 2240.0], [55.7, 2240.0], [55.8, 2240.0], [55.9, 2256.0], [56.0, 2256.0], [56.1, 2256.0], [56.2, 2256.0], [56.3, 2276.0], [56.4, 2276.0], [56.5, 2276.0], [56.6, 2276.0], [56.7, 2284.0], [56.8, 2284.0], [56.9, 2284.0], [57.0, 2284.0], [57.1, 2293.0], [57.2, 2293.0], [57.3, 2293.0], [57.4, 2293.0], [57.5, 2334.0], [57.6, 2334.0], [57.7, 2334.0], [57.8, 2334.0], [57.9, 2334.0], [58.0, 2359.0], [58.1, 2359.0], [58.2, 2359.0], [58.3, 2359.0], [58.4, 2381.0], [58.5, 2381.0], [58.6, 2381.0], [58.7, 2381.0], [58.8, 2382.0], [58.9, 2382.0], [59.0, 2382.0], [59.1, 2382.0], [59.2, 2437.0], [59.3, 2437.0], [59.4, 2437.0], [59.5, 2437.0], [59.6, 2456.0], [59.7, 2456.0], [59.8, 2456.0], [59.9, 2456.0], [60.0, 2475.0], [60.1, 2475.0], [60.2, 2475.0], [60.3, 2475.0], [60.4, 2475.0], [60.5, 2501.0], [60.6, 2501.0], [60.7, 2501.0], [60.8, 2501.0], [60.9, 2506.0], [61.0, 2506.0], [61.1, 2506.0], [61.2, 2506.0], [61.3, 2514.0], [61.4, 2514.0], [61.5, 2514.0], [61.6, 2514.0], [61.7, 2527.0], [61.8, 2527.0], [61.9, 2527.0], [62.0, 2527.0], [62.1, 2529.0], [62.2, 2529.0], [62.3, 2529.0], [62.4, 2529.0], [62.5, 2536.0], [62.6, 2536.0], [62.7, 2536.0], [62.8, 2536.0], [62.9, 2536.0], [63.0, 2542.0], [63.1, 2542.0], [63.2, 2542.0], [63.3, 2542.0], [63.4, 2543.0], [63.5, 2543.0], [63.6, 2543.0], [63.7, 2543.0], [63.8, 2667.0], [63.9, 2667.0], [64.0, 2667.0], [64.1, 2667.0], [64.2, 2673.0], [64.3, 2673.0], [64.4, 2673.0], [64.5, 2673.0], [64.6, 2678.0], [64.7, 2678.0], [64.8, 2678.0], [64.9, 2678.0], [65.0, 2678.0], [65.1, 2678.0], [65.2, 2678.0], [65.3, 2678.0], [65.4, 2678.0], [65.5, 2685.0], [65.6, 2685.0], [65.7, 2685.0], [65.8, 2685.0], [65.9, 2720.0], [66.0, 2720.0], [66.1, 2720.0], [66.2, 2720.0], [66.3, 2756.0], [66.4, 2756.0], [66.5, 2756.0], [66.6, 2756.0], [66.7, 2766.0], [66.8, 2766.0], [66.9, 2766.0], [67.0, 2766.0], [67.1, 2770.0], [67.2, 2770.0], [67.3, 2770.0], [67.4, 2770.0], [67.5, 2808.0], [67.6, 2808.0], [67.7, 2808.0], [67.8, 2808.0], [67.9, 2808.0], [68.0, 2892.0], [68.1, 2892.0], [68.2, 2892.0], [68.3, 2892.0], [68.4, 2963.0], [68.5, 2963.0], [68.6, 2963.0], [68.7, 2963.0], [68.8, 2975.0], [68.9, 2975.0], [69.0, 2975.0], [69.1, 2975.0], [69.2, 3009.0], [69.3, 3009.0], [69.4, 3009.0], [69.5, 3009.0], [69.6, 3012.0], [69.7, 3012.0], [69.8, 3012.0], [69.9, 3012.0], [70.0, 3027.0], [70.1, 3027.0], [70.2, 3027.0], [70.3, 3027.0], [70.4, 3027.0], [70.5, 3033.0], [70.6, 3033.0], [70.7, 3033.0], [70.8, 3033.0], [70.9, 3074.0], [71.0, 3074.0], [71.1, 3074.0], [71.2, 3074.0], [71.3, 3082.0], [71.4, 3082.0], [71.5, 3082.0], [71.6, 3082.0], [71.7, 3120.0], [71.8, 3120.0], [71.9, 3120.0], [72.0, 3120.0], [72.1, 3121.0], [72.2, 3121.0], [72.3, 3121.0], [72.4, 3121.0], [72.5, 3136.0], [72.6, 3136.0], [72.7, 3136.0], [72.8, 3136.0], [72.9, 3136.0], [73.0, 3156.0], [73.1, 3156.0], [73.2, 3156.0], [73.3, 3156.0], [73.4, 3168.0], [73.5, 3168.0], [73.6, 3168.0], [73.7, 3168.0], [73.8, 3189.0], [73.9, 3189.0], [74.0, 3189.0], [74.1, 3189.0], [74.2, 3199.0], [74.3, 3199.0], [74.4, 3199.0], [74.5, 3199.0], [74.6, 3207.0], [74.7, 3207.0], [74.8, 3207.0], [74.9, 3207.0], [75.0, 3218.0], [75.1, 3218.0], [75.2, 3218.0], [75.3, 3218.0], [75.4, 3218.0], [75.5, 3219.0], [75.6, 3219.0], [75.7, 3219.0], [75.8, 3219.0], [75.9, 3279.0], [76.0, 3279.0], [76.1, 3279.0], [76.2, 3279.0], [76.3, 3286.0], [76.4, 3286.0], [76.5, 3286.0], [76.6, 3286.0], [76.7, 3313.0], [76.8, 3313.0], [76.9, 3313.0], [77.0, 3313.0], [77.1, 3313.0], [77.2, 3313.0], [77.3, 3313.0], [77.4, 3313.0], [77.5, 3340.0], [77.6, 3340.0], [77.7, 3340.0], [77.8, 3340.0], [77.9, 3340.0], [78.0, 3406.0], [78.1, 3406.0], [78.2, 3406.0], [78.3, 3406.0], [78.4, 3455.0], [78.5, 3455.0], [78.6, 3455.0], [78.7, 3455.0], [78.8, 3479.0], [78.9, 3479.0], [79.0, 3479.0], [79.1, 3479.0], [79.2, 3509.0], [79.3, 3509.0], [79.4, 3509.0], [79.5, 3509.0], [79.6, 3514.0], [79.7, 3514.0], [79.8, 3514.0], [79.9, 3514.0], [80.0, 3514.0], [80.1, 3521.0], [80.2, 3521.0], [80.3, 3521.0], [80.4, 3521.0], [80.5, 3523.0], [80.6, 3523.0], [80.7, 3523.0], [80.8, 3523.0], [80.9, 3554.0], [81.0, 3554.0], [81.1, 3554.0], [81.2, 3554.0], [81.3, 3571.0], [81.4, 3571.0], [81.5, 3571.0], [81.6, 3571.0], [81.7, 3587.0], [81.8, 3587.0], [81.9, 3587.0], [82.0, 3587.0], [82.1, 3624.0], [82.2, 3624.0], [82.3, 3624.0], [82.4, 3624.0], [82.5, 3624.0], [82.6, 3653.0], [82.7, 3653.0], [82.8, 3653.0], [82.9, 3653.0], [83.0, 3688.0], [83.1, 3688.0], [83.2, 3688.0], [83.3, 3688.0], [83.4, 3711.0], [83.5, 3711.0], [83.6, 3711.0], [83.7, 3711.0], [83.8, 3797.0], [83.9, 3797.0], [84.0, 3797.0], [84.1, 3797.0], [84.2, 3812.0], [84.3, 3812.0], [84.4, 3812.0], [84.5, 3812.0], [84.6, 3839.0], [84.7, 3839.0], [84.8, 3839.0], [84.9, 3839.0], [85.0, 3839.0], [85.1, 3894.0], [85.2, 3894.0], [85.3, 3894.0], [85.4, 3894.0], [85.5, 4007.0], [85.6, 4007.0], [85.7, 4007.0], [85.8, 4007.0], [85.9, 4072.0], [86.0, 4072.0], [86.1, 4072.0], [86.2, 4072.0], [86.3, 4093.0], [86.4, 4093.0], [86.5, 4093.0], [86.6, 4093.0], [86.7, 4186.0], [86.8, 4186.0], [86.9, 4186.0], [87.0, 4186.0], [87.1, 4244.0], [87.2, 4244.0], [87.3, 4244.0], [87.4, 4244.0], [87.5, 4244.0], [87.6, 4372.0], [87.7, 4372.0], [87.8, 4372.0], [87.9, 4372.0], [88.0, 4375.0], [88.1, 4375.0], [88.2, 4375.0], [88.3, 4375.0], [88.4, 4384.0], [88.5, 4384.0], [88.6, 4384.0], [88.7, 4384.0], [88.8, 4388.0], [88.9, 4388.0], [89.0, 4388.0], [89.1, 4388.0], [89.2, 4418.0], [89.3, 4418.0], [89.4, 4418.0], [89.5, 4418.0], [89.6, 4527.0], [89.7, 4527.0], [89.8, 4527.0], [89.9, 4527.0], [90.0, 4527.0], [90.1, 4537.0], [90.2, 4537.0], [90.3, 4537.0], [90.4, 4537.0], [90.5, 4539.0], [90.6, 4539.0], [90.7, 4539.0], [90.8, 4539.0], [90.9, 4567.0], [91.0, 4567.0], [91.1, 4567.0], [91.2, 4567.0], [91.3, 4993.0], [91.4, 4993.0], [91.5, 4993.0], [91.6, 4993.0], [91.7, 5020.0], [91.8, 5020.0], [91.9, 5020.0], [92.0, 5020.0], [92.1, 5223.0], [92.2, 5223.0], [92.3, 5223.0], [92.4, 5223.0], [92.5, 5223.0], [92.6, 5474.0], [92.7, 5474.0], [92.8, 5474.0], [92.9, 5474.0], [93.0, 5584.0], [93.1, 5584.0], [93.2, 5584.0], [93.3, 5584.0], [93.4, 5664.0], [93.5, 5664.0], [93.6, 5664.0], [93.7, 5664.0], [93.8, 5690.0], [93.9, 5690.0], [94.0, 5690.0], [94.1, 5690.0], [94.2, 5981.0], [94.3, 5981.0], [94.4, 5981.0], [94.5, 5981.0], [94.6, 6311.0], [94.7, 6311.0], [94.8, 6311.0], [94.9, 6311.0], [95.0, 6311.0], [95.1, 6433.0], [95.2, 6433.0], [95.3, 6433.0], [95.4, 6433.0], [95.5, 6862.0], [95.6, 6862.0], [95.7, 6862.0], [95.8, 6862.0], [95.9, 7024.0], [96.0, 7024.0], [96.1, 7024.0], [96.2, 7024.0], [96.3, 7238.0], [96.4, 7238.0], [96.5, 7238.0], [96.6, 7238.0], [96.7, 7882.0], [96.8, 7882.0], [96.9, 7882.0], [97.0, 7882.0], [97.1, 8187.0], [97.2, 8187.0], [97.3, 8187.0], [97.4, 8187.0], [97.5, 8187.0], [97.6, 8188.0], [97.7, 8188.0], [97.8, 8188.0], [97.9, 8188.0], [98.0, 9139.0], [98.1, 9139.0], [98.2, 9139.0], [98.3, 9139.0], [98.4, 9312.0], [98.5, 9312.0], [98.6, 9312.0], [98.7, 9312.0], [98.8, 10161.0], [98.9, 10161.0], [99.0, 10161.0], [99.1, 10161.0], [99.2, 10340.0], [99.3, 10340.0], [99.4, 10340.0], [99.5, 10340.0], [99.6, 12454.0], [99.7, 12454.0], [99.8, 12454.0], [99.9, 12454.0], [100.0, 12454.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 44.0, "series": [{"data": [[700.0, 1.0], [900.0, 5.0], [1000.0, 6.0], [1100.0, 7.0], [1200.0, 4.0], [1300.0, 2.0], [1400.0, 9.0], [1500.0, 8.0], [1600.0, 3.0], [1700.0, 6.0], [1800.0, 4.0], [1900.0, 6.0], [2000.0, 3.0], [2100.0, 1.0], [2200.0, 7.0], [2300.0, 4.0], [2400.0, 3.0], [2500.0, 8.0], [2600.0, 5.0], [2800.0, 2.0], [2700.0, 4.0], [2900.0, 2.0], [3000.0, 6.0], [3100.0, 7.0], [3300.0, 3.0], [3200.0, 5.0], [3400.0, 3.0], [3500.0, 7.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 3.0], [4000.0, 3.0], [4200.0, 1.0], [4300.0, 4.0], [4100.0, 1.0], [4500.0, 4.0], [4400.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [7800.0, 1.0], [8100.0, 2.0], [9100.0, 1.0], [9300.0, 1.0], [10100.0, 1.0], [10300.0, 1.0], [12400.0, 1.0], [100.0, 13.0], [200.0, 44.0], [300.0, 3.0], [400.0, 5.0], [500.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 140.0, "series": [{"data": [[0.0, 65.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 140.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.79143128E12, "maxY": 2.857142857142857, "series": [{"data": [[1.791432E12, 1.1818181818181819], [1.7914317E12, 1.3636363636363635], [1.7914314E12, 1.0], [1.79143302E12, 1.1000000000000003], [1.79143272E12, 1.3333333333333333], [1.79143242E12, 1.0], [1.79143212E12, 1.2222222222222223], [1.79143182E12, 1.0], [1.79143152E12, 2.857142857142857], [1.79143284E12, 1.4444444444444444], [1.79143254E12, 1.25], [1.79143224E12, 1.4], [1.79143194E12, 1.0], [1.79143164E12, 1.0], [1.79143134E12, 1.2307692307692306], [1.79143296E12, 1.5714285714285714], [1.79143266E12, 1.0], [1.79143236E12, 1.1666666666666665], [1.79143206E12, 1.25], [1.79143176E12, 1.5714285714285714], [1.79143146E12, 1.25], [1.79143308E12, 1.0], [1.79143278E12, 1.2], [1.79143248E12, 1.2222222222222223], [1.79143218E12, 1.2857142857142856], [1.79143188E12, 1.1111111111111112], [1.79143158E12, 1.7777777777777777], [1.79143128E12, 1.1111111111111112], [1.7914329E12, 1.0], [1.7914326E12, 1.2000000000000002], [1.7914323E12, 1.375]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143308E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1873.117647058822, "minX": 1.0, "maxY": 8663.5, "series": [{"data": [[2.0, 2960.2093023255816], [1.0, 1873.117647058822], [4.0, 8663.5], [5.0, 7084.0], [3.0, 6269.166666666667]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.2874999999999999, 2277.8000000000006]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6.466666666666667, "minX": 1.79143128E12, "maxY": 233.71666666666667, "series": [{"data": [[1.791432E12, 35.483333333333334], [1.7914317E12, 35.38333333333333], [1.7914314E12, 25.566666666666666], [1.79143302E12, 32.266666666666666], [1.79143272E12, 28.8], [1.79143242E12, 19.116666666666667], [1.79143212E12, 28.716666666666665], [1.79143182E12, 25.816666666666666], [1.79143152E12, 22.383333333333333], [1.79143284E12, 28.866666666666667], [1.79143254E12, 12.883333333333333], [1.79143224E12, 32.016666666666666], [1.79143194E12, 15.483333333333333], [1.79143164E12, 22.183333333333334], [1.79143134E12, 41.666666666666664], [1.79143296E12, 21.816666666666666], [1.79143266E12, 9.7], [1.79143236E12, 19.25], [1.79143206E12, 12.75], [1.79143176E12, 22.3], [1.79143146E12, 38.13333333333333], [1.79143308E12, 6.466666666666667], [1.79143278E12, 16.05], [1.79143248E12, 28.8], [1.79143218E12, 22.616666666666667], [1.79143188E12, 28.666666666666668], [1.79143158E12, 29.066666666666666], [1.79143128E12, 28.783333333333335], [1.7914329E12, 19.2], [1.7914326E12, 32.05], [1.7914323E12, 25.533333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.791432E12, 199.16666666666666], [1.7914317E12, 231.68333333333334], [1.7914314E12, 142.18333333333334], [1.79143302E12, 195.15], [1.79143272E12, 204.81666666666666], [1.79143242E12, 95.98333333333333], [1.79143212E12, 161.15], [1.79143182E12, 150.56666666666666], [1.79143152E12, 145.2], [1.79143284E12, 168.15], [1.79143254E12, 74.46666666666667], [1.79143224E12, 194.63333333333333], [1.79143194E12, 93.9], [1.79143164E12, 148.13333333333333], [1.79143134E12, 233.71666666666667], [1.79143296E12, 146.9], [1.79143266E12, 38.56666666666667], [1.79143236E12, 98.16666666666667], [1.79143206E12, 69.83333333333333], [1.79143176E12, 119.06666666666666], [1.79143146E12, 166.58333333333334], [1.79143308E12, 39.416666666666664], [1.79143278E12, 84.05], [1.79143248E12, 169.81666666666666], [1.79143218E12, 117.56666666666666], [1.79143188E12, 144.01666666666668], [1.79143158E12, 185.96666666666667], [1.79143128E12, 181.15], [1.7914329E12, 146.23333333333332], [1.7914326E12, 188.86666666666667], [1.7914323E12, 168.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143308E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 358.75, "minX": 1.79143128E12, "maxY": 5840.714285714285, "series": [{"data": [[1.791432E12, 1810.0909090909092], [1.7914317E12, 2662.818181818182], [1.7914314E12, 1805.0], [1.79143302E12, 1815.9], [1.79143272E12, 3527.8888888888887], [1.79143242E12, 1691.1666666666667], [1.79143212E12, 2683.222222222222], [1.79143182E12, 1598.5], [1.79143152E12, 5840.714285714285], [1.79143284E12, 1522.111111111111], [1.79143254E12, 2643.5], [1.79143224E12, 2373.2000000000003], [1.79143194E12, 756.6], [1.79143164E12, 1286.7142857142858], [1.79143134E12, 1575.9230769230771], [1.79143296E12, 1286.5714285714284], [1.79143266E12, 1800.6666666666667], [1.79143236E12, 1821.0], [1.79143206E12, 358.75], [1.79143176E12, 1675.7142857142858], [1.79143146E12, 2278.1666666666665], [1.79143308E12, 3198.0], [1.79143278E12, 3122.2], [1.79143248E12, 2319.5555555555557], [1.79143218E12, 2889.571428571429], [1.79143188E12, 2138.1111111111113], [1.79143158E12, 5822.0], [1.79143128E12, 1630.7777777777778], [1.7914329E12, 1737.3333333333335], [1.7914326E12, 1870.6], [1.7914323E12, 2434.25]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143308E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 358.75, "minX": 1.79143128E12, "maxY": 5840.714285714285, "series": [{"data": [[1.791432E12, 1810.0909090909092], [1.7914317E12, 2662.7272727272725], [1.7914314E12, 1805.0], [1.79143302E12, 1815.9], [1.79143272E12, 3527.8888888888887], [1.79143242E12, 1691.1666666666667], [1.79143212E12, 2683.1111111111113], [1.79143182E12, 1598.5], [1.79143152E12, 5840.714285714285], [1.79143284E12, 1522.111111111111], [1.79143254E12, 2643.5], [1.79143224E12, 2373.1], [1.79143194E12, 756.6], [1.79143164E12, 1286.5714285714284], [1.79143134E12, 1575.8461538461538], [1.79143296E12, 1286.5714285714284], [1.79143266E12, 1800.6666666666667], [1.79143236E12, 1820.8333333333333], [1.79143206E12, 358.75], [1.79143176E12, 1675.7142857142858], [1.79143146E12, 2278.083333333333], [1.79143308E12, 3198.0], [1.79143278E12, 3122.2], [1.79143248E12, 2319.5555555555557], [1.79143218E12, 2889.571428571429], [1.79143188E12, 2138.1111111111113], [1.79143158E12, 5821.888888888889], [1.79143128E12, 1630.7777777777778], [1.7914329E12, 1737.1666666666665], [1.7914326E12, 1870.6], [1.7914323E12, 2434.125]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143308E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.79143128E12, "maxY": 12.714285714285714, "series": [{"data": [[1.791432E12, 10.0], [1.7914317E12, 10.454545454545455], [1.7914314E12, 7.5], [1.79143302E12, 10.6], [1.79143272E12, 10.666666666666666], [1.79143242E12, 10.5], [1.79143212E12, 9.0], [1.79143182E12, 9.875], [1.79143152E12, 12.714285714285714], [1.79143284E12, 11.666666666666666], [1.79143254E12, 10.75], [1.79143224E12, 12.200000000000001], [1.79143194E12, 8.6], [1.79143164E12, 9.571428571428571], [1.79143134E12, 9.615384615384615], [1.79143296E12, 10.0], [1.79143266E12, 11.0], [1.79143236E12, 11.666666666666666], [1.79143206E12, 9.25], [1.79143176E12, 9.285714285714286], [1.79143146E12, 8.499999999999998], [1.79143308E12, 7.0], [1.79143278E12, 8.8], [1.79143248E12, 10.0], [1.79143218E12, 8.428571428571429], [1.79143188E12, 8.0], [1.79143158E12, 10.222222222222221], [1.79143128E12, 9.88888888888889], [1.7914329E12, 11.0], [1.7914326E12, 10.7], [1.7914323E12, 10.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143308E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 183.0, "minX": 1.79143128E12, "maxY": 12454.0, "series": [{"data": [[1.791432E12, 3688.0], [1.7914317E12, 5664.0], [1.7914314E12, 4537.0], [1.79143302E12, 4093.0], [1.79143272E12, 10340.0], [1.79143242E12, 3587.0], [1.79143212E12, 5690.0], [1.79143182E12, 2673.0], [1.79143152E12, 10161.0], [1.79143284E12, 2720.0], [1.79143254E12, 6433.0], [1.79143224E12, 4527.0], [1.79143194E12, 1707.0], [1.79143164E12, 3624.0], [1.79143134E12, 4244.0], [1.79143296E12, 3279.0], [1.79143266E12, 2240.0], [1.79143236E12, 3313.0], [1.79143206E12, 799.0], [1.79143176E12, 3286.0], [1.79143146E12, 4993.0], [1.79143308E12, 3711.0], [1.79143278E12, 6862.0], [1.79143248E12, 5474.0], [1.79143218E12, 4539.0], [1.79143188E12, 3797.0], [1.79143158E12, 12454.0], [1.79143128E12, 5020.0], [1.7914329E12, 4388.0], [1.7914326E12, 4384.0], [1.7914323E12, 7024.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.791432E12, 3591.8], [1.7914317E12, 5444.6], [1.7914314E12, 4537.0], [1.79143302E12, 4049.0], [1.79143272E12, 10340.0], [1.79143242E12, 3587.0], [1.79143212E12, 5690.0], [1.79143182E12, 2673.0], [1.79143152E12, 10161.0], [1.79143284E12, 2720.0], [1.79143254E12, 6433.0], [1.79143224E12, 4511.8], [1.79143194E12, 1707.0], [1.79143164E12, 3624.0], [1.79143134E12, 4104.0], [1.79143296E12, 3279.0], [1.79143266E12, 2240.0], [1.79143236E12, 3313.0], [1.79143206E12, 799.0], [1.79143176E12, 3286.0], [1.79143146E12, 4531.600000000002], [1.79143308E12, 3711.0], [1.79143278E12, 6862.0], [1.79143248E12, 5474.0], [1.79143218E12, 4539.0], [1.79143188E12, 3797.0], [1.79143158E12, 12454.0], [1.79143128E12, 5020.0], [1.7914329E12, 4388.0], [1.7914326E12, 4262.400000000001], [1.7914323E12, 7024.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.791432E12, 3688.0], [1.7914317E12, 5664.0], [1.7914314E12, 4537.0], [1.79143302E12, 4093.0], [1.79143272E12, 10340.0], [1.79143242E12, 3587.0], [1.79143212E12, 5690.0], [1.79143182E12, 2673.0], [1.79143152E12, 10161.0], [1.79143284E12, 2720.0], [1.79143254E12, 6433.0], [1.79143224E12, 4527.0], [1.79143194E12, 1707.0], [1.79143164E12, 3624.0], [1.79143134E12, 4244.0], [1.79143296E12, 3279.0], [1.79143266E12, 2240.0], [1.79143236E12, 3313.0], [1.79143206E12, 799.0], [1.79143176E12, 3286.0], [1.79143146E12, 4993.0], [1.79143308E12, 3711.0], [1.79143278E12, 6862.0], [1.79143248E12, 5474.0], [1.79143218E12, 4539.0], [1.79143188E12, 3797.0], [1.79143158E12, 12454.0], [1.79143128E12, 5020.0], [1.7914329E12, 4388.0], [1.7914326E12, 4384.0], [1.7914323E12, 7024.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.791432E12, 3688.0], [1.7914317E12, 5664.0], [1.7914314E12, 4537.0], [1.79143302E12, 4093.0], [1.79143272E12, 10340.0], [1.79143242E12, 3587.0], [1.79143212E12, 5690.0], [1.79143182E12, 2673.0], [1.79143152E12, 10161.0], [1.79143284E12, 2720.0], [1.79143254E12, 6433.0], [1.79143224E12, 4527.0], [1.79143194E12, 1707.0], [1.79143164E12, 3624.0], [1.79143134E12, 4244.0], [1.79143296E12, 3279.0], [1.79143266E12, 2240.0], [1.79143236E12, 3313.0], [1.79143206E12, 799.0], [1.79143176E12, 3286.0], [1.79143146E12, 4993.0], [1.79143308E12, 3711.0], [1.79143278E12, 6862.0], [1.79143248E12, 5474.0], [1.79143218E12, 4539.0], [1.79143188E12, 3797.0], [1.79143158E12, 12454.0], [1.79143128E12, 5020.0], [1.7914329E12, 4388.0], [1.7914326E12, 4384.0], [1.7914323E12, 7024.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.791432E12, 188.0], [1.7914317E12, 193.0], [1.7914314E12, 191.0], [1.79143302E12, 223.0], [1.79143272E12, 284.0], [1.79143242E12, 195.0], [1.79143212E12, 191.0], [1.79143182E12, 212.0], [1.79143152E12, 955.0], [1.79143284E12, 256.0], [1.79143254E12, 190.0], [1.79143224E12, 193.0], [1.79143194E12, 205.0], [1.79143164E12, 214.0], [1.79143134E12, 197.0], [1.79143296E12, 229.0], [1.79143266E12, 1567.0], [1.79143236E12, 228.0], [1.79143206E12, 207.0], [1.79143176E12, 195.0], [1.79143146E12, 183.0], [1.79143308E12, 2685.0], [1.79143278E12, 1405.0], [1.79143248E12, 202.0], [1.79143218E12, 1483.0], [1.79143188E12, 209.0], [1.79143158E12, 208.0], [1.79143128E12, 198.0], [1.7914329E12, 227.0], [1.7914326E12, 198.0], [1.7914323E12, 210.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.791432E12, 2155.0], [1.7914317E12, 2975.0], [1.7914314E12, 1878.5], [1.79143302E12, 1441.0], [1.79143272E12, 2770.0], [1.79143242E12, 1301.0], [1.79143212E12, 2678.0], [1.79143182E12, 1819.5], [1.79143152E12, 5981.0], [1.79143284E12, 1533.0], [1.79143254E12, 1975.5], [1.79143224E12, 2570.5], [1.79143194E12, 218.0], [1.79143164E12, 1107.0], [1.79143134E12, 1291.0], [1.79143296E12, 1051.0], [1.79143266E12, 1595.0], [1.79143236E12, 1698.0], [1.79143206E12, 214.5], [1.79143176E12, 1756.0], [1.79143146E12, 2061.0], [1.79143308E12, 3198.0], [1.79143278E12, 2506.0], [1.79143248E12, 2256.0], [1.79143218E12, 2756.0], [1.79143188E12, 2381.0], [1.79143158E12, 5584.0], [1.79143128E12, 1198.0], [1.7914329E12, 1223.0], [1.7914326E12, 2016.0], [1.7914323E12, 1463.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143308E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1706.5, "minX": 1.0, "maxY": 2496.0, "series": [{"data": [[1.0, 1706.5], [2.0, 2496.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1706.0, "minX": 1.0, "maxY": 2496.0, "series": [{"data": [[1.0, 1706.0], [2.0, 2496.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79143128E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.791432E12, 0.16666666666666666], [1.7914317E12, 0.16666666666666666], [1.7914314E12, 0.13333333333333333], [1.79143302E12, 0.16666666666666666], [1.79143272E12, 0.15], [1.79143242E12, 0.1], [1.79143212E12, 0.13333333333333333], [1.79143182E12, 0.15], [1.79143152E12, 0.18333333333333332], [1.79143284E12, 0.15], [1.79143254E12, 0.06666666666666667], [1.79143224E12, 0.15], [1.79143194E12, 0.1], [1.79143164E12, 0.13333333333333333], [1.79143134E12, 0.21666666666666667], [1.79143296E12, 0.13333333333333333], [1.79143266E12, 0.05], [1.79143236E12, 0.1], [1.79143206E12, 0.08333333333333333], [1.79143176E12, 0.11666666666666667], [1.79143146E12, 0.2], [1.79143308E12, 0.016666666666666666], [1.79143278E12, 0.08333333333333333], [1.79143248E12, 0.15], [1.79143218E12, 0.13333333333333333], [1.79143188E12, 0.13333333333333333], [1.79143158E12, 0.08333333333333333], [1.79143128E12, 0.15], [1.7914329E12, 0.1], [1.7914326E12, 0.16666666666666666], [1.7914323E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143308E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79143128E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.791432E12, 0.18333333333333332], [1.7914317E12, 0.18333333333333332], [1.7914314E12, 0.13333333333333333], [1.79143302E12, 0.16666666666666666], [1.79143272E12, 0.15], [1.79143242E12, 0.1], [1.79143212E12, 0.15], [1.79143182E12, 0.13333333333333333], [1.79143152E12, 0.11666666666666667], [1.79143284E12, 0.15], [1.79143254E12, 0.06666666666666667], [1.79143224E12, 0.16666666666666666], [1.79143194E12, 0.08333333333333333], [1.79143164E12, 0.11666666666666667], [1.79143134E12, 0.21666666666666667], [1.79143296E12, 0.11666666666666667], [1.79143266E12, 0.05], [1.79143236E12, 0.1], [1.79143206E12, 0.06666666666666667], [1.79143176E12, 0.11666666666666667], [1.79143146E12, 0.2], [1.79143308E12, 0.03333333333333333], [1.79143278E12, 0.08333333333333333], [1.79143248E12, 0.15], [1.79143218E12, 0.11666666666666667], [1.79143188E12, 0.15], [1.79143158E12, 0.15], [1.79143128E12, 0.15], [1.7914329E12, 0.1], [1.7914326E12, 0.16666666666666666], [1.7914323E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143308E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79143128E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.791432E12, 0.18333333333333332], [1.7914317E12, 0.18333333333333332], [1.7914314E12, 0.13333333333333333], [1.79143302E12, 0.16666666666666666], [1.79143272E12, 0.15], [1.79143242E12, 0.1], [1.79143212E12, 0.15], [1.79143182E12, 0.13333333333333333], [1.79143152E12, 0.11666666666666667], [1.79143284E12, 0.15], [1.79143254E12, 0.06666666666666667], [1.79143224E12, 0.16666666666666666], [1.79143194E12, 0.08333333333333333], [1.79143164E12, 0.11666666666666667], [1.79143134E12, 0.21666666666666667], [1.79143296E12, 0.11666666666666667], [1.79143266E12, 0.05], [1.79143236E12, 0.1], [1.79143206E12, 0.06666666666666667], [1.79143176E12, 0.11666666666666667], [1.79143146E12, 0.2], [1.79143308E12, 0.03333333333333333], [1.79143278E12, 0.08333333333333333], [1.79143248E12, 0.15], [1.79143218E12, 0.11666666666666667], [1.79143188E12, 0.15], [1.79143158E12, 0.15], [1.79143128E12, 0.15], [1.7914329E12, 0.1], [1.7914326E12, 0.16666666666666666], [1.7914323E12, 0.13333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143308E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79143128E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.791432E12, 0.18333333333333332], [1.7914317E12, 0.18333333333333332], [1.7914314E12, 0.13333333333333333], [1.79143302E12, 0.16666666666666666], [1.79143272E12, 0.15], [1.79143242E12, 0.1], [1.79143212E12, 0.15], [1.79143182E12, 0.13333333333333333], [1.79143152E12, 0.11666666666666667], [1.79143284E12, 0.15], [1.79143254E12, 0.06666666666666667], [1.79143224E12, 0.16666666666666666], [1.79143194E12, 0.08333333333333333], [1.79143164E12, 0.11666666666666667], [1.79143134E12, 0.21666666666666667], [1.79143296E12, 0.11666666666666667], [1.79143266E12, 0.05], [1.79143236E12, 0.1], [1.79143206E12, 0.06666666666666667], [1.79143176E12, 0.11666666666666667], [1.79143146E12, 0.2], [1.79143308E12, 0.03333333333333333], [1.79143278E12, 0.08333333333333333], [1.79143248E12, 0.15], [1.79143218E12, 0.11666666666666667], [1.79143188E12, 0.15], [1.79143158E12, 0.15], [1.79143128E12, 0.15], [1.7914329E12, 0.1], [1.7914326E12, 0.16666666666666666], [1.7914323E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143308E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

