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
        data: {"result": {"minY": 1547.0, "minX": 0.0, "maxY": 60294.0, "series": [{"data": [[0.0, 1547.0], [0.1, 1547.0], [0.2, 1547.0], [0.3, 1547.0], [0.4, 1547.0], [0.5, 1547.0], [0.6, 1547.0], [0.7, 1547.0], [0.8, 1547.0], [0.9, 1547.0], [1.0, 1854.0], [1.1, 1854.0], [1.2, 1854.0], [1.3, 1854.0], [1.4, 1854.0], [1.5, 1854.0], [1.6, 1854.0], [1.7, 1854.0], [1.8, 1854.0], [1.9, 1854.0], [2.0, 2937.0], [2.1, 2937.0], [2.2, 2937.0], [2.3, 2937.0], [2.4, 2937.0], [2.5, 2937.0], [2.6, 2937.0], [2.7, 2937.0], [2.8, 2937.0], [2.9, 2937.0], [3.0, 9824.0], [3.1, 9824.0], [3.2, 9824.0], [3.3, 9824.0], [3.4, 9824.0], [3.5, 9824.0], [3.6, 9824.0], [3.7, 9824.0], [3.8, 9824.0], [3.9, 9824.0], [4.0, 19297.0], [4.1, 19297.0], [4.2, 19297.0], [4.3, 19297.0], [4.4, 19297.0], [4.5, 19297.0], [4.6, 19297.0], [4.7, 19297.0], [4.8, 19297.0], [4.9, 19297.0], [5.0, 23888.0], [5.1, 23888.0], [5.2, 23888.0], [5.3, 23888.0], [5.4, 23888.0], [5.5, 23888.0], [5.6, 23888.0], [5.7, 23888.0], [5.8, 23888.0], [5.9, 23888.0], [6.0, 30597.0], [6.1, 30597.0], [6.2, 30597.0], [6.3, 30597.0], [6.4, 30597.0], [6.5, 30597.0], [6.6, 30597.0], [6.7, 30597.0], [6.8, 30597.0], [6.9, 30597.0], [7.0, 34612.0], [7.1, 34612.0], [7.2, 34612.0], [7.3, 34612.0], [7.4, 34612.0], [7.5, 34612.0], [7.6, 34612.0], [7.7, 34612.0], [7.8, 34612.0], [7.9, 34612.0], [8.0, 35478.0], [8.1, 35478.0], [8.2, 35478.0], [8.3, 35478.0], [8.4, 35478.0], [8.5, 35478.0], [8.6, 35478.0], [8.7, 35478.0], [8.8, 35478.0], [8.9, 35478.0], [9.0, 35765.0], [9.1, 35765.0], [9.2, 35765.0], [9.3, 35765.0], [9.4, 35765.0], [9.5, 35765.0], [9.6, 35765.0], [9.7, 35765.0], [9.8, 35765.0], [9.9, 35765.0], [10.0, 36210.0], [10.1, 36210.0], [10.2, 36210.0], [10.3, 36210.0], [10.4, 36210.0], [10.5, 36210.0], [10.6, 36210.0], [10.7, 36210.0], [10.8, 36210.0], [10.9, 36210.0], [11.0, 37043.0], [11.1, 37043.0], [11.2, 37043.0], [11.3, 37043.0], [11.4, 37043.0], [11.5, 37043.0], [11.6, 37043.0], [11.7, 37043.0], [11.8, 37043.0], [11.9, 37043.0], [12.0, 37937.0], [12.1, 37937.0], [12.2, 37937.0], [12.3, 37937.0], [12.4, 37937.0], [12.5, 37937.0], [12.6, 37937.0], [12.7, 37937.0], [12.8, 37937.0], [12.9, 37937.0], [13.0, 38086.0], [13.1, 38086.0], [13.2, 38086.0], [13.3, 38086.0], [13.4, 38086.0], [13.5, 38086.0], [13.6, 38086.0], [13.7, 38086.0], [13.8, 38086.0], [13.9, 38086.0], [14.0, 38869.0], [14.1, 38869.0], [14.2, 38869.0], [14.3, 38869.0], [14.4, 38869.0], [14.5, 38869.0], [14.6, 38869.0], [14.7, 38869.0], [14.8, 38869.0], [14.9, 38869.0], [15.0, 41863.0], [15.1, 41863.0], [15.2, 41863.0], [15.3, 41863.0], [15.4, 41863.0], [15.5, 41863.0], [15.6, 41863.0], [15.7, 41863.0], [15.8, 41863.0], [15.9, 41863.0], [16.0, 42406.0], [16.1, 42406.0], [16.2, 42406.0], [16.3, 42406.0], [16.4, 42406.0], [16.5, 42406.0], [16.6, 42406.0], [16.7, 42406.0], [16.8, 42406.0], [16.9, 42406.0], [17.0, 42580.0], [17.1, 42580.0], [17.2, 42580.0], [17.3, 42580.0], [17.4, 42580.0], [17.5, 42580.0], [17.6, 42580.0], [17.7, 42580.0], [17.8, 42580.0], [17.9, 42580.0], [18.0, 44034.0], [18.1, 44034.0], [18.2, 44034.0], [18.3, 44034.0], [18.4, 44034.0], [18.5, 44034.0], [18.6, 44034.0], [18.7, 44034.0], [18.8, 44034.0], [18.9, 44034.0], [19.0, 45068.0], [19.1, 45068.0], [19.2, 45068.0], [19.3, 45068.0], [19.4, 45068.0], [19.5, 45068.0], [19.6, 45068.0], [19.7, 45068.0], [19.8, 45068.0], [19.9, 45068.0], [20.0, 47088.0], [20.1, 47088.0], [20.2, 47088.0], [20.3, 47088.0], [20.4, 47088.0], [20.5, 47088.0], [20.6, 47088.0], [20.7, 47088.0], [20.8, 47088.0], [20.9, 47088.0], [21.0, 47698.0], [21.1, 47698.0], [21.2, 47698.0], [21.3, 47698.0], [21.4, 47698.0], [21.5, 47698.0], [21.6, 47698.0], [21.7, 47698.0], [21.8, 47698.0], [21.9, 47698.0], [22.0, 47959.0], [22.1, 47959.0], [22.2, 47959.0], [22.3, 47959.0], [22.4, 47959.0], [22.5, 47959.0], [22.6, 47959.0], [22.7, 47959.0], [22.8, 47959.0], [22.9, 47959.0], [23.0, 48274.0], [23.1, 48274.0], [23.2, 48274.0], [23.3, 48274.0], [23.4, 48274.0], [23.5, 48274.0], [23.6, 48274.0], [23.7, 48274.0], [23.8, 48274.0], [23.9, 48274.0], [24.0, 48360.0], [24.1, 48360.0], [24.2, 48360.0], [24.3, 48360.0], [24.4, 48360.0], [24.5, 48360.0], [24.6, 48360.0], [24.7, 48360.0], [24.8, 48360.0], [24.9, 48360.0], [25.0, 49677.0], [25.1, 49677.0], [25.2, 49677.0], [25.3, 49677.0], [25.4, 49677.0], [25.5, 49677.0], [25.6, 49677.0], [25.7, 49677.0], [25.8, 49677.0], [25.9, 49677.0], [26.0, 49799.0], [26.1, 49799.0], [26.2, 49799.0], [26.3, 49799.0], [26.4, 49799.0], [26.5, 49799.0], [26.6, 49799.0], [26.7, 49799.0], [26.8, 49799.0], [26.9, 49799.0], [27.0, 50358.0], [27.1, 50358.0], [27.2, 50358.0], [27.3, 50358.0], [27.4, 50358.0], [27.5, 50358.0], [27.6, 50358.0], [27.7, 50358.0], [27.8, 50358.0], [27.9, 50358.0], [28.0, 50438.0], [28.1, 50438.0], [28.2, 50438.0], [28.3, 50438.0], [28.4, 50438.0], [28.5, 50438.0], [28.6, 50438.0], [28.7, 50438.0], [28.8, 50438.0], [28.9, 50438.0], [29.0, 50487.0], [29.1, 50487.0], [29.2, 50487.0], [29.3, 50487.0], [29.4, 50487.0], [29.5, 50487.0], [29.6, 50487.0], [29.7, 50487.0], [29.8, 50487.0], [29.9, 50487.0], [30.0, 50573.0], [30.1, 50573.0], [30.2, 50573.0], [30.3, 50573.0], [30.4, 50573.0], [30.5, 50573.0], [30.6, 50573.0], [30.7, 50573.0], [30.8, 50573.0], [30.9, 50573.0], [31.0, 50646.0], [31.1, 50646.0], [31.2, 50646.0], [31.3, 50646.0], [31.4, 50646.0], [31.5, 50646.0], [31.6, 50646.0], [31.7, 50646.0], [31.8, 50646.0], [31.9, 50646.0], [32.0, 50787.0], [32.1, 50787.0], [32.2, 50787.0], [32.3, 50787.0], [32.4, 50787.0], [32.5, 50787.0], [32.6, 50787.0], [32.7, 50787.0], [32.8, 50787.0], [32.9, 50787.0], [33.0, 51640.0], [33.1, 51640.0], [33.2, 51640.0], [33.3, 51640.0], [33.4, 51640.0], [33.5, 51640.0], [33.6, 51640.0], [33.7, 51640.0], [33.8, 51640.0], [33.9, 51640.0], [34.0, 51870.0], [34.1, 51870.0], [34.2, 51870.0], [34.3, 51870.0], [34.4, 51870.0], [34.5, 51870.0], [34.6, 51870.0], [34.7, 51870.0], [34.8, 51870.0], [34.9, 51870.0], [35.0, 52119.0], [35.1, 52119.0], [35.2, 52119.0], [35.3, 52119.0], [35.4, 52119.0], [35.5, 52119.0], [35.6, 52119.0], [35.7, 52119.0], [35.8, 52119.0], [35.9, 52119.0], [36.0, 52313.0], [36.1, 52313.0], [36.2, 52313.0], [36.3, 52313.0], [36.4, 52313.0], [36.5, 52313.0], [36.6, 52313.0], [36.7, 52313.0], [36.8, 52313.0], [36.9, 52313.0], [37.0, 52373.0], [37.1, 52373.0], [37.2, 52373.0], [37.3, 52373.0], [37.4, 52373.0], [37.5, 52373.0], [37.6, 52373.0], [37.7, 52373.0], [37.8, 52373.0], [37.9, 52373.0], [38.0, 52391.0], [38.1, 52391.0], [38.2, 52391.0], [38.3, 52391.0], [38.4, 52391.0], [38.5, 52391.0], [38.6, 52391.0], [38.7, 52391.0], [38.8, 52391.0], [38.9, 52391.0], [39.0, 52409.0], [39.1, 52409.0], [39.2, 52409.0], [39.3, 52409.0], [39.4, 52409.0], [39.5, 52409.0], [39.6, 52409.0], [39.7, 52409.0], [39.8, 52409.0], [39.9, 52409.0], [40.0, 52466.0], [40.1, 52466.0], [40.2, 52466.0], [40.3, 52466.0], [40.4, 52466.0], [40.5, 52466.0], [40.6, 52466.0], [40.7, 52466.0], [40.8, 52466.0], [40.9, 52466.0], [41.0, 52468.0], [41.1, 52468.0], [41.2, 52468.0], [41.3, 52468.0], [41.4, 52468.0], [41.5, 52468.0], [41.6, 52468.0], [41.7, 52468.0], [41.8, 52468.0], [41.9, 52468.0], [42.0, 52656.0], [42.1, 52656.0], [42.2, 52656.0], [42.3, 52656.0], [42.4, 52656.0], [42.5, 52656.0], [42.6, 52656.0], [42.7, 52656.0], [42.8, 52656.0], [42.9, 52656.0], [43.0, 52691.0], [43.1, 52691.0], [43.2, 52691.0], [43.3, 52691.0], [43.4, 52691.0], [43.5, 52691.0], [43.6, 52691.0], [43.7, 52691.0], [43.8, 52691.0], [43.9, 52691.0], [44.0, 53111.0], [44.1, 53111.0], [44.2, 53111.0], [44.3, 53111.0], [44.4, 53111.0], [44.5, 53111.0], [44.6, 53111.0], [44.7, 53111.0], [44.8, 53111.0], [44.9, 53111.0], [45.0, 53362.0], [45.1, 53362.0], [45.2, 53362.0], [45.3, 53362.0], [45.4, 53362.0], [45.5, 53362.0], [45.6, 53362.0], [45.7, 53362.0], [45.8, 53362.0], [45.9, 53362.0], [46.0, 53389.0], [46.1, 53389.0], [46.2, 53389.0], [46.3, 53389.0], [46.4, 53389.0], [46.5, 53389.0], [46.6, 53389.0], [46.7, 53389.0], [46.8, 53389.0], [46.9, 53389.0], [47.0, 53465.0], [47.1, 53465.0], [47.2, 53465.0], [47.3, 53465.0], [47.4, 53465.0], [47.5, 53465.0], [47.6, 53465.0], [47.7, 53465.0], [47.8, 53465.0], [47.9, 53465.0], [48.0, 53468.0], [48.1, 53468.0], [48.2, 53468.0], [48.3, 53468.0], [48.4, 53468.0], [48.5, 53468.0], [48.6, 53468.0], [48.7, 53468.0], [48.8, 53468.0], [48.9, 53468.0], [49.0, 53629.0], [49.1, 53629.0], [49.2, 53629.0], [49.3, 53629.0], [49.4, 53629.0], [49.5, 53629.0], [49.6, 53629.0], [49.7, 53629.0], [49.8, 53629.0], [49.9, 53629.0], [50.0, 53639.0], [50.1, 53639.0], [50.2, 53639.0], [50.3, 53639.0], [50.4, 53639.0], [50.5, 53639.0], [50.6, 53639.0], [50.7, 53639.0], [50.8, 53639.0], [50.9, 53639.0], [51.0, 53665.0], [51.1, 53665.0], [51.2, 53665.0], [51.3, 53665.0], [51.4, 53665.0], [51.5, 53665.0], [51.6, 53665.0], [51.7, 53665.0], [51.8, 53665.0], [51.9, 53665.0], [52.0, 53742.0], [52.1, 53742.0], [52.2, 53742.0], [52.3, 53742.0], [52.4, 53742.0], [52.5, 53742.0], [52.6, 53742.0], [52.7, 53742.0], [52.8, 53742.0], [52.9, 53742.0], [53.0, 53778.0], [53.1, 53778.0], [53.2, 53778.0], [53.3, 53778.0], [53.4, 53778.0], [53.5, 53778.0], [53.6, 53778.0], [53.7, 53778.0], [53.8, 53778.0], [53.9, 53778.0], [54.0, 53999.0], [54.1, 53999.0], [54.2, 53999.0], [54.3, 53999.0], [54.4, 53999.0], [54.5, 53999.0], [54.6, 53999.0], [54.7, 53999.0], [54.8, 53999.0], [54.9, 53999.0], [55.0, 54215.0], [55.1, 54215.0], [55.2, 54215.0], [55.3, 54215.0], [55.4, 54215.0], [55.5, 54215.0], [55.6, 54215.0], [55.7, 54215.0], [55.8, 54215.0], [55.9, 54215.0], [56.0, 54325.0], [56.1, 54325.0], [56.2, 54325.0], [56.3, 54325.0], [56.4, 54325.0], [56.5, 54325.0], [56.6, 54325.0], [56.7, 54325.0], [56.8, 54325.0], [56.9, 54325.0], [57.0, 54473.0], [57.1, 54473.0], [57.2, 54473.0], [57.3, 54473.0], [57.4, 54473.0], [57.5, 54473.0], [57.6, 54473.0], [57.7, 54473.0], [57.8, 54473.0], [57.9, 54473.0], [58.0, 54676.0], [58.1, 54676.0], [58.2, 54676.0], [58.3, 54676.0], [58.4, 54676.0], [58.5, 54676.0], [58.6, 54676.0], [58.7, 54676.0], [58.8, 54676.0], [58.9, 54676.0], [59.0, 54821.0], [59.1, 54821.0], [59.2, 54821.0], [59.3, 54821.0], [59.4, 54821.0], [59.5, 54821.0], [59.6, 54821.0], [59.7, 54821.0], [59.8, 54821.0], [59.9, 54821.0], [60.0, 55346.0], [60.1, 55346.0], [60.2, 55346.0], [60.3, 55346.0], [60.4, 55346.0], [60.5, 55346.0], [60.6, 55346.0], [60.7, 55346.0], [60.8, 55346.0], [60.9, 55346.0], [61.0, 55648.0], [61.1, 55648.0], [61.2, 55648.0], [61.3, 55648.0], [61.4, 55648.0], [61.5, 55648.0], [61.6, 55648.0], [61.7, 55648.0], [61.8, 55648.0], [61.9, 55648.0], [62.0, 55706.0], [62.1, 55706.0], [62.2, 55706.0], [62.3, 55706.0], [62.4, 55706.0], [62.5, 55706.0], [62.6, 55706.0], [62.7, 55706.0], [62.8, 55706.0], [62.9, 55706.0], [63.0, 55892.0], [63.1, 55892.0], [63.2, 55892.0], [63.3, 55892.0], [63.4, 55892.0], [63.5, 55892.0], [63.6, 55892.0], [63.7, 55892.0], [63.8, 55892.0], [63.9, 55892.0], [64.0, 55897.0], [64.1, 55897.0], [64.2, 55897.0], [64.3, 55897.0], [64.4, 55897.0], [64.5, 55897.0], [64.6, 55897.0], [64.7, 55897.0], [64.8, 55897.0], [64.9, 55897.0], [65.0, 56012.0], [65.1, 56012.0], [65.2, 56012.0], [65.3, 56012.0], [65.4, 56012.0], [65.5, 56012.0], [65.6, 56012.0], [65.7, 56012.0], [65.8, 56012.0], [65.9, 56012.0], [66.0, 56225.0], [66.1, 56225.0], [66.2, 56225.0], [66.3, 56225.0], [66.4, 56225.0], [66.5, 56225.0], [66.6, 56225.0], [66.7, 56225.0], [66.8, 56225.0], [66.9, 56225.0], [67.0, 56243.0], [67.1, 56243.0], [67.2, 56243.0], [67.3, 56243.0], [67.4, 56243.0], [67.5, 56243.0], [67.6, 56243.0], [67.7, 56243.0], [67.8, 56243.0], [67.9, 56243.0], [68.0, 56391.0], [68.1, 56391.0], [68.2, 56391.0], [68.3, 56391.0], [68.4, 56391.0], [68.5, 56391.0], [68.6, 56391.0], [68.7, 56391.0], [68.8, 56391.0], [68.9, 56391.0], [69.0, 56682.0], [69.1, 56682.0], [69.2, 56682.0], [69.3, 56682.0], [69.4, 56682.0], [69.5, 56682.0], [69.6, 56682.0], [69.7, 56682.0], [69.8, 56682.0], [69.9, 56682.0], [70.0, 56831.0], [70.1, 56831.0], [70.2, 56831.0], [70.3, 56831.0], [70.4, 56831.0], [70.5, 56831.0], [70.6, 56831.0], [70.7, 56831.0], [70.8, 56831.0], [70.9, 56831.0], [71.0, 56844.0], [71.1, 56844.0], [71.2, 56844.0], [71.3, 56844.0], [71.4, 56844.0], [71.5, 56844.0], [71.6, 56844.0], [71.7, 56844.0], [71.8, 56844.0], [71.9, 56844.0], [72.0, 57259.0], [72.1, 57259.0], [72.2, 57259.0], [72.3, 57259.0], [72.4, 57259.0], [72.5, 57259.0], [72.6, 57259.0], [72.7, 57259.0], [72.8, 57259.0], [72.9, 57259.0], [73.0, 58352.0], [73.1, 58352.0], [73.2, 58352.0], [73.3, 58352.0], [73.4, 58352.0], [73.5, 58352.0], [73.6, 58352.0], [73.7, 58352.0], [73.8, 58352.0], [73.9, 58352.0], [74.0, 58629.0], [74.1, 58629.0], [74.2, 58629.0], [74.3, 58629.0], [74.4, 58629.0], [74.5, 58629.0], [74.6, 58629.0], [74.7, 58629.0], [74.8, 58629.0], [74.9, 58629.0], [75.0, 58646.0], [75.1, 58646.0], [75.2, 58646.0], [75.3, 58646.0], [75.4, 58646.0], [75.5, 58646.0], [75.6, 58646.0], [75.7, 58646.0], [75.8, 58646.0], [75.9, 58646.0], [76.0, 59083.0], [76.1, 59083.0], [76.2, 59083.0], [76.3, 59083.0], [76.4, 59083.0], [76.5, 59083.0], [76.6, 59083.0], [76.7, 59083.0], [76.8, 59083.0], [76.9, 59083.0], [77.0, 59209.0], [77.1, 59209.0], [77.2, 59209.0], [77.3, 59209.0], [77.4, 59209.0], [77.5, 59209.0], [77.6, 59209.0], [77.7, 59209.0], [77.8, 59209.0], [77.9, 59209.0], [78.0, 59726.0], [78.1, 59726.0], [78.2, 59726.0], [78.3, 59726.0], [78.4, 59726.0], [78.5, 59726.0], [78.6, 59726.0], [78.7, 59726.0], [78.8, 59726.0], [78.9, 59726.0], [79.0, 59993.0], [79.1, 59993.0], [79.2, 59993.0], [79.3, 59993.0], [79.4, 59993.0], [79.5, 59993.0], [79.6, 59993.0], [79.7, 59993.0], [79.8, 59993.0], [79.9, 59993.0], [80.0, 60034.0], [80.1, 60034.0], [80.2, 60034.0], [80.3, 60034.0], [80.4, 60034.0], [80.5, 60034.0], [80.6, 60034.0], [80.7, 60034.0], [80.8, 60034.0], [80.9, 60034.0], [81.0, 60044.0], [81.1, 60044.0], [81.2, 60044.0], [81.3, 60044.0], [81.4, 60044.0], [81.5, 60044.0], [81.6, 60044.0], [81.7, 60044.0], [81.8, 60044.0], [81.9, 60044.0], [82.0, 60045.0], [82.1, 60045.0], [82.2, 60045.0], [82.3, 60045.0], [82.4, 60045.0], [82.5, 60045.0], [82.6, 60045.0], [82.7, 60045.0], [82.8, 60045.0], [82.9, 60045.0], [83.0, 60058.0], [83.1, 60058.0], [83.2, 60058.0], [83.3, 60058.0], [83.4, 60058.0], [83.5, 60058.0], [83.6, 60058.0], [83.7, 60058.0], [83.8, 60058.0], [83.9, 60058.0], [84.0, 60085.0], [84.1, 60085.0], [84.2, 60085.0], [84.3, 60085.0], [84.4, 60085.0], [84.5, 60085.0], [84.6, 60085.0], [84.7, 60085.0], [84.8, 60085.0], [84.9, 60085.0], [85.0, 60091.0], [85.1, 60091.0], [85.2, 60091.0], [85.3, 60091.0], [85.4, 60091.0], [85.5, 60091.0], [85.6, 60091.0], [85.7, 60091.0], [85.8, 60091.0], [85.9, 60091.0], [86.0, 60091.0], [86.1, 60091.0], [86.2, 60091.0], [86.3, 60091.0], [86.4, 60091.0], [86.5, 60091.0], [86.6, 60091.0], [86.7, 60091.0], [86.8, 60091.0], [86.9, 60091.0], [87.0, 60092.0], [87.1, 60092.0], [87.2, 60092.0], [87.3, 60092.0], [87.4, 60092.0], [87.5, 60092.0], [87.6, 60092.0], [87.7, 60092.0], [87.8, 60092.0], [87.9, 60092.0], [88.0, 60093.0], [88.1, 60093.0], [88.2, 60093.0], [88.3, 60093.0], [88.4, 60093.0], [88.5, 60093.0], [88.6, 60093.0], [88.7, 60093.0], [88.8, 60093.0], [88.9, 60093.0], [89.0, 60093.0], [89.1, 60093.0], [89.2, 60093.0], [89.3, 60093.0], [89.4, 60093.0], [89.5, 60093.0], [89.6, 60093.0], [89.7, 60093.0], [89.8, 60093.0], [89.9, 60093.0], [90.0, 60094.0], [90.1, 60094.0], [90.2, 60094.0], [90.3, 60094.0], [90.4, 60094.0], [90.5, 60094.0], [90.6, 60094.0], [90.7, 60094.0], [90.8, 60094.0], [90.9, 60094.0], [91.0, 60099.0], [91.1, 60099.0], [91.2, 60099.0], [91.3, 60099.0], [91.4, 60099.0], [91.5, 60099.0], [91.6, 60099.0], [91.7, 60099.0], [91.8, 60099.0], [91.9, 60099.0], [92.0, 60099.0], [92.1, 60099.0], [92.2, 60099.0], [92.3, 60099.0], [92.4, 60099.0], [92.5, 60099.0], [92.6, 60099.0], [92.7, 60099.0], [92.8, 60099.0], [92.9, 60099.0], [93.0, 60101.0], [93.1, 60101.0], [93.2, 60101.0], [93.3, 60101.0], [93.4, 60101.0], [93.5, 60101.0], [93.6, 60101.0], [93.7, 60101.0], [93.8, 60101.0], [93.9, 60101.0], [94.0, 60102.0], [94.1, 60102.0], [94.2, 60102.0], [94.3, 60102.0], [94.4, 60102.0], [94.5, 60102.0], [94.6, 60102.0], [94.7, 60102.0], [94.8, 60102.0], [94.9, 60102.0], [95.0, 60102.0], [95.1, 60102.0], [95.2, 60102.0], [95.3, 60102.0], [95.4, 60102.0], [95.5, 60102.0], [95.6, 60102.0], [95.7, 60102.0], [95.8, 60102.0], [95.9, 60102.0], [96.0, 60104.0], [96.1, 60104.0], [96.2, 60104.0], [96.3, 60104.0], [96.4, 60104.0], [96.5, 60104.0], [96.6, 60104.0], [96.7, 60104.0], [96.8, 60104.0], [96.9, 60104.0], [97.0, 60117.0], [97.1, 60117.0], [97.2, 60117.0], [97.3, 60117.0], [97.4, 60117.0], [97.5, 60117.0], [97.6, 60117.0], [97.7, 60117.0], [97.8, 60117.0], [97.9, 60117.0], [98.0, 60128.0], [98.1, 60128.0], [98.2, 60128.0], [98.3, 60128.0], [98.4, 60128.0], [98.5, 60128.0], [98.6, 60128.0], [98.7, 60128.0], [98.8, 60128.0], [98.9, 60128.0], [99.0, 60294.0], [99.1, 60294.0], [99.2, 60294.0], [99.3, 60294.0], [99.4, 60294.0], [99.5, 60294.0], [99.6, 60294.0], [99.7, 60294.0], [99.8, 60294.0], [99.9, 60294.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 13.0, "series": [{"data": [[1500.0, 1.0], [1800.0, 1.0], [2900.0, 1.0], [9800.0, 1.0], [19200.0, 1.0], [23800.0, 1.0], [30500.0, 1.0], [34600.0, 1.0], [36200.0, 1.0], [35700.0, 1.0], [35400.0, 1.0], [37900.0, 1.0], [38800.0, 1.0], [38000.0, 1.0], [37000.0, 1.0], [41800.0, 1.0], [42500.0, 1.0], [42400.0, 1.0], [44000.0, 1.0], [45000.0, 1.0], [47000.0, 1.0], [48200.0, 1.0], [48300.0, 1.0], [47900.0, 1.0], [47600.0, 1.0], [49700.0, 1.0], [50500.0, 1.0], [50400.0, 2.0], [50600.0, 1.0], [50700.0, 1.0], [50300.0, 1.0], [49600.0, 1.0], [52100.0, 1.0], [52300.0, 3.0], [52400.0, 3.0], [51800.0, 1.0], [52600.0, 2.0], [53100.0, 1.0], [51600.0, 1.0], [53700.0, 2.0], [53400.0, 2.0], [53300.0, 2.0], [54300.0, 1.0], [53900.0, 1.0], [54200.0, 1.0], [53600.0, 3.0], [54400.0, 1.0], [54600.0, 1.0], [54800.0, 1.0], [55700.0, 1.0], [57200.0, 1.0], [55300.0, 1.0], [55600.0, 1.0], [56800.0, 2.0], [56000.0, 1.0], [56200.0, 2.0], [55800.0, 2.0], [56600.0, 1.0], [56300.0, 1.0], [58600.0, 2.0], [59200.0, 1.0], [59000.0, 1.0], [58300.0, 1.0], [60000.0, 13.0], [60100.0, 6.0], [59900.0, 1.0], [59700.0, 1.0], [60200.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 80.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 80.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 20.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.79151666E12, "maxY": 18.7, "series": [{"data": [[1.79151696E12, 17.842105263157894], [1.79151666E12, 2.3333333333333335], [1.79151684E12, 18.0], [1.79151702E12, 7.0], [1.79151672E12, 12.166666666666666], [1.7915169E12, 18.7], [1.79151678E12, 16.733333333333334]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16517.333333333336, "minX": 1.0, "maxY": 56543.5, "series": [{"data": [[8.0, 37472.5], [2.0, 47698.0], [9.0, 39282.0], [10.0, 53389.0], [11.0, 41531.5], [3.0, 16517.333333333336], [12.0, 45687.5], [13.0, 41338.666666666664], [14.0, 44101.0], [15.0, 45080.4], [1.0, 25765.5], [16.0, 56536.00000000001], [4.0, 50358.0], [17.0, 53737.846153846156], [18.0, 55005.31250000001], [19.0, 55564.05263157895], [20.0, 53277.71428571428], [5.0, 51640.0], [21.0, 56543.5], [6.0, 50787.0], [7.0, 31146.0]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[15.319999999999999, 50257.720000000016]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9.566666666666666, "minX": 1.79151666E12, "maxY": 432.6, "series": [{"data": [[1.79151696E12, 60.733333333333334], [1.79151666E12, 9.566666666666666], [1.79151684E12, 57.11666666666667], [1.79151702E12, 41.85], [1.79151672E12, 38.85], [1.7915169E12, 62.56666666666667], [1.79151678E12, 46.63333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79151696E12, 373.6166666666667], [1.79151666E12, 23.15], [1.79151684E12, 291.3666666666667], [1.79151702E12, 193.63333333333333], [1.79151672E12, 243.73333333333332], [1.7915169E12, 432.6], [1.79151678E12, 290.1666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2112.6666666666665, "minX": 1.79151666E12, "maxY": 56929.899999999994, "series": [{"data": [[1.79151696E12, 55277.42105263157], [1.79151666E12, 2112.6666666666665], [1.79151684E12, 53361.61111111111], [1.79151702E12, 51800.846153846156], [1.79151672E12, 31467.166666666668], [1.7915169E12, 56929.899999999994], [1.79151678E12, 54602.6]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2112.6666666666665, "minX": 1.79151666E12, "maxY": 56929.85, "series": [{"data": [[1.79151696E12, 55277.36842105263], [1.79151666E12, 2112.6666666666665], [1.79151684E12, 53361.49999999999], [1.79151702E12, 51800.846153846156], [1.79151672E12, 31467.083333333336], [1.7915169E12, 56929.85], [1.79151678E12, 54602.46666666667]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.923076923076923, "minX": 1.79151666E12, "maxY": 18.8, "series": [{"data": [[1.79151696E12, 10.31578947368421], [1.79151666E12, 12.666666666666666], [1.79151684E12, 10.0], [1.79151702E12, 8.923076923076923], [1.79151672E12, 10.583333333333334], [1.7915169E12, 18.8], [1.79151678E12, 11.200000000000001]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1547.0, "minX": 1.79151666E12, "maxY": 59993.0, "series": [{"data": [[1.79151696E12, 58629.0], [1.79151666E12, 2937.0], [1.79151684E12, 59993.0], [1.79151702E12, 55897.0], [1.79151672E12, 38869.0], [1.7915169E12, 59209.0], [1.79151678E12, 57259.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79151696E12, 58407.4], [1.79151666E12, 2937.0], [1.79151684E12, 59806.1], [1.79151702E12, 55797.4], [1.79151672E12, 38634.1], [1.7915169E12, 59183.8], [1.79151678E12, 57259.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79151696E12, 58629.0], [1.79151666E12, 2937.0], [1.79151684E12, 59993.0], [1.79151702E12, 55897.0], [1.79151672E12, 38869.0], [1.7915169E12, 59209.0], [1.79151678E12, 57259.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79151696E12, 58629.0], [1.79151666E12, 2937.0], [1.79151684E12, 59993.0], [1.79151702E12, 55897.0], [1.79151672E12, 38869.0], [1.7915169E12, 59209.0], [1.79151678E12, 57259.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79151696E12, 47959.0], [1.79151666E12, 1547.0], [1.79151684E12, 42406.0], [1.79151702E12, 45068.0], [1.79151672E12, 9824.0], [1.7915169E12, 47088.0], [1.79151678E12, 41863.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79151696E12, 55892.0], [1.79151666E12, 1854.0], [1.79151684E12, 52550.0], [1.79151702E12, 52466.0], [1.79151672E12, 35621.5], [1.7915169E12, 54473.0], [1.79151678E12, 52740.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 51213.5, "minX": 1.0, "maxY": 60211.0, "series": [{"data": [[1.0, 52467.0], [2.0, 51213.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60093.0], [2.0, 60211.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 51213.5, "minX": 1.0, "maxY": 60211.0, "series": [{"data": [[1.0, 52467.0], [2.0, 51213.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60093.0], [2.0, 60211.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.79151666E12, "maxY": 0.4, "series": [{"data": [[1.79151696E12, 0.25], [1.79151666E12, 0.13333333333333333], [1.79151684E12, 0.4], [1.79151672E12, 0.36666666666666664], [1.7915169E12, 0.2833333333333333], [1.79151678E12, 0.23333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151696E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79151666E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79151696E12, 0.2833333333333333], [1.79151666E12, 0.05], [1.79151684E12, 0.26666666666666666], [1.79151702E12, 0.21666666666666667], [1.79151672E12, 0.2], [1.7915169E12, 0.18333333333333332], [1.79151678E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79151696E12, 0.03333333333333333], [1.79151684E12, 0.03333333333333333], [1.7915169E12, 0.15], [1.79151678E12, 0.11666666666666667]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79151666E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79151696E12, 0.2833333333333333], [1.79151666E12, 0.05], [1.79151684E12, 0.26666666666666666], [1.79151702E12, 0.21666666666666667], [1.79151672E12, 0.2], [1.7915169E12, 0.18333333333333332], [1.79151678E12, 0.13333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79151696E12, 0.03333333333333333], [1.79151684E12, 0.03333333333333333], [1.7915169E12, 0.15], [1.79151678E12, 0.11666666666666667]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79151666E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79151696E12, 0.2833333333333333], [1.79151666E12, 0.05], [1.79151684E12, 0.26666666666666666], [1.79151702E12, 0.21666666666666667], [1.79151672E12, 0.2], [1.7915169E12, 0.18333333333333332], [1.79151678E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79151696E12, 0.03333333333333333], [1.79151684E12, 0.03333333333333333], [1.7915169E12, 0.15], [1.79151678E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151702E12, "title": "Total Transactions Per Second"}},
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

