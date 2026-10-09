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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 8195.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 179.0], [0.3, 179.0], [0.4, 179.0], [0.5, 181.0], [0.6, 181.0], [0.7, 181.0], [0.8, 181.0], [0.9, 184.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 185.0], [1.4, 185.0], [1.5, 185.0], [1.6, 185.0], [1.7, 186.0], [1.8, 186.0], [1.9, 186.0], [2.0, 186.0], [2.1, 186.0], [2.2, 186.0], [2.3, 186.0], [2.4, 186.0], [2.5, 188.0], [2.6, 188.0], [2.7, 188.0], [2.8, 188.0], [2.9, 188.0], [3.0, 188.0], [3.1, 188.0], [3.2, 188.0], [3.3, 188.0], [3.4, 191.0], [3.5, 191.0], [3.6, 191.0], [3.7, 191.0], [3.8, 193.0], [3.9, 193.0], [4.0, 193.0], [4.1, 193.0], [4.2, 194.0], [4.3, 194.0], [4.4, 194.0], [4.5, 194.0], [4.6, 194.0], [4.7, 194.0], [4.8, 194.0], [4.9, 194.0], [5.0, 195.0], [5.1, 195.0], [5.2, 195.0], [5.3, 195.0], [5.4, 195.0], [5.5, 197.0], [5.6, 197.0], [5.7, 197.0], [5.8, 197.0], [5.9, 198.0], [6.0, 198.0], [6.1, 198.0], [6.2, 198.0], [6.3, 198.0], [6.4, 198.0], [6.5, 198.0], [6.6, 198.0], [6.7, 199.0], [6.8, 199.0], [6.9, 199.0], [7.0, 199.0], [7.1, 199.0], [7.2, 199.0], [7.3, 199.0], [7.4, 199.0], [7.5, 200.0], [7.6, 200.0], [7.7, 200.0], [7.8, 200.0], [7.9, 200.0], [8.0, 200.0], [8.1, 200.0], [8.2, 200.0], [8.3, 200.0], [8.4, 201.0], [8.5, 201.0], [8.6, 201.0], [8.7, 201.0], [8.8, 201.0], [8.9, 201.0], [9.0, 201.0], [9.1, 201.0], [9.2, 201.0], [9.3, 201.0], [9.4, 201.0], [9.5, 201.0], [9.6, 202.0], [9.7, 202.0], [9.8, 202.0], [9.9, 202.0], [10.0, 202.0], [10.1, 202.0], [10.2, 202.0], [10.3, 202.0], [10.4, 202.0], [10.5, 202.0], [10.6, 202.0], [10.7, 202.0], [10.8, 202.0], [10.9, 203.0], [11.0, 203.0], [11.1, 203.0], [11.2, 203.0], [11.3, 204.0], [11.4, 204.0], [11.5, 204.0], [11.6, 204.0], [11.7, 204.0], [11.8, 204.0], [11.9, 204.0], [12.0, 204.0], [12.1, 205.0], [12.2, 205.0], [12.3, 205.0], [12.4, 205.0], [12.5, 206.0], [12.6, 206.0], [12.7, 206.0], [12.8, 206.0], [12.9, 206.0], [13.0, 206.0], [13.1, 206.0], [13.2, 206.0], [13.3, 206.0], [13.4, 206.0], [13.5, 206.0], [13.6, 206.0], [13.7, 206.0], [13.8, 207.0], [13.9, 207.0], [14.0, 207.0], [14.1, 207.0], [14.2, 207.0], [14.3, 207.0], [14.4, 207.0], [14.5, 207.0], [14.6, 208.0], [14.7, 208.0], [14.8, 208.0], [14.9, 208.0], [15.0, 209.0], [15.1, 209.0], [15.2, 209.0], [15.3, 209.0], [15.4, 209.0], [15.5, 210.0], [15.6, 210.0], [15.7, 210.0], [15.8, 210.0], [15.9, 210.0], [16.0, 210.0], [16.1, 210.0], [16.2, 210.0], [16.3, 210.0], [16.4, 210.0], [16.5, 210.0], [16.6, 210.0], [16.7, 210.0], [16.8, 210.0], [16.9, 210.0], [17.0, 210.0], [17.1, 210.0], [17.2, 210.0], [17.3, 210.0], [17.4, 210.0], [17.5, 210.0], [17.6, 210.0], [17.7, 210.0], [17.8, 210.0], [17.9, 210.0], [18.0, 211.0], [18.1, 211.0], [18.2, 211.0], [18.3, 211.0], [18.4, 211.0], [18.5, 211.0], [18.6, 211.0], [18.7, 211.0], [18.8, 211.0], [18.9, 211.0], [19.0, 211.0], [19.1, 211.0], [19.2, 211.0], [19.3, 211.0], [19.4, 211.0], [19.5, 211.0], [19.6, 212.0], [19.7, 212.0], [19.8, 212.0], [19.9, 212.0], [20.0, 212.0], [20.1, 212.0], [20.2, 212.0], [20.3, 212.0], [20.4, 212.0], [20.5, 213.0], [20.6, 213.0], [20.7, 213.0], [20.8, 213.0], [20.9, 213.0], [21.0, 213.0], [21.1, 213.0], [21.2, 213.0], [21.3, 215.0], [21.4, 215.0], [21.5, 215.0], [21.6, 215.0], [21.7, 215.0], [21.8, 215.0], [21.9, 215.0], [22.0, 215.0], [22.1, 215.0], [22.2, 215.0], [22.3, 215.0], [22.4, 215.0], [22.5, 219.0], [22.6, 219.0], [22.7, 219.0], [22.8, 219.0], [22.9, 219.0], [23.0, 219.0], [23.1, 219.0], [23.2, 219.0], [23.3, 219.0], [23.4, 219.0], [23.5, 219.0], [23.6, 219.0], [23.7, 219.0], [23.8, 219.0], [23.9, 219.0], [24.0, 219.0], [24.1, 219.0], [24.2, 222.0], [24.3, 222.0], [24.4, 222.0], [24.5, 222.0], [24.6, 223.0], [24.7, 223.0], [24.8, 223.0], [24.9, 223.0], [25.0, 223.0], [25.1, 223.0], [25.2, 223.0], [25.3, 223.0], [25.4, 223.0], [25.5, 224.0], [25.6, 224.0], [25.7, 224.0], [25.8, 224.0], [25.9, 225.0], [26.0, 225.0], [26.1, 225.0], [26.2, 225.0], [26.3, 225.0], [26.4, 225.0], [26.5, 225.0], [26.6, 225.0], [26.7, 226.0], [26.8, 226.0], [26.9, 226.0], [27.0, 226.0], [27.1, 226.0], [27.2, 226.0], [27.3, 226.0], [27.4, 226.0], [27.5, 226.0], [27.6, 226.0], [27.7, 226.0], [27.8, 226.0], [27.9, 226.0], [28.0, 228.0], [28.1, 228.0], [28.2, 228.0], [28.3, 228.0], [28.4, 229.0], [28.5, 229.0], [28.6, 229.0], [28.7, 229.0], [28.8, 229.0], [28.9, 229.0], [29.0, 229.0], [29.1, 229.0], [29.2, 229.0], [29.3, 229.0], [29.4, 229.0], [29.5, 229.0], [29.6, 230.0], [29.7, 230.0], [29.8, 230.0], [29.9, 230.0], [30.0, 230.0], [30.1, 230.0], [30.2, 230.0], [30.3, 230.0], [30.4, 230.0], [30.5, 231.0], [30.6, 231.0], [30.7, 231.0], [30.8, 231.0], [30.9, 231.0], [31.0, 231.0], [31.1, 231.0], [31.2, 231.0], [31.3, 232.0], [31.4, 232.0], [31.5, 232.0], [31.6, 232.0], [31.7, 234.0], [31.8, 234.0], [31.9, 234.0], [32.0, 234.0], [32.1, 234.0], [32.2, 234.0], [32.3, 234.0], [32.4, 234.0], [32.5, 236.0], [32.6, 236.0], [32.7, 236.0], [32.8, 236.0], [32.9, 236.0], [33.0, 236.0], [33.1, 236.0], [33.2, 236.0], [33.3, 236.0], [33.4, 236.0], [33.5, 236.0], [33.6, 236.0], [33.7, 236.0], [33.8, 237.0], [33.9, 237.0], [34.0, 237.0], [34.1, 237.0], [34.2, 238.0], [34.3, 238.0], [34.4, 238.0], [34.5, 238.0], [34.6, 240.0], [34.7, 240.0], [34.8, 240.0], [34.9, 240.0], [35.0, 242.0], [35.1, 242.0], [35.2, 242.0], [35.3, 242.0], [35.4, 242.0], [35.5, 242.0], [35.6, 242.0], [35.7, 242.0], [35.8, 242.0], [35.9, 243.0], [36.0, 243.0], [36.1, 243.0], [36.2, 243.0], [36.3, 246.0], [36.4, 246.0], [36.5, 246.0], [36.6, 246.0], [36.7, 249.0], [36.8, 249.0], [36.9, 249.0], [37.0, 249.0], [37.1, 251.0], [37.2, 251.0], [37.3, 251.0], [37.4, 251.0], [37.5, 253.0], [37.6, 253.0], [37.7, 253.0], [37.8, 253.0], [37.9, 253.0], [38.0, 256.0], [38.1, 256.0], [38.2, 256.0], [38.3, 256.0], [38.4, 263.0], [38.5, 263.0], [38.6, 263.0], [38.7, 263.0], [38.8, 303.0], [38.9, 303.0], [39.0, 303.0], [39.1, 303.0], [39.2, 365.0], [39.3, 365.0], [39.4, 365.0], [39.5, 365.0], [39.6, 401.0], [39.7, 401.0], [39.8, 401.0], [39.9, 401.0], [40.0, 791.0], [40.1, 791.0], [40.2, 791.0], [40.3, 791.0], [40.4, 791.0], [40.5, 833.0], [40.6, 833.0], [40.7, 833.0], [40.8, 833.0], [40.9, 902.0], [41.0, 902.0], [41.1, 902.0], [41.2, 902.0], [41.3, 988.0], [41.4, 988.0], [41.5, 988.0], [41.6, 988.0], [41.7, 1015.0], [41.8, 1015.0], [41.9, 1015.0], [42.0, 1015.0], [42.1, 1018.0], [42.2, 1018.0], [42.3, 1018.0], [42.4, 1018.0], [42.5, 1068.0], [42.6, 1068.0], [42.7, 1068.0], [42.8, 1068.0], [42.9, 1068.0], [43.0, 1074.0], [43.1, 1074.0], [43.2, 1074.0], [43.3, 1074.0], [43.4, 1078.0], [43.5, 1078.0], [43.6, 1078.0], [43.7, 1078.0], [43.8, 1112.0], [43.9, 1112.0], [44.0, 1112.0], [44.1, 1112.0], [44.2, 1161.0], [44.3, 1161.0], [44.4, 1161.0], [44.5, 1161.0], [44.6, 1167.0], [44.7, 1167.0], [44.8, 1167.0], [44.9, 1167.0], [45.0, 1241.0], [45.1, 1241.0], [45.2, 1241.0], [45.3, 1241.0], [45.4, 1241.0], [45.5, 1272.0], [45.6, 1272.0], [45.7, 1272.0], [45.8, 1272.0], [45.9, 1278.0], [46.0, 1278.0], [46.1, 1278.0], [46.2, 1278.0], [46.3, 1308.0], [46.4, 1308.0], [46.5, 1308.0], [46.6, 1308.0], [46.7, 1313.0], [46.8, 1313.0], [46.9, 1313.0], [47.0, 1313.0], [47.1, 1314.0], [47.2, 1314.0], [47.3, 1314.0], [47.4, 1314.0], [47.5, 1333.0], [47.6, 1333.0], [47.7, 1333.0], [47.8, 1333.0], [47.9, 1333.0], [48.0, 1392.0], [48.1, 1392.0], [48.2, 1392.0], [48.3, 1392.0], [48.4, 1404.0], [48.5, 1404.0], [48.6, 1404.0], [48.7, 1404.0], [48.8, 1409.0], [48.9, 1409.0], [49.0, 1409.0], [49.1, 1409.0], [49.2, 1424.0], [49.3, 1424.0], [49.4, 1424.0], [49.5, 1424.0], [49.6, 1443.0], [49.7, 1443.0], [49.8, 1443.0], [49.9, 1443.0], [50.0, 1476.0], [50.1, 1476.0], [50.2, 1476.0], [50.3, 1476.0], [50.4, 1476.0], [50.5, 1492.0], [50.6, 1492.0], [50.7, 1492.0], [50.8, 1492.0], [50.9, 1495.0], [51.0, 1495.0], [51.1, 1495.0], [51.2, 1495.0], [51.3, 1510.0], [51.4, 1510.0], [51.5, 1510.0], [51.6, 1510.0], [51.7, 1513.0], [51.8, 1513.0], [51.9, 1513.0], [52.0, 1513.0], [52.1, 1514.0], [52.2, 1514.0], [52.3, 1514.0], [52.4, 1514.0], [52.5, 1527.0], [52.6, 1527.0], [52.7, 1527.0], [52.8, 1527.0], [52.9, 1527.0], [53.0, 1538.0], [53.1, 1538.0], [53.2, 1538.0], [53.3, 1538.0], [53.4, 1540.0], [53.5, 1540.0], [53.6, 1540.0], [53.7, 1540.0], [53.8, 1568.0], [53.9, 1568.0], [54.0, 1568.0], [54.1, 1568.0], [54.2, 1575.0], [54.3, 1575.0], [54.4, 1575.0], [54.5, 1575.0], [54.6, 1579.0], [54.7, 1579.0], [54.8, 1579.0], [54.9, 1579.0], [55.0, 1581.0], [55.1, 1581.0], [55.2, 1581.0], [55.3, 1581.0], [55.4, 1581.0], [55.5, 1646.0], [55.6, 1646.0], [55.7, 1646.0], [55.8, 1646.0], [55.9, 1651.0], [56.0, 1651.0], [56.1, 1651.0], [56.2, 1651.0], [56.3, 1660.0], [56.4, 1660.0], [56.5, 1660.0], [56.6, 1660.0], [56.7, 1713.0], [56.8, 1713.0], [56.9, 1713.0], [57.0, 1713.0], [57.1, 1739.0], [57.2, 1739.0], [57.3, 1739.0], [57.4, 1739.0], [57.5, 1742.0], [57.6, 1742.0], [57.7, 1742.0], [57.8, 1742.0], [57.9, 1742.0], [58.0, 1770.0], [58.1, 1770.0], [58.2, 1770.0], [58.3, 1770.0], [58.4, 1772.0], [58.5, 1772.0], [58.6, 1772.0], [58.7, 1772.0], [58.8, 1828.0], [58.9, 1828.0], [59.0, 1828.0], [59.1, 1828.0], [59.2, 1921.0], [59.3, 1921.0], [59.4, 1921.0], [59.5, 1921.0], [59.6, 1936.0], [59.7, 1936.0], [59.8, 1936.0], [59.9, 1936.0], [60.0, 1971.0], [60.1, 1971.0], [60.2, 1971.0], [60.3, 1971.0], [60.4, 1971.0], [60.5, 1977.0], [60.6, 1977.0], [60.7, 1977.0], [60.8, 1977.0], [60.9, 2017.0], [61.0, 2017.0], [61.1, 2017.0], [61.2, 2017.0], [61.3, 2102.0], [61.4, 2102.0], [61.5, 2102.0], [61.6, 2102.0], [61.7, 2147.0], [61.8, 2147.0], [61.9, 2147.0], [62.0, 2147.0], [62.1, 2173.0], [62.2, 2173.0], [62.3, 2173.0], [62.4, 2173.0], [62.5, 2177.0], [62.6, 2177.0], [62.7, 2177.0], [62.8, 2177.0], [62.9, 2177.0], [63.0, 2178.0], [63.1, 2178.0], [63.2, 2178.0], [63.3, 2178.0], [63.4, 2189.0], [63.5, 2189.0], [63.6, 2189.0], [63.7, 2189.0], [63.8, 2255.0], [63.9, 2255.0], [64.0, 2255.0], [64.1, 2255.0], [64.2, 2255.0], [64.3, 2255.0], [64.4, 2255.0], [64.5, 2255.0], [64.6, 2257.0], [64.7, 2257.0], [64.8, 2257.0], [64.9, 2257.0], [65.0, 2272.0], [65.1, 2272.0], [65.2, 2272.0], [65.3, 2272.0], [65.4, 2272.0], [65.5, 2279.0], [65.6, 2279.0], [65.7, 2279.0], [65.8, 2279.0], [65.9, 2300.0], [66.0, 2300.0], [66.1, 2300.0], [66.2, 2300.0], [66.3, 2318.0], [66.4, 2318.0], [66.5, 2318.0], [66.6, 2318.0], [66.7, 2396.0], [66.8, 2396.0], [66.9, 2396.0], [67.0, 2396.0], [67.1, 2418.0], [67.2, 2418.0], [67.3, 2418.0], [67.4, 2418.0], [67.5, 2442.0], [67.6, 2442.0], [67.7, 2442.0], [67.8, 2442.0], [67.9, 2442.0], [68.0, 2537.0], [68.1, 2537.0], [68.2, 2537.0], [68.3, 2537.0], [68.4, 2551.0], [68.5, 2551.0], [68.6, 2551.0], [68.7, 2551.0], [68.8, 2593.0], [68.9, 2593.0], [69.0, 2593.0], [69.1, 2593.0], [69.2, 2608.0], [69.3, 2608.0], [69.4, 2608.0], [69.5, 2608.0], [69.6, 2641.0], [69.7, 2641.0], [69.8, 2641.0], [69.9, 2641.0], [70.0, 2669.0], [70.1, 2669.0], [70.2, 2669.0], [70.3, 2669.0], [70.4, 2669.0], [70.5, 2680.0], [70.6, 2680.0], [70.7, 2680.0], [70.8, 2680.0], [70.9, 2711.0], [71.0, 2711.0], [71.1, 2711.0], [71.2, 2711.0], [71.3, 2711.0], [71.4, 2711.0], [71.5, 2711.0], [71.6, 2711.0], [71.7, 2724.0], [71.8, 2724.0], [71.9, 2724.0], [72.0, 2724.0], [72.1, 2740.0], [72.2, 2740.0], [72.3, 2740.0], [72.4, 2740.0], [72.5, 2746.0], [72.6, 2746.0], [72.7, 2746.0], [72.8, 2746.0], [72.9, 2746.0], [73.0, 2761.0], [73.1, 2761.0], [73.2, 2761.0], [73.3, 2761.0], [73.4, 2772.0], [73.5, 2772.0], [73.6, 2772.0], [73.7, 2772.0], [73.8, 2786.0], [73.9, 2786.0], [74.0, 2786.0], [74.1, 2786.0], [74.2, 2857.0], [74.3, 2857.0], [74.4, 2857.0], [74.5, 2857.0], [74.6, 2962.0], [74.7, 2962.0], [74.8, 2962.0], [74.9, 2962.0], [75.0, 2966.0], [75.1, 2966.0], [75.2, 2966.0], [75.3, 2966.0], [75.4, 2966.0], [75.5, 2973.0], [75.6, 2973.0], [75.7, 2973.0], [75.8, 2973.0], [75.9, 2997.0], [76.0, 2997.0], [76.1, 2997.0], [76.2, 2997.0], [76.3, 3002.0], [76.4, 3002.0], [76.5, 3002.0], [76.6, 3002.0], [76.7, 3008.0], [76.8, 3008.0], [76.9, 3008.0], [77.0, 3008.0], [77.1, 3042.0], [77.2, 3042.0], [77.3, 3042.0], [77.4, 3042.0], [77.5, 3061.0], [77.6, 3061.0], [77.7, 3061.0], [77.8, 3061.0], [77.9, 3061.0], [78.0, 3074.0], [78.1, 3074.0], [78.2, 3074.0], [78.3, 3074.0], [78.4, 3109.0], [78.5, 3109.0], [78.6, 3109.0], [78.7, 3109.0], [78.8, 3149.0], [78.9, 3149.0], [79.0, 3149.0], [79.1, 3149.0], [79.2, 3155.0], [79.3, 3155.0], [79.4, 3155.0], [79.5, 3155.0], [79.6, 3164.0], [79.7, 3164.0], [79.8, 3164.0], [79.9, 3164.0], [80.0, 3180.0], [80.1, 3180.0], [80.2, 3180.0], [80.3, 3180.0], [80.4, 3180.0], [80.5, 3193.0], [80.6, 3193.0], [80.7, 3193.0], [80.8, 3193.0], [80.9, 3268.0], [81.0, 3268.0], [81.1, 3268.0], [81.2, 3268.0], [81.3, 3297.0], [81.4, 3297.0], [81.5, 3297.0], [81.6, 3297.0], [81.7, 3306.0], [81.8, 3306.0], [81.9, 3306.0], [82.0, 3306.0], [82.1, 3318.0], [82.2, 3318.0], [82.3, 3318.0], [82.4, 3318.0], [82.5, 3318.0], [82.6, 3439.0], [82.7, 3439.0], [82.8, 3439.0], [82.9, 3439.0], [83.0, 3478.0], [83.1, 3478.0], [83.2, 3478.0], [83.3, 3478.0], [83.4, 3487.0], [83.5, 3487.0], [83.6, 3487.0], [83.7, 3487.0], [83.8, 3507.0], [83.9, 3507.0], [84.0, 3507.0], [84.1, 3507.0], [84.2, 3518.0], [84.3, 3518.0], [84.4, 3518.0], [84.5, 3518.0], [84.6, 3577.0], [84.7, 3577.0], [84.8, 3577.0], [84.9, 3577.0], [85.0, 3577.0], [85.1, 3579.0], [85.2, 3579.0], [85.3, 3579.0], [85.4, 3579.0], [85.5, 3613.0], [85.6, 3613.0], [85.7, 3613.0], [85.8, 3613.0], [85.9, 3666.0], [86.0, 3666.0], [86.1, 3666.0], [86.2, 3666.0], [86.3, 3672.0], [86.4, 3672.0], [86.5, 3672.0], [86.6, 3672.0], [86.7, 3676.0], [86.8, 3676.0], [86.9, 3676.0], [87.0, 3676.0], [87.1, 3680.0], [87.2, 3680.0], [87.3, 3680.0], [87.4, 3680.0], [87.5, 3680.0], [87.6, 3682.0], [87.7, 3682.0], [87.8, 3682.0], [87.9, 3682.0], [88.0, 3695.0], [88.1, 3695.0], [88.2, 3695.0], [88.3, 3695.0], [88.4, 3701.0], [88.5, 3701.0], [88.6, 3701.0], [88.7, 3701.0], [88.8, 3751.0], [88.9, 3751.0], [89.0, 3751.0], [89.1, 3751.0], [89.2, 3776.0], [89.3, 3776.0], [89.4, 3776.0], [89.5, 3776.0], [89.6, 3805.0], [89.7, 3805.0], [89.8, 3805.0], [89.9, 3805.0], [90.0, 3805.0], [90.1, 3904.0], [90.2, 3904.0], [90.3, 3904.0], [90.4, 3904.0], [90.5, 3935.0], [90.6, 3935.0], [90.7, 3935.0], [90.8, 3935.0], [90.9, 3965.0], [91.0, 3965.0], [91.1, 3965.0], [91.2, 3965.0], [91.3, 4091.0], [91.4, 4091.0], [91.5, 4091.0], [91.6, 4091.0], [91.7, 4109.0], [91.8, 4109.0], [91.9, 4109.0], [92.0, 4109.0], [92.1, 4150.0], [92.2, 4150.0], [92.3, 4150.0], [92.4, 4150.0], [92.5, 4150.0], [92.6, 4275.0], [92.7, 4275.0], [92.8, 4275.0], [92.9, 4275.0], [93.0, 4293.0], [93.1, 4293.0], [93.2, 4293.0], [93.3, 4293.0], [93.4, 4294.0], [93.5, 4294.0], [93.6, 4294.0], [93.7, 4294.0], [93.8, 4327.0], [93.9, 4327.0], [94.0, 4327.0], [94.1, 4327.0], [94.2, 4595.0], [94.3, 4595.0], [94.4, 4595.0], [94.5, 4595.0], [94.6, 4719.0], [94.7, 4719.0], [94.8, 4719.0], [94.9, 4719.0], [95.0, 4719.0], [95.1, 4914.0], [95.2, 4914.0], [95.3, 4914.0], [95.4, 4914.0], [95.5, 5100.0], [95.6, 5100.0], [95.7, 5100.0], [95.8, 5100.0], [95.9, 5115.0], [96.0, 5115.0], [96.1, 5115.0], [96.2, 5115.0], [96.3, 5236.0], [96.4, 5236.0], [96.5, 5236.0], [96.6, 5236.0], [96.7, 5417.0], [96.8, 5417.0], [96.9, 5417.0], [97.0, 5417.0], [97.1, 5542.0], [97.2, 5542.0], [97.3, 5542.0], [97.4, 5542.0], [97.5, 5542.0], [97.6, 6352.0], [97.7, 6352.0], [97.8, 6352.0], [97.9, 6352.0], [98.0, 6368.0], [98.1, 6368.0], [98.2, 6368.0], [98.3, 6368.0], [98.4, 6679.0], [98.5, 6679.0], [98.6, 6679.0], [98.7, 6679.0], [98.8, 6728.0], [98.9, 6728.0], [99.0, 6728.0], [99.1, 6728.0], [99.2, 6782.0], [99.3, 6782.0], [99.4, 6782.0], [99.5, 6782.0], [99.6, 8195.0], [99.7, 8195.0], [99.8, 8195.0], [99.9, 8195.0], [100.0, 8195.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 75.0, "series": [{"data": [[700.0, 1.0], [800.0, 1.0], [900.0, 2.0], [1000.0, 5.0], [1100.0, 3.0], [1200.0, 3.0], [1300.0, 5.0], [1400.0, 7.0], [1500.0, 10.0], [1600.0, 3.0], [1700.0, 5.0], [1800.0, 1.0], [1900.0, 4.0], [2000.0, 1.0], [2100.0, 6.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 4.0], [2700.0, 8.0], [2800.0, 1.0], [2900.0, 4.0], [3000.0, 5.0], [3100.0, 6.0], [3200.0, 2.0], [3300.0, 2.0], [3400.0, 3.0], [3500.0, 4.0], [3600.0, 7.0], [3700.0, 3.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 1.0], [4100.0, 2.0], [4200.0, 3.0], [4300.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [5100.0, 2.0], [4900.0, 1.0], [5200.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [6300.0, 2.0], [6600.0, 1.0], [6700.0, 2.0], [8100.0, 1.0], [100.0, 18.0], [200.0, 75.0], [300.0, 2.0], [400.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 116.0, "series": [{"data": [[0.0, 96.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 27.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7914332E12, "maxY": 1.5454545454545456, "series": [{"data": [[1.79143494E12, 1.0], [1.79143362E12, 1.1111111111111112], [1.79143332E12, 1.1666666666666665], [1.79143392E12, 1.0], [1.79143374E12, 1.1428571428571428], [1.79143404E12, 1.153846153846154], [1.79143434E12, 1.125], [1.79143464E12, 1.125], [1.79143446E12, 1.2222222222222223], [1.79143476E12, 1.0], [1.79143344E12, 1.5454545454545456], [1.79143356E12, 1.142857142857143], [1.79143386E12, 1.0], [1.79143416E12, 1.2000000000000002], [1.79143326E12, 1.1111111111111112], [1.79143398E12, 1.090909090909091], [1.79143428E12, 1.0], [1.79143458E12, 1.0], [1.79143488E12, 1.3333333333333333], [1.7914347E12, 1.0], [1.791435E12, 1.0], [1.79143338E12, 1.1428571428571428], [1.79143368E12, 1.0], [1.7914335E12, 1.5000000000000002], [1.7914338E12, 1.2727272727272725], [1.7914341E12, 1.0], [1.7914344E12, 1.1], [1.79143422E12, 1.1], [1.7914332E12, 1.2999999999999998], [1.79143452E12, 1.1111111111111112], [1.79143482E12, 1.0]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.791435E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1474.421568627451, "minX": 1.0, "maxY": 5639.333333333333, "series": [{"data": [[2.0, 3146.151515151515], [1.0, 1474.421568627451], [3.0, 5639.333333333333]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.1624999999999994, 1756.3458333333333]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7914332E12, "maxY": 248.46666666666667, "series": [{"data": [[1.79143494E12, 22.566666666666666], [1.79143362E12, 28.666666666666668], [1.79143332E12, 19.383333333333333], [1.79143392E12, 21.916666666666668], [1.79143374E12, 22.3], [1.79143404E12, 41.43333333333333], [1.79143434E12, 25.683333333333334], [1.79143464E12, 25.533333333333335], [1.79143446E12, 28.816666666666666], [1.79143476E12, 28.7], [1.79143344E12, 34.95], [1.79143356E12, 22.566666666666666], [1.79143386E12, 12.516666666666667], [1.79143416E12, 32.016666666666666], [1.79143326E12, 28.75], [1.79143398E12, 35.416666666666664], [1.79143428E12, 3.216666666666667], [1.79143458E12, 19.233333333333334], [1.79143488E12, 28.416666666666668], [1.7914347E12, 16.15], [1.791435E12, 52.78333333333333], [1.79143338E12, 22.316666666666666], [1.79143368E12, 15.933333333333334], [1.7914335E12, 38.483333333333334], [1.7914338E12, 35.53333333333333], [1.7914341E12, 12.9], [1.7914344E12, 32.03333333333333], [1.79143422E12, 31.95], [1.7914332E12, 32.03333333333333], [1.79143452E12, 28.8], [1.79143482E12, 15.933333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79143494E12, 142.51666666666668], [1.79143362E12, 188.21666666666667], [1.79143332E12, 94.83333333333333], [1.79143392E12, 135.76666666666668], [1.79143374E12, 119.06666666666666], [1.79143404E12, 230.98333333333332], [1.79143434E12, 142.21666666666667], [1.79143464E12, 142.56666666666666], [1.79143446E12, 160.03333333333333], [1.79143476E12, 197.5], [1.79143344E12, 156.38333333333333], [1.79143356E12, 147.08333333333334], [1.79143386E12, 52.0], [1.79143416E12, 170.76666666666668], [1.79143326E12, 178.03333333333333], [1.79143398E12, 199.16666666666666], [1.79143428E12, 23.783333333333335], [1.79143458E12, 126.05], [1.79143488E12, 174.15], [1.7914347E12, 87.43333333333334], [1.791435E12, 0.0], [1.79143338E12, 127.83333333333333], [1.79143368E12, 103.73333333333333], [1.7914335E12, 248.46666666666667], [1.7914338E12, 200.71666666666667], [1.7914341E12, 75.3], [1.7914344E12, 172.65], [1.79143422E12, 210.4], [1.7914332E12, 190.03333333333333], [1.79143452E12, 163.73333333333332], [1.79143482E12, 123.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.791435E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 206.0, "minX": 1.7914332E12, "maxY": 3160.416666666666, "series": [{"data": [[1.79143494E12, 1329.0], [1.79143362E12, 959.111111111111], [1.79143332E12, 2014.8333333333333], [1.79143392E12, 1061.4285714285716], [1.79143374E12, 1502.142857142857], [1.79143404E12, 2023.384615384615], [1.79143434E12, 1603.1249999999998], [1.79143464E12, 1364.625], [1.79143446E12, 2610.222222222222], [1.79143476E12, 1130.6666666666667], [1.79143344E12, 2977.9999999999995], [1.79143356E12, 1116.0000000000002], [1.79143386E12, 1388.25], [1.79143416E12, 1923.8], [1.79143326E12, 1438.888888888889], [1.79143398E12, 879.0], [1.79143428E12, 206.0], [1.79143458E12, 2433.8333333333335], [1.79143488E12, 2714.5555555555557], [1.7914347E12, 2330.0], [1.791435E12, 1540.0], [1.79143338E12, 1262.7142857142858], [1.79143368E12, 1435.6], [1.7914335E12, 3160.416666666666], [1.7914338E12, 2064.6363636363635], [1.7914341E12, 1699.25], [1.7914344E12, 1877.1999999999996], [1.79143422E12, 1178.8], [1.7914332E12, 1969.2], [1.79143452E12, 1175.111111111111], [1.79143482E12, 1030.4]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.791435E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7914332E12, "maxY": 3160.416666666666, "series": [{"data": [[1.79143494E12, 1328.857142857143], [1.79143362E12, 959.0], [1.79143332E12, 2014.8333333333333], [1.79143392E12, 1061.2857142857142], [1.79143374E12, 1502.142857142857], [1.79143404E12, 2023.230769230769], [1.79143434E12, 1603.1249999999998], [1.79143464E12, 1364.5], [1.79143446E12, 2610.1111111111113], [1.79143476E12, 1130.5555555555557], [1.79143344E12, 2977.9999999999995], [1.79143356E12, 1116.0000000000002], [1.79143386E12, 1388.25], [1.79143416E12, 1923.8], [1.79143326E12, 1438.888888888889], [1.79143398E12, 879.0], [1.79143428E12, 206.0], [1.79143458E12, 2433.8333333333335], [1.79143488E12, 2714.5555555555557], [1.7914347E12, 2330.0], [1.791435E12, 0.0], [1.79143338E12, 1262.7142857142858], [1.79143368E12, 1435.4], [1.7914335E12, 3160.416666666666], [1.7914338E12, 2064.5454545454545], [1.7914341E12, 1699.25], [1.7914344E12, 1877.1], [1.79143422E12, 1178.8], [1.7914332E12, 1969.2], [1.79143452E12, 1175.0], [1.79143482E12, 1030.4]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.791435E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.7914332E12, "maxY": 15.285714285714286, "series": [{"data": [[1.79143494E12, 10.285714285714285], [1.79143362E12, 9.0], [1.79143332E12, 10.5], [1.79143392E12, 10.142857142857142], [1.79143374E12, 11.285714285714285], [1.79143404E12, 14.307692307692308], [1.79143434E12, 10.625], [1.79143464E12, 10.375], [1.79143446E12, 11.88888888888889], [1.79143476E12, 8.666666666666666], [1.79143344E12, 10.454545454545455], [1.79143356E12, 8.999999999999998], [1.79143386E12, 10.0], [1.79143416E12, 10.399999999999999], [1.79143326E12, 10.111111111111109], [1.79143398E12, 9.545454545454545], [1.79143428E12, 9.0], [1.79143458E12, 10.0], [1.79143488E12, 9.88888888888889], [1.7914347E12, 11.4], [1.791435E12, 8.0], [1.79143338E12, 15.285714285714286], [1.79143368E12, 8.8], [1.7914335E12, 10.25], [1.7914338E12, 11.454545454545455], [1.7914341E12, 11.0], [1.7914344E12, 10.799999999999999], [1.79143422E12, 9.5], [1.7914332E12, 14.3], [1.79143452E12, 11.11111111111111], [1.79143482E12, 10.8]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.791435E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.7914332E12, "maxY": 8195.0, "series": [{"data": [[1.79143494E12, 3751.0], [1.79143362E12, 3676.0], [1.79143332E12, 3965.0], [1.79143392E12, 3180.0], [1.79143374E12, 3074.0], [1.79143404E12, 6782.0], [1.79143434E12, 4595.0], [1.79143464E12, 2973.0], [1.79143446E12, 6352.0], [1.79143476E12, 2997.0], [1.79143344E12, 5236.0], [1.79143356E12, 2396.0], [1.79143386E12, 3008.0], [1.79143416E12, 4294.0], [1.79143326E12, 4150.0], [1.79143398E12, 3439.0], [1.79143428E12, 206.0], [1.79143458E12, 6368.0], [1.79143488E12, 6679.0], [1.7914347E12, 6728.0], [1.79143338E12, 3297.0], [1.79143368E12, 3805.0], [1.7914335E12, 8195.0], [1.7914338E12, 3682.0], [1.7914341E12, 3577.0], [1.7914344E12, 3478.0], [1.79143422E12, 3507.0], [1.7914332E12, 5115.0], [1.79143452E12, 2318.0], [1.79143482E12, 4275.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79143494E12, 3751.0], [1.79143362E12, 3676.0], [1.79143332E12, 3965.0], [1.79143392E12, 3180.0], [1.79143374E12, 3074.0], [1.79143404E12, 6109.199999999999], [1.79143434E12, 4595.0], [1.79143464E12, 2973.0], [1.79143446E12, 6352.0], [1.79143476E12, 2997.0], [1.79143344E12, 5047.400000000001], [1.79143356E12, 2396.0], [1.79143386E12, 3008.0], [1.79143416E12, 4231.200000000001], [1.79143326E12, 4150.0], [1.79143398E12, 3211.2000000000007], [1.79143428E12, 206.0], [1.79143458E12, 6368.0], [1.79143488E12, 6679.0], [1.7914347E12, 6728.0], [1.79143338E12, 3297.0], [1.79143368E12, 3805.0], [1.7914335E12, 7361.600000000003], [1.7914338E12, 3680.0], [1.7914341E12, 3577.0], [1.7914344E12, 3445.1000000000004], [1.79143422E12, 3475.6000000000004], [1.7914332E12, 5075.400000000001], [1.79143452E12, 2318.0], [1.79143482E12, 4275.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79143494E12, 3751.0], [1.79143362E12, 3676.0], [1.79143332E12, 3965.0], [1.79143392E12, 3180.0], [1.79143374E12, 3074.0], [1.79143404E12, 6782.0], [1.79143434E12, 4595.0], [1.79143464E12, 2973.0], [1.79143446E12, 6352.0], [1.79143476E12, 2997.0], [1.79143344E12, 5236.0], [1.79143356E12, 2396.0], [1.79143386E12, 3008.0], [1.79143416E12, 4294.0], [1.79143326E12, 4150.0], [1.79143398E12, 3439.0], [1.79143428E12, 206.0], [1.79143458E12, 6368.0], [1.79143488E12, 6679.0], [1.7914347E12, 6728.0], [1.79143338E12, 3297.0], [1.79143368E12, 3805.0], [1.7914335E12, 8195.0], [1.7914338E12, 3682.0], [1.7914341E12, 3577.0], [1.7914344E12, 3478.0], [1.79143422E12, 3507.0], [1.7914332E12, 5115.0], [1.79143452E12, 2318.0], [1.79143482E12, 4275.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79143494E12, 3751.0], [1.79143362E12, 3676.0], [1.79143332E12, 3965.0], [1.79143392E12, 3180.0], [1.79143374E12, 3074.0], [1.79143404E12, 6782.0], [1.79143434E12, 4595.0], [1.79143464E12, 2973.0], [1.79143446E12, 6352.0], [1.79143476E12, 2997.0], [1.79143344E12, 5236.0], [1.79143356E12, 2396.0], [1.79143386E12, 3008.0], [1.79143416E12, 4294.0], [1.79143326E12, 4150.0], [1.79143398E12, 3439.0], [1.79143428E12, 206.0], [1.79143458E12, 6368.0], [1.79143488E12, 6679.0], [1.7914347E12, 6728.0], [1.79143338E12, 3297.0], [1.79143368E12, 3805.0], [1.7914335E12, 8195.0], [1.7914338E12, 3682.0], [1.7914341E12, 3577.0], [1.7914344E12, 3478.0], [1.79143422E12, 3507.0], [1.7914332E12, 5115.0], [1.79143452E12, 2318.0], [1.79143482E12, 4275.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79143494E12, 213.0], [1.79143362E12, 212.0], [1.79143332E12, 226.0], [1.79143392E12, 204.0], [1.79143374E12, 181.0], [1.79143404E12, 186.0], [1.79143434E12, 215.0], [1.79143464E12, 188.0], [1.79143446E12, 185.0], [1.79143476E12, 191.0], [1.79143344E12, 1074.0], [1.79143356E12, 202.0], [1.79143386E12, 365.0], [1.79143416E12, 193.0], [1.79143326E12, 179.0], [1.79143398E12, 199.0], [1.79143428E12, 206.0], [1.79143458E12, 186.0], [1.79143488E12, 243.0], [1.7914347E12, 201.0], [1.79143338E12, 184.0], [1.79143368E12, 198.0], [1.7914335E12, 194.0], [1.7914338E12, 210.0], [1.7914341E12, 229.0], [1.7914344E12, 207.0], [1.79143422E12, 195.0], [1.7914332E12, 236.0], [1.79143452E12, 208.0], [1.79143482E12, 204.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79143494E12, 1068.0], [1.79143362E12, 236.0], [1.79143332E12, 2124.5], [1.79143392E12, 401.0], [1.79143374E12, 2017.0], [1.79143404E12, 833.0], [1.79143434E12, 814.5], [1.79143464E12, 1021.5], [1.79143446E12, 2551.0], [1.79143476E12, 223.0], [1.79143344E12, 3518.0], [1.79143356E12, 1018.0], [1.79143386E12, 1090.0], [1.79143416E12, 2159.5], [1.79143326E12, 210.0], [1.79143398E12, 230.0], [1.79143428E12, 206.0], [1.79143458E12, 1863.5], [1.79143488E12, 2255.0], [1.7914347E12, 1646.0], [1.79143338E12, 234.0], [1.79143368E12, 240.0], [1.7914335E12, 3594.0], [1.7914338E12, 1971.0], [1.7914341E12, 1495.5], [1.7914344E12, 2094.5], [1.79143422E12, 224.0], [1.7914332E12, 1413.5], [1.79143452E12, 1510.0], [1.79143482E12, 229.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143494E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1398.0, "minX": 1.0, "maxY": 4293.0, "series": [{"data": [[1.0, 1398.0], [2.0, 2137.5], [3.0, 4293.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1540.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4293.0, "series": [{"data": [[1.0, 1398.0], [2.0, 2137.5], [3.0, 4293.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7914332E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143494E12, 0.13333333333333333], [1.79143362E12, 0.15], [1.79143332E12, 0.08333333333333333], [1.79143392E12, 0.11666666666666667], [1.79143374E12, 0.11666666666666667], [1.79143404E12, 0.21666666666666667], [1.79143434E12, 0.13333333333333333], [1.79143464E12, 0.13333333333333333], [1.79143446E12, 0.15], [1.79143476E12, 0.15], [1.79143344E12, 0.18333333333333332], [1.79143356E12, 0.11666666666666667], [1.79143386E12, 0.06666666666666667], [1.79143416E12, 0.16666666666666666], [1.79143326E12, 0.16666666666666666], [1.79143398E12, 0.18333333333333332], [1.79143428E12, 0.016666666666666666], [1.79143458E12, 0.1], [1.79143488E12, 0.15], [1.7914347E12, 0.08333333333333333], [1.79143338E12, 0.11666666666666667], [1.79143368E12, 0.08333333333333333], [1.7914335E12, 0.2], [1.7914338E12, 0.18333333333333332], [1.7914341E12, 0.06666666666666667], [1.7914344E12, 0.16666666666666666], [1.79143422E12, 0.16666666666666666], [1.7914332E12, 0.16666666666666666], [1.79143452E12, 0.15], [1.79143482E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143494E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7914332E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143494E12, 0.11666666666666667], [1.79143362E12, 0.15], [1.79143332E12, 0.1], [1.79143392E12, 0.11666666666666667], [1.79143374E12, 0.11666666666666667], [1.79143404E12, 0.21666666666666667], [1.79143434E12, 0.13333333333333333], [1.79143464E12, 0.13333333333333333], [1.79143446E12, 0.15], [1.79143476E12, 0.15], [1.79143344E12, 0.18333333333333332], [1.79143356E12, 0.11666666666666667], [1.79143386E12, 0.06666666666666667], [1.79143416E12, 0.16666666666666666], [1.79143326E12, 0.15], [1.79143398E12, 0.18333333333333332], [1.79143428E12, 0.016666666666666666], [1.79143458E12, 0.1], [1.79143488E12, 0.15], [1.7914347E12, 0.08333333333333333], [1.79143338E12, 0.11666666666666667], [1.79143368E12, 0.08333333333333333], [1.7914335E12, 0.2], [1.7914338E12, 0.18333333333333332], [1.7914341E12, 0.06666666666666667], [1.7914344E12, 0.16666666666666666], [1.79143422E12, 0.16666666666666666], [1.7914332E12, 0.16666666666666666], [1.79143452E12, 0.15], [1.79143482E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.791435E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.791435E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7914332E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143494E12, 0.11666666666666667], [1.79143362E12, 0.15], [1.79143332E12, 0.1], [1.79143392E12, 0.11666666666666667], [1.79143374E12, 0.11666666666666667], [1.79143404E12, 0.21666666666666667], [1.79143434E12, 0.13333333333333333], [1.79143464E12, 0.13333333333333333], [1.79143446E12, 0.15], [1.79143476E12, 0.15], [1.79143344E12, 0.18333333333333332], [1.79143356E12, 0.11666666666666667], [1.79143386E12, 0.06666666666666667], [1.79143416E12, 0.16666666666666666], [1.79143326E12, 0.15], [1.79143398E12, 0.18333333333333332], [1.79143428E12, 0.016666666666666666], [1.79143458E12, 0.1], [1.79143488E12, 0.15], [1.7914347E12, 0.08333333333333333], [1.79143338E12, 0.11666666666666667], [1.79143368E12, 0.08333333333333333], [1.7914335E12, 0.2], [1.7914338E12, 0.18333333333333332], [1.7914341E12, 0.06666666666666667], [1.7914344E12, 0.16666666666666666], [1.79143422E12, 0.16666666666666666], [1.7914332E12, 0.16666666666666666], [1.79143452E12, 0.15], [1.79143482E12, 0.08333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.791435E12, 0.016666666666666666]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.791435E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7914332E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143494E12, 0.11666666666666667], [1.79143362E12, 0.15], [1.79143332E12, 0.1], [1.79143392E12, 0.11666666666666667], [1.79143374E12, 0.11666666666666667], [1.79143404E12, 0.21666666666666667], [1.79143434E12, 0.13333333333333333], [1.79143464E12, 0.13333333333333333], [1.79143446E12, 0.15], [1.79143476E12, 0.15], [1.79143344E12, 0.18333333333333332], [1.79143356E12, 0.11666666666666667], [1.79143386E12, 0.06666666666666667], [1.79143416E12, 0.16666666666666666], [1.79143326E12, 0.15], [1.79143398E12, 0.18333333333333332], [1.79143428E12, 0.016666666666666666], [1.79143458E12, 0.1], [1.79143488E12, 0.15], [1.7914347E12, 0.08333333333333333], [1.79143338E12, 0.11666666666666667], [1.79143368E12, 0.08333333333333333], [1.7914335E12, 0.2], [1.7914338E12, 0.18333333333333332], [1.7914341E12, 0.06666666666666667], [1.7914344E12, 0.16666666666666666], [1.79143422E12, 0.16666666666666666], [1.7914332E12, 0.16666666666666666], [1.79143452E12, 0.15], [1.79143482E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.791435E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.791435E12, "title": "Total Transactions Per Second"}},
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

