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
        data: {"result": {"minY": 889.0, "minX": 0.0, "maxY": 14516.0, "series": [{"data": [[0.0, 889.0], [0.1, 889.0], [0.2, 889.0], [0.3, 889.0], [0.4, 889.0], [0.5, 1015.0], [0.6, 1015.0], [0.7, 1015.0], [0.8, 1015.0], [0.9, 1032.0], [1.0, 1032.0], [1.1, 1032.0], [1.2, 1032.0], [1.3, 1050.0], [1.4, 1050.0], [1.5, 1050.0], [1.6, 1050.0], [1.7, 1053.0], [1.8, 1053.0], [1.9, 1053.0], [2.0, 1053.0], [2.1, 1060.0], [2.2, 1060.0], [2.3, 1060.0], [2.4, 1060.0], [2.5, 1093.0], [2.6, 1093.0], [2.7, 1093.0], [2.8, 1093.0], [2.9, 1093.0], [3.0, 1097.0], [3.1, 1097.0], [3.2, 1097.0], [3.3, 1097.0], [3.4, 1111.0], [3.5, 1111.0], [3.6, 1111.0], [3.7, 1111.0], [3.8, 1191.0], [3.9, 1191.0], [4.0, 1191.0], [4.1, 1191.0], [4.2, 1232.0], [4.3, 1232.0], [4.4, 1232.0], [4.5, 1232.0], [4.6, 1271.0], [4.7, 1271.0], [4.8, 1271.0], [4.9, 1271.0], [5.0, 1316.0], [5.1, 1316.0], [5.2, 1316.0], [5.3, 1316.0], [5.4, 1316.0], [5.5, 1321.0], [5.6, 1321.0], [5.7, 1321.0], [5.8, 1321.0], [5.9, 1412.0], [6.0, 1412.0], [6.1, 1412.0], [6.2, 1412.0], [6.3, 1435.0], [6.4, 1435.0], [6.5, 1435.0], [6.6, 1435.0], [6.7, 1475.0], [6.8, 1475.0], [6.9, 1475.0], [7.0, 1475.0], [7.1, 1483.0], [7.2, 1483.0], [7.3, 1483.0], [7.4, 1483.0], [7.5, 1483.0], [7.6, 1485.0], [7.7, 1485.0], [7.8, 1485.0], [7.9, 1485.0], [8.0, 1498.0], [8.1, 1498.0], [8.2, 1498.0], [8.3, 1498.0], [8.4, 1502.0], [8.5, 1502.0], [8.6, 1502.0], [8.7, 1502.0], [8.8, 1526.0], [8.9, 1526.0], [9.0, 1526.0], [9.1, 1526.0], [9.2, 1545.0], [9.3, 1545.0], [9.4, 1545.0], [9.5, 1545.0], [9.6, 1551.0], [9.7, 1551.0], [9.8, 1551.0], [9.9, 1551.0], [10.0, 1557.0], [10.1, 1557.0], [10.2, 1557.0], [10.3, 1557.0], [10.4, 1557.0], [10.5, 1593.0], [10.6, 1593.0], [10.7, 1593.0], [10.8, 1593.0], [10.9, 1603.0], [11.0, 1603.0], [11.1, 1603.0], [11.2, 1603.0], [11.3, 1619.0], [11.4, 1619.0], [11.5, 1619.0], [11.6, 1619.0], [11.7, 1669.0], [11.8, 1669.0], [11.9, 1669.0], [12.0, 1669.0], [12.1, 1706.0], [12.2, 1706.0], [12.3, 1706.0], [12.4, 1706.0], [12.5, 1720.0], [12.6, 1720.0], [12.7, 1720.0], [12.8, 1720.0], [12.9, 1720.0], [13.0, 1723.0], [13.1, 1723.0], [13.2, 1723.0], [13.3, 1723.0], [13.4, 1752.0], [13.5, 1752.0], [13.6, 1752.0], [13.7, 1752.0], [13.8, 1762.0], [13.9, 1762.0], [14.0, 1762.0], [14.1, 1762.0], [14.2, 1799.0], [14.3, 1799.0], [14.4, 1799.0], [14.5, 1799.0], [14.6, 1799.0], [14.7, 1799.0], [14.8, 1799.0], [14.9, 1799.0], [15.0, 1811.0], [15.1, 1811.0], [15.2, 1811.0], [15.3, 1811.0], [15.4, 1811.0], [15.5, 1825.0], [15.6, 1825.0], [15.7, 1825.0], [15.8, 1825.0], [15.9, 1847.0], [16.0, 1847.0], [16.1, 1847.0], [16.2, 1847.0], [16.3, 1849.0], [16.4, 1849.0], [16.5, 1849.0], [16.6, 1849.0], [16.7, 1851.0], [16.8, 1851.0], [16.9, 1851.0], [17.0, 1851.0], [17.1, 1876.0], [17.2, 1876.0], [17.3, 1876.0], [17.4, 1876.0], [17.5, 1896.0], [17.6, 1896.0], [17.7, 1896.0], [17.8, 1896.0], [17.9, 1896.0], [18.0, 1912.0], [18.1, 1912.0], [18.2, 1912.0], [18.3, 1912.0], [18.4, 1939.0], [18.5, 1939.0], [18.6, 1939.0], [18.7, 1939.0], [18.8, 1941.0], [18.9, 1941.0], [19.0, 1941.0], [19.1, 1941.0], [19.2, 1963.0], [19.3, 1963.0], [19.4, 1963.0], [19.5, 1963.0], [19.6, 1990.0], [19.7, 1990.0], [19.8, 1990.0], [19.9, 1990.0], [20.0, 1990.0], [20.1, 2165.0], [20.2, 2165.0], [20.3, 2165.0], [20.4, 2165.0], [20.5, 2179.0], [20.6, 2179.0], [20.7, 2179.0], [20.8, 2179.0], [20.9, 2197.0], [21.0, 2197.0], [21.1, 2197.0], [21.2, 2197.0], [21.3, 2232.0], [21.4, 2232.0], [21.5, 2232.0], [21.6, 2232.0], [21.7, 2235.0], [21.8, 2235.0], [21.9, 2235.0], [22.0, 2235.0], [22.1, 2241.0], [22.2, 2241.0], [22.3, 2241.0], [22.4, 2241.0], [22.5, 2241.0], [22.6, 2293.0], [22.7, 2293.0], [22.8, 2293.0], [22.9, 2293.0], [23.0, 2306.0], [23.1, 2306.0], [23.2, 2306.0], [23.3, 2306.0], [23.4, 2331.0], [23.5, 2331.0], [23.6, 2331.0], [23.7, 2331.0], [23.8, 2343.0], [23.9, 2343.0], [24.0, 2343.0], [24.1, 2343.0], [24.2, 2375.0], [24.3, 2375.0], [24.4, 2375.0], [24.5, 2375.0], [24.6, 2434.0], [24.7, 2434.0], [24.8, 2434.0], [24.9, 2434.0], [25.0, 2434.0], [25.1, 2452.0], [25.2, 2452.0], [25.3, 2452.0], [25.4, 2452.0], [25.5, 2455.0], [25.6, 2455.0], [25.7, 2455.0], [25.8, 2455.0], [25.9, 2468.0], [26.0, 2468.0], [26.1, 2468.0], [26.2, 2468.0], [26.3, 2488.0], [26.4, 2488.0], [26.5, 2488.0], [26.6, 2488.0], [26.7, 2505.0], [26.8, 2505.0], [26.9, 2505.0], [27.0, 2505.0], [27.1, 2509.0], [27.2, 2509.0], [27.3, 2509.0], [27.4, 2509.0], [27.5, 2509.0], [27.6, 2520.0], [27.7, 2520.0], [27.8, 2520.0], [27.9, 2520.0], [28.0, 2589.0], [28.1, 2589.0], [28.2, 2589.0], [28.3, 2589.0], [28.4, 2595.0], [28.5, 2595.0], [28.6, 2595.0], [28.7, 2595.0], [28.8, 2619.0], [28.9, 2619.0], [29.0, 2619.0], [29.1, 2619.0], [29.2, 2675.0], [29.3, 2675.0], [29.4, 2675.0], [29.5, 2675.0], [29.6, 2677.0], [29.7, 2677.0], [29.8, 2677.0], [29.9, 2677.0], [30.0, 2677.0], [30.1, 2700.0], [30.2, 2700.0], [30.3, 2700.0], [30.4, 2700.0], [30.5, 2740.0], [30.6, 2740.0], [30.7, 2740.0], [30.8, 2740.0], [30.9, 2796.0], [31.0, 2796.0], [31.1, 2796.0], [31.2, 2796.0], [31.3, 2809.0], [31.4, 2809.0], [31.5, 2809.0], [31.6, 2809.0], [31.7, 2857.0], [31.8, 2857.0], [31.9, 2857.0], [32.0, 2857.0], [32.1, 2876.0], [32.2, 2876.0], [32.3, 2876.0], [32.4, 2876.0], [32.5, 2876.0], [32.6, 2916.0], [32.7, 2916.0], [32.8, 2916.0], [32.9, 2916.0], [33.0, 2944.0], [33.1, 2944.0], [33.2, 2944.0], [33.3, 2944.0], [33.4, 2946.0], [33.5, 2946.0], [33.6, 2946.0], [33.7, 2946.0], [33.8, 2951.0], [33.9, 2951.0], [34.0, 2951.0], [34.1, 2951.0], [34.2, 2960.0], [34.3, 2960.0], [34.4, 2960.0], [34.5, 2960.0], [34.6, 2990.0], [34.7, 2990.0], [34.8, 2990.0], [34.9, 2990.0], [35.0, 2990.0], [35.1, 3048.0], [35.2, 3048.0], [35.3, 3048.0], [35.4, 3048.0], [35.5, 3050.0], [35.6, 3050.0], [35.7, 3050.0], [35.8, 3050.0], [35.9, 3060.0], [36.0, 3060.0], [36.1, 3060.0], [36.2, 3060.0], [36.3, 3069.0], [36.4, 3069.0], [36.5, 3069.0], [36.6, 3069.0], [36.7, 3089.0], [36.8, 3089.0], [36.9, 3089.0], [37.0, 3089.0], [37.1, 3095.0], [37.2, 3095.0], [37.3, 3095.0], [37.4, 3095.0], [37.5, 3095.0], [37.6, 3126.0], [37.7, 3126.0], [37.8, 3126.0], [37.9, 3126.0], [38.0, 3146.0], [38.1, 3146.0], [38.2, 3146.0], [38.3, 3146.0], [38.4, 3154.0], [38.5, 3154.0], [38.6, 3154.0], [38.7, 3154.0], [38.8, 3169.0], [38.9, 3169.0], [39.0, 3169.0], [39.1, 3169.0], [39.2, 3195.0], [39.3, 3195.0], [39.4, 3195.0], [39.5, 3195.0], [39.6, 3275.0], [39.7, 3275.0], [39.8, 3275.0], [39.9, 3275.0], [40.0, 3312.0], [40.1, 3312.0], [40.2, 3312.0], [40.3, 3312.0], [40.4, 3312.0], [40.5, 3350.0], [40.6, 3350.0], [40.7, 3350.0], [40.8, 3350.0], [40.9, 3357.0], [41.0, 3357.0], [41.1, 3357.0], [41.2, 3357.0], [41.3, 3429.0], [41.4, 3429.0], [41.5, 3429.0], [41.6, 3429.0], [41.7, 3466.0], [41.8, 3466.0], [41.9, 3466.0], [42.0, 3466.0], [42.1, 3536.0], [42.2, 3536.0], [42.3, 3536.0], [42.4, 3536.0], [42.5, 3575.0], [42.6, 3575.0], [42.7, 3575.0], [42.8, 3575.0], [42.9, 3575.0], [43.0, 3593.0], [43.1, 3593.0], [43.2, 3593.0], [43.3, 3593.0], [43.4, 3628.0], [43.5, 3628.0], [43.6, 3628.0], [43.7, 3628.0], [43.8, 3632.0], [43.9, 3632.0], [44.0, 3632.0], [44.1, 3632.0], [44.2, 3654.0], [44.3, 3654.0], [44.4, 3654.0], [44.5, 3654.0], [44.6, 3740.0], [44.7, 3740.0], [44.8, 3740.0], [44.9, 3740.0], [45.0, 3760.0], [45.1, 3760.0], [45.2, 3760.0], [45.3, 3760.0], [45.4, 3760.0], [45.5, 3765.0], [45.6, 3765.0], [45.7, 3765.0], [45.8, 3765.0], [45.9, 3797.0], [46.0, 3797.0], [46.1, 3797.0], [46.2, 3797.0], [46.3, 3848.0], [46.4, 3848.0], [46.5, 3848.0], [46.6, 3848.0], [46.7, 3848.0], [46.8, 3848.0], [46.9, 3848.0], [47.0, 3848.0], [47.1, 3854.0], [47.2, 3854.0], [47.3, 3854.0], [47.4, 3854.0], [47.5, 3864.0], [47.6, 3864.0], [47.7, 3864.0], [47.8, 3864.0], [47.9, 3864.0], [48.0, 3882.0], [48.1, 3882.0], [48.2, 3882.0], [48.3, 3882.0], [48.4, 3900.0], [48.5, 3900.0], [48.6, 3900.0], [48.7, 3900.0], [48.8, 3916.0], [48.9, 3916.0], [49.0, 3916.0], [49.1, 3916.0], [49.2, 3940.0], [49.3, 3940.0], [49.4, 3940.0], [49.5, 3940.0], [49.6, 3972.0], [49.7, 3972.0], [49.8, 3972.0], [49.9, 3972.0], [50.0, 4058.0], [50.1, 4058.0], [50.2, 4058.0], [50.3, 4058.0], [50.4, 4058.0], [50.5, 4068.0], [50.6, 4068.0], [50.7, 4068.0], [50.8, 4068.0], [50.9, 4116.0], [51.0, 4116.0], [51.1, 4116.0], [51.2, 4116.0], [51.3, 4123.0], [51.4, 4123.0], [51.5, 4123.0], [51.6, 4123.0], [51.7, 4130.0], [51.8, 4130.0], [51.9, 4130.0], [52.0, 4130.0], [52.1, 4163.0], [52.2, 4163.0], [52.3, 4163.0], [52.4, 4163.0], [52.5, 4176.0], [52.6, 4176.0], [52.7, 4176.0], [52.8, 4176.0], [52.9, 4176.0], [53.0, 4205.0], [53.1, 4205.0], [53.2, 4205.0], [53.3, 4205.0], [53.4, 4225.0], [53.5, 4225.0], [53.6, 4225.0], [53.7, 4225.0], [53.8, 4335.0], [53.9, 4335.0], [54.0, 4335.0], [54.1, 4335.0], [54.2, 4357.0], [54.3, 4357.0], [54.4, 4357.0], [54.5, 4357.0], [54.6, 4362.0], [54.7, 4362.0], [54.8, 4362.0], [54.9, 4362.0], [55.0, 4394.0], [55.1, 4394.0], [55.2, 4394.0], [55.3, 4394.0], [55.4, 4394.0], [55.5, 4394.0], [55.6, 4394.0], [55.7, 4394.0], [55.8, 4394.0], [55.9, 4402.0], [56.0, 4402.0], [56.1, 4402.0], [56.2, 4402.0], [56.3, 4418.0], [56.4, 4418.0], [56.5, 4418.0], [56.6, 4418.0], [56.7, 4423.0], [56.8, 4423.0], [56.9, 4423.0], [57.0, 4423.0], [57.1, 4441.0], [57.2, 4441.0], [57.3, 4441.0], [57.4, 4441.0], [57.5, 4451.0], [57.6, 4451.0], [57.7, 4451.0], [57.8, 4451.0], [57.9, 4451.0], [58.0, 4473.0], [58.1, 4473.0], [58.2, 4473.0], [58.3, 4473.0], [58.4, 4529.0], [58.5, 4529.0], [58.6, 4529.0], [58.7, 4529.0], [58.8, 4562.0], [58.9, 4562.0], [59.0, 4562.0], [59.1, 4562.0], [59.2, 4602.0], [59.3, 4602.0], [59.4, 4602.0], [59.5, 4602.0], [59.6, 4611.0], [59.7, 4611.0], [59.8, 4611.0], [59.9, 4611.0], [60.0, 4616.0], [60.1, 4616.0], [60.2, 4616.0], [60.3, 4616.0], [60.4, 4616.0], [60.5, 4628.0], [60.6, 4628.0], [60.7, 4628.0], [60.8, 4628.0], [60.9, 4659.0], [61.0, 4659.0], [61.1, 4659.0], [61.2, 4659.0], [61.3, 4687.0], [61.4, 4687.0], [61.5, 4687.0], [61.6, 4687.0], [61.7, 4804.0], [61.8, 4804.0], [61.9, 4804.0], [62.0, 4804.0], [62.1, 4950.0], [62.2, 4950.0], [62.3, 4950.0], [62.4, 4950.0], [62.5, 4964.0], [62.6, 4964.0], [62.7, 4964.0], [62.8, 4964.0], [62.9, 4964.0], [63.0, 4976.0], [63.1, 4976.0], [63.2, 4976.0], [63.3, 4976.0], [63.4, 5005.0], [63.5, 5005.0], [63.6, 5005.0], [63.7, 5005.0], [63.8, 5053.0], [63.9, 5053.0], [64.0, 5053.0], [64.1, 5053.0], [64.2, 5081.0], [64.3, 5081.0], [64.4, 5081.0], [64.5, 5081.0], [64.6, 5082.0], [64.7, 5082.0], [64.8, 5082.0], [64.9, 5082.0], [65.0, 5087.0], [65.1, 5087.0], [65.2, 5087.0], [65.3, 5087.0], [65.4, 5087.0], [65.5, 5106.0], [65.6, 5106.0], [65.7, 5106.0], [65.8, 5106.0], [65.9, 5143.0], [66.0, 5143.0], [66.1, 5143.0], [66.2, 5143.0], [66.3, 5216.0], [66.4, 5216.0], [66.5, 5216.0], [66.6, 5216.0], [66.7, 5276.0], [66.8, 5276.0], [66.9, 5276.0], [67.0, 5276.0], [67.1, 5342.0], [67.2, 5342.0], [67.3, 5342.0], [67.4, 5342.0], [67.5, 5385.0], [67.6, 5385.0], [67.7, 5385.0], [67.8, 5385.0], [67.9, 5385.0], [68.0, 5401.0], [68.1, 5401.0], [68.2, 5401.0], [68.3, 5401.0], [68.4, 5466.0], [68.5, 5466.0], [68.6, 5466.0], [68.7, 5466.0], [68.8, 5587.0], [68.9, 5587.0], [69.0, 5587.0], [69.1, 5587.0], [69.2, 5624.0], [69.3, 5624.0], [69.4, 5624.0], [69.5, 5624.0], [69.6, 5629.0], [69.7, 5629.0], [69.8, 5629.0], [69.9, 5629.0], [70.0, 5681.0], [70.1, 5681.0], [70.2, 5681.0], [70.3, 5681.0], [70.4, 5681.0], [70.5, 5706.0], [70.6, 5706.0], [70.7, 5706.0], [70.8, 5706.0], [70.9, 5742.0], [71.0, 5742.0], [71.1, 5742.0], [71.2, 5742.0], [71.3, 5783.0], [71.4, 5783.0], [71.5, 5783.0], [71.6, 5783.0], [71.7, 5873.0], [71.8, 5873.0], [71.9, 5873.0], [72.0, 5873.0], [72.1, 5975.0], [72.2, 5975.0], [72.3, 5975.0], [72.4, 5975.0], [72.5, 6016.0], [72.6, 6016.0], [72.7, 6016.0], [72.8, 6016.0], [72.9, 6016.0], [73.0, 6047.0], [73.1, 6047.0], [73.2, 6047.0], [73.3, 6047.0], [73.4, 6093.0], [73.5, 6093.0], [73.6, 6093.0], [73.7, 6093.0], [73.8, 6181.0], [73.9, 6181.0], [74.0, 6181.0], [74.1, 6181.0], [74.2, 6188.0], [74.3, 6188.0], [74.4, 6188.0], [74.5, 6188.0], [74.6, 6247.0], [74.7, 6247.0], [74.8, 6247.0], [74.9, 6247.0], [75.0, 6292.0], [75.1, 6292.0], [75.2, 6292.0], [75.3, 6292.0], [75.4, 6292.0], [75.5, 6296.0], [75.6, 6296.0], [75.7, 6296.0], [75.8, 6296.0], [75.9, 6317.0], [76.0, 6317.0], [76.1, 6317.0], [76.2, 6317.0], [76.3, 6354.0], [76.4, 6354.0], [76.5, 6354.0], [76.6, 6354.0], [76.7, 6387.0], [76.8, 6387.0], [76.9, 6387.0], [77.0, 6387.0], [77.1, 6410.0], [77.2, 6410.0], [77.3, 6410.0], [77.4, 6410.0], [77.5, 6410.0], [77.6, 6432.0], [77.7, 6432.0], [77.8, 6432.0], [77.9, 6432.0], [78.0, 6446.0], [78.1, 6446.0], [78.2, 6446.0], [78.3, 6446.0], [78.4, 6460.0], [78.5, 6460.0], [78.6, 6460.0], [78.7, 6460.0], [78.8, 6487.0], [78.9, 6487.0], [79.0, 6487.0], [79.1, 6487.0], [79.2, 6541.0], [79.3, 6541.0], [79.4, 6541.0], [79.5, 6541.0], [79.6, 6632.0], [79.7, 6632.0], [79.8, 6632.0], [79.9, 6632.0], [80.0, 6632.0], [80.1, 6637.0], [80.2, 6637.0], [80.3, 6637.0], [80.4, 6637.0], [80.5, 6695.0], [80.6, 6695.0], [80.7, 6695.0], [80.8, 6695.0], [80.9, 6754.0], [81.0, 6754.0], [81.1, 6754.0], [81.2, 6754.0], [81.3, 6873.0], [81.4, 6873.0], [81.5, 6873.0], [81.6, 6873.0], [81.7, 6905.0], [81.8, 6905.0], [81.9, 6905.0], [82.0, 6905.0], [82.1, 6912.0], [82.2, 6912.0], [82.3, 6912.0], [82.4, 6912.0], [82.5, 6912.0], [82.6, 6975.0], [82.7, 6975.0], [82.8, 6975.0], [82.9, 6975.0], [83.0, 6989.0], [83.1, 6989.0], [83.2, 6989.0], [83.3, 6989.0], [83.4, 7039.0], [83.5, 7039.0], [83.6, 7039.0], [83.7, 7039.0], [83.8, 7045.0], [83.9, 7045.0], [84.0, 7045.0], [84.1, 7045.0], [84.2, 7053.0], [84.3, 7053.0], [84.4, 7053.0], [84.5, 7053.0], [84.6, 7058.0], [84.7, 7058.0], [84.8, 7058.0], [84.9, 7058.0], [85.0, 7058.0], [85.1, 7069.0], [85.2, 7069.0], [85.3, 7069.0], [85.4, 7069.0], [85.5, 7380.0], [85.6, 7380.0], [85.7, 7380.0], [85.8, 7380.0], [85.9, 7411.0], [86.0, 7411.0], [86.1, 7411.0], [86.2, 7411.0], [86.3, 7426.0], [86.4, 7426.0], [86.5, 7426.0], [86.6, 7426.0], [86.7, 7435.0], [86.8, 7435.0], [86.9, 7435.0], [87.0, 7435.0], [87.1, 7519.0], [87.2, 7519.0], [87.3, 7519.0], [87.4, 7519.0], [87.5, 7519.0], [87.6, 7559.0], [87.7, 7559.0], [87.8, 7559.0], [87.9, 7559.0], [88.0, 7582.0], [88.1, 7582.0], [88.2, 7582.0], [88.3, 7582.0], [88.4, 7691.0], [88.5, 7691.0], [88.6, 7691.0], [88.7, 7691.0], [88.8, 7834.0], [88.9, 7834.0], [89.0, 7834.0], [89.1, 7834.0], [89.2, 8213.0], [89.3, 8213.0], [89.4, 8213.0], [89.5, 8213.0], [89.6, 8324.0], [89.7, 8324.0], [89.8, 8324.0], [89.9, 8324.0], [90.0, 8324.0], [90.1, 8352.0], [90.2, 8352.0], [90.3, 8352.0], [90.4, 8352.0], [90.5, 8432.0], [90.6, 8432.0], [90.7, 8432.0], [90.8, 8432.0], [90.9, 8528.0], [91.0, 8528.0], [91.1, 8528.0], [91.2, 8528.0], [91.3, 8552.0], [91.4, 8552.0], [91.5, 8552.0], [91.6, 8552.0], [91.7, 8753.0], [91.8, 8753.0], [91.9, 8753.0], [92.0, 8753.0], [92.1, 9116.0], [92.2, 9116.0], [92.3, 9116.0], [92.4, 9116.0], [92.5, 9116.0], [92.6, 9402.0], [92.7, 9402.0], [92.8, 9402.0], [92.9, 9402.0], [93.0, 9426.0], [93.1, 9426.0], [93.2, 9426.0], [93.3, 9426.0], [93.4, 9606.0], [93.5, 9606.0], [93.6, 9606.0], [93.7, 9606.0], [93.8, 9685.0], [93.9, 9685.0], [94.0, 9685.0], [94.1, 9685.0], [94.2, 9746.0], [94.3, 9746.0], [94.4, 9746.0], [94.5, 9746.0], [94.6, 9994.0], [94.7, 9994.0], [94.8, 9994.0], [94.9, 9994.0], [95.0, 9994.0], [95.1, 10577.0], [95.2, 10577.0], [95.3, 10577.0], [95.4, 10577.0], [95.5, 10734.0], [95.6, 10734.0], [95.7, 10734.0], [95.8, 10734.0], [95.9, 10767.0], [96.0, 10767.0], [96.1, 10767.0], [96.2, 10767.0], [96.3, 10882.0], [96.4, 10882.0], [96.5, 10882.0], [96.6, 10882.0], [96.7, 11362.0], [96.8, 11362.0], [96.9, 11362.0], [97.0, 11362.0], [97.1, 11396.0], [97.2, 11396.0], [97.3, 11396.0], [97.4, 11396.0], [97.5, 11396.0], [97.6, 11940.0], [97.7, 11940.0], [97.8, 11940.0], [97.9, 11940.0], [98.0, 12459.0], [98.1, 12459.0], [98.2, 12459.0], [98.3, 12459.0], [98.4, 13184.0], [98.5, 13184.0], [98.6, 13184.0], [98.7, 13184.0], [98.8, 13219.0], [98.9, 13219.0], [99.0, 13219.0], [99.1, 13219.0], [99.2, 13796.0], [99.3, 13796.0], [99.4, 13796.0], [99.5, 13796.0], [99.6, 14516.0], [99.7, 14516.0], [99.8, 14516.0], [99.9, 14516.0], [100.0, 14516.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 7.0, "series": [{"data": [[800.0, 1.0], [1000.0, 7.0], [1100.0, 2.0], [1200.0, 2.0], [1300.0, 2.0], [1400.0, 6.0], [1500.0, 6.0], [1600.0, 3.0], [1700.0, 7.0], [1800.0, 7.0], [1900.0, 5.0], [2100.0, 3.0], [2300.0, 4.0], [2200.0, 4.0], [2400.0, 5.0], [2500.0, 5.0], [2600.0, 3.0], [2800.0, 3.0], [2700.0, 3.0], [2900.0, 6.0], [3000.0, 6.0], [3100.0, 5.0], [3300.0, 3.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 3.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 5.0], [3900.0, 4.0], [4000.0, 2.0], [4100.0, 5.0], [4300.0, 5.0], [4200.0, 2.0], [4600.0, 6.0], [4400.0, 6.0], [4500.0, 2.0], [4800.0, 1.0], [5100.0, 2.0], [5000.0, 5.0], [4900.0, 3.0], [5300.0, 2.0], [5200.0, 2.0], [5400.0, 2.0], [5500.0, 1.0], [5600.0, 3.0], [5700.0, 3.0], [5800.0, 1.0], [6100.0, 2.0], [5900.0, 1.0], [6000.0, 3.0], [6300.0, 3.0], [6200.0, 3.0], [6400.0, 5.0], [6600.0, 3.0], [6500.0, 1.0], [6700.0, 1.0], [6900.0, 4.0], [6800.0, 1.0], [7000.0, 5.0], [7300.0, 1.0], [7400.0, 3.0], [7500.0, 3.0], [7600.0, 1.0], [7800.0, 1.0], [8500.0, 2.0], [8400.0, 1.0], [8700.0, 1.0], [8200.0, 1.0], [8300.0, 2.0], [9100.0, 1.0], [9600.0, 2.0], [9400.0, 2.0], [9700.0, 1.0], [9900.0, 1.0], [10700.0, 2.0], [10500.0, 1.0], [10800.0, 1.0], [11300.0, 2.0], [11900.0, 1.0], [12400.0, 1.0], [13100.0, 1.0], [13200.0, 1.0], [13700.0, 1.0], [14500.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 219.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 219.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79139558E12, "maxY": 2.5999999999999996, "series": [{"data": [[1.79139618E12, 1.1666666666666665], [1.79139648E12, 1.375], [1.79139588E12, 1.3333333333333333], [1.7913969E12, 2.166666666666667], [1.79139558E12, 1.0], [1.7913972E12, 1.0], [1.7913963E12, 1.0], [1.7913966E12, 1.1666666666666665], [1.7913957E12, 1.7142857142857144], [1.791396E12, 1.8], [1.79139702E12, 1.1428571428571428], [1.79139732E12, 1.2], [1.79139642E12, 1.5], [1.79139672E12, 1.5555555555555556], [1.79139582E12, 1.375], [1.79139612E12, 1.4444444444444444], [1.79139714E12, 1.2], [1.79139654E12, 1.0], [1.79139684E12, 2.5999999999999996], [1.79139594E12, 2.25], [1.79139624E12, 1.6363636363636365], [1.79139726E12, 1.5], [1.79139564E12, 2.5], [1.79139666E12, 1.6923076923076925], [1.79139696E12, 1.5555555555555554], [1.79139606E12, 1.4444444444444444], [1.79139636E12, 2.25], [1.79139738E12, 1.5], [1.79139576E12, 1.3333333333333333], [1.79139678E12, 1.5454545454545456], [1.79139708E12, 1.0]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79139738E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3713.1240875912413, "minX": 1.0, "maxY": 8552.0, "series": [{"data": [[1.0, 3713.1240875912413], [2.0, 5197.270270270273], [4.0, 7155.090909090909], [5.0, 8552.0], [3.0, 6807.411764705881]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.604166666666668, 4567.833333333335]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9.533333333333333, "minX": 1.79139558E12, "maxY": 245.63333333333333, "series": [{"data": [[1.79139618E12, 19.25], [1.79139648E12, 25.516666666666666], [1.79139588E12, 37.916666666666664], [1.7913969E12, 38.68333333333333], [1.79139558E12, 12.8], [1.7913972E12, 19.25], [1.7913963E12, 16.033333333333335], [1.7913966E12, 19.366666666666667], [1.7913957E12, 22.366666666666667], [1.791396E12, 32.28333333333333], [1.79139702E12, 22.383333333333333], [1.79139732E12, 16.15], [1.79139642E12, 25.883333333333333], [1.79139672E12, 28.833333333333332], [1.79139582E12, 25.616666666666667], [1.79139612E12, 28.766666666666666], [1.79139714E12, 15.983333333333333], [1.79139654E12, 9.533333333333333], [1.79139684E12, 32.13333333333333], [1.79139594E12, 25.866666666666667], [1.79139624E12, 35.18333333333333], [1.79139726E12, 25.133333333333333], [1.79139564E12, 32.28333333333333], [1.79139666E12, 41.733333333333334], [1.79139696E12, 28.966666666666665], [1.79139606E12, 28.733333333333334], [1.79139636E12, 25.366666666666667], [1.79139738E12, 118.48333333333333], [1.79139576E12, 9.7], [1.79139678E12, 35.13333333333333], [1.79139708E12, 12.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79139618E12, 114.81666666666666], [1.79139648E12, 140.76666666666668], [1.79139588E12, 175.28333333333333], [1.7913969E12, 215.71666666666667], [1.79139558E12, 52.18333333333333], [1.7913972E12, 146.23333333333332], [1.7913963E12, 86.11666666666666], [1.7913966E12, 102.08333333333333], [1.7913957E12, 140.86666666666667], [1.791396E12, 224.51666666666668], [1.79139702E12, 123.1], [1.79139732E12, 97.0], [1.79139642E12, 159.95], [1.79139672E12, 173.28333333333333], [1.79139582E12, 147.33333333333334], [1.79139612E12, 174.8], [1.79139714E12, 115.83333333333333], [1.79139654E12, 42.46666666666667], [1.79139684E12, 204.43333333333334], [1.79139594E12, 152.13333333333333], [1.79139624E12, 177.63333333333333], [1.79139726E12, 168.51666666666668], [1.79139564E12, 198.45], [1.79139666E12, 245.63333333333333], [1.79139696E12, 193.0], [1.79139606E12, 188.21666666666667], [1.79139636E12, 144.88333333333333], [1.79139738E12, 76.53333333333333], [1.79139576E12, 51.9], [1.79139678E12, 177.73333333333332], [1.79139708E12, 52.31666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79139738E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2189.5, "minX": 1.79139558E12, "maxY": 8132.499999999998, "series": [{"data": [[1.79139618E12, 3405.6666666666665], [1.79139648E12, 3612.2499999999995], [1.79139588E12, 3155.3333333333335], [1.7913969E12, 6086.166666666667], [1.79139558E12, 2189.5], [1.7913972E12, 4717.166666666666], [1.7913963E12, 2898.8], [1.7913966E12, 3079.3333333333335], [1.7913957E12, 5770.714285714286], [1.791396E12, 5277.2], [1.79139702E12, 3505.5714285714284], [1.79139732E12, 3314.8], [1.79139642E12, 6314.5], [1.79139672E12, 4343.444444444444], [1.79139582E12, 3904.375], [1.79139612E12, 3727.3333333333335], [1.79139714E12, 4002.6], [1.79139654E12, 2469.3333333333335], [1.79139684E12, 7246.799999999999], [1.79139594E12, 6329.875], [1.79139624E12, 3630.727272727273], [1.79139726E12, 4755.5], [1.79139564E12, 8132.499999999998], [1.79139666E12, 4040.7692307692314], [1.79139696E12, 4775.333333333333], [1.79139606E12, 5787.11111111111], [1.79139636E12, 4279.75], [1.79139738E12, 4012.5], [1.79139576E12, 3784.3333333333335], [1.79139678E12, 3748.909090909091], [1.79139708E12, 2255.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79139738E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2189.0, "minX": 1.79139558E12, "maxY": 8132.499999999998, "series": [{"data": [[1.79139618E12, 3405.6666666666665], [1.79139648E12, 3612.1249999999995], [1.79139588E12, 3155.1666666666665], [1.7913969E12, 6086.083333333334], [1.79139558E12, 2189.0], [1.7913972E12, 4717.166666666666], [1.7913963E12, 2898.6], [1.7913966E12, 3079.3333333333335], [1.7913957E12, 5770.714285714286], [1.791396E12, 5277.2], [1.79139702E12, 3505.5714285714284], [1.79139732E12, 3314.6], [1.79139642E12, 6314.375], [1.79139672E12, 4343.444444444444], [1.79139582E12, 3904.250000000001], [1.79139612E12, 3727.1111111111113], [1.79139714E12, 4002.6], [1.79139654E12, 2469.3333333333335], [1.79139684E12, 7246.799999999999], [1.79139594E12, 6329.75], [1.79139624E12, 3630.727272727273], [1.79139726E12, 4755.5], [1.79139564E12, 8132.499999999998], [1.79139666E12, 4040.6923076923076], [1.79139696E12, 4775.222222222223], [1.79139606E12, 5787.11111111111], [1.79139636E12, 4279.75], [1.79139738E12, 3458.5], [1.79139576E12, 3784.3333333333335], [1.79139678E12, 3748.909090909091], [1.79139708E12, 2254.75]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79139738E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.7142857142857135, "minX": 1.79139558E12, "maxY": 15.2, "series": [{"data": [[1.79139618E12, 10.333333333333332], [1.79139648E12, 9.25], [1.79139588E12, 9.416666666666664], [1.7913969E12, 11.333333333333332], [1.79139558E12, 12.0], [1.7913972E12, 11.333333333333332], [1.7913963E12, 9.2], [1.7913966E12, 10.833333333333334], [1.7913957E12, 7.7142857142857135], [1.791396E12, 9.7], [1.79139702E12, 9.428571428571429], [1.79139732E12, 10.4], [1.79139642E12, 12.125], [1.79139672E12, 9.777777777777777], [1.79139582E12, 10.375], [1.79139612E12, 11.777777777777779], [1.79139714E12, 15.2], [1.79139654E12, 11.666666666666666], [1.79139684E12, 13.1], [1.79139594E12, 11.25], [1.79139624E12, 9.0], [1.79139726E12, 11.749999999999998], [1.79139564E12, 14.6], [1.79139666E12, 10.923076923076923], [1.79139696E12, 10.11111111111111], [1.79139606E12, 12.222222222222221], [1.79139636E12, 10.75], [1.79139738E12, 10.833333333333334], [1.79139576E12, 9.0], [1.79139678E12, 10.090909090909092], [1.79139708E12, 13.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79139738E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 889.0, "minX": 1.79139558E12, "maxY": 14516.0, "series": [{"data": [[1.79139618E12, 6632.0], [1.79139648E12, 6296.0], [1.79139588E12, 6181.0], [1.7913969E12, 9426.0], [1.79139558E12, 5106.0], [1.7913972E12, 9746.0], [1.7913963E12, 4357.0], [1.7913966E12, 6317.0], [1.7913957E12, 7582.0], [1.791396E12, 9116.0], [1.79139702E12, 7058.0], [1.79139732E12, 5385.0], [1.79139642E12, 13219.0], [1.79139672E12, 6975.0], [1.79139582E12, 8432.0], [1.79139612E12, 6188.0], [1.79139714E12, 6047.0], [1.79139654E12, 2740.0], [1.79139684E12, 13796.0], [1.79139594E12, 10882.0], [1.79139624E12, 8753.0], [1.79139726E12, 11940.0], [1.79139564E12, 14516.0], [1.79139666E12, 5276.0], [1.79139696E12, 10734.0], [1.79139606E12, 9994.0], [1.79139636E12, 7426.0], [1.79139738E12, 8528.0], [1.79139576E12, 4628.0], [1.79139678E12, 7411.0], [1.79139708E12, 3864.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79139618E12, 6632.0], [1.79139648E12, 6296.0], [1.79139588E12, 5929.300000000001], [1.7913969E12, 9418.8], [1.79139558E12, 5106.0], [1.7913972E12, 9746.0], [1.7913963E12, 4357.0], [1.7913966E12, 6317.0], [1.7913957E12, 7582.0], [1.791396E12, 8947.900000000001], [1.79139702E12, 7058.0], [1.79139732E12, 5385.0], [1.79139642E12, 13219.0], [1.79139672E12, 6975.0], [1.79139582E12, 8432.0], [1.79139612E12, 6188.0], [1.79139714E12, 6047.0], [1.79139654E12, 2740.0], [1.79139684E12, 13662.300000000001], [1.79139594E12, 10882.0], [1.79139624E12, 8221.000000000002], [1.79139726E12, 11940.0], [1.79139564E12, 14382.800000000001], [1.79139666E12, 5151.2], [1.79139696E12, 10734.0], [1.79139606E12, 9994.0], [1.79139636E12, 7426.0], [1.79139738E12, 8528.0], [1.79139576E12, 4628.0], [1.79139678E12, 7085.4000000000015], [1.79139708E12, 3864.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79139618E12, 6632.0], [1.79139648E12, 6296.0], [1.79139588E12, 6181.0], [1.7913969E12, 9426.0], [1.79139558E12, 5106.0], [1.7913972E12, 9746.0], [1.7913963E12, 4357.0], [1.7913966E12, 6317.0], [1.7913957E12, 7582.0], [1.791396E12, 9116.0], [1.79139702E12, 7058.0], [1.79139732E12, 5385.0], [1.79139642E12, 13219.0], [1.79139672E12, 6975.0], [1.79139582E12, 8432.0], [1.79139612E12, 6188.0], [1.79139714E12, 6047.0], [1.79139654E12, 2740.0], [1.79139684E12, 13796.0], [1.79139594E12, 10882.0], [1.79139624E12, 8753.0], [1.79139726E12, 11940.0], [1.79139564E12, 14516.0], [1.79139666E12, 5276.0], [1.79139696E12, 10734.0], [1.79139606E12, 9994.0], [1.79139636E12, 7426.0], [1.79139738E12, 8528.0], [1.79139576E12, 4628.0], [1.79139678E12, 7411.0], [1.79139708E12, 3864.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79139618E12, 6632.0], [1.79139648E12, 6296.0], [1.79139588E12, 6181.0], [1.7913969E12, 9426.0], [1.79139558E12, 5106.0], [1.7913972E12, 9746.0], [1.7913963E12, 4357.0], [1.7913966E12, 6317.0], [1.7913957E12, 7582.0], [1.791396E12, 9116.0], [1.79139702E12, 7058.0], [1.79139732E12, 5385.0], [1.79139642E12, 13219.0], [1.79139672E12, 6975.0], [1.79139582E12, 8432.0], [1.79139612E12, 6188.0], [1.79139714E12, 6047.0], [1.79139654E12, 2740.0], [1.79139684E12, 13796.0], [1.79139594E12, 10882.0], [1.79139624E12, 8753.0], [1.79139726E12, 11940.0], [1.79139564E12, 14516.0], [1.79139666E12, 5276.0], [1.79139696E12, 10734.0], [1.79139606E12, 9994.0], [1.79139636E12, 7426.0], [1.79139738E12, 8528.0], [1.79139576E12, 4628.0], [1.79139678E12, 7411.0], [1.79139708E12, 3864.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79139618E12, 1941.0], [1.79139648E12, 889.0], [1.79139588E12, 1050.0], [1.7913969E12, 1593.0], [1.79139558E12, 1060.0], [1.7913972E12, 1851.0], [1.7913963E12, 1316.0], [1.7913966E12, 1551.0], [1.7913957E12, 2468.0], [1.791396E12, 1557.0], [1.79139702E12, 1502.0], [1.79139732E12, 1485.0], [1.79139642E12, 2951.0], [1.79139672E12, 1483.0], [1.79139582E12, 1799.0], [1.79139612E12, 1847.0], [1.79139714E12, 1811.0], [1.79139654E12, 2293.0], [1.79139684E12, 1545.0], [1.79139594E12, 1093.0], [1.79139624E12, 1097.0], [1.79139726E12, 2241.0], [1.79139564E12, 1876.0], [1.79139666E12, 1015.0], [1.79139696E12, 1526.0], [1.79139606E12, 1053.0], [1.79139636E12, 2796.0], [1.79139738E12, 1032.0], [1.79139576E12, 2809.0], [1.79139678E12, 1111.0], [1.79139708E12, 1498.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79139618E12, 2734.5], [1.79139648E12, 3462.5], [1.79139588E12, 2747.5], [1.7913969E12, 6947.0], [1.79139558E12, 1296.0], [1.7913972E12, 4215.0], [1.7913963E12, 3169.0], [1.7913966E12, 2647.5], [1.7913957E12, 6446.0], [1.791396E12, 5441.5], [1.79139702E12, 2677.0], [1.79139732E12, 3126.0], [1.79139642E12, 4879.5], [1.79139672E12, 4394.0], [1.79139582E12, 3253.5], [1.79139612E12, 3765.0], [1.79139714E12, 3848.0], [1.79139654E12, 2375.0], [1.79139684E12, 6956.0], [1.79139594E12, 6524.5], [1.79139624E12, 3048.0], [1.79139726E12, 3751.0], [1.79139564E12, 7966.0], [1.79139666E12, 4394.0], [1.79139696E12, 4163.0], [1.79139606E12, 6016.0], [1.79139636E12, 3492.5], [1.79139738E12, 5595.5], [1.79139576E12, 3916.0], [1.79139678E12, 3429.0], [1.79139708E12, 1829.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79139738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1662.0, "minX": 1.0, "maxY": 4063.0, "series": [{"data": [[1.0, 4063.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1662.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4063.0, "series": [{"data": [[1.0, 4063.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.79139558E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79139618E12, 0.11666666666666667], [1.79139648E12, 0.11666666666666667], [1.79139588E12, 0.2], [1.7913969E12, 0.15], [1.79139558E12, 0.06666666666666667], [1.7913972E12, 0.08333333333333333], [1.7913963E12, 0.08333333333333333], [1.7913966E12, 0.1], [1.7913957E12, 0.11666666666666667], [1.791396E12, 0.21666666666666667], [1.79139702E12, 0.11666666666666667], [1.79139732E12, 0.1], [1.79139642E12, 0.11666666666666667], [1.79139672E12, 0.11666666666666667], [1.79139582E12, 0.1], [1.79139612E12, 0.16666666666666666], [1.79139714E12, 0.08333333333333333], [1.79139654E12, 0.06666666666666667], [1.79139684E12, 0.21666666666666667], [1.79139594E12, 0.13333333333333333], [1.79139624E12, 0.15], [1.79139726E12, 0.13333333333333333], [1.79139564E12, 0.16666666666666666], [1.79139666E12, 0.23333333333333334], [1.79139696E12, 0.16666666666666666], [1.79139606E12, 0.1], [1.79139636E12, 0.16666666666666666], [1.79139738E12, 0.08333333333333333], [1.79139576E12, 0.08333333333333333], [1.79139678E12, 0.18333333333333332], [1.79139708E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79139738E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79139558E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79139618E12, 0.1], [1.79139648E12, 0.13333333333333333], [1.79139588E12, 0.2], [1.7913969E12, 0.2], [1.79139558E12, 0.06666666666666667], [1.7913972E12, 0.1], [1.7913963E12, 0.08333333333333333], [1.7913966E12, 0.1], [1.7913957E12, 0.11666666666666667], [1.791396E12, 0.16666666666666666], [1.79139702E12, 0.11666666666666667], [1.79139732E12, 0.08333333333333333], [1.79139642E12, 0.13333333333333333], [1.79139672E12, 0.15], [1.79139582E12, 0.13333333333333333], [1.79139612E12, 0.15], [1.79139714E12, 0.08333333333333333], [1.79139654E12, 0.05], [1.79139684E12, 0.16666666666666666], [1.79139594E12, 0.13333333333333333], [1.79139624E12, 0.18333333333333332], [1.79139726E12, 0.13333333333333333], [1.79139564E12, 0.16666666666666666], [1.79139666E12, 0.21666666666666667], [1.79139696E12, 0.15], [1.79139606E12, 0.15], [1.79139636E12, 0.13333333333333333], [1.79139738E12, 0.06666666666666667], [1.79139576E12, 0.05], [1.79139678E12, 0.18333333333333332], [1.79139708E12, 0.06666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79139738E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79139738E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79139558E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79139618E12, 0.1], [1.79139648E12, 0.13333333333333333], [1.79139588E12, 0.2], [1.7913969E12, 0.2], [1.79139558E12, 0.06666666666666667], [1.7913972E12, 0.1], [1.7913963E12, 0.08333333333333333], [1.7913966E12, 0.1], [1.7913957E12, 0.11666666666666667], [1.791396E12, 0.16666666666666666], [1.79139702E12, 0.11666666666666667], [1.79139732E12, 0.08333333333333333], [1.79139642E12, 0.13333333333333333], [1.79139672E12, 0.15], [1.79139582E12, 0.13333333333333333], [1.79139612E12, 0.15], [1.79139714E12, 0.08333333333333333], [1.79139654E12, 0.05], [1.79139684E12, 0.16666666666666666], [1.79139594E12, 0.13333333333333333], [1.79139624E12, 0.18333333333333332], [1.79139726E12, 0.13333333333333333], [1.79139564E12, 0.16666666666666666], [1.79139666E12, 0.21666666666666667], [1.79139696E12, 0.15], [1.79139606E12, 0.15], [1.79139636E12, 0.13333333333333333], [1.79139738E12, 0.06666666666666667], [1.79139576E12, 0.05], [1.79139678E12, 0.18333333333333332], [1.79139708E12, 0.06666666666666667]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79139738E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79139738E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79139558E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79139618E12, 0.1], [1.79139648E12, 0.13333333333333333], [1.79139588E12, 0.2], [1.7913969E12, 0.2], [1.79139558E12, 0.06666666666666667], [1.7913972E12, 0.1], [1.7913963E12, 0.08333333333333333], [1.7913966E12, 0.1], [1.7913957E12, 0.11666666666666667], [1.791396E12, 0.16666666666666666], [1.79139702E12, 0.11666666666666667], [1.79139732E12, 0.08333333333333333], [1.79139642E12, 0.13333333333333333], [1.79139672E12, 0.15], [1.79139582E12, 0.13333333333333333], [1.79139612E12, 0.15], [1.79139714E12, 0.08333333333333333], [1.79139654E12, 0.05], [1.79139684E12, 0.16666666666666666], [1.79139594E12, 0.13333333333333333], [1.79139624E12, 0.18333333333333332], [1.79139726E12, 0.13333333333333333], [1.79139564E12, 0.16666666666666666], [1.79139666E12, 0.21666666666666667], [1.79139696E12, 0.15], [1.79139606E12, 0.15], [1.79139636E12, 0.13333333333333333], [1.79139738E12, 0.06666666666666667], [1.79139576E12, 0.05], [1.79139678E12, 0.18333333333333332], [1.79139708E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79139738E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79139738E12, "title": "Total Transactions Per Second"}},
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

