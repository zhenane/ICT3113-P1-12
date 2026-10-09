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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 120021.0, "series": [{"data": [[0.0, 170.0], [0.1, 170.0], [0.2, 170.0], [0.3, 170.0], [0.4, 170.0], [0.5, 171.0], [0.6, 171.0], [0.7, 171.0], [0.8, 171.0], [0.9, 173.0], [1.0, 173.0], [1.1, 173.0], [1.2, 173.0], [1.3, 182.0], [1.4, 182.0], [1.5, 182.0], [1.6, 182.0], [1.7, 183.0], [1.8, 183.0], [1.9, 183.0], [2.0, 183.0], [2.1, 183.0], [2.2, 183.0], [2.3, 183.0], [2.4, 183.0], [2.5, 183.0], [2.6, 183.0], [2.7, 183.0], [2.8, 183.0], [2.9, 183.0], [3.0, 187.0], [3.1, 187.0], [3.2, 187.0], [3.3, 187.0], [3.4, 188.0], [3.5, 188.0], [3.6, 188.0], [3.7, 188.0], [3.8, 188.0], [3.9, 188.0], [4.0, 188.0], [4.1, 188.0], [4.2, 189.0], [4.3, 189.0], [4.4, 189.0], [4.5, 189.0], [4.6, 190.0], [4.7, 190.0], [4.8, 190.0], [4.9, 190.0], [5.0, 190.0], [5.1, 190.0], [5.2, 190.0], [5.3, 190.0], [5.4, 190.0], [5.5, 190.0], [5.6, 190.0], [5.7, 190.0], [5.8, 190.0], [5.9, 191.0], [6.0, 191.0], [6.1, 191.0], [6.2, 191.0], [6.3, 191.0], [6.4, 191.0], [6.5, 191.0], [6.6, 191.0], [6.7, 191.0], [6.8, 191.0], [6.9, 191.0], [7.0, 191.0], [7.1, 191.0], [7.2, 191.0], [7.3, 191.0], [7.4, 191.0], [7.5, 191.0], [7.6, 192.0], [7.7, 192.0], [7.8, 192.0], [7.9, 192.0], [8.0, 192.0], [8.1, 192.0], [8.2, 192.0], [8.3, 192.0], [8.4, 192.0], [8.5, 192.0], [8.6, 192.0], [8.7, 192.0], [8.8, 195.0], [8.9, 195.0], [9.0, 195.0], [9.1, 195.0], [9.2, 195.0], [9.3, 195.0], [9.4, 195.0], [9.5, 195.0], [9.6, 197.0], [9.7, 197.0], [9.8, 197.0], [9.9, 197.0], [10.0, 197.0], [10.1, 197.0], [10.2, 197.0], [10.3, 197.0], [10.4, 197.0], [10.5, 200.0], [10.6, 200.0], [10.7, 200.0], [10.8, 200.0], [10.9, 200.0], [11.0, 200.0], [11.1, 200.0], [11.2, 200.0], [11.3, 200.0], [11.4, 200.0], [11.5, 200.0], [11.6, 200.0], [11.7, 201.0], [11.8, 201.0], [11.9, 201.0], [12.0, 201.0], [12.1, 201.0], [12.2, 201.0], [12.3, 201.0], [12.4, 201.0], [12.5, 201.0], [12.6, 202.0], [12.7, 202.0], [12.8, 202.0], [12.9, 202.0], [13.0, 202.0], [13.1, 202.0], [13.2, 202.0], [13.3, 202.0], [13.4, 202.0], [13.5, 202.0], [13.6, 202.0], [13.7, 202.0], [13.8, 204.0], [13.9, 204.0], [14.0, 204.0], [14.1, 204.0], [14.2, 204.0], [14.3, 204.0], [14.4, 204.0], [14.5, 204.0], [14.6, 205.0], [14.7, 205.0], [14.8, 205.0], [14.9, 205.0], [15.0, 205.0], [15.1, 206.0], [15.2, 206.0], [15.3, 206.0], [15.4, 206.0], [15.5, 206.0], [15.6, 206.0], [15.7, 206.0], [15.8, 206.0], [15.9, 207.0], [16.0, 207.0], [16.1, 207.0], [16.2, 207.0], [16.3, 207.0], [16.4, 207.0], [16.5, 207.0], [16.6, 207.0], [16.7, 208.0], [16.8, 208.0], [16.9, 208.0], [17.0, 208.0], [17.1, 208.0], [17.2, 208.0], [17.3, 208.0], [17.4, 208.0], [17.5, 208.0], [17.6, 208.0], [17.7, 208.0], [17.8, 208.0], [17.9, 208.0], [18.0, 209.0], [18.1, 209.0], [18.2, 209.0], [18.3, 209.0], [18.4, 209.0], [18.5, 209.0], [18.6, 209.0], [18.7, 209.0], [18.8, 209.0], [18.9, 209.0], [19.0, 209.0], [19.1, 209.0], [19.2, 210.0], [19.3, 210.0], [19.4, 210.0], [19.5, 210.0], [19.6, 211.0], [19.7, 211.0], [19.8, 211.0], [19.9, 211.0], [20.0, 211.0], [20.1, 212.0], [20.2, 212.0], [20.3, 212.0], [20.4, 212.0], [20.5, 212.0], [20.6, 212.0], [20.7, 212.0], [20.8, 212.0], [20.9, 212.0], [21.0, 212.0], [21.1, 212.0], [21.2, 212.0], [21.3, 212.0], [21.4, 212.0], [21.5, 212.0], [21.6, 212.0], [21.7, 213.0], [21.8, 213.0], [21.9, 213.0], [22.0, 213.0], [22.1, 213.0], [22.2, 213.0], [22.3, 213.0], [22.4, 213.0], [22.5, 213.0], [22.6, 215.0], [22.7, 215.0], [22.8, 215.0], [22.9, 215.0], [23.0, 216.0], [23.1, 216.0], [23.2, 216.0], [23.3, 216.0], [23.4, 216.0], [23.5, 216.0], [23.6, 216.0], [23.7, 216.0], [23.8, 218.0], [23.9, 218.0], [24.0, 218.0], [24.1, 218.0], [24.2, 218.0], [24.3, 218.0], [24.4, 218.0], [24.5, 218.0], [24.6, 218.0], [24.7, 218.0], [24.8, 218.0], [24.9, 218.0], [25.0, 218.0], [25.1, 221.0], [25.2, 221.0], [25.3, 221.0], [25.4, 221.0], [25.5, 222.0], [25.6, 222.0], [25.7, 222.0], [25.8, 222.0], [25.9, 222.0], [26.0, 222.0], [26.1, 222.0], [26.2, 222.0], [26.3, 222.0], [26.4, 222.0], [26.5, 222.0], [26.6, 222.0], [26.7, 226.0], [26.8, 226.0], [26.9, 226.0], [27.0, 226.0], [27.1, 227.0], [27.2, 227.0], [27.3, 227.0], [27.4, 227.0], [27.5, 227.0], [27.6, 227.0], [27.7, 227.0], [27.8, 227.0], [27.9, 227.0], [28.0, 231.0], [28.1, 231.0], [28.2, 231.0], [28.3, 231.0], [28.4, 233.0], [28.5, 233.0], [28.6, 233.0], [28.7, 233.0], [28.8, 234.0], [28.9, 234.0], [29.0, 234.0], [29.1, 234.0], [29.2, 739.0], [29.3, 739.0], [29.4, 739.0], [29.5, 739.0], [29.6, 810.0], [29.7, 810.0], [29.8, 810.0], [29.9, 810.0], [30.0, 810.0], [30.1, 858.0], [30.2, 858.0], [30.3, 858.0], [30.4, 858.0], [30.5, 967.0], [30.6, 967.0], [30.7, 967.0], [30.8, 967.0], [30.9, 976.0], [31.0, 976.0], [31.1, 976.0], [31.2, 976.0], [31.3, 977.0], [31.4, 977.0], [31.5, 977.0], [31.6, 977.0], [31.7, 1021.0], [31.8, 1021.0], [31.9, 1021.0], [32.0, 1021.0], [32.1, 1029.0], [32.2, 1029.0], [32.3, 1029.0], [32.4, 1029.0], [32.5, 1029.0], [32.6, 1117.0], [32.7, 1117.0], [32.8, 1117.0], [32.9, 1117.0], [33.0, 1122.0], [33.1, 1122.0], [33.2, 1122.0], [33.3, 1122.0], [33.4, 1150.0], [33.5, 1150.0], [33.6, 1150.0], [33.7, 1150.0], [33.8, 1206.0], [33.9, 1206.0], [34.0, 1206.0], [34.1, 1206.0], [34.2, 1241.0], [34.3, 1241.0], [34.4, 1241.0], [34.5, 1241.0], [34.6, 1249.0], [34.7, 1249.0], [34.8, 1249.0], [34.9, 1249.0], [35.0, 1271.0], [35.1, 1271.0], [35.2, 1271.0], [35.3, 1271.0], [35.4, 1271.0], [35.5, 1308.0], [35.6, 1308.0], [35.7, 1308.0], [35.8, 1308.0], [35.9, 1340.0], [36.0, 1340.0], [36.1, 1340.0], [36.2, 1340.0], [36.3, 1345.0], [36.4, 1345.0], [36.5, 1345.0], [36.6, 1345.0], [36.7, 1377.0], [36.8, 1377.0], [36.9, 1377.0], [37.0, 1377.0], [37.1, 1420.0], [37.2, 1420.0], [37.3, 1420.0], [37.4, 1420.0], [37.5, 1432.0], [37.6, 1432.0], [37.7, 1432.0], [37.8, 1432.0], [37.9, 1432.0], [38.0, 1464.0], [38.1, 1464.0], [38.2, 1464.0], [38.3, 1464.0], [38.4, 1476.0], [38.5, 1476.0], [38.6, 1476.0], [38.7, 1476.0], [38.8, 1488.0], [38.9, 1488.0], [39.0, 1488.0], [39.1, 1488.0], [39.2, 1494.0], [39.3, 1494.0], [39.4, 1494.0], [39.5, 1494.0], [39.6, 1505.0], [39.7, 1505.0], [39.8, 1505.0], [39.9, 1505.0], [40.0, 1513.0], [40.1, 1513.0], [40.2, 1513.0], [40.3, 1513.0], [40.4, 1513.0], [40.5, 1539.0], [40.6, 1539.0], [40.7, 1539.0], [40.8, 1539.0], [40.9, 1573.0], [41.0, 1573.0], [41.1, 1573.0], [41.2, 1573.0], [41.3, 1637.0], [41.4, 1637.0], [41.5, 1637.0], [41.6, 1637.0], [41.7, 1660.0], [41.8, 1660.0], [41.9, 1660.0], [42.0, 1660.0], [42.1, 1766.0], [42.2, 1766.0], [42.3, 1766.0], [42.4, 1766.0], [42.5, 1892.0], [42.6, 1892.0], [42.7, 1892.0], [42.8, 1892.0], [42.9, 1892.0], [43.0, 1930.0], [43.1, 1930.0], [43.2, 1930.0], [43.3, 1930.0], [43.4, 1971.0], [43.5, 1971.0], [43.6, 1971.0], [43.7, 1971.0], [43.8, 2052.0], [43.9, 2052.0], [44.0, 2052.0], [44.1, 2052.0], [44.2, 2056.0], [44.3, 2056.0], [44.4, 2056.0], [44.5, 2056.0], [44.6, 2058.0], [44.7, 2058.0], [44.8, 2058.0], [44.9, 2058.0], [45.0, 2142.0], [45.1, 2142.0], [45.2, 2142.0], [45.3, 2142.0], [45.4, 2142.0], [45.5, 2149.0], [45.6, 2149.0], [45.7, 2149.0], [45.8, 2149.0], [45.9, 2178.0], [46.0, 2178.0], [46.1, 2178.0], [46.2, 2178.0], [46.3, 2225.0], [46.4, 2225.0], [46.5, 2225.0], [46.6, 2225.0], [46.7, 2252.0], [46.8, 2252.0], [46.9, 2252.0], [47.0, 2252.0], [47.1, 2308.0], [47.2, 2308.0], [47.3, 2308.0], [47.4, 2308.0], [47.5, 2356.0], [47.6, 2356.0], [47.7, 2356.0], [47.8, 2356.0], [47.9, 2356.0], [48.0, 2415.0], [48.1, 2415.0], [48.2, 2415.0], [48.3, 2415.0], [48.4, 2425.0], [48.5, 2425.0], [48.6, 2425.0], [48.7, 2425.0], [48.8, 2514.0], [48.9, 2514.0], [49.0, 2514.0], [49.1, 2514.0], [49.2, 2518.0], [49.3, 2518.0], [49.4, 2518.0], [49.5, 2518.0], [49.6, 2562.0], [49.7, 2562.0], [49.8, 2562.0], [49.9, 2562.0], [50.0, 2598.0], [50.1, 2598.0], [50.2, 2598.0], [50.3, 2598.0], [50.4, 2598.0], [50.5, 2603.0], [50.6, 2603.0], [50.7, 2603.0], [50.8, 2603.0], [50.9, 2644.0], [51.0, 2644.0], [51.1, 2644.0], [51.2, 2644.0], [51.3, 2647.0], [51.4, 2647.0], [51.5, 2647.0], [51.6, 2647.0], [51.7, 2668.0], [51.8, 2668.0], [51.9, 2668.0], [52.0, 2668.0], [52.1, 2693.0], [52.2, 2693.0], [52.3, 2693.0], [52.4, 2693.0], [52.5, 2705.0], [52.6, 2705.0], [52.7, 2705.0], [52.8, 2705.0], [52.9, 2705.0], [53.0, 2731.0], [53.1, 2731.0], [53.2, 2731.0], [53.3, 2731.0], [53.4, 2759.0], [53.5, 2759.0], [53.6, 2759.0], [53.7, 2759.0], [53.8, 2777.0], [53.9, 2777.0], [54.0, 2777.0], [54.1, 2777.0], [54.2, 2939.0], [54.3, 2939.0], [54.4, 2939.0], [54.5, 2939.0], [54.6, 2954.0], [54.7, 2954.0], [54.8, 2954.0], [54.9, 2954.0], [55.0, 2981.0], [55.1, 2981.0], [55.2, 2981.0], [55.3, 2981.0], [55.4, 2981.0], [55.5, 2986.0], [55.6, 2986.0], [55.7, 2986.0], [55.8, 2986.0], [55.9, 3019.0], [56.0, 3019.0], [56.1, 3019.0], [56.2, 3019.0], [56.3, 3067.0], [56.4, 3067.0], [56.5, 3067.0], [56.6, 3067.0], [56.7, 3086.0], [56.8, 3086.0], [56.9, 3086.0], [57.0, 3086.0], [57.1, 3112.0], [57.2, 3112.0], [57.3, 3112.0], [57.4, 3112.0], [57.5, 3143.0], [57.6, 3143.0], [57.7, 3143.0], [57.8, 3143.0], [57.9, 3143.0], [58.0, 3153.0], [58.1, 3153.0], [58.2, 3153.0], [58.3, 3153.0], [58.4, 3167.0], [58.5, 3167.0], [58.6, 3167.0], [58.7, 3167.0], [58.8, 3172.0], [58.9, 3172.0], [59.0, 3172.0], [59.1, 3172.0], [59.2, 3242.0], [59.3, 3242.0], [59.4, 3242.0], [59.5, 3242.0], [59.6, 3250.0], [59.7, 3250.0], [59.8, 3250.0], [59.9, 3250.0], [60.0, 3255.0], [60.1, 3255.0], [60.2, 3255.0], [60.3, 3255.0], [60.4, 3255.0], [60.5, 3268.0], [60.6, 3268.0], [60.7, 3268.0], [60.8, 3268.0], [60.9, 3311.0], [61.0, 3311.0], [61.1, 3311.0], [61.2, 3311.0], [61.3, 3349.0], [61.4, 3349.0], [61.5, 3349.0], [61.6, 3349.0], [61.7, 3358.0], [61.8, 3358.0], [61.9, 3358.0], [62.0, 3358.0], [62.1, 3399.0], [62.2, 3399.0], [62.3, 3399.0], [62.4, 3399.0], [62.5, 3416.0], [62.6, 3416.0], [62.7, 3416.0], [62.8, 3416.0], [62.9, 3416.0], [63.0, 3447.0], [63.1, 3447.0], [63.2, 3447.0], [63.3, 3447.0], [63.4, 3485.0], [63.5, 3485.0], [63.6, 3485.0], [63.7, 3485.0], [63.8, 3557.0], [63.9, 3557.0], [64.0, 3557.0], [64.1, 3557.0], [64.2, 3565.0], [64.3, 3565.0], [64.4, 3565.0], [64.5, 3565.0], [64.6, 3581.0], [64.7, 3581.0], [64.8, 3581.0], [64.9, 3581.0], [65.0, 3583.0], [65.1, 3583.0], [65.2, 3583.0], [65.3, 3583.0], [65.4, 3583.0], [65.5, 3611.0], [65.6, 3611.0], [65.7, 3611.0], [65.8, 3611.0], [65.9, 3672.0], [66.0, 3672.0], [66.1, 3672.0], [66.2, 3672.0], [66.3, 3692.0], [66.4, 3692.0], [66.5, 3692.0], [66.6, 3692.0], [66.7, 3709.0], [66.8, 3709.0], [66.9, 3709.0], [67.0, 3709.0], [67.1, 3780.0], [67.2, 3780.0], [67.3, 3780.0], [67.4, 3780.0], [67.5, 3797.0], [67.6, 3797.0], [67.7, 3797.0], [67.8, 3797.0], [67.9, 3797.0], [68.0, 3843.0], [68.1, 3843.0], [68.2, 3843.0], [68.3, 3843.0], [68.4, 3859.0], [68.5, 3859.0], [68.6, 3859.0], [68.7, 3859.0], [68.8, 4078.0], [68.9, 4078.0], [69.0, 4078.0], [69.1, 4078.0], [69.2, 4142.0], [69.3, 4142.0], [69.4, 4142.0], [69.5, 4142.0], [69.6, 4222.0], [69.7, 4222.0], [69.8, 4222.0], [69.9, 4222.0], [70.0, 4265.0], [70.1, 4265.0], [70.2, 4265.0], [70.3, 4265.0], [70.4, 4265.0], [70.5, 4346.0], [70.6, 4346.0], [70.7, 4346.0], [70.8, 4346.0], [70.9, 4403.0], [71.0, 4403.0], [71.1, 4403.0], [71.2, 4403.0], [71.3, 4518.0], [71.4, 4518.0], [71.5, 4518.0], [71.6, 4518.0], [71.7, 4625.0], [71.8, 4625.0], [71.9, 4625.0], [72.0, 4625.0], [72.1, 4944.0], [72.2, 4944.0], [72.3, 4944.0], [72.4, 4944.0], [72.5, 4993.0], [72.6, 4993.0], [72.7, 4993.0], [72.8, 4993.0], [72.9, 4993.0], [73.0, 5000.0], [73.1, 5000.0], [73.2, 5000.0], [73.3, 5000.0], [73.4, 5000.0], [73.5, 5000.0], [73.6, 5000.0], [73.7, 5000.0], [73.8, 5000.0], [73.9, 5000.0], [74.0, 5000.0], [74.1, 5000.0], [74.2, 5001.0], [74.3, 5001.0], [74.4, 5001.0], [74.5, 5001.0], [74.6, 5001.0], [74.7, 5001.0], [74.8, 5001.0], [74.9, 5001.0], [75.0, 5001.0], [75.1, 5001.0], [75.2, 5001.0], [75.3, 5001.0], [75.4, 5001.0], [75.5, 5001.0], [75.6, 5001.0], [75.7, 5001.0], [75.8, 5001.0], [75.9, 5001.0], [76.0, 5001.0], [76.1, 5001.0], [76.2, 5001.0], [76.3, 5001.0], [76.4, 5001.0], [76.5, 5001.0], [76.6, 5001.0], [76.7, 5001.0], [76.8, 5001.0], [76.9, 5001.0], [77.0, 5001.0], [77.1, 5001.0], [77.2, 5001.0], [77.3, 5001.0], [77.4, 5001.0], [77.5, 5002.0], [77.6, 5002.0], [77.7, 5002.0], [77.8, 5002.0], [77.9, 5002.0], [78.0, 5002.0], [78.1, 5002.0], [78.2, 5002.0], [78.3, 5002.0], [78.4, 5002.0], [78.5, 5002.0], [78.6, 5002.0], [78.7, 5002.0], [78.8, 5002.0], [78.9, 5002.0], [79.0, 5002.0], [79.1, 5002.0], [79.2, 5002.0], [79.3, 5002.0], [79.4, 5002.0], [79.5, 5002.0], [79.6, 5002.0], [79.7, 5002.0], [79.8, 5002.0], [79.9, 5002.0], [80.0, 5002.0], [80.1, 5002.0], [80.2, 5002.0], [80.3, 5002.0], [80.4, 5002.0], [80.5, 5002.0], [80.6, 5002.0], [80.7, 5002.0], [80.8, 5002.0], [80.9, 5002.0], [81.0, 5002.0], [81.1, 5002.0], [81.2, 5002.0], [81.3, 5002.0], [81.4, 5002.0], [81.5, 5002.0], [81.6, 5002.0], [81.7, 5002.0], [81.8, 5002.0], [81.9, 5002.0], [82.0, 5002.0], [82.1, 5002.0], [82.2, 5002.0], [82.3, 5002.0], [82.4, 5002.0], [82.5, 5002.0], [82.6, 5002.0], [82.7, 5002.0], [82.8, 5002.0], [82.9, 5002.0], [83.0, 5002.0], [83.1, 5002.0], [83.2, 5002.0], [83.3, 5002.0], [83.4, 5002.0], [83.5, 5002.0], [83.6, 5002.0], [83.7, 5002.0], [83.8, 5002.0], [83.9, 5002.0], [84.0, 5002.0], [84.1, 5002.0], [84.2, 5002.0], [84.3, 5002.0], [84.4, 5002.0], [84.5, 5002.0], [84.6, 5002.0], [84.7, 5002.0], [84.8, 5002.0], [84.9, 5002.0], [85.0, 5002.0], [85.1, 5002.0], [85.2, 5002.0], [85.3, 5002.0], [85.4, 5002.0], [85.5, 5002.0], [85.6, 5002.0], [85.7, 5002.0], [85.8, 5002.0], [85.9, 5002.0], [86.0, 5002.0], [86.1, 5002.0], [86.2, 5002.0], [86.3, 5002.0], [86.4, 5002.0], [86.5, 5002.0], [86.6, 5002.0], [86.7, 5002.0], [86.8, 5002.0], [86.9, 5002.0], [87.0, 5002.0], [87.1, 5003.0], [87.2, 5003.0], [87.3, 5003.0], [87.4, 5003.0], [87.5, 5003.0], [87.6, 5003.0], [87.7, 5003.0], [87.8, 5003.0], [87.9, 5003.0], [88.0, 5003.0], [88.1, 5003.0], [88.2, 5003.0], [88.3, 5003.0], [88.4, 5004.0], [88.5, 5004.0], [88.6, 5004.0], [88.7, 5004.0], [88.8, 5004.0], [88.9, 5004.0], [89.0, 5004.0], [89.1, 5004.0], [89.2, 5004.0], [89.3, 5004.0], [89.4, 5004.0], [89.5, 5004.0], [89.6, 5005.0], [89.7, 5005.0], [89.8, 5005.0], [89.9, 5005.0], [90.0, 5005.0], [90.1, 5005.0], [90.2, 5005.0], [90.3, 5005.0], [90.4, 5005.0], [90.5, 5005.0], [90.6, 5005.0], [90.7, 5005.0], [90.8, 5005.0], [90.9, 5005.0], [91.0, 5005.0], [91.1, 5005.0], [91.2, 5005.0], [91.3, 5005.0], [91.4, 5005.0], [91.5, 5005.0], [91.6, 5005.0], [91.7, 5006.0], [91.8, 5006.0], [91.9, 5006.0], [92.0, 5006.0], [92.1, 5010.0], [92.2, 5010.0], [92.3, 5010.0], [92.4, 5010.0], [92.5, 5011.0], [92.6, 5011.0], [92.7, 5011.0], [92.8, 5011.0], [92.9, 5011.0], [93.0, 5012.0], [93.1, 5012.0], [93.2, 5012.0], [93.3, 5012.0], [93.4, 5013.0], [93.5, 5013.0], [93.6, 5013.0], [93.7, 5013.0], [93.8, 5014.0], [93.9, 5014.0], [94.0, 5014.0], [94.1, 5014.0], [94.2, 5018.0], [94.3, 5018.0], [94.4, 5018.0], [94.5, 5018.0], [94.6, 5198.0], [94.7, 5198.0], [94.8, 5198.0], [94.9, 5198.0], [95.0, 5218.0], [95.1, 5218.0], [95.2, 5218.0], [95.3, 5218.0], [95.4, 5218.0], [95.5, 5392.0], [95.6, 5392.0], [95.7, 5392.0], [95.8, 5392.0], [95.9, 5784.0], [96.0, 5784.0], [96.1, 5784.0], [96.2, 5784.0], [96.3, 6285.0], [96.4, 6285.0], [96.5, 6285.0], [96.6, 6285.0], [96.7, 6578.0], [96.8, 6578.0], [96.9, 6578.0], [97.0, 6578.0], [97.1, 7314.0], [97.2, 7314.0], [97.3, 7314.0], [97.4, 7314.0], [97.5, 7932.0], [97.6, 7932.0], [97.7, 7932.0], [97.8, 7932.0], [97.9, 7932.0], [98.0, 120008.0], [98.1, 120008.0], [98.2, 120008.0], [98.3, 120008.0], [98.4, 120008.0], [98.5, 120008.0], [98.6, 120008.0], [98.7, 120008.0], [98.8, 120009.0], [98.9, 120009.0], [99.0, 120009.0], [99.1, 120009.0], [99.2, 120009.0], [99.3, 120009.0], [99.4, 120009.0], [99.5, 120009.0], [99.6, 120021.0], [99.7, 120021.0], [99.8, 120021.0], [99.9, 120021.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 52.0, "series": [{"data": [[700.0, 1.0], [800.0, 2.0], [900.0, 3.0], [1000.0, 2.0], [1100.0, 3.0], [1200.0, 4.0], [1300.0, 4.0], [1400.0, 6.0], [1500.0, 4.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 4.0], [2600.0, 5.0], [2700.0, 4.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 5.0], [3200.0, 4.0], [3300.0, 4.0], [3400.0, 3.0], [3500.0, 4.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 2.0], [4300.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5000.0, 52.0], [5200.0, 1.0], [5300.0, 1.0], [5700.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [7300.0, 1.0], [7900.0, 1.0], [100.0, 25.0], [200.0, 45.0], [120000.0, 5.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 25.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 87.0, "series": [{"data": [[0.0, 70.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 87.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 58.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79139942E12, "maxY": 6.2, "series": [{"data": [[1.79140002E12, 1.2727272727272725], [1.79139972E12, 1.5454545454545456], [1.79140032E12, 1.0], [1.79139942E12, 1.3333333333333333], [1.79140014E12, 1.0], [1.79140044E12, 1.1111111111111112], [1.79140074E12, 3.4285714285714284], [1.79140104E12, 1.625], [1.79140086E12, 4.07142857142857], [1.79139954E12, 1.25], [1.79140116E12, 1.875], [1.79139984E12, 1.3333333333333333], [1.79139996E12, 1.1428571428571428], [1.79140026E12, 1.1666666666666667], [1.79140056E12, 1.1428571428571428], [1.79139966E12, 1.5000000000000002], [1.79140038E12, 1.1818181818181819], [1.79140068E12, 1.125], [1.79140098E12, 1.5714285714285714], [1.7914011E12, 2.0], [1.79139978E12, 1.0], [1.79139948E12, 1.0], [1.79140008E12, 1.0], [1.7913999E12, 1.2727272727272725], [1.7914002E12, 1.0833333333333335], [1.7914005E12, 1.0], [1.7914008E12, 6.2], [1.79140062E12, 1.1111111111111114], [1.7913996E12, 1.1666666666666665], [1.79140092E12, 1.0], [1.79140122E12, 1.3333333333333333]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79140122E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1861.611764705882, "minX": 1.0, "maxY": 120009.0, "series": [{"data": [[2.0, 6523.883720930234], [1.0, 1861.611764705882], [8.0, 5002.0], [4.0, 120008.0], [5.0, 120009.0], [3.0, 14780.916666666666], [6.0, 19379.25], [7.0, 5001.75]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.6041666666666674, 4976.8]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.79139942E12, "maxY": 711.45, "series": [{"data": [[1.79140002E12, 35.5], [1.79139972E12, 35.25], [1.79140032E12, 15.933333333333334], [1.79139942E12, 28.8], [1.79140014E12, 18.966666666666665], [1.79140044E12, 28.683333333333334], [1.79140074E12, 161.78333333333333], [1.79140104E12, 397.06666666666666], [1.79140086E12, 711.45], [1.79139954E12, 25.833333333333332], [1.79140116E12, 397.06666666666666], [1.79139984E12, 19.0], [1.79139996E12, 22.316666666666666], [1.79140026E12, 38.4], [1.79140056E12, 22.433333333333334], [1.79139966E12, 38.13333333333333], [1.79140038E12, 35.2], [1.79140068E12, 25.55], [1.79140098E12, 347.43333333333334], [1.7914011E12, 297.8], [1.79139978E12, 16.066666666666666], [1.79139948E12, 25.533333333333335], [1.79140008E12, 9.283333333333333], [1.7913999E12, 35.333333333333336], [1.7914002E12, 38.4], [1.7914005E12, 6.433333333333334], [1.7914008E12, 248.16666666666666], [1.79140062E12, 28.783333333333335], [1.7913996E12, 19.116666666666667], [1.79140092E12, 198.53333333333333], [1.79140122E12, 144.18333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79140002E12, 200.71666666666667], [1.79139972E12, 218.1], [1.79140032E12, 92.46666666666667], [1.79139942E12, 181.15], [1.79140014E12, 115.25], [1.79140044E12, 186.28333333333333], [1.79140074E12, 76.18333333333334], [1.79140104E12, 0.0], [1.79140086E12, 0.0], [1.79139954E12, 149.85], [1.79140116E12, 0.0], [1.79139984E12, 120.48333333333333], [1.79139996E12, 119.06666666666666], [1.79140026E12, 222.06666666666666], [1.79140056E12, 124.55], [1.79139966E12, 168.41666666666666], [1.79140038E12, 181.78333333333333], [1.79140068E12, 160.38333333333333], [1.79140098E12, 0.0], [1.7914011E12, 0.0], [1.79139978E12, 117.23333333333333], [1.79139948E12, 131.9], [1.79140008E12, 43.733333333333334], [1.7913999E12, 231.68333333333334], [1.7914002E12, 208.68333333333334], [1.7914005E12, 47.9], [1.7914008E12, 0.0], [1.79140062E12, 137.98333333333332], [1.7913996E12, 115.8], [1.79140092E12, 0.0], [1.79140122E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79140122E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 598.8, "minX": 1.79139942E12, "maxY": 46076.71428571428, "series": [{"data": [[1.79140002E12, 1990.9090909090908], [1.79139972E12, 3313.9999999999995], [1.79140032E12, 1801.6], [1.79139942E12, 1991.4444444444443], [1.79140014E12, 1125.6666666666665], [1.79140044E12, 928.6666666666665], [1.79140074E12, 3014.0000000000005], [1.79140104E12, 5005.000000000001], [1.79140086E12, 46076.71428571428], [1.79139954E12, 2191.5], [1.79140116E12, 5001.875], [1.79139984E12, 1599.6666666666667], [1.79139996E12, 1440.0], [1.79140026E12, 1976.5], [1.79140056E12, 1755.4285714285716], [1.79139966E12, 2613.4166666666665], [1.79140038E12, 1793.0], [1.79140068E12, 2513.75], [1.79140098E12, 5004.142857142857], [1.7914011E12, 5002.5], [1.79139978E12, 598.8], [1.79139948E12, 1018.2499999999999], [1.79140008E12, 1379.3333333333335], [1.7913999E12, 1805.5454545454545], [1.7914002E12, 885.5833333333334], [1.7914005E12, 1878.5], [1.7914008E12, 5003.2], [1.79140062E12, 1702.6666666666667], [1.7913996E12, 2818.5], [1.79140092E12, 5006.5], [1.79140122E12, 3851.333333333333]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79140122E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.79139942E12, "maxY": 3313.818181818181, "series": [{"data": [[1.79140002E12, 1990.9090909090908], [1.79139972E12, 3313.818181818181], [1.79140032E12, 1801.4], [1.79139942E12, 1991.4444444444443], [1.79140014E12, 1125.6666666666665], [1.79140044E12, 928.5555555555554], [1.79140074E12, 869.8571428571428], [1.79140104E12, 0.0], [1.79140086E12, 0.0], [1.79139954E12, 2191.3749999999995], [1.79140116E12, 0.0], [1.79139984E12, 1599.5], [1.79139996E12, 1440.0], [1.79140026E12, 1976.4166666666667], [1.79140056E12, 1755.4285714285716], [1.79139966E12, 2613.333333333333], [1.79140038E12, 1793.0], [1.79140068E12, 2513.75], [1.79140098E12, 0.0], [1.7914011E12, 0.0], [1.79139978E12, 598.6], [1.79139948E12, 1018.0], [1.79140008E12, 1379.0], [1.7913999E12, 1805.4545454545455], [1.7914002E12, 885.4999999999999], [1.7914005E12, 1878.5], [1.7914008E12, 0.0], [1.79140062E12, 1702.6666666666667], [1.7913996E12, 2818.5], [1.79140092E12, 0.0], [1.79140122E12, 0.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79140122E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.79139942E12, "maxY": 5006.5, "series": [{"data": [[1.79140002E12, 10.636363636363637], [1.79139972E12, 10.545454545454545], [1.79140032E12, 8.4], [1.79139942E12, 10.444444444444445], [1.79140014E12, 10.166666666666668], [1.79140044E12, 9.0], [1.79140074E12, 2148.857142857143], [1.79140104E12, 5004.75], [1.79140086E12, 3218.8571428571427], [1.79139954E12, 8.5], [1.79140116E12, 5001.875], [1.79139984E12, 9.166666666666668], [1.79139996E12, 9.142857142857142], [1.79140026E12, 9.75], [1.79140056E12, 8.285714285714285], [1.79139966E12, 15.666666666666668], [1.79140038E12, 10.454545454545455], [1.79140068E12, 9.5], [1.79140098E12, 5004.000000000001], [1.7914011E12, 5002.5], [1.79139978E12, 8.0], [1.79139948E12, 8.5], [1.79140008E12, 8.666666666666666], [1.7913999E12, 8.454545454545455], [1.7914002E12, 9.0], [1.7914005E12, 9.0], [1.7914008E12, 5003.2], [1.79140062E12, 10.444444444444443], [1.7913996E12, 16.333333333333332], [1.79140092E12, 5006.5], [1.79140122E12, 3851.333333333333]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79140122E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 170.0, "minX": 1.79139942E12, "maxY": 7932.0, "series": [{"data": [[1.79140038E12, 4346.0], [1.79140068E12, 6285.0], [1.79140002E12, 3709.0], [1.79139972E12, 7932.0], [1.79140032E12, 3581.0], [1.79139942E12, 4993.0], [1.79140014E12, 3153.0], [1.79140044E12, 3255.0], [1.79139978E12, 2178.0], [1.79140074E12, 2644.0], [1.79139948E12, 4142.0], [1.79140008E12, 3067.0], [1.7913999E12, 5784.0], [1.7914002E12, 3268.0], [1.79139954E12, 3843.0], [1.7914005E12, 3557.0], [1.79139984E12, 3611.0], [1.79140062E12, 3399.0], [1.7913996E12, 7314.0], [1.79139996E12, 2986.0], [1.79140026E12, 6578.0], [1.79140056E12, 4403.0], [1.79139966E12, 5218.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79140038E12, 4232.8], [1.79140068E12, 6285.0], [1.79140002E12, 3683.8], [1.79139972E12, 7385.200000000003], [1.79140032E12, 3581.0], [1.79139942E12, 4993.0], [1.79140014E12, 3153.0], [1.79140044E12, 3255.0], [1.79139978E12, 2178.0], [1.79140074E12, 2644.0], [1.79139948E12, 4142.0], [1.79140008E12, 3067.0], [1.7913999E12, 5365.600000000001], [1.7914002E12, 2963.200000000001], [1.79139954E12, 3843.0], [1.7914005E12, 3557.0], [1.79139984E12, 3611.0], [1.79140062E12, 3399.0], [1.7913996E12, 7314.0], [1.79139996E12, 2986.0], [1.79140026E12, 6087.800000000002], [1.79140056E12, 4403.0], [1.79139966E12, 4932.100000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79140038E12, 4346.0], [1.79140068E12, 6285.0], [1.79140002E12, 3709.0], [1.79139972E12, 7932.0], [1.79140032E12, 3581.0], [1.79139942E12, 4993.0], [1.79140014E12, 3153.0], [1.79140044E12, 3255.0], [1.79139978E12, 2178.0], [1.79140074E12, 2644.0], [1.79139948E12, 4142.0], [1.79140008E12, 3067.0], [1.7913999E12, 5784.0], [1.7914002E12, 3268.0], [1.79139954E12, 3843.0], [1.7914005E12, 3557.0], [1.79139984E12, 3611.0], [1.79140062E12, 3399.0], [1.7913996E12, 7314.0], [1.79139996E12, 2986.0], [1.79140026E12, 6578.0], [1.79140056E12, 4403.0], [1.79139966E12, 5218.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79140038E12, 4346.0], [1.79140068E12, 6285.0], [1.79140002E12, 3709.0], [1.79139972E12, 7932.0], [1.79140032E12, 3581.0], [1.79139942E12, 4993.0], [1.79140014E12, 3153.0], [1.79140044E12, 3255.0], [1.79139978E12, 2178.0], [1.79140074E12, 2644.0], [1.79139948E12, 4142.0], [1.79140008E12, 3067.0], [1.7913999E12, 5784.0], [1.7914002E12, 3268.0], [1.79139954E12, 3843.0], [1.7914005E12, 3557.0], [1.79139984E12, 3611.0], [1.79140062E12, 3399.0], [1.7913996E12, 7314.0], [1.79139996E12, 2986.0], [1.79140026E12, 6578.0], [1.79140056E12, 4403.0], [1.79139966E12, 5218.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79140038E12, 183.0], [1.79140068E12, 170.0], [1.79140002E12, 192.0], [1.79139972E12, 190.0], [1.79140032E12, 191.0], [1.79139942E12, 195.0], [1.79140014E12, 209.0], [1.79140044E12, 188.0], [1.79139978E12, 200.0], [1.79140074E12, 192.0], [1.79139948E12, 182.0], [1.79140008E12, 213.0], [1.7913999E12, 183.0], [1.7914002E12, 190.0], [1.79139954E12, 208.0], [1.7914005E12, 200.0], [1.79139984E12, 233.0], [1.79140062E12, 191.0], [1.7913996E12, 205.0], [1.79139996E12, 173.0], [1.79140026E12, 192.0], [1.79140056E12, 208.0], [1.79139966E12, 171.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79140038E12, 1494.0], [1.79140068E12, 1969.0], [1.79140002E12, 1971.0], [1.79139972E12, 3565.0], [1.79140032E12, 2308.0], [1.79139942E12, 1464.0], [1.79140014E12, 760.5], [1.79140044E12, 204.0], [1.79139978E12, 207.0], [1.79140074E12, 1626.5], [1.79139948E12, 206.0], [1.79140008E12, 858.0], [1.7913999E12, 1021.0], [1.7914002E12, 217.0], [1.79139954E12, 2187.0], [1.7914005E12, 1878.5], [1.79139984E12, 1317.5], [1.79140062E12, 1340.0], [1.7913996E12, 2324.0], [1.79139996E12, 1892.0], [1.79140026E12, 511.0], [1.79140056E12, 1476.0], [1.79139966E12, 2832.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79140074E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1289.5, "minX": 1.0, "maxY": 120008.0, "series": [{"data": [[1.0, 1289.5], [2.0, 2197.0], [3.0, 3875.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 5002.0], [2.0, 5002.0], [4.0, 120008.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3875.0, "series": [{"data": [[1.0, 1289.0], [2.0, 2196.5], [3.0, 3875.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [2.0, 0.0], [4.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79139942E12, "maxY": 0.2, "series": [{"data": [[1.79140002E12, 0.18333333333333332], [1.79139972E12, 0.18333333333333332], [1.79140032E12, 0.08333333333333333], [1.79139942E12, 0.15], [1.79140014E12, 0.1], [1.79140044E12, 0.16666666666666666], [1.79140074E12, 0.18333333333333332], [1.79140104E12, 0.13333333333333333], [1.79140086E12, 0.15], [1.79139954E12, 0.13333333333333333], [1.79140116E12, 0.13333333333333333], [1.79139984E12, 0.13333333333333333], [1.79139996E12, 0.11666666666666667], [1.79140026E12, 0.2], [1.79140056E12, 0.11666666666666667], [1.79139966E12, 0.2], [1.79140038E12, 0.18333333333333332], [1.79140068E12, 0.13333333333333333], [1.79140098E12, 0.1], [1.7914011E12, 0.11666666666666667], [1.79139978E12, 0.1], [1.79139948E12, 0.13333333333333333], [1.79140008E12, 0.05], [1.7913999E12, 0.13333333333333333], [1.7914002E12, 0.2], [1.7914005E12, 0.016666666666666666], [1.7914008E12, 0.08333333333333333], [1.79140062E12, 0.16666666666666666], [1.7913996E12, 0.1], [1.79140092E12, 0.08333333333333333], [1.79140122E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79140122E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79139942E12, "maxY": 0.2, "series": [{"data": [[1.79140038E12, 0.18333333333333332], [1.79140068E12, 0.13333333333333333], [1.79140002E12, 0.18333333333333332], [1.79139972E12, 0.18333333333333332], [1.79140032E12, 0.08333333333333333], [1.79139942E12, 0.15], [1.79140014E12, 0.1], [1.79140044E12, 0.15], [1.79139978E12, 0.08333333333333333], [1.79140074E12, 0.06666666666666667], [1.79139948E12, 0.13333333333333333], [1.79140008E12, 0.05], [1.7913999E12, 0.18333333333333332], [1.7914002E12, 0.2], [1.79139954E12, 0.13333333333333333], [1.7914005E12, 0.03333333333333333], [1.79139984E12, 0.1], [1.79140062E12, 0.15], [1.7913996E12, 0.1], [1.79139996E12, 0.11666666666666667], [1.79140026E12, 0.2], [1.79140056E12, 0.11666666666666667], [1.79139966E12, 0.2]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79140086E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.79140086E12, 0.15], [1.79140116E12, 0.13333333333333333], [1.79140098E12, 0.11666666666666667], [1.7914008E12, 0.08333333333333333], [1.7914011E12, 0.1], [1.79140092E12, 0.06666666666666667], [1.79140074E12, 0.05], [1.79140122E12, 0.03333333333333333], [1.79140104E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.ConnectTimeoutException", "isController": false}, {"data": [[1.79140122E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79140122E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79139942E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79140038E12, 0.18333333333333332], [1.79140068E12, 0.13333333333333333], [1.79140002E12, 0.18333333333333332], [1.79139972E12, 0.18333333333333332], [1.79140032E12, 0.08333333333333333], [1.79139942E12, 0.15], [1.79140014E12, 0.1], [1.79140044E12, 0.15], [1.79139978E12, 0.08333333333333333], [1.79140074E12, 0.06666666666666667], [1.79139948E12, 0.13333333333333333], [1.79140008E12, 0.05], [1.7913999E12, 0.18333333333333332], [1.7914002E12, 0.2], [1.79139954E12, 0.13333333333333333], [1.7914005E12, 0.03333333333333333], [1.79139984E12, 0.1], [1.79140062E12, 0.15], [1.7913996E12, 0.1], [1.79139996E12, 0.11666666666666667], [1.79140026E12, 0.2], [1.79140056E12, 0.11666666666666667], [1.79139966E12, 0.2]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79140086E12, 0.23333333333333334], [1.79140116E12, 0.13333333333333333], [1.79140098E12, 0.11666666666666667], [1.7914008E12, 0.08333333333333333], [1.7914011E12, 0.1], [1.79140092E12, 0.06666666666666667], [1.79140074E12, 0.05], [1.79140122E12, 0.05], [1.79140104E12, 0.13333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79140122E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79139942E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79140038E12, 0.18333333333333332], [1.79140068E12, 0.13333333333333333], [1.79140002E12, 0.18333333333333332], [1.79139972E12, 0.18333333333333332], [1.79140032E12, 0.08333333333333333], [1.79139942E12, 0.15], [1.79140014E12, 0.1], [1.79140044E12, 0.15], [1.79139978E12, 0.08333333333333333], [1.79140074E12, 0.06666666666666667], [1.79139948E12, 0.13333333333333333], [1.79140008E12, 0.05], [1.7913999E12, 0.18333333333333332], [1.7914002E12, 0.2], [1.79139954E12, 0.13333333333333333], [1.7914005E12, 0.03333333333333333], [1.79139984E12, 0.1], [1.79140062E12, 0.15], [1.7913996E12, 0.1], [1.79139996E12, 0.11666666666666667], [1.79140026E12, 0.2], [1.79140056E12, 0.11666666666666667], [1.79139966E12, 0.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79140086E12, 0.23333333333333334], [1.79140116E12, 0.13333333333333333], [1.79140098E12, 0.11666666666666667], [1.7914008E12, 0.08333333333333333], [1.7914011E12, 0.1], [1.79140092E12, 0.06666666666666667], [1.79140074E12, 0.05], [1.79140122E12, 0.05], [1.79140104E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79140122E12, "title": "Total Transactions Per Second"}},
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

