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
        data: {"result": {"minY": 1040.0, "minX": 0.0, "maxY": 16114.0, "series": [{"data": [[0.0, 1040.0], [0.1, 1040.0], [0.2, 1040.0], [0.3, 1040.0], [0.4, 1040.0], [0.5, 1040.0], [0.6, 1040.0], [0.7, 1040.0], [0.8, 1040.0], [0.9, 1040.0], [1.0, 1040.0], [1.1, 1040.0], [1.2, 1040.0], [1.3, 1040.0], [1.4, 1040.0], [1.5, 1040.0], [1.6, 1040.0], [1.7, 1302.0], [1.8, 1302.0], [1.9, 1302.0], [2.0, 1302.0], [2.1, 1302.0], [2.2, 1302.0], [2.3, 1302.0], [2.4, 1302.0], [2.5, 1302.0], [2.6, 1302.0], [2.7, 1302.0], [2.8, 1302.0], [2.9, 1302.0], [3.0, 1302.0], [3.1, 1302.0], [3.2, 1302.0], [3.3, 1302.0], [3.4, 1328.0], [3.5, 1328.0], [3.6, 1328.0], [3.7, 1328.0], [3.8, 1328.0], [3.9, 1328.0], [4.0, 1328.0], [4.1, 1328.0], [4.2, 1328.0], [4.3, 1328.0], [4.4, 1328.0], [4.5, 1328.0], [4.6, 1328.0], [4.7, 1328.0], [4.8, 1328.0], [4.9, 1328.0], [5.0, 1693.0], [5.1, 1693.0], [5.2, 1693.0], [5.3, 1693.0], [5.4, 1693.0], [5.5, 1693.0], [5.6, 1693.0], [5.7, 1693.0], [5.8, 1693.0], [5.9, 1693.0], [6.0, 1693.0], [6.1, 1693.0], [6.2, 1693.0], [6.3, 1693.0], [6.4, 1693.0], [6.5, 1693.0], [6.6, 1693.0], [6.7, 1724.0], [6.8, 1724.0], [6.9, 1724.0], [7.0, 1724.0], [7.1, 1724.0], [7.2, 1724.0], [7.3, 1724.0], [7.4, 1724.0], [7.5, 1724.0], [7.6, 1724.0], [7.7, 1724.0], [7.8, 1724.0], [7.9, 1724.0], [8.0, 1724.0], [8.1, 1724.0], [8.2, 1724.0], [8.3, 1724.0], [8.4, 1738.0], [8.5, 1738.0], [8.6, 1738.0], [8.7, 1738.0], [8.8, 1738.0], [8.9, 1738.0], [9.0, 1738.0], [9.1, 1738.0], [9.2, 1738.0], [9.3, 1738.0], [9.4, 1738.0], [9.5, 1738.0], [9.6, 1738.0], [9.7, 1738.0], [9.8, 1738.0], [9.9, 1738.0], [10.0, 1767.0], [10.1, 1767.0], [10.2, 1767.0], [10.3, 1767.0], [10.4, 1767.0], [10.5, 1767.0], [10.6, 1767.0], [10.7, 1767.0], [10.8, 1767.0], [10.9, 1767.0], [11.0, 1767.0], [11.1, 1767.0], [11.2, 1767.0], [11.3, 1767.0], [11.4, 1767.0], [11.5, 1767.0], [11.6, 1767.0], [11.7, 1786.0], [11.8, 1786.0], [11.9, 1786.0], [12.0, 1786.0], [12.1, 1786.0], [12.2, 1786.0], [12.3, 1786.0], [12.4, 1786.0], [12.5, 1786.0], [12.6, 1786.0], [12.7, 1786.0], [12.8, 1786.0], [12.9, 1786.0], [13.0, 1786.0], [13.1, 1786.0], [13.2, 1786.0], [13.3, 1786.0], [13.4, 1788.0], [13.5, 1788.0], [13.6, 1788.0], [13.7, 1788.0], [13.8, 1788.0], [13.9, 1788.0], [14.0, 1788.0], [14.1, 1788.0], [14.2, 1788.0], [14.3, 1788.0], [14.4, 1788.0], [14.5, 1788.0], [14.6, 1788.0], [14.7, 1788.0], [14.8, 1788.0], [14.9, 1788.0], [15.0, 2234.0], [15.1, 2234.0], [15.2, 2234.0], [15.3, 2234.0], [15.4, 2234.0], [15.5, 2234.0], [15.6, 2234.0], [15.7, 2234.0], [15.8, 2234.0], [15.9, 2234.0], [16.0, 2234.0], [16.1, 2234.0], [16.2, 2234.0], [16.3, 2234.0], [16.4, 2234.0], [16.5, 2234.0], [16.6, 2234.0], [16.7, 2381.0], [16.8, 2381.0], [16.9, 2381.0], [17.0, 2381.0], [17.1, 2381.0], [17.2, 2381.0], [17.3, 2381.0], [17.4, 2381.0], [17.5, 2381.0], [17.6, 2381.0], [17.7, 2381.0], [17.8, 2381.0], [17.9, 2381.0], [18.0, 2381.0], [18.1, 2381.0], [18.2, 2381.0], [18.3, 2381.0], [18.4, 2415.0], [18.5, 2415.0], [18.6, 2415.0], [18.7, 2415.0], [18.8, 2415.0], [18.9, 2415.0], [19.0, 2415.0], [19.1, 2415.0], [19.2, 2415.0], [19.3, 2415.0], [19.4, 2415.0], [19.5, 2415.0], [19.6, 2415.0], [19.7, 2415.0], [19.8, 2415.0], [19.9, 2415.0], [20.0, 2428.0], [20.1, 2428.0], [20.2, 2428.0], [20.3, 2428.0], [20.4, 2428.0], [20.5, 2428.0], [20.6, 2428.0], [20.7, 2428.0], [20.8, 2428.0], [20.9, 2428.0], [21.0, 2428.0], [21.1, 2428.0], [21.2, 2428.0], [21.3, 2428.0], [21.4, 2428.0], [21.5, 2428.0], [21.6, 2428.0], [21.7, 2695.0], [21.8, 2695.0], [21.9, 2695.0], [22.0, 2695.0], [22.1, 2695.0], [22.2, 2695.0], [22.3, 2695.0], [22.4, 2695.0], [22.5, 2695.0], [22.6, 2695.0], [22.7, 2695.0], [22.8, 2695.0], [22.9, 2695.0], [23.0, 2695.0], [23.1, 2695.0], [23.2, 2695.0], [23.3, 2695.0], [23.4, 2904.0], [23.5, 2904.0], [23.6, 2904.0], [23.7, 2904.0], [23.8, 2904.0], [23.9, 2904.0], [24.0, 2904.0], [24.1, 2904.0], [24.2, 2904.0], [24.3, 2904.0], [24.4, 2904.0], [24.5, 2904.0], [24.6, 2904.0], [24.7, 2904.0], [24.8, 2904.0], [24.9, 2904.0], [25.0, 2904.0], [25.1, 2932.0], [25.2, 2932.0], [25.3, 2932.0], [25.4, 2932.0], [25.5, 2932.0], [25.6, 2932.0], [25.7, 2932.0], [25.8, 2932.0], [25.9, 2932.0], [26.0, 2932.0], [26.1, 2932.0], [26.2, 2932.0], [26.3, 2932.0], [26.4, 2932.0], [26.5, 2932.0], [26.6, 2932.0], [26.7, 3025.0], [26.8, 3025.0], [26.9, 3025.0], [27.0, 3025.0], [27.1, 3025.0], [27.2, 3025.0], [27.3, 3025.0], [27.4, 3025.0], [27.5, 3025.0], [27.6, 3025.0], [27.7, 3025.0], [27.8, 3025.0], [27.9, 3025.0], [28.0, 3025.0], [28.1, 3025.0], [28.2, 3025.0], [28.3, 3025.0], [28.4, 3107.0], [28.5, 3107.0], [28.6, 3107.0], [28.7, 3107.0], [28.8, 3107.0], [28.9, 3107.0], [29.0, 3107.0], [29.1, 3107.0], [29.2, 3107.0], [29.3, 3107.0], [29.4, 3107.0], [29.5, 3107.0], [29.6, 3107.0], [29.7, 3107.0], [29.8, 3107.0], [29.9, 3107.0], [30.0, 3107.0], [30.1, 3162.0], [30.2, 3162.0], [30.3, 3162.0], [30.4, 3162.0], [30.5, 3162.0], [30.6, 3162.0], [30.7, 3162.0], [30.8, 3162.0], [30.9, 3162.0], [31.0, 3162.0], [31.1, 3162.0], [31.2, 3162.0], [31.3, 3162.0], [31.4, 3162.0], [31.5, 3162.0], [31.6, 3162.0], [31.7, 3300.0], [31.8, 3300.0], [31.9, 3300.0], [32.0, 3300.0], [32.1, 3300.0], [32.2, 3300.0], [32.3, 3300.0], [32.4, 3300.0], [32.5, 3300.0], [32.6, 3300.0], [32.7, 3300.0], [32.8, 3300.0], [32.9, 3300.0], [33.0, 3300.0], [33.1, 3300.0], [33.2, 3300.0], [33.3, 3300.0], [33.4, 3605.0], [33.5, 3605.0], [33.6, 3605.0], [33.7, 3605.0], [33.8, 3605.0], [33.9, 3605.0], [34.0, 3605.0], [34.1, 3605.0], [34.2, 3605.0], [34.3, 3605.0], [34.4, 3605.0], [34.5, 3605.0], [34.6, 3605.0], [34.7, 3605.0], [34.8, 3605.0], [34.9, 3605.0], [35.0, 3605.0], [35.1, 3632.0], [35.2, 3632.0], [35.3, 3632.0], [35.4, 3632.0], [35.5, 3632.0], [35.6, 3632.0], [35.7, 3632.0], [35.8, 3632.0], [35.9, 3632.0], [36.0, 3632.0], [36.1, 3632.0], [36.2, 3632.0], [36.3, 3632.0], [36.4, 3632.0], [36.5, 3632.0], [36.6, 3632.0], [36.7, 3654.0], [36.8, 3654.0], [36.9, 3654.0], [37.0, 3654.0], [37.1, 3654.0], [37.2, 3654.0], [37.3, 3654.0], [37.4, 3654.0], [37.5, 3654.0], [37.6, 3654.0], [37.7, 3654.0], [37.8, 3654.0], [37.9, 3654.0], [38.0, 3654.0], [38.1, 3654.0], [38.2, 3654.0], [38.3, 3654.0], [38.4, 3919.0], [38.5, 3919.0], [38.6, 3919.0], [38.7, 3919.0], [38.8, 3919.0], [38.9, 3919.0], [39.0, 3919.0], [39.1, 3919.0], [39.2, 3919.0], [39.3, 3919.0], [39.4, 3919.0], [39.5, 3919.0], [39.6, 3919.0], [39.7, 3919.0], [39.8, 3919.0], [39.9, 3919.0], [40.0, 3925.0], [40.1, 3925.0], [40.2, 3925.0], [40.3, 3925.0], [40.4, 3925.0], [40.5, 3925.0], [40.6, 3925.0], [40.7, 3925.0], [40.8, 3925.0], [40.9, 3925.0], [41.0, 3925.0], [41.1, 3925.0], [41.2, 3925.0], [41.3, 3925.0], [41.4, 3925.0], [41.5, 3925.0], [41.6, 3925.0], [41.7, 4064.0], [41.8, 4064.0], [41.9, 4064.0], [42.0, 4064.0], [42.1, 4064.0], [42.2, 4064.0], [42.3, 4064.0], [42.4, 4064.0], [42.5, 4064.0], [42.6, 4064.0], [42.7, 4064.0], [42.8, 4064.0], [42.9, 4064.0], [43.0, 4064.0], [43.1, 4064.0], [43.2, 4064.0], [43.3, 4064.0], [43.4, 4310.0], [43.5, 4310.0], [43.6, 4310.0], [43.7, 4310.0], [43.8, 4310.0], [43.9, 4310.0], [44.0, 4310.0], [44.1, 4310.0], [44.2, 4310.0], [44.3, 4310.0], [44.4, 4310.0], [44.5, 4310.0], [44.6, 4310.0], [44.7, 4310.0], [44.8, 4310.0], [44.9, 4310.0], [45.0, 4472.0], [45.1, 4472.0], [45.2, 4472.0], [45.3, 4472.0], [45.4, 4472.0], [45.5, 4472.0], [45.6, 4472.0], [45.7, 4472.0], [45.8, 4472.0], [45.9, 4472.0], [46.0, 4472.0], [46.1, 4472.0], [46.2, 4472.0], [46.3, 4472.0], [46.4, 4472.0], [46.5, 4472.0], [46.6, 4472.0], [46.7, 4484.0], [46.8, 4484.0], [46.9, 4484.0], [47.0, 4484.0], [47.1, 4484.0], [47.2, 4484.0], [47.3, 4484.0], [47.4, 4484.0], [47.5, 4484.0], [47.6, 4484.0], [47.7, 4484.0], [47.8, 4484.0], [47.9, 4484.0], [48.0, 4484.0], [48.1, 4484.0], [48.2, 4484.0], [48.3, 4484.0], [48.4, 5000.0], [48.5, 5000.0], [48.6, 5000.0], [48.7, 5000.0], [48.8, 5000.0], [48.9, 5000.0], [49.0, 5000.0], [49.1, 5000.0], [49.2, 5000.0], [49.3, 5000.0], [49.4, 5000.0], [49.5, 5000.0], [49.6, 5000.0], [49.7, 5000.0], [49.8, 5000.0], [49.9, 5000.0], [50.0, 5081.0], [50.1, 5081.0], [50.2, 5081.0], [50.3, 5081.0], [50.4, 5081.0], [50.5, 5081.0], [50.6, 5081.0], [50.7, 5081.0], [50.8, 5081.0], [50.9, 5081.0], [51.0, 5081.0], [51.1, 5081.0], [51.2, 5081.0], [51.3, 5081.0], [51.4, 5081.0], [51.5, 5081.0], [51.6, 5081.0], [51.7, 5212.0], [51.8, 5212.0], [51.9, 5212.0], [52.0, 5212.0], [52.1, 5212.0], [52.2, 5212.0], [52.3, 5212.0], [52.4, 5212.0], [52.5, 5212.0], [52.6, 5212.0], [52.7, 5212.0], [52.8, 5212.0], [52.9, 5212.0], [53.0, 5212.0], [53.1, 5212.0], [53.2, 5212.0], [53.3, 5212.0], [53.4, 5333.0], [53.5, 5333.0], [53.6, 5333.0], [53.7, 5333.0], [53.8, 5333.0], [53.9, 5333.0], [54.0, 5333.0], [54.1, 5333.0], [54.2, 5333.0], [54.3, 5333.0], [54.4, 5333.0], [54.5, 5333.0], [54.6, 5333.0], [54.7, 5333.0], [54.8, 5333.0], [54.9, 5333.0], [55.0, 5981.0], [55.1, 5981.0], [55.2, 5981.0], [55.3, 5981.0], [55.4, 5981.0], [55.5, 5981.0], [55.6, 5981.0], [55.7, 5981.0], [55.8, 5981.0], [55.9, 5981.0], [56.0, 5981.0], [56.1, 5981.0], [56.2, 5981.0], [56.3, 5981.0], [56.4, 5981.0], [56.5, 5981.0], [56.6, 5981.0], [56.7, 6011.0], [56.8, 6011.0], [56.9, 6011.0], [57.0, 6011.0], [57.1, 6011.0], [57.2, 6011.0], [57.3, 6011.0], [57.4, 6011.0], [57.5, 6011.0], [57.6, 6011.0], [57.7, 6011.0], [57.8, 6011.0], [57.9, 6011.0], [58.0, 6011.0], [58.1, 6011.0], [58.2, 6011.0], [58.3, 6011.0], [58.4, 6290.0], [58.5, 6290.0], [58.6, 6290.0], [58.7, 6290.0], [58.8, 6290.0], [58.9, 6290.0], [59.0, 6290.0], [59.1, 6290.0], [59.2, 6290.0], [59.3, 6290.0], [59.4, 6290.0], [59.5, 6290.0], [59.6, 6290.0], [59.7, 6290.0], [59.8, 6290.0], [59.9, 6290.0], [60.0, 6307.0], [60.1, 6307.0], [60.2, 6307.0], [60.3, 6307.0], [60.4, 6307.0], [60.5, 6307.0], [60.6, 6307.0], [60.7, 6307.0], [60.8, 6307.0], [60.9, 6307.0], [61.0, 6307.0], [61.1, 6307.0], [61.2, 6307.0], [61.3, 6307.0], [61.4, 6307.0], [61.5, 6307.0], [61.6, 6307.0], [61.7, 6459.0], [61.8, 6459.0], [61.9, 6459.0], [62.0, 6459.0], [62.1, 6459.0], [62.2, 6459.0], [62.3, 6459.0], [62.4, 6459.0], [62.5, 6459.0], [62.6, 6459.0], [62.7, 6459.0], [62.8, 6459.0], [62.9, 6459.0], [63.0, 6459.0], [63.1, 6459.0], [63.2, 6459.0], [63.3, 6459.0], [63.4, 6630.0], [63.5, 6630.0], [63.6, 6630.0], [63.7, 6630.0], [63.8, 6630.0], [63.9, 6630.0], [64.0, 6630.0], [64.1, 6630.0], [64.2, 6630.0], [64.3, 6630.0], [64.4, 6630.0], [64.5, 6630.0], [64.6, 6630.0], [64.7, 6630.0], [64.8, 6630.0], [64.9, 6630.0], [65.0, 7705.0], [65.1, 7705.0], [65.2, 7705.0], [65.3, 7705.0], [65.4, 7705.0], [65.5, 7705.0], [65.6, 7705.0], [65.7, 7705.0], [65.8, 7705.0], [65.9, 7705.0], [66.0, 7705.0], [66.1, 7705.0], [66.2, 7705.0], [66.3, 7705.0], [66.4, 7705.0], [66.5, 7705.0], [66.6, 7705.0], [66.7, 7827.0], [66.8, 7827.0], [66.9, 7827.0], [67.0, 7827.0], [67.1, 7827.0], [67.2, 7827.0], [67.3, 7827.0], [67.4, 7827.0], [67.5, 7827.0], [67.6, 7827.0], [67.7, 7827.0], [67.8, 7827.0], [67.9, 7827.0], [68.0, 7827.0], [68.1, 7827.0], [68.2, 7827.0], [68.3, 7827.0], [68.4, 8052.0], [68.5, 8052.0], [68.6, 8052.0], [68.7, 8052.0], [68.8, 8052.0], [68.9, 8052.0], [69.0, 8052.0], [69.1, 8052.0], [69.2, 8052.0], [69.3, 8052.0], [69.4, 8052.0], [69.5, 8052.0], [69.6, 8052.0], [69.7, 8052.0], [69.8, 8052.0], [69.9, 8052.0], [70.0, 8225.0], [70.1, 8225.0], [70.2, 8225.0], [70.3, 8225.0], [70.4, 8225.0], [70.5, 8225.0], [70.6, 8225.0], [70.7, 8225.0], [70.8, 8225.0], [70.9, 8225.0], [71.0, 8225.0], [71.1, 8225.0], [71.2, 8225.0], [71.3, 8225.0], [71.4, 8225.0], [71.5, 8225.0], [71.6, 8225.0], [71.7, 8623.0], [71.8, 8623.0], [71.9, 8623.0], [72.0, 8623.0], [72.1, 8623.0], [72.2, 8623.0], [72.3, 8623.0], [72.4, 8623.0], [72.5, 8623.0], [72.6, 8623.0], [72.7, 8623.0], [72.8, 8623.0], [72.9, 8623.0], [73.0, 8623.0], [73.1, 8623.0], [73.2, 8623.0], [73.3, 8623.0], [73.4, 9028.0], [73.5, 9028.0], [73.6, 9028.0], [73.7, 9028.0], [73.8, 9028.0], [73.9, 9028.0], [74.0, 9028.0], [74.1, 9028.0], [74.2, 9028.0], [74.3, 9028.0], [74.4, 9028.0], [74.5, 9028.0], [74.6, 9028.0], [74.7, 9028.0], [74.8, 9028.0], [74.9, 9028.0], [75.0, 9556.0], [75.1, 9556.0], [75.2, 9556.0], [75.3, 9556.0], [75.4, 9556.0], [75.5, 9556.0], [75.6, 9556.0], [75.7, 9556.0], [75.8, 9556.0], [75.9, 9556.0], [76.0, 9556.0], [76.1, 9556.0], [76.2, 9556.0], [76.3, 9556.0], [76.4, 9556.0], [76.5, 9556.0], [76.6, 9556.0], [76.7, 9613.0], [76.8, 9613.0], [76.9, 9613.0], [77.0, 9613.0], [77.1, 9613.0], [77.2, 9613.0], [77.3, 9613.0], [77.4, 9613.0], [77.5, 9613.0], [77.6, 9613.0], [77.7, 9613.0], [77.8, 9613.0], [77.9, 9613.0], [78.0, 9613.0], [78.1, 9613.0], [78.2, 9613.0], [78.3, 9613.0], [78.4, 10042.0], [78.5, 10042.0], [78.6, 10042.0], [78.7, 10042.0], [78.8, 10042.0], [78.9, 10042.0], [79.0, 10042.0], [79.1, 10042.0], [79.2, 10042.0], [79.3, 10042.0], [79.4, 10042.0], [79.5, 10042.0], [79.6, 10042.0], [79.7, 10042.0], [79.8, 10042.0], [79.9, 10042.0], [80.0, 10042.0], [80.1, 10285.0], [80.2, 10285.0], [80.3, 10285.0], [80.4, 10285.0], [80.5, 10285.0], [80.6, 10285.0], [80.7, 10285.0], [80.8, 10285.0], [80.9, 10285.0], [81.0, 10285.0], [81.1, 10285.0], [81.2, 10285.0], [81.3, 10285.0], [81.4, 10285.0], [81.5, 10285.0], [81.6, 10285.0], [81.7, 11083.0], [81.8, 11083.0], [81.9, 11083.0], [82.0, 11083.0], [82.1, 11083.0], [82.2, 11083.0], [82.3, 11083.0], [82.4, 11083.0], [82.5, 11083.0], [82.6, 11083.0], [82.7, 11083.0], [82.8, 11083.0], [82.9, 11083.0], [83.0, 11083.0], [83.1, 11083.0], [83.2, 11083.0], [83.3, 11083.0], [83.4, 11420.0], [83.5, 11420.0], [83.6, 11420.0], [83.7, 11420.0], [83.8, 11420.0], [83.9, 11420.0], [84.0, 11420.0], [84.1, 11420.0], [84.2, 11420.0], [84.3, 11420.0], [84.4, 11420.0], [84.5, 11420.0], [84.6, 11420.0], [84.7, 11420.0], [84.8, 11420.0], [84.9, 11420.0], [85.0, 11420.0], [85.1, 11547.0], [85.2, 11547.0], [85.3, 11547.0], [85.4, 11547.0], [85.5, 11547.0], [85.6, 11547.0], [85.7, 11547.0], [85.8, 11547.0], [85.9, 11547.0], [86.0, 11547.0], [86.1, 11547.0], [86.2, 11547.0], [86.3, 11547.0], [86.4, 11547.0], [86.5, 11547.0], [86.6, 11547.0], [86.7, 11579.0], [86.8, 11579.0], [86.9, 11579.0], [87.0, 11579.0], [87.1, 11579.0], [87.2, 11579.0], [87.3, 11579.0], [87.4, 11579.0], [87.5, 11579.0], [87.6, 11579.0], [87.7, 11579.0], [87.8, 11579.0], [87.9, 11579.0], [88.0, 11579.0], [88.1, 11579.0], [88.2, 11579.0], [88.3, 11579.0], [88.4, 11729.0], [88.5, 11729.0], [88.6, 11729.0], [88.7, 11729.0], [88.8, 11729.0], [88.9, 11729.0], [89.0, 11729.0], [89.1, 11729.0], [89.2, 11729.0], [89.3, 11729.0], [89.4, 11729.0], [89.5, 11729.0], [89.6, 11729.0], [89.7, 11729.0], [89.8, 11729.0], [89.9, 11729.0], [90.0, 11729.0], [90.1, 12073.0], [90.2, 12073.0], [90.3, 12073.0], [90.4, 12073.0], [90.5, 12073.0], [90.6, 12073.0], [90.7, 12073.0], [90.8, 12073.0], [90.9, 12073.0], [91.0, 12073.0], [91.1, 12073.0], [91.2, 12073.0], [91.3, 12073.0], [91.4, 12073.0], [91.5, 12073.0], [91.6, 12073.0], [91.7, 12318.0], [91.8, 12318.0], [91.9, 12318.0], [92.0, 12318.0], [92.1, 12318.0], [92.2, 12318.0], [92.3, 12318.0], [92.4, 12318.0], [92.5, 12318.0], [92.6, 12318.0], [92.7, 12318.0], [92.8, 12318.0], [92.9, 12318.0], [93.0, 12318.0], [93.1, 12318.0], [93.2, 12318.0], [93.3, 12318.0], [93.4, 12361.0], [93.5, 12361.0], [93.6, 12361.0], [93.7, 12361.0], [93.8, 12361.0], [93.9, 12361.0], [94.0, 12361.0], [94.1, 12361.0], [94.2, 12361.0], [94.3, 12361.0], [94.4, 12361.0], [94.5, 12361.0], [94.6, 12361.0], [94.7, 12361.0], [94.8, 12361.0], [94.9, 12361.0], [95.0, 12361.0], [95.1, 13678.0], [95.2, 13678.0], [95.3, 13678.0], [95.4, 13678.0], [95.5, 13678.0], [95.6, 13678.0], [95.7, 13678.0], [95.8, 13678.0], [95.9, 13678.0], [96.0, 13678.0], [96.1, 13678.0], [96.2, 13678.0], [96.3, 13678.0], [96.4, 13678.0], [96.5, 13678.0], [96.6, 13678.0], [96.7, 14777.0], [96.8, 14777.0], [96.9, 14777.0], [97.0, 14777.0], [97.1, 14777.0], [97.2, 14777.0], [97.3, 14777.0], [97.4, 14777.0], [97.5, 14777.0], [97.6, 14777.0], [97.7, 14777.0], [97.8, 14777.0], [97.9, 14777.0], [98.0, 14777.0], [98.1, 14777.0], [98.2, 14777.0], [98.3, 14777.0], [98.4, 16114.0], [98.5, 16114.0], [98.6, 16114.0], [98.7, 16114.0], [98.8, 16114.0], [98.9, 16114.0], [99.0, 16114.0], [99.1, 16114.0], [99.2, 16114.0], [99.3, 16114.0], [99.4, 16114.0], [99.5, 16114.0], [99.6, 16114.0], [99.7, 16114.0], [99.8, 16114.0], [99.9, 16114.0], [100.0, 16114.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 5.0, "series": [{"data": [[8600.0, 1.0], [8200.0, 1.0], [9000.0, 1.0], [9600.0, 1.0], [9500.0, 1.0], [10000.0, 1.0], [10200.0, 1.0], [11000.0, 1.0], [11400.0, 1.0], [11500.0, 2.0], [11700.0, 1.0], [12000.0, 1.0], [12300.0, 2.0], [13600.0, 1.0], [14700.0, 1.0], [16100.0, 1.0], [1000.0, 1.0], [1300.0, 2.0], [1600.0, 1.0], [1700.0, 5.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2600.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 1.0], [3600.0, 3.0], [3900.0, 2.0], [4000.0, 1.0], [4300.0, 1.0], [4400.0, 2.0], [5000.0, 2.0], [5300.0, 1.0], [5200.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 57.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 57.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.375, "minX": 1.79148768E12, "maxY": 3.4285714285714284, "series": [{"data": [[1.79148792E12, 1.5833333333333335], [1.79148774E12, 2.75], [1.79148798E12, 2.0], [1.79148768E12, 3.4285714285714284], [1.79148786E12, 1.375], [1.7914878E12, 1.4545454545454546]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148798E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4093.391304347826, "minX": 1.0, "maxY": 10617.666666666666, "series": [{"data": [[2.0, 5182.176470588235], [1.0, 4093.391304347826], [4.0, 10617.666666666666], [5.0, 9575.6], [3.0, 8102.666666666668]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[2.216666666666667, 6112.549999999999]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9.7, "minX": 1.79148768E12, "maxY": 258.03333333333336, "series": [{"data": [[1.79148792E12, 38.8], [1.79148774E12, 38.61666666666667], [1.79148798E12, 9.7], [1.79148768E12, 45.11666666666667], [1.79148786E12, 25.283333333333335], [1.7914878E12, 35.03333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79148792E12, 258.03333333333336], [1.79148774E12, 239.51666666666668], [1.79148798E12, 63.18333333333333], [1.79148768E12, 250.63333333333333], [1.79148786E12, 113.51666666666667], [1.7914878E12, 170.03333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148798E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2897.75, "minX": 1.79148768E12, "maxY": 9620.333333333334, "series": [{"data": [[1.79148792E12, 4391.416666666666], [1.79148774E12, 9620.333333333334], [1.79148798E12, 6705.333333333333], [1.79148768E12, 8580.571428571428], [1.79148786E12, 2897.75], [1.7914878E12, 3198.727272727273]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148798E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2897.75, "minX": 1.79148768E12, "maxY": 9620.166666666666, "series": [{"data": [[1.79148792E12, 4391.333333333333], [1.79148774E12, 9620.166666666666], [1.79148798E12, 6705.333333333333], [1.79148768E12, 8580.285714285716], [1.79148786E12, 2897.75], [1.7914878E12, 3198.727272727273]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148798E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.79148768E12, "maxY": 12.75, "series": [{"data": [[1.79148792E12, 11.416666666666666], [1.79148774E12, 12.75], [1.79148798E12, 9.0], [1.79148768E12, 10.928571428571429], [1.79148786E12, 11.375], [1.7914878E12, 10.909090909090912]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148798E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1040.0, "minX": 1.79148768E12, "maxY": 16114.0, "series": [{"data": [[1.79148792E12, 6459.0], [1.79148774E12, 13678.0], [1.79148798E12, 8225.0], [1.79148768E12, 16114.0], [1.79148786E12, 5333.0], [1.7914878E12, 6290.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79148792E12, 6413.400000000001], [1.79148774E12, 13270.000000000002], [1.79148798E12, 8225.0], [1.79148768E12, 15445.5], [1.79148786E12, 5333.0], [1.7914878E12, 6032.000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79148792E12, 6459.0], [1.79148774E12, 13678.0], [1.79148798E12, 8225.0], [1.79148768E12, 16114.0], [1.79148786E12, 5333.0], [1.7914878E12, 6290.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79148792E12, 6459.0], [1.79148774E12, 13678.0], [1.79148798E12, 8225.0], [1.79148768E12, 16114.0], [1.79148786E12, 5333.0], [1.7914878E12, 6290.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79148792E12, 2234.0], [1.79148774E12, 3300.0], [1.79148798E12, 4064.0], [1.79148768E12, 1302.0], [1.79148786E12, 1693.0], [1.7914878E12, 1040.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79148792E12, 4117.5], [1.79148774E12, 10684.0], [1.79148798E12, 7827.0], [1.79148768E12, 8825.5], [1.79148786E12, 2561.5], [1.7914878E12, 3107.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148798E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5040.5, "minX": 1.0, "maxY": 5040.5, "series": [{"data": [[1.0, 5040.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5040.5, "minX": 1.0, "maxY": 5040.5, "series": [{"data": [[1.0, 5040.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79148768E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79148792E12, 0.2], [1.79148774E12, 0.15], [1.79148798E12, 0.016666666666666666], [1.79148768E12, 0.2833333333333333], [1.79148786E12, 0.16666666666666666], [1.7914878E12, 0.18333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148798E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79148768E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79148792E12, 0.2], [1.79148774E12, 0.2], [1.79148798E12, 0.05], [1.79148768E12, 0.23333333333333334], [1.79148786E12, 0.13333333333333333], [1.7914878E12, 0.18333333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79148798E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79148768E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79148792E12, 0.2], [1.79148774E12, 0.2], [1.79148798E12, 0.05], [1.79148768E12, 0.23333333333333334], [1.79148786E12, 0.13333333333333333], [1.7914878E12, 0.18333333333333332]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148798E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79148768E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.79148792E12, 0.2], [1.79148774E12, 0.2], [1.79148798E12, 0.05], [1.79148768E12, 0.23333333333333334], [1.79148786E12, 0.13333333333333333], [1.7914878E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79148798E12, "title": "Total Transactions Per Second"}},
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

