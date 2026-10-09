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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 7368.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 188.0], [0.3, 188.0], [0.4, 188.0], [0.5, 188.0], [0.6, 188.0], [0.7, 188.0], [0.8, 188.0], [0.9, 188.0], [1.0, 188.0], [1.1, 188.0], [1.2, 188.0], [1.3, 188.0], [1.4, 188.0], [1.5, 188.0], [1.6, 188.0], [1.7, 188.0], [1.8, 188.0], [1.9, 188.0], [2.0, 188.0], [2.1, 188.0], [2.2, 188.0], [2.3, 188.0], [2.4, 188.0], [2.5, 191.0], [2.6, 191.0], [2.7, 191.0], [2.8, 191.0], [2.9, 191.0], [3.0, 191.0], [3.1, 191.0], [3.2, 191.0], [3.3, 191.0], [3.4, 191.0], [3.5, 191.0], [3.6, 191.0], [3.7, 191.0], [3.8, 197.0], [3.9, 197.0], [4.0, 197.0], [4.1, 197.0], [4.2, 197.0], [4.3, 197.0], [4.4, 197.0], [4.5, 197.0], [4.6, 197.0], [4.7, 197.0], [4.8, 197.0], [4.9, 197.0], [5.0, 200.0], [5.1, 200.0], [5.2, 200.0], [5.3, 200.0], [5.4, 200.0], [5.5, 200.0], [5.6, 200.0], [5.7, 200.0], [5.8, 200.0], [5.9, 200.0], [6.0, 200.0], [6.1, 200.0], [6.2, 200.0], [6.3, 205.0], [6.4, 205.0], [6.5, 205.0], [6.6, 205.0], [6.7, 205.0], [6.8, 205.0], [6.9, 205.0], [7.0, 205.0], [7.1, 205.0], [7.2, 205.0], [7.3, 205.0], [7.4, 205.0], [7.5, 205.0], [7.6, 205.0], [7.7, 205.0], [7.8, 205.0], [7.9, 205.0], [8.0, 205.0], [8.1, 205.0], [8.2, 205.0], [8.3, 205.0], [8.4, 205.0], [8.5, 205.0], [8.6, 205.0], [8.7, 205.0], [8.8, 207.0], [8.9, 207.0], [9.0, 207.0], [9.1, 207.0], [9.2, 207.0], [9.3, 207.0], [9.4, 207.0], [9.5, 207.0], [9.6, 207.0], [9.7, 207.0], [9.8, 207.0], [9.9, 207.0], [10.0, 211.0], [10.1, 211.0], [10.2, 211.0], [10.3, 211.0], [10.4, 211.0], [10.5, 211.0], [10.6, 211.0], [10.7, 211.0], [10.8, 211.0], [10.9, 211.0], [11.0, 211.0], [11.1, 211.0], [11.2, 211.0], [11.3, 215.0], [11.4, 215.0], [11.5, 215.0], [11.6, 215.0], [11.7, 215.0], [11.8, 215.0], [11.9, 215.0], [12.0, 215.0], [12.1, 215.0], [12.2, 215.0], [12.3, 215.0], [12.4, 215.0], [12.5, 218.0], [12.6, 218.0], [12.7, 218.0], [12.8, 218.0], [12.9, 218.0], [13.0, 218.0], [13.1, 218.0], [13.2, 218.0], [13.3, 218.0], [13.4, 218.0], [13.5, 218.0], [13.6, 218.0], [13.7, 218.0], [13.8, 226.0], [13.9, 226.0], [14.0, 226.0], [14.1, 226.0], [14.2, 226.0], [14.3, 226.0], [14.4, 226.0], [14.5, 226.0], [14.6, 226.0], [14.7, 226.0], [14.8, 226.0], [14.9, 226.0], [15.0, 226.0], [15.1, 226.0], [15.2, 226.0], [15.3, 226.0], [15.4, 226.0], [15.5, 226.0], [15.6, 226.0], [15.7, 226.0], [15.8, 226.0], [15.9, 226.0], [16.0, 226.0], [16.1, 226.0], [16.2, 226.0], [16.3, 230.0], [16.4, 230.0], [16.5, 230.0], [16.6, 230.0], [16.7, 230.0], [16.8, 230.0], [16.9, 230.0], [17.0, 230.0], [17.1, 230.0], [17.2, 230.0], [17.3, 230.0], [17.4, 230.0], [17.5, 231.0], [17.6, 231.0], [17.7, 231.0], [17.8, 231.0], [17.9, 231.0], [18.0, 231.0], [18.1, 231.0], [18.2, 231.0], [18.3, 231.0], [18.4, 231.0], [18.5, 231.0], [18.6, 231.0], [18.7, 231.0], [18.8, 231.0], [18.9, 231.0], [19.0, 231.0], [19.1, 231.0], [19.2, 231.0], [19.3, 231.0], [19.4, 231.0], [19.5, 231.0], [19.6, 231.0], [19.7, 231.0], [19.8, 231.0], [19.9, 231.0], [20.0, 234.0], [20.1, 234.0], [20.2, 234.0], [20.3, 234.0], [20.4, 234.0], [20.5, 234.0], [20.6, 234.0], [20.7, 234.0], [20.8, 234.0], [20.9, 234.0], [21.0, 234.0], [21.1, 234.0], [21.2, 234.0], [21.3, 246.0], [21.4, 246.0], [21.5, 246.0], [21.6, 246.0], [21.7, 246.0], [21.8, 246.0], [21.9, 246.0], [22.0, 246.0], [22.1, 246.0], [22.2, 246.0], [22.3, 246.0], [22.4, 246.0], [22.5, 274.0], [22.6, 274.0], [22.7, 274.0], [22.8, 274.0], [22.9, 274.0], [23.0, 274.0], [23.1, 274.0], [23.2, 274.0], [23.3, 274.0], [23.4, 274.0], [23.5, 274.0], [23.6, 274.0], [23.7, 274.0], [23.8, 671.0], [23.9, 671.0], [24.0, 671.0], [24.1, 671.0], [24.2, 671.0], [24.3, 671.0], [24.4, 671.0], [24.5, 671.0], [24.6, 671.0], [24.7, 671.0], [24.8, 671.0], [24.9, 671.0], [25.0, 875.0], [25.1, 875.0], [25.2, 875.0], [25.3, 875.0], [25.4, 875.0], [25.5, 875.0], [25.6, 875.0], [25.7, 875.0], [25.8, 875.0], [25.9, 875.0], [26.0, 875.0], [26.1, 875.0], [26.2, 875.0], [26.3, 1009.0], [26.4, 1009.0], [26.5, 1009.0], [26.6, 1009.0], [26.7, 1009.0], [26.8, 1009.0], [26.9, 1009.0], [27.0, 1009.0], [27.1, 1009.0], [27.2, 1009.0], [27.3, 1009.0], [27.4, 1009.0], [27.5, 1021.0], [27.6, 1021.0], [27.7, 1021.0], [27.8, 1021.0], [27.9, 1021.0], [28.0, 1021.0], [28.1, 1021.0], [28.2, 1021.0], [28.3, 1021.0], [28.4, 1021.0], [28.5, 1021.0], [28.6, 1021.0], [28.7, 1021.0], [28.8, 1047.0], [28.9, 1047.0], [29.0, 1047.0], [29.1, 1047.0], [29.2, 1047.0], [29.3, 1047.0], [29.4, 1047.0], [29.5, 1047.0], [29.6, 1047.0], [29.7, 1047.0], [29.8, 1047.0], [29.9, 1047.0], [30.0, 1055.0], [30.1, 1055.0], [30.2, 1055.0], [30.3, 1055.0], [30.4, 1055.0], [30.5, 1055.0], [30.6, 1055.0], [30.7, 1055.0], [30.8, 1055.0], [30.9, 1055.0], [31.0, 1055.0], [31.1, 1055.0], [31.2, 1055.0], [31.3, 1085.0], [31.4, 1085.0], [31.5, 1085.0], [31.6, 1085.0], [31.7, 1085.0], [31.8, 1085.0], [31.9, 1085.0], [32.0, 1085.0], [32.1, 1085.0], [32.2, 1085.0], [32.3, 1085.0], [32.4, 1085.0], [32.5, 1247.0], [32.6, 1247.0], [32.7, 1247.0], [32.8, 1247.0], [32.9, 1247.0], [33.0, 1247.0], [33.1, 1247.0], [33.2, 1247.0], [33.3, 1247.0], [33.4, 1247.0], [33.5, 1247.0], [33.6, 1247.0], [33.7, 1247.0], [33.8, 1294.0], [33.9, 1294.0], [34.0, 1294.0], [34.1, 1294.0], [34.2, 1294.0], [34.3, 1294.0], [34.4, 1294.0], [34.5, 1294.0], [34.6, 1294.0], [34.7, 1294.0], [34.8, 1294.0], [34.9, 1294.0], [35.0, 1323.0], [35.1, 1323.0], [35.2, 1323.0], [35.3, 1323.0], [35.4, 1323.0], [35.5, 1323.0], [35.6, 1323.0], [35.7, 1323.0], [35.8, 1323.0], [35.9, 1323.0], [36.0, 1323.0], [36.1, 1323.0], [36.2, 1323.0], [36.3, 1347.0], [36.4, 1347.0], [36.5, 1347.0], [36.6, 1347.0], [36.7, 1347.0], [36.8, 1347.0], [36.9, 1347.0], [37.0, 1347.0], [37.1, 1347.0], [37.2, 1347.0], [37.3, 1347.0], [37.4, 1347.0], [37.5, 1376.0], [37.6, 1376.0], [37.7, 1376.0], [37.8, 1376.0], [37.9, 1376.0], [38.0, 1376.0], [38.1, 1376.0], [38.2, 1376.0], [38.3, 1376.0], [38.4, 1376.0], [38.5, 1376.0], [38.6, 1376.0], [38.7, 1376.0], [38.8, 1515.0], [38.9, 1515.0], [39.0, 1515.0], [39.1, 1515.0], [39.2, 1515.0], [39.3, 1515.0], [39.4, 1515.0], [39.5, 1515.0], [39.6, 1515.0], [39.7, 1515.0], [39.8, 1515.0], [39.9, 1515.0], [40.0, 1527.0], [40.1, 1527.0], [40.2, 1527.0], [40.3, 1527.0], [40.4, 1527.0], [40.5, 1527.0], [40.6, 1527.0], [40.7, 1527.0], [40.8, 1527.0], [40.9, 1527.0], [41.0, 1527.0], [41.1, 1527.0], [41.2, 1527.0], [41.3, 1599.0], [41.4, 1599.0], [41.5, 1599.0], [41.6, 1599.0], [41.7, 1599.0], [41.8, 1599.0], [41.9, 1599.0], [42.0, 1599.0], [42.1, 1599.0], [42.2, 1599.0], [42.3, 1599.0], [42.4, 1599.0], [42.5, 1794.0], [42.6, 1794.0], [42.7, 1794.0], [42.8, 1794.0], [42.9, 1794.0], [43.0, 1794.0], [43.1, 1794.0], [43.2, 1794.0], [43.3, 1794.0], [43.4, 1794.0], [43.5, 1794.0], [43.6, 1794.0], [43.7, 1794.0], [43.8, 1873.0], [43.9, 1873.0], [44.0, 1873.0], [44.1, 1873.0], [44.2, 1873.0], [44.3, 1873.0], [44.4, 1873.0], [44.5, 1873.0], [44.6, 1873.0], [44.7, 1873.0], [44.8, 1873.0], [44.9, 1873.0], [45.0, 1945.0], [45.1, 1945.0], [45.2, 1945.0], [45.3, 1945.0], [45.4, 1945.0], [45.5, 1945.0], [45.6, 1945.0], [45.7, 1945.0], [45.8, 1945.0], [45.9, 1945.0], [46.0, 1945.0], [46.1, 1945.0], [46.2, 1945.0], [46.3, 2149.0], [46.4, 2149.0], [46.5, 2149.0], [46.6, 2149.0], [46.7, 2149.0], [46.8, 2149.0], [46.9, 2149.0], [47.0, 2149.0], [47.1, 2149.0], [47.2, 2149.0], [47.3, 2149.0], [47.4, 2149.0], [47.5, 2297.0], [47.6, 2297.0], [47.7, 2297.0], [47.8, 2297.0], [47.9, 2297.0], [48.0, 2297.0], [48.1, 2297.0], [48.2, 2297.0], [48.3, 2297.0], [48.4, 2297.0], [48.5, 2297.0], [48.6, 2297.0], [48.7, 2297.0], [48.8, 2429.0], [48.9, 2429.0], [49.0, 2429.0], [49.1, 2429.0], [49.2, 2429.0], [49.3, 2429.0], [49.4, 2429.0], [49.5, 2429.0], [49.6, 2429.0], [49.7, 2429.0], [49.8, 2429.0], [49.9, 2429.0], [50.0, 2488.0], [50.1, 2488.0], [50.2, 2488.0], [50.3, 2488.0], [50.4, 2488.0], [50.5, 2488.0], [50.6, 2488.0], [50.7, 2488.0], [50.8, 2488.0], [50.9, 2488.0], [51.0, 2488.0], [51.1, 2488.0], [51.2, 2488.0], [51.3, 2687.0], [51.4, 2687.0], [51.5, 2687.0], [51.6, 2687.0], [51.7, 2687.0], [51.8, 2687.0], [51.9, 2687.0], [52.0, 2687.0], [52.1, 2687.0], [52.2, 2687.0], [52.3, 2687.0], [52.4, 2687.0], [52.5, 2857.0], [52.6, 2857.0], [52.7, 2857.0], [52.8, 2857.0], [52.9, 2857.0], [53.0, 2857.0], [53.1, 2857.0], [53.2, 2857.0], [53.3, 2857.0], [53.4, 2857.0], [53.5, 2857.0], [53.6, 2857.0], [53.7, 2857.0], [53.8, 2873.0], [53.9, 2873.0], [54.0, 2873.0], [54.1, 2873.0], [54.2, 2873.0], [54.3, 2873.0], [54.4, 2873.0], [54.5, 2873.0], [54.6, 2873.0], [54.7, 2873.0], [54.8, 2873.0], [54.9, 2873.0], [55.0, 2876.0], [55.1, 2876.0], [55.2, 2876.0], [55.3, 2876.0], [55.4, 2876.0], [55.5, 2876.0], [55.6, 2876.0], [55.7, 2876.0], [55.8, 2876.0], [55.9, 2876.0], [56.0, 2876.0], [56.1, 2876.0], [56.2, 2876.0], [56.3, 2897.0], [56.4, 2897.0], [56.5, 2897.0], [56.6, 2897.0], [56.7, 2897.0], [56.8, 2897.0], [56.9, 2897.0], [57.0, 2897.0], [57.1, 2897.0], [57.2, 2897.0], [57.3, 2897.0], [57.4, 2897.0], [57.5, 2917.0], [57.6, 2917.0], [57.7, 2917.0], [57.8, 2917.0], [57.9, 2917.0], [58.0, 2917.0], [58.1, 2917.0], [58.2, 2917.0], [58.3, 2917.0], [58.4, 2917.0], [58.5, 2917.0], [58.6, 2917.0], [58.7, 2917.0], [58.8, 2932.0], [58.9, 2932.0], [59.0, 2932.0], [59.1, 2932.0], [59.2, 2932.0], [59.3, 2932.0], [59.4, 2932.0], [59.5, 2932.0], [59.6, 2932.0], [59.7, 2932.0], [59.8, 2932.0], [59.9, 2932.0], [60.0, 2936.0], [60.1, 2936.0], [60.2, 2936.0], [60.3, 2936.0], [60.4, 2936.0], [60.5, 2936.0], [60.6, 2936.0], [60.7, 2936.0], [60.8, 2936.0], [60.9, 2936.0], [61.0, 2936.0], [61.1, 2936.0], [61.2, 2936.0], [61.3, 3144.0], [61.4, 3144.0], [61.5, 3144.0], [61.6, 3144.0], [61.7, 3144.0], [61.8, 3144.0], [61.9, 3144.0], [62.0, 3144.0], [62.1, 3144.0], [62.2, 3144.0], [62.3, 3144.0], [62.4, 3144.0], [62.5, 3185.0], [62.6, 3185.0], [62.7, 3185.0], [62.8, 3185.0], [62.9, 3185.0], [63.0, 3185.0], [63.1, 3185.0], [63.2, 3185.0], [63.3, 3185.0], [63.4, 3185.0], [63.5, 3185.0], [63.6, 3185.0], [63.7, 3185.0], [63.8, 3210.0], [63.9, 3210.0], [64.0, 3210.0], [64.1, 3210.0], [64.2, 3210.0], [64.3, 3210.0], [64.4, 3210.0], [64.5, 3210.0], [64.6, 3210.0], [64.7, 3210.0], [64.8, 3210.0], [64.9, 3210.0], [65.0, 3305.0], [65.1, 3305.0], [65.2, 3305.0], [65.3, 3305.0], [65.4, 3305.0], [65.5, 3305.0], [65.6, 3305.0], [65.7, 3305.0], [65.8, 3305.0], [65.9, 3305.0], [66.0, 3305.0], [66.1, 3305.0], [66.2, 3305.0], [66.3, 3356.0], [66.4, 3356.0], [66.5, 3356.0], [66.6, 3356.0], [66.7, 3356.0], [66.8, 3356.0], [66.9, 3356.0], [67.0, 3356.0], [67.1, 3356.0], [67.2, 3356.0], [67.3, 3356.0], [67.4, 3356.0], [67.5, 3443.0], [67.6, 3443.0], [67.7, 3443.0], [67.8, 3443.0], [67.9, 3443.0], [68.0, 3443.0], [68.1, 3443.0], [68.2, 3443.0], [68.3, 3443.0], [68.4, 3443.0], [68.5, 3443.0], [68.6, 3443.0], [68.7, 3443.0], [68.8, 3628.0], [68.9, 3628.0], [69.0, 3628.0], [69.1, 3628.0], [69.2, 3628.0], [69.3, 3628.0], [69.4, 3628.0], [69.5, 3628.0], [69.6, 3628.0], [69.7, 3628.0], [69.8, 3628.0], [69.9, 3628.0], [70.0, 3720.0], [70.1, 3720.0], [70.2, 3720.0], [70.3, 3720.0], [70.4, 3720.0], [70.5, 3720.0], [70.6, 3720.0], [70.7, 3720.0], [70.8, 3720.0], [70.9, 3720.0], [71.0, 3720.0], [71.1, 3720.0], [71.2, 3720.0], [71.3, 3769.0], [71.4, 3769.0], [71.5, 3769.0], [71.6, 3769.0], [71.7, 3769.0], [71.8, 3769.0], [71.9, 3769.0], [72.0, 3769.0], [72.1, 3769.0], [72.2, 3769.0], [72.3, 3769.0], [72.4, 3769.0], [72.5, 3786.0], [72.6, 3786.0], [72.7, 3786.0], [72.8, 3786.0], [72.9, 3786.0], [73.0, 3786.0], [73.1, 3786.0], [73.2, 3786.0], [73.3, 3786.0], [73.4, 3786.0], [73.5, 3786.0], [73.6, 3786.0], [73.7, 3786.0], [73.8, 3878.0], [73.9, 3878.0], [74.0, 3878.0], [74.1, 3878.0], [74.2, 3878.0], [74.3, 3878.0], [74.4, 3878.0], [74.5, 3878.0], [74.6, 3878.0], [74.7, 3878.0], [74.8, 3878.0], [74.9, 3878.0], [75.0, 3907.0], [75.1, 3907.0], [75.2, 3907.0], [75.3, 3907.0], [75.4, 3907.0], [75.5, 3907.0], [75.6, 3907.0], [75.7, 3907.0], [75.8, 3907.0], [75.9, 3907.0], [76.0, 3907.0], [76.1, 3907.0], [76.2, 3907.0], [76.3, 3922.0], [76.4, 3922.0], [76.5, 3922.0], [76.6, 3922.0], [76.7, 3922.0], [76.8, 3922.0], [76.9, 3922.0], [77.0, 3922.0], [77.1, 3922.0], [77.2, 3922.0], [77.3, 3922.0], [77.4, 3922.0], [77.5, 3938.0], [77.6, 3938.0], [77.7, 3938.0], [77.8, 3938.0], [77.9, 3938.0], [78.0, 3938.0], [78.1, 3938.0], [78.2, 3938.0], [78.3, 3938.0], [78.4, 3938.0], [78.5, 3938.0], [78.6, 3938.0], [78.7, 3938.0], [78.8, 3943.0], [78.9, 3943.0], [79.0, 3943.0], [79.1, 3943.0], [79.2, 3943.0], [79.3, 3943.0], [79.4, 3943.0], [79.5, 3943.0], [79.6, 3943.0], [79.7, 3943.0], [79.8, 3943.0], [79.9, 3943.0], [80.0, 3957.0], [80.1, 3957.0], [80.2, 3957.0], [80.3, 3957.0], [80.4, 3957.0], [80.5, 3957.0], [80.6, 3957.0], [80.7, 3957.0], [80.8, 3957.0], [80.9, 3957.0], [81.0, 3957.0], [81.1, 3957.0], [81.2, 3957.0], [81.3, 4045.0], [81.4, 4045.0], [81.5, 4045.0], [81.6, 4045.0], [81.7, 4045.0], [81.8, 4045.0], [81.9, 4045.0], [82.0, 4045.0], [82.1, 4045.0], [82.2, 4045.0], [82.3, 4045.0], [82.4, 4045.0], [82.5, 4089.0], [82.6, 4089.0], [82.7, 4089.0], [82.8, 4089.0], [82.9, 4089.0], [83.0, 4089.0], [83.1, 4089.0], [83.2, 4089.0], [83.3, 4089.0], [83.4, 4089.0], [83.5, 4089.0], [83.6, 4089.0], [83.7, 4089.0], [83.8, 4220.0], [83.9, 4220.0], [84.0, 4220.0], [84.1, 4220.0], [84.2, 4220.0], [84.3, 4220.0], [84.4, 4220.0], [84.5, 4220.0], [84.6, 4220.0], [84.7, 4220.0], [84.8, 4220.0], [84.9, 4220.0], [85.0, 4507.0], [85.1, 4507.0], [85.2, 4507.0], [85.3, 4507.0], [85.4, 4507.0], [85.5, 4507.0], [85.6, 4507.0], [85.7, 4507.0], [85.8, 4507.0], [85.9, 4507.0], [86.0, 4507.0], [86.1, 4507.0], [86.2, 4507.0], [86.3, 4976.0], [86.4, 4976.0], [86.5, 4976.0], [86.6, 4976.0], [86.7, 4976.0], [86.8, 4976.0], [86.9, 4976.0], [87.0, 4976.0], [87.1, 4976.0], [87.2, 4976.0], [87.3, 4976.0], [87.4, 4976.0], [87.5, 5050.0], [87.6, 5050.0], [87.7, 5050.0], [87.8, 5050.0], [87.9, 5050.0], [88.0, 5050.0], [88.1, 5050.0], [88.2, 5050.0], [88.3, 5050.0], [88.4, 5050.0], [88.5, 5050.0], [88.6, 5050.0], [88.7, 5050.0], [88.8, 5081.0], [88.9, 5081.0], [89.0, 5081.0], [89.1, 5081.0], [89.2, 5081.0], [89.3, 5081.0], [89.4, 5081.0], [89.5, 5081.0], [89.6, 5081.0], [89.7, 5081.0], [89.8, 5081.0], [89.9, 5081.0], [90.0, 5101.0], [90.1, 5101.0], [90.2, 5101.0], [90.3, 5101.0], [90.4, 5101.0], [90.5, 5101.0], [90.6, 5101.0], [90.7, 5101.0], [90.8, 5101.0], [90.9, 5101.0], [91.0, 5101.0], [91.1, 5101.0], [91.2, 5101.0], [91.3, 6028.0], [91.4, 6028.0], [91.5, 6028.0], [91.6, 6028.0], [91.7, 6028.0], [91.8, 6028.0], [91.9, 6028.0], [92.0, 6028.0], [92.1, 6028.0], [92.2, 6028.0], [92.3, 6028.0], [92.4, 6028.0], [92.5, 6145.0], [92.6, 6145.0], [92.7, 6145.0], [92.8, 6145.0], [92.9, 6145.0], [93.0, 6145.0], [93.1, 6145.0], [93.2, 6145.0], [93.3, 6145.0], [93.4, 6145.0], [93.5, 6145.0], [93.6, 6145.0], [93.7, 6145.0], [93.8, 6281.0], [93.9, 6281.0], [94.0, 6281.0], [94.1, 6281.0], [94.2, 6281.0], [94.3, 6281.0], [94.4, 6281.0], [94.5, 6281.0], [94.6, 6281.0], [94.7, 6281.0], [94.8, 6281.0], [94.9, 6281.0], [95.0, 6385.0], [95.1, 6385.0], [95.2, 6385.0], [95.3, 6385.0], [95.4, 6385.0], [95.5, 6385.0], [95.6, 6385.0], [95.7, 6385.0], [95.8, 6385.0], [95.9, 6385.0], [96.0, 6385.0], [96.1, 6385.0], [96.2, 6385.0], [96.3, 6944.0], [96.4, 6944.0], [96.5, 6944.0], [96.6, 6944.0], [96.7, 6944.0], [96.8, 6944.0], [96.9, 6944.0], [97.0, 6944.0], [97.1, 6944.0], [97.2, 6944.0], [97.3, 6944.0], [97.4, 6944.0], [97.5, 7166.0], [97.6, 7166.0], [97.7, 7166.0], [97.8, 7166.0], [97.9, 7166.0], [98.0, 7166.0], [98.1, 7166.0], [98.2, 7166.0], [98.3, 7166.0], [98.4, 7166.0], [98.5, 7166.0], [98.6, 7166.0], [98.7, 7166.0], [98.8, 7368.0], [98.9, 7368.0], [99.0, 7368.0], [99.1, 7368.0], [99.2, 7368.0], [99.3, 7368.0], [99.4, 7368.0], [99.5, 7368.0], [99.6, 7368.0], [99.7, 7368.0], [99.8, 7368.0], [99.9, 7368.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 15.0, "series": [{"data": [[600.0, 1.0], [800.0, 1.0], [1000.0, 5.0], [1200.0, 2.0], [1300.0, 3.0], [1500.0, 3.0], [100.0, 4.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2600.0, 1.0], [2800.0, 4.0], [2900.0, 3.0], [3100.0, 2.0], [200.0, 15.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 5.0], [4000.0, 2.0], [4200.0, 1.0], [4500.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5000.0, 2.0], [6100.0, 1.0], [6000.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7300.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 49.0, "series": [{"data": [[0.0, 19.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 49.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.7914794E12, "maxY": 2.0, "series": [{"data": [[1.7914797E12, 1.3333333333333333], [1.79147952E12, 1.6923076923076923], [1.79147958E12, 1.5882352941176467], [1.79147946E12, 1.5555555555555554], [1.7914794E12, 2.0], [1.79147964E12, 1.4615384615384615]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7914797E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1567.6590909090908, "minX": 1.0, "maxY": 5095.0, "series": [{"data": [[1.0, 1567.6590909090908], [2.0, 3302.8076923076924], [4.0, 5095.0], [3.0, 4562.625]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.5999999999999999, 2519.2624999999994]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 28.716666666666665, "minX": 1.7914794E12, "maxY": 340.4166666666667, "series": [{"data": [[1.7914797E12, 28.716666666666665], [1.79147952E12, 41.13333333333333], [1.79147958E12, 54.583333333333336], [1.79147946E12, 57.78333333333333], [1.7914794E12, 32.06666666666667], [1.79147964E12, 41.61666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7914797E12, 174.8], [1.79147952E12, 187.23333333333332], [1.79147958E12, 340.4166666666667], [1.79147946E12, 337.1166666666667], [1.7914794E12, 190.03333333333333], [1.79147964E12, 276.0833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7914797E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1692.3333333333333, "minX": 1.7914794E12, "maxY": 3436.2352941176473, "series": [{"data": [[1.7914797E12, 1692.3333333333333], [1.79147952E12, 2609.4615384615386], [1.79147958E12, 3436.2352941176473], [1.79147946E12, 2087.5], [1.7914794E12, 2661.9], [1.79147964E12, 2290.5384615384614]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7914797E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1692.2222222222222, "minX": 1.7914794E12, "maxY": 3436.1176470588225, "series": [{"data": [[1.7914797E12, 1692.2222222222222], [1.79147952E12, 2609.4615384615386], [1.79147958E12, 3436.1176470588225], [1.79147946E12, 2087.3888888888887], [1.7914794E12, 2661.8], [1.79147964E12, 2290.5384615384614]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7914797E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.16666666666667, "minX": 1.7914794E12, "maxY": 17.900000000000002, "series": [{"data": [[1.7914797E12, 11.555555555555555], [1.79147952E12, 10.923076923076923], [1.79147958E12, 11.235294117647058], [1.79147946E12, 10.16666666666667], [1.7914794E12, 17.900000000000002], [1.79147964E12, 15.153846153846157]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7914797E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.7914794E12, "maxY": 7368.0, "series": [{"data": [[1.7914797E12, 3922.0], [1.79147952E12, 5050.0], [1.79147958E12, 7166.0], [1.79147946E12, 6028.0], [1.7914794E12, 6145.0], [1.79147964E12, 7368.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7914797E12, 3922.0], [1.79147952E12, 4518.0], [1.79147958E12, 6988.4], [1.79147946E12, 5081.200000000002], [1.7914794E12, 6040.6], [1.79147964E12, 5995.999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7914797E12, 3922.0], [1.79147952E12, 5050.0], [1.79147958E12, 7166.0], [1.79147946E12, 6028.0], [1.7914794E12, 6145.0], [1.79147964E12, 7368.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7914797E12, 3922.0], [1.79147952E12, 5050.0], [1.79147958E12, 7166.0], [1.79147946E12, 6028.0], [1.7914794E12, 6145.0], [1.79147964E12, 7368.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7914797E12, 200.0], [1.79147952E12, 875.0], [1.79147958E12, 188.0], [1.79147946E12, 188.0], [1.7914794E12, 1055.0], [1.79147964E12, 215.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7914797E12, 1945.0], [1.79147952E12, 2873.0], [1.79147958E12, 3628.0], [1.79147946E12, 1583.5], [1.7914794E12, 1654.5], [1.79147964E12, 1599.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7914797E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1833.5, "minX": 1.0, "maxY": 3922.5, "series": [{"data": [[1.0, 1833.5], [2.0, 3257.5], [3.0, 3922.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1833.5, "minX": 1.0, "maxY": 3922.5, "series": [{"data": [[1.0, 1833.5], [2.0, 3257.5], [3.0, 3922.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.7914794E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.7914797E12, 0.11666666666666667], [1.79147952E12, 0.23333333333333334], [1.79147958E12, 0.26666666666666666], [1.79147946E12, 0.2833333333333333], [1.7914794E12, 0.18333333333333332], [1.79147964E12, 0.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7914797E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.7914794E12, "maxY": 0.3, "series": [{"data": [[1.7914797E12, 0.15], [1.79147952E12, 0.21666666666666667], [1.79147958E12, 0.2833333333333333], [1.79147946E12, 0.3], [1.7914794E12, 0.16666666666666666], [1.79147964E12, 0.21666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7914797E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.7914794E12, "maxY": 0.3, "series": [{"data": [[1.7914797E12, 0.15], [1.79147952E12, 0.21666666666666667], [1.79147958E12, 0.2833333333333333], [1.79147946E12, 0.3], [1.7914794E12, 0.16666666666666666], [1.79147964E12, 0.21666666666666667]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7914797E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.7914794E12, "maxY": 0.3, "series": [{"data": [[1.7914797E12, 0.15], [1.79147952E12, 0.21666666666666667], [1.79147958E12, 0.2833333333333333], [1.79147946E12, 0.3], [1.7914794E12, 0.16666666666666666], [1.79147964E12, 0.21666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7914797E12, "title": "Total Transactions Per Second"}},
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

