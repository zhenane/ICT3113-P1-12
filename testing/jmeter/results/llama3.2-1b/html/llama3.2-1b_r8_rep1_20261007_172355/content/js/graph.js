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
        data: {"result": {"minY": 482.0, "minX": 0.0, "maxY": 6704.0, "series": [{"data": [[0.0, 482.0], [0.1, 482.0], [0.2, 482.0], [0.3, 482.0], [0.4, 482.0], [0.5, 508.0], [0.6, 508.0], [0.7, 508.0], [0.8, 508.0], [0.9, 536.0], [1.0, 536.0], [1.1, 536.0], [1.2, 536.0], [1.3, 573.0], [1.4, 573.0], [1.5, 573.0], [1.6, 573.0], [1.7, 576.0], [1.8, 576.0], [1.9, 576.0], [2.0, 576.0], [2.1, 589.0], [2.2, 589.0], [2.3, 589.0], [2.4, 589.0], [2.5, 589.0], [2.6, 589.0], [2.7, 589.0], [2.8, 589.0], [2.9, 589.0], [3.0, 592.0], [3.1, 592.0], [3.2, 592.0], [3.3, 592.0], [3.4, 605.0], [3.5, 605.0], [3.6, 605.0], [3.7, 605.0], [3.8, 610.0], [3.9, 610.0], [4.0, 610.0], [4.1, 610.0], [4.2, 676.0], [4.3, 676.0], [4.4, 676.0], [4.5, 676.0], [4.6, 696.0], [4.7, 696.0], [4.8, 696.0], [4.9, 696.0], [5.0, 696.0], [5.1, 704.0], [5.2, 704.0], [5.3, 704.0], [5.4, 704.0], [5.5, 742.0], [5.6, 742.0], [5.7, 742.0], [5.8, 742.0], [5.9, 752.0], [6.0, 752.0], [6.1, 752.0], [6.2, 752.0], [6.3, 772.0], [6.4, 772.0], [6.5, 772.0], [6.6, 772.0], [6.7, 815.0], [6.8, 815.0], [6.9, 815.0], [7.0, 815.0], [7.1, 817.0], [7.2, 817.0], [7.3, 817.0], [7.4, 817.0], [7.5, 817.0], [7.6, 821.0], [7.7, 821.0], [7.8, 821.0], [7.9, 821.0], [8.0, 832.0], [8.1, 832.0], [8.2, 832.0], [8.3, 832.0], [8.4, 839.0], [8.5, 839.0], [8.6, 839.0], [8.7, 839.0], [8.8, 844.0], [8.9, 844.0], [9.0, 844.0], [9.1, 844.0], [9.2, 847.0], [9.3, 847.0], [9.4, 847.0], [9.5, 847.0], [9.6, 853.0], [9.7, 853.0], [9.8, 853.0], [9.9, 853.0], [10.0, 886.0], [10.1, 886.0], [10.2, 886.0], [10.3, 886.0], [10.4, 886.0], [10.5, 886.0], [10.6, 886.0], [10.7, 886.0], [10.8, 886.0], [10.9, 894.0], [11.0, 894.0], [11.1, 894.0], [11.2, 894.0], [11.3, 915.0], [11.4, 915.0], [11.5, 915.0], [11.6, 915.0], [11.7, 919.0], [11.8, 919.0], [11.9, 919.0], [12.0, 919.0], [12.1, 927.0], [12.2, 927.0], [12.3, 927.0], [12.4, 927.0], [12.5, 938.0], [12.6, 938.0], [12.7, 938.0], [12.8, 938.0], [12.9, 938.0], [13.0, 953.0], [13.1, 953.0], [13.2, 953.0], [13.3, 953.0], [13.4, 965.0], [13.5, 965.0], [13.6, 965.0], [13.7, 965.0], [13.8, 980.0], [13.9, 980.0], [14.0, 980.0], [14.1, 980.0], [14.2, 986.0], [14.3, 986.0], [14.4, 986.0], [14.5, 986.0], [14.6, 998.0], [14.7, 998.0], [14.8, 998.0], [14.9, 998.0], [15.0, 1004.0], [15.1, 1004.0], [15.2, 1004.0], [15.3, 1004.0], [15.4, 1004.0], [15.5, 1004.0], [15.6, 1004.0], [15.7, 1004.0], [15.8, 1004.0], [15.9, 1014.0], [16.0, 1014.0], [16.1, 1014.0], [16.2, 1014.0], [16.3, 1027.0], [16.4, 1027.0], [16.5, 1027.0], [16.6, 1027.0], [16.7, 1041.0], [16.8, 1041.0], [16.9, 1041.0], [17.0, 1041.0], [17.1, 1058.0], [17.2, 1058.0], [17.3, 1058.0], [17.4, 1058.0], [17.5, 1058.0], [17.6, 1058.0], [17.7, 1058.0], [17.8, 1058.0], [17.9, 1058.0], [18.0, 1061.0], [18.1, 1061.0], [18.2, 1061.0], [18.3, 1061.0], [18.4, 1065.0], [18.5, 1065.0], [18.6, 1065.0], [18.7, 1065.0], [18.8, 1068.0], [18.9, 1068.0], [19.0, 1068.0], [19.1, 1068.0], [19.2, 1097.0], [19.3, 1097.0], [19.4, 1097.0], [19.5, 1097.0], [19.6, 1132.0], [19.7, 1132.0], [19.8, 1132.0], [19.9, 1132.0], [20.0, 1132.0], [20.1, 1138.0], [20.2, 1138.0], [20.3, 1138.0], [20.4, 1138.0], [20.5, 1139.0], [20.6, 1139.0], [20.7, 1139.0], [20.8, 1139.0], [20.9, 1159.0], [21.0, 1159.0], [21.1, 1159.0], [21.2, 1159.0], [21.3, 1165.0], [21.4, 1165.0], [21.5, 1165.0], [21.6, 1165.0], [21.7, 1176.0], [21.8, 1176.0], [21.9, 1176.0], [22.0, 1176.0], [22.1, 1181.0], [22.2, 1181.0], [22.3, 1181.0], [22.4, 1181.0], [22.5, 1181.0], [22.6, 1186.0], [22.7, 1186.0], [22.8, 1186.0], [22.9, 1186.0], [23.0, 1190.0], [23.1, 1190.0], [23.2, 1190.0], [23.3, 1190.0], [23.4, 1199.0], [23.5, 1199.0], [23.6, 1199.0], [23.7, 1199.0], [23.8, 1228.0], [23.9, 1228.0], [24.0, 1228.0], [24.1, 1228.0], [24.2, 1237.0], [24.3, 1237.0], [24.4, 1237.0], [24.5, 1237.0], [24.6, 1260.0], [24.7, 1260.0], [24.8, 1260.0], [24.9, 1260.0], [25.0, 1260.0], [25.1, 1271.0], [25.2, 1271.0], [25.3, 1271.0], [25.4, 1271.0], [25.5, 1279.0], [25.6, 1279.0], [25.7, 1279.0], [25.8, 1279.0], [25.9, 1285.0], [26.0, 1285.0], [26.1, 1285.0], [26.2, 1285.0], [26.3, 1296.0], [26.4, 1296.0], [26.5, 1296.0], [26.6, 1296.0], [26.7, 1297.0], [26.8, 1297.0], [26.9, 1297.0], [27.0, 1297.0], [27.1, 1310.0], [27.2, 1310.0], [27.3, 1310.0], [27.4, 1310.0], [27.5, 1310.0], [27.6, 1338.0], [27.7, 1338.0], [27.8, 1338.0], [27.9, 1338.0], [28.0, 1340.0], [28.1, 1340.0], [28.2, 1340.0], [28.3, 1340.0], [28.4, 1341.0], [28.5, 1341.0], [28.6, 1341.0], [28.7, 1341.0], [28.8, 1345.0], [28.9, 1345.0], [29.0, 1345.0], [29.1, 1345.0], [29.2, 1368.0], [29.3, 1368.0], [29.4, 1368.0], [29.5, 1368.0], [29.6, 1383.0], [29.7, 1383.0], [29.8, 1383.0], [29.9, 1383.0], [30.0, 1383.0], [30.1, 1409.0], [30.2, 1409.0], [30.3, 1409.0], [30.4, 1409.0], [30.5, 1422.0], [30.6, 1422.0], [30.7, 1422.0], [30.8, 1422.0], [30.9, 1425.0], [31.0, 1425.0], [31.1, 1425.0], [31.2, 1425.0], [31.3, 1430.0], [31.4, 1430.0], [31.5, 1430.0], [31.6, 1430.0], [31.7, 1436.0], [31.8, 1436.0], [31.9, 1436.0], [32.0, 1436.0], [32.1, 1440.0], [32.2, 1440.0], [32.3, 1440.0], [32.4, 1440.0], [32.5, 1440.0], [32.6, 1470.0], [32.7, 1470.0], [32.8, 1470.0], [32.9, 1470.0], [33.0, 1473.0], [33.1, 1473.0], [33.2, 1473.0], [33.3, 1473.0], [33.4, 1485.0], [33.5, 1485.0], [33.6, 1485.0], [33.7, 1485.0], [33.8, 1487.0], [33.9, 1487.0], [34.0, 1487.0], [34.1, 1487.0], [34.2, 1488.0], [34.3, 1488.0], [34.4, 1488.0], [34.5, 1488.0], [34.6, 1490.0], [34.7, 1490.0], [34.8, 1490.0], [34.9, 1490.0], [35.0, 1490.0], [35.1, 1509.0], [35.2, 1509.0], [35.3, 1509.0], [35.4, 1509.0], [35.5, 1510.0], [35.6, 1510.0], [35.7, 1510.0], [35.8, 1510.0], [35.9, 1510.0], [36.0, 1510.0], [36.1, 1510.0], [36.2, 1510.0], [36.3, 1513.0], [36.4, 1513.0], [36.5, 1513.0], [36.6, 1513.0], [36.7, 1522.0], [36.8, 1522.0], [36.9, 1522.0], [37.0, 1522.0], [37.1, 1522.0], [37.2, 1522.0], [37.3, 1522.0], [37.4, 1522.0], [37.5, 1522.0], [37.6, 1542.0], [37.7, 1542.0], [37.8, 1542.0], [37.9, 1542.0], [38.0, 1545.0], [38.1, 1545.0], [38.2, 1545.0], [38.3, 1545.0], [38.4, 1558.0], [38.5, 1558.0], [38.6, 1558.0], [38.7, 1558.0], [38.8, 1569.0], [38.9, 1569.0], [39.0, 1569.0], [39.1, 1569.0], [39.2, 1571.0], [39.3, 1571.0], [39.4, 1571.0], [39.5, 1571.0], [39.6, 1574.0], [39.7, 1574.0], [39.8, 1574.0], [39.9, 1574.0], [40.0, 1574.0], [40.1, 1597.0], [40.2, 1597.0], [40.3, 1597.0], [40.4, 1597.0], [40.5, 1660.0], [40.6, 1660.0], [40.7, 1660.0], [40.8, 1660.0], [40.9, 1685.0], [41.0, 1685.0], [41.1, 1685.0], [41.2, 1685.0], [41.3, 1691.0], [41.4, 1691.0], [41.5, 1691.0], [41.6, 1691.0], [41.7, 1702.0], [41.8, 1702.0], [41.9, 1702.0], [42.0, 1702.0], [42.1, 1707.0], [42.2, 1707.0], [42.3, 1707.0], [42.4, 1707.0], [42.5, 1716.0], [42.6, 1716.0], [42.7, 1716.0], [42.8, 1716.0], [42.9, 1716.0], [43.0, 1725.0], [43.1, 1725.0], [43.2, 1725.0], [43.3, 1725.0], [43.4, 1726.0], [43.5, 1726.0], [43.6, 1726.0], [43.7, 1726.0], [43.8, 1726.0], [43.9, 1726.0], [44.0, 1726.0], [44.1, 1726.0], [44.2, 1727.0], [44.3, 1727.0], [44.4, 1727.0], [44.5, 1727.0], [44.6, 1730.0], [44.7, 1730.0], [44.8, 1730.0], [44.9, 1730.0], [45.0, 1736.0], [45.1, 1736.0], [45.2, 1736.0], [45.3, 1736.0], [45.4, 1736.0], [45.5, 1739.0], [45.6, 1739.0], [45.7, 1739.0], [45.8, 1739.0], [45.9, 1739.0], [46.0, 1739.0], [46.1, 1739.0], [46.2, 1739.0], [46.3, 1767.0], [46.4, 1767.0], [46.5, 1767.0], [46.6, 1767.0], [46.7, 1782.0], [46.8, 1782.0], [46.9, 1782.0], [47.0, 1782.0], [47.1, 1791.0], [47.2, 1791.0], [47.3, 1791.0], [47.4, 1791.0], [47.5, 1809.0], [47.6, 1809.0], [47.7, 1809.0], [47.8, 1809.0], [47.9, 1809.0], [48.0, 1838.0], [48.1, 1838.0], [48.2, 1838.0], [48.3, 1838.0], [48.4, 1843.0], [48.5, 1843.0], [48.6, 1843.0], [48.7, 1843.0], [48.8, 1843.0], [48.9, 1843.0], [49.0, 1843.0], [49.1, 1843.0], [49.2, 1851.0], [49.3, 1851.0], [49.4, 1851.0], [49.5, 1851.0], [49.6, 1910.0], [49.7, 1910.0], [49.8, 1910.0], [49.9, 1910.0], [50.0, 1935.0], [50.1, 1935.0], [50.2, 1935.0], [50.3, 1935.0], [50.4, 1935.0], [50.5, 1939.0], [50.6, 1939.0], [50.7, 1939.0], [50.8, 1939.0], [50.9, 1944.0], [51.0, 1944.0], [51.1, 1944.0], [51.2, 1944.0], [51.3, 1983.0], [51.4, 1983.0], [51.5, 1983.0], [51.6, 1983.0], [51.7, 1992.0], [51.8, 1992.0], [51.9, 1992.0], [52.0, 1992.0], [52.1, 2004.0], [52.2, 2004.0], [52.3, 2004.0], [52.4, 2004.0], [52.5, 2011.0], [52.6, 2011.0], [52.7, 2011.0], [52.8, 2011.0], [52.9, 2011.0], [53.0, 2014.0], [53.1, 2014.0], [53.2, 2014.0], [53.3, 2014.0], [53.4, 2018.0], [53.5, 2018.0], [53.6, 2018.0], [53.7, 2018.0], [53.8, 2020.0], [53.9, 2020.0], [54.0, 2020.0], [54.1, 2020.0], [54.2, 2021.0], [54.3, 2021.0], [54.4, 2021.0], [54.5, 2021.0], [54.6, 2030.0], [54.7, 2030.0], [54.8, 2030.0], [54.9, 2030.0], [55.0, 2054.0], [55.1, 2054.0], [55.2, 2054.0], [55.3, 2054.0], [55.4, 2054.0], [55.5, 2107.0], [55.6, 2107.0], [55.7, 2107.0], [55.8, 2107.0], [55.9, 2108.0], [56.0, 2108.0], [56.1, 2108.0], [56.2, 2108.0], [56.3, 2123.0], [56.4, 2123.0], [56.5, 2123.0], [56.6, 2123.0], [56.7, 2125.0], [56.8, 2125.0], [56.9, 2125.0], [57.0, 2125.0], [57.1, 2127.0], [57.2, 2127.0], [57.3, 2127.0], [57.4, 2127.0], [57.5, 2131.0], [57.6, 2131.0], [57.7, 2131.0], [57.8, 2131.0], [57.9, 2131.0], [58.0, 2139.0], [58.1, 2139.0], [58.2, 2139.0], [58.3, 2139.0], [58.4, 2142.0], [58.5, 2142.0], [58.6, 2142.0], [58.7, 2142.0], [58.8, 2173.0], [58.9, 2173.0], [59.0, 2173.0], [59.1, 2173.0], [59.2, 2219.0], [59.3, 2219.0], [59.4, 2219.0], [59.5, 2219.0], [59.6, 2221.0], [59.7, 2221.0], [59.8, 2221.0], [59.9, 2221.0], [60.0, 2234.0], [60.1, 2234.0], [60.2, 2234.0], [60.3, 2234.0], [60.4, 2234.0], [60.5, 2249.0], [60.6, 2249.0], [60.7, 2249.0], [60.8, 2249.0], [60.9, 2276.0], [61.0, 2276.0], [61.1, 2276.0], [61.2, 2276.0], [61.3, 2281.0], [61.4, 2281.0], [61.5, 2281.0], [61.6, 2281.0], [61.7, 2295.0], [61.8, 2295.0], [61.9, 2295.0], [62.0, 2295.0], [62.1, 2308.0], [62.2, 2308.0], [62.3, 2308.0], [62.4, 2308.0], [62.5, 2315.0], [62.6, 2315.0], [62.7, 2315.0], [62.8, 2315.0], [62.9, 2315.0], [63.0, 2315.0], [63.1, 2315.0], [63.2, 2315.0], [63.3, 2315.0], [63.4, 2325.0], [63.5, 2325.0], [63.6, 2325.0], [63.7, 2325.0], [63.8, 2340.0], [63.9, 2340.0], [64.0, 2340.0], [64.1, 2340.0], [64.2, 2341.0], [64.3, 2341.0], [64.4, 2341.0], [64.5, 2341.0], [64.6, 2373.0], [64.7, 2373.0], [64.8, 2373.0], [64.9, 2373.0], [65.0, 2397.0], [65.1, 2397.0], [65.2, 2397.0], [65.3, 2397.0], [65.4, 2397.0], [65.5, 2421.0], [65.6, 2421.0], [65.7, 2421.0], [65.8, 2421.0], [65.9, 2425.0], [66.0, 2425.0], [66.1, 2425.0], [66.2, 2425.0], [66.3, 2485.0], [66.4, 2485.0], [66.5, 2485.0], [66.6, 2485.0], [66.7, 2488.0], [66.8, 2488.0], [66.9, 2488.0], [67.0, 2488.0], [67.1, 2491.0], [67.2, 2491.0], [67.3, 2491.0], [67.4, 2491.0], [67.5, 2492.0], [67.6, 2492.0], [67.7, 2492.0], [67.8, 2492.0], [67.9, 2492.0], [68.0, 2507.0], [68.1, 2507.0], [68.2, 2507.0], [68.3, 2507.0], [68.4, 2516.0], [68.5, 2516.0], [68.6, 2516.0], [68.7, 2516.0], [68.8, 2529.0], [68.9, 2529.0], [69.0, 2529.0], [69.1, 2529.0], [69.2, 2535.0], [69.3, 2535.0], [69.4, 2535.0], [69.5, 2535.0], [69.6, 2554.0], [69.7, 2554.0], [69.8, 2554.0], [69.9, 2554.0], [70.0, 2564.0], [70.1, 2564.0], [70.2, 2564.0], [70.3, 2564.0], [70.4, 2564.0], [70.5, 2595.0], [70.6, 2595.0], [70.7, 2595.0], [70.8, 2595.0], [70.9, 2605.0], [71.0, 2605.0], [71.1, 2605.0], [71.2, 2605.0], [71.3, 2622.0], [71.4, 2622.0], [71.5, 2622.0], [71.6, 2622.0], [71.7, 2637.0], [71.8, 2637.0], [71.9, 2637.0], [72.0, 2637.0], [72.1, 2670.0], [72.2, 2670.0], [72.3, 2670.0], [72.4, 2670.0], [72.5, 2671.0], [72.6, 2671.0], [72.7, 2671.0], [72.8, 2671.0], [72.9, 2671.0], [73.0, 2771.0], [73.1, 2771.0], [73.2, 2771.0], [73.3, 2771.0], [73.4, 2778.0], [73.5, 2778.0], [73.6, 2778.0], [73.7, 2778.0], [73.8, 2827.0], [73.9, 2827.0], [74.0, 2827.0], [74.1, 2827.0], [74.2, 2832.0], [74.3, 2832.0], [74.4, 2832.0], [74.5, 2832.0], [74.6, 2839.0], [74.7, 2839.0], [74.8, 2839.0], [74.9, 2839.0], [75.0, 2839.0], [75.1, 2855.0], [75.2, 2855.0], [75.3, 2855.0], [75.4, 2855.0], [75.5, 2891.0], [75.6, 2891.0], [75.7, 2891.0], [75.8, 2891.0], [75.9, 2931.0], [76.0, 2931.0], [76.1, 2931.0], [76.2, 2931.0], [76.3, 2953.0], [76.4, 2953.0], [76.5, 2953.0], [76.6, 2953.0], [76.7, 2960.0], [76.8, 2960.0], [76.9, 2960.0], [77.0, 2960.0], [77.1, 2971.0], [77.2, 2971.0], [77.3, 2971.0], [77.4, 2971.0], [77.5, 2971.0], [77.6, 3054.0], [77.7, 3054.0], [77.8, 3054.0], [77.9, 3054.0], [78.0, 3083.0], [78.1, 3083.0], [78.2, 3083.0], [78.3, 3083.0], [78.4, 3114.0], [78.5, 3114.0], [78.6, 3114.0], [78.7, 3114.0], [78.8, 3123.0], [78.9, 3123.0], [79.0, 3123.0], [79.1, 3123.0], [79.2, 3130.0], [79.3, 3130.0], [79.4, 3130.0], [79.5, 3130.0], [79.6, 3160.0], [79.7, 3160.0], [79.8, 3160.0], [79.9, 3160.0], [80.0, 3160.0], [80.1, 3213.0], [80.2, 3213.0], [80.3, 3213.0], [80.4, 3213.0], [80.5, 3266.0], [80.6, 3266.0], [80.7, 3266.0], [80.8, 3266.0], [80.9, 3271.0], [81.0, 3271.0], [81.1, 3271.0], [81.2, 3271.0], [81.3, 3294.0], [81.4, 3294.0], [81.5, 3294.0], [81.6, 3294.0], [81.7, 3361.0], [81.8, 3361.0], [81.9, 3361.0], [82.0, 3361.0], [82.1, 3368.0], [82.2, 3368.0], [82.3, 3368.0], [82.4, 3368.0], [82.5, 3368.0], [82.6, 3376.0], [82.7, 3376.0], [82.8, 3376.0], [82.9, 3376.0], [83.0, 3385.0], [83.1, 3385.0], [83.2, 3385.0], [83.3, 3385.0], [83.4, 3389.0], [83.5, 3389.0], [83.6, 3389.0], [83.7, 3389.0], [83.8, 3416.0], [83.9, 3416.0], [84.0, 3416.0], [84.1, 3416.0], [84.2, 3427.0], [84.3, 3427.0], [84.4, 3427.0], [84.5, 3427.0], [84.6, 3443.0], [84.7, 3443.0], [84.8, 3443.0], [84.9, 3443.0], [85.0, 3443.0], [85.1, 3470.0], [85.2, 3470.0], [85.3, 3470.0], [85.4, 3470.0], [85.5, 3497.0], [85.6, 3497.0], [85.7, 3497.0], [85.8, 3497.0], [85.9, 3510.0], [86.0, 3510.0], [86.1, 3510.0], [86.2, 3510.0], [86.3, 3525.0], [86.4, 3525.0], [86.5, 3525.0], [86.6, 3525.0], [86.7, 3531.0], [86.8, 3531.0], [86.9, 3531.0], [87.0, 3531.0], [87.1, 3542.0], [87.2, 3542.0], [87.3, 3542.0], [87.4, 3542.0], [87.5, 3542.0], [87.6, 3557.0], [87.7, 3557.0], [87.8, 3557.0], [87.9, 3557.0], [88.0, 3575.0], [88.1, 3575.0], [88.2, 3575.0], [88.3, 3575.0], [88.4, 3634.0], [88.5, 3634.0], [88.6, 3634.0], [88.7, 3634.0], [88.8, 3644.0], [88.9, 3644.0], [89.0, 3644.0], [89.1, 3644.0], [89.2, 3650.0], [89.3, 3650.0], [89.4, 3650.0], [89.5, 3650.0], [89.6, 3691.0], [89.7, 3691.0], [89.8, 3691.0], [89.9, 3691.0], [90.0, 3691.0], [90.1, 3692.0], [90.2, 3692.0], [90.3, 3692.0], [90.4, 3692.0], [90.5, 3699.0], [90.6, 3699.0], [90.7, 3699.0], [90.8, 3699.0], [90.9, 3709.0], [91.0, 3709.0], [91.1, 3709.0], [91.2, 3709.0], [91.3, 3774.0], [91.4, 3774.0], [91.5, 3774.0], [91.6, 3774.0], [91.7, 3848.0], [91.8, 3848.0], [91.9, 3848.0], [92.0, 3848.0], [92.1, 4152.0], [92.2, 4152.0], [92.3, 4152.0], [92.4, 4152.0], [92.5, 4152.0], [92.6, 4262.0], [92.7, 4262.0], [92.8, 4262.0], [92.9, 4262.0], [93.0, 4359.0], [93.1, 4359.0], [93.2, 4359.0], [93.3, 4359.0], [93.4, 4363.0], [93.5, 4363.0], [93.6, 4363.0], [93.7, 4363.0], [93.8, 4515.0], [93.9, 4515.0], [94.0, 4515.0], [94.1, 4515.0], [94.2, 4533.0], [94.3, 4533.0], [94.4, 4533.0], [94.5, 4533.0], [94.6, 4563.0], [94.7, 4563.0], [94.8, 4563.0], [94.9, 4563.0], [95.0, 4563.0], [95.1, 4679.0], [95.2, 4679.0], [95.3, 4679.0], [95.4, 4679.0], [95.5, 4863.0], [95.6, 4863.0], [95.7, 4863.0], [95.8, 4863.0], [95.9, 4877.0], [96.0, 4877.0], [96.1, 4877.0], [96.2, 4877.0], [96.3, 5034.0], [96.4, 5034.0], [96.5, 5034.0], [96.6, 5034.0], [96.7, 5282.0], [96.8, 5282.0], [96.9, 5282.0], [97.0, 5282.0], [97.1, 5376.0], [97.2, 5376.0], [97.3, 5376.0], [97.4, 5376.0], [97.5, 5376.0], [97.6, 5593.0], [97.7, 5593.0], [97.8, 5593.0], [97.9, 5593.0], [98.0, 6035.0], [98.1, 6035.0], [98.2, 6035.0], [98.3, 6035.0], [98.4, 6324.0], [98.5, 6324.0], [98.6, 6324.0], [98.7, 6324.0], [98.8, 6379.0], [98.9, 6379.0], [99.0, 6379.0], [99.1, 6379.0], [99.2, 6487.0], [99.3, 6487.0], [99.4, 6487.0], [99.5, 6487.0], [99.6, 6704.0], [99.7, 6704.0], [99.8, 6704.0], [99.9, 6704.0], [100.0, 6704.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 14.0, "series": [{"data": [[600.0, 4.0], [700.0, 4.0], [800.0, 11.0], [900.0, 9.0], [1000.0, 11.0], [1100.0, 10.0], [1200.0, 8.0], [1300.0, 7.0], [1400.0, 12.0], [1500.0, 13.0], [1600.0, 3.0], [1700.0, 14.0], [1800.0, 5.0], [1900.0, 6.0], [2000.0, 8.0], [2100.0, 9.0], [2300.0, 8.0], [2200.0, 7.0], [2400.0, 6.0], [2500.0, 7.0], [2600.0, 5.0], [2800.0, 5.0], [2700.0, 2.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 4.0], [3200.0, 4.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 6.0], [3700.0, 2.0], [3600.0, 6.0], [3800.0, 1.0], [4200.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4500.0, 3.0], [4600.0, 1.0], [4800.0, 2.0], [5000.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [6000.0, 1.0], [6300.0, 2.0], [6400.0, 1.0], [6700.0, 1.0], [400.0, 1.0], [500.0, 7.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 155.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 82.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 155.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79136504E12, "maxY": 2.0, "series": [{"data": [[1.79136642E12, 1.2000000000000002], [1.79136612E12, 1.4000000000000001], [1.79136672E12, 1.0], [1.79136582E12, 1.7777777777777777], [1.79136654E12, 1.0], [1.79136552E12, 1.25], [1.79136684E12, 2.0], [1.79136522E12, 1.375], [1.79136624E12, 1.1111111111111112], [1.79136594E12, 1.0], [1.79136564E12, 1.1428571428571428], [1.79136534E12, 1.1428571428571428], [1.79136504E12, 1.2857142857142856], [1.79136636E12, 1.6666666666666667], [1.79136666E12, 1.2], [1.79136606E12, 1.1], [1.79136678E12, 1.125], [1.79136576E12, 1.0], [1.79136546E12, 1.2222222222222223], [1.79136516E12, 1.75], [1.79136618E12, 1.3636363636363635], [1.79136588E12, 1.2], [1.79136648E12, 1.0], [1.79136558E12, 1.25], [1.7913663E12, 1.6428571428571428], [1.79136528E12, 1.2222222222222223], [1.7913666E12, 1.2], [1.791366E12, 1.2], [1.7913657E12, 1.1], [1.7913654E12, 1.6666666666666667], [1.7913651E12, 1.7]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79136684E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1982.939560439559, "minX": 1.0, "maxY": 3581.4444444444443, "series": [{"data": [[1.0, 1982.939560439559], [4.0, 3569.3333333333335], [2.0, 2621.8695652173906], [3.0, 3581.4444444444443]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.3041666666666665, 2185.174999999999]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.79136504E12, "maxY": 258.03333333333336, "series": [{"data": [[1.79136642E12, 31.25], [1.79136612E12, 31.533333333333335], [1.79136672E12, 21.75], [1.79136582E12, 28.15], [1.79136654E12, 12.666666666666666], [1.79136552E12, 24.883333333333333], [1.79136684E12, 105.56666666666666], [1.79136522E12, 25.183333333333334], [1.79136624E12, 28.066666666666666], [1.79136594E12, 21.983333333333334], [1.79136564E12, 22.566666666666666], [1.79136534E12, 21.9], [1.79136504E12, 21.766666666666666], [1.79136636E12, 18.65], [1.79136666E12, 15.9], [1.79136606E12, 31.5], [1.79136678E12, 25.316666666666666], [1.79136576E12, 22.033333333333335], [1.79136546E12, 28.55], [1.79136516E12, 12.533333333333333], [1.79136618E12, 34.1], [1.79136588E12, 15.6], [1.79136648E12, 21.9], [1.79136558E12, 25.5], [1.7913663E12, 44.233333333333334], [1.79136528E12, 27.9], [1.7913666E12, 15.75], [1.791366E12, 15.75], [1.7913657E12, 31.25], [1.7913654E12, 37.45], [1.7913651E12, 30.783333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79136642E12, 214.71666666666667], [1.79136612E12, 211.45], [1.79136672E12, 131.2], [1.79136582E12, 167.43333333333334], [1.79136654E12, 73.2], [1.79136552E12, 179.25], [1.79136684E12, 0.0], [1.79136522E12, 155.31666666666666], [1.79136624E12, 157.56666666666666], [1.79136594E12, 132.96666666666667], [1.79136564E12, 145.65], [1.79136534E12, 103.01666666666667], [1.79136504E12, 147.58333333333334], [1.79136636E12, 94.1], [1.79136666E12, 123.85], [1.79136606E12, 173.65], [1.79136678E12, 163.93333333333334], [1.79136576E12, 130.91666666666666], [1.79136546E12, 195.18333333333334], [1.79136516E12, 78.45], [1.79136618E12, 188.16666666666666], [1.79136588E12, 89.1], [1.79136648E12, 114.1], [1.79136558E12, 134.91666666666666], [1.7913663E12, 256.9], [1.79136528E12, 123.86666666666666], [1.7913666E12, 124.3], [1.791366E12, 92.46666666666667], [1.7913657E12, 136.98333333333332], [1.7913654E12, 258.03333333333336], [1.7913651E12, 165.46666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79136684E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1314.6999999999998, "minX": 1.79136504E12, "maxY": 3029.777777777778, "series": [{"data": [[1.79136642E12, 2591.4], [1.79136612E12, 2150.5000000000005], [1.79136672E12, 2228.5714285714284], [1.79136582E12, 3029.777777777778], [1.79136654E12, 1654.75], [1.79136552E12, 2351.75], [1.79136684E12, 1655.5], [1.79136522E12, 2254.7499999999995], [1.79136624E12, 1936.7777777777778], [1.79136594E12, 1834.5714285714284], [1.79136564E12, 2438.428571428571], [1.79136534E12, 1563.5714285714287], [1.79136504E12, 2130.285714285714], [1.79136636E12, 2189.0], [1.79136666E12, 2476.2], [1.79136606E12, 1724.5], [1.79136678E12, 2119.75], [1.79136576E12, 1879.4285714285713], [1.79136546E12, 2341.8888888888887], [1.79136516E12, 3001.75], [1.79136618E12, 2101.454545454546], [1.79136588E12, 2287.2], [1.79136648E12, 1617.7142857142856], [1.79136558E12, 1603.0], [1.7913663E12, 2961.5], [1.79136528E12, 1345.111111111111], [1.7913666E12, 2630.0], [1.791366E12, 1974.6], [1.7913657E12, 1314.6999999999998], [1.7913654E12, 2546.666666666667], [1.7913651E12, 2921.9]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79136684E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.79136504E12, "maxY": 3029.777777777778, "series": [{"data": [[1.79136642E12, 2591.3], [1.79136612E12, 2150.4], [1.79136672E12, 2228.5714285714284], [1.79136582E12, 3029.777777777778], [1.79136654E12, 1654.5], [1.79136552E12, 2351.5], [1.79136684E12, 0.0], [1.79136522E12, 2254.7499999999995], [1.79136624E12, 1936.6666666666667], [1.79136594E12, 1834.2857142857142], [1.79136564E12, 2438.428571428571], [1.79136534E12, 1563.5714285714287], [1.79136504E12, 2130.285714285714], [1.79136636E12, 2189.0], [1.79136666E12, 2476.0], [1.79136606E12, 1724.4], [1.79136678E12, 2119.75], [1.79136576E12, 1879.4285714285713], [1.79136546E12, 2341.7777777777783], [1.79136516E12, 3001.75], [1.79136618E12, 2101.272727272727], [1.79136588E12, 2287.2], [1.79136648E12, 1617.7142857142856], [1.79136558E12, 1603.0], [1.7913663E12, 2961.5], [1.79136528E12, 1345.111111111111], [1.7913666E12, 2630.0], [1.791366E12, 1974.6], [1.7913657E12, 1314.6], [1.7913654E12, 2546.666666666667], [1.7913651E12, 2921.9]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79136684E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.142857142857144, "minX": 1.79136504E12, "maxY": 16.42857142857143, "series": [{"data": [[1.79136642E12, 9.3], [1.79136612E12, 11.9], [1.79136672E12, 8.142857142857144], [1.79136582E12, 9.222222222222223], [1.79136654E12, 16.0], [1.79136552E12, 10.625], [1.79136684E12, 9.5], [1.79136522E12, 11.625000000000002], [1.79136624E12, 11.11111111111111], [1.79136594E12, 11.428571428571429], [1.79136564E12, 16.42857142857143], [1.79136534E12, 11.428571428571429], [1.79136504E12, 11.571428571428571], [1.79136636E12, 9.5], [1.79136666E12, 10.6], [1.79136606E12, 10.499999999999998], [1.79136678E12, 8.875], [1.79136576E12, 8.857142857142858], [1.79136546E12, 10.444444444444445], [1.79136516E12, 10.5], [1.79136618E12, 10.818181818181818], [1.79136588E12, 9.8], [1.79136648E12, 9.285714285714285], [1.79136558E12, 10.25], [1.7913663E12, 11.0], [1.79136528E12, 9.0], [1.7913666E12, 9.6], [1.791366E12, 14.8], [1.7913657E12, 9.9], [1.7913654E12, 10.416666666666666], [1.7913651E12, 11.399999999999999]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79136684E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 482.0, "minX": 1.79136504E12, "maxY": 6704.0, "series": [{"data": [[1.79136642E12, 6035.0], [1.79136612E12, 3416.0], [1.79136672E12, 6324.0], [1.79136582E12, 6487.0], [1.79136654E12, 3114.0], [1.79136552E12, 3634.0], [1.79136522E12, 4563.0], [1.79136624E12, 3709.0], [1.79136594E12, 2931.0], [1.79136564E12, 4863.0], [1.79136534E12, 3054.0], [1.79136504E12, 4262.0], [1.79136636E12, 4533.0], [1.79136666E12, 2839.0], [1.79136606E12, 2670.0], [1.79136678E12, 3691.0], [1.79136576E12, 3271.0], [1.79136546E12, 4515.0], [1.79136516E12, 3774.0], [1.79136618E12, 3266.0], [1.79136588E12, 3443.0], [1.79136648E12, 3848.0], [1.79136558E12, 2622.0], [1.7913663E12, 6704.0], [1.79136528E12, 2953.0], [1.7913666E12, 5034.0], [1.791366E12, 3213.0], [1.7913657E12, 2108.0], [1.7913654E12, 4679.0], [1.7913651E12, 5593.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79136642E12, 5959.700000000001], [1.79136612E12, 3412.9], [1.79136672E12, 6324.0], [1.79136582E12, 6487.0], [1.79136654E12, 3114.0], [1.79136552E12, 3634.0], [1.79136522E12, 4563.0], [1.79136624E12, 3709.0], [1.79136594E12, 2931.0], [1.79136564E12, 4863.0], [1.79136534E12, 3054.0], [1.79136504E12, 4262.0], [1.79136636E12, 4533.0], [1.79136666E12, 2839.0], [1.79136606E12, 2645.1], [1.79136678E12, 3691.0], [1.79136576E12, 3271.0], [1.79136546E12, 4515.0], [1.79136516E12, 3774.0], [1.79136618E12, 3229.4], [1.79136588E12, 3443.0], [1.79136648E12, 3848.0], [1.79136558E12, 2622.0], [1.7913663E12, 6541.5], [1.79136528E12, 2953.0], [1.7913666E12, 5034.0], [1.791366E12, 3213.0], [1.7913657E12, 2097.6], [1.7913654E12, 4347.800000000001], [1.7913651E12, 5521.400000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79136642E12, 6035.0], [1.79136612E12, 3416.0], [1.79136672E12, 6324.0], [1.79136582E12, 6487.0], [1.79136654E12, 3114.0], [1.79136552E12, 3634.0], [1.79136522E12, 4563.0], [1.79136624E12, 3709.0], [1.79136594E12, 2931.0], [1.79136564E12, 4863.0], [1.79136534E12, 3054.0], [1.79136504E12, 4262.0], [1.79136636E12, 4533.0], [1.79136666E12, 2839.0], [1.79136606E12, 2670.0], [1.79136678E12, 3691.0], [1.79136576E12, 3271.0], [1.79136546E12, 4515.0], [1.79136516E12, 3774.0], [1.79136618E12, 3266.0], [1.79136588E12, 3443.0], [1.79136648E12, 3848.0], [1.79136558E12, 2622.0], [1.7913663E12, 6704.0], [1.79136528E12, 2953.0], [1.7913666E12, 5034.0], [1.791366E12, 3213.0], [1.7913657E12, 2108.0], [1.7913654E12, 4679.0], [1.7913651E12, 5593.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79136642E12, 6035.0], [1.79136612E12, 3416.0], [1.79136672E12, 6324.0], [1.79136582E12, 6487.0], [1.79136654E12, 3114.0], [1.79136552E12, 3634.0], [1.79136522E12, 4563.0], [1.79136624E12, 3709.0], [1.79136594E12, 2931.0], [1.79136564E12, 4863.0], [1.79136534E12, 3054.0], [1.79136504E12, 4262.0], [1.79136636E12, 4533.0], [1.79136666E12, 2839.0], [1.79136606E12, 2670.0], [1.79136678E12, 3691.0], [1.79136576E12, 3271.0], [1.79136546E12, 4515.0], [1.79136516E12, 3774.0], [1.79136618E12, 3266.0], [1.79136588E12, 3443.0], [1.79136648E12, 3848.0], [1.79136558E12, 2622.0], [1.7913663E12, 6704.0], [1.79136528E12, 2953.0], [1.7913666E12, 5034.0], [1.791366E12, 3213.0], [1.7913657E12, 2108.0], [1.7913654E12, 4679.0], [1.7913651E12, 5593.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79136642E12, 839.0], [1.79136612E12, 589.0], [1.79136672E12, 821.0], [1.79136582E12, 1702.0], [1.79136654E12, 1014.0], [1.79136552E12, 573.0], [1.79136522E12, 998.0], [1.79136624E12, 592.0], [1.79136594E12, 1176.0], [1.79136564E12, 1159.0], [1.79136534E12, 576.0], [1.79136504E12, 536.0], [1.79136636E12, 915.0], [1.79136666E12, 2014.0], [1.79136606E12, 853.0], [1.79136678E12, 605.0], [1.79136576E12, 815.0], [1.79136546E12, 938.0], [1.79136516E12, 1809.0], [1.79136618E12, 844.0], [1.79136588E12, 482.0], [1.79136648E12, 847.0], [1.79136558E12, 1139.0], [1.7913663E12, 886.0], [1.79136528E12, 589.0], [1.7913666E12, 1065.0], [1.791366E12, 1436.0], [1.7913657E12, 508.0], [1.7913654E12, 1285.0], [1.7913651E12, 1058.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79136642E12, 2056.0], [1.79136612E12, 2115.0], [1.79136672E12, 1341.0], [1.79136582E12, 2021.0], [1.79136654E12, 1245.5], [1.79136552E12, 2323.0], [1.79136522E12, 2149.0], [1.79136624E12, 1716.0], [1.79136594E12, 1542.0], [1.79136564E12, 1440.0], [1.79136534E12, 1425.0], [1.79136504E12, 2125.0], [1.79136636E12, 1303.5], [1.79136666E12, 2516.0], [1.79136606E12, 1546.5], [1.79136678E12, 2095.5], [1.79136576E12, 2054.0], [1.79136546E12, 2221.0], [1.79136516E12, 3212.0], [1.79136618E12, 2295.0], [1.79136588E12, 2341.0], [1.79136648E12, 1004.0], [1.79136558E12, 1559.5], [1.7913663E12, 2777.5], [1.79136528E12, 1068.0], [1.7913666E12, 1944.0], [1.791366E12, 1569.0], [1.7913657E12, 1323.5], [1.7913654E12, 2265.0], [1.7913651E12, 2977.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79136678E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1655.5, "minX": 1.0, "maxY": 2367.5, "series": [{"data": [[1.0, 1937.0], [2.0, 2367.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1655.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2367.5, "series": [{"data": [[1.0, 1936.5], [2.0, 2367.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79136504E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79136642E12, 0.13333333333333333], [1.79136612E12, 0.2], [1.79136672E12, 0.11666666666666667], [1.79136582E12, 0.16666666666666666], [1.79136654E12, 0.06666666666666667], [1.79136552E12, 0.13333333333333333], [1.79136684E12, 0.03333333333333333], [1.79136522E12, 0.15], [1.79136624E12, 0.15], [1.79136594E12, 0.11666666666666667], [1.79136564E12, 0.11666666666666667], [1.79136534E12, 0.13333333333333333], [1.79136504E12, 0.15], [1.79136636E12, 0.13333333333333333], [1.79136666E12, 0.1], [1.79136606E12, 0.16666666666666666], [1.79136678E12, 0.11666666666666667], [1.79136576E12, 0.1], [1.79136546E12, 0.15], [1.79136516E12, 0.06666666666666667], [1.79136618E12, 0.15], [1.79136588E12, 0.06666666666666667], [1.79136648E12, 0.11666666666666667], [1.79136558E12, 0.13333333333333333], [1.7913663E12, 0.23333333333333334], [1.79136528E12, 0.13333333333333333], [1.7913666E12, 0.08333333333333333], [1.791366E12, 0.08333333333333333], [1.7913657E12, 0.18333333333333332], [1.7913654E12, 0.18333333333333332], [1.7913651E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79136684E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79136504E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79136642E12, 0.16666666666666666], [1.79136612E12, 0.16666666666666666], [1.79136672E12, 0.11666666666666667], [1.79136582E12, 0.15], [1.79136654E12, 0.06666666666666667], [1.79136552E12, 0.13333333333333333], [1.79136522E12, 0.13333333333333333], [1.79136624E12, 0.15], [1.79136594E12, 0.11666666666666667], [1.79136564E12, 0.11666666666666667], [1.79136534E12, 0.11666666666666667], [1.79136504E12, 0.11666666666666667], [1.79136636E12, 0.1], [1.79136666E12, 0.08333333333333333], [1.79136606E12, 0.16666666666666666], [1.79136678E12, 0.13333333333333333], [1.79136576E12, 0.11666666666666667], [1.79136546E12, 0.15], [1.79136516E12, 0.06666666666666667], [1.79136618E12, 0.18333333333333332], [1.79136588E12, 0.08333333333333333], [1.79136648E12, 0.11666666666666667], [1.79136558E12, 0.13333333333333333], [1.7913663E12, 0.23333333333333334], [1.79136528E12, 0.15], [1.7913666E12, 0.08333333333333333], [1.791366E12, 0.08333333333333333], [1.7913657E12, 0.16666666666666666], [1.7913654E12, 0.2], [1.7913651E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79136684E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79136684E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79136504E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79136642E12, 0.16666666666666666], [1.79136612E12, 0.16666666666666666], [1.79136672E12, 0.11666666666666667], [1.79136582E12, 0.15], [1.79136654E12, 0.06666666666666667], [1.79136552E12, 0.13333333333333333], [1.79136522E12, 0.13333333333333333], [1.79136624E12, 0.15], [1.79136594E12, 0.11666666666666667], [1.79136564E12, 0.11666666666666667], [1.79136534E12, 0.11666666666666667], [1.79136504E12, 0.11666666666666667], [1.79136636E12, 0.1], [1.79136666E12, 0.08333333333333333], [1.79136606E12, 0.16666666666666666], [1.79136678E12, 0.13333333333333333], [1.79136576E12, 0.11666666666666667], [1.79136546E12, 0.15], [1.79136516E12, 0.06666666666666667], [1.79136618E12, 0.18333333333333332], [1.79136588E12, 0.08333333333333333], [1.79136648E12, 0.11666666666666667], [1.79136558E12, 0.13333333333333333], [1.7913663E12, 0.23333333333333334], [1.79136528E12, 0.15], [1.7913666E12, 0.08333333333333333], [1.791366E12, 0.08333333333333333], [1.7913657E12, 0.16666666666666666], [1.7913654E12, 0.2], [1.7913651E12, 0.16666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79136684E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79136684E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79136504E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79136642E12, 0.16666666666666666], [1.79136612E12, 0.16666666666666666], [1.79136672E12, 0.11666666666666667], [1.79136582E12, 0.15], [1.79136654E12, 0.06666666666666667], [1.79136552E12, 0.13333333333333333], [1.79136522E12, 0.13333333333333333], [1.79136624E12, 0.15], [1.79136594E12, 0.11666666666666667], [1.79136564E12, 0.11666666666666667], [1.79136534E12, 0.11666666666666667], [1.79136504E12, 0.11666666666666667], [1.79136636E12, 0.1], [1.79136666E12, 0.08333333333333333], [1.79136606E12, 0.16666666666666666], [1.79136678E12, 0.13333333333333333], [1.79136576E12, 0.11666666666666667], [1.79136546E12, 0.15], [1.79136516E12, 0.06666666666666667], [1.79136618E12, 0.18333333333333332], [1.79136588E12, 0.08333333333333333], [1.79136648E12, 0.11666666666666667], [1.79136558E12, 0.13333333333333333], [1.7913663E12, 0.23333333333333334], [1.79136528E12, 0.15], [1.7913666E12, 0.08333333333333333], [1.791366E12, 0.08333333333333333], [1.7913657E12, 0.16666666666666666], [1.7913654E12, 0.2], [1.7913651E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79136684E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79136684E12, "title": "Total Transactions Per Second"}},
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

