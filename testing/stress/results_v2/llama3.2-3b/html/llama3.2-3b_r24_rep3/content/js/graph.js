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
        data: {"result": {"minY": 985.0, "minX": 0.0, "maxY": 120022.0, "series": [{"data": [[0.0, 985.0], [0.1, 985.0], [0.2, 985.0], [0.3, 985.0], [0.4, 985.0], [0.5, 985.0], [0.6, 985.0], [0.7, 985.0], [0.8, 985.0], [0.9, 1261.0], [1.0, 1261.0], [1.1, 1261.0], [1.2, 1261.0], [1.3, 1261.0], [1.4, 1261.0], [1.5, 1261.0], [1.6, 1261.0], [1.7, 1281.0], [1.8, 1281.0], [1.9, 1281.0], [2.0, 1281.0], [2.1, 1281.0], [2.2, 1281.0], [2.3, 1281.0], [2.4, 1281.0], [2.5, 5085.0], [2.6, 5085.0], [2.7, 5085.0], [2.8, 5085.0], [2.9, 5085.0], [3.0, 5085.0], [3.1, 5085.0], [3.2, 5085.0], [3.3, 5085.0], [3.4, 7758.0], [3.5, 7758.0], [3.6, 7758.0], [3.7, 7758.0], [3.8, 7758.0], [3.9, 7758.0], [4.0, 7758.0], [4.1, 7758.0], [4.2, 9376.0], [4.3, 9376.0], [4.4, 9376.0], [4.5, 9376.0], [4.6, 9376.0], [4.7, 9376.0], [4.8, 9376.0], [4.9, 9376.0], [5.0, 12598.0], [5.1, 12598.0], [5.2, 12598.0], [5.3, 12598.0], [5.4, 12598.0], [5.5, 12598.0], [5.6, 12598.0], [5.7, 12598.0], [5.8, 12598.0], [5.9, 14677.0], [6.0, 14677.0], [6.1, 14677.0], [6.2, 14677.0], [6.3, 14677.0], [6.4, 14677.0], [6.5, 14677.0], [6.6, 14677.0], [6.7, 14848.0], [6.8, 14848.0], [6.9, 14848.0], [7.0, 14848.0], [7.1, 14848.0], [7.2, 14848.0], [7.3, 14848.0], [7.4, 14848.0], [7.5, 15330.0], [7.6, 15330.0], [7.7, 15330.0], [7.8, 15330.0], [7.9, 15330.0], [8.0, 15330.0], [8.1, 15330.0], [8.2, 15330.0], [8.3, 15330.0], [8.4, 15363.0], [8.5, 15363.0], [8.6, 15363.0], [8.7, 15363.0], [8.8, 15363.0], [8.9, 15363.0], [9.0, 15363.0], [9.1, 15363.0], [9.2, 15905.0], [9.3, 15905.0], [9.4, 15905.0], [9.5, 15905.0], [9.6, 15905.0], [9.7, 15905.0], [9.8, 15905.0], [9.9, 15905.0], [10.0, 16785.0], [10.1, 16785.0], [10.2, 16785.0], [10.3, 16785.0], [10.4, 16785.0], [10.5, 16785.0], [10.6, 16785.0], [10.7, 16785.0], [10.8, 16785.0], [10.9, 17146.0], [11.0, 17146.0], [11.1, 17146.0], [11.2, 17146.0], [11.3, 17146.0], [11.4, 17146.0], [11.5, 17146.0], [11.6, 17146.0], [11.7, 17270.0], [11.8, 17270.0], [11.9, 17270.0], [12.0, 17270.0], [12.1, 17270.0], [12.2, 17270.0], [12.3, 17270.0], [12.4, 17270.0], [12.5, 17270.0], [12.6, 19012.0], [12.7, 19012.0], [12.8, 19012.0], [12.9, 19012.0], [13.0, 19012.0], [13.1, 19012.0], [13.2, 19012.0], [13.3, 19012.0], [13.4, 19276.0], [13.5, 19276.0], [13.6, 19276.0], [13.7, 19276.0], [13.8, 19276.0], [13.9, 19276.0], [14.0, 19276.0], [14.1, 19276.0], [14.2, 20206.0], [14.3, 20206.0], [14.4, 20206.0], [14.5, 20206.0], [14.6, 20206.0], [14.7, 20206.0], [14.8, 20206.0], [14.9, 20206.0], [15.0, 20206.0], [15.1, 20329.0], [15.2, 20329.0], [15.3, 20329.0], [15.4, 20329.0], [15.5, 20329.0], [15.6, 20329.0], [15.7, 20329.0], [15.8, 20329.0], [15.9, 20896.0], [16.0, 20896.0], [16.1, 20896.0], [16.2, 20896.0], [16.3, 20896.0], [16.4, 20896.0], [16.5, 20896.0], [16.6, 20896.0], [16.7, 21471.0], [16.8, 21471.0], [16.9, 21471.0], [17.0, 21471.0], [17.1, 21471.0], [17.2, 21471.0], [17.3, 21471.0], [17.4, 21471.0], [17.5, 21471.0], [17.6, 22076.0], [17.7, 22076.0], [17.8, 22076.0], [17.9, 22076.0], [18.0, 22076.0], [18.1, 22076.0], [18.2, 22076.0], [18.3, 22076.0], [18.4, 22360.0], [18.5, 22360.0], [18.6, 22360.0], [18.7, 22360.0], [18.8, 22360.0], [18.9, 22360.0], [19.0, 22360.0], [19.1, 22360.0], [19.2, 22957.0], [19.3, 22957.0], [19.4, 22957.0], [19.5, 22957.0], [19.6, 22957.0], [19.7, 22957.0], [19.8, 22957.0], [19.9, 22957.0], [20.0, 23097.0], [20.1, 23097.0], [20.2, 23097.0], [20.3, 23097.0], [20.4, 23097.0], [20.5, 23097.0], [20.6, 23097.0], [20.7, 23097.0], [20.8, 23097.0], [20.9, 23270.0], [21.0, 23270.0], [21.1, 23270.0], [21.2, 23270.0], [21.3, 23270.0], [21.4, 23270.0], [21.5, 23270.0], [21.6, 23270.0], [21.7, 23517.0], [21.8, 23517.0], [21.9, 23517.0], [22.0, 23517.0], [22.1, 23517.0], [22.2, 23517.0], [22.3, 23517.0], [22.4, 23517.0], [22.5, 23610.0], [22.6, 23610.0], [22.7, 23610.0], [22.8, 23610.0], [22.9, 23610.0], [23.0, 23610.0], [23.1, 23610.0], [23.2, 23610.0], [23.3, 23610.0], [23.4, 24134.0], [23.5, 24134.0], [23.6, 24134.0], [23.7, 24134.0], [23.8, 24134.0], [23.9, 24134.0], [24.0, 24134.0], [24.1, 24134.0], [24.2, 24280.0], [24.3, 24280.0], [24.4, 24280.0], [24.5, 24280.0], [24.6, 24280.0], [24.7, 24280.0], [24.8, 24280.0], [24.9, 24280.0], [25.0, 24348.0], [25.1, 24348.0], [25.2, 24348.0], [25.3, 24348.0], [25.4, 24348.0], [25.5, 24348.0], [25.6, 24348.0], [25.7, 24348.0], [25.8, 24348.0], [25.9, 24664.0], [26.0, 24664.0], [26.1, 24664.0], [26.2, 24664.0], [26.3, 24664.0], [26.4, 24664.0], [26.5, 24664.0], [26.6, 24664.0], [26.7, 24878.0], [26.8, 24878.0], [26.9, 24878.0], [27.0, 24878.0], [27.1, 24878.0], [27.2, 24878.0], [27.3, 24878.0], [27.4, 24878.0], [27.5, 24932.0], [27.6, 24932.0], [27.7, 24932.0], [27.8, 24932.0], [27.9, 24932.0], [28.0, 24932.0], [28.1, 24932.0], [28.2, 24932.0], [28.3, 24932.0], [28.4, 26392.0], [28.5, 26392.0], [28.6, 26392.0], [28.7, 26392.0], [28.8, 26392.0], [28.9, 26392.0], [29.0, 26392.0], [29.1, 26392.0], [29.2, 27205.0], [29.3, 27205.0], [29.4, 27205.0], [29.5, 27205.0], [29.6, 27205.0], [29.7, 27205.0], [29.8, 27205.0], [29.9, 27205.0], [30.0, 27486.0], [30.1, 27486.0], [30.2, 27486.0], [30.3, 27486.0], [30.4, 27486.0], [30.5, 27486.0], [30.6, 27486.0], [30.7, 27486.0], [30.8, 27486.0], [30.9, 27504.0], [31.0, 27504.0], [31.1, 27504.0], [31.2, 27504.0], [31.3, 27504.0], [31.4, 27504.0], [31.5, 27504.0], [31.6, 27504.0], [31.7, 27629.0], [31.8, 27629.0], [31.9, 27629.0], [32.0, 27629.0], [32.1, 27629.0], [32.2, 27629.0], [32.3, 27629.0], [32.4, 27629.0], [32.5, 27713.0], [32.6, 27713.0], [32.7, 27713.0], [32.8, 27713.0], [32.9, 27713.0], [33.0, 27713.0], [33.1, 27713.0], [33.2, 27713.0], [33.3, 27713.0], [33.4, 28405.0], [33.5, 28405.0], [33.6, 28405.0], [33.7, 28405.0], [33.8, 28405.0], [33.9, 28405.0], [34.0, 28405.0], [34.1, 28405.0], [34.2, 28712.0], [34.3, 28712.0], [34.4, 28712.0], [34.5, 28712.0], [34.6, 28712.0], [34.7, 28712.0], [34.8, 28712.0], [34.9, 28712.0], [35.0, 28845.0], [35.1, 28845.0], [35.2, 28845.0], [35.3, 28845.0], [35.4, 28845.0], [35.5, 28845.0], [35.6, 28845.0], [35.7, 28845.0], [35.8, 28845.0], [35.9, 29359.0], [36.0, 29359.0], [36.1, 29359.0], [36.2, 29359.0], [36.3, 29359.0], [36.4, 29359.0], [36.5, 29359.0], [36.6, 29359.0], [36.7, 29422.0], [36.8, 29422.0], [36.9, 29422.0], [37.0, 29422.0], [37.1, 29422.0], [37.2, 29422.0], [37.3, 29422.0], [37.4, 29422.0], [37.5, 29726.0], [37.6, 29726.0], [37.7, 29726.0], [37.8, 29726.0], [37.9, 29726.0], [38.0, 29726.0], [38.1, 29726.0], [38.2, 29726.0], [38.3, 29726.0], [38.4, 30341.0], [38.5, 30341.0], [38.6, 30341.0], [38.7, 30341.0], [38.8, 30341.0], [38.9, 30341.0], [39.0, 30341.0], [39.1, 30341.0], [39.2, 30517.0], [39.3, 30517.0], [39.4, 30517.0], [39.5, 30517.0], [39.6, 30517.0], [39.7, 30517.0], [39.8, 30517.0], [39.9, 30517.0], [40.0, 30517.0], [40.1, 30946.0], [40.2, 30946.0], [40.3, 30946.0], [40.4, 30946.0], [40.5, 30946.0], [40.6, 30946.0], [40.7, 30946.0], [40.8, 30946.0], [40.9, 32247.0], [41.0, 32247.0], [41.1, 32247.0], [41.2, 32247.0], [41.3, 32247.0], [41.4, 32247.0], [41.5, 32247.0], [41.6, 32247.0], [41.7, 32508.0], [41.8, 32508.0], [41.9, 32508.0], [42.0, 32508.0], [42.1, 32508.0], [42.2, 32508.0], [42.3, 32508.0], [42.4, 32508.0], [42.5, 32508.0], [42.6, 34135.0], [42.7, 34135.0], [42.8, 34135.0], [42.9, 34135.0], [43.0, 34135.0], [43.1, 34135.0], [43.2, 34135.0], [43.3, 34135.0], [43.4, 34278.0], [43.5, 34278.0], [43.6, 34278.0], [43.7, 34278.0], [43.8, 34278.0], [43.9, 34278.0], [44.0, 34278.0], [44.1, 34278.0], [44.2, 34743.0], [44.3, 34743.0], [44.4, 34743.0], [44.5, 34743.0], [44.6, 34743.0], [44.7, 34743.0], [44.8, 34743.0], [44.9, 34743.0], [45.0, 34743.0], [45.1, 34804.0], [45.2, 34804.0], [45.3, 34804.0], [45.4, 34804.0], [45.5, 34804.0], [45.6, 34804.0], [45.7, 34804.0], [45.8, 34804.0], [45.9, 35043.0], [46.0, 35043.0], [46.1, 35043.0], [46.2, 35043.0], [46.3, 35043.0], [46.4, 35043.0], [46.5, 35043.0], [46.6, 35043.0], [46.7, 35297.0], [46.8, 35297.0], [46.9, 35297.0], [47.0, 35297.0], [47.1, 35297.0], [47.2, 35297.0], [47.3, 35297.0], [47.4, 35297.0], [47.5, 35297.0], [47.6, 36226.0], [47.7, 36226.0], [47.8, 36226.0], [47.9, 36226.0], [48.0, 36226.0], [48.1, 36226.0], [48.2, 36226.0], [48.3, 36226.0], [48.4, 38758.0], [48.5, 38758.0], [48.6, 38758.0], [48.7, 38758.0], [48.8, 38758.0], [48.9, 38758.0], [49.0, 38758.0], [49.1, 38758.0], [49.2, 39867.0], [49.3, 39867.0], [49.4, 39867.0], [49.5, 39867.0], [49.6, 39867.0], [49.7, 39867.0], [49.8, 39867.0], [49.9, 39867.0], [50.0, 39867.0], [50.1, 40985.0], [50.2, 40985.0], [50.3, 40985.0], [50.4, 40985.0], [50.5, 40985.0], [50.6, 40985.0], [50.7, 40985.0], [50.8, 40985.0], [50.9, 42605.0], [51.0, 42605.0], [51.1, 42605.0], [51.2, 42605.0], [51.3, 42605.0], [51.4, 42605.0], [51.5, 42605.0], [51.6, 42605.0], [51.7, 44652.0], [51.8, 44652.0], [51.9, 44652.0], [52.0, 44652.0], [52.1, 44652.0], [52.2, 44652.0], [52.3, 44652.0], [52.4, 44652.0], [52.5, 44652.0], [52.6, 44856.0], [52.7, 44856.0], [52.8, 44856.0], [52.9, 44856.0], [53.0, 44856.0], [53.1, 44856.0], [53.2, 44856.0], [53.3, 44856.0], [53.4, 45087.0], [53.5, 45087.0], [53.6, 45087.0], [53.7, 45087.0], [53.8, 45087.0], [53.9, 45087.0], [54.0, 45087.0], [54.1, 45087.0], [54.2, 45102.0], [54.3, 45102.0], [54.4, 45102.0], [54.5, 45102.0], [54.6, 45102.0], [54.7, 45102.0], [54.8, 45102.0], [54.9, 45102.0], [55.0, 45102.0], [55.1, 46695.0], [55.2, 46695.0], [55.3, 46695.0], [55.4, 46695.0], [55.5, 46695.0], [55.6, 46695.0], [55.7, 46695.0], [55.8, 46695.0], [55.9, 46938.0], [56.0, 46938.0], [56.1, 46938.0], [56.2, 46938.0], [56.3, 46938.0], [56.4, 46938.0], [56.5, 46938.0], [56.6, 46938.0], [56.7, 47086.0], [56.8, 47086.0], [56.9, 47086.0], [57.0, 47086.0], [57.1, 47086.0], [57.2, 47086.0], [57.3, 47086.0], [57.4, 47086.0], [57.5, 47086.0], [57.6, 47276.0], [57.7, 47276.0], [57.8, 47276.0], [57.9, 47276.0], [58.0, 47276.0], [58.1, 47276.0], [58.2, 47276.0], [58.3, 47276.0], [58.4, 47543.0], [58.5, 47543.0], [58.6, 47543.0], [58.7, 47543.0], [58.8, 47543.0], [58.9, 47543.0], [59.0, 47543.0], [59.1, 47543.0], [59.2, 47586.0], [59.3, 47586.0], [59.4, 47586.0], [59.5, 47586.0], [59.6, 47586.0], [59.7, 47586.0], [59.8, 47586.0], [59.9, 47586.0], [60.0, 47586.0], [60.1, 47920.0], [60.2, 47920.0], [60.3, 47920.0], [60.4, 47920.0], [60.5, 47920.0], [60.6, 47920.0], [60.7, 47920.0], [60.8, 47920.0], [60.9, 48058.0], [61.0, 48058.0], [61.1, 48058.0], [61.2, 48058.0], [61.3, 48058.0], [61.4, 48058.0], [61.5, 48058.0], [61.6, 48058.0], [61.7, 48176.0], [61.8, 48176.0], [61.9, 48176.0], [62.0, 48176.0], [62.1, 48176.0], [62.2, 48176.0], [62.3, 48176.0], [62.4, 48176.0], [62.5, 48176.0], [62.6, 49264.0], [62.7, 49264.0], [62.8, 49264.0], [62.9, 49264.0], [63.0, 49264.0], [63.1, 49264.0], [63.2, 49264.0], [63.3, 49264.0], [63.4, 49473.0], [63.5, 49473.0], [63.6, 49473.0], [63.7, 49473.0], [63.8, 49473.0], [63.9, 49473.0], [64.0, 49473.0], [64.1, 49473.0], [64.2, 50295.0], [64.3, 50295.0], [64.4, 50295.0], [64.5, 50295.0], [64.6, 50295.0], [64.7, 50295.0], [64.8, 50295.0], [64.9, 50295.0], [65.0, 50295.0], [65.1, 50344.0], [65.2, 50344.0], [65.3, 50344.0], [65.4, 50344.0], [65.5, 50344.0], [65.6, 50344.0], [65.7, 50344.0], [65.8, 50344.0], [65.9, 50614.0], [66.0, 50614.0], [66.1, 50614.0], [66.2, 50614.0], [66.3, 50614.0], [66.4, 50614.0], [66.5, 50614.0], [66.6, 50614.0], [66.7, 50781.0], [66.8, 50781.0], [66.9, 50781.0], [67.0, 50781.0], [67.1, 50781.0], [67.2, 50781.0], [67.3, 50781.0], [67.4, 50781.0], [67.5, 50781.0], [67.6, 51153.0], [67.7, 51153.0], [67.8, 51153.0], [67.9, 51153.0], [68.0, 51153.0], [68.1, 51153.0], [68.2, 51153.0], [68.3, 51153.0], [68.4, 51661.0], [68.5, 51661.0], [68.6, 51661.0], [68.7, 51661.0], [68.8, 51661.0], [68.9, 51661.0], [69.0, 51661.0], [69.1, 51661.0], [69.2, 52090.0], [69.3, 52090.0], [69.4, 52090.0], [69.5, 52090.0], [69.6, 52090.0], [69.7, 52090.0], [69.8, 52090.0], [69.9, 52090.0], [70.0, 52090.0], [70.1, 52453.0], [70.2, 52453.0], [70.3, 52453.0], [70.4, 52453.0], [70.5, 52453.0], [70.6, 52453.0], [70.7, 52453.0], [70.8, 52453.0], [70.9, 53503.0], [71.0, 53503.0], [71.1, 53503.0], [71.2, 53503.0], [71.3, 53503.0], [71.4, 53503.0], [71.5, 53503.0], [71.6, 53503.0], [71.7, 53692.0], [71.8, 53692.0], [71.9, 53692.0], [72.0, 53692.0], [72.1, 53692.0], [72.2, 53692.0], [72.3, 53692.0], [72.4, 53692.0], [72.5, 53692.0], [72.6, 54905.0], [72.7, 54905.0], [72.8, 54905.0], [72.9, 54905.0], [73.0, 54905.0], [73.1, 54905.0], [73.2, 54905.0], [73.3, 54905.0], [73.4, 55102.0], [73.5, 55102.0], [73.6, 55102.0], [73.7, 55102.0], [73.8, 55102.0], [73.9, 55102.0], [74.0, 55102.0], [74.1, 55102.0], [74.2, 56236.0], [74.3, 56236.0], [74.4, 56236.0], [74.5, 56236.0], [74.6, 56236.0], [74.7, 56236.0], [74.8, 56236.0], [74.9, 56236.0], [75.0, 56236.0], [75.1, 56679.0], [75.2, 56679.0], [75.3, 56679.0], [75.4, 56679.0], [75.5, 56679.0], [75.6, 56679.0], [75.7, 56679.0], [75.8, 56679.0], [75.9, 56930.0], [76.0, 56930.0], [76.1, 56930.0], [76.2, 56930.0], [76.3, 56930.0], [76.4, 56930.0], [76.5, 56930.0], [76.6, 56930.0], [76.7, 57844.0], [76.8, 57844.0], [76.9, 57844.0], [77.0, 57844.0], [77.1, 57844.0], [77.2, 57844.0], [77.3, 57844.0], [77.4, 57844.0], [77.5, 58452.0], [77.6, 58452.0], [77.7, 58452.0], [77.8, 58452.0], [77.9, 58452.0], [78.0, 58452.0], [78.1, 58452.0], [78.2, 58452.0], [78.3, 58452.0], [78.4, 59033.0], [78.5, 59033.0], [78.6, 59033.0], [78.7, 59033.0], [78.8, 59033.0], [78.9, 59033.0], [79.0, 59033.0], [79.1, 59033.0], [79.2, 59827.0], [79.3, 59827.0], [79.4, 59827.0], [79.5, 59827.0], [79.6, 59827.0], [79.7, 59827.0], [79.8, 59827.0], [79.9, 59827.0], [80.0, 59832.0], [80.1, 59832.0], [80.2, 59832.0], [80.3, 59832.0], [80.4, 59832.0], [80.5, 59832.0], [80.6, 59832.0], [80.7, 59832.0], [80.8, 59832.0], [80.9, 59892.0], [81.0, 59892.0], [81.1, 59892.0], [81.2, 59892.0], [81.3, 59892.0], [81.4, 59892.0], [81.5, 59892.0], [81.6, 59892.0], [81.7, 60087.0], [81.8, 60087.0], [81.9, 60087.0], [82.0, 60087.0], [82.1, 60087.0], [82.2, 60087.0], [82.3, 60087.0], [82.4, 60087.0], [82.5, 60087.0], [82.6, 60087.0], [82.7, 60087.0], [82.8, 60087.0], [82.9, 60087.0], [83.0, 60087.0], [83.1, 60087.0], [83.2, 60087.0], [83.3, 60087.0], [83.4, 120009.0], [83.5, 120009.0], [83.6, 120009.0], [83.7, 120009.0], [83.8, 120009.0], [83.9, 120009.0], [84.0, 120009.0], [84.1, 120009.0], [84.2, 120009.0], [84.3, 120009.0], [84.4, 120009.0], [84.5, 120009.0], [84.6, 120009.0], [84.7, 120009.0], [84.8, 120009.0], [84.9, 120009.0], [85.0, 120009.0], [85.1, 120009.0], [85.2, 120009.0], [85.3, 120009.0], [85.4, 120009.0], [85.5, 120009.0], [85.6, 120009.0], [85.7, 120009.0], [85.8, 120009.0], [85.9, 120009.0], [86.0, 120009.0], [86.1, 120009.0], [86.2, 120009.0], [86.3, 120009.0], [86.4, 120009.0], [86.5, 120009.0], [86.6, 120009.0], [86.7, 120010.0], [86.8, 120010.0], [86.9, 120010.0], [87.0, 120010.0], [87.1, 120010.0], [87.2, 120010.0], [87.3, 120010.0], [87.4, 120010.0], [87.5, 120010.0], [87.6, 120010.0], [87.7, 120010.0], [87.8, 120010.0], [87.9, 120010.0], [88.0, 120010.0], [88.1, 120010.0], [88.2, 120010.0], [88.3, 120010.0], [88.4, 120010.0], [88.5, 120010.0], [88.6, 120010.0], [88.7, 120010.0], [88.8, 120010.0], [88.9, 120010.0], [89.0, 120010.0], [89.1, 120010.0], [89.2, 120011.0], [89.3, 120011.0], [89.4, 120011.0], [89.5, 120011.0], [89.6, 120011.0], [89.7, 120011.0], [89.8, 120011.0], [89.9, 120011.0], [90.0, 120011.0], [90.1, 120011.0], [90.2, 120011.0], [90.3, 120011.0], [90.4, 120011.0], [90.5, 120011.0], [90.6, 120011.0], [90.7, 120011.0], [90.8, 120011.0], [90.9, 120011.0], [91.0, 120011.0], [91.1, 120011.0], [91.2, 120011.0], [91.3, 120011.0], [91.4, 120011.0], [91.5, 120011.0], [91.6, 120011.0], [91.7, 120012.0], [91.8, 120012.0], [91.9, 120012.0], [92.0, 120012.0], [92.1, 120012.0], [92.2, 120012.0], [92.3, 120012.0], [92.4, 120012.0], [92.5, 120012.0], [92.6, 120012.0], [92.7, 120012.0], [92.8, 120012.0], [92.9, 120012.0], [93.0, 120012.0], [93.1, 120012.0], [93.2, 120012.0], [93.3, 120012.0], [93.4, 120012.0], [93.5, 120012.0], [93.6, 120012.0], [93.7, 120012.0], [93.8, 120012.0], [93.9, 120012.0], [94.0, 120012.0], [94.1, 120012.0], [94.2, 120013.0], [94.3, 120013.0], [94.4, 120013.0], [94.5, 120013.0], [94.6, 120013.0], [94.7, 120013.0], [94.8, 120013.0], [94.9, 120013.0], [95.0, 120013.0], [95.1, 120013.0], [95.2, 120013.0], [95.3, 120013.0], [95.4, 120013.0], [95.5, 120013.0], [95.6, 120013.0], [95.7, 120013.0], [95.8, 120013.0], [95.9, 120014.0], [96.0, 120014.0], [96.1, 120014.0], [96.2, 120014.0], [96.3, 120014.0], [96.4, 120014.0], [96.5, 120014.0], [96.6, 120014.0], [96.7, 120015.0], [96.8, 120015.0], [96.9, 120015.0], [97.0, 120015.0], [97.1, 120015.0], [97.2, 120015.0], [97.3, 120015.0], [97.4, 120015.0], [97.5, 120015.0], [97.6, 120015.0], [97.7, 120015.0], [97.8, 120015.0], [97.9, 120015.0], [98.0, 120015.0], [98.1, 120015.0], [98.2, 120015.0], [98.3, 120015.0], [98.4, 120019.0], [98.5, 120019.0], [98.6, 120019.0], [98.7, 120019.0], [98.8, 120019.0], [98.9, 120019.0], [99.0, 120019.0], [99.1, 120019.0], [99.2, 120022.0], [99.3, 120022.0], [99.4, 120022.0], [99.5, 120022.0], [99.6, 120022.0], [99.7, 120022.0], [99.8, 120022.0], [99.9, 120022.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 20.0, "series": [{"data": [[900.0, 1.0], [1200.0, 2.0], [5000.0, 1.0], [7700.0, 1.0], [9300.0, 1.0], [12500.0, 1.0], [14600.0, 1.0], [14800.0, 1.0], [15300.0, 2.0], [15900.0, 1.0], [17100.0, 1.0], [16700.0, 1.0], [17200.0, 1.0], [19000.0, 1.0], [19200.0, 1.0], [20300.0, 1.0], [20200.0, 1.0], [21400.0, 1.0], [20800.0, 1.0], [22000.0, 1.0], [22300.0, 1.0], [22900.0, 1.0], [23500.0, 1.0], [23000.0, 1.0], [23200.0, 1.0], [24300.0, 1.0], [24200.0, 1.0], [24100.0, 1.0], [23600.0, 1.0], [24800.0, 1.0], [24600.0, 1.0], [24900.0, 1.0], [26300.0, 1.0], [27200.0, 1.0], [27600.0, 1.0], [27400.0, 1.0], [27500.0, 1.0], [27700.0, 1.0], [28400.0, 1.0], [29400.0, 1.0], [28700.0, 1.0], [28800.0, 1.0], [29300.0, 1.0], [29700.0, 1.0], [30500.0, 1.0], [30300.0, 1.0], [30900.0, 1.0], [32500.0, 1.0], [32200.0, 1.0], [34700.0, 1.0], [34800.0, 1.0], [34200.0, 1.0], [34100.0, 1.0], [35000.0, 1.0], [35200.0, 1.0], [36200.0, 1.0], [38700.0, 1.0], [39800.0, 1.0], [40900.0, 1.0], [42600.0, 1.0], [44800.0, 1.0], [44600.0, 1.0], [45000.0, 1.0], [47000.0, 1.0], [46600.0, 1.0], [45100.0, 1.0], [46900.0, 1.0], [47200.0, 1.0], [47900.0, 1.0], [47500.0, 2.0], [48100.0, 1.0], [48000.0, 1.0], [49400.0, 1.0], [50300.0, 1.0], [50600.0, 1.0], [49200.0, 1.0], [50700.0, 1.0], [50200.0, 1.0], [51100.0, 1.0], [52400.0, 1.0], [52000.0, 1.0], [51600.0, 1.0], [55100.0, 1.0], [54900.0, 1.0], [53500.0, 1.0], [53600.0, 1.0], [56900.0, 1.0], [56200.0, 1.0], [56600.0, 1.0], [57800.0, 1.0], [59000.0, 1.0], [58400.0, 1.0], [59800.0, 3.0], [60000.0, 2.0], [120000.0, 20.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 95.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 95.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 22.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.636363636363637, "minX": 1.7915193E12, "maxY": 22.499999999999996, "series": [{"data": [[1.79151972E12, 6.0], [1.79151942E12, 10.33333333333333], [1.79151936E12, 10.80952380952381], [1.79151954E12, 21.210526315789473], [1.79151948E12, 14.5], [1.79151966E12, 16.0], [1.7915196E12, 22.499999999999996], [1.7915193E12, 4.636363636363637]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151972E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 30884.75, "minX": 1.0, "maxY": 120013.0, "series": [{"data": [[2.0, 62548.5], [8.0, 35943.83333333333], [9.0, 51387.5], [10.0, 42020.8], [11.0, 34177.6], [12.0, 38138.77777777778], [3.0, 120009.0], [13.0, 40591.44444444444], [14.0, 45509.11111111111], [15.0, 50461.666666666664], [1.0, 30884.75], [4.0, 64695.5], [16.0, 73276.0], [17.0, 120011.0], [18.0, 86233.5], [19.0, 120013.0], [20.0, 58246.5], [5.0, 120010.0], [21.0, 50722.2], [22.0, 53499.25], [23.0, 55418.25], [6.0, 51450.666666666664], [24.0, 58188.0], [7.0, 31758.4]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[13.416666666666666, 48951.07499999998]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 24.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7915193E12, "maxY": 582.45, "series": [{"data": [[1.79151972E12, 582.45], [1.79151942E12, 67.38333333333334], [1.79151936E12, 67.71666666666667], [1.79151954E12, 61.266666666666666], [1.79151948E12, 51.63333333333333], [1.79151966E12, 476.55], [1.7915196E12, 38.06666666666667], [1.7915193E12, 35.38333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79151972E12, 0.0], [1.79151942E12, 350.68333333333334], [1.79151936E12, 378.46666666666664], [1.79151954E12, 367.8666666666667], [1.79151948E12, 362.95], [1.79151966E12, 0.0], [1.7915196E12, 176.03333333333333], [1.7915193E12, 212.26666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151972E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9338.727272727272, "minX": 1.7915193E12, "maxY": 120012.77777777778, "series": [{"data": [[1.79151972E12, 120011.90909090909], [1.79151942E12, 25439.999999999996], [1.79151936E12, 25337.571428571428], [1.79151954E12, 49766.8947368421], [1.79151948E12, 41689.5], [1.79151966E12, 120012.77777777778], [1.7915196E12, 57685.41666666667], [1.7915193E12, 9338.727272727272]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151972E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7915193E12, "maxY": 57685.41666666667, "series": [{"data": [[1.79151972E12, 0.0], [1.79151942E12, 25439.904761904763], [1.79151936E12, 25337.523809523806], [1.79151954E12, 49766.789473684206], [1.79151948E12, 41689.3125], [1.79151966E12, 0.0], [1.7915196E12, 57685.41666666667], [1.7915193E12, 9338.727272727272]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151972E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.75, "minX": 1.7915193E12, "maxY": 12.33333333333333, "series": [{"data": [[1.79151972E12, 9.727272727272727], [1.79151942E12, 9.476190476190478], [1.79151936E12, 12.33333333333333], [1.79151954E12, 10.210526315789473], [1.79151948E12, 9.6875], [1.79151966E12, 10.11111111111111], [1.7915196E12, 8.75], [1.7915193E12, 9.818181818181818]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151972E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 985.0, "minX": 1.7915193E12, "maxY": 59892.0, "series": [{"data": [[1.79151942E12, 32508.0], [1.79151936E12, 35043.0], [1.79151954E12, 57844.0], [1.79151948E12, 52453.0], [1.7915196E12, 59892.0], [1.7915193E12, 19012.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79151942E12, 30144.600000000002], [1.79151936E12, 34791.8], [1.79151954E12, 56930.0], [1.79151948E12, 50976.700000000004], [1.7915196E12, 59886.0], [1.7915193E12, 18282.200000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79151942E12, 32508.0], [1.79151936E12, 35043.0], [1.79151954E12, 57844.0], [1.79151948E12, 52453.0], [1.7915196E12, 59892.0], [1.7915193E12, 19012.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79151942E12, 32291.299999999996], [1.79151936E12, 35019.1], [1.79151954E12, 57844.0], [1.79151948E12, 52453.0], [1.7915196E12, 59892.0], [1.7915193E12, 19012.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79151942E12, 19276.0], [1.79151936E12, 14848.0], [1.79151954E12, 44652.0], [1.79151948E12, 27504.0], [1.7915196E12, 53503.0], [1.7915193E12, 985.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79151942E12, 24348.0], [1.79151936E12, 24878.0], [1.79151954E12, 49264.0], [1.79151948E12, 41795.0], [1.7915196E12, 57565.5], [1.7915193E12, 9376.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915196E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 31596.5, "minX": 1.0, "maxY": 120012.0, "series": [{"data": [[1.0, 31596.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120012.0], [2.0, 120010.0], [3.0, 120010.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 31596.5, "series": [{"data": [[1.0, 31596.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7915193E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.79151942E12, 0.38333333333333336], [1.79151936E12, 0.43333333333333335], [1.79151954E12, 0.36666666666666664], [1.79151948E12, 0.35], [1.7915196E12, 0.18333333333333332], [1.7915193E12, 0.2833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915196E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7915193E12, "maxY": 0.35, "series": [{"data": [[1.79151942E12, 0.35], [1.79151936E12, 0.35], [1.79151954E12, 0.31666666666666665], [1.79151948E12, 0.26666666666666666], [1.7915196E12, 0.16666666666666666], [1.7915193E12, 0.18333333333333332]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79151972E12, 0.18333333333333332], [1.79151966E12, 0.15]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.7915196E12, 0.03333333333333333]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151972E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7915193E12, "maxY": 0.35, "series": [{"data": [[1.79151942E12, 0.35], [1.79151936E12, 0.35], [1.79151954E12, 0.31666666666666665], [1.79151948E12, 0.26666666666666666], [1.7915196E12, 0.16666666666666666], [1.7915193E12, 0.18333333333333332]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79151972E12, 0.18333333333333332], [1.79151966E12, 0.15], [1.7915196E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151972E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7915193E12, "maxY": 0.35, "series": [{"data": [[1.79151942E12, 0.35], [1.79151936E12, 0.35], [1.79151954E12, 0.31666666666666665], [1.79151948E12, 0.26666666666666666], [1.7915196E12, 0.16666666666666666], [1.7915193E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79151972E12, 0.18333333333333332], [1.79151966E12, 0.15], [1.7915196E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151972E12, "title": "Total Transactions Per Second"}},
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

