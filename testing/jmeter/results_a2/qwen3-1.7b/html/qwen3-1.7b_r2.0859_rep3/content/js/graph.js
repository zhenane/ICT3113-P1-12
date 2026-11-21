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
        data: {"result": {"minY": 7881.0, "minX": 0.0, "maxY": 60107.0, "series": [{"data": [[0.0, 7881.0], [0.1, 7881.0], [0.2, 7881.0], [0.3, 7881.0], [0.4, 7881.0], [0.5, 7881.0], [0.6, 7881.0], [0.7, 7881.0], [0.8, 7881.0], [0.9, 7881.0], [1.0, 7881.0], [1.1, 7881.0], [1.2, 7881.0], [1.3, 7881.0], [1.4, 7881.0], [1.5, 7881.0], [1.6, 7881.0], [1.7, 7881.0], [1.8, 7881.0], [1.9, 7881.0], [2.0, 7881.0], [2.1, 7881.0], [2.2, 7881.0], [2.3, 7881.0], [2.4, 7881.0], [2.5, 7881.0], [2.6, 7881.0], [2.7, 7881.0], [2.8, 7881.0], [2.9, 7881.0], [3.0, 7881.0], [3.1, 7881.0], [3.2, 7881.0], [3.3, 8384.0], [3.4, 8384.0], [3.5, 8384.0], [3.6, 8384.0], [3.7, 8384.0], [3.8, 8384.0], [3.9, 8384.0], [4.0, 8384.0], [4.1, 8384.0], [4.2, 8384.0], [4.3, 8384.0], [4.4, 8384.0], [4.5, 8384.0], [4.6, 8384.0], [4.7, 8384.0], [4.8, 8384.0], [4.9, 8384.0], [5.0, 8384.0], [5.1, 8384.0], [5.2, 8384.0], [5.3, 8384.0], [5.4, 8384.0], [5.5, 8384.0], [5.6, 8384.0], [5.7, 8384.0], [5.8, 8384.0], [5.9, 8384.0], [6.0, 8384.0], [6.1, 8384.0], [6.2, 8384.0], [6.3, 8384.0], [6.4, 8384.0], [6.5, 8547.0], [6.6, 8547.0], [6.7, 8547.0], [6.8, 8547.0], [6.9, 8547.0], [7.0, 8547.0], [7.1, 8547.0], [7.2, 8547.0], [7.3, 8547.0], [7.4, 8547.0], [7.5, 8547.0], [7.6, 8547.0], [7.7, 8547.0], [7.8, 8547.0], [7.9, 8547.0], [8.0, 8547.0], [8.1, 8547.0], [8.2, 8547.0], [8.3, 8547.0], [8.4, 8547.0], [8.5, 8547.0], [8.6, 8547.0], [8.7, 8547.0], [8.8, 8547.0], [8.9, 8547.0], [9.0, 8547.0], [9.1, 8547.0], [9.2, 8547.0], [9.3, 8547.0], [9.4, 8547.0], [9.5, 8547.0], [9.6, 8547.0], [9.7, 9706.0], [9.8, 9706.0], [9.9, 9706.0], [10.0, 9706.0], [10.1, 9706.0], [10.2, 9706.0], [10.3, 9706.0], [10.4, 9706.0], [10.5, 9706.0], [10.6, 9706.0], [10.7, 9706.0], [10.8, 9706.0], [10.9, 9706.0], [11.0, 9706.0], [11.1, 9706.0], [11.2, 9706.0], [11.3, 9706.0], [11.4, 9706.0], [11.5, 9706.0], [11.6, 9706.0], [11.7, 9706.0], [11.8, 9706.0], [11.9, 9706.0], [12.0, 9706.0], [12.1, 9706.0], [12.2, 9706.0], [12.3, 9706.0], [12.4, 9706.0], [12.5, 9706.0], [12.6, 9706.0], [12.7, 9706.0], [12.8, 9706.0], [12.9, 9706.0], [13.0, 14134.0], [13.1, 14134.0], [13.2, 14134.0], [13.3, 14134.0], [13.4, 14134.0], [13.5, 14134.0], [13.6, 14134.0], [13.7, 14134.0], [13.8, 14134.0], [13.9, 14134.0], [14.0, 14134.0], [14.1, 14134.0], [14.2, 14134.0], [14.3, 14134.0], [14.4, 14134.0], [14.5, 14134.0], [14.6, 14134.0], [14.7, 14134.0], [14.8, 14134.0], [14.9, 14134.0], [15.0, 14134.0], [15.1, 14134.0], [15.2, 14134.0], [15.3, 14134.0], [15.4, 14134.0], [15.5, 14134.0], [15.6, 14134.0], [15.7, 14134.0], [15.8, 14134.0], [15.9, 14134.0], [16.0, 14134.0], [16.1, 14134.0], [16.2, 14233.0], [16.3, 14233.0], [16.4, 14233.0], [16.5, 14233.0], [16.6, 14233.0], [16.7, 14233.0], [16.8, 14233.0], [16.9, 14233.0], [17.0, 14233.0], [17.1, 14233.0], [17.2, 14233.0], [17.3, 14233.0], [17.4, 14233.0], [17.5, 14233.0], [17.6, 14233.0], [17.7, 14233.0], [17.8, 14233.0], [17.9, 14233.0], [18.0, 14233.0], [18.1, 14233.0], [18.2, 14233.0], [18.3, 14233.0], [18.4, 14233.0], [18.5, 14233.0], [18.6, 14233.0], [18.7, 14233.0], [18.8, 14233.0], [18.9, 14233.0], [19.0, 14233.0], [19.1, 14233.0], [19.2, 14233.0], [19.3, 14233.0], [19.4, 14266.0], [19.5, 14266.0], [19.6, 14266.0], [19.7, 14266.0], [19.8, 14266.0], [19.9, 14266.0], [20.0, 14266.0], [20.1, 14266.0], [20.2, 14266.0], [20.3, 14266.0], [20.4, 14266.0], [20.5, 14266.0], [20.6, 14266.0], [20.7, 14266.0], [20.8, 14266.0], [20.9, 14266.0], [21.0, 14266.0], [21.1, 14266.0], [21.2, 14266.0], [21.3, 14266.0], [21.4, 14266.0], [21.5, 14266.0], [21.6, 14266.0], [21.7, 14266.0], [21.8, 14266.0], [21.9, 14266.0], [22.0, 14266.0], [22.1, 14266.0], [22.2, 14266.0], [22.3, 14266.0], [22.4, 14266.0], [22.5, 14266.0], [22.6, 14468.0], [22.7, 14468.0], [22.8, 14468.0], [22.9, 14468.0], [23.0, 14468.0], [23.1, 14468.0], [23.2, 14468.0], [23.3, 14468.0], [23.4, 14468.0], [23.5, 14468.0], [23.6, 14468.0], [23.7, 14468.0], [23.8, 14468.0], [23.9, 14468.0], [24.0, 14468.0], [24.1, 14468.0], [24.2, 14468.0], [24.3, 14468.0], [24.4, 14468.0], [24.5, 14468.0], [24.6, 14468.0], [24.7, 14468.0], [24.8, 14468.0], [24.9, 14468.0], [25.0, 14468.0], [25.1, 14468.0], [25.2, 14468.0], [25.3, 14468.0], [25.4, 14468.0], [25.5, 14468.0], [25.6, 14468.0], [25.7, 14468.0], [25.8, 14468.0], [25.9, 15316.0], [26.0, 15316.0], [26.1, 15316.0], [26.2, 15316.0], [26.3, 15316.0], [26.4, 15316.0], [26.5, 15316.0], [26.6, 15316.0], [26.7, 15316.0], [26.8, 15316.0], [26.9, 15316.0], [27.0, 15316.0], [27.1, 15316.0], [27.2, 15316.0], [27.3, 15316.0], [27.4, 15316.0], [27.5, 15316.0], [27.6, 15316.0], [27.7, 15316.0], [27.8, 15316.0], [27.9, 15316.0], [28.0, 15316.0], [28.1, 15316.0], [28.2, 15316.0], [28.3, 15316.0], [28.4, 15316.0], [28.5, 15316.0], [28.6, 15316.0], [28.7, 15316.0], [28.8, 15316.0], [28.9, 15316.0], [29.0, 15316.0], [29.1, 15621.0], [29.2, 15621.0], [29.3, 15621.0], [29.4, 15621.0], [29.5, 15621.0], [29.6, 15621.0], [29.7, 15621.0], [29.8, 15621.0], [29.9, 15621.0], [30.0, 15621.0], [30.1, 15621.0], [30.2, 15621.0], [30.3, 15621.0], [30.4, 15621.0], [30.5, 15621.0], [30.6, 15621.0], [30.7, 15621.0], [30.8, 15621.0], [30.9, 15621.0], [31.0, 15621.0], [31.1, 15621.0], [31.2, 15621.0], [31.3, 15621.0], [31.4, 15621.0], [31.5, 15621.0], [31.6, 15621.0], [31.7, 15621.0], [31.8, 15621.0], [31.9, 15621.0], [32.0, 15621.0], [32.1, 15621.0], [32.2, 15621.0], [32.3, 15805.0], [32.4, 15805.0], [32.5, 15805.0], [32.6, 15805.0], [32.7, 15805.0], [32.8, 15805.0], [32.9, 15805.0], [33.0, 15805.0], [33.1, 15805.0], [33.2, 15805.0], [33.3, 15805.0], [33.4, 15805.0], [33.5, 15805.0], [33.6, 15805.0], [33.7, 15805.0], [33.8, 15805.0], [33.9, 15805.0], [34.0, 15805.0], [34.1, 15805.0], [34.2, 15805.0], [34.3, 15805.0], [34.4, 15805.0], [34.5, 15805.0], [34.6, 15805.0], [34.7, 15805.0], [34.8, 15805.0], [34.9, 15805.0], [35.0, 15805.0], [35.1, 15805.0], [35.2, 15805.0], [35.3, 15805.0], [35.4, 15805.0], [35.5, 16634.0], [35.6, 16634.0], [35.7, 16634.0], [35.8, 16634.0], [35.9, 16634.0], [36.0, 16634.0], [36.1, 16634.0], [36.2, 16634.0], [36.3, 16634.0], [36.4, 16634.0], [36.5, 16634.0], [36.6, 16634.0], [36.7, 16634.0], [36.8, 16634.0], [36.9, 16634.0], [37.0, 16634.0], [37.1, 16634.0], [37.2, 16634.0], [37.3, 16634.0], [37.4, 16634.0], [37.5, 16634.0], [37.6, 16634.0], [37.7, 16634.0], [37.8, 16634.0], [37.9, 16634.0], [38.0, 16634.0], [38.1, 16634.0], [38.2, 16634.0], [38.3, 16634.0], [38.4, 16634.0], [38.5, 16634.0], [38.6, 16634.0], [38.7, 16634.0], [38.8, 20950.0], [38.9, 20950.0], [39.0, 20950.0], [39.1, 20950.0], [39.2, 20950.0], [39.3, 20950.0], [39.4, 20950.0], [39.5, 20950.0], [39.6, 20950.0], [39.7, 20950.0], [39.8, 20950.0], [39.9, 20950.0], [40.0, 20950.0], [40.1, 20950.0], [40.2, 20950.0], [40.3, 20950.0], [40.4, 20950.0], [40.5, 20950.0], [40.6, 20950.0], [40.7, 20950.0], [40.8, 20950.0], [40.9, 20950.0], [41.0, 20950.0], [41.1, 20950.0], [41.2, 20950.0], [41.3, 20950.0], [41.4, 20950.0], [41.5, 20950.0], [41.6, 20950.0], [41.7, 20950.0], [41.8, 20950.0], [41.9, 20950.0], [42.0, 24464.0], [42.1, 24464.0], [42.2, 24464.0], [42.3, 24464.0], [42.4, 24464.0], [42.5, 24464.0], [42.6, 24464.0], [42.7, 24464.0], [42.8, 24464.0], [42.9, 24464.0], [43.0, 24464.0], [43.1, 24464.0], [43.2, 24464.0], [43.3, 24464.0], [43.4, 24464.0], [43.5, 24464.0], [43.6, 24464.0], [43.7, 24464.0], [43.8, 24464.0], [43.9, 24464.0], [44.0, 24464.0], [44.1, 24464.0], [44.2, 24464.0], [44.3, 24464.0], [44.4, 24464.0], [44.5, 24464.0], [44.6, 24464.0], [44.7, 24464.0], [44.8, 24464.0], [44.9, 24464.0], [45.0, 24464.0], [45.1, 24464.0], [45.2, 24685.0], [45.3, 24685.0], [45.4, 24685.0], [45.5, 24685.0], [45.6, 24685.0], [45.7, 24685.0], [45.8, 24685.0], [45.9, 24685.0], [46.0, 24685.0], [46.1, 24685.0], [46.2, 24685.0], [46.3, 24685.0], [46.4, 24685.0], [46.5, 24685.0], [46.6, 24685.0], [46.7, 24685.0], [46.8, 24685.0], [46.9, 24685.0], [47.0, 24685.0], [47.1, 24685.0], [47.2, 24685.0], [47.3, 24685.0], [47.4, 24685.0], [47.5, 24685.0], [47.6, 24685.0], [47.7, 24685.0], [47.8, 24685.0], [47.9, 24685.0], [48.0, 24685.0], [48.1, 24685.0], [48.2, 24685.0], [48.3, 24685.0], [48.4, 26876.0], [48.5, 26876.0], [48.6, 26876.0], [48.7, 26876.0], [48.8, 26876.0], [48.9, 26876.0], [49.0, 26876.0], [49.1, 26876.0], [49.2, 26876.0], [49.3, 26876.0], [49.4, 26876.0], [49.5, 26876.0], [49.6, 26876.0], [49.7, 26876.0], [49.8, 26876.0], [49.9, 26876.0], [50.0, 26876.0], [50.1, 26876.0], [50.2, 26876.0], [50.3, 26876.0], [50.4, 26876.0], [50.5, 26876.0], [50.6, 26876.0], [50.7, 26876.0], [50.8, 26876.0], [50.9, 26876.0], [51.0, 26876.0], [51.1, 26876.0], [51.2, 26876.0], [51.3, 26876.0], [51.4, 26876.0], [51.5, 26876.0], [51.6, 26876.0], [51.7, 28273.0], [51.8, 28273.0], [51.9, 28273.0], [52.0, 28273.0], [52.1, 28273.0], [52.2, 28273.0], [52.3, 28273.0], [52.4, 28273.0], [52.5, 28273.0], [52.6, 28273.0], [52.7, 28273.0], [52.8, 28273.0], [52.9, 28273.0], [53.0, 28273.0], [53.1, 28273.0], [53.2, 28273.0], [53.3, 28273.0], [53.4, 28273.0], [53.5, 28273.0], [53.6, 28273.0], [53.7, 28273.0], [53.8, 28273.0], [53.9, 28273.0], [54.0, 28273.0], [54.1, 28273.0], [54.2, 28273.0], [54.3, 28273.0], [54.4, 28273.0], [54.5, 28273.0], [54.6, 28273.0], [54.7, 28273.0], [54.8, 28273.0], [54.9, 28581.0], [55.0, 28581.0], [55.1, 28581.0], [55.2, 28581.0], [55.3, 28581.0], [55.4, 28581.0], [55.5, 28581.0], [55.6, 28581.0], [55.7, 28581.0], [55.8, 28581.0], [55.9, 28581.0], [56.0, 28581.0], [56.1, 28581.0], [56.2, 28581.0], [56.3, 28581.0], [56.4, 28581.0], [56.5, 28581.0], [56.6, 28581.0], [56.7, 28581.0], [56.8, 28581.0], [56.9, 28581.0], [57.0, 28581.0], [57.1, 28581.0], [57.2, 28581.0], [57.3, 28581.0], [57.4, 28581.0], [57.5, 28581.0], [57.6, 28581.0], [57.7, 28581.0], [57.8, 28581.0], [57.9, 28581.0], [58.0, 28581.0], [58.1, 30811.0], [58.2, 30811.0], [58.3, 30811.0], [58.4, 30811.0], [58.5, 30811.0], [58.6, 30811.0], [58.7, 30811.0], [58.8, 30811.0], [58.9, 30811.0], [59.0, 30811.0], [59.1, 30811.0], [59.2, 30811.0], [59.3, 30811.0], [59.4, 30811.0], [59.5, 30811.0], [59.6, 30811.0], [59.7, 30811.0], [59.8, 30811.0], [59.9, 30811.0], [60.0, 30811.0], [60.1, 30811.0], [60.2, 30811.0], [60.3, 30811.0], [60.4, 30811.0], [60.5, 30811.0], [60.6, 30811.0], [60.7, 30811.0], [60.8, 30811.0], [60.9, 30811.0], [61.0, 30811.0], [61.1, 30811.0], [61.2, 30811.0], [61.3, 33201.0], [61.4, 33201.0], [61.5, 33201.0], [61.6, 33201.0], [61.7, 33201.0], [61.8, 33201.0], [61.9, 33201.0], [62.0, 33201.0], [62.1, 33201.0], [62.2, 33201.0], [62.3, 33201.0], [62.4, 33201.0], [62.5, 33201.0], [62.6, 33201.0], [62.7, 33201.0], [62.8, 33201.0], [62.9, 33201.0], [63.0, 33201.0], [63.1, 33201.0], [63.2, 33201.0], [63.3, 33201.0], [63.4, 33201.0], [63.5, 33201.0], [63.6, 33201.0], [63.7, 33201.0], [63.8, 33201.0], [63.9, 33201.0], [64.0, 33201.0], [64.1, 33201.0], [64.2, 33201.0], [64.3, 33201.0], [64.4, 33201.0], [64.5, 33201.0], [64.6, 34922.0], [64.7, 34922.0], [64.8, 34922.0], [64.9, 34922.0], [65.0, 34922.0], [65.1, 34922.0], [65.2, 34922.0], [65.3, 34922.0], [65.4, 34922.0], [65.5, 34922.0], [65.6, 34922.0], [65.7, 34922.0], [65.8, 34922.0], [65.9, 34922.0], [66.0, 34922.0], [66.1, 34922.0], [66.2, 34922.0], [66.3, 34922.0], [66.4, 34922.0], [66.5, 34922.0], [66.6, 34922.0], [66.7, 34922.0], [66.8, 34922.0], [66.9, 34922.0], [67.0, 34922.0], [67.1, 34922.0], [67.2, 34922.0], [67.3, 34922.0], [67.4, 34922.0], [67.5, 34922.0], [67.6, 34922.0], [67.7, 34922.0], [67.8, 35645.0], [67.9, 35645.0], [68.0, 35645.0], [68.1, 35645.0], [68.2, 35645.0], [68.3, 35645.0], [68.4, 35645.0], [68.5, 35645.0], [68.6, 35645.0], [68.7, 35645.0], [68.8, 35645.0], [68.9, 35645.0], [69.0, 35645.0], [69.1, 35645.0], [69.2, 35645.0], [69.3, 35645.0], [69.4, 35645.0], [69.5, 35645.0], [69.6, 35645.0], [69.7, 35645.0], [69.8, 35645.0], [69.9, 35645.0], [70.0, 35645.0], [70.1, 35645.0], [70.2, 35645.0], [70.3, 35645.0], [70.4, 35645.0], [70.5, 35645.0], [70.6, 35645.0], [70.7, 35645.0], [70.8, 35645.0], [70.9, 35645.0], [71.0, 36240.0], [71.1, 36240.0], [71.2, 36240.0], [71.3, 36240.0], [71.4, 36240.0], [71.5, 36240.0], [71.6, 36240.0], [71.7, 36240.0], [71.8, 36240.0], [71.9, 36240.0], [72.0, 36240.0], [72.1, 36240.0], [72.2, 36240.0], [72.3, 36240.0], [72.4, 36240.0], [72.5, 36240.0], [72.6, 36240.0], [72.7, 36240.0], [72.8, 36240.0], [72.9, 36240.0], [73.0, 36240.0], [73.1, 36240.0], [73.2, 36240.0], [73.3, 36240.0], [73.4, 36240.0], [73.5, 36240.0], [73.6, 36240.0], [73.7, 36240.0], [73.8, 36240.0], [73.9, 36240.0], [74.0, 36240.0], [74.1, 36240.0], [74.2, 42116.0], [74.3, 42116.0], [74.4, 42116.0], [74.5, 42116.0], [74.6, 42116.0], [74.7, 42116.0], [74.8, 42116.0], [74.9, 42116.0], [75.0, 42116.0], [75.1, 42116.0], [75.2, 42116.0], [75.3, 42116.0], [75.4, 42116.0], [75.5, 42116.0], [75.6, 42116.0], [75.7, 42116.0], [75.8, 42116.0], [75.9, 42116.0], [76.0, 42116.0], [76.1, 42116.0], [76.2, 42116.0], [76.3, 42116.0], [76.4, 42116.0], [76.5, 42116.0], [76.6, 42116.0], [76.7, 42116.0], [76.8, 42116.0], [76.9, 42116.0], [77.0, 42116.0], [77.1, 42116.0], [77.2, 42116.0], [77.3, 42116.0], [77.4, 42116.0], [77.5, 42515.0], [77.6, 42515.0], [77.7, 42515.0], [77.8, 42515.0], [77.9, 42515.0], [78.0, 42515.0], [78.1, 42515.0], [78.2, 42515.0], [78.3, 42515.0], [78.4, 42515.0], [78.5, 42515.0], [78.6, 42515.0], [78.7, 42515.0], [78.8, 42515.0], [78.9, 42515.0], [79.0, 42515.0], [79.1, 42515.0], [79.2, 42515.0], [79.3, 42515.0], [79.4, 42515.0], [79.5, 42515.0], [79.6, 42515.0], [79.7, 42515.0], [79.8, 42515.0], [79.9, 42515.0], [80.0, 42515.0], [80.1, 42515.0], [80.2, 42515.0], [80.3, 42515.0], [80.4, 42515.0], [80.5, 42515.0], [80.6, 42515.0], [80.7, 49714.0], [80.8, 49714.0], [80.9, 49714.0], [81.0, 49714.0], [81.1, 49714.0], [81.2, 49714.0], [81.3, 49714.0], [81.4, 49714.0], [81.5, 49714.0], [81.6, 49714.0], [81.7, 49714.0], [81.8, 49714.0], [81.9, 49714.0], [82.0, 49714.0], [82.1, 49714.0], [82.2, 49714.0], [82.3, 49714.0], [82.4, 49714.0], [82.5, 49714.0], [82.6, 49714.0], [82.7, 49714.0], [82.8, 49714.0], [82.9, 49714.0], [83.0, 49714.0], [83.1, 49714.0], [83.2, 49714.0], [83.3, 49714.0], [83.4, 49714.0], [83.5, 49714.0], [83.6, 49714.0], [83.7, 49714.0], [83.8, 49714.0], [83.9, 55657.0], [84.0, 55657.0], [84.1, 55657.0], [84.2, 55657.0], [84.3, 55657.0], [84.4, 55657.0], [84.5, 55657.0], [84.6, 55657.0], [84.7, 55657.0], [84.8, 55657.0], [84.9, 55657.0], [85.0, 55657.0], [85.1, 55657.0], [85.2, 55657.0], [85.3, 55657.0], [85.4, 55657.0], [85.5, 55657.0], [85.6, 55657.0], [85.7, 55657.0], [85.8, 55657.0], [85.9, 55657.0], [86.0, 55657.0], [86.1, 55657.0], [86.2, 55657.0], [86.3, 55657.0], [86.4, 55657.0], [86.5, 55657.0], [86.6, 55657.0], [86.7, 55657.0], [86.8, 55657.0], [86.9, 55657.0], [87.0, 55657.0], [87.1, 57425.0], [87.2, 57425.0], [87.3, 57425.0], [87.4, 57425.0], [87.5, 57425.0], [87.6, 57425.0], [87.7, 57425.0], [87.8, 57425.0], [87.9, 57425.0], [88.0, 57425.0], [88.1, 57425.0], [88.2, 57425.0], [88.3, 57425.0], [88.4, 57425.0], [88.5, 57425.0], [88.6, 57425.0], [88.7, 57425.0], [88.8, 57425.0], [88.9, 57425.0], [89.0, 57425.0], [89.1, 57425.0], [89.2, 57425.0], [89.3, 57425.0], [89.4, 57425.0], [89.5, 57425.0], [89.6, 57425.0], [89.7, 57425.0], [89.8, 57425.0], [89.9, 57425.0], [90.0, 57425.0], [90.1, 57425.0], [90.2, 57425.0], [90.3, 57425.0], [90.4, 59497.0], [90.5, 59497.0], [90.6, 59497.0], [90.7, 59497.0], [90.8, 59497.0], [90.9, 59497.0], [91.0, 59497.0], [91.1, 59497.0], [91.2, 59497.0], [91.3, 59497.0], [91.4, 59497.0], [91.5, 59497.0], [91.6, 59497.0], [91.7, 59497.0], [91.8, 59497.0], [91.9, 59497.0], [92.0, 59497.0], [92.1, 59497.0], [92.2, 59497.0], [92.3, 59497.0], [92.4, 59497.0], [92.5, 59497.0], [92.6, 59497.0], [92.7, 59497.0], [92.8, 59497.0], [92.9, 59497.0], [93.0, 59497.0], [93.1, 59497.0], [93.2, 59497.0], [93.3, 59497.0], [93.4, 59497.0], [93.5, 59497.0], [93.6, 60095.0], [93.7, 60095.0], [93.8, 60095.0], [93.9, 60095.0], [94.0, 60095.0], [94.1, 60095.0], [94.2, 60095.0], [94.3, 60095.0], [94.4, 60095.0], [94.5, 60095.0], [94.6, 60095.0], [94.7, 60095.0], [94.8, 60095.0], [94.9, 60095.0], [95.0, 60095.0], [95.1, 60095.0], [95.2, 60095.0], [95.3, 60095.0], [95.4, 60095.0], [95.5, 60095.0], [95.6, 60095.0], [95.7, 60095.0], [95.8, 60095.0], [95.9, 60095.0], [96.0, 60095.0], [96.1, 60095.0], [96.2, 60095.0], [96.3, 60095.0], [96.4, 60095.0], [96.5, 60095.0], [96.6, 60095.0], [96.7, 60095.0], [96.8, 60107.0], [96.9, 60107.0], [97.0, 60107.0], [97.1, 60107.0], [97.2, 60107.0], [97.3, 60107.0], [97.4, 60107.0], [97.5, 60107.0], [97.6, 60107.0], [97.7, 60107.0], [97.8, 60107.0], [97.9, 60107.0], [98.0, 60107.0], [98.1, 60107.0], [98.2, 60107.0], [98.3, 60107.0], [98.4, 60107.0], [98.5, 60107.0], [98.6, 60107.0], [98.7, 60107.0], [98.8, 60107.0], [98.9, 60107.0], [99.0, 60107.0], [99.1, 60107.0], [99.2, 60107.0], [99.3, 60107.0], [99.4, 60107.0], [99.5, 60107.0], [99.6, 60107.0], [99.7, 60107.0], [99.8, 60107.0], [99.9, 60107.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7800.0, "maxY": 2.0, "series": [{"data": [[8300.0, 1.0], [8500.0, 1.0], [9700.0, 1.0], [14200.0, 2.0], [14100.0, 1.0], [14400.0, 1.0], [15300.0, 1.0], [15600.0, 1.0], [15800.0, 1.0], [16600.0, 1.0], [20900.0, 1.0], [24400.0, 1.0], [24600.0, 1.0], [26800.0, 1.0], [28500.0, 1.0], [28200.0, 1.0], [30800.0, 1.0], [33200.0, 1.0], [35600.0, 1.0], [36200.0, 1.0], [34900.0, 1.0], [42100.0, 1.0], [42500.0, 1.0], [49700.0, 1.0], [55600.0, 1.0], [57400.0, 1.0], [59400.0, 1.0], [60000.0, 1.0], [60100.0, 1.0], [7800.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 29.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 29.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79525436E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79525442E12, 2.0], [1.79525472E12, 1.0], [1.79525478E12, 3.0], [1.79525508E12, 1.0], [1.79525514E12, 3.0], [1.79525448E12, 1.5], [1.79525454E12, 2.0], [1.79525484E12, 2.0], [1.7952549E12, 1.0], [1.79525436E12, 1.5], [1.7952552E12, 3.3333333333333335], [1.79525526E12, 1.5], [1.7952546E12, 1.0], [1.79525466E12, 1.0], [1.79525496E12, 1.0], [1.79525502E12, 1.5]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79525526E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 23267.4375, "minX": 1.0, "maxY": 60095.0, "series": [{"data": [[1.0, 23267.4375], [2.0, 34128.375], [4.0, 60095.0], [3.0, 33561.333333333336]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.7419354838709675, 29250.61290322581]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3.05, "minX": 1.79525436E12, "maxY": 91.86666666666666, "series": [{"data": [[1.79525442E12, 9.383333333333333], [1.79525472E12, 6.25], [1.79525478E12, 3.283333333333333], [1.79525508E12, 6.166666666666667], [1.79525514E12, 3.25], [1.79525448E12, 6.383333333333334], [1.79525454E12, 6.166666666666667], [1.79525484E12, 9.65], [1.7952549E12, 6.166666666666667], [1.79525436E12, 6.116666666666666], [1.7952552E12, 9.35], [1.79525526E12, 6.116666666666666], [1.7952546E12, 6.3], [1.79525466E12, 3.05], [1.79525496E12, 3.1333333333333333], [1.79525502E12, 6.366666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79525442E12, 83.11666666666666], [1.79525472E12, 68.96666666666667], [1.79525478E12, 18.766666666666666], [1.79525508E12, 49.96666666666667], [1.79525514E12, 18.05], [1.79525448E12, 47.43333333333333], [1.79525454E12, 35.233333333333334], [1.79525484E12, 65.18333333333334], [1.7952549E12, 46.3], [1.79525436E12, 32.733333333333334], [1.7952552E12, 91.86666666666666], [1.79525526E12, 49.46666666666667], [1.7952546E12, 36.9], [1.79525466E12, 16.6], [1.79525496E12, 18.483333333333334], [1.79525502E12, 34.083333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79525526E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11969.5, "minX": 1.79525436E12, "maxY": 58766.0, "series": [{"data": [[1.79525442E12, 28054.0], [1.79525472E12, 15384.0], [1.79525478E12, 24685.0], [1.79525508E12, 17378.5], [1.79525514E12, 42515.0], [1.79525448E12, 32410.5], [1.79525454E12, 33290.0], [1.79525484E12, 48044.333333333336], [1.7952549E12, 12084.0], [1.79525436E12, 14667.0], [1.7952552E12, 48008.333333333336], [1.79525526E12, 58766.0], [1.7952546E12, 22639.5], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 11969.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79525526E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11969.0, "minX": 1.79525436E12, "maxY": 58766.0, "series": [{"data": [[1.79525442E12, 28053.666666666668], [1.79525472E12, 15384.0], [1.79525478E12, 24685.0], [1.79525508E12, 17378.5], [1.79525514E12, 42515.0], [1.79525448E12, 32410.5], [1.79525454E12, 33290.0], [1.79525484E12, 48044.333333333336], [1.7952549E12, 12084.0], [1.79525436E12, 14667.0], [1.7952552E12, 48008.333333333336], [1.79525526E12, 58766.0], [1.7952546E12, 22639.5], [1.79525466E12, 14265.0], [1.79525496E12, 15805.0], [1.79525502E12, 11969.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79525526E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.79525436E12, "maxY": 20.0, "series": [{"data": [[1.79525442E12, 17.0], [1.79525472E12, 10.0], [1.79525478E12, 12.0], [1.79525508E12, 10.5], [1.79525514E12, 9.0], [1.79525448E12, 12.0], [1.79525454E12, 9.0], [1.79525484E12, 10.0], [1.7952549E12, 11.5], [1.79525436E12, 20.0], [1.7952552E12, 19.0], [1.79525526E12, 12.0], [1.7952546E12, 9.5], [1.79525466E12, 10.0], [1.79525496E12, 15.0], [1.79525502E12, 11.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79525526E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7881.0, "minX": 1.79525436E12, "maxY": 59497.0, "series": [{"data": [[1.79525442E12, 35645.0], [1.79525472E12, 16634.0], [1.79525478E12, 24685.0], [1.79525508E12, 26876.0], [1.79525514E12, 42515.0], [1.79525448E12, 36240.0], [1.79525454E12, 42116.0], [1.79525484E12, 59497.0], [1.7952549E12, 15621.0], [1.79525436E12, 20950.0], [1.7952552E12, 55657.0], [1.79525526E12, 57425.0], [1.7952546E12, 30811.0], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 14233.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79525442E12, 35645.0], [1.79525472E12, 16634.0], [1.79525478E12, 24685.0], [1.79525508E12, 26876.0], [1.79525514E12, 42515.0], [1.79525448E12, 36240.0], [1.79525454E12, 42116.0], [1.79525484E12, 59497.0], [1.7952549E12, 15621.0], [1.79525436E12, 20950.0], [1.7952552E12, 55657.0], [1.79525526E12, 57425.0], [1.7952546E12, 30811.0], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 14233.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79525442E12, 35645.0], [1.79525472E12, 16634.0], [1.79525478E12, 24685.0], [1.79525508E12, 26876.0], [1.79525514E12, 42515.0], [1.79525448E12, 36240.0], [1.79525454E12, 42116.0], [1.79525484E12, 59497.0], [1.7952549E12, 15621.0], [1.79525436E12, 20950.0], [1.7952552E12, 55657.0], [1.79525526E12, 57425.0], [1.7952546E12, 30811.0], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 14233.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79525442E12, 35645.0], [1.79525472E12, 16634.0], [1.79525478E12, 24685.0], [1.79525508E12, 26876.0], [1.79525514E12, 42515.0], [1.79525448E12, 36240.0], [1.79525454E12, 42116.0], [1.79525484E12, 59497.0], [1.7952549E12, 15621.0], [1.79525436E12, 20950.0], [1.7952552E12, 55657.0], [1.79525526E12, 57425.0], [1.7952546E12, 30811.0], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 14233.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79525442E12, 15316.0], [1.79525472E12, 14134.0], [1.79525478E12, 24685.0], [1.79525508E12, 7881.0], [1.79525514E12, 42515.0], [1.79525448E12, 28581.0], [1.79525454E12, 24464.0], [1.79525484E12, 34922.0], [1.7952549E12, 8547.0], [1.79525436E12, 8384.0], [1.7952552E12, 28273.0], [1.79525526E12, 57425.0], [1.7952546E12, 14468.0], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 9706.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79525442E12, 33201.0], [1.79525472E12, 15384.0], [1.79525478E12, 24685.0], [1.79525508E12, 17378.5], [1.79525514E12, 42515.0], [1.79525448E12, 32410.5], [1.79525454E12, 33290.0], [1.79525484E12, 49714.0], [1.7952549E12, 12084.0], [1.79525436E12, 14667.0], [1.7952552E12, 41965.0], [1.79525526E12, 57425.0], [1.7952546E12, 22639.5], [1.79525466E12, 14266.0], [1.79525496E12, 15805.0], [1.79525502E12, 11969.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79525526E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 24685.0, "minX": 1.0, "maxY": 60101.0, "series": [{"data": [[1.0, 24685.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60101.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 24685.0, "minX": 1.0, "maxY": 60101.0, "series": [{"data": [[1.0, 24685.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60101.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7952543E12, "maxY": 0.06666666666666667, "series": [{"data": [[1.79525442E12, 0.05], [1.79525472E12, 0.03333333333333333], [1.79525478E12, 0.06666666666666667], [1.79525508E12, 0.016666666666666666], [1.79525514E12, 0.06666666666666667], [1.79525448E12, 0.016666666666666666], [1.79525454E12, 0.03333333333333333], [1.7952549E12, 0.03333333333333333], [1.79525436E12, 0.05], [1.7952552E12, 0.03333333333333333], [1.7952546E12, 0.016666666666666666], [1.79525466E12, 0.016666666666666666], [1.79525496E12, 0.03333333333333333], [1.7952543E12, 0.016666666666666666], [1.79525502E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7952552E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79525436E12, "maxY": 0.05, "series": [{"data": [[1.79525442E12, 0.05], [1.79525472E12, 0.03333333333333333], [1.79525478E12, 0.016666666666666666], [1.79525508E12, 0.03333333333333333], [1.79525514E12, 0.016666666666666666], [1.79525448E12, 0.03333333333333333], [1.79525454E12, 0.03333333333333333], [1.79525484E12, 0.05], [1.7952549E12, 0.03333333333333333], [1.79525436E12, 0.03333333333333333], [1.7952552E12, 0.03333333333333333], [1.79525526E12, 0.016666666666666666], [1.7952546E12, 0.03333333333333333], [1.79525466E12, 0.016666666666666666], [1.79525496E12, 0.016666666666666666], [1.79525502E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7952552E12, 0.016666666666666666], [1.79525526E12, 0.016666666666666666]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79525526E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79525436E12, "maxY": 0.05, "series": [{"data": [[1.79525442E12, 0.05], [1.79525472E12, 0.03333333333333333], [1.79525478E12, 0.016666666666666666], [1.79525508E12, 0.03333333333333333], [1.79525514E12, 0.016666666666666666], [1.79525448E12, 0.03333333333333333], [1.79525454E12, 0.03333333333333333], [1.79525484E12, 0.05], [1.7952549E12, 0.03333333333333333], [1.79525436E12, 0.03333333333333333], [1.7952552E12, 0.03333333333333333], [1.79525526E12, 0.016666666666666666], [1.7952546E12, 0.03333333333333333], [1.79525466E12, 0.016666666666666666], [1.79525496E12, 0.016666666666666666], [1.79525502E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.7952552E12, 0.016666666666666666], [1.79525526E12, 0.016666666666666666]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79525526E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79525436E12, "maxY": 0.05, "series": [{"data": [[1.79525442E12, 0.05], [1.79525472E12, 0.03333333333333333], [1.79525478E12, 0.016666666666666666], [1.79525508E12, 0.03333333333333333], [1.79525514E12, 0.016666666666666666], [1.79525448E12, 0.03333333333333333], [1.79525454E12, 0.03333333333333333], [1.79525484E12, 0.05], [1.7952549E12, 0.03333333333333333], [1.79525436E12, 0.03333333333333333], [1.7952552E12, 0.03333333333333333], [1.79525526E12, 0.016666666666666666], [1.7952546E12, 0.03333333333333333], [1.79525466E12, 0.016666666666666666], [1.79525496E12, 0.016666666666666666], [1.79525502E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7952552E12, 0.016666666666666666], [1.79525526E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79525526E12, "title": "Total Transactions Per Second"}},
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

