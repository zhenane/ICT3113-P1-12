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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 12855.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 183.0], [0.3, 183.0], [0.4, 183.0], [0.5, 184.0], [0.6, 184.0], [0.7, 184.0], [0.8, 184.0], [0.9, 185.0], [1.0, 185.0], [1.1, 185.0], [1.2, 185.0], [1.3, 186.0], [1.4, 186.0], [1.5, 186.0], [1.6, 186.0], [1.7, 186.0], [1.8, 186.0], [1.9, 186.0], [2.0, 186.0], [2.1, 187.0], [2.2, 187.0], [2.3, 187.0], [2.4, 187.0], [2.5, 189.0], [2.6, 189.0], [2.7, 189.0], [2.8, 189.0], [2.9, 189.0], [3.0, 193.0], [3.1, 193.0], [3.2, 193.0], [3.3, 193.0], [3.4, 195.0], [3.5, 195.0], [3.6, 195.0], [3.7, 195.0], [3.8, 196.0], [3.9, 196.0], [4.0, 196.0], [4.1, 196.0], [4.2, 197.0], [4.3, 197.0], [4.4, 197.0], [4.5, 197.0], [4.6, 197.0], [4.7, 197.0], [4.8, 197.0], [4.9, 197.0], [5.0, 198.0], [5.1, 198.0], [5.2, 198.0], [5.3, 198.0], [5.4, 198.0], [5.5, 200.0], [5.6, 200.0], [5.7, 200.0], [5.8, 200.0], [5.9, 200.0], [6.0, 200.0], [6.1, 200.0], [6.2, 200.0], [6.3, 200.0], [6.4, 200.0], [6.5, 200.0], [6.6, 200.0], [6.7, 202.0], [6.8, 202.0], [6.9, 202.0], [7.0, 202.0], [7.1, 202.0], [7.2, 202.0], [7.3, 202.0], [7.4, 202.0], [7.5, 202.0], [7.6, 202.0], [7.7, 202.0], [7.8, 202.0], [7.9, 202.0], [8.0, 203.0], [8.1, 203.0], [8.2, 203.0], [8.3, 203.0], [8.4, 204.0], [8.5, 204.0], [8.6, 204.0], [8.7, 204.0], [8.8, 205.0], [8.9, 205.0], [9.0, 205.0], [9.1, 205.0], [9.2, 207.0], [9.3, 207.0], [9.4, 207.0], [9.5, 207.0], [9.6, 208.0], [9.7, 208.0], [9.8, 208.0], [9.9, 208.0], [10.0, 209.0], [10.1, 209.0], [10.2, 209.0], [10.3, 209.0], [10.4, 209.0], [10.5, 210.0], [10.6, 210.0], [10.7, 210.0], [10.8, 210.0], [10.9, 210.0], [11.0, 210.0], [11.1, 210.0], [11.2, 210.0], [11.3, 212.0], [11.4, 212.0], [11.5, 212.0], [11.6, 212.0], [11.7, 212.0], [11.8, 212.0], [11.9, 212.0], [12.0, 212.0], [12.1, 212.0], [12.2, 212.0], [12.3, 212.0], [12.4, 212.0], [12.5, 214.0], [12.6, 214.0], [12.7, 214.0], [12.8, 214.0], [12.9, 214.0], [13.0, 214.0], [13.1, 214.0], [13.2, 214.0], [13.3, 214.0], [13.4, 215.0], [13.5, 215.0], [13.6, 215.0], [13.7, 215.0], [13.8, 215.0], [13.9, 215.0], [14.0, 215.0], [14.1, 215.0], [14.2, 215.0], [14.3, 215.0], [14.4, 215.0], [14.5, 215.0], [14.6, 215.0], [14.7, 215.0], [14.8, 215.0], [14.9, 215.0], [15.0, 216.0], [15.1, 216.0], [15.2, 216.0], [15.3, 216.0], [15.4, 216.0], [15.5, 216.0], [15.6, 216.0], [15.7, 216.0], [15.8, 216.0], [15.9, 216.0], [16.0, 216.0], [16.1, 216.0], [16.2, 216.0], [16.3, 217.0], [16.4, 217.0], [16.5, 217.0], [16.6, 217.0], [16.7, 221.0], [16.8, 221.0], [16.9, 221.0], [17.0, 221.0], [17.1, 221.0], [17.2, 221.0], [17.3, 221.0], [17.4, 221.0], [17.5, 222.0], [17.6, 222.0], [17.7, 222.0], [17.8, 222.0], [17.9, 222.0], [18.0, 222.0], [18.1, 222.0], [18.2, 222.0], [18.3, 222.0], [18.4, 224.0], [18.5, 224.0], [18.6, 224.0], [18.7, 224.0], [18.8, 225.0], [18.9, 225.0], [19.0, 225.0], [19.1, 225.0], [19.2, 226.0], [19.3, 226.0], [19.4, 226.0], [19.5, 226.0], [19.6, 227.0], [19.7, 227.0], [19.8, 227.0], [19.9, 227.0], [20.0, 227.0], [20.1, 227.0], [20.2, 227.0], [20.3, 227.0], [20.4, 227.0], [20.5, 229.0], [20.6, 229.0], [20.7, 229.0], [20.8, 229.0], [20.9, 231.0], [21.0, 231.0], [21.1, 231.0], [21.2, 231.0], [21.3, 232.0], [21.4, 232.0], [21.5, 232.0], [21.6, 232.0], [21.7, 232.0], [21.8, 232.0], [21.9, 232.0], [22.0, 232.0], [22.1, 234.0], [22.2, 234.0], [22.3, 234.0], [22.4, 234.0], [22.5, 237.0], [22.6, 237.0], [22.7, 237.0], [22.8, 237.0], [22.9, 237.0], [23.0, 239.0], [23.1, 239.0], [23.2, 239.0], [23.3, 239.0], [23.4, 240.0], [23.5, 240.0], [23.6, 240.0], [23.7, 240.0], [23.8, 241.0], [23.9, 241.0], [24.0, 241.0], [24.1, 241.0], [24.2, 241.0], [24.3, 241.0], [24.4, 241.0], [24.5, 241.0], [24.6, 243.0], [24.7, 243.0], [24.8, 243.0], [24.9, 243.0], [25.0, 243.0], [25.1, 245.0], [25.2, 245.0], [25.3, 245.0], [25.4, 245.0], [25.5, 249.0], [25.6, 249.0], [25.7, 249.0], [25.8, 249.0], [25.9, 259.0], [26.0, 259.0], [26.1, 259.0], [26.2, 259.0], [26.3, 302.0], [26.4, 302.0], [26.5, 302.0], [26.6, 302.0], [26.7, 447.0], [26.8, 447.0], [26.9, 447.0], [27.0, 447.0], [27.1, 493.0], [27.2, 493.0], [27.3, 493.0], [27.4, 493.0], [27.5, 493.0], [27.6, 792.0], [27.7, 792.0], [27.8, 792.0], [27.9, 792.0], [28.0, 868.0], [28.1, 868.0], [28.2, 868.0], [28.3, 868.0], [28.4, 932.0], [28.5, 932.0], [28.6, 932.0], [28.7, 932.0], [28.8, 945.0], [28.9, 945.0], [29.0, 945.0], [29.1, 945.0], [29.2, 979.0], [29.3, 979.0], [29.4, 979.0], [29.5, 979.0], [29.6, 988.0], [29.7, 988.0], [29.8, 988.0], [29.9, 988.0], [30.0, 988.0], [30.1, 1021.0], [30.2, 1021.0], [30.3, 1021.0], [30.4, 1021.0], [30.5, 1034.0], [30.6, 1034.0], [30.7, 1034.0], [30.8, 1034.0], [30.9, 1037.0], [31.0, 1037.0], [31.1, 1037.0], [31.2, 1037.0], [31.3, 1048.0], [31.4, 1048.0], [31.5, 1048.0], [31.6, 1048.0], [31.7, 1080.0], [31.8, 1080.0], [31.9, 1080.0], [32.0, 1080.0], [32.1, 1096.0], [32.2, 1096.0], [32.3, 1096.0], [32.4, 1096.0], [32.5, 1096.0], [32.6, 1126.0], [32.7, 1126.0], [32.8, 1126.0], [32.9, 1126.0], [33.0, 1150.0], [33.1, 1150.0], [33.2, 1150.0], [33.3, 1150.0], [33.4, 1161.0], [33.5, 1161.0], [33.6, 1161.0], [33.7, 1161.0], [33.8, 1169.0], [33.9, 1169.0], [34.0, 1169.0], [34.1, 1169.0], [34.2, 1211.0], [34.3, 1211.0], [34.4, 1211.0], [34.5, 1211.0], [34.6, 1213.0], [34.7, 1213.0], [34.8, 1213.0], [34.9, 1213.0], [35.0, 1213.0], [35.1, 1237.0], [35.2, 1237.0], [35.3, 1237.0], [35.4, 1237.0], [35.5, 1240.0], [35.6, 1240.0], [35.7, 1240.0], [35.8, 1240.0], [35.9, 1241.0], [36.0, 1241.0], [36.1, 1241.0], [36.2, 1241.0], [36.3, 1263.0], [36.4, 1263.0], [36.5, 1263.0], [36.6, 1263.0], [36.7, 1313.0], [36.8, 1313.0], [36.9, 1313.0], [37.0, 1313.0], [37.1, 1316.0], [37.2, 1316.0], [37.3, 1316.0], [37.4, 1316.0], [37.5, 1320.0], [37.6, 1320.0], [37.7, 1320.0], [37.8, 1320.0], [37.9, 1320.0], [38.0, 1365.0], [38.1, 1365.0], [38.2, 1365.0], [38.3, 1365.0], [38.4, 1367.0], [38.5, 1367.0], [38.6, 1367.0], [38.7, 1367.0], [38.8, 1374.0], [38.9, 1374.0], [39.0, 1374.0], [39.1, 1374.0], [39.2, 1409.0], [39.3, 1409.0], [39.4, 1409.0], [39.5, 1409.0], [39.6, 1410.0], [39.7, 1410.0], [39.8, 1410.0], [39.9, 1410.0], [40.0, 1423.0], [40.1, 1423.0], [40.2, 1423.0], [40.3, 1423.0], [40.4, 1423.0], [40.5, 1431.0], [40.6, 1431.0], [40.7, 1431.0], [40.8, 1431.0], [40.9, 1435.0], [41.0, 1435.0], [41.1, 1435.0], [41.2, 1435.0], [41.3, 1445.0], [41.4, 1445.0], [41.5, 1445.0], [41.6, 1445.0], [41.7, 1446.0], [41.8, 1446.0], [41.9, 1446.0], [42.0, 1446.0], [42.1, 1483.0], [42.2, 1483.0], [42.3, 1483.0], [42.4, 1483.0], [42.5, 1506.0], [42.6, 1506.0], [42.7, 1506.0], [42.8, 1506.0], [42.9, 1506.0], [43.0, 1525.0], [43.1, 1525.0], [43.2, 1525.0], [43.3, 1525.0], [43.4, 1555.0], [43.5, 1555.0], [43.6, 1555.0], [43.7, 1555.0], [43.8, 1566.0], [43.9, 1566.0], [44.0, 1566.0], [44.1, 1566.0], [44.2, 1571.0], [44.3, 1571.0], [44.4, 1571.0], [44.5, 1571.0], [44.6, 1599.0], [44.7, 1599.0], [44.8, 1599.0], [44.9, 1599.0], [45.0, 1604.0], [45.1, 1604.0], [45.2, 1604.0], [45.3, 1604.0], [45.4, 1604.0], [45.5, 1635.0], [45.6, 1635.0], [45.7, 1635.0], [45.8, 1635.0], [45.9, 1663.0], [46.0, 1663.0], [46.1, 1663.0], [46.2, 1663.0], [46.3, 1665.0], [46.4, 1665.0], [46.5, 1665.0], [46.6, 1665.0], [46.7, 1672.0], [46.8, 1672.0], [46.9, 1672.0], [47.0, 1672.0], [47.1, 1736.0], [47.2, 1736.0], [47.3, 1736.0], [47.4, 1736.0], [47.5, 1747.0], [47.6, 1747.0], [47.7, 1747.0], [47.8, 1747.0], [47.9, 1747.0], [48.0, 1761.0], [48.1, 1761.0], [48.2, 1761.0], [48.3, 1761.0], [48.4, 1779.0], [48.5, 1779.0], [48.6, 1779.0], [48.7, 1779.0], [48.8, 1800.0], [48.9, 1800.0], [49.0, 1800.0], [49.1, 1800.0], [49.2, 1830.0], [49.3, 1830.0], [49.4, 1830.0], [49.5, 1830.0], [49.6, 1847.0], [49.7, 1847.0], [49.8, 1847.0], [49.9, 1847.0], [50.0, 1862.0], [50.1, 1862.0], [50.2, 1862.0], [50.3, 1862.0], [50.4, 1862.0], [50.5, 1874.0], [50.6, 1874.0], [50.7, 1874.0], [50.8, 1874.0], [50.9, 1884.0], [51.0, 1884.0], [51.1, 1884.0], [51.2, 1884.0], [51.3, 1911.0], [51.4, 1911.0], [51.5, 1911.0], [51.6, 1911.0], [51.7, 1913.0], [51.8, 1913.0], [51.9, 1913.0], [52.0, 1913.0], [52.1, 1963.0], [52.2, 1963.0], [52.3, 1963.0], [52.4, 1963.0], [52.5, 1966.0], [52.6, 1966.0], [52.7, 1966.0], [52.8, 1966.0], [52.9, 1966.0], [53.0, 1986.0], [53.1, 1986.0], [53.2, 1986.0], [53.3, 1986.0], [53.4, 1996.0], [53.5, 1996.0], [53.6, 1996.0], [53.7, 1996.0], [53.8, 2059.0], [53.9, 2059.0], [54.0, 2059.0], [54.1, 2059.0], [54.2, 2147.0], [54.3, 2147.0], [54.4, 2147.0], [54.5, 2147.0], [54.6, 2156.0], [54.7, 2156.0], [54.8, 2156.0], [54.9, 2156.0], [55.0, 2159.0], [55.1, 2159.0], [55.2, 2159.0], [55.3, 2159.0], [55.4, 2159.0], [55.5, 2161.0], [55.6, 2161.0], [55.7, 2161.0], [55.8, 2161.0], [55.9, 2166.0], [56.0, 2166.0], [56.1, 2166.0], [56.2, 2166.0], [56.3, 2253.0], [56.4, 2253.0], [56.5, 2253.0], [56.6, 2253.0], [56.7, 2260.0], [56.8, 2260.0], [56.9, 2260.0], [57.0, 2260.0], [57.1, 2263.0], [57.2, 2263.0], [57.3, 2263.0], [57.4, 2263.0], [57.5, 2308.0], [57.6, 2308.0], [57.7, 2308.0], [57.8, 2308.0], [57.9, 2308.0], [58.0, 2311.0], [58.1, 2311.0], [58.2, 2311.0], [58.3, 2311.0], [58.4, 2315.0], [58.5, 2315.0], [58.6, 2315.0], [58.7, 2315.0], [58.8, 2331.0], [58.9, 2331.0], [59.0, 2331.0], [59.1, 2331.0], [59.2, 2337.0], [59.3, 2337.0], [59.4, 2337.0], [59.5, 2337.0], [59.6, 2357.0], [59.7, 2357.0], [59.8, 2357.0], [59.9, 2357.0], [60.0, 2369.0], [60.1, 2369.0], [60.2, 2369.0], [60.3, 2369.0], [60.4, 2369.0], [60.5, 2451.0], [60.6, 2451.0], [60.7, 2451.0], [60.8, 2451.0], [60.9, 2451.0], [61.0, 2451.0], [61.1, 2451.0], [61.2, 2451.0], [61.3, 2459.0], [61.4, 2459.0], [61.5, 2459.0], [61.6, 2459.0], [61.7, 2467.0], [61.8, 2467.0], [61.9, 2467.0], [62.0, 2467.0], [62.1, 2483.0], [62.2, 2483.0], [62.3, 2483.0], [62.4, 2483.0], [62.5, 2495.0], [62.6, 2495.0], [62.7, 2495.0], [62.8, 2495.0], [62.9, 2495.0], [63.0, 2576.0], [63.1, 2576.0], [63.2, 2576.0], [63.3, 2576.0], [63.4, 2608.0], [63.5, 2608.0], [63.6, 2608.0], [63.7, 2608.0], [63.8, 2613.0], [63.9, 2613.0], [64.0, 2613.0], [64.1, 2613.0], [64.2, 2623.0], [64.3, 2623.0], [64.4, 2623.0], [64.5, 2623.0], [64.6, 2633.0], [64.7, 2633.0], [64.8, 2633.0], [64.9, 2633.0], [65.0, 2649.0], [65.1, 2649.0], [65.2, 2649.0], [65.3, 2649.0], [65.4, 2649.0], [65.5, 2654.0], [65.6, 2654.0], [65.7, 2654.0], [65.8, 2654.0], [65.9, 2675.0], [66.0, 2675.0], [66.1, 2675.0], [66.2, 2675.0], [66.3, 2689.0], [66.4, 2689.0], [66.5, 2689.0], [66.6, 2689.0], [66.7, 2723.0], [66.8, 2723.0], [66.9, 2723.0], [67.0, 2723.0], [67.1, 2738.0], [67.2, 2738.0], [67.3, 2738.0], [67.4, 2738.0], [67.5, 2803.0], [67.6, 2803.0], [67.7, 2803.0], [67.8, 2803.0], [67.9, 2803.0], [68.0, 2824.0], [68.1, 2824.0], [68.2, 2824.0], [68.3, 2824.0], [68.4, 2937.0], [68.5, 2937.0], [68.6, 2937.0], [68.7, 2937.0], [68.8, 2955.0], [68.9, 2955.0], [69.0, 2955.0], [69.1, 2955.0], [69.2, 2986.0], [69.3, 2986.0], [69.4, 2986.0], [69.5, 2986.0], [69.6, 3006.0], [69.7, 3006.0], [69.8, 3006.0], [69.9, 3006.0], [70.0, 3011.0], [70.1, 3011.0], [70.2, 3011.0], [70.3, 3011.0], [70.4, 3011.0], [70.5, 3017.0], [70.6, 3017.0], [70.7, 3017.0], [70.8, 3017.0], [70.9, 3053.0], [71.0, 3053.0], [71.1, 3053.0], [71.2, 3053.0], [71.3, 3055.0], [71.4, 3055.0], [71.5, 3055.0], [71.6, 3055.0], [71.7, 3055.0], [71.8, 3055.0], [71.9, 3055.0], [72.0, 3055.0], [72.1, 3061.0], [72.2, 3061.0], [72.3, 3061.0], [72.4, 3061.0], [72.5, 3065.0], [72.6, 3065.0], [72.7, 3065.0], [72.8, 3065.0], [72.9, 3065.0], [73.0, 3089.0], [73.1, 3089.0], [73.2, 3089.0], [73.3, 3089.0], [73.4, 3093.0], [73.5, 3093.0], [73.6, 3093.0], [73.7, 3093.0], [73.8, 3096.0], [73.9, 3096.0], [74.0, 3096.0], [74.1, 3096.0], [74.2, 3114.0], [74.3, 3114.0], [74.4, 3114.0], [74.5, 3114.0], [74.6, 3143.0], [74.7, 3143.0], [74.8, 3143.0], [74.9, 3143.0], [75.0, 3164.0], [75.1, 3164.0], [75.2, 3164.0], [75.3, 3164.0], [75.4, 3164.0], [75.5, 3170.0], [75.6, 3170.0], [75.7, 3170.0], [75.8, 3170.0], [75.9, 3176.0], [76.0, 3176.0], [76.1, 3176.0], [76.2, 3176.0], [76.3, 3192.0], [76.4, 3192.0], [76.5, 3192.0], [76.6, 3192.0], [76.7, 3246.0], [76.8, 3246.0], [76.9, 3246.0], [77.0, 3246.0], [77.1, 3256.0], [77.2, 3256.0], [77.3, 3256.0], [77.4, 3256.0], [77.5, 3264.0], [77.6, 3264.0], [77.7, 3264.0], [77.8, 3264.0], [77.9, 3264.0], [78.0, 3349.0], [78.1, 3349.0], [78.2, 3349.0], [78.3, 3349.0], [78.4, 3368.0], [78.5, 3368.0], [78.6, 3368.0], [78.7, 3368.0], [78.8, 3372.0], [78.9, 3372.0], [79.0, 3372.0], [79.1, 3372.0], [79.2, 3381.0], [79.3, 3381.0], [79.4, 3381.0], [79.5, 3381.0], [79.6, 3433.0], [79.7, 3433.0], [79.8, 3433.0], [79.9, 3433.0], [80.0, 3433.0], [80.1, 3449.0], [80.2, 3449.0], [80.3, 3449.0], [80.4, 3449.0], [80.5, 3542.0], [80.6, 3542.0], [80.7, 3542.0], [80.8, 3542.0], [80.9, 3566.0], [81.0, 3566.0], [81.1, 3566.0], [81.2, 3566.0], [81.3, 3574.0], [81.4, 3574.0], [81.5, 3574.0], [81.6, 3574.0], [81.7, 3599.0], [81.8, 3599.0], [81.9, 3599.0], [82.0, 3599.0], [82.1, 3612.0], [82.2, 3612.0], [82.3, 3612.0], [82.4, 3612.0], [82.5, 3612.0], [82.6, 3613.0], [82.7, 3613.0], [82.8, 3613.0], [82.9, 3613.0], [83.0, 3623.0], [83.1, 3623.0], [83.2, 3623.0], [83.3, 3623.0], [83.4, 3661.0], [83.5, 3661.0], [83.6, 3661.0], [83.7, 3661.0], [83.8, 3671.0], [83.9, 3671.0], [84.0, 3671.0], [84.1, 3671.0], [84.2, 3722.0], [84.3, 3722.0], [84.4, 3722.0], [84.5, 3722.0], [84.6, 3768.0], [84.7, 3768.0], [84.8, 3768.0], [84.9, 3768.0], [85.0, 3768.0], [85.1, 3823.0], [85.2, 3823.0], [85.3, 3823.0], [85.4, 3823.0], [85.5, 3946.0], [85.6, 3946.0], [85.7, 3946.0], [85.8, 3946.0], [85.9, 3977.0], [86.0, 3977.0], [86.1, 3977.0], [86.2, 3977.0], [86.3, 3978.0], [86.4, 3978.0], [86.5, 3978.0], [86.6, 3978.0], [86.7, 3992.0], [86.8, 3992.0], [86.9, 3992.0], [87.0, 3992.0], [87.1, 4174.0], [87.2, 4174.0], [87.3, 4174.0], [87.4, 4174.0], [87.5, 4174.0], [87.6, 4176.0], [87.7, 4176.0], [87.8, 4176.0], [87.9, 4176.0], [88.0, 4207.0], [88.1, 4207.0], [88.2, 4207.0], [88.3, 4207.0], [88.4, 4329.0], [88.5, 4329.0], [88.6, 4329.0], [88.7, 4329.0], [88.8, 4371.0], [88.9, 4371.0], [89.0, 4371.0], [89.1, 4371.0], [89.2, 4404.0], [89.3, 4404.0], [89.4, 4404.0], [89.5, 4404.0], [89.6, 4518.0], [89.7, 4518.0], [89.8, 4518.0], [89.9, 4518.0], [90.0, 4518.0], [90.1, 4611.0], [90.2, 4611.0], [90.3, 4611.0], [90.4, 4611.0], [90.5, 4678.0], [90.6, 4678.0], [90.7, 4678.0], [90.8, 4678.0], [90.9, 4732.0], [91.0, 4732.0], [91.1, 4732.0], [91.2, 4732.0], [91.3, 4996.0], [91.4, 4996.0], [91.5, 4996.0], [91.6, 4996.0], [91.7, 5241.0], [91.8, 5241.0], [91.9, 5241.0], [92.0, 5241.0], [92.1, 5344.0], [92.2, 5344.0], [92.3, 5344.0], [92.4, 5344.0], [92.5, 5344.0], [92.6, 5359.0], [92.7, 5359.0], [92.8, 5359.0], [92.9, 5359.0], [93.0, 5438.0], [93.1, 5438.0], [93.2, 5438.0], [93.3, 5438.0], [93.4, 5609.0], [93.5, 5609.0], [93.6, 5609.0], [93.7, 5609.0], [93.8, 5818.0], [93.9, 5818.0], [94.0, 5818.0], [94.1, 5818.0], [94.2, 6068.0], [94.3, 6068.0], [94.4, 6068.0], [94.5, 6068.0], [94.6, 6200.0], [94.7, 6200.0], [94.8, 6200.0], [94.9, 6200.0], [95.0, 6200.0], [95.1, 6310.0], [95.2, 6310.0], [95.3, 6310.0], [95.4, 6310.0], [95.5, 6610.0], [95.6, 6610.0], [95.7, 6610.0], [95.8, 6610.0], [95.9, 7109.0], [96.0, 7109.0], [96.1, 7109.0], [96.2, 7109.0], [96.3, 7192.0], [96.4, 7192.0], [96.5, 7192.0], [96.6, 7192.0], [96.7, 8276.0], [96.8, 8276.0], [96.9, 8276.0], [97.0, 8276.0], [97.1, 8328.0], [97.2, 8328.0], [97.3, 8328.0], [97.4, 8328.0], [97.5, 8328.0], [97.6, 8362.0], [97.7, 8362.0], [97.8, 8362.0], [97.9, 8362.0], [98.0, 9427.0], [98.1, 9427.0], [98.2, 9427.0], [98.3, 9427.0], [98.4, 9769.0], [98.5, 9769.0], [98.6, 9769.0], [98.7, 9769.0], [98.8, 10201.0], [98.9, 10201.0], [99.0, 10201.0], [99.1, 10201.0], [99.2, 10369.0], [99.3, 10369.0], [99.4, 10369.0], [99.5, 10369.0], [99.6, 12855.0], [99.7, 12855.0], [99.8, 12855.0], [99.9, 12855.0], [100.0, 12855.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 50.0, "series": [{"data": [[700.0, 1.0], [800.0, 1.0], [900.0, 4.0], [1000.0, 6.0], [1100.0, 4.0], [1200.0, 6.0], [1300.0, 6.0], [1400.0, 8.0], [1500.0, 6.0], [1600.0, 5.0], [1700.0, 4.0], [1800.0, 6.0], [1900.0, 6.0], [2000.0, 1.0], [2100.0, 5.0], [2300.0, 7.0], [2200.0, 3.0], [2400.0, 6.0], [2500.0, 1.0], [2600.0, 8.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 3.0], [3000.0, 11.0], [3100.0, 6.0], [3200.0, 3.0], [3300.0, 4.0], [3400.0, 2.0], [3500.0, 4.0], [3700.0, 2.0], [3600.0, 5.0], [3800.0, 1.0], [3900.0, 4.0], [4100.0, 2.0], [4200.0, 1.0], [4300.0, 2.0], [4600.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [5300.0, 2.0], [5600.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [7100.0, 2.0], [8300.0, 2.0], [8200.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10200.0, 1.0], [10300.0, 1.0], [12800.0, 1.0], [100.0, 13.0], [200.0, 50.0], [300.0, 1.0], [400.0, 2.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 138.0, "series": [{"data": [[0.0, 66.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 138.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7913975E12, "maxY": 2.692307692307692, "series": [{"data": [[1.7913984E12, 1.3636363636363635], [1.7913981E12, 1.0], [1.7913978E12, 2.692307692307692], [1.7913975E12, 1.1428571428571428], [1.79139912E12, 1.0], [1.79139882E12, 1.2500000000000002], [1.79139852E12, 1.2999999999999998], [1.79139822E12, 1.1111111111111114], [1.79139792E12, 1.4], [1.79139762E12, 1.0], [1.79139924E12, 1.1250000000000002], [1.79139894E12, 1.3333333333333333], [1.79139864E12, 1.0], [1.79139834E12, 1.1666666666666665], [1.79139804E12, 1.0], [1.79139774E12, 1.0], [1.79139906E12, 1.4444444444444442], [1.79139876E12, 1.25], [1.79139846E12, 1.375], [1.79139816E12, 1.1666666666666665], [1.79139786E12, 1.0], [1.79139756E12, 1.2500000000000002], [1.79139918E12, 1.4285714285714286], [1.79139888E12, 1.0], [1.79139858E12, 1.1666666666666665], [1.79139828E12, 1.0], [1.79139798E12, 1.4444444444444444], [1.79139768E12, 1.3], [1.7913993E12, 1.0], [1.791399E12, 1.2], [1.7913987E12, 1.1250000000000002]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913993E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1852.9105263157887, "minX": 1.0, "maxY": 9386.0, "series": [{"data": [[2.0, 2972.5499999999997], [1.0, 1852.9105263157887], [4.0, 9386.0], [5.0, 8328.0], [6.0, 6068.0], [3.0, 5576.2]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.283333333333333, 2255.7916666666642]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6.466666666666667, "minX": 1.7913975E12, "maxY": 281.1, "series": [{"data": [[1.7913984E12, 35.38333333333333], [1.7913981E12, 25.433333333333334], [1.7913978E12, 42.0], [1.7913975E12, 22.433333333333334], [1.79139912E12, 22.433333333333334], [1.79139882E12, 38.5], [1.79139852E12, 31.95], [1.79139822E12, 28.8], [1.79139792E12, 32.31666666666667], [1.79139762E12, 35.21666666666667], [1.79139924E12, 25.816666666666666], [1.79139894E12, 28.916666666666668], [1.79139864E12, 19.35], [1.79139834E12, 19.033333333333335], [1.79139804E12, 22.6], [1.79139774E12, 15.783333333333333], [1.79139906E12, 28.916666666666668], [1.79139876E12, 12.616666666666667], [1.79139846E12, 25.583333333333332], [1.79139816E12, 18.933333333333334], [1.79139786E12, 18.983333333333334], [1.79139756E12, 38.333333333333336], [1.79139918E12, 21.816666666666666], [1.79139888E12, 6.466666666666667], [1.79139858E12, 19.266666666666666], [1.79139828E12, 16.083333333333332], [1.79139798E12, 28.6], [1.79139768E12, 31.816666666666666], [1.7913993E12, 12.916666666666666], [1.791399E12, 15.933333333333334], [1.7913987E12, 25.566666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7913984E12, 177.96666666666667], [1.7913981E12, 112.41666666666667], [1.7913978E12, 281.1], [1.7913975E12, 147.58333333333334], [1.79139912E12, 168.46666666666667], [1.79139882E12, 212.4], [1.79139852E12, 210.4], [1.79139822E12, 155.93333333333334], [1.79139792E12, 222.15], [1.79139762E12, 188.98333333333332], [1.79139924E12, 179.01666666666668], [1.79139894E12, 198.96666666666667], [1.79139864E12, 106.61666666666666], [1.79139834E12, 107.35], [1.79139804E12, 140.3], [1.79139774E12, 71.15], [1.79139906E12, 182.15], [1.79139876E12, 89.86666666666666], [1.79139846E12, 143.98333333333332], [1.79139816E12, 125.55], [1.79139786E12, 129.21666666666667], [1.79139756E12, 220.48333333333332], [1.79139918E12, 146.9], [1.79139888E12, 26.133333333333333], [1.79139858E12, 101.08333333333333], [1.79139828E12, 101.2], [1.79139798E12, 147.51666666666668], [1.79139768E12, 145.5], [1.7913993E12, 55.55], [1.791399E12, 66.1], [1.7913987E12, 141.11666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913993E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 800.8, "minX": 1.7913975E12, "maxY": 6702.230769230769, "series": [{"data": [[1.7913984E12, 2655.0000000000005], [1.7913981E12, 1949.875], [1.7913978E12, 6702.230769230769], [1.7913975E12, 1409.1428571428573], [1.79139912E12, 1448.0], [1.79139882E12, 1865.6666666666667], [1.79139852E12, 2319.2999999999997], [1.79139822E12, 1913.2222222222222], [1.79139792E12, 3034.2000000000003], [1.79139762E12, 2058.7272727272725], [1.79139924E12, 1879.625], [1.79139894E12, 3276.666666666667], [1.79139864E12, 1445.0], [1.79139834E12, 1858.8333333333333], [1.79139804E12, 1545.0], [1.79139774E12, 2384.4], [1.79139906E12, 2127.4444444444443], [1.79139876E12, 3524.0], [1.79139846E12, 2753.0], [1.79139816E12, 1201.8333333333333], [1.79139786E12, 935.0], [1.79139756E12, 1529.9166666666667], [1.79139918E12, 1210.857142857143], [1.79139888E12, 1868.5], [1.79139858E12, 1788.1666666666665], [1.79139828E12, 800.8], [1.79139798E12, 1713.2222222222224], [1.79139768E12, 2401.2999999999997], [1.7913993E12, 2128.5], [1.791399E12, 2239.2], [1.7913987E12, 1755.875]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913993E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 800.2, "minX": 1.7913975E12, "maxY": 6702.153846153845, "series": [{"data": [[1.7913984E12, 2655.0000000000005], [1.7913981E12, 1949.75], [1.7913978E12, 6702.153846153845], [1.7913975E12, 1409.1428571428573], [1.79139912E12, 1448.0], [1.79139882E12, 1865.6666666666667], [1.79139852E12, 2319.2999999999997], [1.79139822E12, 1913.2222222222222], [1.79139792E12, 3034.2000000000003], [1.79139762E12, 2058.7272727272725], [1.79139924E12, 1879.5], [1.79139894E12, 3276.666666666667], [1.79139864E12, 1444.8333333333333], [1.79139834E12, 1858.6666666666667], [1.79139804E12, 1545.0], [1.79139774E12, 2384.4], [1.79139906E12, 2127.4444444444443], [1.79139876E12, 3524.0], [1.79139846E12, 2753.0], [1.79139816E12, 1201.8333333333333], [1.79139786E12, 934.6666666666666], [1.79139756E12, 1529.9166666666667], [1.79139918E12, 1210.857142857143], [1.79139888E12, 1868.5], [1.79139858E12, 1788.1666666666665], [1.79139828E12, 800.2], [1.79139798E12, 1713.0], [1.79139768E12, 2401.2000000000003], [1.7913993E12, 2128.5], [1.791399E12, 2239.2], [1.7913987E12, 1755.7500000000002]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913993E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.285714285714285, "minX": 1.7913975E12, "maxY": 18.22222222222222, "series": [{"data": [[1.7913984E12, 10.272727272727272], [1.7913981E12, 9.124999999999998], [1.7913978E12, 8.846153846153845], [1.7913975E12, 13.714285714285714], [1.79139912E12, 10.571428571428571], [1.79139882E12, 11.666666666666666], [1.79139852E12, 9.0], [1.79139822E12, 8.88888888888889], [1.79139792E12, 10.0], [1.79139762E12, 12.181818181818182], [1.79139924E12, 9.875], [1.79139894E12, 8.666666666666666], [1.79139864E12, 9.0], [1.79139834E12, 9.166666666666666], [1.79139804E12, 8.285714285714285], [1.79139774E12, 9.4], [1.79139906E12, 10.333333333333332], [1.79139876E12, 15.25], [1.79139846E12, 10.624999999999998], [1.79139816E12, 10.333333333333332], [1.79139786E12, 10.833333333333334], [1.79139756E12, 10.666666666666666], [1.79139918E12, 8.571428571428571], [1.79139888E12, 9.0], [1.79139858E12, 8.833333333333334], [1.79139828E12, 9.8], [1.79139798E12, 18.22222222222222], [1.79139768E12, 8.699999999999998], [1.7913993E12, 8.5], [1.791399E12, 9.2], [1.7913987E12, 8.625]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913993E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.7913975E12, "maxY": 12855.0, "series": [{"data": [[1.7913984E12, 4611.0], [1.7913981E12, 3768.0], [1.7913978E12, 12855.0], [1.7913975E12, 5241.0], [1.79139912E12, 4329.0], [1.79139882E12, 4371.0], [1.79139852E12, 7192.0], [1.79139822E12, 3661.0], [1.79139792E12, 5818.0], [1.79139762E12, 4678.0], [1.79139924E12, 3946.0], [1.79139894E12, 10201.0], [1.79139864E12, 3566.0], [1.79139834E12, 5344.0], [1.79139804E12, 2608.0], [1.79139774E12, 3992.0], [1.79139906E12, 6610.0], [1.79139876E12, 6310.0], [1.79139846E12, 4518.0], [1.79139816E12, 3055.0], [1.79139786E12, 2159.0], [1.79139756E12, 4174.0], [1.79139918E12, 3143.0], [1.79139888E12, 2166.0], [1.79139858E12, 3096.0], [1.79139828E12, 3176.0], [1.79139798E12, 3368.0], [1.79139768E12, 4996.0], [1.7913993E12, 3613.0], [1.791399E12, 2937.0], [1.7913987E12, 3114.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7913984E12, 4433.200000000001], [1.7913981E12, 3768.0], [1.7913978E12, 11860.599999999999], [1.7913975E12, 5241.0], [1.79139912E12, 4329.0], [1.79139882E12, 3978.0000000000014], [1.79139852E12, 7008.700000000001], [1.79139822E12, 3661.0], [1.79139792E12, 5709.400000000001], [1.79139762E12, 4537.8], [1.79139924E12, 3946.0], [1.79139894E12, 10201.0], [1.79139864E12, 3566.0], [1.79139834E12, 5344.0], [1.79139804E12, 2608.0], [1.79139774E12, 3992.0], [1.79139906E12, 6610.0], [1.79139876E12, 6310.0], [1.79139846E12, 4518.0], [1.79139816E12, 3055.0], [1.79139786E12, 2159.0], [1.79139756E12, 3895.6000000000013], [1.79139918E12, 3143.0], [1.79139888E12, 2166.0], [1.79139858E12, 3096.0], [1.79139828E12, 3176.0], [1.79139798E12, 3368.0], [1.79139768E12, 4822.800000000001], [1.7913993E12, 3613.0], [1.791399E12, 2937.0], [1.7913987E12, 3114.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7913984E12, 4611.0], [1.7913981E12, 3768.0], [1.7913978E12, 12855.0], [1.7913975E12, 5241.0], [1.79139912E12, 4329.0], [1.79139882E12, 4371.0], [1.79139852E12, 7192.0], [1.79139822E12, 3661.0], [1.79139792E12, 5818.0], [1.79139762E12, 4678.0], [1.79139924E12, 3946.0], [1.79139894E12, 10201.0], [1.79139864E12, 3566.0], [1.79139834E12, 5344.0], [1.79139804E12, 2608.0], [1.79139774E12, 3992.0], [1.79139906E12, 6610.0], [1.79139876E12, 6310.0], [1.79139846E12, 4518.0], [1.79139816E12, 3055.0], [1.79139786E12, 2159.0], [1.79139756E12, 4174.0], [1.79139918E12, 3143.0], [1.79139888E12, 2166.0], [1.79139858E12, 3096.0], [1.79139828E12, 3176.0], [1.79139798E12, 3368.0], [1.79139768E12, 4996.0], [1.7913993E12, 3613.0], [1.791399E12, 2937.0], [1.7913987E12, 3114.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7913984E12, 4611.0], [1.7913981E12, 3768.0], [1.7913978E12, 12855.0], [1.7913975E12, 5241.0], [1.79139912E12, 4329.0], [1.79139882E12, 4371.0], [1.79139852E12, 7192.0], [1.79139822E12, 3661.0], [1.79139792E12, 5818.0], [1.79139762E12, 4678.0], [1.79139924E12, 3946.0], [1.79139894E12, 10201.0], [1.79139864E12, 3566.0], [1.79139834E12, 5344.0], [1.79139804E12, 2608.0], [1.79139774E12, 3992.0], [1.79139906E12, 6610.0], [1.79139876E12, 6310.0], [1.79139846E12, 4518.0], [1.79139816E12, 3055.0], [1.79139786E12, 2159.0], [1.79139756E12, 4174.0], [1.79139918E12, 3143.0], [1.79139888E12, 2166.0], [1.79139858E12, 3096.0], [1.79139828E12, 3176.0], [1.79139798E12, 3368.0], [1.79139768E12, 4996.0], [1.7913993E12, 3613.0], [1.791399E12, 2937.0], [1.7913987E12, 3114.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7913984E12, 183.0], [1.7913981E12, 214.0], [1.7913978E12, 209.0], [1.7913975E12, 202.0], [1.79139912E12, 222.0], [1.79139882E12, 215.0], [1.79139852E12, 196.0], [1.79139822E12, 215.0], [1.79139792E12, 234.0], [1.79139762E12, 204.0], [1.79139924E12, 205.0], [1.79139894E12, 185.0], [1.79139864E12, 184.0], [1.79139834E12, 200.0], [1.79139804E12, 212.0], [1.79139774E12, 1037.0], [1.79139906E12, 197.0], [1.79139876E12, 187.0], [1.79139846E12, 195.0], [1.79139816E12, 197.0], [1.79139786E12, 241.0], [1.79139756E12, 200.0], [1.79139918E12, 207.0], [1.79139888E12, 1571.0], [1.79139858E12, 221.0], [1.79139828E12, 200.0], [1.79139798E12, 186.0], [1.79139768E12, 186.0], [1.7913993E12, 1034.0], [1.791399E12, 1374.0], [1.7913987E12, 210.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7913984E12, 2723.0], [1.7913981E12, 2027.5], [1.7913978E12, 8276.0], [1.7913975E12, 1240.0], [1.79139912E12, 237.0], [1.79139882E12, 1949.5], [1.79139852E12, 1454.0], [1.79139822E12, 2059.0], [1.79139792E12, 3524.0], [1.79139762E12, 2156.0], [1.79139924E12, 1881.0], [1.79139894E12, 1599.0], [1.79139864E12, 677.5], [1.79139834E12, 1379.0], [1.79139804E12, 1847.0], [1.79139774E12, 1996.0], [1.79139906E12, 1672.0], [1.79139876E12, 3799.5], [1.79139846E12, 3112.5], [1.79139816E12, 947.0], [1.79139786E12, 707.0], [1.79139756E12, 1280.5], [1.79139918E12, 932.0], [1.79139888E12, 1868.5], [1.79139858E12, 1700.5], [1.79139828E12, 210.0], [1.79139798E12, 1800.0], [1.79139768E12, 2363.5], [1.7913993E12, 1933.5], [1.791399E12, 2483.0], [1.7913987E12, 1368.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913993E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1263.0, "minX": 1.0, "maxY": 2258.0, "series": [{"data": [[1.0, 1736.0], [2.0, 2258.0], [3.0, 1263.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1263.0, "minX": 1.0, "maxY": 2258.0, "series": [{"data": [[1.0, 1736.0], [2.0, 2258.0], [3.0, 1263.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7913975E12, "maxY": 0.2, "series": [{"data": [[1.7913984E12, 0.16666666666666666], [1.7913981E12, 0.13333333333333333], [1.7913978E12, 0.15], [1.7913975E12, 0.13333333333333333], [1.79139912E12, 0.11666666666666667], [1.79139882E12, 0.2], [1.79139852E12, 0.16666666666666666], [1.79139822E12, 0.15], [1.79139792E12, 0.16666666666666666], [1.79139762E12, 0.16666666666666666], [1.79139924E12, 0.13333333333333333], [1.79139894E12, 0.15], [1.79139864E12, 0.11666666666666667], [1.79139834E12, 0.1], [1.79139804E12, 0.11666666666666667], [1.79139774E12, 0.13333333333333333], [1.79139906E12, 0.15], [1.79139876E12, 0.05], [1.79139846E12, 0.13333333333333333], [1.79139816E12, 0.1], [1.79139786E12, 0.1], [1.79139756E12, 0.2], [1.79139918E12, 0.11666666666666667], [1.79139888E12, 0.03333333333333333], [1.79139858E12, 0.1], [1.79139828E12, 0.1], [1.79139798E12, 0.15], [1.79139768E12, 0.18333333333333332], [1.7913993E12, 0.06666666666666667], [1.791399E12, 0.08333333333333333], [1.7913987E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913993E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7913975E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.7913984E12, 0.18333333333333332], [1.7913981E12, 0.13333333333333333], [1.7913978E12, 0.21666666666666667], [1.7913975E12, 0.11666666666666667], [1.79139912E12, 0.11666666666666667], [1.79139882E12, 0.2], [1.79139852E12, 0.16666666666666666], [1.79139822E12, 0.15], [1.79139792E12, 0.16666666666666666], [1.79139762E12, 0.18333333333333332], [1.79139924E12, 0.13333333333333333], [1.79139894E12, 0.15], [1.79139864E12, 0.1], [1.79139834E12, 0.1], [1.79139804E12, 0.11666666666666667], [1.79139774E12, 0.08333333333333333], [1.79139906E12, 0.15], [1.79139876E12, 0.06666666666666667], [1.79139846E12, 0.13333333333333333], [1.79139816E12, 0.1], [1.79139786E12, 0.1], [1.79139756E12, 0.2], [1.79139918E12, 0.11666666666666667], [1.79139888E12, 0.03333333333333333], [1.79139858E12, 0.1], [1.79139828E12, 0.08333333333333333], [1.79139798E12, 0.15], [1.79139768E12, 0.16666666666666666], [1.7913993E12, 0.06666666666666667], [1.791399E12, 0.08333333333333333], [1.7913987E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913993E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7913975E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.7913984E12, 0.18333333333333332], [1.7913981E12, 0.13333333333333333], [1.7913978E12, 0.21666666666666667], [1.7913975E12, 0.11666666666666667], [1.79139912E12, 0.11666666666666667], [1.79139882E12, 0.2], [1.79139852E12, 0.16666666666666666], [1.79139822E12, 0.15], [1.79139792E12, 0.16666666666666666], [1.79139762E12, 0.18333333333333332], [1.79139924E12, 0.13333333333333333], [1.79139894E12, 0.15], [1.79139864E12, 0.1], [1.79139834E12, 0.1], [1.79139804E12, 0.11666666666666667], [1.79139774E12, 0.08333333333333333], [1.79139906E12, 0.15], [1.79139876E12, 0.06666666666666667], [1.79139846E12, 0.13333333333333333], [1.79139816E12, 0.1], [1.79139786E12, 0.1], [1.79139756E12, 0.2], [1.79139918E12, 0.11666666666666667], [1.79139888E12, 0.03333333333333333], [1.79139858E12, 0.1], [1.79139828E12, 0.08333333333333333], [1.79139798E12, 0.15], [1.79139768E12, 0.16666666666666666], [1.7913993E12, 0.06666666666666667], [1.791399E12, 0.08333333333333333], [1.7913987E12, 0.13333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913993E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7913975E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.7913984E12, 0.18333333333333332], [1.7913981E12, 0.13333333333333333], [1.7913978E12, 0.21666666666666667], [1.7913975E12, 0.11666666666666667], [1.79139912E12, 0.11666666666666667], [1.79139882E12, 0.2], [1.79139852E12, 0.16666666666666666], [1.79139822E12, 0.15], [1.79139792E12, 0.16666666666666666], [1.79139762E12, 0.18333333333333332], [1.79139924E12, 0.13333333333333333], [1.79139894E12, 0.15], [1.79139864E12, 0.1], [1.79139834E12, 0.1], [1.79139804E12, 0.11666666666666667], [1.79139774E12, 0.08333333333333333], [1.79139906E12, 0.15], [1.79139876E12, 0.06666666666666667], [1.79139846E12, 0.13333333333333333], [1.79139816E12, 0.1], [1.79139786E12, 0.1], [1.79139756E12, 0.2], [1.79139918E12, 0.11666666666666667], [1.79139888E12, 0.03333333333333333], [1.79139858E12, 0.1], [1.79139828E12, 0.08333333333333333], [1.79139798E12, 0.15], [1.79139768E12, 0.16666666666666666], [1.7913993E12, 0.06666666666666667], [1.791399E12, 0.08333333333333333], [1.7913987E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913993E12, "title": "Total Transactions Per Second"}},
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

