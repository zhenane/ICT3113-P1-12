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
        data: {"result": {"minY": 818.0, "minX": 0.0, "maxY": 19004.0, "series": [{"data": [[0.0, 818.0], [0.1, 818.0], [0.2, 818.0], [0.3, 818.0], [0.4, 818.0], [0.5, 1008.0], [0.6, 1008.0], [0.7, 1008.0], [0.8, 1008.0], [0.9, 1014.0], [1.0, 1014.0], [1.1, 1014.0], [1.2, 1014.0], [1.3, 1059.0], [1.4, 1059.0], [1.5, 1059.0], [1.6, 1059.0], [1.7, 1061.0], [1.8, 1061.0], [1.9, 1061.0], [2.0, 1061.0], [2.1, 1070.0], [2.2, 1070.0], [2.3, 1070.0], [2.4, 1070.0], [2.5, 1208.0], [2.6, 1208.0], [2.7, 1208.0], [2.8, 1208.0], [2.9, 1208.0], [3.0, 1227.0], [3.1, 1227.0], [3.2, 1227.0], [3.3, 1227.0], [3.4, 1260.0], [3.5, 1260.0], [3.6, 1260.0], [3.7, 1260.0], [3.8, 1280.0], [3.9, 1280.0], [4.0, 1280.0], [4.1, 1280.0], [4.2, 1295.0], [4.3, 1295.0], [4.4, 1295.0], [4.5, 1295.0], [4.6, 1410.0], [4.7, 1410.0], [4.8, 1410.0], [4.9, 1410.0], [5.0, 1436.0], [5.1, 1436.0], [5.2, 1436.0], [5.3, 1436.0], [5.4, 1436.0], [5.5, 1449.0], [5.6, 1449.0], [5.7, 1449.0], [5.8, 1449.0], [5.9, 1464.0], [6.0, 1464.0], [6.1, 1464.0], [6.2, 1464.0], [6.3, 1467.0], [6.4, 1467.0], [6.5, 1467.0], [6.6, 1467.0], [6.7, 1472.0], [6.8, 1472.0], [6.9, 1472.0], [7.0, 1472.0], [7.1, 1473.0], [7.2, 1473.0], [7.3, 1473.0], [7.4, 1473.0], [7.5, 1473.0], [7.6, 1528.0], [7.7, 1528.0], [7.8, 1528.0], [7.9, 1528.0], [8.0, 1552.0], [8.1, 1552.0], [8.2, 1552.0], [8.3, 1552.0], [8.4, 1563.0], [8.5, 1563.0], [8.6, 1563.0], [8.7, 1563.0], [8.8, 1590.0], [8.9, 1590.0], [9.0, 1590.0], [9.1, 1590.0], [9.2, 1601.0], [9.3, 1601.0], [9.4, 1601.0], [9.5, 1601.0], [9.6, 1618.0], [9.7, 1618.0], [9.8, 1618.0], [9.9, 1618.0], [10.0, 1620.0], [10.1, 1620.0], [10.2, 1620.0], [10.3, 1620.0], [10.4, 1620.0], [10.5, 1667.0], [10.6, 1667.0], [10.7, 1667.0], [10.8, 1667.0], [10.9, 1694.0], [11.0, 1694.0], [11.1, 1694.0], [11.2, 1694.0], [11.3, 1699.0], [11.4, 1699.0], [11.5, 1699.0], [11.6, 1699.0], [11.7, 1734.0], [11.8, 1734.0], [11.9, 1734.0], [12.0, 1734.0], [12.1, 1743.0], [12.2, 1743.0], [12.3, 1743.0], [12.4, 1743.0], [12.5, 1749.0], [12.6, 1749.0], [12.7, 1749.0], [12.8, 1749.0], [12.9, 1749.0], [13.0, 1790.0], [13.1, 1790.0], [13.2, 1790.0], [13.3, 1790.0], [13.4, 1805.0], [13.5, 1805.0], [13.6, 1805.0], [13.7, 1805.0], [13.8, 1812.0], [13.9, 1812.0], [14.0, 1812.0], [14.1, 1812.0], [14.2, 1834.0], [14.3, 1834.0], [14.4, 1834.0], [14.5, 1834.0], [14.6, 1837.0], [14.7, 1837.0], [14.8, 1837.0], [14.9, 1837.0], [15.0, 1889.0], [15.1, 1889.0], [15.2, 1889.0], [15.3, 1889.0], [15.4, 1889.0], [15.5, 1893.0], [15.6, 1893.0], [15.7, 1893.0], [15.8, 1893.0], [15.9, 1912.0], [16.0, 1912.0], [16.1, 1912.0], [16.2, 1912.0], [16.3, 1918.0], [16.4, 1918.0], [16.5, 1918.0], [16.6, 1918.0], [16.7, 1925.0], [16.8, 1925.0], [16.9, 1925.0], [17.0, 1925.0], [17.1, 1968.0], [17.2, 1968.0], [17.3, 1968.0], [17.4, 1968.0], [17.5, 1977.0], [17.6, 1977.0], [17.7, 1977.0], [17.8, 1977.0], [17.9, 1977.0], [18.0, 2020.0], [18.1, 2020.0], [18.2, 2020.0], [18.3, 2020.0], [18.4, 2089.0], [18.5, 2089.0], [18.6, 2089.0], [18.7, 2089.0], [18.8, 2182.0], [18.9, 2182.0], [19.0, 2182.0], [19.1, 2182.0], [19.2, 2220.0], [19.3, 2220.0], [19.4, 2220.0], [19.5, 2220.0], [19.6, 2252.0], [19.7, 2252.0], [19.8, 2252.0], [19.9, 2252.0], [20.0, 2252.0], [20.1, 2314.0], [20.2, 2314.0], [20.3, 2314.0], [20.4, 2314.0], [20.5, 2320.0], [20.6, 2320.0], [20.7, 2320.0], [20.8, 2320.0], [20.9, 2343.0], [21.0, 2343.0], [21.1, 2343.0], [21.2, 2343.0], [21.3, 2356.0], [21.4, 2356.0], [21.5, 2356.0], [21.6, 2356.0], [21.7, 2399.0], [21.8, 2399.0], [21.9, 2399.0], [22.0, 2399.0], [22.1, 2424.0], [22.2, 2424.0], [22.3, 2424.0], [22.4, 2424.0], [22.5, 2424.0], [22.6, 2426.0], [22.7, 2426.0], [22.8, 2426.0], [22.9, 2426.0], [23.0, 2429.0], [23.1, 2429.0], [23.2, 2429.0], [23.3, 2429.0], [23.4, 2435.0], [23.5, 2435.0], [23.6, 2435.0], [23.7, 2435.0], [23.8, 2457.0], [23.9, 2457.0], [24.0, 2457.0], [24.1, 2457.0], [24.2, 2489.0], [24.3, 2489.0], [24.4, 2489.0], [24.5, 2489.0], [24.6, 2544.0], [24.7, 2544.0], [24.8, 2544.0], [24.9, 2544.0], [25.0, 2544.0], [25.1, 2563.0], [25.2, 2563.0], [25.3, 2563.0], [25.4, 2563.0], [25.5, 2573.0], [25.6, 2573.0], [25.7, 2573.0], [25.8, 2573.0], [25.9, 2592.0], [26.0, 2592.0], [26.1, 2592.0], [26.2, 2592.0], [26.3, 2608.0], [26.4, 2608.0], [26.5, 2608.0], [26.6, 2608.0], [26.7, 2666.0], [26.8, 2666.0], [26.9, 2666.0], [27.0, 2666.0], [27.1, 2671.0], [27.2, 2671.0], [27.3, 2671.0], [27.4, 2671.0], [27.5, 2671.0], [27.6, 2695.0], [27.7, 2695.0], [27.8, 2695.0], [27.9, 2695.0], [28.0, 2703.0], [28.1, 2703.0], [28.2, 2703.0], [28.3, 2703.0], [28.4, 2710.0], [28.5, 2710.0], [28.6, 2710.0], [28.7, 2710.0], [28.8, 2738.0], [28.9, 2738.0], [29.0, 2738.0], [29.1, 2738.0], [29.2, 2823.0], [29.3, 2823.0], [29.4, 2823.0], [29.5, 2823.0], [29.6, 2833.0], [29.7, 2833.0], [29.8, 2833.0], [29.9, 2833.0], [30.0, 2833.0], [30.1, 2955.0], [30.2, 2955.0], [30.3, 2955.0], [30.4, 2955.0], [30.5, 2964.0], [30.6, 2964.0], [30.7, 2964.0], [30.8, 2964.0], [30.9, 2971.0], [31.0, 2971.0], [31.1, 2971.0], [31.2, 2971.0], [31.3, 3009.0], [31.4, 3009.0], [31.5, 3009.0], [31.6, 3009.0], [31.7, 3027.0], [31.8, 3027.0], [31.9, 3027.0], [32.0, 3027.0], [32.1, 3043.0], [32.2, 3043.0], [32.3, 3043.0], [32.4, 3043.0], [32.5, 3043.0], [32.6, 3119.0], [32.7, 3119.0], [32.8, 3119.0], [32.9, 3119.0], [33.0, 3136.0], [33.1, 3136.0], [33.2, 3136.0], [33.3, 3136.0], [33.4, 3142.0], [33.5, 3142.0], [33.6, 3142.0], [33.7, 3142.0], [33.8, 3143.0], [33.9, 3143.0], [34.0, 3143.0], [34.1, 3143.0], [34.2, 3146.0], [34.3, 3146.0], [34.4, 3146.0], [34.5, 3146.0], [34.6, 3154.0], [34.7, 3154.0], [34.8, 3154.0], [34.9, 3154.0], [35.0, 3154.0], [35.1, 3176.0], [35.2, 3176.0], [35.3, 3176.0], [35.4, 3176.0], [35.5, 3184.0], [35.6, 3184.0], [35.7, 3184.0], [35.8, 3184.0], [35.9, 3184.0], [36.0, 3184.0], [36.1, 3184.0], [36.2, 3184.0], [36.3, 3187.0], [36.4, 3187.0], [36.5, 3187.0], [36.6, 3187.0], [36.7, 3192.0], [36.8, 3192.0], [36.9, 3192.0], [37.0, 3192.0], [37.1, 3200.0], [37.2, 3200.0], [37.3, 3200.0], [37.4, 3200.0], [37.5, 3200.0], [37.6, 3205.0], [37.7, 3205.0], [37.8, 3205.0], [37.9, 3205.0], [38.0, 3266.0], [38.1, 3266.0], [38.2, 3266.0], [38.3, 3266.0], [38.4, 3373.0], [38.5, 3373.0], [38.6, 3373.0], [38.7, 3373.0], [38.8, 3401.0], [38.9, 3401.0], [39.0, 3401.0], [39.1, 3401.0], [39.2, 3479.0], [39.3, 3479.0], [39.4, 3479.0], [39.5, 3479.0], [39.6, 3498.0], [39.7, 3498.0], [39.8, 3498.0], [39.9, 3498.0], [40.0, 3504.0], [40.1, 3504.0], [40.2, 3504.0], [40.3, 3504.0], [40.4, 3504.0], [40.5, 3508.0], [40.6, 3508.0], [40.7, 3508.0], [40.8, 3508.0], [40.9, 3571.0], [41.0, 3571.0], [41.1, 3571.0], [41.2, 3571.0], [41.3, 3596.0], [41.4, 3596.0], [41.5, 3596.0], [41.6, 3596.0], [41.7, 3631.0], [41.8, 3631.0], [41.9, 3631.0], [42.0, 3631.0], [42.1, 3699.0], [42.2, 3699.0], [42.3, 3699.0], [42.4, 3699.0], [42.5, 3700.0], [42.6, 3700.0], [42.7, 3700.0], [42.8, 3700.0], [42.9, 3700.0], [43.0, 3744.0], [43.1, 3744.0], [43.2, 3744.0], [43.3, 3744.0], [43.4, 3771.0], [43.5, 3771.0], [43.6, 3771.0], [43.7, 3771.0], [43.8, 3816.0], [43.9, 3816.0], [44.0, 3816.0], [44.1, 3816.0], [44.2, 3859.0], [44.3, 3859.0], [44.4, 3859.0], [44.5, 3859.0], [44.6, 3892.0], [44.7, 3892.0], [44.8, 3892.0], [44.9, 3892.0], [45.0, 3928.0], [45.1, 3928.0], [45.2, 3928.0], [45.3, 3928.0], [45.4, 3928.0], [45.5, 4003.0], [45.6, 4003.0], [45.7, 4003.0], [45.8, 4003.0], [45.9, 4024.0], [46.0, 4024.0], [46.1, 4024.0], [46.2, 4024.0], [46.3, 4070.0], [46.4, 4070.0], [46.5, 4070.0], [46.6, 4070.0], [46.7, 4085.0], [46.8, 4085.0], [46.9, 4085.0], [47.0, 4085.0], [47.1, 4110.0], [47.2, 4110.0], [47.3, 4110.0], [47.4, 4110.0], [47.5, 4120.0], [47.6, 4120.0], [47.7, 4120.0], [47.8, 4120.0], [47.9, 4120.0], [48.0, 4189.0], [48.1, 4189.0], [48.2, 4189.0], [48.3, 4189.0], [48.4, 4194.0], [48.5, 4194.0], [48.6, 4194.0], [48.7, 4194.0], [48.8, 4201.0], [48.9, 4201.0], [49.0, 4201.0], [49.1, 4201.0], [49.2, 4256.0], [49.3, 4256.0], [49.4, 4256.0], [49.5, 4256.0], [49.6, 4327.0], [49.7, 4327.0], [49.8, 4327.0], [49.9, 4327.0], [50.0, 4341.0], [50.1, 4341.0], [50.2, 4341.0], [50.3, 4341.0], [50.4, 4341.0], [50.5, 4379.0], [50.6, 4379.0], [50.7, 4379.0], [50.8, 4379.0], [50.9, 4412.0], [51.0, 4412.0], [51.1, 4412.0], [51.2, 4412.0], [51.3, 4433.0], [51.4, 4433.0], [51.5, 4433.0], [51.6, 4433.0], [51.7, 4440.0], [51.8, 4440.0], [51.9, 4440.0], [52.0, 4440.0], [52.1, 4472.0], [52.2, 4472.0], [52.3, 4472.0], [52.4, 4472.0], [52.5, 4489.0], [52.6, 4489.0], [52.7, 4489.0], [52.8, 4489.0], [52.9, 4489.0], [53.0, 4547.0], [53.1, 4547.0], [53.2, 4547.0], [53.3, 4547.0], [53.4, 4566.0], [53.5, 4566.0], [53.6, 4566.0], [53.7, 4566.0], [53.8, 4571.0], [53.9, 4571.0], [54.0, 4571.0], [54.1, 4571.0], [54.2, 4577.0], [54.3, 4577.0], [54.4, 4577.0], [54.5, 4577.0], [54.6, 4606.0], [54.7, 4606.0], [54.8, 4606.0], [54.9, 4606.0], [55.0, 4652.0], [55.1, 4652.0], [55.2, 4652.0], [55.3, 4652.0], [55.4, 4652.0], [55.5, 4677.0], [55.6, 4677.0], [55.7, 4677.0], [55.8, 4677.0], [55.9, 4707.0], [56.0, 4707.0], [56.1, 4707.0], [56.2, 4707.0], [56.3, 4711.0], [56.4, 4711.0], [56.5, 4711.0], [56.6, 4711.0], [56.7, 4844.0], [56.8, 4844.0], [56.9, 4844.0], [57.0, 4844.0], [57.1, 4873.0], [57.2, 4873.0], [57.3, 4873.0], [57.4, 4873.0], [57.5, 4874.0], [57.6, 4874.0], [57.7, 4874.0], [57.8, 4874.0], [57.9, 4874.0], [58.0, 4933.0], [58.1, 4933.0], [58.2, 4933.0], [58.3, 4933.0], [58.4, 4935.0], [58.5, 4935.0], [58.6, 4935.0], [58.7, 4935.0], [58.8, 5004.0], [58.9, 5004.0], [59.0, 5004.0], [59.1, 5004.0], [59.2, 5113.0], [59.3, 5113.0], [59.4, 5113.0], [59.5, 5113.0], [59.6, 5284.0], [59.7, 5284.0], [59.8, 5284.0], [59.9, 5284.0], [60.0, 5290.0], [60.1, 5290.0], [60.2, 5290.0], [60.3, 5290.0], [60.4, 5290.0], [60.5, 5314.0], [60.6, 5314.0], [60.7, 5314.0], [60.8, 5314.0], [60.9, 5437.0], [61.0, 5437.0], [61.1, 5437.0], [61.2, 5437.0], [61.3, 5481.0], [61.4, 5481.0], [61.5, 5481.0], [61.6, 5481.0], [61.7, 5481.0], [61.8, 5481.0], [61.9, 5481.0], [62.0, 5481.0], [62.1, 5524.0], [62.2, 5524.0], [62.3, 5524.0], [62.4, 5524.0], [62.5, 5562.0], [62.6, 5562.0], [62.7, 5562.0], [62.8, 5562.0], [62.9, 5562.0], [63.0, 5578.0], [63.1, 5578.0], [63.2, 5578.0], [63.3, 5578.0], [63.4, 5635.0], [63.5, 5635.0], [63.6, 5635.0], [63.7, 5635.0], [63.8, 5657.0], [63.9, 5657.0], [64.0, 5657.0], [64.1, 5657.0], [64.2, 5701.0], [64.3, 5701.0], [64.4, 5701.0], [64.5, 5701.0], [64.6, 5745.0], [64.7, 5745.0], [64.8, 5745.0], [64.9, 5745.0], [65.0, 5831.0], [65.1, 5831.0], [65.2, 5831.0], [65.3, 5831.0], [65.4, 5831.0], [65.5, 5927.0], [65.6, 5927.0], [65.7, 5927.0], [65.8, 5927.0], [65.9, 5946.0], [66.0, 5946.0], [66.1, 5946.0], [66.2, 5946.0], [66.3, 6045.0], [66.4, 6045.0], [66.5, 6045.0], [66.6, 6045.0], [66.7, 6058.0], [66.8, 6058.0], [66.9, 6058.0], [67.0, 6058.0], [67.1, 6113.0], [67.2, 6113.0], [67.3, 6113.0], [67.4, 6113.0], [67.5, 6129.0], [67.6, 6129.0], [67.7, 6129.0], [67.8, 6129.0], [67.9, 6129.0], [68.0, 6159.0], [68.1, 6159.0], [68.2, 6159.0], [68.3, 6159.0], [68.4, 6234.0], [68.5, 6234.0], [68.6, 6234.0], [68.7, 6234.0], [68.8, 6257.0], [68.9, 6257.0], [69.0, 6257.0], [69.1, 6257.0], [69.2, 6291.0], [69.3, 6291.0], [69.4, 6291.0], [69.5, 6291.0], [69.6, 6294.0], [69.7, 6294.0], [69.8, 6294.0], [69.9, 6294.0], [70.0, 6346.0], [70.1, 6346.0], [70.2, 6346.0], [70.3, 6346.0], [70.4, 6346.0], [70.5, 6368.0], [70.6, 6368.0], [70.7, 6368.0], [70.8, 6368.0], [70.9, 6387.0], [71.0, 6387.0], [71.1, 6387.0], [71.2, 6387.0], [71.3, 6400.0], [71.4, 6400.0], [71.5, 6400.0], [71.6, 6400.0], [71.7, 6483.0], [71.8, 6483.0], [71.9, 6483.0], [72.0, 6483.0], [72.1, 6525.0], [72.2, 6525.0], [72.3, 6525.0], [72.4, 6525.0], [72.5, 6571.0], [72.6, 6571.0], [72.7, 6571.0], [72.8, 6571.0], [72.9, 6571.0], [73.0, 6594.0], [73.1, 6594.0], [73.2, 6594.0], [73.3, 6594.0], [73.4, 6655.0], [73.5, 6655.0], [73.6, 6655.0], [73.7, 6655.0], [73.8, 6737.0], [73.9, 6737.0], [74.0, 6737.0], [74.1, 6737.0], [74.2, 6748.0], [74.3, 6748.0], [74.4, 6748.0], [74.5, 6748.0], [74.6, 6862.0], [74.7, 6862.0], [74.8, 6862.0], [74.9, 6862.0], [75.0, 6877.0], [75.1, 6877.0], [75.2, 6877.0], [75.3, 6877.0], [75.4, 6877.0], [75.5, 6931.0], [75.6, 6931.0], [75.7, 6931.0], [75.8, 6931.0], [75.9, 6956.0], [76.0, 6956.0], [76.1, 6956.0], [76.2, 6956.0], [76.3, 7141.0], [76.4, 7141.0], [76.5, 7141.0], [76.6, 7141.0], [76.7, 7175.0], [76.8, 7175.0], [76.9, 7175.0], [77.0, 7175.0], [77.1, 7209.0], [77.2, 7209.0], [77.3, 7209.0], [77.4, 7209.0], [77.5, 7209.0], [77.6, 7279.0], [77.7, 7279.0], [77.8, 7279.0], [77.9, 7279.0], [78.0, 7299.0], [78.1, 7299.0], [78.2, 7299.0], [78.3, 7299.0], [78.4, 7301.0], [78.5, 7301.0], [78.6, 7301.0], [78.7, 7301.0], [78.8, 7678.0], [78.9, 7678.0], [79.0, 7678.0], [79.1, 7678.0], [79.2, 7708.0], [79.3, 7708.0], [79.4, 7708.0], [79.5, 7708.0], [79.6, 7717.0], [79.7, 7717.0], [79.8, 7717.0], [79.9, 7717.0], [80.0, 7717.0], [80.1, 8058.0], [80.2, 8058.0], [80.3, 8058.0], [80.4, 8058.0], [80.5, 8129.0], [80.6, 8129.0], [80.7, 8129.0], [80.8, 8129.0], [80.9, 8164.0], [81.0, 8164.0], [81.1, 8164.0], [81.2, 8164.0], [81.3, 8229.0], [81.4, 8229.0], [81.5, 8229.0], [81.6, 8229.0], [81.7, 8266.0], [81.8, 8266.0], [81.9, 8266.0], [82.0, 8266.0], [82.1, 8406.0], [82.2, 8406.0], [82.3, 8406.0], [82.4, 8406.0], [82.5, 8406.0], [82.6, 8452.0], [82.7, 8452.0], [82.8, 8452.0], [82.9, 8452.0], [83.0, 8537.0], [83.1, 8537.0], [83.2, 8537.0], [83.3, 8537.0], [83.4, 8813.0], [83.5, 8813.0], [83.6, 8813.0], [83.7, 8813.0], [83.8, 8830.0], [83.9, 8830.0], [84.0, 8830.0], [84.1, 8830.0], [84.2, 8846.0], [84.3, 8846.0], [84.4, 8846.0], [84.5, 8846.0], [84.6, 8892.0], [84.7, 8892.0], [84.8, 8892.0], [84.9, 8892.0], [85.0, 8892.0], [85.1, 8896.0], [85.2, 8896.0], [85.3, 8896.0], [85.4, 8896.0], [85.5, 9331.0], [85.6, 9331.0], [85.7, 9331.0], [85.8, 9331.0], [85.9, 9396.0], [86.0, 9396.0], [86.1, 9396.0], [86.2, 9396.0], [86.3, 9502.0], [86.4, 9502.0], [86.5, 9502.0], [86.6, 9502.0], [86.7, 9676.0], [86.8, 9676.0], [86.9, 9676.0], [87.0, 9676.0], [87.1, 9806.0], [87.2, 9806.0], [87.3, 9806.0], [87.4, 9806.0], [87.5, 9806.0], [87.6, 9894.0], [87.7, 9894.0], [87.8, 9894.0], [87.9, 9894.0], [88.0, 10006.0], [88.1, 10006.0], [88.2, 10006.0], [88.3, 10006.0], [88.4, 10018.0], [88.5, 10018.0], [88.6, 10018.0], [88.7, 10018.0], [88.8, 10151.0], [88.9, 10151.0], [89.0, 10151.0], [89.1, 10151.0], [89.2, 10430.0], [89.3, 10430.0], [89.4, 10430.0], [89.5, 10430.0], [89.6, 10526.0], [89.7, 10526.0], [89.8, 10526.0], [89.9, 10526.0], [90.0, 10526.0], [90.1, 10776.0], [90.2, 10776.0], [90.3, 10776.0], [90.4, 10776.0], [90.5, 10808.0], [90.6, 10808.0], [90.7, 10808.0], [90.8, 10808.0], [90.9, 10815.0], [91.0, 10815.0], [91.1, 10815.0], [91.2, 10815.0], [91.3, 10855.0], [91.4, 10855.0], [91.5, 10855.0], [91.6, 10855.0], [91.7, 11642.0], [91.8, 11642.0], [91.9, 11642.0], [92.0, 11642.0], [92.1, 11720.0], [92.2, 11720.0], [92.3, 11720.0], [92.4, 11720.0], [92.5, 11720.0], [92.6, 11828.0], [92.7, 11828.0], [92.8, 11828.0], [92.9, 11828.0], [93.0, 12017.0], [93.1, 12017.0], [93.2, 12017.0], [93.3, 12017.0], [93.4, 12020.0], [93.5, 12020.0], [93.6, 12020.0], [93.7, 12020.0], [93.8, 12047.0], [93.9, 12047.0], [94.0, 12047.0], [94.1, 12047.0], [94.2, 12642.0], [94.3, 12642.0], [94.4, 12642.0], [94.5, 12642.0], [94.6, 12785.0], [94.7, 12785.0], [94.8, 12785.0], [94.9, 12785.0], [95.0, 12785.0], [95.1, 12926.0], [95.2, 12926.0], [95.3, 12926.0], [95.4, 12926.0], [95.5, 13352.0], [95.6, 13352.0], [95.7, 13352.0], [95.8, 13352.0], [95.9, 13418.0], [96.0, 13418.0], [96.1, 13418.0], [96.2, 13418.0], [96.3, 13842.0], [96.4, 13842.0], [96.5, 13842.0], [96.6, 13842.0], [96.7, 14034.0], [96.8, 14034.0], [96.9, 14034.0], [97.0, 14034.0], [97.1, 14067.0], [97.2, 14067.0], [97.3, 14067.0], [97.4, 14067.0], [97.5, 14067.0], [97.6, 14490.0], [97.7, 14490.0], [97.8, 14490.0], [97.9, 14490.0], [98.0, 16112.0], [98.1, 16112.0], [98.2, 16112.0], [98.3, 16112.0], [98.4, 16380.0], [98.5, 16380.0], [98.6, 16380.0], [98.7, 16380.0], [98.8, 16590.0], [98.9, 16590.0], [99.0, 16590.0], [99.1, 16590.0], [99.2, 18506.0], [99.3, 18506.0], [99.4, 18506.0], [99.5, 18506.0], [99.6, 19004.0], [99.7, 19004.0], [99.8, 19004.0], [99.9, 19004.0], [100.0, 19004.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 11.0, "series": [{"data": [[800.0, 1.0], [1000.0, 5.0], [1200.0, 5.0], [1400.0, 7.0], [1500.0, 4.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 6.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 1.0], [2300.0, 5.0], [2200.0, 2.0], [2400.0, 6.0], [2500.0, 4.0], [2600.0, 4.0], [2700.0, 3.0], [2800.0, 2.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 11.0], [3200.0, 3.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 4.0], [3700.0, 3.0], [3600.0, 2.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 4.0], [4300.0, 3.0], [4200.0, 2.0], [4100.0, 4.0], [4400.0, 5.0], [4600.0, 3.0], [4500.0, 4.0], [4800.0, 3.0], [4700.0, 2.0], [5100.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5200.0, 2.0], [5300.0, 1.0], [5600.0, 2.0], [5500.0, 3.0], [5400.0, 3.0], [5700.0, 2.0], [5800.0, 1.0], [6100.0, 3.0], [5900.0, 2.0], [6000.0, 2.0], [6200.0, 4.0], [6300.0, 3.0], [6500.0, 3.0], [6400.0, 2.0], [6600.0, 1.0], [6900.0, 2.0], [6800.0, 2.0], [6700.0, 2.0], [7100.0, 2.0], [7200.0, 3.0], [7300.0, 1.0], [7600.0, 1.0], [7700.0, 2.0], [8100.0, 2.0], [8000.0, 1.0], [8400.0, 2.0], [8200.0, 2.0], [8500.0, 1.0], [8800.0, 5.0], [9600.0, 1.0], [9500.0, 1.0], [9300.0, 2.0], [10000.0, 2.0], [9800.0, 2.0], [10100.0, 1.0], [10500.0, 1.0], [10700.0, 1.0], [10400.0, 1.0], [10800.0, 3.0], [11600.0, 1.0], [11700.0, 1.0], [12000.0, 3.0], [11800.0, 1.0], [12600.0, 1.0], [12700.0, 1.0], [12900.0, 1.0], [13300.0, 1.0], [13800.0, 1.0], [13400.0, 1.0], [14000.0, 2.0], [14400.0, 1.0], [16100.0, 1.0], [16300.0, 1.0], [16500.0, 1.0], [19000.0, 1.0], [18500.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 221.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 17.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 221.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79142936E12, "maxY": 3.0, "series": [{"data": [[1.79142978E12, 3.0], [1.79143008E12, 1.0], [1.7914311E12, 1.375], [1.79142948E12, 1.8333333333333333], [1.7914305E12, 1.375], [1.7914308E12, 1.1666666666666665], [1.7914299E12, 1.6], [1.7914302E12, 1.3333333333333333], [1.7914296E12, 1.1666666666666665], [1.79143062E12, 2.6666666666666665], [1.79143092E12, 1.1666666666666665], [1.79143002E12, 1.4444444444444444], [1.79143032E12, 1.0], [1.79142942E12, 2.3636363636363638], [1.79142972E12, 2.625], [1.79143074E12, 1.5], [1.79143104E12, 1.5714285714285714], [1.79143014E12, 2.0909090909090913], [1.79143044E12, 1.692307692307692], [1.79142954E12, 1.5], [1.79142984E12, 1.7499999999999998], [1.79143086E12, 1.0], [1.79143116E12, 1.6666666666666667], [1.79143026E12, 1.2857142857142856], [1.79143056E12, 1.5454545454545456], [1.79142966E12, 1.7499999999999998], [1.79142996E12, 1.375], [1.79143098E12, 1.0], [1.79142936E12, 1.0], [1.79143038E12, 1.2857142857142856], [1.79143068E12, 1.7]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4010.6587301587306, "minX": 1.0, "maxY": 9565.454545454546, "series": [{"data": [[1.0, 4010.6587301587306], [2.0, 5512.303797468354], [4.0, 9002.818181818182], [5.0, 8967.5], [3.0, 9565.454545454546]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.6833333333333336, 5284.254166666666]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.216666666666667, "minX": 1.79142936E12, "maxY": 246.98333333333332, "series": [{"data": [[1.79142978E12, 32.18333333333333], [1.79143008E12, 12.8], [1.7914311E12, 25.866666666666667], [1.79142948E12, 19.133333333333333], [1.7914305E12, 25.716666666666665], [1.7914308E12, 19.283333333333335], [1.7914299E12, 32.016666666666666], [1.7914302E12, 19.266666666666666], [1.7914296E12, 19.016666666666666], [1.79143062E12, 38.583333333333336], [1.79143092E12, 19.1], [1.79143002E12, 28.683333333333334], [1.79143032E12, 12.766666666666667], [1.79142942E12, 35.5], [1.79142972E12, 25.916666666666668], [1.79143074E12, 32.1], [1.79143104E12, 22.033333333333335], [1.79143014E12, 35.05], [1.79143044E12, 41.65], [1.79142954E12, 19.4], [1.79142984E12, 25.783333333333335], [1.79143086E12, 12.9], [1.79143116E12, 108.78333333333333], [1.79143026E12, 22.45], [1.79143056E12, 35.2], [1.79142966E12, 38.06666666666667], [1.79142996E12, 25.733333333333334], [1.79143098E12, 16.033333333333335], [1.79142936E12, 12.783333333333333], [1.79143038E12, 22.6], [1.79143068E12, 32.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79142978E12, 235.33333333333334], [1.79143008E12, 77.85], [1.7914311E12, 166.31666666666666], [1.79142948E12, 124.61666666666666], [1.7914305E12, 146.1], [1.7914308E12, 103.85], [1.7914299E12, 192.25], [1.7914302E12, 116.21666666666667], [1.7914296E12, 97.78333333333333], [1.79143062E12, 237.23333333333332], [1.79143092E12, 155.36666666666667], [1.79143002E12, 119.66666666666667], [1.79143032E12, 62.333333333333336], [1.79142942E12, 214.7], [1.79142972E12, 167.71666666666667], [1.79143074E12, 217.25], [1.79143104E12, 148.6], [1.79143014E12, 203.63333333333333], [1.79143044E12, 246.98333333333332], [1.79142954E12, 109.31666666666666], [1.79142984E12, 154.13333333333333], [1.79143086E12, 49.71666666666667], [1.79143116E12, 7.216666666666667], [1.79143026E12, 125.75], [1.79143056E12, 181.55], [1.79142966E12, 175.1], [1.79142996E12, 163.6], [1.79143098E12, 109.41666666666667], [1.79142936E12, 52.18333333333333], [1.79143038E12, 123.41666666666667], [1.79143068E12, 178.53333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1439.0, "minX": 1.79142936E12, "maxY": 11880.625, "series": [{"data": [[1.79142978E12, 11740.999999999998], [1.79143008E12, 3210.5], [1.7914311E12, 4549.125], [1.79142948E12, 6313.666666666667], [1.7914305E12, 3651.1250000000005], [1.7914308E12, 3089.0], [1.7914299E12, 5204.9], [1.7914302E12, 4267.166666666666], [1.7914296E12, 2882.1666666666665], [1.79143062E12, 7492.416666666667], [1.79143092E12, 5117.333333333334], [1.79143002E12, 2558.0], [1.79143032E12, 2714.25], [1.79142942E12, 7249.272727272727], [1.79142972E12, 11880.625], [1.79143074E12, 5004.2], [1.79143104E12, 4832.857142857142], [1.79143014E12, 5579.181818181818], [1.79143044E12, 4592.153846153846], [1.79142954E12, 4324.333333333334], [1.79142984E12, 10087.875000000002], [1.79143086E12, 1911.75], [1.79143116E12, 1439.0], [1.79143026E12, 3021.5714285714284], [1.79143056E12, 4091.818181818181], [1.79142966E12, 5662.916666666667], [1.79142996E12, 4183.375], [1.79143098E12, 3826.6], [1.79142936E12, 2157.5], [1.79143038E12, 3169.5714285714284], [1.79143068E12, 5064.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 335.66666666666663, "minX": 1.79142936E12, "maxY": 11880.625, "series": [{"data": [[1.79142978E12, 11740.999999999998], [1.79143008E12, 3210.5], [1.7914311E12, 4549.125], [1.79142948E12, 6313.666666666667], [1.7914305E12, 3651.0000000000005], [1.7914308E12, 3088.8333333333335], [1.7914299E12, 5204.9], [1.7914302E12, 4267.166666666666], [1.7914296E12, 2882.0], [1.79143062E12, 7492.166666666666], [1.79143092E12, 5117.333333333334], [1.79143002E12, 2558.0], [1.79143032E12, 2714.25], [1.79142942E12, 7249.272727272727], [1.79142972E12, 11880.625], [1.79143074E12, 5004.2], [1.79143104E12, 4832.714285714285], [1.79143014E12, 5579.181818181818], [1.79143044E12, 4592.153846153846], [1.79142954E12, 4324.333333333334], [1.79142984E12, 10087.875000000002], [1.79143086E12, 1911.75], [1.79143116E12, 335.66666666666663], [1.79143026E12, 3021.5714285714284], [1.79143056E12, 4091.818181818181], [1.79142966E12, 5662.916666666667], [1.79142996E12, 4183.375], [1.79143098E12, 3826.4], [1.79142936E12, 2157.5], [1.79143038E12, 3169.428571428571], [1.79143068E12, 5064.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6.75, "minX": 1.79142936E12, "maxY": 13.5, "series": [{"data": [[1.79142978E12, 8.1], [1.79143008E12, 6.75], [1.7914311E12, 8.125], [1.79142948E12, 10.166666666666668], [1.7914305E12, 10.125], [1.7914308E12, 8.5], [1.7914299E12, 9.200000000000001], [1.7914302E12, 8.5], [1.7914296E12, 9.5], [1.79143062E12, 8.833333333333334], [1.79143092E12, 9.166666666666668], [1.79143002E12, 9.11111111111111], [1.79143032E12, 8.75], [1.79142942E12, 10.636363636363635], [1.79142972E12, 8.125], [1.79143074E12, 8.0], [1.79143104E12, 12.142857142857142], [1.79143014E12, 8.818181818181818], [1.79143044E12, 13.461538461538462], [1.79142954E12, 8.333333333333332], [1.79142984E12, 8.5], [1.79143086E12, 8.75], [1.79143116E12, 10.666666666666666], [1.79143026E12, 9.142857142857144], [1.79143056E12, 8.818181818181817], [1.79142966E12, 8.416666666666668], [1.79142996E12, 7.5], [1.79143098E12, 8.2], [1.79142936E12, 13.5], [1.79143038E12, 10.428571428571427], [1.79143068E12, 9.1]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 818.0, "minX": 1.79142936E12, "maxY": 19004.0, "series": [{"data": [[1.79142978E12, 16590.0], [1.79143008E12, 4189.0], [1.7914311E12, 8452.0], [1.79142948E12, 7678.0], [1.7914305E12, 7301.0], [1.7914308E12, 6737.0], [1.7914299E12, 8896.0], [1.7914302E12, 5927.0], [1.7914296E12, 4412.0], [1.79143062E12, 13352.0], [1.79143092E12, 9894.0], [1.79143002E12, 4874.0], [1.79143032E12, 3571.0], [1.79142942E12, 13842.0], [1.79142972E12, 19004.0], [1.79143074E12, 10815.0], [1.79143104E12, 11828.0], [1.79143014E12, 12785.0], [1.79143044E12, 6931.0], [1.79142954E12, 8406.0], [1.79142984E12, 16380.0], [1.79143086E12, 2457.0], [1.79143116E12, 1008.0], [1.79143026E12, 4935.0], [1.79143056E12, 8164.0], [1.79142966E12, 10526.0], [1.79142996E12, 8813.0], [1.79143098E12, 5314.0], [1.79142936E12, 5113.0], [1.79143038E12, 6400.0], [1.79143068E12, 9331.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79142978E12, 16542.2], [1.79143008E12, 4189.0], [1.7914311E12, 8452.0], [1.79142948E12, 7678.0], [1.7914305E12, 7301.0], [1.7914308E12, 6737.0], [1.7914299E12, 8889.4], [1.7914302E12, 5927.0], [1.7914296E12, 4412.0], [1.79143062E12, 12960.500000000002], [1.79143092E12, 9894.0], [1.79143002E12, 4874.0], [1.79143032E12, 3571.0], [1.79142942E12, 13602.0], [1.79142972E12, 19004.0], [1.79143074E12, 10673.1], [1.79143104E12, 11828.0], [1.79143014E12, 12314.000000000002], [1.79143044E12, 6439.0], [1.79142954E12, 8406.0], [1.79142984E12, 16380.0], [1.79143086E12, 2457.0], [1.79143116E12, 1008.0], [1.79143026E12, 4935.0], [1.79143056E12, 7845.4000000000015], [1.79142966E12, 10370.0], [1.79142996E12, 8813.0], [1.79143098E12, 5314.0], [1.79142936E12, 5113.0], [1.79143038E12, 6400.0], [1.79143068E12, 9224.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79142978E12, 16590.0], [1.79143008E12, 4189.0], [1.7914311E12, 8452.0], [1.79142948E12, 7678.0], [1.7914305E12, 7301.0], [1.7914308E12, 6737.0], [1.7914299E12, 8896.0], [1.7914302E12, 5927.0], [1.7914296E12, 4412.0], [1.79143062E12, 13352.0], [1.79143092E12, 9894.0], [1.79143002E12, 4874.0], [1.79143032E12, 3571.0], [1.79142942E12, 13842.0], [1.79142972E12, 19004.0], [1.79143074E12, 10815.0], [1.79143104E12, 11828.0], [1.79143014E12, 12785.0], [1.79143044E12, 6931.0], [1.79142954E12, 8406.0], [1.79142984E12, 16380.0], [1.79143086E12, 2457.0], [1.79143116E12, 1008.0], [1.79143026E12, 4935.0], [1.79143056E12, 8164.0], [1.79142966E12, 10526.0], [1.79142996E12, 8813.0], [1.79143098E12, 5314.0], [1.79142936E12, 5113.0], [1.79143038E12, 6400.0], [1.79143068E12, 9331.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79142978E12, 16590.0], [1.79143008E12, 4189.0], [1.7914311E12, 8452.0], [1.79142948E12, 7678.0], [1.7914305E12, 7301.0], [1.7914308E12, 6737.0], [1.7914299E12, 8896.0], [1.7914302E12, 5927.0], [1.7914296E12, 4412.0], [1.79143062E12, 13352.0], [1.79143092E12, 9894.0], [1.79143002E12, 4874.0], [1.79143032E12, 3571.0], [1.79142942E12, 13842.0], [1.79142972E12, 19004.0], [1.79143074E12, 10815.0], [1.79143104E12, 11828.0], [1.79143014E12, 12785.0], [1.79143044E12, 6931.0], [1.79142954E12, 8406.0], [1.79142984E12, 16380.0], [1.79143086E12, 2457.0], [1.79143116E12, 1008.0], [1.79143026E12, 4935.0], [1.79143056E12, 8164.0], [1.79142966E12, 10526.0], [1.79142996E12, 8813.0], [1.79143098E12, 5314.0], [1.79142936E12, 5113.0], [1.79143038E12, 6400.0], [1.79143068E12, 9331.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79142978E12, 6234.0], [1.79143008E12, 1694.0], [1.7914311E12, 1528.0], [1.79142948E12, 4844.0], [1.7914305E12, 1061.0], [1.7914308E12, 1467.0], [1.7914299E12, 1893.0], [1.7914302E12, 2955.0], [1.7914296E12, 1618.0], [1.79143062E12, 1563.0], [1.79143092E12, 1790.0], [1.79143002E12, 1059.0], [1.79143032E12, 2314.0], [1.79142942E12, 1734.0], [1.79142972E12, 3498.0], [1.79143074E12, 1601.0], [1.79143104E12, 2220.0], [1.79143014E12, 2426.0], [1.79143044E12, 1070.0], [1.79142954E12, 2592.0], [1.79142984E12, 1699.0], [1.79143086E12, 1464.0], [1.79143116E12, 1008.0], [1.79143026E12, 818.0], [1.79143056E12, 1227.0], [1.79142966E12, 1590.0], [1.79142996E12, 1918.0], [1.79143098E12, 1912.0], [1.79142936E12, 1014.0], [1.79143038E12, 1410.0], [1.79143068E12, 1552.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79142978E12, 12018.5], [1.79143008E12, 3479.5], [1.7914311E12, 4413.5], [1.79142948E12, 6735.5], [1.7914305E12, 3297.0], [1.7914308E12, 2505.5], [1.7914299E12, 5001.0], [1.7914302E12, 3972.0], [1.7914296E12, 3081.5], [1.79143062E12, 6961.5], [1.79143092E12, 4908.0], [1.79143002E12, 2424.0], [1.79143032E12, 2486.0], [1.79142942E12, 7279.0], [1.79142972E12, 10724.0], [1.79143074E12, 4056.5], [1.79143104E12, 3744.0], [1.79143014E12, 5284.0], [1.79143044E12, 4571.0], [1.79142954E12, 3744.0], [1.79142984E12, 10611.0], [1.79143086E12, 1863.0], [1.79143116E12, 1008.0], [1.79143026E12, 3200.0], [1.79143056E12, 3508.0], [1.79142966E12, 5175.5], [1.79142996E12, 2754.0], [1.79143098E12, 4024.0], [1.79142936E12, 1251.5], [1.79143038E12, 2671.0], [1.79143068E12, 4481.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1654.5, "minX": 1.0, "maxY": 4360.0, "series": [{"data": [[1.0, 4360.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1654.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4360.0, "series": [{"data": [[1.0, 4360.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79142936E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79142978E12, 0.21666666666666667], [1.79143008E12, 0.06666666666666667], [1.7914311E12, 0.13333333333333333], [1.79142948E12, 0.1], [1.7914305E12, 0.16666666666666666], [1.7914308E12, 0.08333333333333333], [1.7914299E12, 0.16666666666666666], [1.7914302E12, 0.1], [1.7914296E12, 0.11666666666666667], [1.79143062E12, 0.21666666666666667], [1.79143092E12, 0.1], [1.79143002E12, 0.15], [1.79143032E12, 0.1], [1.79142942E12, 0.18333333333333332], [1.79142972E12, 0.13333333333333333], [1.79143074E12, 0.18333333333333332], [1.79143104E12, 0.11666666666666667], [1.79143014E12, 0.18333333333333332], [1.79143044E12, 0.2], [1.79142954E12, 0.1], [1.79142984E12, 0.1], [1.79143086E12, 0.06666666666666667], [1.79143116E12, 0.05], [1.79143026E12, 0.11666666666666667], [1.79143056E12, 0.15], [1.79142966E12, 0.18333333333333332], [1.79142996E12, 0.11666666666666667], [1.79143098E12, 0.08333333333333333], [1.79142936E12, 0.06666666666666667], [1.79143038E12, 0.1], [1.79143068E12, 0.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79142936E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79142978E12, 0.16666666666666666], [1.79143008E12, 0.06666666666666667], [1.7914311E12, 0.13333333333333333], [1.79142948E12, 0.1], [1.7914305E12, 0.13333333333333333], [1.7914308E12, 0.1], [1.7914299E12, 0.16666666666666666], [1.7914302E12, 0.1], [1.7914296E12, 0.1], [1.79143062E12, 0.2], [1.79143092E12, 0.1], [1.79143002E12, 0.15], [1.79143032E12, 0.06666666666666667], [1.79142942E12, 0.18333333333333332], [1.79142972E12, 0.13333333333333333], [1.79143074E12, 0.16666666666666666], [1.79143104E12, 0.11666666666666667], [1.79143014E12, 0.18333333333333332], [1.79143044E12, 0.21666666666666667], [1.79142954E12, 0.1], [1.79142984E12, 0.13333333333333333], [1.79143086E12, 0.06666666666666667], [1.79143116E12, 0.016666666666666666], [1.79143026E12, 0.11666666666666667], [1.79143056E12, 0.18333333333333332], [1.79142966E12, 0.2], [1.79142996E12, 0.13333333333333333], [1.79143098E12, 0.08333333333333333], [1.79142936E12, 0.06666666666666667], [1.79143038E12, 0.11666666666666667], [1.79143068E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79143116E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79143116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79142936E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79142978E12, 0.16666666666666666], [1.79143008E12, 0.06666666666666667], [1.7914311E12, 0.13333333333333333], [1.79142948E12, 0.1], [1.7914305E12, 0.13333333333333333], [1.7914308E12, 0.1], [1.7914299E12, 0.16666666666666666], [1.7914302E12, 0.1], [1.7914296E12, 0.1], [1.79143062E12, 0.2], [1.79143092E12, 0.1], [1.79143002E12, 0.15], [1.79143032E12, 0.06666666666666667], [1.79142942E12, 0.18333333333333332], [1.79142972E12, 0.13333333333333333], [1.79143074E12, 0.16666666666666666], [1.79143104E12, 0.11666666666666667], [1.79143014E12, 0.18333333333333332], [1.79143044E12, 0.21666666666666667], [1.79142954E12, 0.1], [1.79142984E12, 0.13333333333333333], [1.79143086E12, 0.06666666666666667], [1.79143116E12, 0.016666666666666666], [1.79143026E12, 0.11666666666666667], [1.79143056E12, 0.18333333333333332], [1.79142966E12, 0.2], [1.79142996E12, 0.13333333333333333], [1.79143098E12, 0.08333333333333333], [1.79142936E12, 0.06666666666666667], [1.79143038E12, 0.11666666666666667], [1.79143068E12, 0.16666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79143116E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79142936E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79142978E12, 0.16666666666666666], [1.79143008E12, 0.06666666666666667], [1.7914311E12, 0.13333333333333333], [1.79142948E12, 0.1], [1.7914305E12, 0.13333333333333333], [1.7914308E12, 0.1], [1.7914299E12, 0.16666666666666666], [1.7914302E12, 0.1], [1.7914296E12, 0.1], [1.79143062E12, 0.2], [1.79143092E12, 0.1], [1.79143002E12, 0.15], [1.79143032E12, 0.06666666666666667], [1.79142942E12, 0.18333333333333332], [1.79142972E12, 0.13333333333333333], [1.79143074E12, 0.16666666666666666], [1.79143104E12, 0.11666666666666667], [1.79143014E12, 0.18333333333333332], [1.79143044E12, 0.21666666666666667], [1.79142954E12, 0.1], [1.79142984E12, 0.13333333333333333], [1.79143086E12, 0.06666666666666667], [1.79143116E12, 0.016666666666666666], [1.79143026E12, 0.11666666666666667], [1.79143056E12, 0.18333333333333332], [1.79142966E12, 0.2], [1.79142996E12, 0.13333333333333333], [1.79143098E12, 0.08333333333333333], [1.79142936E12, 0.06666666666666667], [1.79143038E12, 0.11666666666666667], [1.79143068E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79143116E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79143116E12, "title": "Total Transactions Per Second"}},
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

