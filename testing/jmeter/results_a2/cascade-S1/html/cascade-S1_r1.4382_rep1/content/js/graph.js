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
        data: {"result": {"minY": 2742.0, "minX": 0.0, "maxY": 73796.0, "series": [{"data": [[0.0, 2742.0], [0.1, 2742.0], [0.2, 2742.0], [0.3, 2742.0], [0.4, 2742.0], [0.5, 2742.0], [0.6, 2742.0], [0.7, 2742.0], [0.8, 2742.0], [0.9, 2742.0], [1.0, 2742.0], [1.1, 2742.0], [1.2, 2742.0], [1.3, 2742.0], [1.4, 2742.0], [1.5, 2742.0], [1.6, 2742.0], [1.7, 2742.0], [1.8, 2742.0], [1.9, 2742.0], [2.0, 2742.0], [2.1, 2742.0], [2.2, 2742.0], [2.3, 2742.0], [2.4, 2742.0], [2.5, 2742.0], [2.6, 2742.0], [2.7, 2742.0], [2.8, 2742.0], [2.9, 2742.0], [3.0, 2742.0], [3.1, 2742.0], [3.2, 2742.0], [3.3, 2742.0], [3.4, 4134.0], [3.5, 4134.0], [3.6, 4134.0], [3.7, 4134.0], [3.8, 4134.0], [3.9, 4134.0], [4.0, 4134.0], [4.1, 4134.0], [4.2, 4134.0], [4.3, 4134.0], [4.4, 4134.0], [4.5, 4134.0], [4.6, 4134.0], [4.7, 4134.0], [4.8, 4134.0], [4.9, 4134.0], [5.0, 4134.0], [5.1, 4134.0], [5.2, 4134.0], [5.3, 4134.0], [5.4, 4134.0], [5.5, 4134.0], [5.6, 4134.0], [5.7, 4134.0], [5.8, 4134.0], [5.9, 4134.0], [6.0, 4134.0], [6.1, 4134.0], [6.2, 4134.0], [6.3, 4134.0], [6.4, 4134.0], [6.5, 4134.0], [6.6, 4134.0], [6.7, 4262.0], [6.8, 4262.0], [6.9, 4262.0], [7.0, 4262.0], [7.1, 4262.0], [7.2, 4262.0], [7.3, 4262.0], [7.4, 4262.0], [7.5, 4262.0], [7.6, 4262.0], [7.7, 4262.0], [7.8, 4262.0], [7.9, 4262.0], [8.0, 4262.0], [8.1, 4262.0], [8.2, 4262.0], [8.3, 4262.0], [8.4, 4262.0], [8.5, 4262.0], [8.6, 4262.0], [8.7, 4262.0], [8.8, 4262.0], [8.9, 4262.0], [9.0, 4262.0], [9.1, 4262.0], [9.2, 4262.0], [9.3, 4262.0], [9.4, 4262.0], [9.5, 4262.0], [9.6, 4262.0], [9.7, 4262.0], [9.8, 4262.0], [9.9, 4262.0], [10.0, 5633.0], [10.1, 5633.0], [10.2, 5633.0], [10.3, 5633.0], [10.4, 5633.0], [10.5, 5633.0], [10.6, 5633.0], [10.7, 5633.0], [10.8, 5633.0], [10.9, 5633.0], [11.0, 5633.0], [11.1, 5633.0], [11.2, 5633.0], [11.3, 5633.0], [11.4, 5633.0], [11.5, 5633.0], [11.6, 5633.0], [11.7, 5633.0], [11.8, 5633.0], [11.9, 5633.0], [12.0, 5633.0], [12.1, 5633.0], [12.2, 5633.0], [12.3, 5633.0], [12.4, 5633.0], [12.5, 5633.0], [12.6, 5633.0], [12.7, 5633.0], [12.8, 5633.0], [12.9, 5633.0], [13.0, 5633.0], [13.1, 5633.0], [13.2, 5633.0], [13.3, 5633.0], [13.4, 5756.0], [13.5, 5756.0], [13.6, 5756.0], [13.7, 5756.0], [13.8, 5756.0], [13.9, 5756.0], [14.0, 5756.0], [14.1, 5756.0], [14.2, 5756.0], [14.3, 5756.0], [14.4, 5756.0], [14.5, 5756.0], [14.6, 5756.0], [14.7, 5756.0], [14.8, 5756.0], [14.9, 5756.0], [15.0, 5756.0], [15.1, 5756.0], [15.2, 5756.0], [15.3, 5756.0], [15.4, 5756.0], [15.5, 5756.0], [15.6, 5756.0], [15.7, 5756.0], [15.8, 5756.0], [15.9, 5756.0], [16.0, 5756.0], [16.1, 5756.0], [16.2, 5756.0], [16.3, 5756.0], [16.4, 5756.0], [16.5, 5756.0], [16.6, 5756.0], [16.7, 15855.0], [16.8, 15855.0], [16.9, 15855.0], [17.0, 15855.0], [17.1, 15855.0], [17.2, 15855.0], [17.3, 15855.0], [17.4, 15855.0], [17.5, 15855.0], [17.6, 15855.0], [17.7, 15855.0], [17.8, 15855.0], [17.9, 15855.0], [18.0, 15855.0], [18.1, 15855.0], [18.2, 15855.0], [18.3, 15855.0], [18.4, 15855.0], [18.5, 15855.0], [18.6, 15855.0], [18.7, 15855.0], [18.8, 15855.0], [18.9, 15855.0], [19.0, 15855.0], [19.1, 15855.0], [19.2, 15855.0], [19.3, 15855.0], [19.4, 15855.0], [19.5, 15855.0], [19.6, 15855.0], [19.7, 15855.0], [19.8, 15855.0], [19.9, 15855.0], [20.0, 21229.0], [20.1, 21229.0], [20.2, 21229.0], [20.3, 21229.0], [20.4, 21229.0], [20.5, 21229.0], [20.6, 21229.0], [20.7, 21229.0], [20.8, 21229.0], [20.9, 21229.0], [21.0, 21229.0], [21.1, 21229.0], [21.2, 21229.0], [21.3, 21229.0], [21.4, 21229.0], [21.5, 21229.0], [21.6, 21229.0], [21.7, 21229.0], [21.8, 21229.0], [21.9, 21229.0], [22.0, 21229.0], [22.1, 21229.0], [22.2, 21229.0], [22.3, 21229.0], [22.4, 21229.0], [22.5, 21229.0], [22.6, 21229.0], [22.7, 21229.0], [22.8, 21229.0], [22.9, 21229.0], [23.0, 21229.0], [23.1, 21229.0], [23.2, 21229.0], [23.3, 21229.0], [23.4, 24201.0], [23.5, 24201.0], [23.6, 24201.0], [23.7, 24201.0], [23.8, 24201.0], [23.9, 24201.0], [24.0, 24201.0], [24.1, 24201.0], [24.2, 24201.0], [24.3, 24201.0], [24.4, 24201.0], [24.5, 24201.0], [24.6, 24201.0], [24.7, 24201.0], [24.8, 24201.0], [24.9, 24201.0], [25.0, 24201.0], [25.1, 24201.0], [25.2, 24201.0], [25.3, 24201.0], [25.4, 24201.0], [25.5, 24201.0], [25.6, 24201.0], [25.7, 24201.0], [25.8, 24201.0], [25.9, 24201.0], [26.0, 24201.0], [26.1, 24201.0], [26.2, 24201.0], [26.3, 24201.0], [26.4, 24201.0], [26.5, 24201.0], [26.6, 24201.0], [26.7, 26345.0], [26.8, 26345.0], [26.9, 26345.0], [27.0, 26345.0], [27.1, 26345.0], [27.2, 26345.0], [27.3, 26345.0], [27.4, 26345.0], [27.5, 26345.0], [27.6, 26345.0], [27.7, 26345.0], [27.8, 26345.0], [27.9, 26345.0], [28.0, 26345.0], [28.1, 26345.0], [28.2, 26345.0], [28.3, 26345.0], [28.4, 26345.0], [28.5, 26345.0], [28.6, 26345.0], [28.7, 26345.0], [28.8, 26345.0], [28.9, 26345.0], [29.0, 26345.0], [29.1, 26345.0], [29.2, 26345.0], [29.3, 26345.0], [29.4, 26345.0], [29.5, 26345.0], [29.6, 26345.0], [29.7, 26345.0], [29.8, 26345.0], [29.9, 26345.0], [30.0, 26865.0], [30.1, 26865.0], [30.2, 26865.0], [30.3, 26865.0], [30.4, 26865.0], [30.5, 26865.0], [30.6, 26865.0], [30.7, 26865.0], [30.8, 26865.0], [30.9, 26865.0], [31.0, 26865.0], [31.1, 26865.0], [31.2, 26865.0], [31.3, 26865.0], [31.4, 26865.0], [31.5, 26865.0], [31.6, 26865.0], [31.7, 26865.0], [31.8, 26865.0], [31.9, 26865.0], [32.0, 26865.0], [32.1, 26865.0], [32.2, 26865.0], [32.3, 26865.0], [32.4, 26865.0], [32.5, 26865.0], [32.6, 26865.0], [32.7, 26865.0], [32.8, 26865.0], [32.9, 26865.0], [33.0, 26865.0], [33.1, 26865.0], [33.2, 26865.0], [33.3, 26865.0], [33.4, 31241.0], [33.5, 31241.0], [33.6, 31241.0], [33.7, 31241.0], [33.8, 31241.0], [33.9, 31241.0], [34.0, 31241.0], [34.1, 31241.0], [34.2, 31241.0], [34.3, 31241.0], [34.4, 31241.0], [34.5, 31241.0], [34.6, 31241.0], [34.7, 31241.0], [34.8, 31241.0], [34.9, 31241.0], [35.0, 31241.0], [35.1, 31241.0], [35.2, 31241.0], [35.3, 31241.0], [35.4, 31241.0], [35.5, 31241.0], [35.6, 31241.0], [35.7, 31241.0], [35.8, 31241.0], [35.9, 31241.0], [36.0, 31241.0], [36.1, 31241.0], [36.2, 31241.0], [36.3, 31241.0], [36.4, 31241.0], [36.5, 31241.0], [36.6, 31241.0], [36.7, 32916.0], [36.8, 32916.0], [36.9, 32916.0], [37.0, 32916.0], [37.1, 32916.0], [37.2, 32916.0], [37.3, 32916.0], [37.4, 32916.0], [37.5, 32916.0], [37.6, 32916.0], [37.7, 32916.0], [37.8, 32916.0], [37.9, 32916.0], [38.0, 32916.0], [38.1, 32916.0], [38.2, 32916.0], [38.3, 32916.0], [38.4, 32916.0], [38.5, 32916.0], [38.6, 32916.0], [38.7, 32916.0], [38.8, 32916.0], [38.9, 32916.0], [39.0, 32916.0], [39.1, 32916.0], [39.2, 32916.0], [39.3, 32916.0], [39.4, 32916.0], [39.5, 32916.0], [39.6, 32916.0], [39.7, 32916.0], [39.8, 32916.0], [39.9, 32916.0], [40.0, 33681.0], [40.1, 33681.0], [40.2, 33681.0], [40.3, 33681.0], [40.4, 33681.0], [40.5, 33681.0], [40.6, 33681.0], [40.7, 33681.0], [40.8, 33681.0], [40.9, 33681.0], [41.0, 33681.0], [41.1, 33681.0], [41.2, 33681.0], [41.3, 33681.0], [41.4, 33681.0], [41.5, 33681.0], [41.6, 33681.0], [41.7, 33681.0], [41.8, 33681.0], [41.9, 33681.0], [42.0, 33681.0], [42.1, 33681.0], [42.2, 33681.0], [42.3, 33681.0], [42.4, 33681.0], [42.5, 33681.0], [42.6, 33681.0], [42.7, 33681.0], [42.8, 33681.0], [42.9, 33681.0], [43.0, 33681.0], [43.1, 33681.0], [43.2, 33681.0], [43.3, 33681.0], [43.4, 34087.0], [43.5, 34087.0], [43.6, 34087.0], [43.7, 34087.0], [43.8, 34087.0], [43.9, 34087.0], [44.0, 34087.0], [44.1, 34087.0], [44.2, 34087.0], [44.3, 34087.0], [44.4, 34087.0], [44.5, 34087.0], [44.6, 34087.0], [44.7, 34087.0], [44.8, 34087.0], [44.9, 34087.0], [45.0, 34087.0], [45.1, 34087.0], [45.2, 34087.0], [45.3, 34087.0], [45.4, 34087.0], [45.5, 34087.0], [45.6, 34087.0], [45.7, 34087.0], [45.8, 34087.0], [45.9, 34087.0], [46.0, 34087.0], [46.1, 34087.0], [46.2, 34087.0], [46.3, 34087.0], [46.4, 34087.0], [46.5, 34087.0], [46.6, 34087.0], [46.7, 35084.0], [46.8, 35084.0], [46.9, 35084.0], [47.0, 35084.0], [47.1, 35084.0], [47.2, 35084.0], [47.3, 35084.0], [47.4, 35084.0], [47.5, 35084.0], [47.6, 35084.0], [47.7, 35084.0], [47.8, 35084.0], [47.9, 35084.0], [48.0, 35084.0], [48.1, 35084.0], [48.2, 35084.0], [48.3, 35084.0], [48.4, 35084.0], [48.5, 35084.0], [48.6, 35084.0], [48.7, 35084.0], [48.8, 35084.0], [48.9, 35084.0], [49.0, 35084.0], [49.1, 35084.0], [49.2, 35084.0], [49.3, 35084.0], [49.4, 35084.0], [49.5, 35084.0], [49.6, 35084.0], [49.7, 35084.0], [49.8, 35084.0], [49.9, 35084.0], [50.0, 35084.0], [50.1, 38010.0], [50.2, 38010.0], [50.3, 38010.0], [50.4, 38010.0], [50.5, 38010.0], [50.6, 38010.0], [50.7, 38010.0], [50.8, 38010.0], [50.9, 38010.0], [51.0, 38010.0], [51.1, 38010.0], [51.2, 38010.0], [51.3, 38010.0], [51.4, 38010.0], [51.5, 38010.0], [51.6, 38010.0], [51.7, 38010.0], [51.8, 38010.0], [51.9, 38010.0], [52.0, 38010.0], [52.1, 38010.0], [52.2, 38010.0], [52.3, 38010.0], [52.4, 38010.0], [52.5, 38010.0], [52.6, 38010.0], [52.7, 38010.0], [52.8, 38010.0], [52.9, 38010.0], [53.0, 38010.0], [53.1, 38010.0], [53.2, 38010.0], [53.3, 38010.0], [53.4, 40768.0], [53.5, 40768.0], [53.6, 40768.0], [53.7, 40768.0], [53.8, 40768.0], [53.9, 40768.0], [54.0, 40768.0], [54.1, 40768.0], [54.2, 40768.0], [54.3, 40768.0], [54.4, 40768.0], [54.5, 40768.0], [54.6, 40768.0], [54.7, 40768.0], [54.8, 40768.0], [54.9, 40768.0], [55.0, 40768.0], [55.1, 40768.0], [55.2, 40768.0], [55.3, 40768.0], [55.4, 40768.0], [55.5, 40768.0], [55.6, 40768.0], [55.7, 40768.0], [55.8, 40768.0], [55.9, 40768.0], [56.0, 40768.0], [56.1, 40768.0], [56.2, 40768.0], [56.3, 40768.0], [56.4, 40768.0], [56.5, 40768.0], [56.6, 40768.0], [56.7, 40838.0], [56.8, 40838.0], [56.9, 40838.0], [57.0, 40838.0], [57.1, 40838.0], [57.2, 40838.0], [57.3, 40838.0], [57.4, 40838.0], [57.5, 40838.0], [57.6, 40838.0], [57.7, 40838.0], [57.8, 40838.0], [57.9, 40838.0], [58.0, 40838.0], [58.1, 40838.0], [58.2, 40838.0], [58.3, 40838.0], [58.4, 40838.0], [58.5, 40838.0], [58.6, 40838.0], [58.7, 40838.0], [58.8, 40838.0], [58.9, 40838.0], [59.0, 40838.0], [59.1, 40838.0], [59.2, 40838.0], [59.3, 40838.0], [59.4, 40838.0], [59.5, 40838.0], [59.6, 40838.0], [59.7, 40838.0], [59.8, 40838.0], [59.9, 40838.0], [60.0, 40838.0], [60.1, 42958.0], [60.2, 42958.0], [60.3, 42958.0], [60.4, 42958.0], [60.5, 42958.0], [60.6, 42958.0], [60.7, 42958.0], [60.8, 42958.0], [60.9, 42958.0], [61.0, 42958.0], [61.1, 42958.0], [61.2, 42958.0], [61.3, 42958.0], [61.4, 42958.0], [61.5, 42958.0], [61.6, 42958.0], [61.7, 42958.0], [61.8, 42958.0], [61.9, 42958.0], [62.0, 42958.0], [62.1, 42958.0], [62.2, 42958.0], [62.3, 42958.0], [62.4, 42958.0], [62.5, 42958.0], [62.6, 42958.0], [62.7, 42958.0], [62.8, 42958.0], [62.9, 42958.0], [63.0, 42958.0], [63.1, 42958.0], [63.2, 42958.0], [63.3, 42958.0], [63.4, 43362.0], [63.5, 43362.0], [63.6, 43362.0], [63.7, 43362.0], [63.8, 43362.0], [63.9, 43362.0], [64.0, 43362.0], [64.1, 43362.0], [64.2, 43362.0], [64.3, 43362.0], [64.4, 43362.0], [64.5, 43362.0], [64.6, 43362.0], [64.7, 43362.0], [64.8, 43362.0], [64.9, 43362.0], [65.0, 43362.0], [65.1, 43362.0], [65.2, 43362.0], [65.3, 43362.0], [65.4, 43362.0], [65.5, 43362.0], [65.6, 43362.0], [65.7, 43362.0], [65.8, 43362.0], [65.9, 43362.0], [66.0, 43362.0], [66.1, 43362.0], [66.2, 43362.0], [66.3, 43362.0], [66.4, 43362.0], [66.5, 43362.0], [66.6, 43362.0], [66.7, 44428.0], [66.8, 44428.0], [66.9, 44428.0], [67.0, 44428.0], [67.1, 44428.0], [67.2, 44428.0], [67.3, 44428.0], [67.4, 44428.0], [67.5, 44428.0], [67.6, 44428.0], [67.7, 44428.0], [67.8, 44428.0], [67.9, 44428.0], [68.0, 44428.0], [68.1, 44428.0], [68.2, 44428.0], [68.3, 44428.0], [68.4, 44428.0], [68.5, 44428.0], [68.6, 44428.0], [68.7, 44428.0], [68.8, 44428.0], [68.9, 44428.0], [69.0, 44428.0], [69.1, 44428.0], [69.2, 44428.0], [69.3, 44428.0], [69.4, 44428.0], [69.5, 44428.0], [69.6, 44428.0], [69.7, 44428.0], [69.8, 44428.0], [69.9, 44428.0], [70.0, 44428.0], [70.1, 48023.0], [70.2, 48023.0], [70.3, 48023.0], [70.4, 48023.0], [70.5, 48023.0], [70.6, 48023.0], [70.7, 48023.0], [70.8, 48023.0], [70.9, 48023.0], [71.0, 48023.0], [71.1, 48023.0], [71.2, 48023.0], [71.3, 48023.0], [71.4, 48023.0], [71.5, 48023.0], [71.6, 48023.0], [71.7, 48023.0], [71.8, 48023.0], [71.9, 48023.0], [72.0, 48023.0], [72.1, 48023.0], [72.2, 48023.0], [72.3, 48023.0], [72.4, 48023.0], [72.5, 48023.0], [72.6, 48023.0], [72.7, 48023.0], [72.8, 48023.0], [72.9, 48023.0], [73.0, 48023.0], [73.1, 48023.0], [73.2, 48023.0], [73.3, 48023.0], [73.4, 54646.0], [73.5, 54646.0], [73.6, 54646.0], [73.7, 54646.0], [73.8, 54646.0], [73.9, 54646.0], [74.0, 54646.0], [74.1, 54646.0], [74.2, 54646.0], [74.3, 54646.0], [74.4, 54646.0], [74.5, 54646.0], [74.6, 54646.0], [74.7, 54646.0], [74.8, 54646.0], [74.9, 54646.0], [75.0, 54646.0], [75.1, 54646.0], [75.2, 54646.0], [75.3, 54646.0], [75.4, 54646.0], [75.5, 54646.0], [75.6, 54646.0], [75.7, 54646.0], [75.8, 54646.0], [75.9, 54646.0], [76.0, 54646.0], [76.1, 54646.0], [76.2, 54646.0], [76.3, 54646.0], [76.4, 54646.0], [76.5, 54646.0], [76.6, 54646.0], [76.7, 56931.0], [76.8, 56931.0], [76.9, 56931.0], [77.0, 56931.0], [77.1, 56931.0], [77.2, 56931.0], [77.3, 56931.0], [77.4, 56931.0], [77.5, 56931.0], [77.6, 56931.0], [77.7, 56931.0], [77.8, 56931.0], [77.9, 56931.0], [78.0, 56931.0], [78.1, 56931.0], [78.2, 56931.0], [78.3, 56931.0], [78.4, 56931.0], [78.5, 56931.0], [78.6, 56931.0], [78.7, 56931.0], [78.8, 56931.0], [78.9, 56931.0], [79.0, 56931.0], [79.1, 56931.0], [79.2, 56931.0], [79.3, 56931.0], [79.4, 56931.0], [79.5, 56931.0], [79.6, 56931.0], [79.7, 56931.0], [79.8, 56931.0], [79.9, 56931.0], [80.0, 62195.0], [80.1, 62195.0], [80.2, 62195.0], [80.3, 62195.0], [80.4, 62195.0], [80.5, 62195.0], [80.6, 62195.0], [80.7, 62195.0], [80.8, 62195.0], [80.9, 62195.0], [81.0, 62195.0], [81.1, 62195.0], [81.2, 62195.0], [81.3, 62195.0], [81.4, 62195.0], [81.5, 62195.0], [81.6, 62195.0], [81.7, 62195.0], [81.8, 62195.0], [81.9, 62195.0], [82.0, 62195.0], [82.1, 62195.0], [82.2, 62195.0], [82.3, 62195.0], [82.4, 62195.0], [82.5, 62195.0], [82.6, 62195.0], [82.7, 62195.0], [82.8, 62195.0], [82.9, 62195.0], [83.0, 62195.0], [83.1, 62195.0], [83.2, 62195.0], [83.3, 62195.0], [83.4, 63103.0], [83.5, 63103.0], [83.6, 63103.0], [83.7, 63103.0], [83.8, 63103.0], [83.9, 63103.0], [84.0, 63103.0], [84.1, 63103.0], [84.2, 63103.0], [84.3, 63103.0], [84.4, 63103.0], [84.5, 63103.0], [84.6, 63103.0], [84.7, 63103.0], [84.8, 63103.0], [84.9, 63103.0], [85.0, 63103.0], [85.1, 63103.0], [85.2, 63103.0], [85.3, 63103.0], [85.4, 63103.0], [85.5, 63103.0], [85.6, 63103.0], [85.7, 63103.0], [85.8, 63103.0], [85.9, 63103.0], [86.0, 63103.0], [86.1, 63103.0], [86.2, 63103.0], [86.3, 63103.0], [86.4, 63103.0], [86.5, 63103.0], [86.6, 63103.0], [86.7, 63471.0], [86.8, 63471.0], [86.9, 63471.0], [87.0, 63471.0], [87.1, 63471.0], [87.2, 63471.0], [87.3, 63471.0], [87.4, 63471.0], [87.5, 63471.0], [87.6, 63471.0], [87.7, 63471.0], [87.8, 63471.0], [87.9, 63471.0], [88.0, 63471.0], [88.1, 63471.0], [88.2, 63471.0], [88.3, 63471.0], [88.4, 63471.0], [88.5, 63471.0], [88.6, 63471.0], [88.7, 63471.0], [88.8, 63471.0], [88.9, 63471.0], [89.0, 63471.0], [89.1, 63471.0], [89.2, 63471.0], [89.3, 63471.0], [89.4, 63471.0], [89.5, 63471.0], [89.6, 63471.0], [89.7, 63471.0], [89.8, 63471.0], [89.9, 63471.0], [90.0, 65012.0], [90.1, 65012.0], [90.2, 65012.0], [90.3, 65012.0], [90.4, 65012.0], [90.5, 65012.0], [90.6, 65012.0], [90.7, 65012.0], [90.8, 65012.0], [90.9, 65012.0], [91.0, 65012.0], [91.1, 65012.0], [91.2, 65012.0], [91.3, 65012.0], [91.4, 65012.0], [91.5, 65012.0], [91.6, 65012.0], [91.7, 65012.0], [91.8, 65012.0], [91.9, 65012.0], [92.0, 65012.0], [92.1, 65012.0], [92.2, 65012.0], [92.3, 65012.0], [92.4, 65012.0], [92.5, 65012.0], [92.6, 65012.0], [92.7, 65012.0], [92.8, 65012.0], [92.9, 65012.0], [93.0, 65012.0], [93.1, 65012.0], [93.2, 65012.0], [93.3, 65012.0], [93.4, 70340.0], [93.5, 70340.0], [93.6, 70340.0], [93.7, 70340.0], [93.8, 70340.0], [93.9, 70340.0], [94.0, 70340.0], [94.1, 70340.0], [94.2, 70340.0], [94.3, 70340.0], [94.4, 70340.0], [94.5, 70340.0], [94.6, 70340.0], [94.7, 70340.0], [94.8, 70340.0], [94.9, 70340.0], [95.0, 70340.0], [95.1, 70340.0], [95.2, 70340.0], [95.3, 70340.0], [95.4, 70340.0], [95.5, 70340.0], [95.6, 70340.0], [95.7, 70340.0], [95.8, 70340.0], [95.9, 70340.0], [96.0, 70340.0], [96.1, 70340.0], [96.2, 70340.0], [96.3, 70340.0], [96.4, 70340.0], [96.5, 70340.0], [96.6, 70340.0], [96.7, 73796.0], [96.8, 73796.0], [96.9, 73796.0], [97.0, 73796.0], [97.1, 73796.0], [97.2, 73796.0], [97.3, 73796.0], [97.4, 73796.0], [97.5, 73796.0], [97.6, 73796.0], [97.7, 73796.0], [97.8, 73796.0], [97.9, 73796.0], [98.0, 73796.0], [98.1, 73796.0], [98.2, 73796.0], [98.3, 73796.0], [98.4, 73796.0], [98.5, 73796.0], [98.6, 73796.0], [98.7, 73796.0], [98.8, 73796.0], [98.9, 73796.0], [99.0, 73796.0], [99.1, 73796.0], [99.2, 73796.0], [99.3, 73796.0], [99.4, 73796.0], [99.5, 73796.0], [99.6, 73796.0], [99.7, 73796.0], [99.8, 73796.0], [99.9, 73796.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2700.0, "maxY": 1.0, "series": [{"data": [[15800.0, 1.0], [21200.0, 1.0], [24200.0, 1.0], [26300.0, 1.0], [26800.0, 1.0], [31200.0, 1.0], [32900.0, 1.0], [34000.0, 1.0], [33600.0, 1.0], [35000.0, 1.0], [38000.0, 1.0], [40800.0, 1.0], [40700.0, 1.0], [42900.0, 1.0], [43300.0, 1.0], [2700.0, 1.0], [44400.0, 1.0], [48000.0, 1.0], [54600.0, 1.0], [56900.0, 1.0], [63400.0, 1.0], [62100.0, 1.0], [63100.0, 1.0], [65000.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [70300.0, 1.0], [73700.0, 1.0], [5600.0, 1.0], [5700.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 73700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 25.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 25.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7954445E12, "maxY": 4.0, "series": [{"data": [[1.79544534E12, 1.0], [1.79544468E12, 4.0], [1.79544528E12, 1.0], [1.79544498E12, 1.5], [1.7954454E12, 1.0], [1.7954451E12, 1.0], [1.79544474E12, 2.5], [1.7954457E12, 2.6666666666666665], [1.79544504E12, 1.5], [1.79544486E12, 1.0], [1.79544516E12, 2.0], [1.79544576E12, 1.5], [1.7954445E12, 1.5], [1.79544546E12, 2.0], [1.7954448E12, 1.0], [1.79544492E12, 1.0], [1.79544552E12, 1.5], [1.79544522E12, 1.0]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544576E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 31923.923076923078, "minX": 1.0, "maxY": 63471.0, "series": [{"data": [[2.0, 37334.75], [1.0, 31923.923076923078], [4.0, 63471.0], [3.0, 46353.25]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.7666666666666662, 37063.73333333334]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2.9833333333333334, "minX": 1.7954445E12, "maxY": 103.81666666666666, "series": [{"data": [[1.79544534E12, 3.1], [1.79544468E12, 2.9833333333333334], [1.79544528E12, 2.9833333333333334], [1.79544498E12, 6.133333333333334], [1.7954454E12, 3.2333333333333334], [1.7954451E12, 3.1], [1.79544474E12, 12.05], [1.7954457E12, 9.1], [1.79544504E12, 6.15], [1.79544486E12, 3.1], [1.79544516E12, 6.35], [1.79544576E12, 6.466666666666667], [1.7954445E12, 6.333333333333333], [1.79544546E12, 6.25], [1.7954448E12, 3.2666666666666666], [1.79544492E12, 3.1166666666666667], [1.79544552E12, 6.466666666666667], [1.79544522E12, 3.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79544534E12, 29.55], [1.79544468E12, 17.883333333333333], [1.79544528E12, 12.783333333333333], [1.79544498E12, 36.1], [1.7954454E12, 11.25], [1.7954451E12, 14.433333333333334], [1.79544474E12, 103.81666666666666], [1.7954457E12, 66.95], [1.79544504E12, 63.2], [1.79544486E12, 8.783333333333333], [1.79544516E12, 34.2], [1.79544576E12, 34.3], [1.7954445E12, 30.666666666666668], [1.79544546E12, 21.683333333333334], [1.7954448E12, 8.3], [1.79544492E12, 12.616666666666667], [1.79544552E12, 38.0], [1.79544522E12, 17.666666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544576E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2742.0, "minX": 1.7954445E12, "maxY": 63471.0, "series": [{"data": [[1.79544534E12, 5756.0], [1.79544468E12, 63471.0], [1.79544528E12, 62195.0], [1.79544498E12, 26605.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 53320.5], [1.7954457E12, 23763.333333333336], [1.79544504E12, 38724.5], [1.79544486E12, 24201.0], [1.79544516E12, 40803.0], [1.79544576E12, 53030.5], [1.7954445E12, 18589.0], [1.79544546E12, 51334.5], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 47470.5], [1.79544522E12, 35084.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544576E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2742.0, "minX": 1.7954445E12, "maxY": 63471.0, "series": [{"data": [[1.79544534E12, 5756.0], [1.79544468E12, 63471.0], [1.79544528E12, 62195.0], [1.79544498E12, 26605.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 53320.25], [1.7954457E12, 23763.333333333336], [1.79544504E12, 38724.5], [1.79544486E12, 24200.0], [1.79544516E12, 40803.0], [1.79544576E12, 53030.5], [1.7954445E12, 18589.0], [1.79544546E12, 51334.5], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 47470.5], [1.79544522E12, 35084.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544576E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.5, "minX": 1.7954445E12, "maxY": 24.5, "series": [{"data": [[1.79544534E12, 10.0], [1.79544468E12, 9.0], [1.79544528E12, 10.0], [1.79544498E12, 8.5], [1.7954454E12, 11.0], [1.7954451E12, 10.0], [1.79544474E12, 9.25], [1.7954457E12, 16.666666666666668], [1.79544504E12, 12.5], [1.79544486E12, 10.0], [1.79544516E12, 11.5], [1.79544576E12, 10.0], [1.7954445E12, 24.5], [1.79544546E12, 9.0], [1.7954448E12, 11.0], [1.79544492E12, 9.0], [1.79544552E12, 9.5], [1.79544522E12, 11.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544576E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2742.0, "minX": 1.7954445E12, "maxY": 63103.0, "series": [{"data": [[1.79544534E12, 5756.0], [1.79544498E12, 26865.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 4134.0], [1.7954457E12, 44428.0], [1.79544504E12, 43362.0], [1.79544486E12, 24201.0], [1.79544516E12, 40838.0], [1.79544576E12, 63103.0], [1.7954445E12, 32916.0], [1.79544546E12, 54646.0], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 56931.0], [1.79544522E12, 35084.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79544534E12, 5756.0], [1.79544498E12, 26865.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 4134.0], [1.7954457E12, 44428.0], [1.79544504E12, 43362.0], [1.79544486E12, 24201.0], [1.79544516E12, 40838.0], [1.79544576E12, 63103.0], [1.7954445E12, 32916.0], [1.79544546E12, 54646.0], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 56931.0], [1.79544522E12, 35084.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79544534E12, 5756.0], [1.79544498E12, 26865.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 4134.0], [1.7954457E12, 44428.0], [1.79544504E12, 43362.0], [1.79544486E12, 24201.0], [1.79544516E12, 40838.0], [1.79544576E12, 63103.0], [1.7954445E12, 32916.0], [1.79544546E12, 54646.0], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 56931.0], [1.79544522E12, 35084.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79544534E12, 5756.0], [1.79544498E12, 26865.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 4134.0], [1.7954457E12, 44428.0], [1.79544504E12, 43362.0], [1.79544486E12, 24201.0], [1.79544516E12, 40838.0], [1.79544576E12, 63103.0], [1.7954445E12, 32916.0], [1.79544546E12, 54646.0], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 56931.0], [1.79544522E12, 35084.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79544534E12, 5756.0], [1.79544498E12, 26345.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 4134.0], [1.7954457E12, 5633.0], [1.79544504E12, 34087.0], [1.79544486E12, 24201.0], [1.79544516E12, 40768.0], [1.79544576E12, 42958.0], [1.7954445E12, 4262.0], [1.79544546E12, 48023.0], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 38010.0], [1.79544522E12, 35084.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79544534E12, 5756.0], [1.79544498E12, 26605.0], [1.7954454E12, 33681.0], [1.7954451E12, 2742.0], [1.79544474E12, 4134.0], [1.7954457E12, 21229.0], [1.79544504E12, 38724.5], [1.79544486E12, 24201.0], [1.79544516E12, 40803.0], [1.79544576E12, 53030.5], [1.7954445E12, 18589.0], [1.79544546E12, 51334.5], [1.7954448E12, 31241.0], [1.79544492E12, 15855.0], [1.79544552E12, 47470.5], [1.79544522E12, 35084.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544576E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 33681.0, "minX": 1.0, "maxY": 65012.0, "series": [{"data": [[1.0, 33681.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 65012.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 33681.0, "minX": 1.0, "maxY": 65012.0, "series": [{"data": [[1.0, 33681.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 65012.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7954445E12, "maxY": 0.05, "series": [{"data": [[1.79544564E12, 0.03333333333333333], [1.79544534E12, 0.03333333333333333], [1.79544468E12, 0.05], [1.79544498E12, 0.05], [1.7954454E12, 0.03333333333333333], [1.7954451E12, 0.03333333333333333], [1.79544474E12, 0.03333333333333333], [1.7954457E12, 0.05], [1.79544486E12, 0.016666666666666666], [1.79544516E12, 0.03333333333333333], [1.7954445E12, 0.03333333333333333], [1.79544546E12, 0.016666666666666666], [1.79544462E12, 0.016666666666666666], [1.79544492E12, 0.03333333333333333], [1.79544552E12, 0.016666666666666666], [1.79544522E12, 0.016666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7954457E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7954445E12, "maxY": 0.05, "series": [{"data": [[1.79544534E12, 0.016666666666666666], [1.79544498E12, 0.03333333333333333], [1.7954454E12, 0.016666666666666666], [1.7954451E12, 0.016666666666666666], [1.79544474E12, 0.016666666666666666], [1.7954457E12, 0.05], [1.79544504E12, 0.03333333333333333], [1.79544486E12, 0.016666666666666666], [1.79544516E12, 0.03333333333333333], [1.79544576E12, 0.03333333333333333], [1.7954445E12, 0.03333333333333333], [1.79544546E12, 0.03333333333333333], [1.7954448E12, 0.016666666666666666], [1.79544492E12, 0.016666666666666666], [1.79544552E12, 0.03333333333333333], [1.79544522E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79544468E12, 0.016666666666666666], [1.79544528E12, 0.016666666666666666], [1.79544474E12, 0.05]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544576E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7954445E12, "maxY": 0.05, "series": [{"data": [[1.79544534E12, 0.016666666666666666], [1.79544498E12, 0.03333333333333333], [1.7954454E12, 0.016666666666666666], [1.7954451E12, 0.016666666666666666], [1.79544474E12, 0.016666666666666666], [1.7954457E12, 0.05], [1.79544504E12, 0.03333333333333333], [1.79544486E12, 0.016666666666666666], [1.79544516E12, 0.03333333333333333], [1.79544576E12, 0.03333333333333333], [1.7954445E12, 0.03333333333333333], [1.79544546E12, 0.03333333333333333], [1.7954448E12, 0.016666666666666666], [1.79544492E12, 0.016666666666666666], [1.79544552E12, 0.03333333333333333], [1.79544522E12, 0.016666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79544468E12, 0.016666666666666666], [1.79544528E12, 0.016666666666666666], [1.79544474E12, 0.05]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544576E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7954445E12, "maxY": 0.05, "series": [{"data": [[1.79544534E12, 0.016666666666666666], [1.79544498E12, 0.03333333333333333], [1.7954454E12, 0.016666666666666666], [1.7954451E12, 0.016666666666666666], [1.79544474E12, 0.016666666666666666], [1.7954457E12, 0.05], [1.79544504E12, 0.03333333333333333], [1.79544486E12, 0.016666666666666666], [1.79544516E12, 0.03333333333333333], [1.79544576E12, 0.03333333333333333], [1.7954445E12, 0.03333333333333333], [1.79544546E12, 0.03333333333333333], [1.7954448E12, 0.016666666666666666], [1.79544492E12, 0.016666666666666666], [1.79544552E12, 0.03333333333333333], [1.79544522E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79544468E12, 0.016666666666666666], [1.79544528E12, 0.016666666666666666], [1.79544474E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544576E12, "title": "Total Transactions Per Second"}},
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

