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
        data: {"result": {"minY": 167.0, "minX": 0.0, "maxY": 6960.0, "series": [{"data": [[0.0, 167.0], [0.1, 167.0], [0.2, 167.0], [0.3, 167.0], [0.4, 167.0], [0.5, 167.0], [0.6, 167.0], [0.7, 167.0], [0.8, 167.0], [0.9, 167.0], [1.0, 174.0], [1.1, 174.0], [1.2, 174.0], [1.3, 174.0], [1.4, 174.0], [1.5, 174.0], [1.6, 174.0], [1.7, 174.0], [1.8, 174.0], [1.9, 174.0], [2.0, 191.0], [2.1, 191.0], [2.2, 191.0], [2.3, 191.0], [2.4, 191.0], [2.5, 191.0], [2.6, 191.0], [2.7, 191.0], [2.8, 191.0], [2.9, 191.0], [3.0, 195.0], [3.1, 195.0], [3.2, 195.0], [3.3, 195.0], [3.4, 195.0], [3.5, 195.0], [3.6, 195.0], [3.7, 195.0], [3.8, 195.0], [3.9, 195.0], [4.0, 197.0], [4.1, 197.0], [4.2, 197.0], [4.3, 197.0], [4.4, 197.0], [4.5, 197.0], [4.6, 197.0], [4.7, 197.0], [4.8, 197.0], [4.9, 197.0], [5.0, 197.0], [5.1, 197.0], [5.2, 197.0], [5.3, 197.0], [5.4, 197.0], [5.5, 197.0], [5.6, 197.0], [5.7, 197.0], [5.8, 197.0], [5.9, 197.0], [6.0, 197.0], [6.1, 197.0], [6.2, 197.0], [6.3, 197.0], [6.4, 197.0], [6.5, 197.0], [6.6, 197.0], [6.7, 197.0], [6.8, 197.0], [6.9, 197.0], [7.0, 197.0], [7.1, 197.0], [7.2, 197.0], [7.3, 197.0], [7.4, 197.0], [7.5, 197.0], [7.6, 197.0], [7.7, 197.0], [7.8, 197.0], [7.9, 197.0], [8.0, 203.0], [8.1, 203.0], [8.2, 203.0], [8.3, 203.0], [8.4, 203.0], [8.5, 203.0], [8.6, 203.0], [8.7, 203.0], [8.8, 203.0], [8.9, 203.0], [9.0, 205.0], [9.1, 205.0], [9.2, 205.0], [9.3, 205.0], [9.4, 205.0], [9.5, 205.0], [9.6, 205.0], [9.7, 205.0], [9.8, 205.0], [9.9, 205.0], [10.0, 205.0], [10.1, 205.0], [10.2, 205.0], [10.3, 205.0], [10.4, 205.0], [10.5, 205.0], [10.6, 205.0], [10.7, 205.0], [10.8, 205.0], [10.9, 205.0], [11.0, 207.0], [11.1, 207.0], [11.2, 207.0], [11.3, 207.0], [11.4, 207.0], [11.5, 207.0], [11.6, 207.0], [11.7, 207.0], [11.8, 207.0], [11.9, 207.0], [12.0, 209.0], [12.1, 209.0], [12.2, 209.0], [12.3, 209.0], [12.4, 209.0], [12.5, 209.0], [12.6, 209.0], [12.7, 209.0], [12.8, 209.0], [12.9, 209.0], [13.0, 210.0], [13.1, 210.0], [13.2, 210.0], [13.3, 210.0], [13.4, 210.0], [13.5, 210.0], [13.6, 210.0], [13.7, 210.0], [13.8, 210.0], [13.9, 210.0], [14.0, 211.0], [14.1, 211.0], [14.2, 211.0], [14.3, 211.0], [14.4, 211.0], [14.5, 211.0], [14.6, 211.0], [14.7, 211.0], [14.8, 211.0], [14.9, 211.0], [15.0, 212.0], [15.1, 212.0], [15.2, 212.0], [15.3, 212.0], [15.4, 212.0], [15.5, 212.0], [15.6, 212.0], [15.7, 212.0], [15.8, 212.0], [15.9, 212.0], [16.0, 213.0], [16.1, 213.0], [16.2, 213.0], [16.3, 213.0], [16.4, 213.0], [16.5, 213.0], [16.6, 213.0], [16.7, 213.0], [16.8, 213.0], [16.9, 213.0], [17.0, 214.0], [17.1, 214.0], [17.2, 214.0], [17.3, 214.0], [17.4, 214.0], [17.5, 214.0], [17.6, 214.0], [17.7, 214.0], [17.8, 214.0], [17.9, 214.0], [18.0, 214.0], [18.1, 214.0], [18.2, 214.0], [18.3, 214.0], [18.4, 214.0], [18.5, 214.0], [18.6, 214.0], [18.7, 214.0], [18.8, 214.0], [18.9, 214.0], [19.0, 217.0], [19.1, 217.0], [19.2, 217.0], [19.3, 217.0], [19.4, 217.0], [19.5, 217.0], [19.6, 217.0], [19.7, 217.0], [19.8, 217.0], [19.9, 217.0], [20.0, 219.0], [20.1, 219.0], [20.2, 219.0], [20.3, 219.0], [20.4, 219.0], [20.5, 219.0], [20.6, 219.0], [20.7, 219.0], [20.8, 219.0], [20.9, 219.0], [21.0, 226.0], [21.1, 226.0], [21.2, 226.0], [21.3, 226.0], [21.4, 226.0], [21.5, 226.0], [21.6, 226.0], [21.7, 226.0], [21.8, 226.0], [21.9, 226.0], [22.0, 231.0], [22.1, 231.0], [22.2, 231.0], [22.3, 231.0], [22.4, 231.0], [22.5, 231.0], [22.6, 231.0], [22.7, 231.0], [22.8, 231.0], [22.9, 231.0], [23.0, 236.0], [23.1, 236.0], [23.2, 236.0], [23.3, 236.0], [23.4, 236.0], [23.5, 236.0], [23.6, 236.0], [23.7, 236.0], [23.8, 236.0], [23.9, 236.0], [24.0, 239.0], [24.1, 239.0], [24.2, 239.0], [24.3, 239.0], [24.4, 239.0], [24.5, 239.0], [24.6, 239.0], [24.7, 239.0], [24.8, 239.0], [24.9, 239.0], [25.0, 242.0], [25.1, 242.0], [25.2, 242.0], [25.3, 242.0], [25.4, 242.0], [25.5, 242.0], [25.6, 242.0], [25.7, 242.0], [25.8, 242.0], [25.9, 242.0], [26.0, 253.0], [26.1, 253.0], [26.2, 253.0], [26.3, 253.0], [26.4, 253.0], [26.5, 253.0], [26.6, 253.0], [26.7, 253.0], [26.8, 253.0], [26.9, 253.0], [27.0, 533.0], [27.1, 533.0], [27.2, 533.0], [27.3, 533.0], [27.4, 533.0], [27.5, 533.0], [27.6, 533.0], [27.7, 533.0], [27.8, 533.0], [27.9, 533.0], [28.0, 585.0], [28.1, 585.0], [28.2, 585.0], [28.3, 585.0], [28.4, 585.0], [28.5, 585.0], [28.6, 585.0], [28.7, 585.0], [28.8, 585.0], [28.9, 585.0], [29.0, 824.0], [29.1, 824.0], [29.2, 824.0], [29.3, 824.0], [29.4, 824.0], [29.5, 824.0], [29.6, 824.0], [29.7, 824.0], [29.8, 824.0], [29.9, 824.0], [30.0, 998.0], [30.1, 998.0], [30.2, 998.0], [30.3, 998.0], [30.4, 998.0], [30.5, 998.0], [30.6, 998.0], [30.7, 998.0], [30.8, 998.0], [30.9, 998.0], [31.0, 1002.0], [31.1, 1002.0], [31.2, 1002.0], [31.3, 1002.0], [31.4, 1002.0], [31.5, 1002.0], [31.6, 1002.0], [31.7, 1002.0], [31.8, 1002.0], [31.9, 1002.0], [32.0, 1042.0], [32.1, 1042.0], [32.2, 1042.0], [32.3, 1042.0], [32.4, 1042.0], [32.5, 1042.0], [32.6, 1042.0], [32.7, 1042.0], [32.8, 1042.0], [32.9, 1042.0], [33.0, 1054.0], [33.1, 1054.0], [33.2, 1054.0], [33.3, 1054.0], [33.4, 1054.0], [33.5, 1054.0], [33.6, 1054.0], [33.7, 1054.0], [33.8, 1054.0], [33.9, 1054.0], [34.0, 1056.0], [34.1, 1056.0], [34.2, 1056.0], [34.3, 1056.0], [34.4, 1056.0], [34.5, 1056.0], [34.6, 1056.0], [34.7, 1056.0], [34.8, 1056.0], [34.9, 1056.0], [35.0, 1097.0], [35.1, 1097.0], [35.2, 1097.0], [35.3, 1097.0], [35.4, 1097.0], [35.5, 1097.0], [35.6, 1097.0], [35.7, 1097.0], [35.8, 1097.0], [35.9, 1097.0], [36.0, 1100.0], [36.1, 1100.0], [36.2, 1100.0], [36.3, 1100.0], [36.4, 1100.0], [36.5, 1100.0], [36.6, 1100.0], [36.7, 1100.0], [36.8, 1100.0], [36.9, 1100.0], [37.0, 1195.0], [37.1, 1195.0], [37.2, 1195.0], [37.3, 1195.0], [37.4, 1195.0], [37.5, 1195.0], [37.6, 1195.0], [37.7, 1195.0], [37.8, 1195.0], [37.9, 1195.0], [38.0, 1307.0], [38.1, 1307.0], [38.2, 1307.0], [38.3, 1307.0], [38.4, 1307.0], [38.5, 1307.0], [38.6, 1307.0], [38.7, 1307.0], [38.8, 1307.0], [38.9, 1307.0], [39.0, 1316.0], [39.1, 1316.0], [39.2, 1316.0], [39.3, 1316.0], [39.4, 1316.0], [39.5, 1316.0], [39.6, 1316.0], [39.7, 1316.0], [39.8, 1316.0], [39.9, 1316.0], [40.0, 1425.0], [40.1, 1425.0], [40.2, 1425.0], [40.3, 1425.0], [40.4, 1425.0], [40.5, 1425.0], [40.6, 1425.0], [40.7, 1425.0], [40.8, 1425.0], [40.9, 1425.0], [41.0, 1478.0], [41.1, 1478.0], [41.2, 1478.0], [41.3, 1478.0], [41.4, 1478.0], [41.5, 1478.0], [41.6, 1478.0], [41.7, 1478.0], [41.8, 1478.0], [41.9, 1478.0], [42.0, 1506.0], [42.1, 1506.0], [42.2, 1506.0], [42.3, 1506.0], [42.4, 1506.0], [42.5, 1506.0], [42.6, 1506.0], [42.7, 1506.0], [42.8, 1506.0], [42.9, 1506.0], [43.0, 1509.0], [43.1, 1509.0], [43.2, 1509.0], [43.3, 1509.0], [43.4, 1509.0], [43.5, 1509.0], [43.6, 1509.0], [43.7, 1509.0], [43.8, 1509.0], [43.9, 1509.0], [44.0, 1525.0], [44.1, 1525.0], [44.2, 1525.0], [44.3, 1525.0], [44.4, 1525.0], [44.5, 1525.0], [44.6, 1525.0], [44.7, 1525.0], [44.8, 1525.0], [44.9, 1525.0], [45.0, 1642.0], [45.1, 1642.0], [45.2, 1642.0], [45.3, 1642.0], [45.4, 1642.0], [45.5, 1642.0], [45.6, 1642.0], [45.7, 1642.0], [45.8, 1642.0], [45.9, 1642.0], [46.0, 1657.0], [46.1, 1657.0], [46.2, 1657.0], [46.3, 1657.0], [46.4, 1657.0], [46.5, 1657.0], [46.6, 1657.0], [46.7, 1657.0], [46.8, 1657.0], [46.9, 1657.0], [47.0, 1665.0], [47.1, 1665.0], [47.2, 1665.0], [47.3, 1665.0], [47.4, 1665.0], [47.5, 1665.0], [47.6, 1665.0], [47.7, 1665.0], [47.8, 1665.0], [47.9, 1665.0], [48.0, 1738.0], [48.1, 1738.0], [48.2, 1738.0], [48.3, 1738.0], [48.4, 1738.0], [48.5, 1738.0], [48.6, 1738.0], [48.7, 1738.0], [48.8, 1738.0], [48.9, 1738.0], [49.0, 1753.0], [49.1, 1753.0], [49.2, 1753.0], [49.3, 1753.0], [49.4, 1753.0], [49.5, 1753.0], [49.6, 1753.0], [49.7, 1753.0], [49.8, 1753.0], [49.9, 1753.0], [50.0, 1762.0], [50.1, 1762.0], [50.2, 1762.0], [50.3, 1762.0], [50.4, 1762.0], [50.5, 1762.0], [50.6, 1762.0], [50.7, 1762.0], [50.8, 1762.0], [50.9, 1762.0], [51.0, 1771.0], [51.1, 1771.0], [51.2, 1771.0], [51.3, 1771.0], [51.4, 1771.0], [51.5, 1771.0], [51.6, 1771.0], [51.7, 1771.0], [51.8, 1771.0], [51.9, 1771.0], [52.0, 1862.0], [52.1, 1862.0], [52.2, 1862.0], [52.3, 1862.0], [52.4, 1862.0], [52.5, 1862.0], [52.6, 1862.0], [52.7, 1862.0], [52.8, 1862.0], [52.9, 1862.0], [53.0, 1898.0], [53.1, 1898.0], [53.2, 1898.0], [53.3, 1898.0], [53.4, 1898.0], [53.5, 1898.0], [53.6, 1898.0], [53.7, 1898.0], [53.8, 1898.0], [53.9, 1898.0], [54.0, 1900.0], [54.1, 1900.0], [54.2, 1900.0], [54.3, 1900.0], [54.4, 1900.0], [54.5, 1900.0], [54.6, 1900.0], [54.7, 1900.0], [54.8, 1900.0], [54.9, 1900.0], [55.0, 2046.0], [55.1, 2046.0], [55.2, 2046.0], [55.3, 2046.0], [55.4, 2046.0], [55.5, 2046.0], [55.6, 2046.0], [55.7, 2046.0], [55.8, 2046.0], [55.9, 2046.0], [56.0, 2162.0], [56.1, 2162.0], [56.2, 2162.0], [56.3, 2162.0], [56.4, 2162.0], [56.5, 2162.0], [56.6, 2162.0], [56.7, 2162.0], [56.8, 2162.0], [56.9, 2162.0], [57.0, 2268.0], [57.1, 2268.0], [57.2, 2268.0], [57.3, 2268.0], [57.4, 2268.0], [57.5, 2268.0], [57.6, 2268.0], [57.7, 2268.0], [57.8, 2268.0], [57.9, 2268.0], [58.0, 2339.0], [58.1, 2339.0], [58.2, 2339.0], [58.3, 2339.0], [58.4, 2339.0], [58.5, 2339.0], [58.6, 2339.0], [58.7, 2339.0], [58.8, 2339.0], [58.9, 2339.0], [59.0, 2431.0], [59.1, 2431.0], [59.2, 2431.0], [59.3, 2431.0], [59.4, 2431.0], [59.5, 2431.0], [59.6, 2431.0], [59.7, 2431.0], [59.8, 2431.0], [59.9, 2431.0], [60.0, 2523.0], [60.1, 2523.0], [60.2, 2523.0], [60.3, 2523.0], [60.4, 2523.0], [60.5, 2523.0], [60.6, 2523.0], [60.7, 2523.0], [60.8, 2523.0], [60.9, 2523.0], [61.0, 2641.0], [61.1, 2641.0], [61.2, 2641.0], [61.3, 2641.0], [61.4, 2641.0], [61.5, 2641.0], [61.6, 2641.0], [61.7, 2641.0], [61.8, 2641.0], [61.9, 2641.0], [62.0, 2706.0], [62.1, 2706.0], [62.2, 2706.0], [62.3, 2706.0], [62.4, 2706.0], [62.5, 2706.0], [62.6, 2706.0], [62.7, 2706.0], [62.8, 2706.0], [62.9, 2706.0], [63.0, 2708.0], [63.1, 2708.0], [63.2, 2708.0], [63.3, 2708.0], [63.4, 2708.0], [63.5, 2708.0], [63.6, 2708.0], [63.7, 2708.0], [63.8, 2708.0], [63.9, 2708.0], [64.0, 2842.0], [64.1, 2842.0], [64.2, 2842.0], [64.3, 2842.0], [64.4, 2842.0], [64.5, 2842.0], [64.6, 2842.0], [64.7, 2842.0], [64.8, 2842.0], [64.9, 2842.0], [65.0, 2984.0], [65.1, 2984.0], [65.2, 2984.0], [65.3, 2984.0], [65.4, 2984.0], [65.5, 2984.0], [65.6, 2984.0], [65.7, 2984.0], [65.8, 2984.0], [65.9, 2984.0], [66.0, 2996.0], [66.1, 2996.0], [66.2, 2996.0], [66.3, 2996.0], [66.4, 2996.0], [66.5, 2996.0], [66.6, 2996.0], [66.7, 2996.0], [66.8, 2996.0], [66.9, 2996.0], [67.0, 3114.0], [67.1, 3114.0], [67.2, 3114.0], [67.3, 3114.0], [67.4, 3114.0], [67.5, 3114.0], [67.6, 3114.0], [67.7, 3114.0], [67.8, 3114.0], [67.9, 3114.0], [68.0, 3197.0], [68.1, 3197.0], [68.2, 3197.0], [68.3, 3197.0], [68.4, 3197.0], [68.5, 3197.0], [68.6, 3197.0], [68.7, 3197.0], [68.8, 3197.0], [68.9, 3197.0], [69.0, 3269.0], [69.1, 3269.0], [69.2, 3269.0], [69.3, 3269.0], [69.4, 3269.0], [69.5, 3269.0], [69.6, 3269.0], [69.7, 3269.0], [69.8, 3269.0], [69.9, 3269.0], [70.0, 3711.0], [70.1, 3711.0], [70.2, 3711.0], [70.3, 3711.0], [70.4, 3711.0], [70.5, 3711.0], [70.6, 3711.0], [70.7, 3711.0], [70.8, 3711.0], [70.9, 3711.0], [71.0, 3776.0], [71.1, 3776.0], [71.2, 3776.0], [71.3, 3776.0], [71.4, 3776.0], [71.5, 3776.0], [71.6, 3776.0], [71.7, 3776.0], [71.8, 3776.0], [71.9, 3776.0], [72.0, 3784.0], [72.1, 3784.0], [72.2, 3784.0], [72.3, 3784.0], [72.4, 3784.0], [72.5, 3784.0], [72.6, 3784.0], [72.7, 3784.0], [72.8, 3784.0], [72.9, 3784.0], [73.0, 3791.0], [73.1, 3791.0], [73.2, 3791.0], [73.3, 3791.0], [73.4, 3791.0], [73.5, 3791.0], [73.6, 3791.0], [73.7, 3791.0], [73.8, 3791.0], [73.9, 3791.0], [74.0, 3921.0], [74.1, 3921.0], [74.2, 3921.0], [74.3, 3921.0], [74.4, 3921.0], [74.5, 3921.0], [74.6, 3921.0], [74.7, 3921.0], [74.8, 3921.0], [74.9, 3921.0], [75.0, 3961.0], [75.1, 3961.0], [75.2, 3961.0], [75.3, 3961.0], [75.4, 3961.0], [75.5, 3961.0], [75.6, 3961.0], [75.7, 3961.0], [75.8, 3961.0], [75.9, 3961.0], [76.0, 3962.0], [76.1, 3962.0], [76.2, 3962.0], [76.3, 3962.0], [76.4, 3962.0], [76.5, 3962.0], [76.6, 3962.0], [76.7, 3962.0], [76.8, 3962.0], [76.9, 3962.0], [77.0, 3963.0], [77.1, 3963.0], [77.2, 3963.0], [77.3, 3963.0], [77.4, 3963.0], [77.5, 3963.0], [77.6, 3963.0], [77.7, 3963.0], [77.8, 3963.0], [77.9, 3963.0], [78.0, 3992.0], [78.1, 3992.0], [78.2, 3992.0], [78.3, 3992.0], [78.4, 3992.0], [78.5, 3992.0], [78.6, 3992.0], [78.7, 3992.0], [78.8, 3992.0], [78.9, 3992.0], [79.0, 4026.0], [79.1, 4026.0], [79.2, 4026.0], [79.3, 4026.0], [79.4, 4026.0], [79.5, 4026.0], [79.6, 4026.0], [79.7, 4026.0], [79.8, 4026.0], [79.9, 4026.0], [80.0, 4098.0], [80.1, 4098.0], [80.2, 4098.0], [80.3, 4098.0], [80.4, 4098.0], [80.5, 4098.0], [80.6, 4098.0], [80.7, 4098.0], [80.8, 4098.0], [80.9, 4098.0], [81.0, 4118.0], [81.1, 4118.0], [81.2, 4118.0], [81.3, 4118.0], [81.4, 4118.0], [81.5, 4118.0], [81.6, 4118.0], [81.7, 4118.0], [81.8, 4118.0], [81.9, 4118.0], [82.0, 4140.0], [82.1, 4140.0], [82.2, 4140.0], [82.3, 4140.0], [82.4, 4140.0], [82.5, 4140.0], [82.6, 4140.0], [82.7, 4140.0], [82.8, 4140.0], [82.9, 4140.0], [83.0, 4255.0], [83.1, 4255.0], [83.2, 4255.0], [83.3, 4255.0], [83.4, 4255.0], [83.5, 4255.0], [83.6, 4255.0], [83.7, 4255.0], [83.8, 4255.0], [83.9, 4255.0], [84.0, 4292.0], [84.1, 4292.0], [84.2, 4292.0], [84.3, 4292.0], [84.4, 4292.0], [84.5, 4292.0], [84.6, 4292.0], [84.7, 4292.0], [84.8, 4292.0], [84.9, 4292.0], [85.0, 4460.0], [85.1, 4460.0], [85.2, 4460.0], [85.3, 4460.0], [85.4, 4460.0], [85.5, 4460.0], [85.6, 4460.0], [85.7, 4460.0], [85.8, 4460.0], [85.9, 4460.0], [86.0, 4523.0], [86.1, 4523.0], [86.2, 4523.0], [86.3, 4523.0], [86.4, 4523.0], [86.5, 4523.0], [86.6, 4523.0], [86.7, 4523.0], [86.8, 4523.0], [86.9, 4523.0], [87.0, 4696.0], [87.1, 4696.0], [87.2, 4696.0], [87.3, 4696.0], [87.4, 4696.0], [87.5, 4696.0], [87.6, 4696.0], [87.7, 4696.0], [87.8, 4696.0], [87.9, 4696.0], [88.0, 4771.0], [88.1, 4771.0], [88.2, 4771.0], [88.3, 4771.0], [88.4, 4771.0], [88.5, 4771.0], [88.6, 4771.0], [88.7, 4771.0], [88.8, 4771.0], [88.9, 4771.0], [89.0, 4930.0], [89.1, 4930.0], [89.2, 4930.0], [89.3, 4930.0], [89.4, 4930.0], [89.5, 4930.0], [89.6, 4930.0], [89.7, 4930.0], [89.8, 4930.0], [89.9, 4930.0], [90.0, 5009.0], [90.1, 5009.0], [90.2, 5009.0], [90.3, 5009.0], [90.4, 5009.0], [90.5, 5009.0], [90.6, 5009.0], [90.7, 5009.0], [90.8, 5009.0], [90.9, 5009.0], [91.0, 5015.0], [91.1, 5015.0], [91.2, 5015.0], [91.3, 5015.0], [91.4, 5015.0], [91.5, 5015.0], [91.6, 5015.0], [91.7, 5015.0], [91.8, 5015.0], [91.9, 5015.0], [92.0, 5029.0], [92.1, 5029.0], [92.2, 5029.0], [92.3, 5029.0], [92.4, 5029.0], [92.5, 5029.0], [92.6, 5029.0], [92.7, 5029.0], [92.8, 5029.0], [92.9, 5029.0], [93.0, 5099.0], [93.1, 5099.0], [93.2, 5099.0], [93.3, 5099.0], [93.4, 5099.0], [93.5, 5099.0], [93.6, 5099.0], [93.7, 5099.0], [93.8, 5099.0], [93.9, 5099.0], [94.0, 5147.0], [94.1, 5147.0], [94.2, 5147.0], [94.3, 5147.0], [94.4, 5147.0], [94.5, 5147.0], [94.6, 5147.0], [94.7, 5147.0], [94.8, 5147.0], [94.9, 5147.0], [95.0, 5157.0], [95.1, 5157.0], [95.2, 5157.0], [95.3, 5157.0], [95.4, 5157.0], [95.5, 5157.0], [95.6, 5157.0], [95.7, 5157.0], [95.8, 5157.0], [95.9, 5157.0], [96.0, 5904.0], [96.1, 5904.0], [96.2, 5904.0], [96.3, 5904.0], [96.4, 5904.0], [96.5, 5904.0], [96.6, 5904.0], [96.7, 5904.0], [96.8, 5904.0], [96.9, 5904.0], [97.0, 6222.0], [97.1, 6222.0], [97.2, 6222.0], [97.3, 6222.0], [97.4, 6222.0], [97.5, 6222.0], [97.6, 6222.0], [97.7, 6222.0], [97.8, 6222.0], [97.9, 6222.0], [98.0, 6880.0], [98.1, 6880.0], [98.2, 6880.0], [98.3, 6880.0], [98.4, 6880.0], [98.5, 6880.0], [98.6, 6880.0], [98.7, 6880.0], [98.8, 6880.0], [98.9, 6880.0], [99.0, 6960.0], [99.1, 6960.0], [99.2, 6960.0], [99.3, 6960.0], [99.4, 6960.0], [99.5, 6960.0], [99.6, 6960.0], [99.7, 6960.0], [99.8, 6960.0], [99.9, 6960.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 19.0, "series": [{"data": [[800.0, 1.0], [900.0, 1.0], [1000.0, 5.0], [1100.0, 2.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 3.0], [100.0, 8.0], [1600.0, 3.0], [1700.0, 4.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 2.0], [3100.0, 2.0], [200.0, 19.0], [3200.0, 1.0], [3700.0, 4.0], [3900.0, 5.0], [4000.0, 2.0], [4100.0, 2.0], [4200.0, 2.0], [4400.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [5100.0, 2.0], [4900.0, 1.0], [5000.0, 4.0], [5900.0, 1.0], [6200.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 56.0, "series": [{"data": [[0.0, 27.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 15.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 56.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.1333333333333335, "minX": 1.79148084E12, "maxY": 2.0, "series": [{"data": [[1.79148114E12, 2.0], [1.79148096E12, 1.909090909090909], [1.79148102E12, 1.2222222222222223], [1.79148084E12, 1.8333333333333328], [1.7914809E12, 1.1333333333333335], [1.79148108E12, 1.473684210526316]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148114E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1601.1578947368416, "minX": 1.0, "maxY": 6222.0, "series": [{"data": [[1.0, 1601.1578947368416], [2.0, 2433.3125], [4.0, 5157.0], [5.0, 6222.0], [3.0, 4798.666666666667]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.5700000000000005, 2236.9899999999993]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.79148084E12, "maxY": 443.4, "series": [{"data": [[1.79148114E12, 105.56666666666666], [1.79148096E12, 70.63333333333334], [1.79148102E12, 57.416666666666664], [1.79148084E12, 76.95], [1.7914809E12, 47.666666666666664], [1.79148108E12, 60.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79148114E12, 0.0], [1.79148096E12, 422.96666666666664], [1.79148102E12, 386.1], [1.79148084E12, 443.4], [1.7914809E12, 242.3], [1.79148108E12, 311.6333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148114E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1319.8666666666666, "minX": 1.79148084E12, "maxY": 3043.909090909091, "series": [{"data": [[1.79148114E12, 2837.0], [1.79148096E12, 3043.909090909091], [1.79148102E12, 1875.0555555555554], [1.79148084E12, 2629.0], [1.7914809E12, 1319.8666666666666], [1.79148108E12, 1811.2631578947367]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148114E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.79148084E12, "maxY": 3043.909090909091, "series": [{"data": [[1.79148114E12, 0.0], [1.79148096E12, 3043.909090909091], [1.79148102E12, 1875.0555555555554], [1.79148084E12, 2628.874999999999], [1.7914809E12, 1319.8], [1.79148108E12, 1811.2631578947367]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148114E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.61111111111111, "minX": 1.79148084E12, "maxY": 14.1578947368421, "series": [{"data": [[1.79148114E12, 10.5], [1.79148096E12, 10.181818181818183], [1.79148102E12, 9.61111111111111], [1.79148084E12, 10.666666666666668], [1.7914809E12, 12.200000000000001], [1.79148108E12, 14.1578947368421]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148114E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 167.0, "minX": 1.79148084E12, "maxY": 6960.0, "series": [{"data": [[1.79148096E12, 6960.0], [1.79148102E12, 5099.0], [1.79148084E12, 6222.0], [1.7914809E12, 5015.0], [1.79148108E12, 4255.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79148096E12, 6318.699999999999], [1.79148102E12, 4580.6], [1.79148084E12, 5530.5], [1.7914809E12, 3924.2000000000007], [1.79148108E12, 3921.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79148096E12, 6960.0], [1.79148102E12, 5099.0], [1.79148084E12, 6222.0], [1.7914809E12, 5015.0], [1.79148108E12, 4255.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79148096E12, 6948.0], [1.79148102E12, 5099.0], [1.79148084E12, 6142.5], [1.7914809E12, 5015.0], [1.79148108E12, 4255.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79148096E12, 217.0], [1.79148102E12, 174.0], [1.79148084E12, 191.0], [1.7914809E12, 167.0], [1.79148108E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79148096E12, 2913.0], [1.79148102E12, 1078.0], [1.79148084E12, 1766.5], [1.7914809E12, 1054.0], [1.79148108E12, 1738.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148108E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1525.0, "minX": 1.0, "maxY": 2837.0, "series": [{"data": [[1.0, 1525.0], [2.0, 2568.5], [3.0, 2523.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 2837.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2568.5, "series": [{"data": [[1.0, 1525.0], [2.0, 2568.5], [3.0, 2523.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.79148084E12, "maxY": 0.4, "series": [{"data": [[1.79148096E12, 0.3333333333333333], [1.79148102E12, 0.3], [1.79148084E12, 0.4], [1.7914809E12, 0.2833333333333333], [1.79148108E12, 0.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148084E12, "maxY": 0.4, "series": [{"data": [[1.79148096E12, 0.36666666666666664], [1.79148102E12, 0.3], [1.79148084E12, 0.4], [1.7914809E12, 0.25], [1.79148108E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79148114E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148114E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148084E12, "maxY": 0.4, "series": [{"data": [[1.79148096E12, 0.36666666666666664], [1.79148102E12, 0.3], [1.79148084E12, 0.4], [1.7914809E12, 0.25], [1.79148108E12, 0.31666666666666665]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79148114E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148114E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148084E12, "maxY": 0.4, "series": [{"data": [[1.79148096E12, 0.36666666666666664], [1.79148102E12, 0.3], [1.79148084E12, 0.4], [1.7914809E12, 0.25], [1.79148108E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79148114E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148114E12, "title": "Total Transactions Per Second"}},
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

