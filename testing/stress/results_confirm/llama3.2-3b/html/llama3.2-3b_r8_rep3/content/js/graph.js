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
        data: {"result": {"minY": 1024.0, "minX": 0.0, "maxY": 10660.0, "series": [{"data": [[0.0, 1024.0], [0.1, 1024.0], [0.2, 1024.0], [0.3, 1024.0], [0.4, 1024.0], [0.5, 1024.0], [0.6, 1024.0], [0.7, 1024.0], [0.8, 1024.0], [0.9, 1024.0], [1.0, 1024.0], [1.1, 1024.0], [1.2, 1024.0], [1.3, 1024.0], [1.4, 1024.0], [1.5, 1024.0], [1.6, 1024.0], [1.7, 1024.0], [1.8, 1024.0], [1.9, 1024.0], [2.0, 1024.0], [2.1, 1024.0], [2.2, 1024.0], [2.3, 1024.0], [2.4, 1024.0], [2.5, 1248.0], [2.6, 1248.0], [2.7, 1248.0], [2.8, 1248.0], [2.9, 1248.0], [3.0, 1248.0], [3.1, 1248.0], [3.2, 1248.0], [3.3, 1248.0], [3.4, 1248.0], [3.5, 1248.0], [3.6, 1248.0], [3.7, 1248.0], [3.8, 1248.0], [3.9, 1248.0], [4.0, 1248.0], [4.1, 1248.0], [4.2, 1248.0], [4.3, 1248.0], [4.4, 1248.0], [4.5, 1248.0], [4.6, 1248.0], [4.7, 1248.0], [4.8, 1248.0], [4.9, 1248.0], [5.0, 1325.0], [5.1, 1325.0], [5.2, 1325.0], [5.3, 1325.0], [5.4, 1325.0], [5.5, 1325.0], [5.6, 1325.0], [5.7, 1325.0], [5.8, 1325.0], [5.9, 1325.0], [6.0, 1325.0], [6.1, 1325.0], [6.2, 1325.0], [6.3, 1325.0], [6.4, 1325.0], [6.5, 1325.0], [6.6, 1325.0], [6.7, 1325.0], [6.8, 1325.0], [6.9, 1325.0], [7.0, 1325.0], [7.1, 1325.0], [7.2, 1325.0], [7.3, 1325.0], [7.4, 1325.0], [7.5, 1326.0], [7.6, 1326.0], [7.7, 1326.0], [7.8, 1326.0], [7.9, 1326.0], [8.0, 1326.0], [8.1, 1326.0], [8.2, 1326.0], [8.3, 1326.0], [8.4, 1326.0], [8.5, 1326.0], [8.6, 1326.0], [8.7, 1326.0], [8.8, 1326.0], [8.9, 1326.0], [9.0, 1326.0], [9.1, 1326.0], [9.2, 1326.0], [9.3, 1326.0], [9.4, 1326.0], [9.5, 1326.0], [9.6, 1326.0], [9.7, 1326.0], [9.8, 1326.0], [9.9, 1326.0], [10.0, 1359.0], [10.1, 1359.0], [10.2, 1359.0], [10.3, 1359.0], [10.4, 1359.0], [10.5, 1359.0], [10.6, 1359.0], [10.7, 1359.0], [10.8, 1359.0], [10.9, 1359.0], [11.0, 1359.0], [11.1, 1359.0], [11.2, 1359.0], [11.3, 1359.0], [11.4, 1359.0], [11.5, 1359.0], [11.6, 1359.0], [11.7, 1359.0], [11.8, 1359.0], [11.9, 1359.0], [12.0, 1359.0], [12.1, 1359.0], [12.2, 1359.0], [12.3, 1359.0], [12.4, 1359.0], [12.5, 1394.0], [12.6, 1394.0], [12.7, 1394.0], [12.8, 1394.0], [12.9, 1394.0], [13.0, 1394.0], [13.1, 1394.0], [13.2, 1394.0], [13.3, 1394.0], [13.4, 1394.0], [13.5, 1394.0], [13.6, 1394.0], [13.7, 1394.0], [13.8, 1394.0], [13.9, 1394.0], [14.0, 1394.0], [14.1, 1394.0], [14.2, 1394.0], [14.3, 1394.0], [14.4, 1394.0], [14.5, 1394.0], [14.6, 1394.0], [14.7, 1394.0], [14.8, 1394.0], [14.9, 1394.0], [15.0, 1594.0], [15.1, 1594.0], [15.2, 1594.0], [15.3, 1594.0], [15.4, 1594.0], [15.5, 1594.0], [15.6, 1594.0], [15.7, 1594.0], [15.8, 1594.0], [15.9, 1594.0], [16.0, 1594.0], [16.1, 1594.0], [16.2, 1594.0], [16.3, 1594.0], [16.4, 1594.0], [16.5, 1594.0], [16.6, 1594.0], [16.7, 1594.0], [16.8, 1594.0], [16.9, 1594.0], [17.0, 1594.0], [17.1, 1594.0], [17.2, 1594.0], [17.3, 1594.0], [17.4, 1594.0], [17.5, 1677.0], [17.6, 1677.0], [17.7, 1677.0], [17.8, 1677.0], [17.9, 1677.0], [18.0, 1677.0], [18.1, 1677.0], [18.2, 1677.0], [18.3, 1677.0], [18.4, 1677.0], [18.5, 1677.0], [18.6, 1677.0], [18.7, 1677.0], [18.8, 1677.0], [18.9, 1677.0], [19.0, 1677.0], [19.1, 1677.0], [19.2, 1677.0], [19.3, 1677.0], [19.4, 1677.0], [19.5, 1677.0], [19.6, 1677.0], [19.7, 1677.0], [19.8, 1677.0], [19.9, 1677.0], [20.0, 1698.0], [20.1, 1698.0], [20.2, 1698.0], [20.3, 1698.0], [20.4, 1698.0], [20.5, 1698.0], [20.6, 1698.0], [20.7, 1698.0], [20.8, 1698.0], [20.9, 1698.0], [21.0, 1698.0], [21.1, 1698.0], [21.2, 1698.0], [21.3, 1698.0], [21.4, 1698.0], [21.5, 1698.0], [21.6, 1698.0], [21.7, 1698.0], [21.8, 1698.0], [21.9, 1698.0], [22.0, 1698.0], [22.1, 1698.0], [22.2, 1698.0], [22.3, 1698.0], [22.4, 1698.0], [22.5, 1742.0], [22.6, 1742.0], [22.7, 1742.0], [22.8, 1742.0], [22.9, 1742.0], [23.0, 1742.0], [23.1, 1742.0], [23.2, 1742.0], [23.3, 1742.0], [23.4, 1742.0], [23.5, 1742.0], [23.6, 1742.0], [23.7, 1742.0], [23.8, 1742.0], [23.9, 1742.0], [24.0, 1742.0], [24.1, 1742.0], [24.2, 1742.0], [24.3, 1742.0], [24.4, 1742.0], [24.5, 1742.0], [24.6, 1742.0], [24.7, 1742.0], [24.8, 1742.0], [24.9, 1742.0], [25.0, 1749.0], [25.1, 1749.0], [25.2, 1749.0], [25.3, 1749.0], [25.4, 1749.0], [25.5, 1749.0], [25.6, 1749.0], [25.7, 1749.0], [25.8, 1749.0], [25.9, 1749.0], [26.0, 1749.0], [26.1, 1749.0], [26.2, 1749.0], [26.3, 1749.0], [26.4, 1749.0], [26.5, 1749.0], [26.6, 1749.0], [26.7, 1749.0], [26.8, 1749.0], [26.9, 1749.0], [27.0, 1749.0], [27.1, 1749.0], [27.2, 1749.0], [27.3, 1749.0], [27.4, 1749.0], [27.5, 1865.0], [27.6, 1865.0], [27.7, 1865.0], [27.8, 1865.0], [27.9, 1865.0], [28.0, 1865.0], [28.1, 1865.0], [28.2, 1865.0], [28.3, 1865.0], [28.4, 1865.0], [28.5, 1865.0], [28.6, 1865.0], [28.7, 1865.0], [28.8, 1865.0], [28.9, 1865.0], [29.0, 1865.0], [29.1, 1865.0], [29.2, 1865.0], [29.3, 1865.0], [29.4, 1865.0], [29.5, 1865.0], [29.6, 1865.0], [29.7, 1865.0], [29.8, 1865.0], [29.9, 1865.0], [30.0, 2230.0], [30.1, 2230.0], [30.2, 2230.0], [30.3, 2230.0], [30.4, 2230.0], [30.5, 2230.0], [30.6, 2230.0], [30.7, 2230.0], [30.8, 2230.0], [30.9, 2230.0], [31.0, 2230.0], [31.1, 2230.0], [31.2, 2230.0], [31.3, 2230.0], [31.4, 2230.0], [31.5, 2230.0], [31.6, 2230.0], [31.7, 2230.0], [31.8, 2230.0], [31.9, 2230.0], [32.0, 2230.0], [32.1, 2230.0], [32.2, 2230.0], [32.3, 2230.0], [32.4, 2230.0], [32.5, 2382.0], [32.6, 2382.0], [32.7, 2382.0], [32.8, 2382.0], [32.9, 2382.0], [33.0, 2382.0], [33.1, 2382.0], [33.2, 2382.0], [33.3, 2382.0], [33.4, 2382.0], [33.5, 2382.0], [33.6, 2382.0], [33.7, 2382.0], [33.8, 2382.0], [33.9, 2382.0], [34.0, 2382.0], [34.1, 2382.0], [34.2, 2382.0], [34.3, 2382.0], [34.4, 2382.0], [34.5, 2382.0], [34.6, 2382.0], [34.7, 2382.0], [34.8, 2382.0], [34.9, 2382.0], [35.0, 2397.0], [35.1, 2397.0], [35.2, 2397.0], [35.3, 2397.0], [35.4, 2397.0], [35.5, 2397.0], [35.6, 2397.0], [35.7, 2397.0], [35.8, 2397.0], [35.9, 2397.0], [36.0, 2397.0], [36.1, 2397.0], [36.2, 2397.0], [36.3, 2397.0], [36.4, 2397.0], [36.5, 2397.0], [36.6, 2397.0], [36.7, 2397.0], [36.8, 2397.0], [36.9, 2397.0], [37.0, 2397.0], [37.1, 2397.0], [37.2, 2397.0], [37.3, 2397.0], [37.4, 2397.0], [37.5, 2588.0], [37.6, 2588.0], [37.7, 2588.0], [37.8, 2588.0], [37.9, 2588.0], [38.0, 2588.0], [38.1, 2588.0], [38.2, 2588.0], [38.3, 2588.0], [38.4, 2588.0], [38.5, 2588.0], [38.6, 2588.0], [38.7, 2588.0], [38.8, 2588.0], [38.9, 2588.0], [39.0, 2588.0], [39.1, 2588.0], [39.2, 2588.0], [39.3, 2588.0], [39.4, 2588.0], [39.5, 2588.0], [39.6, 2588.0], [39.7, 2588.0], [39.8, 2588.0], [39.9, 2588.0], [40.0, 2679.0], [40.1, 2679.0], [40.2, 2679.0], [40.3, 2679.0], [40.4, 2679.0], [40.5, 2679.0], [40.6, 2679.0], [40.7, 2679.0], [40.8, 2679.0], [40.9, 2679.0], [41.0, 2679.0], [41.1, 2679.0], [41.2, 2679.0], [41.3, 2679.0], [41.4, 2679.0], [41.5, 2679.0], [41.6, 2679.0], [41.7, 2679.0], [41.8, 2679.0], [41.9, 2679.0], [42.0, 2679.0], [42.1, 2679.0], [42.2, 2679.0], [42.3, 2679.0], [42.4, 2679.0], [42.5, 2740.0], [42.6, 2740.0], [42.7, 2740.0], [42.8, 2740.0], [42.9, 2740.0], [43.0, 2740.0], [43.1, 2740.0], [43.2, 2740.0], [43.3, 2740.0], [43.4, 2740.0], [43.5, 2740.0], [43.6, 2740.0], [43.7, 2740.0], [43.8, 2740.0], [43.9, 2740.0], [44.0, 2740.0], [44.1, 2740.0], [44.2, 2740.0], [44.3, 2740.0], [44.4, 2740.0], [44.5, 2740.0], [44.6, 2740.0], [44.7, 2740.0], [44.8, 2740.0], [44.9, 2740.0], [45.0, 2958.0], [45.1, 2958.0], [45.2, 2958.0], [45.3, 2958.0], [45.4, 2958.0], [45.5, 2958.0], [45.6, 2958.0], [45.7, 2958.0], [45.8, 2958.0], [45.9, 2958.0], [46.0, 2958.0], [46.1, 2958.0], [46.2, 2958.0], [46.3, 2958.0], [46.4, 2958.0], [46.5, 2958.0], [46.6, 2958.0], [46.7, 2958.0], [46.8, 2958.0], [46.9, 2958.0], [47.0, 2958.0], [47.1, 2958.0], [47.2, 2958.0], [47.3, 2958.0], [47.4, 2958.0], [47.5, 3073.0], [47.6, 3073.0], [47.7, 3073.0], [47.8, 3073.0], [47.9, 3073.0], [48.0, 3073.0], [48.1, 3073.0], [48.2, 3073.0], [48.3, 3073.0], [48.4, 3073.0], [48.5, 3073.0], [48.6, 3073.0], [48.7, 3073.0], [48.8, 3073.0], [48.9, 3073.0], [49.0, 3073.0], [49.1, 3073.0], [49.2, 3073.0], [49.3, 3073.0], [49.4, 3073.0], [49.5, 3073.0], [49.6, 3073.0], [49.7, 3073.0], [49.8, 3073.0], [49.9, 3073.0], [50.0, 3125.0], [50.1, 3125.0], [50.2, 3125.0], [50.3, 3125.0], [50.4, 3125.0], [50.5, 3125.0], [50.6, 3125.0], [50.7, 3125.0], [50.8, 3125.0], [50.9, 3125.0], [51.0, 3125.0], [51.1, 3125.0], [51.2, 3125.0], [51.3, 3125.0], [51.4, 3125.0], [51.5, 3125.0], [51.6, 3125.0], [51.7, 3125.0], [51.8, 3125.0], [51.9, 3125.0], [52.0, 3125.0], [52.1, 3125.0], [52.2, 3125.0], [52.3, 3125.0], [52.4, 3125.0], [52.5, 3196.0], [52.6, 3196.0], [52.7, 3196.0], [52.8, 3196.0], [52.9, 3196.0], [53.0, 3196.0], [53.1, 3196.0], [53.2, 3196.0], [53.3, 3196.0], [53.4, 3196.0], [53.5, 3196.0], [53.6, 3196.0], [53.7, 3196.0], [53.8, 3196.0], [53.9, 3196.0], [54.0, 3196.0], [54.1, 3196.0], [54.2, 3196.0], [54.3, 3196.0], [54.4, 3196.0], [54.5, 3196.0], [54.6, 3196.0], [54.7, 3196.0], [54.8, 3196.0], [54.9, 3196.0], [55.0, 3506.0], [55.1, 3506.0], [55.2, 3506.0], [55.3, 3506.0], [55.4, 3506.0], [55.5, 3506.0], [55.6, 3506.0], [55.7, 3506.0], [55.8, 3506.0], [55.9, 3506.0], [56.0, 3506.0], [56.1, 3506.0], [56.2, 3506.0], [56.3, 3506.0], [56.4, 3506.0], [56.5, 3506.0], [56.6, 3506.0], [56.7, 3506.0], [56.8, 3506.0], [56.9, 3506.0], [57.0, 3506.0], [57.1, 3506.0], [57.2, 3506.0], [57.3, 3506.0], [57.4, 3506.0], [57.5, 3842.0], [57.6, 3842.0], [57.7, 3842.0], [57.8, 3842.0], [57.9, 3842.0], [58.0, 3842.0], [58.1, 3842.0], [58.2, 3842.0], [58.3, 3842.0], [58.4, 3842.0], [58.5, 3842.0], [58.6, 3842.0], [58.7, 3842.0], [58.8, 3842.0], [58.9, 3842.0], [59.0, 3842.0], [59.1, 3842.0], [59.2, 3842.0], [59.3, 3842.0], [59.4, 3842.0], [59.5, 3842.0], [59.6, 3842.0], [59.7, 3842.0], [59.8, 3842.0], [59.9, 3842.0], [60.0, 3849.0], [60.1, 3849.0], [60.2, 3849.0], [60.3, 3849.0], [60.4, 3849.0], [60.5, 3849.0], [60.6, 3849.0], [60.7, 3849.0], [60.8, 3849.0], [60.9, 3849.0], [61.0, 3849.0], [61.1, 3849.0], [61.2, 3849.0], [61.3, 3849.0], [61.4, 3849.0], [61.5, 3849.0], [61.6, 3849.0], [61.7, 3849.0], [61.8, 3849.0], [61.9, 3849.0], [62.0, 3849.0], [62.1, 3849.0], [62.2, 3849.0], [62.3, 3849.0], [62.4, 3849.0], [62.5, 4186.0], [62.6, 4186.0], [62.7, 4186.0], [62.8, 4186.0], [62.9, 4186.0], [63.0, 4186.0], [63.1, 4186.0], [63.2, 4186.0], [63.3, 4186.0], [63.4, 4186.0], [63.5, 4186.0], [63.6, 4186.0], [63.7, 4186.0], [63.8, 4186.0], [63.9, 4186.0], [64.0, 4186.0], [64.1, 4186.0], [64.2, 4186.0], [64.3, 4186.0], [64.4, 4186.0], [64.5, 4186.0], [64.6, 4186.0], [64.7, 4186.0], [64.8, 4186.0], [64.9, 4186.0], [65.0, 4270.0], [65.1, 4270.0], [65.2, 4270.0], [65.3, 4270.0], [65.4, 4270.0], [65.5, 4270.0], [65.6, 4270.0], [65.7, 4270.0], [65.8, 4270.0], [65.9, 4270.0], [66.0, 4270.0], [66.1, 4270.0], [66.2, 4270.0], [66.3, 4270.0], [66.4, 4270.0], [66.5, 4270.0], [66.6, 4270.0], [66.7, 4270.0], [66.8, 4270.0], [66.9, 4270.0], [67.0, 4270.0], [67.1, 4270.0], [67.2, 4270.0], [67.3, 4270.0], [67.4, 4270.0], [67.5, 4376.0], [67.6, 4376.0], [67.7, 4376.0], [67.8, 4376.0], [67.9, 4376.0], [68.0, 4376.0], [68.1, 4376.0], [68.2, 4376.0], [68.3, 4376.0], [68.4, 4376.0], [68.5, 4376.0], [68.6, 4376.0], [68.7, 4376.0], [68.8, 4376.0], [68.9, 4376.0], [69.0, 4376.0], [69.1, 4376.0], [69.2, 4376.0], [69.3, 4376.0], [69.4, 4376.0], [69.5, 4376.0], [69.6, 4376.0], [69.7, 4376.0], [69.8, 4376.0], [69.9, 4376.0], [70.0, 4609.0], [70.1, 4609.0], [70.2, 4609.0], [70.3, 4609.0], [70.4, 4609.0], [70.5, 4609.0], [70.6, 4609.0], [70.7, 4609.0], [70.8, 4609.0], [70.9, 4609.0], [71.0, 4609.0], [71.1, 4609.0], [71.2, 4609.0], [71.3, 4609.0], [71.4, 4609.0], [71.5, 4609.0], [71.6, 4609.0], [71.7, 4609.0], [71.8, 4609.0], [71.9, 4609.0], [72.0, 4609.0], [72.1, 4609.0], [72.2, 4609.0], [72.3, 4609.0], [72.4, 4609.0], [72.5, 4901.0], [72.6, 4901.0], [72.7, 4901.0], [72.8, 4901.0], [72.9, 4901.0], [73.0, 4901.0], [73.1, 4901.0], [73.2, 4901.0], [73.3, 4901.0], [73.4, 4901.0], [73.5, 4901.0], [73.6, 4901.0], [73.7, 4901.0], [73.8, 4901.0], [73.9, 4901.0], [74.0, 4901.0], [74.1, 4901.0], [74.2, 4901.0], [74.3, 4901.0], [74.4, 4901.0], [74.5, 4901.0], [74.6, 4901.0], [74.7, 4901.0], [74.8, 4901.0], [74.9, 4901.0], [75.0, 4946.0], [75.1, 4946.0], [75.2, 4946.0], [75.3, 4946.0], [75.4, 4946.0], [75.5, 4946.0], [75.6, 4946.0], [75.7, 4946.0], [75.8, 4946.0], [75.9, 4946.0], [76.0, 4946.0], [76.1, 4946.0], [76.2, 4946.0], [76.3, 4946.0], [76.4, 4946.0], [76.5, 4946.0], [76.6, 4946.0], [76.7, 4946.0], [76.8, 4946.0], [76.9, 4946.0], [77.0, 4946.0], [77.1, 4946.0], [77.2, 4946.0], [77.3, 4946.0], [77.4, 4946.0], [77.5, 5020.0], [77.6, 5020.0], [77.7, 5020.0], [77.8, 5020.0], [77.9, 5020.0], [78.0, 5020.0], [78.1, 5020.0], [78.2, 5020.0], [78.3, 5020.0], [78.4, 5020.0], [78.5, 5020.0], [78.6, 5020.0], [78.7, 5020.0], [78.8, 5020.0], [78.9, 5020.0], [79.0, 5020.0], [79.1, 5020.0], [79.2, 5020.0], [79.3, 5020.0], [79.4, 5020.0], [79.5, 5020.0], [79.6, 5020.0], [79.7, 5020.0], [79.8, 5020.0], [79.9, 5020.0], [80.0, 5112.0], [80.1, 5112.0], [80.2, 5112.0], [80.3, 5112.0], [80.4, 5112.0], [80.5, 5112.0], [80.6, 5112.0], [80.7, 5112.0], [80.8, 5112.0], [80.9, 5112.0], [81.0, 5112.0], [81.1, 5112.0], [81.2, 5112.0], [81.3, 5112.0], [81.4, 5112.0], [81.5, 5112.0], [81.6, 5112.0], [81.7, 5112.0], [81.8, 5112.0], [81.9, 5112.0], [82.0, 5112.0], [82.1, 5112.0], [82.2, 5112.0], [82.3, 5112.0], [82.4, 5112.0], [82.5, 5181.0], [82.6, 5181.0], [82.7, 5181.0], [82.8, 5181.0], [82.9, 5181.0], [83.0, 5181.0], [83.1, 5181.0], [83.2, 5181.0], [83.3, 5181.0], [83.4, 5181.0], [83.5, 5181.0], [83.6, 5181.0], [83.7, 5181.0], [83.8, 5181.0], [83.9, 5181.0], [84.0, 5181.0], [84.1, 5181.0], [84.2, 5181.0], [84.3, 5181.0], [84.4, 5181.0], [84.5, 5181.0], [84.6, 5181.0], [84.7, 5181.0], [84.8, 5181.0], [84.9, 5181.0], [85.0, 5950.0], [85.1, 5950.0], [85.2, 5950.0], [85.3, 5950.0], [85.4, 5950.0], [85.5, 5950.0], [85.6, 5950.0], [85.7, 5950.0], [85.8, 5950.0], [85.9, 5950.0], [86.0, 5950.0], [86.1, 5950.0], [86.2, 5950.0], [86.3, 5950.0], [86.4, 5950.0], [86.5, 5950.0], [86.6, 5950.0], [86.7, 5950.0], [86.8, 5950.0], [86.9, 5950.0], [87.0, 5950.0], [87.1, 5950.0], [87.2, 5950.0], [87.3, 5950.0], [87.4, 5950.0], [87.5, 7192.0], [87.6, 7192.0], [87.7, 7192.0], [87.8, 7192.0], [87.9, 7192.0], [88.0, 7192.0], [88.1, 7192.0], [88.2, 7192.0], [88.3, 7192.0], [88.4, 7192.0], [88.5, 7192.0], [88.6, 7192.0], [88.7, 7192.0], [88.8, 7192.0], [88.9, 7192.0], [89.0, 7192.0], [89.1, 7192.0], [89.2, 7192.0], [89.3, 7192.0], [89.4, 7192.0], [89.5, 7192.0], [89.6, 7192.0], [89.7, 7192.0], [89.8, 7192.0], [89.9, 7192.0], [90.0, 7344.0], [90.1, 7344.0], [90.2, 7344.0], [90.3, 7344.0], [90.4, 7344.0], [90.5, 7344.0], [90.6, 7344.0], [90.7, 7344.0], [90.8, 7344.0], [90.9, 7344.0], [91.0, 7344.0], [91.1, 7344.0], [91.2, 7344.0], [91.3, 7344.0], [91.4, 7344.0], [91.5, 7344.0], [91.6, 7344.0], [91.7, 7344.0], [91.8, 7344.0], [91.9, 7344.0], [92.0, 7344.0], [92.1, 7344.0], [92.2, 7344.0], [92.3, 7344.0], [92.4, 7344.0], [92.5, 8374.0], [92.6, 8374.0], [92.7, 8374.0], [92.8, 8374.0], [92.9, 8374.0], [93.0, 8374.0], [93.1, 8374.0], [93.2, 8374.0], [93.3, 8374.0], [93.4, 8374.0], [93.5, 8374.0], [93.6, 8374.0], [93.7, 8374.0], [93.8, 8374.0], [93.9, 8374.0], [94.0, 8374.0], [94.1, 8374.0], [94.2, 8374.0], [94.3, 8374.0], [94.4, 8374.0], [94.5, 8374.0], [94.6, 8374.0], [94.7, 8374.0], [94.8, 8374.0], [94.9, 8374.0], [95.0, 8534.0], [95.1, 8534.0], [95.2, 8534.0], [95.3, 8534.0], [95.4, 8534.0], [95.5, 8534.0], [95.6, 8534.0], [95.7, 8534.0], [95.8, 8534.0], [95.9, 8534.0], [96.0, 8534.0], [96.1, 8534.0], [96.2, 8534.0], [96.3, 8534.0], [96.4, 8534.0], [96.5, 8534.0], [96.6, 8534.0], [96.7, 8534.0], [96.8, 8534.0], [96.9, 8534.0], [97.0, 8534.0], [97.1, 8534.0], [97.2, 8534.0], [97.3, 8534.0], [97.4, 8534.0], [97.5, 10660.0], [97.6, 10660.0], [97.7, 10660.0], [97.8, 10660.0], [97.9, 10660.0], [98.0, 10660.0], [98.1, 10660.0], [98.2, 10660.0], [98.3, 10660.0], [98.4, 10660.0], [98.5, 10660.0], [98.6, 10660.0], [98.7, 10660.0], [98.8, 10660.0], [98.9, 10660.0], [99.0, 10660.0], [99.1, 10660.0], [99.2, 10660.0], [99.3, 10660.0], [99.4, 10660.0], [99.5, 10660.0], [99.6, 10660.0], [99.7, 10660.0], [99.8, 10660.0], [99.9, 10660.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 4.0, "series": [{"data": [[8500.0, 1.0], [8300.0, 1.0], [10600.0, 1.0], [1000.0, 1.0], [1200.0, 1.0], [1300.0, 4.0], [1500.0, 1.0], [1600.0, 2.0], [1700.0, 2.0], [1800.0, 1.0], [2300.0, 2.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [3500.0, 1.0], [3800.0, 2.0], [4200.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4600.0, 1.0], [5100.0, 2.0], [4900.0, 2.0], [5000.0, 1.0], [5900.0, 1.0], [7100.0, 1.0], [7300.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 34.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79148636E12, "maxY": 1.5555555555555556, "series": [{"data": [[1.7914866E12, 1.25], [1.79148642E12, 1.5555555555555556], [1.79148636E12, 1.1666666666666667], [1.79148654E12, 1.0], [1.79148648E12, 1.5], [1.79148666E12, 1.0]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148666E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3391.6785714285716, "minX": 1.0, "maxY": 8534.0, "series": [{"data": [[1.0, 3391.6785714285716], [2.0, 3974.5454545454545], [3.0, 8534.0]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.325, 3680.5249999999996]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6.466666666666667, "minX": 1.79148636E12, "maxY": 196.01666666666668, "series": [{"data": [[1.7914866E12, 25.383333333333333], [1.79148642E12, 29.0], [1.79148636E12, 19.25], [1.79148654E12, 15.916666666666666], [1.79148648E12, 32.083333333333336], [1.79148666E12, 6.466666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7914866E12, 113.63333333333334], [1.79148642E12, 155.38333333333333], [1.79148636E12, 111.5], [1.79148654E12, 94.15], [1.79148648E12, 196.01666666666668], [1.79148666E12, 31.866666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148666E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2459.625, "minX": 1.79148636E12, "maxY": 5024.0, "series": [{"data": [[1.7914866E12, 2459.625], [1.79148642E12, 5024.0], [1.79148636E12, 3328.6666666666665], [1.79148654E12, 3184.0], [1.79148648E12, 4109.6], [1.79148666E12, 2670.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148666E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2459.625, "minX": 1.79148636E12, "maxY": 5023.888888888889, "series": [{"data": [[1.7914866E12, 2459.625], [1.79148642E12, 5023.888888888889], [1.79148636E12, 3328.5], [1.79148654E12, 3184.0], [1.79148648E12, 4109.6], [1.79148666E12, 2670.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148666E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.555555555555555, "minX": 1.79148636E12, "maxY": 10.5, "series": [{"data": [[1.7914866E12, 8.875], [1.79148642E12, 8.555555555555555], [1.79148636E12, 9.833333333333334], [1.79148654E12, 9.6], [1.79148648E12, 10.5], [1.79148666E12, 10.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148666E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1024.0, "minX": 1.79148636E12, "maxY": 10660.0, "series": [{"data": [[1.7914866E12, 5020.0], [1.79148642E12, 10660.0], [1.79148636E12, 7344.0], [1.79148654E12, 4946.0], [1.79148648E12, 7192.0], [1.79148666E12, 2958.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7914866E12, 5020.0], [1.79148642E12, 10660.0], [1.79148636E12, 7344.0], [1.79148654E12, 4946.0], [1.79148648E12, 7067.8], [1.79148666E12, 2958.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7914866E12, 5020.0], [1.79148642E12, 10660.0], [1.79148636E12, 7344.0], [1.79148654E12, 4946.0], [1.79148648E12, 7192.0], [1.79148666E12, 2958.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7914866E12, 5020.0], [1.79148642E12, 10660.0], [1.79148636E12, 7344.0], [1.79148654E12, 4946.0], [1.79148648E12, 7192.0], [1.79148666E12, 2958.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7914866E12, 1394.0], [1.79148642E12, 1325.0], [1.79148636E12, 1024.0], [1.79148654E12, 1594.0], [1.79148648E12, 1359.0], [1.79148666E12, 2382.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7914866E12, 1989.5], [1.79148642E12, 4270.0], [1.79148636E12, 2587.5], [1.79148654E12, 3073.0], [1.79148648E12, 4014.0], [1.79148666E12, 2670.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3099.0, "minX": 1.0, "maxY": 3099.0, "series": [{"data": [[1.0, 3099.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3099.0, "minX": 1.0, "maxY": 3099.0, "series": [{"data": [[1.0, 3099.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148636E12, "maxY": 0.18333333333333332, "series": [{"data": [[1.7914866E12, 0.11666666666666667], [1.79148642E12, 0.1], [1.79148636E12, 0.15], [1.79148654E12, 0.08333333333333333], [1.79148648E12, 0.18333333333333332], [1.79148666E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148666E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148636E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7914866E12, 0.13333333333333333], [1.79148642E12, 0.15], [1.79148636E12, 0.1], [1.79148654E12, 0.08333333333333333], [1.79148648E12, 0.16666666666666666], [1.79148666E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148666E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148636E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7914866E12, 0.13333333333333333], [1.79148642E12, 0.15], [1.79148636E12, 0.1], [1.79148654E12, 0.08333333333333333], [1.79148648E12, 0.16666666666666666], [1.79148666E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148666E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79148636E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7914866E12, 0.13333333333333333], [1.79148642E12, 0.15], [1.79148636E12, 0.1], [1.79148654E12, 0.08333333333333333], [1.79148648E12, 0.16666666666666666], [1.79148666E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148666E12, "title": "Total Transactions Per Second"}},
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

