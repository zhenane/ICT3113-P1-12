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
        data: {"result": {"minY": 975.0, "minX": 0.0, "maxY": 69993.0, "series": [{"data": [[0.0, 975.0], [0.1, 975.0], [0.2, 975.0], [0.3, 975.0], [0.4, 975.0], [0.5, 975.0], [0.6, 975.0], [0.7, 975.0], [0.8, 975.0], [0.9, 975.0], [1.0, 975.0], [1.1, 975.0], [1.2, 975.0], [1.3, 975.0], [1.4, 975.0], [1.5, 975.0], [1.6, 975.0], [1.7, 975.0], [1.8, 975.0], [1.9, 975.0], [2.0, 975.0], [2.1, 975.0], [2.2, 975.0], [2.3, 975.0], [2.4, 975.0], [2.5, 975.0], [2.6, 975.0], [2.7, 975.0], [2.8, 975.0], [2.9, 975.0], [3.0, 975.0], [3.1, 975.0], [3.2, 975.0], [3.3, 975.0], [3.4, 2756.0], [3.5, 2756.0], [3.6, 2756.0], [3.7, 2756.0], [3.8, 2756.0], [3.9, 2756.0], [4.0, 2756.0], [4.1, 2756.0], [4.2, 2756.0], [4.3, 2756.0], [4.4, 2756.0], [4.5, 2756.0], [4.6, 2756.0], [4.7, 2756.0], [4.8, 2756.0], [4.9, 2756.0], [5.0, 2756.0], [5.1, 2756.0], [5.2, 2756.0], [5.3, 2756.0], [5.4, 2756.0], [5.5, 2756.0], [5.6, 2756.0], [5.7, 2756.0], [5.8, 2756.0], [5.9, 2756.0], [6.0, 2756.0], [6.1, 2756.0], [6.2, 2756.0], [6.3, 2756.0], [6.4, 2756.0], [6.5, 2756.0], [6.6, 2756.0], [6.7, 4465.0], [6.8, 4465.0], [6.9, 4465.0], [7.0, 4465.0], [7.1, 4465.0], [7.2, 4465.0], [7.3, 4465.0], [7.4, 4465.0], [7.5, 4465.0], [7.6, 4465.0], [7.7, 4465.0], [7.8, 4465.0], [7.9, 4465.0], [8.0, 4465.0], [8.1, 4465.0], [8.2, 4465.0], [8.3, 4465.0], [8.4, 4465.0], [8.5, 4465.0], [8.6, 4465.0], [8.7, 4465.0], [8.8, 4465.0], [8.9, 4465.0], [9.0, 4465.0], [9.1, 4465.0], [9.2, 4465.0], [9.3, 4465.0], [9.4, 4465.0], [9.5, 4465.0], [9.6, 4465.0], [9.7, 4465.0], [9.8, 4465.0], [9.9, 4465.0], [10.0, 5523.0], [10.1, 5523.0], [10.2, 5523.0], [10.3, 5523.0], [10.4, 5523.0], [10.5, 5523.0], [10.6, 5523.0], [10.7, 5523.0], [10.8, 5523.0], [10.9, 5523.0], [11.0, 5523.0], [11.1, 5523.0], [11.2, 5523.0], [11.3, 5523.0], [11.4, 5523.0], [11.5, 5523.0], [11.6, 5523.0], [11.7, 5523.0], [11.8, 5523.0], [11.9, 5523.0], [12.0, 5523.0], [12.1, 5523.0], [12.2, 5523.0], [12.3, 5523.0], [12.4, 5523.0], [12.5, 5523.0], [12.6, 5523.0], [12.7, 5523.0], [12.8, 5523.0], [12.9, 5523.0], [13.0, 5523.0], [13.1, 5523.0], [13.2, 5523.0], [13.3, 5523.0], [13.4, 8353.0], [13.5, 8353.0], [13.6, 8353.0], [13.7, 8353.0], [13.8, 8353.0], [13.9, 8353.0], [14.0, 8353.0], [14.1, 8353.0], [14.2, 8353.0], [14.3, 8353.0], [14.4, 8353.0], [14.5, 8353.0], [14.6, 8353.0], [14.7, 8353.0], [14.8, 8353.0], [14.9, 8353.0], [15.0, 8353.0], [15.1, 8353.0], [15.2, 8353.0], [15.3, 8353.0], [15.4, 8353.0], [15.5, 8353.0], [15.6, 8353.0], [15.7, 8353.0], [15.8, 8353.0], [15.9, 8353.0], [16.0, 8353.0], [16.1, 8353.0], [16.2, 8353.0], [16.3, 8353.0], [16.4, 8353.0], [16.5, 8353.0], [16.6, 8353.0], [16.7, 15867.0], [16.8, 15867.0], [16.9, 15867.0], [17.0, 15867.0], [17.1, 15867.0], [17.2, 15867.0], [17.3, 15867.0], [17.4, 15867.0], [17.5, 15867.0], [17.6, 15867.0], [17.7, 15867.0], [17.8, 15867.0], [17.9, 15867.0], [18.0, 15867.0], [18.1, 15867.0], [18.2, 15867.0], [18.3, 15867.0], [18.4, 15867.0], [18.5, 15867.0], [18.6, 15867.0], [18.7, 15867.0], [18.8, 15867.0], [18.9, 15867.0], [19.0, 15867.0], [19.1, 15867.0], [19.2, 15867.0], [19.3, 15867.0], [19.4, 15867.0], [19.5, 15867.0], [19.6, 15867.0], [19.7, 15867.0], [19.8, 15867.0], [19.9, 15867.0], [20.0, 19770.0], [20.1, 19770.0], [20.2, 19770.0], [20.3, 19770.0], [20.4, 19770.0], [20.5, 19770.0], [20.6, 19770.0], [20.7, 19770.0], [20.8, 19770.0], [20.9, 19770.0], [21.0, 19770.0], [21.1, 19770.0], [21.2, 19770.0], [21.3, 19770.0], [21.4, 19770.0], [21.5, 19770.0], [21.6, 19770.0], [21.7, 19770.0], [21.8, 19770.0], [21.9, 19770.0], [22.0, 19770.0], [22.1, 19770.0], [22.2, 19770.0], [22.3, 19770.0], [22.4, 19770.0], [22.5, 19770.0], [22.6, 19770.0], [22.7, 19770.0], [22.8, 19770.0], [22.9, 19770.0], [23.0, 19770.0], [23.1, 19770.0], [23.2, 19770.0], [23.3, 19770.0], [23.4, 24523.0], [23.5, 24523.0], [23.6, 24523.0], [23.7, 24523.0], [23.8, 24523.0], [23.9, 24523.0], [24.0, 24523.0], [24.1, 24523.0], [24.2, 24523.0], [24.3, 24523.0], [24.4, 24523.0], [24.5, 24523.0], [24.6, 24523.0], [24.7, 24523.0], [24.8, 24523.0], [24.9, 24523.0], [25.0, 24523.0], [25.1, 24523.0], [25.2, 24523.0], [25.3, 24523.0], [25.4, 24523.0], [25.5, 24523.0], [25.6, 24523.0], [25.7, 24523.0], [25.8, 24523.0], [25.9, 24523.0], [26.0, 24523.0], [26.1, 24523.0], [26.2, 24523.0], [26.3, 24523.0], [26.4, 24523.0], [26.5, 24523.0], [26.6, 24523.0], [26.7, 25014.0], [26.8, 25014.0], [26.9, 25014.0], [27.0, 25014.0], [27.1, 25014.0], [27.2, 25014.0], [27.3, 25014.0], [27.4, 25014.0], [27.5, 25014.0], [27.6, 25014.0], [27.7, 25014.0], [27.8, 25014.0], [27.9, 25014.0], [28.0, 25014.0], [28.1, 25014.0], [28.2, 25014.0], [28.3, 25014.0], [28.4, 25014.0], [28.5, 25014.0], [28.6, 25014.0], [28.7, 25014.0], [28.8, 25014.0], [28.9, 25014.0], [29.0, 25014.0], [29.1, 25014.0], [29.2, 25014.0], [29.3, 25014.0], [29.4, 25014.0], [29.5, 25014.0], [29.6, 25014.0], [29.7, 25014.0], [29.8, 25014.0], [29.9, 25014.0], [30.0, 25644.0], [30.1, 25644.0], [30.2, 25644.0], [30.3, 25644.0], [30.4, 25644.0], [30.5, 25644.0], [30.6, 25644.0], [30.7, 25644.0], [30.8, 25644.0], [30.9, 25644.0], [31.0, 25644.0], [31.1, 25644.0], [31.2, 25644.0], [31.3, 25644.0], [31.4, 25644.0], [31.5, 25644.0], [31.6, 25644.0], [31.7, 25644.0], [31.8, 25644.0], [31.9, 25644.0], [32.0, 25644.0], [32.1, 25644.0], [32.2, 25644.0], [32.3, 25644.0], [32.4, 25644.0], [32.5, 25644.0], [32.6, 25644.0], [32.7, 25644.0], [32.8, 25644.0], [32.9, 25644.0], [33.0, 25644.0], [33.1, 25644.0], [33.2, 25644.0], [33.3, 25644.0], [33.4, 26926.0], [33.5, 26926.0], [33.6, 26926.0], [33.7, 26926.0], [33.8, 26926.0], [33.9, 26926.0], [34.0, 26926.0], [34.1, 26926.0], [34.2, 26926.0], [34.3, 26926.0], [34.4, 26926.0], [34.5, 26926.0], [34.6, 26926.0], [34.7, 26926.0], [34.8, 26926.0], [34.9, 26926.0], [35.0, 26926.0], [35.1, 26926.0], [35.2, 26926.0], [35.3, 26926.0], [35.4, 26926.0], [35.5, 26926.0], [35.6, 26926.0], [35.7, 26926.0], [35.8, 26926.0], [35.9, 26926.0], [36.0, 26926.0], [36.1, 26926.0], [36.2, 26926.0], [36.3, 26926.0], [36.4, 26926.0], [36.5, 26926.0], [36.6, 26926.0], [36.7, 27502.0], [36.8, 27502.0], [36.9, 27502.0], [37.0, 27502.0], [37.1, 27502.0], [37.2, 27502.0], [37.3, 27502.0], [37.4, 27502.0], [37.5, 27502.0], [37.6, 27502.0], [37.7, 27502.0], [37.8, 27502.0], [37.9, 27502.0], [38.0, 27502.0], [38.1, 27502.0], [38.2, 27502.0], [38.3, 27502.0], [38.4, 27502.0], [38.5, 27502.0], [38.6, 27502.0], [38.7, 27502.0], [38.8, 27502.0], [38.9, 27502.0], [39.0, 27502.0], [39.1, 27502.0], [39.2, 27502.0], [39.3, 27502.0], [39.4, 27502.0], [39.5, 27502.0], [39.6, 27502.0], [39.7, 27502.0], [39.8, 27502.0], [39.9, 27502.0], [40.0, 28733.0], [40.1, 28733.0], [40.2, 28733.0], [40.3, 28733.0], [40.4, 28733.0], [40.5, 28733.0], [40.6, 28733.0], [40.7, 28733.0], [40.8, 28733.0], [40.9, 28733.0], [41.0, 28733.0], [41.1, 28733.0], [41.2, 28733.0], [41.3, 28733.0], [41.4, 28733.0], [41.5, 28733.0], [41.6, 28733.0], [41.7, 28733.0], [41.8, 28733.0], [41.9, 28733.0], [42.0, 28733.0], [42.1, 28733.0], [42.2, 28733.0], [42.3, 28733.0], [42.4, 28733.0], [42.5, 28733.0], [42.6, 28733.0], [42.7, 28733.0], [42.8, 28733.0], [42.9, 28733.0], [43.0, 28733.0], [43.1, 28733.0], [43.2, 28733.0], [43.3, 28733.0], [43.4, 32894.0], [43.5, 32894.0], [43.6, 32894.0], [43.7, 32894.0], [43.8, 32894.0], [43.9, 32894.0], [44.0, 32894.0], [44.1, 32894.0], [44.2, 32894.0], [44.3, 32894.0], [44.4, 32894.0], [44.5, 32894.0], [44.6, 32894.0], [44.7, 32894.0], [44.8, 32894.0], [44.9, 32894.0], [45.0, 32894.0], [45.1, 32894.0], [45.2, 32894.0], [45.3, 32894.0], [45.4, 32894.0], [45.5, 32894.0], [45.6, 32894.0], [45.7, 32894.0], [45.8, 32894.0], [45.9, 32894.0], [46.0, 32894.0], [46.1, 32894.0], [46.2, 32894.0], [46.3, 32894.0], [46.4, 32894.0], [46.5, 32894.0], [46.6, 32894.0], [46.7, 32959.0], [46.8, 32959.0], [46.9, 32959.0], [47.0, 32959.0], [47.1, 32959.0], [47.2, 32959.0], [47.3, 32959.0], [47.4, 32959.0], [47.5, 32959.0], [47.6, 32959.0], [47.7, 32959.0], [47.8, 32959.0], [47.9, 32959.0], [48.0, 32959.0], [48.1, 32959.0], [48.2, 32959.0], [48.3, 32959.0], [48.4, 32959.0], [48.5, 32959.0], [48.6, 32959.0], [48.7, 32959.0], [48.8, 32959.0], [48.9, 32959.0], [49.0, 32959.0], [49.1, 32959.0], [49.2, 32959.0], [49.3, 32959.0], [49.4, 32959.0], [49.5, 32959.0], [49.6, 32959.0], [49.7, 32959.0], [49.8, 32959.0], [49.9, 32959.0], [50.0, 32959.0], [50.1, 43169.0], [50.2, 43169.0], [50.3, 43169.0], [50.4, 43169.0], [50.5, 43169.0], [50.6, 43169.0], [50.7, 43169.0], [50.8, 43169.0], [50.9, 43169.0], [51.0, 43169.0], [51.1, 43169.0], [51.2, 43169.0], [51.3, 43169.0], [51.4, 43169.0], [51.5, 43169.0], [51.6, 43169.0], [51.7, 43169.0], [51.8, 43169.0], [51.9, 43169.0], [52.0, 43169.0], [52.1, 43169.0], [52.2, 43169.0], [52.3, 43169.0], [52.4, 43169.0], [52.5, 43169.0], [52.6, 43169.0], [52.7, 43169.0], [52.8, 43169.0], [52.9, 43169.0], [53.0, 43169.0], [53.1, 43169.0], [53.2, 43169.0], [53.3, 43169.0], [53.4, 43777.0], [53.5, 43777.0], [53.6, 43777.0], [53.7, 43777.0], [53.8, 43777.0], [53.9, 43777.0], [54.0, 43777.0], [54.1, 43777.0], [54.2, 43777.0], [54.3, 43777.0], [54.4, 43777.0], [54.5, 43777.0], [54.6, 43777.0], [54.7, 43777.0], [54.8, 43777.0], [54.9, 43777.0], [55.0, 43777.0], [55.1, 43777.0], [55.2, 43777.0], [55.3, 43777.0], [55.4, 43777.0], [55.5, 43777.0], [55.6, 43777.0], [55.7, 43777.0], [55.8, 43777.0], [55.9, 43777.0], [56.0, 43777.0], [56.1, 43777.0], [56.2, 43777.0], [56.3, 43777.0], [56.4, 43777.0], [56.5, 43777.0], [56.6, 43777.0], [56.7, 47392.0], [56.8, 47392.0], [56.9, 47392.0], [57.0, 47392.0], [57.1, 47392.0], [57.2, 47392.0], [57.3, 47392.0], [57.4, 47392.0], [57.5, 47392.0], [57.6, 47392.0], [57.7, 47392.0], [57.8, 47392.0], [57.9, 47392.0], [58.0, 47392.0], [58.1, 47392.0], [58.2, 47392.0], [58.3, 47392.0], [58.4, 47392.0], [58.5, 47392.0], [58.6, 47392.0], [58.7, 47392.0], [58.8, 47392.0], [58.9, 47392.0], [59.0, 47392.0], [59.1, 47392.0], [59.2, 47392.0], [59.3, 47392.0], [59.4, 47392.0], [59.5, 47392.0], [59.6, 47392.0], [59.7, 47392.0], [59.8, 47392.0], [59.9, 47392.0], [60.0, 47392.0], [60.1, 49057.0], [60.2, 49057.0], [60.3, 49057.0], [60.4, 49057.0], [60.5, 49057.0], [60.6, 49057.0], [60.7, 49057.0], [60.8, 49057.0], [60.9, 49057.0], [61.0, 49057.0], [61.1, 49057.0], [61.2, 49057.0], [61.3, 49057.0], [61.4, 49057.0], [61.5, 49057.0], [61.6, 49057.0], [61.7, 49057.0], [61.8, 49057.0], [61.9, 49057.0], [62.0, 49057.0], [62.1, 49057.0], [62.2, 49057.0], [62.3, 49057.0], [62.4, 49057.0], [62.5, 49057.0], [62.6, 49057.0], [62.7, 49057.0], [62.8, 49057.0], [62.9, 49057.0], [63.0, 49057.0], [63.1, 49057.0], [63.2, 49057.0], [63.3, 49057.0], [63.4, 58029.0], [63.5, 58029.0], [63.6, 58029.0], [63.7, 58029.0], [63.8, 58029.0], [63.9, 58029.0], [64.0, 58029.0], [64.1, 58029.0], [64.2, 58029.0], [64.3, 58029.0], [64.4, 58029.0], [64.5, 58029.0], [64.6, 58029.0], [64.7, 58029.0], [64.8, 58029.0], [64.9, 58029.0], [65.0, 58029.0], [65.1, 58029.0], [65.2, 58029.0], [65.3, 58029.0], [65.4, 58029.0], [65.5, 58029.0], [65.6, 58029.0], [65.7, 58029.0], [65.8, 58029.0], [65.9, 58029.0], [66.0, 58029.0], [66.1, 58029.0], [66.2, 58029.0], [66.3, 58029.0], [66.4, 58029.0], [66.5, 58029.0], [66.6, 58029.0], [66.7, 58543.0], [66.8, 58543.0], [66.9, 58543.0], [67.0, 58543.0], [67.1, 58543.0], [67.2, 58543.0], [67.3, 58543.0], [67.4, 58543.0], [67.5, 58543.0], [67.6, 58543.0], [67.7, 58543.0], [67.8, 58543.0], [67.9, 58543.0], [68.0, 58543.0], [68.1, 58543.0], [68.2, 58543.0], [68.3, 58543.0], [68.4, 58543.0], [68.5, 58543.0], [68.6, 58543.0], [68.7, 58543.0], [68.8, 58543.0], [68.9, 58543.0], [69.0, 58543.0], [69.1, 58543.0], [69.2, 58543.0], [69.3, 58543.0], [69.4, 58543.0], [69.5, 58543.0], [69.6, 58543.0], [69.7, 58543.0], [69.8, 58543.0], [69.9, 58543.0], [70.0, 58543.0], [70.1, 60069.0], [70.2, 60069.0], [70.3, 60069.0], [70.4, 60069.0], [70.5, 60069.0], [70.6, 60069.0], [70.7, 60069.0], [70.8, 60069.0], [70.9, 60069.0], [71.0, 60069.0], [71.1, 60069.0], [71.2, 60069.0], [71.3, 60069.0], [71.4, 60069.0], [71.5, 60069.0], [71.6, 60069.0], [71.7, 60069.0], [71.8, 60069.0], [71.9, 60069.0], [72.0, 60069.0], [72.1, 60069.0], [72.2, 60069.0], [72.3, 60069.0], [72.4, 60069.0], [72.5, 60069.0], [72.6, 60069.0], [72.7, 60069.0], [72.8, 60069.0], [72.9, 60069.0], [73.0, 60069.0], [73.1, 60069.0], [73.2, 60069.0], [73.3, 60069.0], [73.4, 61774.0], [73.5, 61774.0], [73.6, 61774.0], [73.7, 61774.0], [73.8, 61774.0], [73.9, 61774.0], [74.0, 61774.0], [74.1, 61774.0], [74.2, 61774.0], [74.3, 61774.0], [74.4, 61774.0], [74.5, 61774.0], [74.6, 61774.0], [74.7, 61774.0], [74.8, 61774.0], [74.9, 61774.0], [75.0, 61774.0], [75.1, 61774.0], [75.2, 61774.0], [75.3, 61774.0], [75.4, 61774.0], [75.5, 61774.0], [75.6, 61774.0], [75.7, 61774.0], [75.8, 61774.0], [75.9, 61774.0], [76.0, 61774.0], [76.1, 61774.0], [76.2, 61774.0], [76.3, 61774.0], [76.4, 61774.0], [76.5, 61774.0], [76.6, 61774.0], [76.7, 61931.0], [76.8, 61931.0], [76.9, 61931.0], [77.0, 61931.0], [77.1, 61931.0], [77.2, 61931.0], [77.3, 61931.0], [77.4, 61931.0], [77.5, 61931.0], [77.6, 61931.0], [77.7, 61931.0], [77.8, 61931.0], [77.9, 61931.0], [78.0, 61931.0], [78.1, 61931.0], [78.2, 61931.0], [78.3, 61931.0], [78.4, 61931.0], [78.5, 61931.0], [78.6, 61931.0], [78.7, 61931.0], [78.8, 61931.0], [78.9, 61931.0], [79.0, 61931.0], [79.1, 61931.0], [79.2, 61931.0], [79.3, 61931.0], [79.4, 61931.0], [79.5, 61931.0], [79.6, 61931.0], [79.7, 61931.0], [79.8, 61931.0], [79.9, 61931.0], [80.0, 62086.0], [80.1, 62086.0], [80.2, 62086.0], [80.3, 62086.0], [80.4, 62086.0], [80.5, 62086.0], [80.6, 62086.0], [80.7, 62086.0], [80.8, 62086.0], [80.9, 62086.0], [81.0, 62086.0], [81.1, 62086.0], [81.2, 62086.0], [81.3, 62086.0], [81.4, 62086.0], [81.5, 62086.0], [81.6, 62086.0], [81.7, 62086.0], [81.8, 62086.0], [81.9, 62086.0], [82.0, 62086.0], [82.1, 62086.0], [82.2, 62086.0], [82.3, 62086.0], [82.4, 62086.0], [82.5, 62086.0], [82.6, 62086.0], [82.7, 62086.0], [82.8, 62086.0], [82.9, 62086.0], [83.0, 62086.0], [83.1, 62086.0], [83.2, 62086.0], [83.3, 62086.0], [83.4, 62254.0], [83.5, 62254.0], [83.6, 62254.0], [83.7, 62254.0], [83.8, 62254.0], [83.9, 62254.0], [84.0, 62254.0], [84.1, 62254.0], [84.2, 62254.0], [84.3, 62254.0], [84.4, 62254.0], [84.5, 62254.0], [84.6, 62254.0], [84.7, 62254.0], [84.8, 62254.0], [84.9, 62254.0], [85.0, 62254.0], [85.1, 62254.0], [85.2, 62254.0], [85.3, 62254.0], [85.4, 62254.0], [85.5, 62254.0], [85.6, 62254.0], [85.7, 62254.0], [85.8, 62254.0], [85.9, 62254.0], [86.0, 62254.0], [86.1, 62254.0], [86.2, 62254.0], [86.3, 62254.0], [86.4, 62254.0], [86.5, 62254.0], [86.6, 62254.0], [86.7, 63364.0], [86.8, 63364.0], [86.9, 63364.0], [87.0, 63364.0], [87.1, 63364.0], [87.2, 63364.0], [87.3, 63364.0], [87.4, 63364.0], [87.5, 63364.0], [87.6, 63364.0], [87.7, 63364.0], [87.8, 63364.0], [87.9, 63364.0], [88.0, 63364.0], [88.1, 63364.0], [88.2, 63364.0], [88.3, 63364.0], [88.4, 63364.0], [88.5, 63364.0], [88.6, 63364.0], [88.7, 63364.0], [88.8, 63364.0], [88.9, 63364.0], [89.0, 63364.0], [89.1, 63364.0], [89.2, 63364.0], [89.3, 63364.0], [89.4, 63364.0], [89.5, 63364.0], [89.6, 63364.0], [89.7, 63364.0], [89.8, 63364.0], [89.9, 63364.0], [90.0, 65565.0], [90.1, 65565.0], [90.2, 65565.0], [90.3, 65565.0], [90.4, 65565.0], [90.5, 65565.0], [90.6, 65565.0], [90.7, 65565.0], [90.8, 65565.0], [90.9, 65565.0], [91.0, 65565.0], [91.1, 65565.0], [91.2, 65565.0], [91.3, 65565.0], [91.4, 65565.0], [91.5, 65565.0], [91.6, 65565.0], [91.7, 65565.0], [91.8, 65565.0], [91.9, 65565.0], [92.0, 65565.0], [92.1, 65565.0], [92.2, 65565.0], [92.3, 65565.0], [92.4, 65565.0], [92.5, 65565.0], [92.6, 65565.0], [92.7, 65565.0], [92.8, 65565.0], [92.9, 65565.0], [93.0, 65565.0], [93.1, 65565.0], [93.2, 65565.0], [93.3, 65565.0], [93.4, 69481.0], [93.5, 69481.0], [93.6, 69481.0], [93.7, 69481.0], [93.8, 69481.0], [93.9, 69481.0], [94.0, 69481.0], [94.1, 69481.0], [94.2, 69481.0], [94.3, 69481.0], [94.4, 69481.0], [94.5, 69481.0], [94.6, 69481.0], [94.7, 69481.0], [94.8, 69481.0], [94.9, 69481.0], [95.0, 69481.0], [95.1, 69481.0], [95.2, 69481.0], [95.3, 69481.0], [95.4, 69481.0], [95.5, 69481.0], [95.6, 69481.0], [95.7, 69481.0], [95.8, 69481.0], [95.9, 69481.0], [96.0, 69481.0], [96.1, 69481.0], [96.2, 69481.0], [96.3, 69481.0], [96.4, 69481.0], [96.5, 69481.0], [96.6, 69481.0], [96.7, 69993.0], [96.8, 69993.0], [96.9, 69993.0], [97.0, 69993.0], [97.1, 69993.0], [97.2, 69993.0], [97.3, 69993.0], [97.4, 69993.0], [97.5, 69993.0], [97.6, 69993.0], [97.7, 69993.0], [97.8, 69993.0], [97.9, 69993.0], [98.0, 69993.0], [98.1, 69993.0], [98.2, 69993.0], [98.3, 69993.0], [98.4, 69993.0], [98.5, 69993.0], [98.6, 69993.0], [98.7, 69993.0], [98.8, 69993.0], [98.9, 69993.0], [99.0, 69993.0], [99.1, 69993.0], [99.2, 69993.0], [99.3, 69993.0], [99.4, 69993.0], [99.5, 69993.0], [99.6, 69993.0], [99.7, 69993.0], [99.8, 69993.0], [99.9, 69993.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 1.0, "series": [{"data": [[8300.0, 1.0], [900.0, 1.0], [15800.0, 1.0], [19700.0, 1.0], [24500.0, 1.0], [25000.0, 1.0], [25600.0, 1.0], [26900.0, 1.0], [27500.0, 1.0], [28700.0, 1.0], [32900.0, 1.0], [32800.0, 1.0], [43100.0, 1.0], [2700.0, 1.0], [43700.0, 1.0], [47300.0, 1.0], [49000.0, 1.0], [58000.0, 1.0], [58500.0, 1.0], [60000.0, 1.0], [63300.0, 1.0], [61900.0, 1.0], [61700.0, 1.0], [62200.0, 1.0], [62000.0, 1.0], [65500.0, 1.0], [69400.0, 1.0], [69900.0, 1.0], [4400.0, 1.0], [5500.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 69900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 22.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79544876E12, "maxY": 2.5, "series": [{"data": [[1.79544906E12, 1.0], [1.79544936E12, 2.0], [1.79544972E12, 2.0], [1.79544942E12, 2.0], [1.79544876E12, 1.0], [1.7954496E12, 1.5], [1.7954493E12, 1.0], [1.79544996E12, 2.0], [1.79544966E12, 1.0], [1.795449E12, 1.0], [1.79544984E12, 2.5], [1.79544954E12, 1.0], [1.79544888E12, 2.0], [1.79544894E12, 1.3333333333333333], [1.7954499E12, 2.0], [1.79544924E12, 1.0], [1.79544882E12, 2.0], [1.79544978E12, 1.0], [1.79544948E12, 1.0]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 36851.50000000001, "minX": 1.0, "maxY": 53902.333333333336, "series": [{"data": [[1.0, 36851.50000000001], [2.0, 37005.18181818181], [3.0, 53902.333333333336]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.5666666666666669, 38612.93333333334]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2.9833333333333334, "minX": 1.79544876E12, "maxY": 63.05, "series": [{"data": [[1.79544906E12, 3.1166666666666667], [1.79544936E12, 6.216666666666667], [1.79544972E12, 3.2333333333333334], [1.79544942E12, 3.1166666666666667], [1.79544876E12, 6.316666666666666], [1.7954496E12, 6.083333333333333], [1.7954493E12, 3.033333333333333], [1.79544996E12, 9.2], [1.79544966E12, 3.216666666666667], [1.795449E12, 3.1], [1.79544984E12, 6.45], [1.79544954E12, 3.1], [1.79544888E12, 6.1], [1.79544894E12, 9.2], [1.7954499E12, 6.166666666666667], [1.79544924E12, 6.133333333333334], [1.79544882E12, 2.9833333333333334], [1.79544978E12, 3.033333333333333], [1.79544948E12, 2.9833333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79544906E12, 12.616666666666667], [1.79544936E12, 45.95], [1.79544972E12, 13.466666666666667], [1.79544942E12, 25.8], [1.79544876E12, 30.666666666666668], [1.7954496E12, 42.333333333333336], [1.7954493E12, 31.683333333333334], [1.79544996E12, 59.8], [1.79544966E12, 11.25], [1.795449E12, 8.783333333333333], [1.79544984E12, 38.0], [1.79544954E12, 17.666666666666668], [1.79544888E12, 63.05], [1.79544894E12, 49.06666666666667], [1.7954499E12, 41.45], [1.79544924E12, 36.1], [1.79544882E12, 17.883333333333333], [1.79544978E12, 8.216666666666667], [1.79544948E12, 8.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12646.5, "minX": 1.79544876E12, "maxY": 65565.0, "series": [{"data": [[1.79544906E12, 15867.0], [1.79544936E12, 16599.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 16967.0], [1.7954496E12, 35303.5], [1.7954493E12, 27502.0], [1.79544996E12, 63878.666666666664], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 48224.5], [1.79544954E12, 25014.0], [1.79544888E12, 56581.0], [1.79544894E12, 40905.33333333333], [1.7954499E12, 12646.5], [1.79544924E12, 26285.0], [1.79544882E12, 63364.0], [1.79544978E12, 58543.0], [1.79544948E12, 61774.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 12646.5, "minX": 1.79544876E12, "maxY": 65565.0, "series": [{"data": [[1.79544906E12, 15867.0], [1.79544936E12, 16599.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 16967.0], [1.7954496E12, 35303.0], [1.7954493E12, 27502.0], [1.79544996E12, 63878.666666666664], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 48224.5], [1.79544954E12, 25014.0], [1.79544888E12, 56581.0], [1.79544894E12, 40905.33333333333], [1.7954499E12, 12646.5], [1.79544924E12, 26285.0], [1.79544882E12, 63364.0], [1.79544978E12, 58543.0], [1.79544948E12, 61774.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.79544876E12, "maxY": 25.0, "series": [{"data": [[1.79544906E12, 18.0], [1.79544936E12, 10.0], [1.79544972E12, 18.0], [1.79544942E12, 25.0], [1.79544876E12, 16.0], [1.7954496E12, 9.0], [1.7954493E12, 10.0], [1.79544996E12, 12.0], [1.79544966E12, 16.0], [1.795449E12, 10.0], [1.79544984E12, 9.0], [1.79544954E12, 15.0], [1.79544888E12, 8.0], [1.79544894E12, 8.666666666666666], [1.7954499E12, 15.0], [1.79544924E12, 8.0], [1.79544882E12, 8.0], [1.79544978E12, 9.0], [1.79544948E12, 15.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 975.0, "minX": 1.79544876E12, "maxY": 65565.0, "series": [{"data": [[1.79544906E12, 15867.0], [1.79544936E12, 28733.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 32959.0], [1.7954496E12, 8353.0], [1.7954493E12, 27502.0], [1.79544996E12, 60069.0], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 49057.0], [1.79544954E12, 25014.0], [1.79544888E12, 43169.0], [1.79544894E12, 58029.0], [1.7954499E12, 19770.0], [1.79544924E12, 26926.0], [1.79544978E12, 58543.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79544906E12, 15867.0], [1.79544936E12, 28733.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 32959.0], [1.7954496E12, 8353.0], [1.7954493E12, 27502.0], [1.79544996E12, 60069.0], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 49057.0], [1.79544954E12, 25014.0], [1.79544888E12, 43169.0], [1.79544894E12, 58029.0], [1.7954499E12, 19770.0], [1.79544924E12, 26926.0], [1.79544978E12, 58543.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79544906E12, 15867.0], [1.79544936E12, 28733.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 32959.0], [1.7954496E12, 8353.0], [1.7954493E12, 27502.0], [1.79544996E12, 60069.0], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 49057.0], [1.79544954E12, 25014.0], [1.79544888E12, 43169.0], [1.79544894E12, 58029.0], [1.7954499E12, 19770.0], [1.79544924E12, 26926.0], [1.79544978E12, 58543.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79544906E12, 15867.0], [1.79544936E12, 28733.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 32959.0], [1.7954496E12, 8353.0], [1.7954493E12, 27502.0], [1.79544996E12, 60069.0], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 49057.0], [1.79544954E12, 25014.0], [1.79544888E12, 43169.0], [1.79544894E12, 58029.0], [1.7954499E12, 19770.0], [1.79544924E12, 26926.0], [1.79544978E12, 58543.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79544906E12, 15867.0], [1.79544936E12, 4465.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 975.0], [1.7954496E12, 8353.0], [1.7954493E12, 27502.0], [1.79544996E12, 60069.0], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 47392.0], [1.79544954E12, 25014.0], [1.79544888E12, 43169.0], [1.79544894E12, 2756.0], [1.7954499E12, 5523.0], [1.79544924E12, 25644.0], [1.79544978E12, 58543.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79544906E12, 15867.0], [1.79544936E12, 16599.0], [1.79544972E12, 43777.0], [1.79544942E12, 65565.0], [1.79544876E12, 16967.0], [1.7954496E12, 8353.0], [1.7954493E12, 27502.0], [1.79544996E12, 60069.0], [1.79544966E12, 32894.0], [1.795449E12, 24523.0], [1.79544984E12, 48224.5], [1.79544954E12, 25014.0], [1.79544888E12, 43169.0], [1.79544894E12, 30392.5], [1.7954499E12, 12646.5], [1.79544924E12, 26285.0], [1.79544978E12, 58543.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 27502.0, "minX": 1.0, "maxY": 62254.0, "series": [{"data": [[1.0, 27502.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 62254.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 27502.0, "minX": 1.0, "maxY": 62253.0, "series": [{"data": [[1.0, 27502.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 62253.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7954487E12, "maxY": 0.05, "series": [{"data": [[1.79544906E12, 0.016666666666666666], [1.79544936E12, 0.05], [1.79544972E12, 0.016666666666666666], [1.79544942E12, 0.016666666666666666], [1.79544876E12, 0.05], [1.7954496E12, 0.016666666666666666], [1.7954493E12, 0.016666666666666666], [1.7954487E12, 0.016666666666666666], [1.79544966E12, 0.03333333333333333], [1.795449E12, 0.016666666666666666], [1.79544984E12, 0.05], [1.79544954E12, 0.016666666666666666], [1.79544888E12, 0.05], [1.79544894E12, 0.016666666666666666], [1.7954499E12, 0.05], [1.79544924E12, 0.016666666666666666], [1.79544978E12, 0.016666666666666666], [1.79544948E12, 0.016666666666666666], [1.79544918E12, 0.016666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7954499E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79544876E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.79544906E12, 0.016666666666666666], [1.79544936E12, 0.03333333333333333], [1.79544972E12, 0.016666666666666666], [1.79544942E12, 0.016666666666666666], [1.79544876E12, 0.03333333333333333], [1.7954496E12, 0.016666666666666666], [1.7954493E12, 0.016666666666666666], [1.79544996E12, 0.016666666666666666], [1.79544966E12, 0.016666666666666666], [1.795449E12, 0.016666666666666666], [1.79544984E12, 0.03333333333333333], [1.79544954E12, 0.016666666666666666], [1.79544888E12, 0.016666666666666666], [1.79544894E12, 0.03333333333333333], [1.7954499E12, 0.03333333333333333], [1.79544924E12, 0.03333333333333333], [1.79544978E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79544888E12, 0.016666666666666666], [1.79544894E12, 0.016666666666666666], [1.7954496E12, 0.016666666666666666], [1.79544882E12, 0.016666666666666666], [1.79544948E12, 0.016666666666666666], [1.79544996E12, 0.03333333333333333]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79544996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79544876E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.79544906E12, 0.016666666666666666], [1.79544936E12, 0.03333333333333333], [1.79544972E12, 0.016666666666666666], [1.79544942E12, 0.016666666666666666], [1.79544876E12, 0.03333333333333333], [1.7954496E12, 0.016666666666666666], [1.7954493E12, 0.016666666666666666], [1.79544996E12, 0.016666666666666666], [1.79544966E12, 0.016666666666666666], [1.795449E12, 0.016666666666666666], [1.79544984E12, 0.03333333333333333], [1.79544954E12, 0.016666666666666666], [1.79544888E12, 0.016666666666666666], [1.79544894E12, 0.03333333333333333], [1.7954499E12, 0.03333333333333333], [1.79544924E12, 0.03333333333333333], [1.79544978E12, 0.016666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79544888E12, 0.016666666666666666], [1.79544894E12, 0.016666666666666666], [1.7954496E12, 0.016666666666666666], [1.79544882E12, 0.016666666666666666], [1.79544948E12, 0.016666666666666666], [1.79544996E12, 0.03333333333333333]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79544876E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.79544906E12, 0.016666666666666666], [1.79544936E12, 0.03333333333333333], [1.79544972E12, 0.016666666666666666], [1.79544942E12, 0.016666666666666666], [1.79544876E12, 0.03333333333333333], [1.7954496E12, 0.016666666666666666], [1.7954493E12, 0.016666666666666666], [1.79544996E12, 0.016666666666666666], [1.79544966E12, 0.016666666666666666], [1.795449E12, 0.016666666666666666], [1.79544984E12, 0.03333333333333333], [1.79544954E12, 0.016666666666666666], [1.79544888E12, 0.016666666666666666], [1.79544894E12, 0.03333333333333333], [1.7954499E12, 0.03333333333333333], [1.79544924E12, 0.03333333333333333], [1.79544978E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79544888E12, 0.016666666666666666], [1.79544894E12, 0.016666666666666666], [1.7954496E12, 0.016666666666666666], [1.79544882E12, 0.016666666666666666], [1.79544948E12, 0.016666666666666666], [1.79544996E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79544996E12, "title": "Total Transactions Per Second"}},
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

