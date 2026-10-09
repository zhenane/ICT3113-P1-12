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
        data: {"result": {"minY": 1290.0, "minX": 0.0, "maxY": 60105.0, "series": [{"data": [[0.0, 1290.0], [0.1, 1290.0], [0.2, 1290.0], [0.3, 1290.0], [0.4, 1290.0], [0.5, 1290.0], [0.6, 1290.0], [0.7, 1290.0], [0.8, 1290.0], [0.9, 1987.0], [1.0, 1987.0], [1.1, 1987.0], [1.2, 1987.0], [1.3, 1987.0], [1.4, 1987.0], [1.5, 1987.0], [1.6, 1987.0], [1.7, 2418.0], [1.8, 2418.0], [1.9, 2418.0], [2.0, 2418.0], [2.1, 2418.0], [2.2, 2418.0], [2.3, 2418.0], [2.4, 2418.0], [2.5, 4664.0], [2.6, 4664.0], [2.7, 4664.0], [2.8, 4664.0], [2.9, 4664.0], [3.0, 4664.0], [3.1, 4664.0], [3.2, 4664.0], [3.3, 4664.0], [3.4, 5768.0], [3.5, 5768.0], [3.6, 5768.0], [3.7, 5768.0], [3.8, 5768.0], [3.9, 5768.0], [4.0, 5768.0], [4.1, 5768.0], [4.2, 6399.0], [4.3, 6399.0], [4.4, 6399.0], [4.5, 6399.0], [4.6, 6399.0], [4.7, 6399.0], [4.8, 6399.0], [4.9, 6399.0], [5.0, 6900.0], [5.1, 6900.0], [5.2, 6900.0], [5.3, 6900.0], [5.4, 6900.0], [5.5, 6900.0], [5.6, 6900.0], [5.7, 6900.0], [5.8, 6900.0], [5.9, 7116.0], [6.0, 7116.0], [6.1, 7116.0], [6.2, 7116.0], [6.3, 7116.0], [6.4, 7116.0], [6.5, 7116.0], [6.6, 7116.0], [6.7, 8053.0], [6.8, 8053.0], [6.9, 8053.0], [7.0, 8053.0], [7.1, 8053.0], [7.2, 8053.0], [7.3, 8053.0], [7.4, 8053.0], [7.5, 8531.0], [7.6, 8531.0], [7.7, 8531.0], [7.8, 8531.0], [7.9, 8531.0], [8.0, 8531.0], [8.1, 8531.0], [8.2, 8531.0], [8.3, 8531.0], [8.4, 8862.0], [8.5, 8862.0], [8.6, 8862.0], [8.7, 8862.0], [8.8, 8862.0], [8.9, 8862.0], [9.0, 8862.0], [9.1, 8862.0], [9.2, 8880.0], [9.3, 8880.0], [9.4, 8880.0], [9.5, 8880.0], [9.6, 8880.0], [9.7, 8880.0], [9.8, 8880.0], [9.9, 8880.0], [10.0, 9495.0], [10.1, 9495.0], [10.2, 9495.0], [10.3, 9495.0], [10.4, 9495.0], [10.5, 9495.0], [10.6, 9495.0], [10.7, 9495.0], [10.8, 9495.0], [10.9, 10580.0], [11.0, 10580.0], [11.1, 10580.0], [11.2, 10580.0], [11.3, 10580.0], [11.4, 10580.0], [11.5, 10580.0], [11.6, 10580.0], [11.7, 10729.0], [11.8, 10729.0], [11.9, 10729.0], [12.0, 10729.0], [12.1, 10729.0], [12.2, 10729.0], [12.3, 10729.0], [12.4, 10729.0], [12.5, 10729.0], [12.6, 11630.0], [12.7, 11630.0], [12.8, 11630.0], [12.9, 11630.0], [13.0, 11630.0], [13.1, 11630.0], [13.2, 11630.0], [13.3, 11630.0], [13.4, 11656.0], [13.5, 11656.0], [13.6, 11656.0], [13.7, 11656.0], [13.8, 11656.0], [13.9, 11656.0], [14.0, 11656.0], [14.1, 11656.0], [14.2, 14250.0], [14.3, 14250.0], [14.4, 14250.0], [14.5, 14250.0], [14.6, 14250.0], [14.7, 14250.0], [14.8, 14250.0], [14.9, 14250.0], [15.0, 14250.0], [15.1, 14669.0], [15.2, 14669.0], [15.3, 14669.0], [15.4, 14669.0], [15.5, 14669.0], [15.6, 14669.0], [15.7, 14669.0], [15.8, 14669.0], [15.9, 15714.0], [16.0, 15714.0], [16.1, 15714.0], [16.2, 15714.0], [16.3, 15714.0], [16.4, 15714.0], [16.5, 15714.0], [16.6, 15714.0], [16.7, 15774.0], [16.8, 15774.0], [16.9, 15774.0], [17.0, 15774.0], [17.1, 15774.0], [17.2, 15774.0], [17.3, 15774.0], [17.4, 15774.0], [17.5, 15774.0], [17.6, 16124.0], [17.7, 16124.0], [17.8, 16124.0], [17.9, 16124.0], [18.0, 16124.0], [18.1, 16124.0], [18.2, 16124.0], [18.3, 16124.0], [18.4, 16820.0], [18.5, 16820.0], [18.6, 16820.0], [18.7, 16820.0], [18.8, 16820.0], [18.9, 16820.0], [19.0, 16820.0], [19.1, 16820.0], [19.2, 17189.0], [19.3, 17189.0], [19.4, 17189.0], [19.5, 17189.0], [19.6, 17189.0], [19.7, 17189.0], [19.8, 17189.0], [19.9, 17189.0], [20.0, 17248.0], [20.1, 17248.0], [20.2, 17248.0], [20.3, 17248.0], [20.4, 17248.0], [20.5, 17248.0], [20.6, 17248.0], [20.7, 17248.0], [20.8, 17248.0], [20.9, 17909.0], [21.0, 17909.0], [21.1, 17909.0], [21.2, 17909.0], [21.3, 17909.0], [21.4, 17909.0], [21.5, 17909.0], [21.6, 17909.0], [21.7, 18087.0], [21.8, 18087.0], [21.9, 18087.0], [22.0, 18087.0], [22.1, 18087.0], [22.2, 18087.0], [22.3, 18087.0], [22.4, 18087.0], [22.5, 18385.0], [22.6, 18385.0], [22.7, 18385.0], [22.8, 18385.0], [22.9, 18385.0], [23.0, 18385.0], [23.1, 18385.0], [23.2, 18385.0], [23.3, 18385.0], [23.4, 18401.0], [23.5, 18401.0], [23.6, 18401.0], [23.7, 18401.0], [23.8, 18401.0], [23.9, 18401.0], [24.0, 18401.0], [24.1, 18401.0], [24.2, 19110.0], [24.3, 19110.0], [24.4, 19110.0], [24.5, 19110.0], [24.6, 19110.0], [24.7, 19110.0], [24.8, 19110.0], [24.9, 19110.0], [25.0, 19359.0], [25.1, 19359.0], [25.2, 19359.0], [25.3, 19359.0], [25.4, 19359.0], [25.5, 19359.0], [25.6, 19359.0], [25.7, 19359.0], [25.8, 19359.0], [25.9, 19908.0], [26.0, 19908.0], [26.1, 19908.0], [26.2, 19908.0], [26.3, 19908.0], [26.4, 19908.0], [26.5, 19908.0], [26.6, 19908.0], [26.7, 21636.0], [26.8, 21636.0], [26.9, 21636.0], [27.0, 21636.0], [27.1, 21636.0], [27.2, 21636.0], [27.3, 21636.0], [27.4, 21636.0], [27.5, 21975.0], [27.6, 21975.0], [27.7, 21975.0], [27.8, 21975.0], [27.9, 21975.0], [28.0, 21975.0], [28.1, 21975.0], [28.2, 21975.0], [28.3, 21975.0], [28.4, 22705.0], [28.5, 22705.0], [28.6, 22705.0], [28.7, 22705.0], [28.8, 22705.0], [28.9, 22705.0], [29.0, 22705.0], [29.1, 22705.0], [29.2, 22829.0], [29.3, 22829.0], [29.4, 22829.0], [29.5, 22829.0], [29.6, 22829.0], [29.7, 22829.0], [29.8, 22829.0], [29.9, 22829.0], [30.0, 22890.0], [30.1, 22890.0], [30.2, 22890.0], [30.3, 22890.0], [30.4, 22890.0], [30.5, 22890.0], [30.6, 22890.0], [30.7, 22890.0], [30.8, 22890.0], [30.9, 23089.0], [31.0, 23089.0], [31.1, 23089.0], [31.2, 23089.0], [31.3, 23089.0], [31.4, 23089.0], [31.5, 23089.0], [31.6, 23089.0], [31.7, 23601.0], [31.8, 23601.0], [31.9, 23601.0], [32.0, 23601.0], [32.1, 23601.0], [32.2, 23601.0], [32.3, 23601.0], [32.4, 23601.0], [32.5, 23815.0], [32.6, 23815.0], [32.7, 23815.0], [32.8, 23815.0], [32.9, 23815.0], [33.0, 23815.0], [33.1, 23815.0], [33.2, 23815.0], [33.3, 23815.0], [33.4, 24048.0], [33.5, 24048.0], [33.6, 24048.0], [33.7, 24048.0], [33.8, 24048.0], [33.9, 24048.0], [34.0, 24048.0], [34.1, 24048.0], [34.2, 24111.0], [34.3, 24111.0], [34.4, 24111.0], [34.5, 24111.0], [34.6, 24111.0], [34.7, 24111.0], [34.8, 24111.0], [34.9, 24111.0], [35.0, 24407.0], [35.1, 24407.0], [35.2, 24407.0], [35.3, 24407.0], [35.4, 24407.0], [35.5, 24407.0], [35.6, 24407.0], [35.7, 24407.0], [35.8, 24407.0], [35.9, 24539.0], [36.0, 24539.0], [36.1, 24539.0], [36.2, 24539.0], [36.3, 24539.0], [36.4, 24539.0], [36.5, 24539.0], [36.6, 24539.0], [36.7, 24798.0], [36.8, 24798.0], [36.9, 24798.0], [37.0, 24798.0], [37.1, 24798.0], [37.2, 24798.0], [37.3, 24798.0], [37.4, 24798.0], [37.5, 25747.0], [37.6, 25747.0], [37.7, 25747.0], [37.8, 25747.0], [37.9, 25747.0], [38.0, 25747.0], [38.1, 25747.0], [38.2, 25747.0], [38.3, 25747.0], [38.4, 26262.0], [38.5, 26262.0], [38.6, 26262.0], [38.7, 26262.0], [38.8, 26262.0], [38.9, 26262.0], [39.0, 26262.0], [39.1, 26262.0], [39.2, 26656.0], [39.3, 26656.0], [39.4, 26656.0], [39.5, 26656.0], [39.6, 26656.0], [39.7, 26656.0], [39.8, 26656.0], [39.9, 26656.0], [40.0, 26656.0], [40.1, 27739.0], [40.2, 27739.0], [40.3, 27739.0], [40.4, 27739.0], [40.5, 27739.0], [40.6, 27739.0], [40.7, 27739.0], [40.8, 27739.0], [40.9, 27872.0], [41.0, 27872.0], [41.1, 27872.0], [41.2, 27872.0], [41.3, 27872.0], [41.4, 27872.0], [41.5, 27872.0], [41.6, 27872.0], [41.7, 27903.0], [41.8, 27903.0], [41.9, 27903.0], [42.0, 27903.0], [42.1, 27903.0], [42.2, 27903.0], [42.3, 27903.0], [42.4, 27903.0], [42.5, 27903.0], [42.6, 28512.0], [42.7, 28512.0], [42.8, 28512.0], [42.9, 28512.0], [43.0, 28512.0], [43.1, 28512.0], [43.2, 28512.0], [43.3, 28512.0], [43.4, 29015.0], [43.5, 29015.0], [43.6, 29015.0], [43.7, 29015.0], [43.8, 29015.0], [43.9, 29015.0], [44.0, 29015.0], [44.1, 29015.0], [44.2, 29687.0], [44.3, 29687.0], [44.4, 29687.0], [44.5, 29687.0], [44.6, 29687.0], [44.7, 29687.0], [44.8, 29687.0], [44.9, 29687.0], [45.0, 29687.0], [45.1, 29879.0], [45.2, 29879.0], [45.3, 29879.0], [45.4, 29879.0], [45.5, 29879.0], [45.6, 29879.0], [45.7, 29879.0], [45.8, 29879.0], [45.9, 30244.0], [46.0, 30244.0], [46.1, 30244.0], [46.2, 30244.0], [46.3, 30244.0], [46.4, 30244.0], [46.5, 30244.0], [46.6, 30244.0], [46.7, 30426.0], [46.8, 30426.0], [46.9, 30426.0], [47.0, 30426.0], [47.1, 30426.0], [47.2, 30426.0], [47.3, 30426.0], [47.4, 30426.0], [47.5, 30426.0], [47.6, 30514.0], [47.7, 30514.0], [47.8, 30514.0], [47.9, 30514.0], [48.0, 30514.0], [48.1, 30514.0], [48.2, 30514.0], [48.3, 30514.0], [48.4, 31129.0], [48.5, 31129.0], [48.6, 31129.0], [48.7, 31129.0], [48.8, 31129.0], [48.9, 31129.0], [49.0, 31129.0], [49.1, 31129.0], [49.2, 31141.0], [49.3, 31141.0], [49.4, 31141.0], [49.5, 31141.0], [49.6, 31141.0], [49.7, 31141.0], [49.8, 31141.0], [49.9, 31141.0], [50.0, 31141.0], [50.1, 32226.0], [50.2, 32226.0], [50.3, 32226.0], [50.4, 32226.0], [50.5, 32226.0], [50.6, 32226.0], [50.7, 32226.0], [50.8, 32226.0], [50.9, 35224.0], [51.0, 35224.0], [51.1, 35224.0], [51.2, 35224.0], [51.3, 35224.0], [51.4, 35224.0], [51.5, 35224.0], [51.6, 35224.0], [51.7, 37570.0], [51.8, 37570.0], [51.9, 37570.0], [52.0, 37570.0], [52.1, 37570.0], [52.2, 37570.0], [52.3, 37570.0], [52.4, 37570.0], [52.5, 37570.0], [52.6, 37999.0], [52.7, 37999.0], [52.8, 37999.0], [52.9, 37999.0], [53.0, 37999.0], [53.1, 37999.0], [53.2, 37999.0], [53.3, 37999.0], [53.4, 39336.0], [53.5, 39336.0], [53.6, 39336.0], [53.7, 39336.0], [53.8, 39336.0], [53.9, 39336.0], [54.0, 39336.0], [54.1, 39336.0], [54.2, 40556.0], [54.3, 40556.0], [54.4, 40556.0], [54.5, 40556.0], [54.6, 40556.0], [54.7, 40556.0], [54.8, 40556.0], [54.9, 40556.0], [55.0, 40556.0], [55.1, 41643.0], [55.2, 41643.0], [55.3, 41643.0], [55.4, 41643.0], [55.5, 41643.0], [55.6, 41643.0], [55.7, 41643.0], [55.8, 41643.0], [55.9, 42925.0], [56.0, 42925.0], [56.1, 42925.0], [56.2, 42925.0], [56.3, 42925.0], [56.4, 42925.0], [56.5, 42925.0], [56.6, 42925.0], [56.7, 44545.0], [56.8, 44545.0], [56.9, 44545.0], [57.0, 44545.0], [57.1, 44545.0], [57.2, 44545.0], [57.3, 44545.0], [57.4, 44545.0], [57.5, 44545.0], [57.6, 44828.0], [57.7, 44828.0], [57.8, 44828.0], [57.9, 44828.0], [58.0, 44828.0], [58.1, 44828.0], [58.2, 44828.0], [58.3, 44828.0], [58.4, 45492.0], [58.5, 45492.0], [58.6, 45492.0], [58.7, 45492.0], [58.8, 45492.0], [58.9, 45492.0], [59.0, 45492.0], [59.1, 45492.0], [59.2, 47254.0], [59.3, 47254.0], [59.4, 47254.0], [59.5, 47254.0], [59.6, 47254.0], [59.7, 47254.0], [59.8, 47254.0], [59.9, 47254.0], [60.0, 47254.0], [60.1, 50412.0], [60.2, 50412.0], [60.3, 50412.0], [60.4, 50412.0], [60.5, 50412.0], [60.6, 50412.0], [60.7, 50412.0], [60.8, 50412.0], [60.9, 51930.0], [61.0, 51930.0], [61.1, 51930.0], [61.2, 51930.0], [61.3, 51930.0], [61.4, 51930.0], [61.5, 51930.0], [61.6, 51930.0], [61.7, 52535.0], [61.8, 52535.0], [61.9, 52535.0], [62.0, 52535.0], [62.1, 52535.0], [62.2, 52535.0], [62.3, 52535.0], [62.4, 52535.0], [62.5, 52535.0], [62.6, 53226.0], [62.7, 53226.0], [62.8, 53226.0], [62.9, 53226.0], [63.0, 53226.0], [63.1, 53226.0], [63.2, 53226.0], [63.3, 53226.0], [63.4, 53625.0], [63.5, 53625.0], [63.6, 53625.0], [63.7, 53625.0], [63.8, 53625.0], [63.9, 53625.0], [64.0, 53625.0], [64.1, 53625.0], [64.2, 54217.0], [64.3, 54217.0], [64.4, 54217.0], [64.5, 54217.0], [64.6, 54217.0], [64.7, 54217.0], [64.8, 54217.0], [64.9, 54217.0], [65.0, 54217.0], [65.1, 55438.0], [65.2, 55438.0], [65.3, 55438.0], [65.4, 55438.0], [65.5, 55438.0], [65.6, 55438.0], [65.7, 55438.0], [65.8, 55438.0], [65.9, 55594.0], [66.0, 55594.0], [66.1, 55594.0], [66.2, 55594.0], [66.3, 55594.0], [66.4, 55594.0], [66.5, 55594.0], [66.6, 55594.0], [66.7, 55752.0], [66.8, 55752.0], [66.9, 55752.0], [67.0, 55752.0], [67.1, 55752.0], [67.2, 55752.0], [67.3, 55752.0], [67.4, 55752.0], [67.5, 55752.0], [67.6, 56408.0], [67.7, 56408.0], [67.8, 56408.0], [67.9, 56408.0], [68.0, 56408.0], [68.1, 56408.0], [68.2, 56408.0], [68.3, 56408.0], [68.4, 56577.0], [68.5, 56577.0], [68.6, 56577.0], [68.7, 56577.0], [68.8, 56577.0], [68.9, 56577.0], [69.0, 56577.0], [69.1, 56577.0], [69.2, 56626.0], [69.3, 56626.0], [69.4, 56626.0], [69.5, 56626.0], [69.6, 56626.0], [69.7, 56626.0], [69.8, 56626.0], [69.9, 56626.0], [70.0, 56626.0], [70.1, 56695.0], [70.2, 56695.0], [70.3, 56695.0], [70.4, 56695.0], [70.5, 56695.0], [70.6, 56695.0], [70.7, 56695.0], [70.8, 56695.0], [70.9, 56813.0], [71.0, 56813.0], [71.1, 56813.0], [71.2, 56813.0], [71.3, 56813.0], [71.4, 56813.0], [71.5, 56813.0], [71.6, 56813.0], [71.7, 56848.0], [71.8, 56848.0], [71.9, 56848.0], [72.0, 56848.0], [72.1, 56848.0], [72.2, 56848.0], [72.3, 56848.0], [72.4, 56848.0], [72.5, 56848.0], [72.6, 57161.0], [72.7, 57161.0], [72.8, 57161.0], [72.9, 57161.0], [73.0, 57161.0], [73.1, 57161.0], [73.2, 57161.0], [73.3, 57161.0], [73.4, 57349.0], [73.5, 57349.0], [73.6, 57349.0], [73.7, 57349.0], [73.8, 57349.0], [73.9, 57349.0], [74.0, 57349.0], [74.1, 57349.0], [74.2, 57438.0], [74.3, 57438.0], [74.4, 57438.0], [74.5, 57438.0], [74.6, 57438.0], [74.7, 57438.0], [74.8, 57438.0], [74.9, 57438.0], [75.0, 57438.0], [75.1, 57729.0], [75.2, 57729.0], [75.3, 57729.0], [75.4, 57729.0], [75.5, 57729.0], [75.6, 57729.0], [75.7, 57729.0], [75.8, 57729.0], [75.9, 57926.0], [76.0, 57926.0], [76.1, 57926.0], [76.2, 57926.0], [76.3, 57926.0], [76.4, 57926.0], [76.5, 57926.0], [76.6, 57926.0], [76.7, 57956.0], [76.8, 57956.0], [76.9, 57956.0], [77.0, 57956.0], [77.1, 57956.0], [77.2, 57956.0], [77.3, 57956.0], [77.4, 57956.0], [77.5, 58021.0], [77.6, 58021.0], [77.7, 58021.0], [77.8, 58021.0], [77.9, 58021.0], [78.0, 58021.0], [78.1, 58021.0], [78.2, 58021.0], [78.3, 58021.0], [78.4, 58049.0], [78.5, 58049.0], [78.6, 58049.0], [78.7, 58049.0], [78.8, 58049.0], [78.9, 58049.0], [79.0, 58049.0], [79.1, 58049.0], [79.2, 58091.0], [79.3, 58091.0], [79.4, 58091.0], [79.5, 58091.0], [79.6, 58091.0], [79.7, 58091.0], [79.8, 58091.0], [79.9, 58091.0], [80.0, 58515.0], [80.1, 58515.0], [80.2, 58515.0], [80.3, 58515.0], [80.4, 58515.0], [80.5, 58515.0], [80.6, 58515.0], [80.7, 58515.0], [80.8, 58515.0], [80.9, 58534.0], [81.0, 58534.0], [81.1, 58534.0], [81.2, 58534.0], [81.3, 58534.0], [81.4, 58534.0], [81.5, 58534.0], [81.6, 58534.0], [81.7, 58614.0], [81.8, 58614.0], [81.9, 58614.0], [82.0, 58614.0], [82.1, 58614.0], [82.2, 58614.0], [82.3, 58614.0], [82.4, 58614.0], [82.5, 59214.0], [82.6, 59214.0], [82.7, 59214.0], [82.8, 59214.0], [82.9, 59214.0], [83.0, 59214.0], [83.1, 59214.0], [83.2, 59214.0], [83.3, 59214.0], [83.4, 59499.0], [83.5, 59499.0], [83.6, 59499.0], [83.7, 59499.0], [83.8, 59499.0], [83.9, 59499.0], [84.0, 59499.0], [84.1, 59499.0], [84.2, 59628.0], [84.3, 59628.0], [84.4, 59628.0], [84.5, 59628.0], [84.6, 59628.0], [84.7, 59628.0], [84.8, 59628.0], [84.9, 59628.0], [85.0, 59759.0], [85.1, 59759.0], [85.2, 59759.0], [85.3, 59759.0], [85.4, 59759.0], [85.5, 59759.0], [85.6, 59759.0], [85.7, 59759.0], [85.8, 59759.0], [85.9, 60029.0], [86.0, 60029.0], [86.1, 60029.0], [86.2, 60029.0], [86.3, 60029.0], [86.4, 60029.0], [86.5, 60029.0], [86.6, 60029.0], [86.7, 60039.0], [86.8, 60039.0], [86.9, 60039.0], [87.0, 60039.0], [87.1, 60039.0], [87.2, 60039.0], [87.3, 60039.0], [87.4, 60039.0], [87.5, 60042.0], [87.6, 60042.0], [87.7, 60042.0], [87.8, 60042.0], [87.9, 60042.0], [88.0, 60042.0], [88.1, 60042.0], [88.2, 60042.0], [88.3, 60042.0], [88.4, 60049.0], [88.5, 60049.0], [88.6, 60049.0], [88.7, 60049.0], [88.8, 60049.0], [88.9, 60049.0], [89.0, 60049.0], [89.1, 60049.0], [89.2, 60050.0], [89.3, 60050.0], [89.4, 60050.0], [89.5, 60050.0], [89.6, 60050.0], [89.7, 60050.0], [89.8, 60050.0], [89.9, 60050.0], [90.0, 60055.0], [90.1, 60055.0], [90.2, 60055.0], [90.3, 60055.0], [90.4, 60055.0], [90.5, 60055.0], [90.6, 60055.0], [90.7, 60055.0], [90.8, 60055.0], [90.9, 60082.0], [91.0, 60082.0], [91.1, 60082.0], [91.2, 60082.0], [91.3, 60082.0], [91.4, 60082.0], [91.5, 60082.0], [91.6, 60082.0], [91.7, 60085.0], [91.8, 60085.0], [91.9, 60085.0], [92.0, 60085.0], [92.1, 60085.0], [92.2, 60085.0], [92.3, 60085.0], [92.4, 60085.0], [92.5, 60086.0], [92.6, 60086.0], [92.7, 60086.0], [92.8, 60086.0], [92.9, 60086.0], [93.0, 60086.0], [93.1, 60086.0], [93.2, 60086.0], [93.3, 60086.0], [93.4, 60086.0], [93.5, 60086.0], [93.6, 60086.0], [93.7, 60086.0], [93.8, 60086.0], [93.9, 60086.0], [94.0, 60086.0], [94.1, 60086.0], [94.2, 60089.0], [94.3, 60089.0], [94.4, 60089.0], [94.5, 60089.0], [94.6, 60089.0], [94.7, 60089.0], [94.8, 60089.0], [94.9, 60089.0], [95.0, 60090.0], [95.1, 60090.0], [95.2, 60090.0], [95.3, 60090.0], [95.4, 60090.0], [95.5, 60090.0], [95.6, 60090.0], [95.7, 60090.0], [95.8, 60090.0], [95.9, 60095.0], [96.0, 60095.0], [96.1, 60095.0], [96.2, 60095.0], [96.3, 60095.0], [96.4, 60095.0], [96.5, 60095.0], [96.6, 60095.0], [96.7, 60096.0], [96.8, 60096.0], [96.9, 60096.0], [97.0, 60096.0], [97.1, 60096.0], [97.2, 60096.0], [97.3, 60096.0], [97.4, 60096.0], [97.5, 60102.0], [97.6, 60102.0], [97.7, 60102.0], [97.8, 60102.0], [97.9, 60102.0], [98.0, 60102.0], [98.1, 60102.0], [98.2, 60102.0], [98.3, 60102.0], [98.4, 60103.0], [98.5, 60103.0], [98.6, 60103.0], [98.7, 60103.0], [98.8, 60103.0], [98.9, 60103.0], [99.0, 60103.0], [99.1, 60103.0], [99.2, 60105.0], [99.3, 60105.0], [99.4, 60105.0], [99.5, 60105.0], [99.6, 60105.0], [99.7, 60105.0], [99.8, 60105.0], [99.9, 60105.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 14.0, "series": [{"data": [[1200.0, 1.0], [1900.0, 1.0], [2400.0, 1.0], [4600.0, 1.0], [5700.0, 1.0], [6300.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [8000.0, 1.0], [8500.0, 1.0], [8800.0, 2.0], [9400.0, 1.0], [10700.0, 1.0], [10500.0, 1.0], [11600.0, 2.0], [14200.0, 1.0], [14600.0, 1.0], [15700.0, 2.0], [16100.0, 1.0], [17200.0, 1.0], [17100.0, 1.0], [16800.0, 1.0], [17900.0, 1.0], [18400.0, 1.0], [18000.0, 1.0], [18300.0, 1.0], [19100.0, 1.0], [19300.0, 1.0], [19900.0, 1.0], [21900.0, 1.0], [21600.0, 1.0], [22700.0, 1.0], [22800.0, 2.0], [23000.0, 1.0], [24100.0, 1.0], [23800.0, 1.0], [23600.0, 1.0], [24000.0, 1.0], [24500.0, 1.0], [24400.0, 1.0], [24700.0, 1.0], [26600.0, 1.0], [26200.0, 1.0], [25700.0, 1.0], [28500.0, 1.0], [27700.0, 1.0], [27800.0, 1.0], [27900.0, 1.0], [29000.0, 1.0], [29600.0, 1.0], [30200.0, 1.0], [30400.0, 1.0], [29800.0, 1.0], [30500.0, 1.0], [31100.0, 2.0], [32200.0, 1.0], [35200.0, 1.0], [37900.0, 1.0], [37500.0, 1.0], [39300.0, 1.0], [40500.0, 1.0], [41600.0, 1.0], [42900.0, 1.0], [44500.0, 1.0], [44800.0, 1.0], [45400.0, 1.0], [47200.0, 1.0], [50400.0, 1.0], [51900.0, 1.0], [52500.0, 1.0], [53200.0, 1.0], [53600.0, 1.0], [54200.0, 1.0], [57300.0, 1.0], [55700.0, 1.0], [55400.0, 1.0], [56600.0, 2.0], [55500.0, 1.0], [57100.0, 1.0], [56400.0, 1.0], [56500.0, 1.0], [56800.0, 2.0], [58600.0, 1.0], [58500.0, 2.0], [57900.0, 2.0], [58000.0, 3.0], [59200.0, 1.0], [57400.0, 1.0], [57700.0, 1.0], [59400.0, 1.0], [60000.0, 14.0], [60100.0, 3.0], [59700.0, 1.0], [59600.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 103.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 103.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 16.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.857142857142857, "minX": 1.79151798E12, "maxY": 21.94736842105263, "series": [{"data": [[1.79151798E12, 2.857142857142857], [1.79151828E12, 19.52173913043478], [1.7915181E12, 8.478260869565217], [1.79151822E12, 21.94736842105263], [1.79151804E12, 6.8999999999999995], [1.79151834E12, 6.5], [1.79151816E12, 13.750000000000002]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151834E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11641.2, "minX": 1.0, "maxY": 60089.0, "series": [{"data": [[2.0, 20246.75], [8.0, 26891.125], [9.0, 31286.333333333332], [10.0, 28026.333333333336], [11.0, 24842.583333333336], [3.0, 11641.2], [12.0, 38272.333333333336], [13.0, 39396.333333333336], [14.0, 39572.0], [15.0, 56695.0], [4.0, 23515.5], [16.0, 56577.0], [1.0, 60089.0], [17.0, 47203.5], [18.0, 41969.4], [19.0, 55077.5], [5.0, 34487.5], [20.0, 54915.0], [21.0, 58833.0], [22.0, 54211.36363636363], [23.0, 54215.0], [6.0, 26400.333333333332], [7.0, 24438.714285714286]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[12.641666666666667, 36567.78333333333]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 23.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.5, "minX": 1.79151798E12, "maxY": 385.5, "series": [{"data": [[1.79151798E12, 22.5], [1.79151828E12, 71.45], [1.7915181E12, 73.63333333333334], [1.79151822E12, 61.3], [1.79151804E12, 64.46666666666667], [1.79151834E12, 37.4], [1.79151816E12, 51.63333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79151798E12, 147.58333333333334], [1.79151828E12, 383.6333333333333], [1.7915181E12, 385.5], [1.79151822E12, 378.1], [1.79151804E12, 353.23333333333335], [1.79151834E12, 222.51666666666668], [1.79151816E12, 340.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151834E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6457.428571428571, "minX": 1.79151798E12, "maxY": 58817.333333333336, "series": [{"data": [[1.79151798E12, 6457.428571428571], [1.79151828E12, 58640.65217391305], [1.7915181E12, 23909.347826086956], [1.79151822E12, 52084.52631578947], [1.79151804E12, 12931.199999999999], [1.79151834E12, 58817.333333333336], [1.79151816E12, 30640.25]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151834E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6457.428571428571, "minX": 1.79151798E12, "maxY": 58817.333333333336, "series": [{"data": [[1.79151798E12, 6457.428571428571], [1.79151828E12, 58640.608695652176], [1.7915181E12, 23909.260869565216], [1.79151822E12, 52084.52631578947], [1.79151804E12, 12931.15], [1.79151834E12, 58817.333333333336], [1.79151816E12, 30640.25]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151834E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.304347826086959, "minX": 1.79151798E12, "maxY": 12.571428571428571, "series": [{"data": [[1.79151798E12, 12.571428571428571], [1.79151828E12, 8.304347826086959], [1.7915181E12, 12.304347826086955], [1.79151822E12, 11.263157894736842], [1.79151804E12, 10.800000000000002], [1.79151834E12, 12.083333333333332], [1.79151816E12, 9.750000000000002]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151834E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1290.0, "minX": 1.79151798E12, "maxY": 60089.0, "series": [{"data": [[1.79151798E12, 14250.0], [1.79151828E12, 59759.0], [1.7915181E12, 31141.0], [1.79151822E12, 59499.0], [1.79151804E12, 24111.0], [1.79151834E12, 60089.0], [1.79151816E12, 40556.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79151798E12, 14250.0], [1.79151828E12, 59541.0], [1.7915181E12, 30847.8], [1.79151822E12, 58614.0], [1.79151804E12, 22274.60000000001], [1.79151834E12, 60089.0], [1.79151816E12, 39702.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79151798E12, 14250.0], [1.79151828E12, 59759.0], [1.7915181E12, 31141.0], [1.79151822E12, 59499.0], [1.79151804E12, 24111.0], [1.79151834E12, 60089.0], [1.79151816E12, 40556.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79151798E12, 14250.0], [1.79151828E12, 59759.0], [1.7915181E12, 31138.6], [1.79151822E12, 59499.0], [1.79151804E12, 24040.699999999997], [1.79151834E12, 60089.0], [1.79151816E12, 40556.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79151798E12, 1290.0], [1.79151828E12, 55594.0], [1.7915181E12, 16124.0], [1.79151822E12, 41643.0], [1.79151804E12, 4664.0], [1.79151834E12, 54217.0], [1.79151816E12, 23601.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79151798E12, 6900.0], [1.79151828E12, 57438.0], [1.7915181E12, 23089.0], [1.79151822E12, 53226.0], [1.79151804E12, 11643.0], [1.79151834E12, 57288.5], [1.79151816E12, 29351.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151834E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 28763.5, "minX": 1.0, "maxY": 60094.0, "series": [{"data": [[1.0, 28763.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60083.5], [2.0, 60094.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28763.5, "minX": 1.0, "maxY": 60094.0, "series": [{"data": [[1.0, 28763.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60083.5], [2.0, 60094.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.79151798E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.79151798E12, 0.16666666666666666], [1.79151828E12, 0.21666666666666667], [1.7915181E12, 0.3333333333333333], [1.79151822E12, 0.38333333333333336], [1.79151804E12, 0.4666666666666667], [1.79151816E12, 0.43333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151828E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.79151798E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.79151798E12, 0.11666666666666667], [1.79151828E12, 0.21666666666666667], [1.7915181E12, 0.38333333333333336], [1.79151822E12, 0.31666666666666665], [1.79151804E12, 0.3333333333333333], [1.79151834E12, 0.1], [1.79151816E12, 0.26666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79151828E12, 0.16666666666666666], [1.79151834E12, 0.1]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151834E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.79151798E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.79151798E12, 0.11666666666666667], [1.79151828E12, 0.21666666666666667], [1.7915181E12, 0.38333333333333336], [1.79151822E12, 0.31666666666666665], [1.79151804E12, 0.3333333333333333], [1.79151834E12, 0.1], [1.79151816E12, 0.26666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79151828E12, 0.16666666666666666], [1.79151834E12, 0.1]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151834E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.79151798E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.79151798E12, 0.11666666666666667], [1.79151828E12, 0.21666666666666667], [1.7915181E12, 0.38333333333333336], [1.79151822E12, 0.31666666666666665], [1.79151804E12, 0.3333333333333333], [1.79151834E12, 0.1], [1.79151816E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79151828E12, 0.16666666666666666], [1.79151834E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151834E12, "title": "Total Transactions Per Second"}},
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

