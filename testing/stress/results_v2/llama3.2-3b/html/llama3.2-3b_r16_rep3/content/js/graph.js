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
        data: {"result": {"minY": 1024.0, "minX": 0.0, "maxY": 16027.0, "series": [{"data": [[0.0, 1024.0], [0.1, 1024.0], [0.2, 1024.0], [0.3, 1024.0], [0.4, 1024.0], [0.5, 1024.0], [0.6, 1024.0], [0.7, 1024.0], [0.8, 1024.0], [0.9, 1024.0], [1.0, 1024.0], [1.1, 1024.0], [1.2, 1024.0], [1.3, 1031.0], [1.4, 1031.0], [1.5, 1031.0], [1.6, 1031.0], [1.7, 1031.0], [1.8, 1031.0], [1.9, 1031.0], [2.0, 1031.0], [2.1, 1031.0], [2.2, 1031.0], [2.3, 1031.0], [2.4, 1031.0], [2.5, 1272.0], [2.6, 1272.0], [2.7, 1272.0], [2.8, 1272.0], [2.9, 1272.0], [3.0, 1272.0], [3.1, 1272.0], [3.2, 1272.0], [3.3, 1272.0], [3.4, 1272.0], [3.5, 1272.0], [3.6, 1272.0], [3.7, 1272.0], [3.8, 1315.0], [3.9, 1315.0], [4.0, 1315.0], [4.1, 1315.0], [4.2, 1315.0], [4.3, 1315.0], [4.4, 1315.0], [4.5, 1315.0], [4.6, 1315.0], [4.7, 1315.0], [4.8, 1315.0], [4.9, 1315.0], [5.0, 1492.0], [5.1, 1492.0], [5.2, 1492.0], [5.3, 1492.0], [5.4, 1492.0], [5.5, 1492.0], [5.6, 1492.0], [5.7, 1492.0], [5.8, 1492.0], [5.9, 1492.0], [6.0, 1492.0], [6.1, 1492.0], [6.2, 1492.0], [6.3, 1668.0], [6.4, 1668.0], [6.5, 1668.0], [6.6, 1668.0], [6.7, 1668.0], [6.8, 1668.0], [6.9, 1668.0], [7.0, 1668.0], [7.1, 1668.0], [7.2, 1668.0], [7.3, 1668.0], [7.4, 1668.0], [7.5, 1822.0], [7.6, 1822.0], [7.7, 1822.0], [7.8, 1822.0], [7.9, 1822.0], [8.0, 1822.0], [8.1, 1822.0], [8.2, 1822.0], [8.3, 1822.0], [8.4, 1822.0], [8.5, 1822.0], [8.6, 1822.0], [8.7, 1822.0], [8.8, 1938.0], [8.9, 1938.0], [9.0, 1938.0], [9.1, 1938.0], [9.2, 1938.0], [9.3, 1938.0], [9.4, 1938.0], [9.5, 1938.0], [9.6, 1938.0], [9.7, 1938.0], [9.8, 1938.0], [9.9, 1938.0], [10.0, 2371.0], [10.1, 2371.0], [10.2, 2371.0], [10.3, 2371.0], [10.4, 2371.0], [10.5, 2371.0], [10.6, 2371.0], [10.7, 2371.0], [10.8, 2371.0], [10.9, 2371.0], [11.0, 2371.0], [11.1, 2371.0], [11.2, 2371.0], [11.3, 2443.0], [11.4, 2443.0], [11.5, 2443.0], [11.6, 2443.0], [11.7, 2443.0], [11.8, 2443.0], [11.9, 2443.0], [12.0, 2443.0], [12.1, 2443.0], [12.2, 2443.0], [12.3, 2443.0], [12.4, 2443.0], [12.5, 2691.0], [12.6, 2691.0], [12.7, 2691.0], [12.8, 2691.0], [12.9, 2691.0], [13.0, 2691.0], [13.1, 2691.0], [13.2, 2691.0], [13.3, 2691.0], [13.4, 2691.0], [13.5, 2691.0], [13.6, 2691.0], [13.7, 2691.0], [13.8, 2821.0], [13.9, 2821.0], [14.0, 2821.0], [14.1, 2821.0], [14.2, 2821.0], [14.3, 2821.0], [14.4, 2821.0], [14.5, 2821.0], [14.6, 2821.0], [14.7, 2821.0], [14.8, 2821.0], [14.9, 2821.0], [15.0, 2924.0], [15.1, 2924.0], [15.2, 2924.0], [15.3, 2924.0], [15.4, 2924.0], [15.5, 2924.0], [15.6, 2924.0], [15.7, 2924.0], [15.8, 2924.0], [15.9, 2924.0], [16.0, 2924.0], [16.1, 2924.0], [16.2, 2924.0], [16.3, 3125.0], [16.4, 3125.0], [16.5, 3125.0], [16.6, 3125.0], [16.7, 3125.0], [16.8, 3125.0], [16.9, 3125.0], [17.0, 3125.0], [17.1, 3125.0], [17.2, 3125.0], [17.3, 3125.0], [17.4, 3125.0], [17.5, 3650.0], [17.6, 3650.0], [17.7, 3650.0], [17.8, 3650.0], [17.9, 3650.0], [18.0, 3650.0], [18.1, 3650.0], [18.2, 3650.0], [18.3, 3650.0], [18.4, 3650.0], [18.5, 3650.0], [18.6, 3650.0], [18.7, 3650.0], [18.8, 3661.0], [18.9, 3661.0], [19.0, 3661.0], [19.1, 3661.0], [19.2, 3661.0], [19.3, 3661.0], [19.4, 3661.0], [19.5, 3661.0], [19.6, 3661.0], [19.7, 3661.0], [19.8, 3661.0], [19.9, 3661.0], [20.0, 3851.0], [20.1, 3851.0], [20.2, 3851.0], [20.3, 3851.0], [20.4, 3851.0], [20.5, 3851.0], [20.6, 3851.0], [20.7, 3851.0], [20.8, 3851.0], [20.9, 3851.0], [21.0, 3851.0], [21.1, 3851.0], [21.2, 3851.0], [21.3, 3901.0], [21.4, 3901.0], [21.5, 3901.0], [21.6, 3901.0], [21.7, 3901.0], [21.8, 3901.0], [21.9, 3901.0], [22.0, 3901.0], [22.1, 3901.0], [22.2, 3901.0], [22.3, 3901.0], [22.4, 3901.0], [22.5, 3985.0], [22.6, 3985.0], [22.7, 3985.0], [22.8, 3985.0], [22.9, 3985.0], [23.0, 3985.0], [23.1, 3985.0], [23.2, 3985.0], [23.3, 3985.0], [23.4, 3985.0], [23.5, 3985.0], [23.6, 3985.0], [23.7, 3985.0], [23.8, 4276.0], [23.9, 4276.0], [24.0, 4276.0], [24.1, 4276.0], [24.2, 4276.0], [24.3, 4276.0], [24.4, 4276.0], [24.5, 4276.0], [24.6, 4276.0], [24.7, 4276.0], [24.8, 4276.0], [24.9, 4276.0], [25.0, 4321.0], [25.1, 4321.0], [25.2, 4321.0], [25.3, 4321.0], [25.4, 4321.0], [25.5, 4321.0], [25.6, 4321.0], [25.7, 4321.0], [25.8, 4321.0], [25.9, 4321.0], [26.0, 4321.0], [26.1, 4321.0], [26.2, 4321.0], [26.3, 4338.0], [26.4, 4338.0], [26.5, 4338.0], [26.6, 4338.0], [26.7, 4338.0], [26.8, 4338.0], [26.9, 4338.0], [27.0, 4338.0], [27.1, 4338.0], [27.2, 4338.0], [27.3, 4338.0], [27.4, 4338.0], [27.5, 4467.0], [27.6, 4467.0], [27.7, 4467.0], [27.8, 4467.0], [27.9, 4467.0], [28.0, 4467.0], [28.1, 4467.0], [28.2, 4467.0], [28.3, 4467.0], [28.4, 4467.0], [28.5, 4467.0], [28.6, 4467.0], [28.7, 4467.0], [28.8, 4517.0], [28.9, 4517.0], [29.0, 4517.0], [29.1, 4517.0], [29.2, 4517.0], [29.3, 4517.0], [29.4, 4517.0], [29.5, 4517.0], [29.6, 4517.0], [29.7, 4517.0], [29.8, 4517.0], [29.9, 4517.0], [30.0, 5035.0], [30.1, 5035.0], [30.2, 5035.0], [30.3, 5035.0], [30.4, 5035.0], [30.5, 5035.0], [30.6, 5035.0], [30.7, 5035.0], [30.8, 5035.0], [30.9, 5035.0], [31.0, 5035.0], [31.1, 5035.0], [31.2, 5035.0], [31.3, 5036.0], [31.4, 5036.0], [31.5, 5036.0], [31.6, 5036.0], [31.7, 5036.0], [31.8, 5036.0], [31.9, 5036.0], [32.0, 5036.0], [32.1, 5036.0], [32.2, 5036.0], [32.3, 5036.0], [32.4, 5036.0], [32.5, 5227.0], [32.6, 5227.0], [32.7, 5227.0], [32.8, 5227.0], [32.9, 5227.0], [33.0, 5227.0], [33.1, 5227.0], [33.2, 5227.0], [33.3, 5227.0], [33.4, 5227.0], [33.5, 5227.0], [33.6, 5227.0], [33.7, 5227.0], [33.8, 5286.0], [33.9, 5286.0], [34.0, 5286.0], [34.1, 5286.0], [34.2, 5286.0], [34.3, 5286.0], [34.4, 5286.0], [34.5, 5286.0], [34.6, 5286.0], [34.7, 5286.0], [34.8, 5286.0], [34.9, 5286.0], [35.0, 5295.0], [35.1, 5295.0], [35.2, 5295.0], [35.3, 5295.0], [35.4, 5295.0], [35.5, 5295.0], [35.6, 5295.0], [35.7, 5295.0], [35.8, 5295.0], [35.9, 5295.0], [36.0, 5295.0], [36.1, 5295.0], [36.2, 5295.0], [36.3, 5448.0], [36.4, 5448.0], [36.5, 5448.0], [36.6, 5448.0], [36.7, 5448.0], [36.8, 5448.0], [36.9, 5448.0], [37.0, 5448.0], [37.1, 5448.0], [37.2, 5448.0], [37.3, 5448.0], [37.4, 5448.0], [37.5, 5554.0], [37.6, 5554.0], [37.7, 5554.0], [37.8, 5554.0], [37.9, 5554.0], [38.0, 5554.0], [38.1, 5554.0], [38.2, 5554.0], [38.3, 5554.0], [38.4, 5554.0], [38.5, 5554.0], [38.6, 5554.0], [38.7, 5554.0], [38.8, 5611.0], [38.9, 5611.0], [39.0, 5611.0], [39.1, 5611.0], [39.2, 5611.0], [39.3, 5611.0], [39.4, 5611.0], [39.5, 5611.0], [39.6, 5611.0], [39.7, 5611.0], [39.8, 5611.0], [39.9, 5611.0], [40.0, 5688.0], [40.1, 5688.0], [40.2, 5688.0], [40.3, 5688.0], [40.4, 5688.0], [40.5, 5688.0], [40.6, 5688.0], [40.7, 5688.0], [40.8, 5688.0], [40.9, 5688.0], [41.0, 5688.0], [41.1, 5688.0], [41.2, 5688.0], [41.3, 6037.0], [41.4, 6037.0], [41.5, 6037.0], [41.6, 6037.0], [41.7, 6037.0], [41.8, 6037.0], [41.9, 6037.0], [42.0, 6037.0], [42.1, 6037.0], [42.2, 6037.0], [42.3, 6037.0], [42.4, 6037.0], [42.5, 6463.0], [42.6, 6463.0], [42.7, 6463.0], [42.8, 6463.0], [42.9, 6463.0], [43.0, 6463.0], [43.1, 6463.0], [43.2, 6463.0], [43.3, 6463.0], [43.4, 6463.0], [43.5, 6463.0], [43.6, 6463.0], [43.7, 6463.0], [43.8, 6531.0], [43.9, 6531.0], [44.0, 6531.0], [44.1, 6531.0], [44.2, 6531.0], [44.3, 6531.0], [44.4, 6531.0], [44.5, 6531.0], [44.6, 6531.0], [44.7, 6531.0], [44.8, 6531.0], [44.9, 6531.0], [45.0, 6650.0], [45.1, 6650.0], [45.2, 6650.0], [45.3, 6650.0], [45.4, 6650.0], [45.5, 6650.0], [45.6, 6650.0], [45.7, 6650.0], [45.8, 6650.0], [45.9, 6650.0], [46.0, 6650.0], [46.1, 6650.0], [46.2, 6650.0], [46.3, 6835.0], [46.4, 6835.0], [46.5, 6835.0], [46.6, 6835.0], [46.7, 6835.0], [46.8, 6835.0], [46.9, 6835.0], [47.0, 6835.0], [47.1, 6835.0], [47.2, 6835.0], [47.3, 6835.0], [47.4, 6835.0], [47.5, 6924.0], [47.6, 6924.0], [47.7, 6924.0], [47.8, 6924.0], [47.9, 6924.0], [48.0, 6924.0], [48.1, 6924.0], [48.2, 6924.0], [48.3, 6924.0], [48.4, 6924.0], [48.5, 6924.0], [48.6, 6924.0], [48.7, 6924.0], [48.8, 7027.0], [48.9, 7027.0], [49.0, 7027.0], [49.1, 7027.0], [49.2, 7027.0], [49.3, 7027.0], [49.4, 7027.0], [49.5, 7027.0], [49.6, 7027.0], [49.7, 7027.0], [49.8, 7027.0], [49.9, 7027.0], [50.0, 7056.0], [50.1, 7056.0], [50.2, 7056.0], [50.3, 7056.0], [50.4, 7056.0], [50.5, 7056.0], [50.6, 7056.0], [50.7, 7056.0], [50.8, 7056.0], [50.9, 7056.0], [51.0, 7056.0], [51.1, 7056.0], [51.2, 7056.0], [51.3, 7205.0], [51.4, 7205.0], [51.5, 7205.0], [51.6, 7205.0], [51.7, 7205.0], [51.8, 7205.0], [51.9, 7205.0], [52.0, 7205.0], [52.1, 7205.0], [52.2, 7205.0], [52.3, 7205.0], [52.4, 7205.0], [52.5, 7295.0], [52.6, 7295.0], [52.7, 7295.0], [52.8, 7295.0], [52.9, 7295.0], [53.0, 7295.0], [53.1, 7295.0], [53.2, 7295.0], [53.3, 7295.0], [53.4, 7295.0], [53.5, 7295.0], [53.6, 7295.0], [53.7, 7295.0], [53.8, 7509.0], [53.9, 7509.0], [54.0, 7509.0], [54.1, 7509.0], [54.2, 7509.0], [54.3, 7509.0], [54.4, 7509.0], [54.5, 7509.0], [54.6, 7509.0], [54.7, 7509.0], [54.8, 7509.0], [54.9, 7509.0], [55.0, 7515.0], [55.1, 7515.0], [55.2, 7515.0], [55.3, 7515.0], [55.4, 7515.0], [55.5, 7515.0], [55.6, 7515.0], [55.7, 7515.0], [55.8, 7515.0], [55.9, 7515.0], [56.0, 7515.0], [56.1, 7515.0], [56.2, 7515.0], [56.3, 7540.0], [56.4, 7540.0], [56.5, 7540.0], [56.6, 7540.0], [56.7, 7540.0], [56.8, 7540.0], [56.9, 7540.0], [57.0, 7540.0], [57.1, 7540.0], [57.2, 7540.0], [57.3, 7540.0], [57.4, 7540.0], [57.5, 7712.0], [57.6, 7712.0], [57.7, 7712.0], [57.8, 7712.0], [57.9, 7712.0], [58.0, 7712.0], [58.1, 7712.0], [58.2, 7712.0], [58.3, 7712.0], [58.4, 7712.0], [58.5, 7712.0], [58.6, 7712.0], [58.7, 7712.0], [58.8, 7815.0], [58.9, 7815.0], [59.0, 7815.0], [59.1, 7815.0], [59.2, 7815.0], [59.3, 7815.0], [59.4, 7815.0], [59.5, 7815.0], [59.6, 7815.0], [59.7, 7815.0], [59.8, 7815.0], [59.9, 7815.0], [60.0, 7884.0], [60.1, 7884.0], [60.2, 7884.0], [60.3, 7884.0], [60.4, 7884.0], [60.5, 7884.0], [60.6, 7884.0], [60.7, 7884.0], [60.8, 7884.0], [60.9, 7884.0], [61.0, 7884.0], [61.1, 7884.0], [61.2, 7884.0], [61.3, 7904.0], [61.4, 7904.0], [61.5, 7904.0], [61.6, 7904.0], [61.7, 7904.0], [61.8, 7904.0], [61.9, 7904.0], [62.0, 7904.0], [62.1, 7904.0], [62.2, 7904.0], [62.3, 7904.0], [62.4, 7904.0], [62.5, 8122.0], [62.6, 8122.0], [62.7, 8122.0], [62.8, 8122.0], [62.9, 8122.0], [63.0, 8122.0], [63.1, 8122.0], [63.2, 8122.0], [63.3, 8122.0], [63.4, 8122.0], [63.5, 8122.0], [63.6, 8122.0], [63.7, 8122.0], [63.8, 8309.0], [63.9, 8309.0], [64.0, 8309.0], [64.1, 8309.0], [64.2, 8309.0], [64.3, 8309.0], [64.4, 8309.0], [64.5, 8309.0], [64.6, 8309.0], [64.7, 8309.0], [64.8, 8309.0], [64.9, 8309.0], [65.0, 8388.0], [65.1, 8388.0], [65.2, 8388.0], [65.3, 8388.0], [65.4, 8388.0], [65.5, 8388.0], [65.6, 8388.0], [65.7, 8388.0], [65.8, 8388.0], [65.9, 8388.0], [66.0, 8388.0], [66.1, 8388.0], [66.2, 8388.0], [66.3, 8629.0], [66.4, 8629.0], [66.5, 8629.0], [66.6, 8629.0], [66.7, 8629.0], [66.8, 8629.0], [66.9, 8629.0], [67.0, 8629.0], [67.1, 8629.0], [67.2, 8629.0], [67.3, 8629.0], [67.4, 8629.0], [67.5, 8832.0], [67.6, 8832.0], [67.7, 8832.0], [67.8, 8832.0], [67.9, 8832.0], [68.0, 8832.0], [68.1, 8832.0], [68.2, 8832.0], [68.3, 8832.0], [68.4, 8832.0], [68.5, 8832.0], [68.6, 8832.0], [68.7, 8832.0], [68.8, 9171.0], [68.9, 9171.0], [69.0, 9171.0], [69.1, 9171.0], [69.2, 9171.0], [69.3, 9171.0], [69.4, 9171.0], [69.5, 9171.0], [69.6, 9171.0], [69.7, 9171.0], [69.8, 9171.0], [69.9, 9171.0], [70.0, 9426.0], [70.1, 9426.0], [70.2, 9426.0], [70.3, 9426.0], [70.4, 9426.0], [70.5, 9426.0], [70.6, 9426.0], [70.7, 9426.0], [70.8, 9426.0], [70.9, 9426.0], [71.0, 9426.0], [71.1, 9426.0], [71.2, 9426.0], [71.3, 9520.0], [71.4, 9520.0], [71.5, 9520.0], [71.6, 9520.0], [71.7, 9520.0], [71.8, 9520.0], [71.9, 9520.0], [72.0, 9520.0], [72.1, 9520.0], [72.2, 9520.0], [72.3, 9520.0], [72.4, 9520.0], [72.5, 9761.0], [72.6, 9761.0], [72.7, 9761.0], [72.8, 9761.0], [72.9, 9761.0], [73.0, 9761.0], [73.1, 9761.0], [73.2, 9761.0], [73.3, 9761.0], [73.4, 9761.0], [73.5, 9761.0], [73.6, 9761.0], [73.7, 9761.0], [73.8, 9907.0], [73.9, 9907.0], [74.0, 9907.0], [74.1, 9907.0], [74.2, 9907.0], [74.3, 9907.0], [74.4, 9907.0], [74.5, 9907.0], [74.6, 9907.0], [74.7, 9907.0], [74.8, 9907.0], [74.9, 9907.0], [75.0, 9980.0], [75.1, 9980.0], [75.2, 9980.0], [75.3, 9980.0], [75.4, 9980.0], [75.5, 9980.0], [75.6, 9980.0], [75.7, 9980.0], [75.8, 9980.0], [75.9, 9980.0], [76.0, 9980.0], [76.1, 9980.0], [76.2, 9980.0], [76.3, 10129.0], [76.4, 10129.0], [76.5, 10129.0], [76.6, 10129.0], [76.7, 10129.0], [76.8, 10129.0], [76.9, 10129.0], [77.0, 10129.0], [77.1, 10129.0], [77.2, 10129.0], [77.3, 10129.0], [77.4, 10129.0], [77.5, 10159.0], [77.6, 10159.0], [77.7, 10159.0], [77.8, 10159.0], [77.9, 10159.0], [78.0, 10159.0], [78.1, 10159.0], [78.2, 10159.0], [78.3, 10159.0], [78.4, 10159.0], [78.5, 10159.0], [78.6, 10159.0], [78.7, 10159.0], [78.8, 10219.0], [78.9, 10219.0], [79.0, 10219.0], [79.1, 10219.0], [79.2, 10219.0], [79.3, 10219.0], [79.4, 10219.0], [79.5, 10219.0], [79.6, 10219.0], [79.7, 10219.0], [79.8, 10219.0], [79.9, 10219.0], [80.0, 10362.0], [80.1, 10362.0], [80.2, 10362.0], [80.3, 10362.0], [80.4, 10362.0], [80.5, 10362.0], [80.6, 10362.0], [80.7, 10362.0], [80.8, 10362.0], [80.9, 10362.0], [81.0, 10362.0], [81.1, 10362.0], [81.2, 10362.0], [81.3, 10816.0], [81.4, 10816.0], [81.5, 10816.0], [81.6, 10816.0], [81.7, 10816.0], [81.8, 10816.0], [81.9, 10816.0], [82.0, 10816.0], [82.1, 10816.0], [82.2, 10816.0], [82.3, 10816.0], [82.4, 10816.0], [82.5, 10985.0], [82.6, 10985.0], [82.7, 10985.0], [82.8, 10985.0], [82.9, 10985.0], [83.0, 10985.0], [83.1, 10985.0], [83.2, 10985.0], [83.3, 10985.0], [83.4, 10985.0], [83.5, 10985.0], [83.6, 10985.0], [83.7, 10985.0], [83.8, 11044.0], [83.9, 11044.0], [84.0, 11044.0], [84.1, 11044.0], [84.2, 11044.0], [84.3, 11044.0], [84.4, 11044.0], [84.5, 11044.0], [84.6, 11044.0], [84.7, 11044.0], [84.8, 11044.0], [84.9, 11044.0], [85.0, 11187.0], [85.1, 11187.0], [85.2, 11187.0], [85.3, 11187.0], [85.4, 11187.0], [85.5, 11187.0], [85.6, 11187.0], [85.7, 11187.0], [85.8, 11187.0], [85.9, 11187.0], [86.0, 11187.0], [86.1, 11187.0], [86.2, 11187.0], [86.3, 11436.0], [86.4, 11436.0], [86.5, 11436.0], [86.6, 11436.0], [86.7, 11436.0], [86.8, 11436.0], [86.9, 11436.0], [87.0, 11436.0], [87.1, 11436.0], [87.2, 11436.0], [87.3, 11436.0], [87.4, 11436.0], [87.5, 11597.0], [87.6, 11597.0], [87.7, 11597.0], [87.8, 11597.0], [87.9, 11597.0], [88.0, 11597.0], [88.1, 11597.0], [88.2, 11597.0], [88.3, 11597.0], [88.4, 11597.0], [88.5, 11597.0], [88.6, 11597.0], [88.7, 11597.0], [88.8, 11755.0], [88.9, 11755.0], [89.0, 11755.0], [89.1, 11755.0], [89.2, 11755.0], [89.3, 11755.0], [89.4, 11755.0], [89.5, 11755.0], [89.6, 11755.0], [89.7, 11755.0], [89.8, 11755.0], [89.9, 11755.0], [90.0, 11824.0], [90.1, 11824.0], [90.2, 11824.0], [90.3, 11824.0], [90.4, 11824.0], [90.5, 11824.0], [90.6, 11824.0], [90.7, 11824.0], [90.8, 11824.0], [90.9, 11824.0], [91.0, 11824.0], [91.1, 11824.0], [91.2, 11824.0], [91.3, 13037.0], [91.4, 13037.0], [91.5, 13037.0], [91.6, 13037.0], [91.7, 13037.0], [91.8, 13037.0], [91.9, 13037.0], [92.0, 13037.0], [92.1, 13037.0], [92.2, 13037.0], [92.3, 13037.0], [92.4, 13037.0], [92.5, 13621.0], [92.6, 13621.0], [92.7, 13621.0], [92.8, 13621.0], [92.9, 13621.0], [93.0, 13621.0], [93.1, 13621.0], [93.2, 13621.0], [93.3, 13621.0], [93.4, 13621.0], [93.5, 13621.0], [93.6, 13621.0], [93.7, 13621.0], [93.8, 14588.0], [93.9, 14588.0], [94.0, 14588.0], [94.1, 14588.0], [94.2, 14588.0], [94.3, 14588.0], [94.4, 14588.0], [94.5, 14588.0], [94.6, 14588.0], [94.7, 14588.0], [94.8, 14588.0], [94.9, 14588.0], [95.0, 14675.0], [95.1, 14675.0], [95.2, 14675.0], [95.3, 14675.0], [95.4, 14675.0], [95.5, 14675.0], [95.6, 14675.0], [95.7, 14675.0], [95.8, 14675.0], [95.9, 14675.0], [96.0, 14675.0], [96.1, 14675.0], [96.2, 14675.0], [96.3, 14829.0], [96.4, 14829.0], [96.5, 14829.0], [96.6, 14829.0], [96.7, 14829.0], [96.8, 14829.0], [96.9, 14829.0], [97.0, 14829.0], [97.1, 14829.0], [97.2, 14829.0], [97.3, 14829.0], [97.4, 14829.0], [97.5, 15453.0], [97.6, 15453.0], [97.7, 15453.0], [97.8, 15453.0], [97.9, 15453.0], [98.0, 15453.0], [98.1, 15453.0], [98.2, 15453.0], [98.3, 15453.0], [98.4, 15453.0], [98.5, 15453.0], [98.6, 15453.0], [98.7, 15453.0], [98.8, 16027.0], [98.9, 16027.0], [99.0, 16027.0], [99.1, 16027.0], [99.2, 16027.0], [99.3, 16027.0], [99.4, 16027.0], [99.5, 16027.0], [99.6, 16027.0], [99.7, 16027.0], [99.8, 16027.0], [99.9, 16027.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 3.0, "series": [{"data": [[1000.0, 2.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1600.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4300.0, 2.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [5000.0, 2.0], [5200.0, 3.0], [5400.0, 1.0], [5600.0, 2.0], [5500.0, 1.0], [6000.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6600.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7000.0, 2.0], [7200.0, 2.0], [7500.0, 3.0], [7700.0, 1.0], [7800.0, 2.0], [7900.0, 1.0], [8100.0, 1.0], [8300.0, 2.0], [8600.0, 1.0], [9100.0, 1.0], [8800.0, 1.0], [9700.0, 1.0], [9500.0, 1.0], [9400.0, 1.0], [10100.0, 2.0], [9900.0, 2.0], [10200.0, 1.0], [10300.0, 1.0], [11000.0, 1.0], [11100.0, 1.0], [10900.0, 1.0], [10800.0, 1.0], [11700.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [11800.0, 1.0], [13000.0, 1.0], [13600.0, 1.0], [14600.0, 1.0], [14800.0, 1.0], [14500.0, 1.0], [15400.0, 1.0], [16000.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 75.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79152176E12, "maxY": 3.625, "series": [{"data": [[1.791522E12, 2.0666666666666664], [1.79152206E12, 3.1875000000000004], [1.79152188E12, 2.0666666666666664], [1.79152194E12, 2.2499999999999996], [1.79152176E12, 1.0], [1.79152182E12, 3.625]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79152206E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3797.4117647058824, "minX": 1.0, "maxY": 9351.846153846152, "series": [{"data": [[1.0, 3797.4117647058824], [2.0, 7443.999999999999], [4.0, 9351.846153846152], [5.0, 7680.0], [3.0, 8131.6], [6.0, 7318.0]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[2.612500000000001, 7159.674999999999]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6.433333333333334, "minX": 1.79152176E12, "maxY": 321.6666666666667, "series": [{"data": [[1.791522E12, 48.13333333333333], [1.79152206E12, 51.53333333333333], [1.79152188E12, 48.1], [1.79152194E12, 50.983333333333334], [1.79152176E12, 6.433333333333334], [1.79152182E12, 51.333333333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.791522E12, 315.18333333333334], [1.79152206E12, 321.6666666666667], [1.79152188E12, 267.15], [1.79152194E12, 270.23333333333335], [1.79152176E12, 15.083333333333334], [1.79152182E12, 316.3666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79152206E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1148.0, "minX": 1.79152176E12, "maxY": 9874.75, "series": [{"data": [[1.791522E12, 5775.933333333333], [1.79152206E12, 9697.687499999998], [1.79152188E12, 5467.666666666667], [1.79152194E12, 5541.5625], [1.79152176E12, 1148.0], [1.79152182E12, 9874.75]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79152206E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1147.5, "minX": 1.79152176E12, "maxY": 9874.6875, "series": [{"data": [[1.791522E12, 5775.533333333335], [1.79152206E12, 9697.624999999998], [1.79152188E12, 5467.666666666667], [1.79152194E12, 5541.375], [1.79152176E12, 1147.5], [1.79152182E12, 9874.6875]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79152206E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.8125, "minX": 1.79152176E12, "maxY": 23.0, "series": [{"data": [[1.791522E12, 10.066666666666666], [1.79152206E12, 10.937500000000002], [1.79152188E12, 10.866666666666667], [1.79152194E12, 9.8125], [1.79152176E12, 23.0], [1.79152182E12, 10.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79152206E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1024.0, "minX": 1.79152176E12, "maxY": 16027.0, "series": [{"data": [[1.791522E12, 10219.0], [1.79152206E12, 14829.0], [1.79152188E12, 11187.0], [1.79152194E12, 10362.0], [1.79152176E12, 1272.0], [1.79152182E12, 16027.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.791522E12, 9386.800000000001], [1.79152206E12, 14660.3], [1.79152188E12, 10570.2], [1.79152194E12, 10043.5], [1.79152176E12, 1272.0], [1.79152182E12, 15625.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.791522E12, 10219.0], [1.79152206E12, 14829.0], [1.79152188E12, 11187.0], [1.79152194E12, 10362.0], [1.79152176E12, 1272.0], [1.79152182E12, 16027.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.791522E12, 10219.0], [1.79152206E12, 14829.0], [1.79152188E12, 11187.0], [1.79152194E12, 10362.0], [1.79152176E12, 1272.0], [1.79152182E12, 16027.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.791522E12, 1492.0], [1.79152206E12, 3650.0], [1.79152188E12, 1031.0], [1.79152194E12, 1668.0], [1.79152176E12, 1024.0], [1.79152182E12, 1315.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.791522E12, 5554.0], [1.79152206E12, 9750.0], [1.79152188E12, 5448.0], [1.79152194E12, 5131.0], [1.79152176E12, 1148.0], [1.79152182E12, 9258.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79152206E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7041.5, "minX": 1.0, "maxY": 7041.5, "series": [{"data": [[1.0, 7041.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7041.5, "minX": 1.0, "maxY": 7041.5, "series": [{"data": [[1.0, 7041.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79152176E12, "maxY": 0.3, "series": [{"data": [[1.791522E12, 0.23333333333333334], [1.79152206E12, 0.26666666666666666], [1.79152188E12, 0.21666666666666667], [1.79152194E12, 0.2833333333333333], [1.79152176E12, 0.03333333333333333], [1.79152182E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79152206E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79152176E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.791522E12, 0.25], [1.79152206E12, 0.26666666666666666], [1.79152188E12, 0.25], [1.79152194E12, 0.26666666666666666], [1.79152176E12, 0.03333333333333333], [1.79152182E12, 0.26666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79152206E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79152176E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.791522E12, 0.25], [1.79152206E12, 0.26666666666666666], [1.79152188E12, 0.25], [1.79152194E12, 0.26666666666666666], [1.79152176E12, 0.03333333333333333], [1.79152182E12, 0.26666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79152206E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79152176E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.791522E12, 0.25], [1.79152206E12, 0.26666666666666666], [1.79152188E12, 0.25], [1.79152194E12, 0.26666666666666666], [1.79152176E12, 0.03333333333333333], [1.79152182E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79152206E12, "title": "Total Transactions Per Second"}},
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

