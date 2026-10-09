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
        data: {"result": {"minY": 1297.0, "minX": 0.0, "maxY": 60115.0, "series": [{"data": [[0.0, 1297.0], [0.1, 1297.0], [0.2, 1297.0], [0.3, 1297.0], [0.4, 1297.0], [0.5, 1297.0], [0.6, 1297.0], [0.7, 1297.0], [0.8, 1297.0], [0.9, 2075.0], [1.0, 2075.0], [1.1, 2075.0], [1.2, 2075.0], [1.3, 2075.0], [1.4, 2075.0], [1.5, 2075.0], [1.6, 2075.0], [1.7, 2577.0], [1.8, 2577.0], [1.9, 2577.0], [2.0, 2577.0], [2.1, 2577.0], [2.2, 2577.0], [2.3, 2577.0], [2.4, 2577.0], [2.5, 4987.0], [2.6, 4987.0], [2.7, 4987.0], [2.8, 4987.0], [2.9, 4987.0], [3.0, 4987.0], [3.1, 4987.0], [3.2, 4987.0], [3.3, 4987.0], [3.4, 6067.0], [3.5, 6067.0], [3.6, 6067.0], [3.7, 6067.0], [3.8, 6067.0], [3.9, 6067.0], [4.0, 6067.0], [4.1, 6067.0], [4.2, 6723.0], [4.3, 6723.0], [4.4, 6723.0], [4.5, 6723.0], [4.6, 6723.0], [4.7, 6723.0], [4.8, 6723.0], [4.9, 6723.0], [5.0, 6988.0], [5.1, 6988.0], [5.2, 6988.0], [5.3, 6988.0], [5.4, 6988.0], [5.5, 6988.0], [5.6, 6988.0], [5.7, 6988.0], [5.8, 6988.0], [5.9, 7397.0], [6.0, 7397.0], [6.1, 7397.0], [6.2, 7397.0], [6.3, 7397.0], [6.4, 7397.0], [6.5, 7397.0], [6.6, 7397.0], [6.7, 8346.0], [6.8, 8346.0], [6.9, 8346.0], [7.0, 8346.0], [7.1, 8346.0], [7.2, 8346.0], [7.3, 8346.0], [7.4, 8346.0], [7.5, 8861.0], [7.6, 8861.0], [7.7, 8861.0], [7.8, 8861.0], [7.9, 8861.0], [8.0, 8861.0], [8.1, 8861.0], [8.2, 8861.0], [8.3, 8861.0], [8.4, 9069.0], [8.5, 9069.0], [8.6, 9069.0], [8.7, 9069.0], [8.8, 9069.0], [8.9, 9069.0], [9.0, 9069.0], [9.1, 9069.0], [9.2, 9246.0], [9.3, 9246.0], [9.4, 9246.0], [9.5, 9246.0], [9.6, 9246.0], [9.7, 9246.0], [9.8, 9246.0], [9.9, 9246.0], [10.0, 9806.0], [10.1, 9806.0], [10.2, 9806.0], [10.3, 9806.0], [10.4, 9806.0], [10.5, 9806.0], [10.6, 9806.0], [10.7, 9806.0], [10.8, 9806.0], [10.9, 10923.0], [11.0, 10923.0], [11.1, 10923.0], [11.2, 10923.0], [11.3, 10923.0], [11.4, 10923.0], [11.5, 10923.0], [11.6, 10923.0], [11.7, 11036.0], [11.8, 11036.0], [11.9, 11036.0], [12.0, 11036.0], [12.1, 11036.0], [12.2, 11036.0], [12.3, 11036.0], [12.4, 11036.0], [12.5, 11036.0], [12.6, 11956.0], [12.7, 11956.0], [12.8, 11956.0], [12.9, 11956.0], [13.0, 11956.0], [13.1, 11956.0], [13.2, 11956.0], [13.3, 11956.0], [13.4, 12011.0], [13.5, 12011.0], [13.6, 12011.0], [13.7, 12011.0], [13.8, 12011.0], [13.9, 12011.0], [14.0, 12011.0], [14.1, 12011.0], [14.2, 14519.0], [14.3, 14519.0], [14.4, 14519.0], [14.5, 14519.0], [14.6, 14519.0], [14.7, 14519.0], [14.8, 14519.0], [14.9, 14519.0], [15.0, 14519.0], [15.1, 14838.0], [15.2, 14838.0], [15.3, 14838.0], [15.4, 14838.0], [15.5, 14838.0], [15.6, 14838.0], [15.7, 14838.0], [15.8, 14838.0], [15.9, 15898.0], [16.0, 15898.0], [16.1, 15898.0], [16.2, 15898.0], [16.3, 15898.0], [16.4, 15898.0], [16.5, 15898.0], [16.6, 15898.0], [16.7, 16045.0], [16.8, 16045.0], [16.9, 16045.0], [17.0, 16045.0], [17.1, 16045.0], [17.2, 16045.0], [17.3, 16045.0], [17.4, 16045.0], [17.5, 16045.0], [17.6, 16135.0], [17.7, 16135.0], [17.8, 16135.0], [17.9, 16135.0], [18.0, 16135.0], [18.1, 16135.0], [18.2, 16135.0], [18.3, 16135.0], [18.4, 16756.0], [18.5, 16756.0], [18.6, 16756.0], [18.7, 16756.0], [18.8, 16756.0], [18.9, 16756.0], [19.0, 16756.0], [19.1, 16756.0], [19.2, 16985.0], [19.3, 16985.0], [19.4, 16985.0], [19.5, 16985.0], [19.6, 16985.0], [19.7, 16985.0], [19.8, 16985.0], [19.9, 16985.0], [20.0, 17472.0], [20.1, 17472.0], [20.2, 17472.0], [20.3, 17472.0], [20.4, 17472.0], [20.5, 17472.0], [20.6, 17472.0], [20.7, 17472.0], [20.8, 17472.0], [20.9, 18074.0], [21.0, 18074.0], [21.1, 18074.0], [21.2, 18074.0], [21.3, 18074.0], [21.4, 18074.0], [21.5, 18074.0], [21.6, 18074.0], [21.7, 18195.0], [21.8, 18195.0], [21.9, 18195.0], [22.0, 18195.0], [22.1, 18195.0], [22.2, 18195.0], [22.3, 18195.0], [22.4, 18195.0], [22.5, 18254.0], [22.6, 18254.0], [22.7, 18254.0], [22.8, 18254.0], [22.9, 18254.0], [23.0, 18254.0], [23.1, 18254.0], [23.2, 18254.0], [23.3, 18254.0], [23.4, 18609.0], [23.5, 18609.0], [23.6, 18609.0], [23.7, 18609.0], [23.8, 18609.0], [23.9, 18609.0], [24.0, 18609.0], [24.1, 18609.0], [24.2, 18972.0], [24.3, 18972.0], [24.4, 18972.0], [24.5, 18972.0], [24.6, 18972.0], [24.7, 18972.0], [24.8, 18972.0], [24.9, 18972.0], [25.0, 19263.0], [25.1, 19263.0], [25.2, 19263.0], [25.3, 19263.0], [25.4, 19263.0], [25.5, 19263.0], [25.6, 19263.0], [25.7, 19263.0], [25.8, 19263.0], [25.9, 19684.0], [26.0, 19684.0], [26.1, 19684.0], [26.2, 19684.0], [26.3, 19684.0], [26.4, 19684.0], [26.5, 19684.0], [26.6, 19684.0], [26.7, 21374.0], [26.8, 21374.0], [26.9, 21374.0], [27.0, 21374.0], [27.1, 21374.0], [27.2, 21374.0], [27.3, 21374.0], [27.4, 21374.0], [27.5, 21875.0], [27.6, 21875.0], [27.7, 21875.0], [27.8, 21875.0], [27.9, 21875.0], [28.0, 21875.0], [28.1, 21875.0], [28.2, 21875.0], [28.3, 21875.0], [28.4, 22568.0], [28.5, 22568.0], [28.6, 22568.0], [28.7, 22568.0], [28.8, 22568.0], [28.9, 22568.0], [29.0, 22568.0], [29.1, 22568.0], [29.2, 22726.0], [29.3, 22726.0], [29.4, 22726.0], [29.5, 22726.0], [29.6, 22726.0], [29.7, 22726.0], [29.8, 22726.0], [29.9, 22726.0], [30.0, 22736.0], [30.1, 22736.0], [30.2, 22736.0], [30.3, 22736.0], [30.4, 22736.0], [30.5, 22736.0], [30.6, 22736.0], [30.7, 22736.0], [30.8, 22736.0], [30.9, 22908.0], [31.0, 22908.0], [31.1, 22908.0], [31.2, 22908.0], [31.3, 22908.0], [31.4, 22908.0], [31.5, 22908.0], [31.6, 22908.0], [31.7, 23220.0], [31.8, 23220.0], [31.9, 23220.0], [32.0, 23220.0], [32.1, 23220.0], [32.2, 23220.0], [32.3, 23220.0], [32.4, 23220.0], [32.5, 23560.0], [32.6, 23560.0], [32.7, 23560.0], [32.8, 23560.0], [32.9, 23560.0], [33.0, 23560.0], [33.1, 23560.0], [33.2, 23560.0], [33.3, 23560.0], [33.4, 23696.0], [33.5, 23696.0], [33.6, 23696.0], [33.7, 23696.0], [33.8, 23696.0], [33.9, 23696.0], [34.0, 23696.0], [34.1, 23696.0], [34.2, 24070.0], [34.3, 24070.0], [34.4, 24070.0], [34.5, 24070.0], [34.6, 24070.0], [34.7, 24070.0], [34.8, 24070.0], [34.9, 24070.0], [35.0, 24071.0], [35.1, 24071.0], [35.2, 24071.0], [35.3, 24071.0], [35.4, 24071.0], [35.5, 24071.0], [35.6, 24071.0], [35.7, 24071.0], [35.8, 24071.0], [35.9, 24218.0], [36.0, 24218.0], [36.1, 24218.0], [36.2, 24218.0], [36.3, 24218.0], [36.4, 24218.0], [36.5, 24218.0], [36.6, 24218.0], [36.7, 24589.0], [36.8, 24589.0], [36.9, 24589.0], [37.0, 24589.0], [37.1, 24589.0], [37.2, 24589.0], [37.3, 24589.0], [37.4, 24589.0], [37.5, 25570.0], [37.6, 25570.0], [37.7, 25570.0], [37.8, 25570.0], [37.9, 25570.0], [38.0, 25570.0], [38.1, 25570.0], [38.2, 25570.0], [38.3, 25570.0], [38.4, 26051.0], [38.5, 26051.0], [38.6, 26051.0], [38.7, 26051.0], [38.8, 26051.0], [38.9, 26051.0], [39.0, 26051.0], [39.1, 26051.0], [39.2, 26479.0], [39.3, 26479.0], [39.4, 26479.0], [39.5, 26479.0], [39.6, 26479.0], [39.7, 26479.0], [39.8, 26479.0], [39.9, 26479.0], [40.0, 26479.0], [40.1, 27596.0], [40.2, 27596.0], [40.3, 27596.0], [40.4, 27596.0], [40.5, 27596.0], [40.6, 27596.0], [40.7, 27596.0], [40.8, 27596.0], [40.9, 27610.0], [41.0, 27610.0], [41.1, 27610.0], [41.2, 27610.0], [41.3, 27610.0], [41.4, 27610.0], [41.5, 27610.0], [41.6, 27610.0], [41.7, 27714.0], [41.8, 27714.0], [41.9, 27714.0], [42.0, 27714.0], [42.1, 27714.0], [42.2, 27714.0], [42.3, 27714.0], [42.4, 27714.0], [42.5, 27714.0], [42.6, 28396.0], [42.7, 28396.0], [42.8, 28396.0], [42.9, 28396.0], [43.0, 28396.0], [43.1, 28396.0], [43.2, 28396.0], [43.3, 28396.0], [43.4, 28770.0], [43.5, 28770.0], [43.6, 28770.0], [43.7, 28770.0], [43.8, 28770.0], [43.9, 28770.0], [44.0, 28770.0], [44.1, 28770.0], [44.2, 29498.0], [44.3, 29498.0], [44.4, 29498.0], [44.5, 29498.0], [44.6, 29498.0], [44.7, 29498.0], [44.8, 29498.0], [44.9, 29498.0], [45.0, 29498.0], [45.1, 29688.0], [45.2, 29688.0], [45.3, 29688.0], [45.4, 29688.0], [45.5, 29688.0], [45.6, 29688.0], [45.7, 29688.0], [45.8, 29688.0], [45.9, 30048.0], [46.0, 30048.0], [46.1, 30048.0], [46.2, 30048.0], [46.3, 30048.0], [46.4, 30048.0], [46.5, 30048.0], [46.6, 30048.0], [46.7, 30242.0], [46.8, 30242.0], [46.9, 30242.0], [47.0, 30242.0], [47.1, 30242.0], [47.2, 30242.0], [47.3, 30242.0], [47.4, 30242.0], [47.5, 30242.0], [47.6, 30258.0], [47.7, 30258.0], [47.8, 30258.0], [47.9, 30258.0], [48.0, 30258.0], [48.1, 30258.0], [48.2, 30258.0], [48.3, 30258.0], [48.4, 30977.0], [48.5, 30977.0], [48.6, 30977.0], [48.7, 30977.0], [48.8, 30977.0], [48.9, 30977.0], [49.0, 30977.0], [49.1, 30977.0], [49.2, 30998.0], [49.3, 30998.0], [49.4, 30998.0], [49.5, 30998.0], [49.6, 30998.0], [49.7, 30998.0], [49.8, 30998.0], [49.9, 30998.0], [50.0, 30998.0], [50.1, 31989.0], [50.2, 31989.0], [50.3, 31989.0], [50.4, 31989.0], [50.5, 31989.0], [50.6, 31989.0], [50.7, 31989.0], [50.8, 31989.0], [50.9, 35128.0], [51.0, 35128.0], [51.1, 35128.0], [51.2, 35128.0], [51.3, 35128.0], [51.4, 35128.0], [51.5, 35128.0], [51.6, 35128.0], [51.7, 37445.0], [51.8, 37445.0], [51.9, 37445.0], [52.0, 37445.0], [52.1, 37445.0], [52.2, 37445.0], [52.3, 37445.0], [52.4, 37445.0], [52.5, 37445.0], [52.6, 37883.0], [52.7, 37883.0], [52.8, 37883.0], [52.9, 37883.0], [53.0, 37883.0], [53.1, 37883.0], [53.2, 37883.0], [53.3, 37883.0], [53.4, 39212.0], [53.5, 39212.0], [53.6, 39212.0], [53.7, 39212.0], [53.8, 39212.0], [53.9, 39212.0], [54.0, 39212.0], [54.1, 39212.0], [54.2, 40338.0], [54.3, 40338.0], [54.4, 40338.0], [54.5, 40338.0], [54.6, 40338.0], [54.7, 40338.0], [54.8, 40338.0], [54.9, 40338.0], [55.0, 40338.0], [55.1, 41324.0], [55.2, 41324.0], [55.3, 41324.0], [55.4, 41324.0], [55.5, 41324.0], [55.6, 41324.0], [55.7, 41324.0], [55.8, 41324.0], [55.9, 42508.0], [56.0, 42508.0], [56.1, 42508.0], [56.2, 42508.0], [56.3, 42508.0], [56.4, 42508.0], [56.5, 42508.0], [56.6, 42508.0], [56.7, 44267.0], [56.8, 44267.0], [56.9, 44267.0], [57.0, 44267.0], [57.1, 44267.0], [57.2, 44267.0], [57.3, 44267.0], [57.4, 44267.0], [57.5, 44267.0], [57.6, 44416.0], [57.7, 44416.0], [57.8, 44416.0], [57.9, 44416.0], [58.0, 44416.0], [58.1, 44416.0], [58.2, 44416.0], [58.3, 44416.0], [58.4, 45117.0], [58.5, 45117.0], [58.6, 45117.0], [58.7, 45117.0], [58.8, 45117.0], [58.9, 45117.0], [59.0, 45117.0], [59.1, 45117.0], [59.2, 47016.0], [59.3, 47016.0], [59.4, 47016.0], [59.5, 47016.0], [59.6, 47016.0], [59.7, 47016.0], [59.8, 47016.0], [59.9, 47016.0], [60.0, 47016.0], [60.1, 50086.0], [60.2, 50086.0], [60.3, 50086.0], [60.4, 50086.0], [60.5, 50086.0], [60.6, 50086.0], [60.7, 50086.0], [60.8, 50086.0], [60.9, 51591.0], [61.0, 51591.0], [61.1, 51591.0], [61.2, 51591.0], [61.3, 51591.0], [61.4, 51591.0], [61.5, 51591.0], [61.6, 51591.0], [61.7, 52148.0], [61.8, 52148.0], [61.9, 52148.0], [62.0, 52148.0], [62.1, 52148.0], [62.2, 52148.0], [62.3, 52148.0], [62.4, 52148.0], [62.5, 52148.0], [62.6, 52960.0], [62.7, 52960.0], [62.8, 52960.0], [62.9, 52960.0], [63.0, 52960.0], [63.1, 52960.0], [63.2, 52960.0], [63.3, 52960.0], [63.4, 53424.0], [63.5, 53424.0], [63.6, 53424.0], [63.7, 53424.0], [63.8, 53424.0], [63.9, 53424.0], [64.0, 53424.0], [64.1, 53424.0], [64.2, 54384.0], [64.3, 54384.0], [64.4, 54384.0], [64.5, 54384.0], [64.6, 54384.0], [64.7, 54384.0], [64.8, 54384.0], [64.9, 54384.0], [65.0, 54384.0], [65.1, 55308.0], [65.2, 55308.0], [65.3, 55308.0], [65.4, 55308.0], [65.5, 55308.0], [65.6, 55308.0], [65.7, 55308.0], [65.8, 55308.0], [65.9, 55697.0], [66.0, 55697.0], [66.1, 55697.0], [66.2, 55697.0], [66.3, 55697.0], [66.4, 55697.0], [66.5, 55697.0], [66.6, 55697.0], [66.7, 56038.0], [66.8, 56038.0], [66.9, 56038.0], [67.0, 56038.0], [67.1, 56038.0], [67.2, 56038.0], [67.3, 56038.0], [67.4, 56038.0], [67.5, 56038.0], [67.6, 56889.0], [67.7, 56889.0], [67.8, 56889.0], [67.9, 56889.0], [68.0, 56889.0], [68.1, 56889.0], [68.2, 56889.0], [68.3, 56889.0], [68.4, 56910.0], [68.5, 56910.0], [68.6, 56910.0], [68.7, 56910.0], [68.8, 56910.0], [68.9, 56910.0], [69.0, 56910.0], [69.1, 56910.0], [69.2, 57063.0], [69.3, 57063.0], [69.4, 57063.0], [69.5, 57063.0], [69.6, 57063.0], [69.7, 57063.0], [69.8, 57063.0], [69.9, 57063.0], [70.0, 57063.0], [70.1, 57132.0], [70.2, 57132.0], [70.3, 57132.0], [70.4, 57132.0], [70.5, 57132.0], [70.6, 57132.0], [70.7, 57132.0], [70.8, 57132.0], [70.9, 57245.0], [71.0, 57245.0], [71.1, 57245.0], [71.2, 57245.0], [71.3, 57245.0], [71.4, 57245.0], [71.5, 57245.0], [71.6, 57245.0], [71.7, 57245.0], [71.8, 57245.0], [71.9, 57245.0], [72.0, 57245.0], [72.1, 57245.0], [72.2, 57245.0], [72.3, 57245.0], [72.4, 57245.0], [72.5, 57245.0], [72.6, 57371.0], [72.7, 57371.0], [72.8, 57371.0], [72.9, 57371.0], [73.0, 57371.0], [73.1, 57371.0], [73.2, 57371.0], [73.3, 57371.0], [73.4, 57579.0], [73.5, 57579.0], [73.6, 57579.0], [73.7, 57579.0], [73.8, 57579.0], [73.9, 57579.0], [74.0, 57579.0], [74.1, 57579.0], [74.2, 57862.0], [74.3, 57862.0], [74.4, 57862.0], [74.5, 57862.0], [74.6, 57862.0], [74.7, 57862.0], [74.8, 57862.0], [74.9, 57862.0], [75.0, 57862.0], [75.1, 57873.0], [75.2, 57873.0], [75.3, 57873.0], [75.4, 57873.0], [75.5, 57873.0], [75.6, 57873.0], [75.7, 57873.0], [75.8, 57873.0], [75.9, 57900.0], [76.0, 57900.0], [76.1, 57900.0], [76.2, 57900.0], [76.3, 57900.0], [76.4, 57900.0], [76.5, 57900.0], [76.6, 57900.0], [76.7, 57959.0], [76.8, 57959.0], [76.9, 57959.0], [77.0, 57959.0], [77.1, 57959.0], [77.2, 57959.0], [77.3, 57959.0], [77.4, 57959.0], [77.5, 57959.0], [77.6, 58312.0], [77.7, 58312.0], [77.8, 58312.0], [77.9, 58312.0], [78.0, 58312.0], [78.1, 58312.0], [78.2, 58312.0], [78.3, 58312.0], [78.4, 58334.0], [78.5, 58334.0], [78.6, 58334.0], [78.7, 58334.0], [78.8, 58334.0], [78.9, 58334.0], [79.0, 58334.0], [79.1, 58334.0], [79.2, 58480.0], [79.3, 58480.0], [79.4, 58480.0], [79.5, 58480.0], [79.6, 58480.0], [79.7, 58480.0], [79.8, 58480.0], [79.9, 58480.0], [80.0, 58486.0], [80.1, 58486.0], [80.2, 58486.0], [80.3, 58486.0], [80.4, 58486.0], [80.5, 58486.0], [80.6, 58486.0], [80.7, 58486.0], [80.8, 58486.0], [80.9, 58495.0], [81.0, 58495.0], [81.1, 58495.0], [81.2, 58495.0], [81.3, 58495.0], [81.4, 58495.0], [81.5, 58495.0], [81.6, 58495.0], [81.7, 59055.0], [81.8, 59055.0], [81.9, 59055.0], [82.0, 59055.0], [82.1, 59055.0], [82.2, 59055.0], [82.3, 59055.0], [82.4, 59055.0], [82.5, 59453.0], [82.6, 59453.0], [82.7, 59453.0], [82.8, 59453.0], [82.9, 59453.0], [83.0, 59453.0], [83.1, 59453.0], [83.2, 59453.0], [83.3, 59453.0], [83.4, 59571.0], [83.5, 59571.0], [83.6, 59571.0], [83.7, 59571.0], [83.8, 59571.0], [83.9, 59571.0], [84.0, 59571.0], [84.1, 59571.0], [84.2, 59995.0], [84.3, 59995.0], [84.4, 59995.0], [84.5, 59995.0], [84.6, 59995.0], [84.7, 59995.0], [84.8, 59995.0], [84.9, 59995.0], [85.0, 60033.0], [85.1, 60033.0], [85.2, 60033.0], [85.3, 60033.0], [85.4, 60033.0], [85.5, 60033.0], [85.6, 60033.0], [85.7, 60033.0], [85.8, 60033.0], [85.9, 60039.0], [86.0, 60039.0], [86.1, 60039.0], [86.2, 60039.0], [86.3, 60039.0], [86.4, 60039.0], [86.5, 60039.0], [86.6, 60039.0], [86.7, 60054.0], [86.8, 60054.0], [86.9, 60054.0], [87.0, 60054.0], [87.1, 60054.0], [87.2, 60054.0], [87.3, 60054.0], [87.4, 60054.0], [87.5, 60064.0], [87.6, 60064.0], [87.7, 60064.0], [87.8, 60064.0], [87.9, 60064.0], [88.0, 60064.0], [88.1, 60064.0], [88.2, 60064.0], [88.3, 60064.0], [88.4, 60080.0], [88.5, 60080.0], [88.6, 60080.0], [88.7, 60080.0], [88.8, 60080.0], [88.9, 60080.0], [89.0, 60080.0], [89.1, 60080.0], [89.2, 60082.0], [89.3, 60082.0], [89.4, 60082.0], [89.5, 60082.0], [89.6, 60082.0], [89.7, 60082.0], [89.8, 60082.0], [89.9, 60082.0], [90.0, 60084.0], [90.1, 60084.0], [90.2, 60084.0], [90.3, 60084.0], [90.4, 60084.0], [90.5, 60084.0], [90.6, 60084.0], [90.7, 60084.0], [90.8, 60084.0], [90.9, 60088.0], [91.0, 60088.0], [91.1, 60088.0], [91.2, 60088.0], [91.3, 60088.0], [91.4, 60088.0], [91.5, 60088.0], [91.6, 60088.0], [91.7, 60088.0], [91.8, 60088.0], [91.9, 60088.0], [92.0, 60088.0], [92.1, 60088.0], [92.2, 60088.0], [92.3, 60088.0], [92.4, 60088.0], [92.5, 60090.0], [92.6, 60090.0], [92.7, 60090.0], [92.8, 60090.0], [92.9, 60090.0], [93.0, 60090.0], [93.1, 60090.0], [93.2, 60090.0], [93.3, 60090.0], [93.4, 60090.0], [93.5, 60090.0], [93.6, 60090.0], [93.7, 60090.0], [93.8, 60090.0], [93.9, 60090.0], [94.0, 60090.0], [94.1, 60090.0], [94.2, 60091.0], [94.3, 60091.0], [94.4, 60091.0], [94.5, 60091.0], [94.6, 60091.0], [94.7, 60091.0], [94.8, 60091.0], [94.9, 60091.0], [95.0, 60094.0], [95.1, 60094.0], [95.2, 60094.0], [95.3, 60094.0], [95.4, 60094.0], [95.5, 60094.0], [95.6, 60094.0], [95.7, 60094.0], [95.8, 60094.0], [95.9, 60095.0], [96.0, 60095.0], [96.1, 60095.0], [96.2, 60095.0], [96.3, 60095.0], [96.4, 60095.0], [96.5, 60095.0], [96.6, 60095.0], [96.7, 60099.0], [96.8, 60099.0], [96.9, 60099.0], [97.0, 60099.0], [97.1, 60099.0], [97.2, 60099.0], [97.3, 60099.0], [97.4, 60099.0], [97.5, 60103.0], [97.6, 60103.0], [97.7, 60103.0], [97.8, 60103.0], [97.9, 60103.0], [98.0, 60103.0], [98.1, 60103.0], [98.2, 60103.0], [98.3, 60103.0], [98.4, 60109.0], [98.5, 60109.0], [98.6, 60109.0], [98.7, 60109.0], [98.8, 60109.0], [98.9, 60109.0], [99.0, 60109.0], [99.1, 60109.0], [99.2, 60115.0], [99.3, 60115.0], [99.4, 60115.0], [99.5, 60115.0], [99.6, 60115.0], [99.7, 60115.0], [99.8, 60115.0], [99.9, 60115.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 15.0, "series": [{"data": [[1200.0, 1.0], [2000.0, 1.0], [2500.0, 1.0], [4900.0, 1.0], [6000.0, 1.0], [6900.0, 1.0], [6700.0, 1.0], [7300.0, 1.0], [8300.0, 1.0], [9000.0, 1.0], [9200.0, 1.0], [8800.0, 1.0], [9800.0, 1.0], [11000.0, 1.0], [10900.0, 1.0], [12000.0, 1.0], [11900.0, 1.0], [14500.0, 1.0], [14800.0, 1.0], [15800.0, 1.0], [16100.0, 1.0], [16000.0, 1.0], [17400.0, 1.0], [16900.0, 1.0], [16700.0, 1.0], [18000.0, 1.0], [18200.0, 1.0], [18100.0, 1.0], [18600.0, 1.0], [18900.0, 1.0], [19200.0, 1.0], [19600.0, 1.0], [21300.0, 1.0], [21800.0, 1.0], [22500.0, 1.0], [22700.0, 2.0], [23500.0, 1.0], [22900.0, 1.0], [23200.0, 1.0], [24000.0, 2.0], [24500.0, 1.0], [23600.0, 1.0], [24200.0, 1.0], [25500.0, 1.0], [26400.0, 1.0], [26000.0, 1.0], [27500.0, 1.0], [27600.0, 1.0], [28300.0, 1.0], [27700.0, 1.0], [29600.0, 1.0], [28700.0, 1.0], [29400.0, 1.0], [30000.0, 1.0], [30200.0, 2.0], [30900.0, 2.0], [31900.0, 1.0], [35100.0, 1.0], [37800.0, 1.0], [37400.0, 1.0], [39200.0, 1.0], [40300.0, 1.0], [41300.0, 1.0], [42500.0, 1.0], [44200.0, 1.0], [44400.0, 1.0], [45100.0, 1.0], [47000.0, 1.0], [50000.0, 1.0], [51500.0, 1.0], [52100.0, 1.0], [52900.0, 1.0], [53400.0, 1.0], [54300.0, 1.0], [55600.0, 1.0], [55300.0, 1.0], [57100.0, 1.0], [56900.0, 1.0], [56000.0, 1.0], [56800.0, 1.0], [57000.0, 1.0], [57200.0, 2.0], [57300.0, 1.0], [58400.0, 3.0], [57900.0, 2.0], [57800.0, 2.0], [58300.0, 2.0], [57500.0, 1.0], [59000.0, 1.0], [59400.0, 1.0], [60000.0, 15.0], [60100.0, 3.0], [59900.0, 1.0], [59500.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 101.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 101.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.857142857142857, "minX": 1.79149062E12, "maxY": 21.789473684210524, "series": [{"data": [[1.7914908E12, 13.5625], [1.79149098E12, 7.0], [1.79149068E12, 7.000000000000001], [1.79149086E12, 21.789473684210524], [1.79149074E12, 8.478260869565217], [1.79149092E12, 19.818181818181817], [1.79149062E12, 2.857142857142857]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149098E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 12424.0, "minX": 1.0, "maxY": 60095.0, "series": [{"data": [[2.0, 20400.25], [8.0, 26809.625], [9.0, 30075.142857142855], [10.0, 28559.0], [11.0, 25160.76923076923], [3.0, 12424.0], [12.0, 37765.0], [13.0, 45234.5], [14.0, 39598.333333333336], [15.0, 57245.0], [4.0, 20340.4], [16.0, 57063.0], [1.0, 60088.0], [17.0, 47386.0], [18.0, 41940.4], [19.0, 55120.75], [20.0, 54945.5], [5.0, 60095.0], [21.0, 55851.6], [22.0, 55024.6], [23.0, 55455.0], [6.0, 22278.5], [7.0, 24366.71428571429]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[12.608333333333338, 36579.63333333333]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 23.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.5, "minX": 1.79149062E12, "maxY": 385.5, "series": [{"data": [[1.7914908E12, 51.61666666666667], [1.79149098E12, 40.11666666666667], [1.79149068E12, 64.48333333333333], [1.79149086E12, 61.233333333333334], [1.79149074E12, 73.61666666666666], [1.79149092E12, 68.16666666666667], [1.79149062E12, 22.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7914908E12, 340.6], [1.79149098E12, 239.81666666666666], [1.79149068E12, 353.23333333333335], [1.79149086E12, 378.1], [1.79149074E12, 385.5], [1.79149092E12, 366.3333333333333], [1.79149062E12, 147.58333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149098E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6618.714285714286, "minX": 1.79149062E12, "maxY": 58961.0, "series": [{"data": [[1.7914908E12, 30412.75], [1.79149098E12, 58961.0], [1.79149068E12, 13181.45], [1.79149086E12, 51852.10526315789], [1.79149074E12, 23739.17391304348], [1.79149092E12, 58877.63636363636], [1.79149062E12, 6618.714285714286]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149098E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6618.571428571428, "minX": 1.79149062E12, "maxY": 58960.846153846156, "series": [{"data": [[1.7914908E12, 30412.6875], [1.79149098E12, 58960.846153846156], [1.79149068E12, 13181.4], [1.79149086E12, 51852.05263157895], [1.79149074E12, 23739.130434782608], [1.79149092E12, 58877.63636363636], [1.79149062E12, 6618.571428571428]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149098E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.090909090909092, "minX": 1.79149062E12, "maxY": 15.428571428571429, "series": [{"data": [[1.7914908E12, 10.9375], [1.79149098E12, 10.23076923076923], [1.79149068E12, 11.0], [1.79149086E12, 11.05263157894737], [1.79149074E12, 11.173913043478262], [1.79149092E12, 10.090909090909092], [1.79149062E12, 15.428571428571429]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149098E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1297.0, "minX": 1.79149062E12, "maxY": 59995.0, "series": [{"data": [[1.7914908E12, 40338.0], [1.79149098E12, 58480.0], [1.79149068E12, 24070.0], [1.79149086E12, 59453.0], [1.79149074E12, 30998.0], [1.79149092E12, 59995.0], [1.79149062E12, 14519.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7914908E12, 39549.8], [1.79149098E12, 58480.0], [1.79149068E12, 22314.30000000001], [1.79149086E12, 58495.0], [1.79149074E12, 30689.4], [1.79149092E12, 59867.8], [1.79149062E12, 14519.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7914908E12, 40338.0], [1.79149098E12, 58480.0], [1.79149068E12, 24070.0], [1.79149086E12, 59453.0], [1.79149074E12, 30998.0], [1.79149092E12, 59995.0], [1.79149062E12, 14519.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7914908E12, 40338.0], [1.79149098E12, 58480.0], [1.79149068E12, 24002.8], [1.79149086E12, 59453.0], [1.79149074E12, 30993.8], [1.79149092E12, 59995.0], [1.79149062E12, 14519.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7914908E12, 23220.0], [1.79149098E12, 54384.0], [1.79149068E12, 4987.0], [1.79149086E12, 41324.0], [1.79149074E12, 16045.0], [1.79149092E12, 56038.0], [1.79149062E12, 1297.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7914908E12, 29134.0], [1.79149098E12, 57371.0], [1.79149068E12, 11983.5], [1.79149086E12, 52960.0], [1.79149074E12, 22908.0], [1.79149092E12, 57726.0], [1.79149062E12, 6988.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149098E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 28055.0, "minX": 1.0, "maxY": 60090.0, "series": [{"data": [[1.0, 28055.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60090.0], [2.0, 60081.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28055.0, "minX": 1.0, "maxY": 60090.0, "series": [{"data": [[1.0, 28055.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60090.0], [2.0, 60081.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.79149062E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.7914908E12, 0.4166666666666667], [1.79149068E12, 0.4666666666666667], [1.79149086E12, 0.4], [1.79149074E12, 0.3333333333333333], [1.79149092E12, 0.21666666666666667], [1.79149062E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.79149062E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.7914908E12, 0.26666666666666666], [1.79149098E12, 0.08333333333333333], [1.79149068E12, 0.3333333333333333], [1.79149086E12, 0.31666666666666665], [1.79149074E12, 0.38333333333333336], [1.79149092E12, 0.2], [1.79149062E12, 0.11666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79149098E12, 0.13333333333333333], [1.79149092E12, 0.16666666666666666]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149098E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.79149062E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.7914908E12, 0.26666666666666666], [1.79149098E12, 0.08333333333333333], [1.79149068E12, 0.3333333333333333], [1.79149086E12, 0.31666666666666665], [1.79149074E12, 0.38333333333333336], [1.79149092E12, 0.2], [1.79149062E12, 0.11666666666666667]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79149098E12, 0.13333333333333333], [1.79149092E12, 0.16666666666666666]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149098E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.79149062E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.7914908E12, 0.26666666666666666], [1.79149098E12, 0.08333333333333333], [1.79149068E12, 0.3333333333333333], [1.79149086E12, 0.31666666666666665], [1.79149074E12, 0.38333333333333336], [1.79149092E12, 0.2], [1.79149062E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79149098E12, 0.13333333333333333], [1.79149092E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149098E12, "title": "Total Transactions Per Second"}},
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

