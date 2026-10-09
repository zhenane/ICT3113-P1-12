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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 11040.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 182.0], [0.3, 182.0], [0.4, 182.0], [0.5, 182.0], [0.6, 182.0], [0.7, 182.0], [0.8, 182.0], [0.9, 182.0], [1.0, 185.0], [1.1, 185.0], [1.2, 185.0], [1.3, 185.0], [1.4, 185.0], [1.5, 185.0], [1.6, 185.0], [1.7, 185.0], [1.8, 185.0], [1.9, 185.0], [2.0, 188.0], [2.1, 188.0], [2.2, 188.0], [2.3, 188.0], [2.4, 188.0], [2.5, 188.0], [2.6, 188.0], [2.7, 188.0], [2.8, 188.0], [2.9, 188.0], [3.0, 190.0], [3.1, 190.0], [3.2, 190.0], [3.3, 190.0], [3.4, 190.0], [3.5, 190.0], [3.6, 190.0], [3.7, 190.0], [3.8, 190.0], [3.9, 190.0], [4.0, 192.0], [4.1, 192.0], [4.2, 192.0], [4.3, 192.0], [4.4, 192.0], [4.5, 192.0], [4.6, 192.0], [4.7, 192.0], [4.8, 192.0], [4.9, 192.0], [5.0, 192.0], [5.1, 192.0], [5.2, 192.0], [5.3, 192.0], [5.4, 192.0], [5.5, 192.0], [5.6, 192.0], [5.7, 192.0], [5.8, 192.0], [5.9, 192.0], [6.0, 193.0], [6.1, 193.0], [6.2, 193.0], [6.3, 193.0], [6.4, 193.0], [6.5, 193.0], [6.6, 193.0], [6.7, 193.0], [6.8, 193.0], [6.9, 193.0], [7.0, 193.0], [7.1, 193.0], [7.2, 193.0], [7.3, 193.0], [7.4, 193.0], [7.5, 193.0], [7.6, 193.0], [7.7, 193.0], [7.8, 193.0], [7.9, 193.0], [8.0, 200.0], [8.1, 200.0], [8.2, 200.0], [8.3, 200.0], [8.4, 200.0], [8.5, 200.0], [8.6, 200.0], [8.7, 200.0], [8.8, 200.0], [8.9, 200.0], [9.0, 200.0], [9.1, 200.0], [9.2, 200.0], [9.3, 200.0], [9.4, 200.0], [9.5, 200.0], [9.6, 200.0], [9.7, 200.0], [9.8, 200.0], [9.9, 200.0], [10.0, 206.0], [10.1, 206.0], [10.2, 206.0], [10.3, 206.0], [10.4, 206.0], [10.5, 206.0], [10.6, 206.0], [10.7, 206.0], [10.8, 206.0], [10.9, 206.0], [11.0, 208.0], [11.1, 208.0], [11.2, 208.0], [11.3, 208.0], [11.4, 208.0], [11.5, 208.0], [11.6, 208.0], [11.7, 208.0], [11.8, 208.0], [11.9, 208.0], [12.0, 210.0], [12.1, 210.0], [12.2, 210.0], [12.3, 210.0], [12.4, 210.0], [12.5, 210.0], [12.6, 210.0], [12.7, 210.0], [12.8, 210.0], [12.9, 210.0], [13.0, 210.0], [13.1, 210.0], [13.2, 210.0], [13.3, 210.0], [13.4, 210.0], [13.5, 210.0], [13.6, 210.0], [13.7, 210.0], [13.8, 210.0], [13.9, 210.0], [14.0, 216.0], [14.1, 216.0], [14.2, 216.0], [14.3, 216.0], [14.4, 216.0], [14.5, 216.0], [14.6, 216.0], [14.7, 216.0], [14.8, 216.0], [14.9, 216.0], [15.0, 217.0], [15.1, 217.0], [15.2, 217.0], [15.3, 217.0], [15.4, 217.0], [15.5, 217.0], [15.6, 217.0], [15.7, 217.0], [15.8, 217.0], [15.9, 217.0], [16.0, 234.0], [16.1, 234.0], [16.2, 234.0], [16.3, 234.0], [16.4, 234.0], [16.5, 234.0], [16.6, 234.0], [16.7, 234.0], [16.8, 234.0], [16.9, 234.0], [17.0, 238.0], [17.1, 238.0], [17.2, 238.0], [17.3, 238.0], [17.4, 238.0], [17.5, 238.0], [17.6, 238.0], [17.7, 238.0], [17.8, 238.0], [17.9, 238.0], [18.0, 238.0], [18.1, 238.0], [18.2, 238.0], [18.3, 238.0], [18.4, 238.0], [18.5, 238.0], [18.6, 238.0], [18.7, 238.0], [18.8, 238.0], [18.9, 238.0], [19.0, 243.0], [19.1, 243.0], [19.2, 243.0], [19.3, 243.0], [19.4, 243.0], [19.5, 243.0], [19.6, 243.0], [19.7, 243.0], [19.8, 243.0], [19.9, 243.0], [20.0, 243.0], [20.1, 243.0], [20.2, 243.0], [20.3, 243.0], [20.4, 243.0], [20.5, 243.0], [20.6, 243.0], [20.7, 243.0], [20.8, 243.0], [20.9, 243.0], [21.0, 1001.0], [21.1, 1001.0], [21.2, 1001.0], [21.3, 1001.0], [21.4, 1001.0], [21.5, 1001.0], [21.6, 1001.0], [21.7, 1001.0], [21.8, 1001.0], [21.9, 1001.0], [22.0, 1046.0], [22.1, 1046.0], [22.2, 1046.0], [22.3, 1046.0], [22.4, 1046.0], [22.5, 1046.0], [22.6, 1046.0], [22.7, 1046.0], [22.8, 1046.0], [22.9, 1046.0], [23.0, 1052.0], [23.1, 1052.0], [23.2, 1052.0], [23.3, 1052.0], [23.4, 1052.0], [23.5, 1052.0], [23.6, 1052.0], [23.7, 1052.0], [23.8, 1052.0], [23.9, 1052.0], [24.0, 1078.0], [24.1, 1078.0], [24.2, 1078.0], [24.3, 1078.0], [24.4, 1078.0], [24.5, 1078.0], [24.6, 1078.0], [24.7, 1078.0], [24.8, 1078.0], [24.9, 1078.0], [25.0, 1115.0], [25.1, 1115.0], [25.2, 1115.0], [25.3, 1115.0], [25.4, 1115.0], [25.5, 1115.0], [25.6, 1115.0], [25.7, 1115.0], [25.8, 1115.0], [25.9, 1115.0], [26.0, 1202.0], [26.1, 1202.0], [26.2, 1202.0], [26.3, 1202.0], [26.4, 1202.0], [26.5, 1202.0], [26.6, 1202.0], [26.7, 1202.0], [26.8, 1202.0], [26.9, 1202.0], [27.0, 1270.0], [27.1, 1270.0], [27.2, 1270.0], [27.3, 1270.0], [27.4, 1270.0], [27.5, 1270.0], [27.6, 1270.0], [27.7, 1270.0], [27.8, 1270.0], [27.9, 1270.0], [28.0, 1274.0], [28.1, 1274.0], [28.2, 1274.0], [28.3, 1274.0], [28.4, 1274.0], [28.5, 1274.0], [28.6, 1274.0], [28.7, 1274.0], [28.8, 1274.0], [28.9, 1274.0], [29.0, 1308.0], [29.1, 1308.0], [29.2, 1308.0], [29.3, 1308.0], [29.4, 1308.0], [29.5, 1308.0], [29.6, 1308.0], [29.7, 1308.0], [29.8, 1308.0], [29.9, 1308.0], [30.0, 1478.0], [30.1, 1478.0], [30.2, 1478.0], [30.3, 1478.0], [30.4, 1478.0], [30.5, 1478.0], [30.6, 1478.0], [30.7, 1478.0], [30.8, 1478.0], [30.9, 1478.0], [31.0, 1616.0], [31.1, 1616.0], [31.2, 1616.0], [31.3, 1616.0], [31.4, 1616.0], [31.5, 1616.0], [31.6, 1616.0], [31.7, 1616.0], [31.8, 1616.0], [31.9, 1616.0], [32.0, 1622.0], [32.1, 1622.0], [32.2, 1622.0], [32.3, 1622.0], [32.4, 1622.0], [32.5, 1622.0], [32.6, 1622.0], [32.7, 1622.0], [32.8, 1622.0], [32.9, 1622.0], [33.0, 1675.0], [33.1, 1675.0], [33.2, 1675.0], [33.3, 1675.0], [33.4, 1675.0], [33.5, 1675.0], [33.6, 1675.0], [33.7, 1675.0], [33.8, 1675.0], [33.9, 1675.0], [34.0, 1714.0], [34.1, 1714.0], [34.2, 1714.0], [34.3, 1714.0], [34.4, 1714.0], [34.5, 1714.0], [34.6, 1714.0], [34.7, 1714.0], [34.8, 1714.0], [34.9, 1714.0], [35.0, 1803.0], [35.1, 1803.0], [35.2, 1803.0], [35.3, 1803.0], [35.4, 1803.0], [35.5, 1803.0], [35.6, 1803.0], [35.7, 1803.0], [35.8, 1803.0], [35.9, 1803.0], [36.0, 1847.0], [36.1, 1847.0], [36.2, 1847.0], [36.3, 1847.0], [36.4, 1847.0], [36.5, 1847.0], [36.6, 1847.0], [36.7, 1847.0], [36.8, 1847.0], [36.9, 1847.0], [37.0, 1927.0], [37.1, 1927.0], [37.2, 1927.0], [37.3, 1927.0], [37.4, 1927.0], [37.5, 1927.0], [37.6, 1927.0], [37.7, 1927.0], [37.8, 1927.0], [37.9, 1927.0], [38.0, 2103.0], [38.1, 2103.0], [38.2, 2103.0], [38.3, 2103.0], [38.4, 2103.0], [38.5, 2103.0], [38.6, 2103.0], [38.7, 2103.0], [38.8, 2103.0], [38.9, 2103.0], [39.0, 2160.0], [39.1, 2160.0], [39.2, 2160.0], [39.3, 2160.0], [39.4, 2160.0], [39.5, 2160.0], [39.6, 2160.0], [39.7, 2160.0], [39.8, 2160.0], [39.9, 2160.0], [40.0, 2168.0], [40.1, 2168.0], [40.2, 2168.0], [40.3, 2168.0], [40.4, 2168.0], [40.5, 2168.0], [40.6, 2168.0], [40.7, 2168.0], [40.8, 2168.0], [40.9, 2168.0], [41.0, 2208.0], [41.1, 2208.0], [41.2, 2208.0], [41.3, 2208.0], [41.4, 2208.0], [41.5, 2208.0], [41.6, 2208.0], [41.7, 2208.0], [41.8, 2208.0], [41.9, 2208.0], [42.0, 2340.0], [42.1, 2340.0], [42.2, 2340.0], [42.3, 2340.0], [42.4, 2340.0], [42.5, 2340.0], [42.6, 2340.0], [42.7, 2340.0], [42.8, 2340.0], [42.9, 2340.0], [43.0, 2348.0], [43.1, 2348.0], [43.2, 2348.0], [43.3, 2348.0], [43.4, 2348.0], [43.5, 2348.0], [43.6, 2348.0], [43.7, 2348.0], [43.8, 2348.0], [43.9, 2348.0], [44.0, 2361.0], [44.1, 2361.0], [44.2, 2361.0], [44.3, 2361.0], [44.4, 2361.0], [44.5, 2361.0], [44.6, 2361.0], [44.7, 2361.0], [44.8, 2361.0], [44.9, 2361.0], [45.0, 2374.0], [45.1, 2374.0], [45.2, 2374.0], [45.3, 2374.0], [45.4, 2374.0], [45.5, 2374.0], [45.6, 2374.0], [45.7, 2374.0], [45.8, 2374.0], [45.9, 2374.0], [46.0, 2470.0], [46.1, 2470.0], [46.2, 2470.0], [46.3, 2470.0], [46.4, 2470.0], [46.5, 2470.0], [46.6, 2470.0], [46.7, 2470.0], [46.8, 2470.0], [46.9, 2470.0], [47.0, 2492.0], [47.1, 2492.0], [47.2, 2492.0], [47.3, 2492.0], [47.4, 2492.0], [47.5, 2492.0], [47.6, 2492.0], [47.7, 2492.0], [47.8, 2492.0], [47.9, 2492.0], [48.0, 2611.0], [48.1, 2611.0], [48.2, 2611.0], [48.3, 2611.0], [48.4, 2611.0], [48.5, 2611.0], [48.6, 2611.0], [48.7, 2611.0], [48.8, 2611.0], [48.9, 2611.0], [49.0, 2660.0], [49.1, 2660.0], [49.2, 2660.0], [49.3, 2660.0], [49.4, 2660.0], [49.5, 2660.0], [49.6, 2660.0], [49.7, 2660.0], [49.8, 2660.0], [49.9, 2660.0], [50.0, 2745.0], [50.1, 2745.0], [50.2, 2745.0], [50.3, 2745.0], [50.4, 2745.0], [50.5, 2745.0], [50.6, 2745.0], [50.7, 2745.0], [50.8, 2745.0], [50.9, 2745.0], [51.0, 2884.0], [51.1, 2884.0], [51.2, 2884.0], [51.3, 2884.0], [51.4, 2884.0], [51.5, 2884.0], [51.6, 2884.0], [51.7, 2884.0], [51.8, 2884.0], [51.9, 2884.0], [52.0, 2935.0], [52.1, 2935.0], [52.2, 2935.0], [52.3, 2935.0], [52.4, 2935.0], [52.5, 2935.0], [52.6, 2935.0], [52.7, 2935.0], [52.8, 2935.0], [52.9, 2935.0], [53.0, 3057.0], [53.1, 3057.0], [53.2, 3057.0], [53.3, 3057.0], [53.4, 3057.0], [53.5, 3057.0], [53.6, 3057.0], [53.7, 3057.0], [53.8, 3057.0], [53.9, 3057.0], [54.0, 3076.0], [54.1, 3076.0], [54.2, 3076.0], [54.3, 3076.0], [54.4, 3076.0], [54.5, 3076.0], [54.6, 3076.0], [54.7, 3076.0], [54.8, 3076.0], [54.9, 3076.0], [55.0, 3103.0], [55.1, 3103.0], [55.2, 3103.0], [55.3, 3103.0], [55.4, 3103.0], [55.5, 3103.0], [55.6, 3103.0], [55.7, 3103.0], [55.8, 3103.0], [55.9, 3103.0], [56.0, 3327.0], [56.1, 3327.0], [56.2, 3327.0], [56.3, 3327.0], [56.4, 3327.0], [56.5, 3327.0], [56.6, 3327.0], [56.7, 3327.0], [56.8, 3327.0], [56.9, 3327.0], [57.0, 3332.0], [57.1, 3332.0], [57.2, 3332.0], [57.3, 3332.0], [57.4, 3332.0], [57.5, 3332.0], [57.6, 3332.0], [57.7, 3332.0], [57.8, 3332.0], [57.9, 3332.0], [58.0, 3509.0], [58.1, 3509.0], [58.2, 3509.0], [58.3, 3509.0], [58.4, 3509.0], [58.5, 3509.0], [58.6, 3509.0], [58.7, 3509.0], [58.8, 3509.0], [58.9, 3509.0], [59.0, 3521.0], [59.1, 3521.0], [59.2, 3521.0], [59.3, 3521.0], [59.4, 3521.0], [59.5, 3521.0], [59.6, 3521.0], [59.7, 3521.0], [59.8, 3521.0], [59.9, 3521.0], [60.0, 3538.0], [60.1, 3538.0], [60.2, 3538.0], [60.3, 3538.0], [60.4, 3538.0], [60.5, 3538.0], [60.6, 3538.0], [60.7, 3538.0], [60.8, 3538.0], [60.9, 3538.0], [61.0, 3703.0], [61.1, 3703.0], [61.2, 3703.0], [61.3, 3703.0], [61.4, 3703.0], [61.5, 3703.0], [61.6, 3703.0], [61.7, 3703.0], [61.8, 3703.0], [61.9, 3703.0], [62.0, 3753.0], [62.1, 3753.0], [62.2, 3753.0], [62.3, 3753.0], [62.4, 3753.0], [62.5, 3753.0], [62.6, 3753.0], [62.7, 3753.0], [62.8, 3753.0], [62.9, 3753.0], [63.0, 3794.0], [63.1, 3794.0], [63.2, 3794.0], [63.3, 3794.0], [63.4, 3794.0], [63.5, 3794.0], [63.6, 3794.0], [63.7, 3794.0], [63.8, 3794.0], [63.9, 3794.0], [64.0, 3864.0], [64.1, 3864.0], [64.2, 3864.0], [64.3, 3864.0], [64.4, 3864.0], [64.5, 3864.0], [64.6, 3864.0], [64.7, 3864.0], [64.8, 3864.0], [64.9, 3864.0], [65.0, 3892.0], [65.1, 3892.0], [65.2, 3892.0], [65.3, 3892.0], [65.4, 3892.0], [65.5, 3892.0], [65.6, 3892.0], [65.7, 3892.0], [65.8, 3892.0], [65.9, 3892.0], [66.0, 4395.0], [66.1, 4395.0], [66.2, 4395.0], [66.3, 4395.0], [66.4, 4395.0], [66.5, 4395.0], [66.6, 4395.0], [66.7, 4395.0], [66.8, 4395.0], [66.9, 4395.0], [67.0, 4475.0], [67.1, 4475.0], [67.2, 4475.0], [67.3, 4475.0], [67.4, 4475.0], [67.5, 4475.0], [67.6, 4475.0], [67.7, 4475.0], [67.8, 4475.0], [67.9, 4475.0], [68.0, 4622.0], [68.1, 4622.0], [68.2, 4622.0], [68.3, 4622.0], [68.4, 4622.0], [68.5, 4622.0], [68.6, 4622.0], [68.7, 4622.0], [68.8, 4622.0], [68.9, 4622.0], [69.0, 4624.0], [69.1, 4624.0], [69.2, 4624.0], [69.3, 4624.0], [69.4, 4624.0], [69.5, 4624.0], [69.6, 4624.0], [69.7, 4624.0], [69.8, 4624.0], [69.9, 4624.0], [70.0, 4705.0], [70.1, 4705.0], [70.2, 4705.0], [70.3, 4705.0], [70.4, 4705.0], [70.5, 4705.0], [70.6, 4705.0], [70.7, 4705.0], [70.8, 4705.0], [70.9, 4705.0], [71.0, 4858.0], [71.1, 4858.0], [71.2, 4858.0], [71.3, 4858.0], [71.4, 4858.0], [71.5, 4858.0], [71.6, 4858.0], [71.7, 4858.0], [71.8, 4858.0], [71.9, 4858.0], [72.0, 5033.0], [72.1, 5033.0], [72.2, 5033.0], [72.3, 5033.0], [72.4, 5033.0], [72.5, 5033.0], [72.6, 5033.0], [72.7, 5033.0], [72.8, 5033.0], [72.9, 5033.0], [73.0, 5074.0], [73.1, 5074.0], [73.2, 5074.0], [73.3, 5074.0], [73.4, 5074.0], [73.5, 5074.0], [73.6, 5074.0], [73.7, 5074.0], [73.8, 5074.0], [73.9, 5074.0], [74.0, 5090.0], [74.1, 5090.0], [74.2, 5090.0], [74.3, 5090.0], [74.4, 5090.0], [74.5, 5090.0], [74.6, 5090.0], [74.7, 5090.0], [74.8, 5090.0], [74.9, 5090.0], [75.0, 5640.0], [75.1, 5640.0], [75.2, 5640.0], [75.3, 5640.0], [75.4, 5640.0], [75.5, 5640.0], [75.6, 5640.0], [75.7, 5640.0], [75.8, 5640.0], [75.9, 5640.0], [76.0, 5707.0], [76.1, 5707.0], [76.2, 5707.0], [76.3, 5707.0], [76.4, 5707.0], [76.5, 5707.0], [76.6, 5707.0], [76.7, 5707.0], [76.8, 5707.0], [76.9, 5707.0], [77.0, 5936.0], [77.1, 5936.0], [77.2, 5936.0], [77.3, 5936.0], [77.4, 5936.0], [77.5, 5936.0], [77.6, 5936.0], [77.7, 5936.0], [77.8, 5936.0], [77.9, 5936.0], [78.0, 6027.0], [78.1, 6027.0], [78.2, 6027.0], [78.3, 6027.0], [78.4, 6027.0], [78.5, 6027.0], [78.6, 6027.0], [78.7, 6027.0], [78.8, 6027.0], [78.9, 6027.0], [79.0, 6154.0], [79.1, 6154.0], [79.2, 6154.0], [79.3, 6154.0], [79.4, 6154.0], [79.5, 6154.0], [79.6, 6154.0], [79.7, 6154.0], [79.8, 6154.0], [79.9, 6154.0], [80.0, 6282.0], [80.1, 6282.0], [80.2, 6282.0], [80.3, 6282.0], [80.4, 6282.0], [80.5, 6282.0], [80.6, 6282.0], [80.7, 6282.0], [80.8, 6282.0], [80.9, 6282.0], [81.0, 6285.0], [81.1, 6285.0], [81.2, 6285.0], [81.3, 6285.0], [81.4, 6285.0], [81.5, 6285.0], [81.6, 6285.0], [81.7, 6285.0], [81.8, 6285.0], [81.9, 6285.0], [82.0, 6308.0], [82.1, 6308.0], [82.2, 6308.0], [82.3, 6308.0], [82.4, 6308.0], [82.5, 6308.0], [82.6, 6308.0], [82.7, 6308.0], [82.8, 6308.0], [82.9, 6308.0], [83.0, 6718.0], [83.1, 6718.0], [83.2, 6718.0], [83.3, 6718.0], [83.4, 6718.0], [83.5, 6718.0], [83.6, 6718.0], [83.7, 6718.0], [83.8, 6718.0], [83.9, 6718.0], [84.0, 6896.0], [84.1, 6896.0], [84.2, 6896.0], [84.3, 6896.0], [84.4, 6896.0], [84.5, 6896.0], [84.6, 6896.0], [84.7, 6896.0], [84.8, 6896.0], [84.9, 6896.0], [85.0, 7228.0], [85.1, 7228.0], [85.2, 7228.0], [85.3, 7228.0], [85.4, 7228.0], [85.5, 7228.0], [85.6, 7228.0], [85.7, 7228.0], [85.8, 7228.0], [85.9, 7228.0], [86.0, 7279.0], [86.1, 7279.0], [86.2, 7279.0], [86.3, 7279.0], [86.4, 7279.0], [86.5, 7279.0], [86.6, 7279.0], [86.7, 7279.0], [86.8, 7279.0], [86.9, 7279.0], [87.0, 7319.0], [87.1, 7319.0], [87.2, 7319.0], [87.3, 7319.0], [87.4, 7319.0], [87.5, 7319.0], [87.6, 7319.0], [87.7, 7319.0], [87.8, 7319.0], [87.9, 7319.0], [88.0, 7477.0], [88.1, 7477.0], [88.2, 7477.0], [88.3, 7477.0], [88.4, 7477.0], [88.5, 7477.0], [88.6, 7477.0], [88.7, 7477.0], [88.8, 7477.0], [88.9, 7477.0], [89.0, 7564.0], [89.1, 7564.0], [89.2, 7564.0], [89.3, 7564.0], [89.4, 7564.0], [89.5, 7564.0], [89.6, 7564.0], [89.7, 7564.0], [89.8, 7564.0], [89.9, 7564.0], [90.0, 7746.0], [90.1, 7746.0], [90.2, 7746.0], [90.3, 7746.0], [90.4, 7746.0], [90.5, 7746.0], [90.6, 7746.0], [90.7, 7746.0], [90.8, 7746.0], [90.9, 7746.0], [91.0, 7780.0], [91.1, 7780.0], [91.2, 7780.0], [91.3, 7780.0], [91.4, 7780.0], [91.5, 7780.0], [91.6, 7780.0], [91.7, 7780.0], [91.8, 7780.0], [91.9, 7780.0], [92.0, 7863.0], [92.1, 7863.0], [92.2, 7863.0], [92.3, 7863.0], [92.4, 7863.0], [92.5, 7863.0], [92.6, 7863.0], [92.7, 7863.0], [92.8, 7863.0], [92.9, 7863.0], [93.0, 8434.0], [93.1, 8434.0], [93.2, 8434.0], [93.3, 8434.0], [93.4, 8434.0], [93.5, 8434.0], [93.6, 8434.0], [93.7, 8434.0], [93.8, 8434.0], [93.9, 8434.0], [94.0, 8513.0], [94.1, 8513.0], [94.2, 8513.0], [94.3, 8513.0], [94.4, 8513.0], [94.5, 8513.0], [94.6, 8513.0], [94.7, 8513.0], [94.8, 8513.0], [94.9, 8513.0], [95.0, 8768.0], [95.1, 8768.0], [95.2, 8768.0], [95.3, 8768.0], [95.4, 8768.0], [95.5, 8768.0], [95.6, 8768.0], [95.7, 8768.0], [95.8, 8768.0], [95.9, 8768.0], [96.0, 9271.0], [96.1, 9271.0], [96.2, 9271.0], [96.3, 9271.0], [96.4, 9271.0], [96.5, 9271.0], [96.6, 9271.0], [96.7, 9271.0], [96.8, 9271.0], [96.9, 9271.0], [97.0, 10118.0], [97.1, 10118.0], [97.2, 10118.0], [97.3, 10118.0], [97.4, 10118.0], [97.5, 10118.0], [97.6, 10118.0], [97.7, 10118.0], [97.8, 10118.0], [97.9, 10118.0], [98.0, 10676.0], [98.1, 10676.0], [98.2, 10676.0], [98.3, 10676.0], [98.4, 10676.0], [98.5, 10676.0], [98.6, 10676.0], [98.7, 10676.0], [98.8, 10676.0], [98.9, 10676.0], [99.0, 11040.0], [99.1, 11040.0], [99.2, 11040.0], [99.3, 11040.0], [99.4, 11040.0], [99.5, 11040.0], [99.6, 11040.0], [99.7, 11040.0], [99.8, 11040.0], [99.9, 11040.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 13.0, "series": [{"data": [[1000.0, 4.0], [1100.0, 1.0], [1200.0, 3.0], [1300.0, 1.0], [1400.0, 1.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [2100.0, 3.0], [2300.0, 4.0], [2200.0, 1.0], [2400.0, 2.0], [2600.0, 2.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3300.0, 2.0], [3500.0, 3.0], [3700.0, 3.0], [3800.0, 2.0], [4300.0, 1.0], [4400.0, 1.0], [4600.0, 2.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 3.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6100.0, 1.0], [5900.0, 1.0], [6200.0, 2.0], [6300.0, 1.0], [6800.0, 1.0], [6700.0, 1.0], [7200.0, 2.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7700.0, 2.0], [7800.0, 1.0], [8700.0, 1.0], [8400.0, 1.0], [8500.0, 1.0], [9200.0, 1.0], [10100.0, 1.0], [10600.0, 1.0], [11000.0, 1.0], [100.0, 8.0], [200.0, 13.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 69.0, "series": [{"data": [[0.0, 21.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 69.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.2222222222222225, "minX": 1.79151732E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.7915175E12, 2.3157894736842106], [1.79151732E12, 1.5555555555555556], [1.79151762E12, 2.6666666666666665], [1.79151744E12, 2.388888888888889], [1.79151756E12, 1.2222222222222225], [1.79151738E12, 1.761904761904762]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151762E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1518.4, "minX": 1.0, "maxY": 8362.833333333334, "series": [{"data": [[1.0, 1518.4], [2.0, 4141.090909090909], [4.0, 6127.599999999999], [5.0, 8362.833333333334], [3.0, 5346.833333333334]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.9999999999999998, 3426.3899999999994]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 28.783333333333335, "minX": 1.79151732E12, "maxY": 412.05, "series": [{"data": [[1.7915175E12, 61.0], [1.79151732E12, 28.783333333333335], [1.79151762E12, 48.03333333333333], [1.79151744E12, 57.35], [1.79151756E12, 57.65], [1.79151738E12, 67.21666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7915175E12, 412.05], [1.79151732E12, 181.15], [1.79151762E12, 243.25], [1.79151744E12, 291.3666666666667], [1.79151756E12, 344.55], [1.79151738E12, 375.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151762E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1747.3333333333335, "minX": 1.79151732E12, "maxY": 4806.333333333334, "series": [{"data": [[1.7915175E12, 4774.315789473684], [1.79151732E12, 2137.4444444444443], [1.79151762E12, 4020.5333333333338], [1.79151744E12, 4806.333333333334], [1.79151756E12, 1747.3333333333335], [1.79151738E12, 2591.238095238095]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151762E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1747.2222222222224, "minX": 1.79151732E12, "maxY": 4806.277777777777, "series": [{"data": [[1.7915175E12, 4774.315789473684], [1.79151732E12, 2137.3333333333335], [1.79151762E12, 4020.5333333333338], [1.79151744E12, 4806.277777777777], [1.79151756E12, 1747.2222222222224], [1.79151738E12, 2591.1428571428573]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151762E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.476190476190476, "minX": 1.79151732E12, "maxY": 12.05263157894737, "series": [{"data": [[1.7915175E12, 12.05263157894737], [1.79151732E12, 10.333333333333334], [1.79151762E12, 9.933333333333334], [1.79151744E12, 9.833333333333332], [1.79151756E12, 10.0], [1.79151738E12, 8.476190476190476]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151762E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.79151732E12, "maxY": 11040.0, "series": [{"data": [[1.7915175E12, 11040.0], [1.79151732E12, 5074.0], [1.79151762E12, 7746.0], [1.79151744E12, 10676.0], [1.79151756E12, 6308.0], [1.79151738E12, 7279.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7915175E12, 9271.0], [1.79151732E12, 5074.0], [1.79151762E12, 7435.2], [1.79151744E12, 10173.800000000001], [1.79151756E12, 4008.5000000000036], [1.79151738E12, 6773.200000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7915175E12, 11040.0], [1.79151732E12, 5074.0], [1.79151762E12, 7746.0], [1.79151744E12, 10676.0], [1.79151756E12, 6308.0], [1.79151738E12, 7279.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7915175E12, 11040.0], [1.79151732E12, 5074.0], [1.79151762E12, 7746.0], [1.79151744E12, 10676.0], [1.79151756E12, 6308.0], [1.79151738E12, 7240.7]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7915175E12, 192.0], [1.79151732E12, 208.0], [1.79151762E12, 243.0], [1.79151744E12, 1001.0], [1.79151756E12, 188.0], [1.79151738E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7915175E12, 5033.0], [1.79151732E12, 1308.0], [1.79151762E12, 3509.0], [1.79151744E12, 3783.5], [1.79151756E12, 1492.0], [1.79151738E12, 2103.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2551.5, "minX": 1.0, "maxY": 4393.0, "series": [{"data": [[1.0, 2551.5], [2.0, 3843.0], [3.0, 4393.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2551.5, "minX": 1.0, "maxY": 4393.0, "series": [{"data": [[1.0, 2551.5], [2.0, 3842.5], [3.0, 4393.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.79151732E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.7915175E12, 0.2833333333333333], [1.79151732E12, 0.18333333333333332], [1.79151762E12, 0.25], [1.79151744E12, 0.2833333333333333], [1.79151756E12, 0.2833333333333333], [1.79151738E12, 0.38333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151762E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.79151732E12, "maxY": 0.35, "series": [{"data": [[1.7915175E12, 0.31666666666666665], [1.79151732E12, 0.15], [1.79151762E12, 0.25], [1.79151744E12, 0.3], [1.79151756E12, 0.3], [1.79151738E12, 0.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79151762E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.79151732E12, "maxY": 0.35, "series": [{"data": [[1.7915175E12, 0.31666666666666665], [1.79151732E12, 0.15], [1.79151762E12, 0.25], [1.79151744E12, 0.3], [1.79151756E12, 0.3], [1.79151738E12, 0.35]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151762E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.79151732E12, "maxY": 0.35, "series": [{"data": [[1.7915175E12, 0.31666666666666665], [1.79151732E12, 0.15], [1.79151762E12, 0.25], [1.79151744E12, 0.3], [1.79151756E12, 0.3], [1.79151738E12, 0.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79151762E12, "title": "Total Transactions Per Second"}},
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

