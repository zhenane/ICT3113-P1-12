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
        data: {"result": {"minY": 1096.0, "minX": 0.0, "maxY": 26827.0, "series": [{"data": [[0.0, 1096.0], [0.1, 1096.0], [0.2, 1096.0], [0.3, 1096.0], [0.4, 1096.0], [0.5, 1096.0], [0.6, 1096.0], [0.7, 1096.0], [0.8, 1096.0], [0.9, 1096.0], [1.0, 1096.0], [1.1, 1096.0], [1.2, 1096.0], [1.3, 1155.0], [1.4, 1155.0], [1.5, 1155.0], [1.6, 1155.0], [1.7, 1155.0], [1.8, 1155.0], [1.9, 1155.0], [2.0, 1155.0], [2.1, 1155.0], [2.2, 1155.0], [2.3, 1155.0], [2.4, 1155.0], [2.5, 1337.0], [2.6, 1337.0], [2.7, 1337.0], [2.8, 1337.0], [2.9, 1337.0], [3.0, 1337.0], [3.1, 1337.0], [3.2, 1337.0], [3.3, 1337.0], [3.4, 1337.0], [3.5, 1337.0], [3.6, 1337.0], [3.7, 1337.0], [3.8, 1587.0], [3.9, 1587.0], [4.0, 1587.0], [4.1, 1587.0], [4.2, 1587.0], [4.3, 1587.0], [4.4, 1587.0], [4.5, 1587.0], [4.6, 1587.0], [4.7, 1587.0], [4.8, 1587.0], [4.9, 1587.0], [5.0, 1690.0], [5.1, 1690.0], [5.2, 1690.0], [5.3, 1690.0], [5.4, 1690.0], [5.5, 1690.0], [5.6, 1690.0], [5.7, 1690.0], [5.8, 1690.0], [5.9, 1690.0], [6.0, 1690.0], [6.1, 1690.0], [6.2, 1690.0], [6.3, 1867.0], [6.4, 1867.0], [6.5, 1867.0], [6.6, 1867.0], [6.7, 1867.0], [6.8, 1867.0], [6.9, 1867.0], [7.0, 1867.0], [7.1, 1867.0], [7.2, 1867.0], [7.3, 1867.0], [7.4, 1867.0], [7.5, 2065.0], [7.6, 2065.0], [7.7, 2065.0], [7.8, 2065.0], [7.9, 2065.0], [8.0, 2065.0], [8.1, 2065.0], [8.2, 2065.0], [8.3, 2065.0], [8.4, 2065.0], [8.5, 2065.0], [8.6, 2065.0], [8.7, 2065.0], [8.8, 2120.0], [8.9, 2120.0], [9.0, 2120.0], [9.1, 2120.0], [9.2, 2120.0], [9.3, 2120.0], [9.4, 2120.0], [9.5, 2120.0], [9.6, 2120.0], [9.7, 2120.0], [9.8, 2120.0], [9.9, 2120.0], [10.0, 2416.0], [10.1, 2416.0], [10.2, 2416.0], [10.3, 2416.0], [10.4, 2416.0], [10.5, 2416.0], [10.6, 2416.0], [10.7, 2416.0], [10.8, 2416.0], [10.9, 2416.0], [11.0, 2416.0], [11.1, 2416.0], [11.2, 2416.0], [11.3, 2471.0], [11.4, 2471.0], [11.5, 2471.0], [11.6, 2471.0], [11.7, 2471.0], [11.8, 2471.0], [11.9, 2471.0], [12.0, 2471.0], [12.1, 2471.0], [12.2, 2471.0], [12.3, 2471.0], [12.4, 2471.0], [12.5, 2640.0], [12.6, 2640.0], [12.7, 2640.0], [12.8, 2640.0], [12.9, 2640.0], [13.0, 2640.0], [13.1, 2640.0], [13.2, 2640.0], [13.3, 2640.0], [13.4, 2640.0], [13.5, 2640.0], [13.6, 2640.0], [13.7, 2640.0], [13.8, 2978.0], [13.9, 2978.0], [14.0, 2978.0], [14.1, 2978.0], [14.2, 2978.0], [14.3, 2978.0], [14.4, 2978.0], [14.5, 2978.0], [14.6, 2978.0], [14.7, 2978.0], [14.8, 2978.0], [14.9, 2978.0], [15.0, 3134.0], [15.1, 3134.0], [15.2, 3134.0], [15.3, 3134.0], [15.4, 3134.0], [15.5, 3134.0], [15.6, 3134.0], [15.7, 3134.0], [15.8, 3134.0], [15.9, 3134.0], [16.0, 3134.0], [16.1, 3134.0], [16.2, 3134.0], [16.3, 4026.0], [16.4, 4026.0], [16.5, 4026.0], [16.6, 4026.0], [16.7, 4026.0], [16.8, 4026.0], [16.9, 4026.0], [17.0, 4026.0], [17.1, 4026.0], [17.2, 4026.0], [17.3, 4026.0], [17.4, 4026.0], [17.5, 4112.0], [17.6, 4112.0], [17.7, 4112.0], [17.8, 4112.0], [17.9, 4112.0], [18.0, 4112.0], [18.1, 4112.0], [18.2, 4112.0], [18.3, 4112.0], [18.4, 4112.0], [18.5, 4112.0], [18.6, 4112.0], [18.7, 4112.0], [18.8, 4184.0], [18.9, 4184.0], [19.0, 4184.0], [19.1, 4184.0], [19.2, 4184.0], [19.3, 4184.0], [19.4, 4184.0], [19.5, 4184.0], [19.6, 4184.0], [19.7, 4184.0], [19.8, 4184.0], [19.9, 4184.0], [20.0, 4204.0], [20.1, 4204.0], [20.2, 4204.0], [20.3, 4204.0], [20.4, 4204.0], [20.5, 4204.0], [20.6, 4204.0], [20.7, 4204.0], [20.8, 4204.0], [20.9, 4204.0], [21.0, 4204.0], [21.1, 4204.0], [21.2, 4204.0], [21.3, 4315.0], [21.4, 4315.0], [21.5, 4315.0], [21.6, 4315.0], [21.7, 4315.0], [21.8, 4315.0], [21.9, 4315.0], [22.0, 4315.0], [22.1, 4315.0], [22.2, 4315.0], [22.3, 4315.0], [22.4, 4315.0], [22.5, 4702.0], [22.6, 4702.0], [22.7, 4702.0], [22.8, 4702.0], [22.9, 4702.0], [23.0, 4702.0], [23.1, 4702.0], [23.2, 4702.0], [23.3, 4702.0], [23.4, 4702.0], [23.5, 4702.0], [23.6, 4702.0], [23.7, 4702.0], [23.8, 4943.0], [23.9, 4943.0], [24.0, 4943.0], [24.1, 4943.0], [24.2, 4943.0], [24.3, 4943.0], [24.4, 4943.0], [24.5, 4943.0], [24.6, 4943.0], [24.7, 4943.0], [24.8, 4943.0], [24.9, 4943.0], [25.0, 5015.0], [25.1, 5015.0], [25.2, 5015.0], [25.3, 5015.0], [25.4, 5015.0], [25.5, 5015.0], [25.6, 5015.0], [25.7, 5015.0], [25.8, 5015.0], [25.9, 5015.0], [26.0, 5015.0], [26.1, 5015.0], [26.2, 5015.0], [26.3, 5137.0], [26.4, 5137.0], [26.5, 5137.0], [26.6, 5137.0], [26.7, 5137.0], [26.8, 5137.0], [26.9, 5137.0], [27.0, 5137.0], [27.1, 5137.0], [27.2, 5137.0], [27.3, 5137.0], [27.4, 5137.0], [27.5, 5295.0], [27.6, 5295.0], [27.7, 5295.0], [27.8, 5295.0], [27.9, 5295.0], [28.0, 5295.0], [28.1, 5295.0], [28.2, 5295.0], [28.3, 5295.0], [28.4, 5295.0], [28.5, 5295.0], [28.6, 5295.0], [28.7, 5295.0], [28.8, 5311.0], [28.9, 5311.0], [29.0, 5311.0], [29.1, 5311.0], [29.2, 5311.0], [29.3, 5311.0], [29.4, 5311.0], [29.5, 5311.0], [29.6, 5311.0], [29.7, 5311.0], [29.8, 5311.0], [29.9, 5311.0], [30.0, 5451.0], [30.1, 5451.0], [30.2, 5451.0], [30.3, 5451.0], [30.4, 5451.0], [30.5, 5451.0], [30.6, 5451.0], [30.7, 5451.0], [30.8, 5451.0], [30.9, 5451.0], [31.0, 5451.0], [31.1, 5451.0], [31.2, 5451.0], [31.3, 5471.0], [31.4, 5471.0], [31.5, 5471.0], [31.6, 5471.0], [31.7, 5471.0], [31.8, 5471.0], [31.9, 5471.0], [32.0, 5471.0], [32.1, 5471.0], [32.2, 5471.0], [32.3, 5471.0], [32.4, 5471.0], [32.5, 5996.0], [32.6, 5996.0], [32.7, 5996.0], [32.8, 5996.0], [32.9, 5996.0], [33.0, 5996.0], [33.1, 5996.0], [33.2, 5996.0], [33.3, 5996.0], [33.4, 5996.0], [33.5, 5996.0], [33.6, 5996.0], [33.7, 5996.0], [33.8, 6078.0], [33.9, 6078.0], [34.0, 6078.0], [34.1, 6078.0], [34.2, 6078.0], [34.3, 6078.0], [34.4, 6078.0], [34.5, 6078.0], [34.6, 6078.0], [34.7, 6078.0], [34.8, 6078.0], [34.9, 6078.0], [35.0, 6144.0], [35.1, 6144.0], [35.2, 6144.0], [35.3, 6144.0], [35.4, 6144.0], [35.5, 6144.0], [35.6, 6144.0], [35.7, 6144.0], [35.8, 6144.0], [35.9, 6144.0], [36.0, 6144.0], [36.1, 6144.0], [36.2, 6144.0], [36.3, 6168.0], [36.4, 6168.0], [36.5, 6168.0], [36.6, 6168.0], [36.7, 6168.0], [36.8, 6168.0], [36.9, 6168.0], [37.0, 6168.0], [37.1, 6168.0], [37.2, 6168.0], [37.3, 6168.0], [37.4, 6168.0], [37.5, 6223.0], [37.6, 6223.0], [37.7, 6223.0], [37.8, 6223.0], [37.9, 6223.0], [38.0, 6223.0], [38.1, 6223.0], [38.2, 6223.0], [38.3, 6223.0], [38.4, 6223.0], [38.5, 6223.0], [38.6, 6223.0], [38.7, 6223.0], [38.8, 6344.0], [38.9, 6344.0], [39.0, 6344.0], [39.1, 6344.0], [39.2, 6344.0], [39.3, 6344.0], [39.4, 6344.0], [39.5, 6344.0], [39.6, 6344.0], [39.7, 6344.0], [39.8, 6344.0], [39.9, 6344.0], [40.0, 6641.0], [40.1, 6641.0], [40.2, 6641.0], [40.3, 6641.0], [40.4, 6641.0], [40.5, 6641.0], [40.6, 6641.0], [40.7, 6641.0], [40.8, 6641.0], [40.9, 6641.0], [41.0, 6641.0], [41.1, 6641.0], [41.2, 6641.0], [41.3, 7011.0], [41.4, 7011.0], [41.5, 7011.0], [41.6, 7011.0], [41.7, 7011.0], [41.8, 7011.0], [41.9, 7011.0], [42.0, 7011.0], [42.1, 7011.0], [42.2, 7011.0], [42.3, 7011.0], [42.4, 7011.0], [42.5, 7048.0], [42.6, 7048.0], [42.7, 7048.0], [42.8, 7048.0], [42.9, 7048.0], [43.0, 7048.0], [43.1, 7048.0], [43.2, 7048.0], [43.3, 7048.0], [43.4, 7048.0], [43.5, 7048.0], [43.6, 7048.0], [43.7, 7048.0], [43.8, 7100.0], [43.9, 7100.0], [44.0, 7100.0], [44.1, 7100.0], [44.2, 7100.0], [44.3, 7100.0], [44.4, 7100.0], [44.5, 7100.0], [44.6, 7100.0], [44.7, 7100.0], [44.8, 7100.0], [44.9, 7100.0], [45.0, 7101.0], [45.1, 7101.0], [45.2, 7101.0], [45.3, 7101.0], [45.4, 7101.0], [45.5, 7101.0], [45.6, 7101.0], [45.7, 7101.0], [45.8, 7101.0], [45.9, 7101.0], [46.0, 7101.0], [46.1, 7101.0], [46.2, 7101.0], [46.3, 7379.0], [46.4, 7379.0], [46.5, 7379.0], [46.6, 7379.0], [46.7, 7379.0], [46.8, 7379.0], [46.9, 7379.0], [47.0, 7379.0], [47.1, 7379.0], [47.2, 7379.0], [47.3, 7379.0], [47.4, 7379.0], [47.5, 7713.0], [47.6, 7713.0], [47.7, 7713.0], [47.8, 7713.0], [47.9, 7713.0], [48.0, 7713.0], [48.1, 7713.0], [48.2, 7713.0], [48.3, 7713.0], [48.4, 7713.0], [48.5, 7713.0], [48.6, 7713.0], [48.7, 7713.0], [48.8, 7956.0], [48.9, 7956.0], [49.0, 7956.0], [49.1, 7956.0], [49.2, 7956.0], [49.3, 7956.0], [49.4, 7956.0], [49.5, 7956.0], [49.6, 7956.0], [49.7, 7956.0], [49.8, 7956.0], [49.9, 7956.0], [50.0, 8032.0], [50.1, 8032.0], [50.2, 8032.0], [50.3, 8032.0], [50.4, 8032.0], [50.5, 8032.0], [50.6, 8032.0], [50.7, 8032.0], [50.8, 8032.0], [50.9, 8032.0], [51.0, 8032.0], [51.1, 8032.0], [51.2, 8032.0], [51.3, 8062.0], [51.4, 8062.0], [51.5, 8062.0], [51.6, 8062.0], [51.7, 8062.0], [51.8, 8062.0], [51.9, 8062.0], [52.0, 8062.0], [52.1, 8062.0], [52.2, 8062.0], [52.3, 8062.0], [52.4, 8062.0], [52.5, 8283.0], [52.6, 8283.0], [52.7, 8283.0], [52.8, 8283.0], [52.9, 8283.0], [53.0, 8283.0], [53.1, 8283.0], [53.2, 8283.0], [53.3, 8283.0], [53.4, 8283.0], [53.5, 8283.0], [53.6, 8283.0], [53.7, 8283.0], [53.8, 8672.0], [53.9, 8672.0], [54.0, 8672.0], [54.1, 8672.0], [54.2, 8672.0], [54.3, 8672.0], [54.4, 8672.0], [54.5, 8672.0], [54.6, 8672.0], [54.7, 8672.0], [54.8, 8672.0], [54.9, 8672.0], [55.0, 8945.0], [55.1, 8945.0], [55.2, 8945.0], [55.3, 8945.0], [55.4, 8945.0], [55.5, 8945.0], [55.6, 8945.0], [55.7, 8945.0], [55.8, 8945.0], [55.9, 8945.0], [56.0, 8945.0], [56.1, 8945.0], [56.2, 8945.0], [56.3, 9102.0], [56.4, 9102.0], [56.5, 9102.0], [56.6, 9102.0], [56.7, 9102.0], [56.8, 9102.0], [56.9, 9102.0], [57.0, 9102.0], [57.1, 9102.0], [57.2, 9102.0], [57.3, 9102.0], [57.4, 9102.0], [57.5, 9548.0], [57.6, 9548.0], [57.7, 9548.0], [57.8, 9548.0], [57.9, 9548.0], [58.0, 9548.0], [58.1, 9548.0], [58.2, 9548.0], [58.3, 9548.0], [58.4, 9548.0], [58.5, 9548.0], [58.6, 9548.0], [58.7, 9548.0], [58.8, 9786.0], [58.9, 9786.0], [59.0, 9786.0], [59.1, 9786.0], [59.2, 9786.0], [59.3, 9786.0], [59.4, 9786.0], [59.5, 9786.0], [59.6, 9786.0], [59.7, 9786.0], [59.8, 9786.0], [59.9, 9786.0], [60.0, 9810.0], [60.1, 9810.0], [60.2, 9810.0], [60.3, 9810.0], [60.4, 9810.0], [60.5, 9810.0], [60.6, 9810.0], [60.7, 9810.0], [60.8, 9810.0], [60.9, 9810.0], [61.0, 9810.0], [61.1, 9810.0], [61.2, 9810.0], [61.3, 9970.0], [61.4, 9970.0], [61.5, 9970.0], [61.6, 9970.0], [61.7, 9970.0], [61.8, 9970.0], [61.9, 9970.0], [62.0, 9970.0], [62.1, 9970.0], [62.2, 9970.0], [62.3, 9970.0], [62.4, 9970.0], [62.5, 10330.0], [62.6, 10330.0], [62.7, 10330.0], [62.8, 10330.0], [62.9, 10330.0], [63.0, 10330.0], [63.1, 10330.0], [63.2, 10330.0], [63.3, 10330.0], [63.4, 10330.0], [63.5, 10330.0], [63.6, 10330.0], [63.7, 10330.0], [63.8, 10405.0], [63.9, 10405.0], [64.0, 10405.0], [64.1, 10405.0], [64.2, 10405.0], [64.3, 10405.0], [64.4, 10405.0], [64.5, 10405.0], [64.6, 10405.0], [64.7, 10405.0], [64.8, 10405.0], [64.9, 10405.0], [65.0, 10493.0], [65.1, 10493.0], [65.2, 10493.0], [65.3, 10493.0], [65.4, 10493.0], [65.5, 10493.0], [65.6, 10493.0], [65.7, 10493.0], [65.8, 10493.0], [65.9, 10493.0], [66.0, 10493.0], [66.1, 10493.0], [66.2, 10493.0], [66.3, 10673.0], [66.4, 10673.0], [66.5, 10673.0], [66.6, 10673.0], [66.7, 10673.0], [66.8, 10673.0], [66.9, 10673.0], [67.0, 10673.0], [67.1, 10673.0], [67.2, 10673.0], [67.3, 10673.0], [67.4, 10673.0], [67.5, 10690.0], [67.6, 10690.0], [67.7, 10690.0], [67.8, 10690.0], [67.9, 10690.0], [68.0, 10690.0], [68.1, 10690.0], [68.2, 10690.0], [68.3, 10690.0], [68.4, 10690.0], [68.5, 10690.0], [68.6, 10690.0], [68.7, 10690.0], [68.8, 10702.0], [68.9, 10702.0], [69.0, 10702.0], [69.1, 10702.0], [69.2, 10702.0], [69.3, 10702.0], [69.4, 10702.0], [69.5, 10702.0], [69.6, 10702.0], [69.7, 10702.0], [69.8, 10702.0], [69.9, 10702.0], [70.0, 10883.0], [70.1, 10883.0], [70.2, 10883.0], [70.3, 10883.0], [70.4, 10883.0], [70.5, 10883.0], [70.6, 10883.0], [70.7, 10883.0], [70.8, 10883.0], [70.9, 10883.0], [71.0, 10883.0], [71.1, 10883.0], [71.2, 10883.0], [71.3, 10903.0], [71.4, 10903.0], [71.5, 10903.0], [71.6, 10903.0], [71.7, 10903.0], [71.8, 10903.0], [71.9, 10903.0], [72.0, 10903.0], [72.1, 10903.0], [72.2, 10903.0], [72.3, 10903.0], [72.4, 10903.0], [72.5, 11777.0], [72.6, 11777.0], [72.7, 11777.0], [72.8, 11777.0], [72.9, 11777.0], [73.0, 11777.0], [73.1, 11777.0], [73.2, 11777.0], [73.3, 11777.0], [73.4, 11777.0], [73.5, 11777.0], [73.6, 11777.0], [73.7, 11777.0], [73.8, 12120.0], [73.9, 12120.0], [74.0, 12120.0], [74.1, 12120.0], [74.2, 12120.0], [74.3, 12120.0], [74.4, 12120.0], [74.5, 12120.0], [74.6, 12120.0], [74.7, 12120.0], [74.8, 12120.0], [74.9, 12120.0], [75.0, 12790.0], [75.1, 12790.0], [75.2, 12790.0], [75.3, 12790.0], [75.4, 12790.0], [75.5, 12790.0], [75.6, 12790.0], [75.7, 12790.0], [75.8, 12790.0], [75.9, 12790.0], [76.0, 12790.0], [76.1, 12790.0], [76.2, 12790.0], [76.3, 12848.0], [76.4, 12848.0], [76.5, 12848.0], [76.6, 12848.0], [76.7, 12848.0], [76.8, 12848.0], [76.9, 12848.0], [77.0, 12848.0], [77.1, 12848.0], [77.2, 12848.0], [77.3, 12848.0], [77.4, 12848.0], [77.5, 13909.0], [77.6, 13909.0], [77.7, 13909.0], [77.8, 13909.0], [77.9, 13909.0], [78.0, 13909.0], [78.1, 13909.0], [78.2, 13909.0], [78.3, 13909.0], [78.4, 13909.0], [78.5, 13909.0], [78.6, 13909.0], [78.7, 13909.0], [78.8, 14033.0], [78.9, 14033.0], [79.0, 14033.0], [79.1, 14033.0], [79.2, 14033.0], [79.3, 14033.0], [79.4, 14033.0], [79.5, 14033.0], [79.6, 14033.0], [79.7, 14033.0], [79.8, 14033.0], [79.9, 14033.0], [80.0, 14175.0], [80.1, 14175.0], [80.2, 14175.0], [80.3, 14175.0], [80.4, 14175.0], [80.5, 14175.0], [80.6, 14175.0], [80.7, 14175.0], [80.8, 14175.0], [80.9, 14175.0], [81.0, 14175.0], [81.1, 14175.0], [81.2, 14175.0], [81.3, 14252.0], [81.4, 14252.0], [81.5, 14252.0], [81.6, 14252.0], [81.7, 14252.0], [81.8, 14252.0], [81.9, 14252.0], [82.0, 14252.0], [82.1, 14252.0], [82.2, 14252.0], [82.3, 14252.0], [82.4, 14252.0], [82.5, 14430.0], [82.6, 14430.0], [82.7, 14430.0], [82.8, 14430.0], [82.9, 14430.0], [83.0, 14430.0], [83.1, 14430.0], [83.2, 14430.0], [83.3, 14430.0], [83.4, 14430.0], [83.5, 14430.0], [83.6, 14430.0], [83.7, 14430.0], [83.8, 15122.0], [83.9, 15122.0], [84.0, 15122.0], [84.1, 15122.0], [84.2, 15122.0], [84.3, 15122.0], [84.4, 15122.0], [84.5, 15122.0], [84.6, 15122.0], [84.7, 15122.0], [84.8, 15122.0], [84.9, 15122.0], [85.0, 15257.0], [85.1, 15257.0], [85.2, 15257.0], [85.3, 15257.0], [85.4, 15257.0], [85.5, 15257.0], [85.6, 15257.0], [85.7, 15257.0], [85.8, 15257.0], [85.9, 15257.0], [86.0, 15257.0], [86.1, 15257.0], [86.2, 15257.0], [86.3, 16320.0], [86.4, 16320.0], [86.5, 16320.0], [86.6, 16320.0], [86.7, 16320.0], [86.8, 16320.0], [86.9, 16320.0], [87.0, 16320.0], [87.1, 16320.0], [87.2, 16320.0], [87.3, 16320.0], [87.4, 16320.0], [87.5, 16951.0], [87.6, 16951.0], [87.7, 16951.0], [87.8, 16951.0], [87.9, 16951.0], [88.0, 16951.0], [88.1, 16951.0], [88.2, 16951.0], [88.3, 16951.0], [88.4, 16951.0], [88.5, 16951.0], [88.6, 16951.0], [88.7, 16951.0], [88.8, 17619.0], [88.9, 17619.0], [89.0, 17619.0], [89.1, 17619.0], [89.2, 17619.0], [89.3, 17619.0], [89.4, 17619.0], [89.5, 17619.0], [89.6, 17619.0], [89.7, 17619.0], [89.8, 17619.0], [89.9, 17619.0], [90.0, 17763.0], [90.1, 17763.0], [90.2, 17763.0], [90.3, 17763.0], [90.4, 17763.0], [90.5, 17763.0], [90.6, 17763.0], [90.7, 17763.0], [90.8, 17763.0], [90.9, 17763.0], [91.0, 17763.0], [91.1, 17763.0], [91.2, 17763.0], [91.3, 20472.0], [91.4, 20472.0], [91.5, 20472.0], [91.6, 20472.0], [91.7, 20472.0], [91.8, 20472.0], [91.9, 20472.0], [92.0, 20472.0], [92.1, 20472.0], [92.2, 20472.0], [92.3, 20472.0], [92.4, 20472.0], [92.5, 25074.0], [92.6, 25074.0], [92.7, 25074.0], [92.8, 25074.0], [92.9, 25074.0], [93.0, 25074.0], [93.1, 25074.0], [93.2, 25074.0], [93.3, 25074.0], [93.4, 25074.0], [93.5, 25074.0], [93.6, 25074.0], [93.7, 25074.0], [93.8, 25396.0], [93.9, 25396.0], [94.0, 25396.0], [94.1, 25396.0], [94.2, 25396.0], [94.3, 25396.0], [94.4, 25396.0], [94.5, 25396.0], [94.6, 25396.0], [94.7, 25396.0], [94.8, 25396.0], [94.9, 25396.0], [95.0, 25742.0], [95.1, 25742.0], [95.2, 25742.0], [95.3, 25742.0], [95.4, 25742.0], [95.5, 25742.0], [95.6, 25742.0], [95.7, 25742.0], [95.8, 25742.0], [95.9, 25742.0], [96.0, 25742.0], [96.1, 25742.0], [96.2, 25742.0], [96.3, 26216.0], [96.4, 26216.0], [96.5, 26216.0], [96.6, 26216.0], [96.7, 26216.0], [96.8, 26216.0], [96.9, 26216.0], [97.0, 26216.0], [97.1, 26216.0], [97.2, 26216.0], [97.3, 26216.0], [97.4, 26216.0], [97.5, 26406.0], [97.6, 26406.0], [97.7, 26406.0], [97.8, 26406.0], [97.9, 26406.0], [98.0, 26406.0], [98.1, 26406.0], [98.2, 26406.0], [98.3, 26406.0], [98.4, 26406.0], [98.5, 26406.0], [98.6, 26406.0], [98.7, 26406.0], [98.8, 26827.0], [98.9, 26827.0], [99.0, 26827.0], [99.1, 26827.0], [99.2, 26827.0], [99.3, 26827.0], [99.4, 26827.0], [99.5, 26827.0], [99.6, 26827.0], [99.7, 26827.0], [99.8, 26827.0], [99.9, 26827.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 2.0, "series": [{"data": [[1000.0, 1.0], [1100.0, 1.0], [1300.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [1800.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 2.0], [2600.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 2.0], [4700.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5400.0, 2.0], [6000.0, 1.0], [6100.0, 2.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [7100.0, 2.0], [7000.0, 2.0], [7300.0, 1.0], [7700.0, 1.0], [7900.0, 1.0], [8000.0, 2.0], [8600.0, 1.0], [8200.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [9700.0, 1.0], [9500.0, 1.0], [9900.0, 1.0], [9800.0, 1.0], [10400.0, 2.0], [10600.0, 2.0], [10700.0, 1.0], [10300.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11700.0, 1.0], [12100.0, 1.0], [12700.0, 1.0], [12800.0, 1.0], [14200.0, 1.0], [13900.0, 1.0], [14100.0, 1.0], [14000.0, 1.0], [14400.0, 1.0], [15100.0, 1.0], [15200.0, 1.0], [16300.0, 1.0], [16900.0, 1.0], [17600.0, 1.0], [17700.0, 1.0], [20400.0, 1.0], [25300.0, 1.0], [25000.0, 1.0], [26400.0, 1.0], [26200.0, 1.0], [25700.0, 1.0], [26800.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 77.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 77.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.79152044E12, "maxY": 5.999999999999999, "series": [{"data": [[1.79152068E12, 2.0], [1.7915208E12, 2.0], [1.7915205E12, 4.875], [1.79152044E12, 1.6666666666666667], [1.79152062E12, 2.052631578947368], [1.79152056E12, 5.999999999999999], [1.79152074E12, 2.833333333333333]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915208E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4379.5625, "minX": 1.0, "maxY": 23439.0, "series": [{"data": [[2.0, 6118.3], [1.0, 4379.5625], [8.0, 14048.333333333334], [4.0, 13693.42857142857], [9.0, 14364.5], [5.0, 15084.375], [3.0, 7564.400000000001], [6.0, 17099.4], [7.0, 23439.0]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[3.4125, 9430.15]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9.566666666666666, "minX": 1.79152044E12, "maxY": 366.43333333333334, "series": [{"data": [[1.79152068E12, 48.1], [1.7915208E12, 9.6], [1.7915205E12, 25.816666666666666], [1.79152044E12, 9.566666666666666], [1.79152062E12, 60.56666666666667], [1.79152056E12, 64.4], [1.79152074E12, 38.61666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79152068E12, 316.6166666666667], [1.7915208E12, 54.86666666666667], [1.7915205E12, 189.11666666666667], [1.79152044E12, 23.15], [1.79152062E12, 307.6166666666667], [1.79152056E12, 366.43333333333334], [1.79152074E12, 247.88333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915208E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1840.6666666666667, "minX": 1.79152044E12, "maxY": 17972.5, "series": [{"data": [[1.79152068E12, 6046.866666666667], [1.7915208E12, 13018.333333333334], [1.7915205E12, 10203.75], [1.79152044E12, 1840.6666666666667], [1.79152062E12, 5315.368421052631], [1.79152056E12, 17972.5], [1.79152074E12, 6421.666666666666]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915208E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1840.3333333333333, "minX": 1.79152044E12, "maxY": 17972.34999999999, "series": [{"data": [[1.79152068E12, 6046.733333333334], [1.7915208E12, 13018.333333333334], [1.7915205E12, 10203.625], [1.79152044E12, 1840.3333333333333], [1.79152062E12, 5315.368421052631], [1.79152056E12, 17972.34999999999], [1.79152074E12, 6421.500000000001]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915208E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.333333333333334, "minX": 1.79152044E12, "maxY": 26.333333333333336, "series": [{"data": [[1.79152068E12, 10.4], [1.7915208E12, 9.333333333333334], [1.7915205E12, 11.375], [1.79152044E12, 26.333333333333336], [1.79152062E12, 10.736842105263158], [1.79152056E12, 11.35], [1.79152074E12, 11.083333333333334]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915208E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1096.0, "minX": 1.79152044E12, "maxY": 26827.0, "series": [{"data": [[1.79152068E12, 10702.0], [1.7915208E12, 14430.0], [1.7915205E12, 14252.0], [1.79152044E12, 2120.0], [1.79152062E12, 9786.0], [1.79152056E12, 26827.0], [1.79152074E12, 10903.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79152068E12, 10166.800000000001], [1.7915208E12, 14430.0], [1.7915205E12, 14252.0], [1.79152044E12, 2120.0], [1.79152062E12, 8945.0], [1.79152056E12, 26387.0], [1.79152074E12, 10731.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79152068E12, 10702.0], [1.7915208E12, 14430.0], [1.7915205E12, 14252.0], [1.79152044E12, 2120.0], [1.79152062E12, 9786.0], [1.79152056E12, 26827.0], [1.79152074E12, 10903.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79152068E12, 10702.0], [1.7915208E12, 14430.0], [1.7915205E12, 14252.0], [1.79152044E12, 2120.0], [1.79152062E12, 9786.0], [1.79152056E12, 26805.95], [1.79152074E12, 10903.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79152068E12, 1587.0], [1.7915208E12, 11777.0], [1.7915205E12, 5471.0], [1.79152044E12, 1337.0], [1.79152062E12, 1155.0], [1.79152056E12, 8672.0], [1.79152074E12, 1096.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79152068E12, 5996.0], [1.7915208E12, 12848.0], [1.7915205E12, 10539.0], [1.79152044E12, 2065.0], [1.79152062E12, 6078.0], [1.79152056E12, 16635.5], [1.79152074E12, 5797.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915208E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7994.0, "minX": 1.0, "maxY": 7994.0, "series": [{"data": [[1.0, 7994.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7994.0, "minX": 1.0, "maxY": 7994.0, "series": [{"data": [[1.0, 7994.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79152044E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79152068E12, 0.26666666666666666], [1.7915205E12, 0.2833333333333333], [1.79152044E12, 0.05], [1.79152062E12, 0.2833333333333333], [1.79152056E12, 0.23333333333333334], [1.79152074E12, 0.21666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79152074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79152044E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.79152068E12, 0.25], [1.7915208E12, 0.05], [1.7915205E12, 0.13333333333333333], [1.79152044E12, 0.05], [1.79152062E12, 0.31666666666666665], [1.79152056E12, 0.3333333333333333], [1.79152074E12, 0.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915208E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79152044E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.79152068E12, 0.25], [1.7915208E12, 0.05], [1.7915205E12, 0.13333333333333333], [1.79152044E12, 0.05], [1.79152062E12, 0.31666666666666665], [1.79152056E12, 0.3333333333333333], [1.79152074E12, 0.2]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915208E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79152044E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.79152068E12, 0.25], [1.7915208E12, 0.05], [1.7915205E12, 0.13333333333333333], [1.79152044E12, 0.05], [1.79152062E12, 0.31666666666666665], [1.79152056E12, 0.3333333333333333], [1.79152074E12, 0.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915208E12, "title": "Total Transactions Per Second"}},
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

