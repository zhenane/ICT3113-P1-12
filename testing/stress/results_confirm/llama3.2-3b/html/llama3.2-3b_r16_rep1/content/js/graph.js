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
        data: {"result": {"minY": 303.0, "minX": 0.0, "maxY": 27962.0, "series": [{"data": [[0.0, 303.0], [0.1, 303.0], [0.2, 303.0], [0.3, 303.0], [0.4, 303.0], [0.5, 303.0], [0.6, 303.0], [0.7, 303.0], [0.8, 303.0], [0.9, 303.0], [1.0, 303.0], [1.1, 303.0], [1.2, 303.0], [1.3, 1064.0], [1.4, 1064.0], [1.5, 1064.0], [1.6, 1064.0], [1.7, 1064.0], [1.8, 1064.0], [1.9, 1064.0], [2.0, 1064.0], [2.1, 1064.0], [2.2, 1064.0], [2.3, 1064.0], [2.4, 1064.0], [2.5, 1208.0], [2.6, 1208.0], [2.7, 1208.0], [2.8, 1208.0], [2.9, 1208.0], [3.0, 1208.0], [3.1, 1208.0], [3.2, 1208.0], [3.3, 1208.0], [3.4, 1208.0], [3.5, 1208.0], [3.6, 1208.0], [3.7, 1208.0], [3.8, 1261.0], [3.9, 1261.0], [4.0, 1261.0], [4.1, 1261.0], [4.2, 1261.0], [4.3, 1261.0], [4.4, 1261.0], [4.5, 1261.0], [4.6, 1261.0], [4.7, 1261.0], [4.8, 1261.0], [4.9, 1261.0], [5.0, 1539.0], [5.1, 1539.0], [5.2, 1539.0], [5.3, 1539.0], [5.4, 1539.0], [5.5, 1539.0], [5.6, 1539.0], [5.7, 1539.0], [5.8, 1539.0], [5.9, 1539.0], [6.0, 1539.0], [6.1, 1539.0], [6.2, 1539.0], [6.3, 1665.0], [6.4, 1665.0], [6.5, 1665.0], [6.6, 1665.0], [6.7, 1665.0], [6.8, 1665.0], [6.9, 1665.0], [7.0, 1665.0], [7.1, 1665.0], [7.2, 1665.0], [7.3, 1665.0], [7.4, 1665.0], [7.5, 1934.0], [7.6, 1934.0], [7.7, 1934.0], [7.8, 1934.0], [7.9, 1934.0], [8.0, 1934.0], [8.1, 1934.0], [8.2, 1934.0], [8.3, 1934.0], [8.4, 1934.0], [8.5, 1934.0], [8.6, 1934.0], [8.7, 1934.0], [8.8, 1953.0], [8.9, 1953.0], [9.0, 1953.0], [9.1, 1953.0], [9.2, 1953.0], [9.3, 1953.0], [9.4, 1953.0], [9.5, 1953.0], [9.6, 1953.0], [9.7, 1953.0], [9.8, 1953.0], [9.9, 1953.0], [10.0, 2037.0], [10.1, 2037.0], [10.2, 2037.0], [10.3, 2037.0], [10.4, 2037.0], [10.5, 2037.0], [10.6, 2037.0], [10.7, 2037.0], [10.8, 2037.0], [10.9, 2037.0], [11.0, 2037.0], [11.1, 2037.0], [11.2, 2037.0], [11.3, 2174.0], [11.4, 2174.0], [11.5, 2174.0], [11.6, 2174.0], [11.7, 2174.0], [11.8, 2174.0], [11.9, 2174.0], [12.0, 2174.0], [12.1, 2174.0], [12.2, 2174.0], [12.3, 2174.0], [12.4, 2174.0], [12.5, 2425.0], [12.6, 2425.0], [12.7, 2425.0], [12.8, 2425.0], [12.9, 2425.0], [13.0, 2425.0], [13.1, 2425.0], [13.2, 2425.0], [13.3, 2425.0], [13.4, 2425.0], [13.5, 2425.0], [13.6, 2425.0], [13.7, 2425.0], [13.8, 2735.0], [13.9, 2735.0], [14.0, 2735.0], [14.1, 2735.0], [14.2, 2735.0], [14.3, 2735.0], [14.4, 2735.0], [14.5, 2735.0], [14.6, 2735.0], [14.7, 2735.0], [14.8, 2735.0], [14.9, 2735.0], [15.0, 2932.0], [15.1, 2932.0], [15.2, 2932.0], [15.3, 2932.0], [15.4, 2932.0], [15.5, 2932.0], [15.6, 2932.0], [15.7, 2932.0], [15.8, 2932.0], [15.9, 2932.0], [16.0, 2932.0], [16.1, 2932.0], [16.2, 2932.0], [16.3, 3093.0], [16.4, 3093.0], [16.5, 3093.0], [16.6, 3093.0], [16.7, 3093.0], [16.8, 3093.0], [16.9, 3093.0], [17.0, 3093.0], [17.1, 3093.0], [17.2, 3093.0], [17.3, 3093.0], [17.4, 3093.0], [17.5, 3573.0], [17.6, 3573.0], [17.7, 3573.0], [17.8, 3573.0], [17.9, 3573.0], [18.0, 3573.0], [18.1, 3573.0], [18.2, 3573.0], [18.3, 3573.0], [18.4, 3573.0], [18.5, 3573.0], [18.6, 3573.0], [18.7, 3573.0], [18.8, 3990.0], [18.9, 3990.0], [19.0, 3990.0], [19.1, 3990.0], [19.2, 3990.0], [19.3, 3990.0], [19.4, 3990.0], [19.5, 3990.0], [19.6, 3990.0], [19.7, 3990.0], [19.8, 3990.0], [19.9, 3990.0], [20.0, 3996.0], [20.1, 3996.0], [20.2, 3996.0], [20.3, 3996.0], [20.4, 3996.0], [20.5, 3996.0], [20.6, 3996.0], [20.7, 3996.0], [20.8, 3996.0], [20.9, 3996.0], [21.0, 3996.0], [21.1, 3996.0], [21.2, 3996.0], [21.3, 4113.0], [21.4, 4113.0], [21.5, 4113.0], [21.6, 4113.0], [21.7, 4113.0], [21.8, 4113.0], [21.9, 4113.0], [22.0, 4113.0], [22.1, 4113.0], [22.2, 4113.0], [22.3, 4113.0], [22.4, 4113.0], [22.5, 4473.0], [22.6, 4473.0], [22.7, 4473.0], [22.8, 4473.0], [22.9, 4473.0], [23.0, 4473.0], [23.1, 4473.0], [23.2, 4473.0], [23.3, 4473.0], [23.4, 4473.0], [23.5, 4473.0], [23.6, 4473.0], [23.7, 4473.0], [23.8, 4531.0], [23.9, 4531.0], [24.0, 4531.0], [24.1, 4531.0], [24.2, 4531.0], [24.3, 4531.0], [24.4, 4531.0], [24.5, 4531.0], [24.6, 4531.0], [24.7, 4531.0], [24.8, 4531.0], [24.9, 4531.0], [25.0, 4586.0], [25.1, 4586.0], [25.2, 4586.0], [25.3, 4586.0], [25.4, 4586.0], [25.5, 4586.0], [25.6, 4586.0], [25.7, 4586.0], [25.8, 4586.0], [25.9, 4586.0], [26.0, 4586.0], [26.1, 4586.0], [26.2, 4586.0], [26.3, 4684.0], [26.4, 4684.0], [26.5, 4684.0], [26.6, 4684.0], [26.7, 4684.0], [26.8, 4684.0], [26.9, 4684.0], [27.0, 4684.0], [27.1, 4684.0], [27.2, 4684.0], [27.3, 4684.0], [27.4, 4684.0], [27.5, 4694.0], [27.6, 4694.0], [27.7, 4694.0], [27.8, 4694.0], [27.9, 4694.0], [28.0, 4694.0], [28.1, 4694.0], [28.2, 4694.0], [28.3, 4694.0], [28.4, 4694.0], [28.5, 4694.0], [28.6, 4694.0], [28.7, 4694.0], [28.8, 4700.0], [28.9, 4700.0], [29.0, 4700.0], [29.1, 4700.0], [29.2, 4700.0], [29.3, 4700.0], [29.4, 4700.0], [29.5, 4700.0], [29.6, 4700.0], [29.7, 4700.0], [29.8, 4700.0], [29.9, 4700.0], [30.0, 4978.0], [30.1, 4978.0], [30.2, 4978.0], [30.3, 4978.0], [30.4, 4978.0], [30.5, 4978.0], [30.6, 4978.0], [30.7, 4978.0], [30.8, 4978.0], [30.9, 4978.0], [31.0, 4978.0], [31.1, 4978.0], [31.2, 4978.0], [31.3, 5061.0], [31.4, 5061.0], [31.5, 5061.0], [31.6, 5061.0], [31.7, 5061.0], [31.8, 5061.0], [31.9, 5061.0], [32.0, 5061.0], [32.1, 5061.0], [32.2, 5061.0], [32.3, 5061.0], [32.4, 5061.0], [32.5, 5141.0], [32.6, 5141.0], [32.7, 5141.0], [32.8, 5141.0], [32.9, 5141.0], [33.0, 5141.0], [33.1, 5141.0], [33.2, 5141.0], [33.3, 5141.0], [33.4, 5141.0], [33.5, 5141.0], [33.6, 5141.0], [33.7, 5141.0], [33.8, 5599.0], [33.9, 5599.0], [34.0, 5599.0], [34.1, 5599.0], [34.2, 5599.0], [34.3, 5599.0], [34.4, 5599.0], [34.5, 5599.0], [34.6, 5599.0], [34.7, 5599.0], [34.8, 5599.0], [34.9, 5599.0], [35.0, 5751.0], [35.1, 5751.0], [35.2, 5751.0], [35.3, 5751.0], [35.4, 5751.0], [35.5, 5751.0], [35.6, 5751.0], [35.7, 5751.0], [35.8, 5751.0], [35.9, 5751.0], [36.0, 5751.0], [36.1, 5751.0], [36.2, 5751.0], [36.3, 5897.0], [36.4, 5897.0], [36.5, 5897.0], [36.6, 5897.0], [36.7, 5897.0], [36.8, 5897.0], [36.9, 5897.0], [37.0, 5897.0], [37.1, 5897.0], [37.2, 5897.0], [37.3, 5897.0], [37.4, 5897.0], [37.5, 5977.0], [37.6, 5977.0], [37.7, 5977.0], [37.8, 5977.0], [37.9, 5977.0], [38.0, 5977.0], [38.1, 5977.0], [38.2, 5977.0], [38.3, 5977.0], [38.4, 5977.0], [38.5, 5977.0], [38.6, 5977.0], [38.7, 5977.0], [38.8, 6190.0], [38.9, 6190.0], [39.0, 6190.0], [39.1, 6190.0], [39.2, 6190.0], [39.3, 6190.0], [39.4, 6190.0], [39.5, 6190.0], [39.6, 6190.0], [39.7, 6190.0], [39.8, 6190.0], [39.9, 6190.0], [40.0, 6240.0], [40.1, 6240.0], [40.2, 6240.0], [40.3, 6240.0], [40.4, 6240.0], [40.5, 6240.0], [40.6, 6240.0], [40.7, 6240.0], [40.8, 6240.0], [40.9, 6240.0], [41.0, 6240.0], [41.1, 6240.0], [41.2, 6240.0], [41.3, 6458.0], [41.4, 6458.0], [41.5, 6458.0], [41.6, 6458.0], [41.7, 6458.0], [41.8, 6458.0], [41.9, 6458.0], [42.0, 6458.0], [42.1, 6458.0], [42.2, 6458.0], [42.3, 6458.0], [42.4, 6458.0], [42.5, 6586.0], [42.6, 6586.0], [42.7, 6586.0], [42.8, 6586.0], [42.9, 6586.0], [43.0, 6586.0], [43.1, 6586.0], [43.2, 6586.0], [43.3, 6586.0], [43.4, 6586.0], [43.5, 6586.0], [43.6, 6586.0], [43.7, 6586.0], [43.8, 6601.0], [43.9, 6601.0], [44.0, 6601.0], [44.1, 6601.0], [44.2, 6601.0], [44.3, 6601.0], [44.4, 6601.0], [44.5, 6601.0], [44.6, 6601.0], [44.7, 6601.0], [44.8, 6601.0], [44.9, 6601.0], [45.0, 6887.0], [45.1, 6887.0], [45.2, 6887.0], [45.3, 6887.0], [45.4, 6887.0], [45.5, 6887.0], [45.6, 6887.0], [45.7, 6887.0], [45.8, 6887.0], [45.9, 6887.0], [46.0, 6887.0], [46.1, 6887.0], [46.2, 6887.0], [46.3, 6988.0], [46.4, 6988.0], [46.5, 6988.0], [46.6, 6988.0], [46.7, 6988.0], [46.8, 6988.0], [46.9, 6988.0], [47.0, 6988.0], [47.1, 6988.0], [47.2, 6988.0], [47.3, 6988.0], [47.4, 6988.0], [47.5, 7100.0], [47.6, 7100.0], [47.7, 7100.0], [47.8, 7100.0], [47.9, 7100.0], [48.0, 7100.0], [48.1, 7100.0], [48.2, 7100.0], [48.3, 7100.0], [48.4, 7100.0], [48.5, 7100.0], [48.6, 7100.0], [48.7, 7100.0], [48.8, 7516.0], [48.9, 7516.0], [49.0, 7516.0], [49.1, 7516.0], [49.2, 7516.0], [49.3, 7516.0], [49.4, 7516.0], [49.5, 7516.0], [49.6, 7516.0], [49.7, 7516.0], [49.8, 7516.0], [49.9, 7516.0], [50.0, 7548.0], [50.1, 7548.0], [50.2, 7548.0], [50.3, 7548.0], [50.4, 7548.0], [50.5, 7548.0], [50.6, 7548.0], [50.7, 7548.0], [50.8, 7548.0], [50.9, 7548.0], [51.0, 7548.0], [51.1, 7548.0], [51.2, 7548.0], [51.3, 7729.0], [51.4, 7729.0], [51.5, 7729.0], [51.6, 7729.0], [51.7, 7729.0], [51.8, 7729.0], [51.9, 7729.0], [52.0, 7729.0], [52.1, 7729.0], [52.2, 7729.0], [52.3, 7729.0], [52.4, 7729.0], [52.5, 7848.0], [52.6, 7848.0], [52.7, 7848.0], [52.8, 7848.0], [52.9, 7848.0], [53.0, 7848.0], [53.1, 7848.0], [53.2, 7848.0], [53.3, 7848.0], [53.4, 7848.0], [53.5, 7848.0], [53.6, 7848.0], [53.7, 7848.0], [53.8, 7906.0], [53.9, 7906.0], [54.0, 7906.0], [54.1, 7906.0], [54.2, 7906.0], [54.3, 7906.0], [54.4, 7906.0], [54.5, 7906.0], [54.6, 7906.0], [54.7, 7906.0], [54.8, 7906.0], [54.9, 7906.0], [55.0, 8051.0], [55.1, 8051.0], [55.2, 8051.0], [55.3, 8051.0], [55.4, 8051.0], [55.5, 8051.0], [55.6, 8051.0], [55.7, 8051.0], [55.8, 8051.0], [55.9, 8051.0], [56.0, 8051.0], [56.1, 8051.0], [56.2, 8051.0], [56.3, 8803.0], [56.4, 8803.0], [56.5, 8803.0], [56.6, 8803.0], [56.7, 8803.0], [56.8, 8803.0], [56.9, 8803.0], [57.0, 8803.0], [57.1, 8803.0], [57.2, 8803.0], [57.3, 8803.0], [57.4, 8803.0], [57.5, 9106.0], [57.6, 9106.0], [57.7, 9106.0], [57.8, 9106.0], [57.9, 9106.0], [58.0, 9106.0], [58.1, 9106.0], [58.2, 9106.0], [58.3, 9106.0], [58.4, 9106.0], [58.5, 9106.0], [58.6, 9106.0], [58.7, 9106.0], [58.8, 9172.0], [58.9, 9172.0], [59.0, 9172.0], [59.1, 9172.0], [59.2, 9172.0], [59.3, 9172.0], [59.4, 9172.0], [59.5, 9172.0], [59.6, 9172.0], [59.7, 9172.0], [59.8, 9172.0], [59.9, 9172.0], [60.0, 9282.0], [60.1, 9282.0], [60.2, 9282.0], [60.3, 9282.0], [60.4, 9282.0], [60.5, 9282.0], [60.6, 9282.0], [60.7, 9282.0], [60.8, 9282.0], [60.9, 9282.0], [61.0, 9282.0], [61.1, 9282.0], [61.2, 9282.0], [61.3, 9762.0], [61.4, 9762.0], [61.5, 9762.0], [61.6, 9762.0], [61.7, 9762.0], [61.8, 9762.0], [61.9, 9762.0], [62.0, 9762.0], [62.1, 9762.0], [62.2, 9762.0], [62.3, 9762.0], [62.4, 9762.0], [62.5, 9797.0], [62.6, 9797.0], [62.7, 9797.0], [62.8, 9797.0], [62.9, 9797.0], [63.0, 9797.0], [63.1, 9797.0], [63.2, 9797.0], [63.3, 9797.0], [63.4, 9797.0], [63.5, 9797.0], [63.6, 9797.0], [63.7, 9797.0], [63.8, 10169.0], [63.9, 10169.0], [64.0, 10169.0], [64.1, 10169.0], [64.2, 10169.0], [64.3, 10169.0], [64.4, 10169.0], [64.5, 10169.0], [64.6, 10169.0], [64.7, 10169.0], [64.8, 10169.0], [64.9, 10169.0], [65.0, 10198.0], [65.1, 10198.0], [65.2, 10198.0], [65.3, 10198.0], [65.4, 10198.0], [65.5, 10198.0], [65.6, 10198.0], [65.7, 10198.0], [65.8, 10198.0], [65.9, 10198.0], [66.0, 10198.0], [66.1, 10198.0], [66.2, 10198.0], [66.3, 10314.0], [66.4, 10314.0], [66.5, 10314.0], [66.6, 10314.0], [66.7, 10314.0], [66.8, 10314.0], [66.9, 10314.0], [67.0, 10314.0], [67.1, 10314.0], [67.2, 10314.0], [67.3, 10314.0], [67.4, 10314.0], [67.5, 10443.0], [67.6, 10443.0], [67.7, 10443.0], [67.8, 10443.0], [67.9, 10443.0], [68.0, 10443.0], [68.1, 10443.0], [68.2, 10443.0], [68.3, 10443.0], [68.4, 10443.0], [68.5, 10443.0], [68.6, 10443.0], [68.7, 10443.0], [68.8, 10654.0], [68.9, 10654.0], [69.0, 10654.0], [69.1, 10654.0], [69.2, 10654.0], [69.3, 10654.0], [69.4, 10654.0], [69.5, 10654.0], [69.6, 10654.0], [69.7, 10654.0], [69.8, 10654.0], [69.9, 10654.0], [70.0, 10805.0], [70.1, 10805.0], [70.2, 10805.0], [70.3, 10805.0], [70.4, 10805.0], [70.5, 10805.0], [70.6, 10805.0], [70.7, 10805.0], [70.8, 10805.0], [70.9, 10805.0], [71.0, 10805.0], [71.1, 10805.0], [71.2, 10805.0], [71.3, 11003.0], [71.4, 11003.0], [71.5, 11003.0], [71.6, 11003.0], [71.7, 11003.0], [71.8, 11003.0], [71.9, 11003.0], [72.0, 11003.0], [72.1, 11003.0], [72.2, 11003.0], [72.3, 11003.0], [72.4, 11003.0], [72.5, 11120.0], [72.6, 11120.0], [72.7, 11120.0], [72.8, 11120.0], [72.9, 11120.0], [73.0, 11120.0], [73.1, 11120.0], [73.2, 11120.0], [73.3, 11120.0], [73.4, 11120.0], [73.5, 11120.0], [73.6, 11120.0], [73.7, 11120.0], [73.8, 11145.0], [73.9, 11145.0], [74.0, 11145.0], [74.1, 11145.0], [74.2, 11145.0], [74.3, 11145.0], [74.4, 11145.0], [74.5, 11145.0], [74.6, 11145.0], [74.7, 11145.0], [74.8, 11145.0], [74.9, 11145.0], [75.0, 12308.0], [75.1, 12308.0], [75.2, 12308.0], [75.3, 12308.0], [75.4, 12308.0], [75.5, 12308.0], [75.6, 12308.0], [75.7, 12308.0], [75.8, 12308.0], [75.9, 12308.0], [76.0, 12308.0], [76.1, 12308.0], [76.2, 12308.0], [76.3, 13214.0], [76.4, 13214.0], [76.5, 13214.0], [76.6, 13214.0], [76.7, 13214.0], [76.8, 13214.0], [76.9, 13214.0], [77.0, 13214.0], [77.1, 13214.0], [77.2, 13214.0], [77.3, 13214.0], [77.4, 13214.0], [77.5, 13658.0], [77.6, 13658.0], [77.7, 13658.0], [77.8, 13658.0], [77.9, 13658.0], [78.0, 13658.0], [78.1, 13658.0], [78.2, 13658.0], [78.3, 13658.0], [78.4, 13658.0], [78.5, 13658.0], [78.6, 13658.0], [78.7, 13658.0], [78.8, 14449.0], [78.9, 14449.0], [79.0, 14449.0], [79.1, 14449.0], [79.2, 14449.0], [79.3, 14449.0], [79.4, 14449.0], [79.5, 14449.0], [79.6, 14449.0], [79.7, 14449.0], [79.8, 14449.0], [79.9, 14449.0], [80.0, 14515.0], [80.1, 14515.0], [80.2, 14515.0], [80.3, 14515.0], [80.4, 14515.0], [80.5, 14515.0], [80.6, 14515.0], [80.7, 14515.0], [80.8, 14515.0], [80.9, 14515.0], [81.0, 14515.0], [81.1, 14515.0], [81.2, 14515.0], [81.3, 14670.0], [81.4, 14670.0], [81.5, 14670.0], [81.6, 14670.0], [81.7, 14670.0], [81.8, 14670.0], [81.9, 14670.0], [82.0, 14670.0], [82.1, 14670.0], [82.2, 14670.0], [82.3, 14670.0], [82.4, 14670.0], [82.5, 14718.0], [82.6, 14718.0], [82.7, 14718.0], [82.8, 14718.0], [82.9, 14718.0], [83.0, 14718.0], [83.1, 14718.0], [83.2, 14718.0], [83.3, 14718.0], [83.4, 14718.0], [83.5, 14718.0], [83.6, 14718.0], [83.7, 14718.0], [83.8, 15934.0], [83.9, 15934.0], [84.0, 15934.0], [84.1, 15934.0], [84.2, 15934.0], [84.3, 15934.0], [84.4, 15934.0], [84.5, 15934.0], [84.6, 15934.0], [84.7, 15934.0], [84.8, 15934.0], [84.9, 15934.0], [85.0, 16801.0], [85.1, 16801.0], [85.2, 16801.0], [85.3, 16801.0], [85.4, 16801.0], [85.5, 16801.0], [85.6, 16801.0], [85.7, 16801.0], [85.8, 16801.0], [85.9, 16801.0], [86.0, 16801.0], [86.1, 16801.0], [86.2, 16801.0], [86.3, 17908.0], [86.4, 17908.0], [86.5, 17908.0], [86.6, 17908.0], [86.7, 17908.0], [86.8, 17908.0], [86.9, 17908.0], [87.0, 17908.0], [87.1, 17908.0], [87.2, 17908.0], [87.3, 17908.0], [87.4, 17908.0], [87.5, 18289.0], [87.6, 18289.0], [87.7, 18289.0], [87.8, 18289.0], [87.9, 18289.0], [88.0, 18289.0], [88.1, 18289.0], [88.2, 18289.0], [88.3, 18289.0], [88.4, 18289.0], [88.5, 18289.0], [88.6, 18289.0], [88.7, 18289.0], [88.8, 18522.0], [88.9, 18522.0], [89.0, 18522.0], [89.1, 18522.0], [89.2, 18522.0], [89.3, 18522.0], [89.4, 18522.0], [89.5, 18522.0], [89.6, 18522.0], [89.7, 18522.0], [89.8, 18522.0], [89.9, 18522.0], [90.0, 19375.0], [90.1, 19375.0], [90.2, 19375.0], [90.3, 19375.0], [90.4, 19375.0], [90.5, 19375.0], [90.6, 19375.0], [90.7, 19375.0], [90.8, 19375.0], [90.9, 19375.0], [91.0, 19375.0], [91.1, 19375.0], [91.2, 19375.0], [91.3, 21412.0], [91.4, 21412.0], [91.5, 21412.0], [91.6, 21412.0], [91.7, 21412.0], [91.8, 21412.0], [91.9, 21412.0], [92.0, 21412.0], [92.1, 21412.0], [92.2, 21412.0], [92.3, 21412.0], [92.4, 21412.0], [92.5, 26334.0], [92.6, 26334.0], [92.7, 26334.0], [92.8, 26334.0], [92.9, 26334.0], [93.0, 26334.0], [93.1, 26334.0], [93.2, 26334.0], [93.3, 26334.0], [93.4, 26334.0], [93.5, 26334.0], [93.6, 26334.0], [93.7, 26334.0], [93.8, 26521.0], [93.9, 26521.0], [94.0, 26521.0], [94.1, 26521.0], [94.2, 26521.0], [94.3, 26521.0], [94.4, 26521.0], [94.5, 26521.0], [94.6, 26521.0], [94.7, 26521.0], [94.8, 26521.0], [94.9, 26521.0], [95.0, 26884.0], [95.1, 26884.0], [95.2, 26884.0], [95.3, 26884.0], [95.4, 26884.0], [95.5, 26884.0], [95.6, 26884.0], [95.7, 26884.0], [95.8, 26884.0], [95.9, 26884.0], [96.0, 26884.0], [96.1, 26884.0], [96.2, 26884.0], [96.3, 27275.0], [96.4, 27275.0], [96.5, 27275.0], [96.6, 27275.0], [96.7, 27275.0], [96.8, 27275.0], [96.9, 27275.0], [97.0, 27275.0], [97.1, 27275.0], [97.2, 27275.0], [97.3, 27275.0], [97.4, 27275.0], [97.5, 27568.0], [97.6, 27568.0], [97.7, 27568.0], [97.8, 27568.0], [97.9, 27568.0], [98.0, 27568.0], [98.1, 27568.0], [98.2, 27568.0], [98.3, 27568.0], [98.4, 27568.0], [98.5, 27568.0], [98.6, 27568.0], [98.7, 27568.0], [98.8, 27962.0], [98.9, 27962.0], [99.0, 27962.0], [99.1, 27962.0], [99.2, 27962.0], [99.3, 27962.0], [99.4, 27962.0], [99.5, 27962.0], [99.6, 27962.0], [99.7, 27962.0], [99.8, 27962.0], [99.9, 27962.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 2.0, "series": [{"data": [[1000.0, 1.0], [1200.0, 2.0], [1500.0, 1.0], [1600.0, 1.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3500.0, 1.0], [3900.0, 2.0], [4100.0, 1.0], [4400.0, 1.0], [4600.0, 2.0], [4500.0, 2.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7500.0, 2.0], [7900.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 1.0], [9100.0, 2.0], [9200.0, 1.0], [8800.0, 1.0], [9700.0, 2.0], [10100.0, 2.0], [10300.0, 1.0], [10400.0, 1.0], [10600.0, 1.0], [10800.0, 1.0], [11100.0, 2.0], [11000.0, 1.0], [12300.0, 1.0], [13200.0, 1.0], [13600.0, 1.0], [14700.0, 1.0], [14400.0, 1.0], [14600.0, 1.0], [14500.0, 1.0], [15900.0, 1.0], [16800.0, 1.0], [18200.0, 1.0], [17900.0, 1.0], [18500.0, 1.0], [19300.0, 1.0], [21400.0, 1.0], [26500.0, 1.0], [26300.0, 1.0], [27500.0, 1.0], [27200.0, 1.0], [26800.0, 1.0], [27900.0, 1.0], [300.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 73.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 73.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.79147892E12, "maxY": 6.999999999999999, "series": [{"data": [[1.79147916E12, 1.6923076923076925], [1.79147898E12, 6.999999999999999], [1.79147892E12, 1.5], [1.7914791E12, 2.0], [1.79147904E12, 4.2857142857142865], [1.79147922E12, 3.3333333333333335]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79147922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3808.625, "minX": 1.0, "maxY": 22367.25, "series": [{"data": [[2.0, 5682.799999999999], [1.0, 3808.625], [8.0, 14762.5], [4.0, 9383.0], [9.0, 14857.2], [5.0, 16243.0], [3.0, 7141.9], [6.0, 18838.75], [7.0, 22367.25]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[3.5374999999999988, 9347.562499999998]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12.783333333333333, "minX": 1.79147892E12, "maxY": 357.6333333333333, "series": [{"data": [[1.79147916E12, 41.65], [1.79147898E12, 41.81666666666667], [1.79147892E12, 12.783333333333333], [1.7914791E12, 54.55], [1.79147904E12, 67.38333333333334], [1.79147922E12, 236.83333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79147916E12, 285.43333333333334], [1.79147898E12, 260.8666666666667], [1.79147892E12, 52.18333333333333], [1.7914791E12, 324.9], [1.79147904E12, 357.6333333333333], [1.79147922E12, 153.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79147922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2598.0, "minX": 1.79147892E12, "maxY": 16345.095238095237, "series": [{"data": [[1.79147916E12, 6043.307692307692], [1.79147898E12, 12919.76923076923], [1.79147892E12, 2598.0], [1.7914791E12, 5067.764705882353], [1.79147904E12, 16345.095238095237], [1.79147922E12, 5124.499999999999]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79147922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2598.0, "minX": 1.79147892E12, "maxY": 16345.095238095237, "series": [{"data": [[1.79147916E12, 6043.307692307692], [1.79147898E12, 12919.76923076923], [1.79147892E12, 2598.0], [1.7914791E12, 5067.705882352941], [1.79147904E12, 16345.095238095237], [1.79147922E12, 3631.8333333333335]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79147922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.76923076923077, "minX": 1.79147892E12, "maxY": 16.705882352941178, "series": [{"data": [[1.79147916E12, 10.76923076923077], [1.79147898E12, 9.76923076923077], [1.79147892E12, 14.0], [1.7914791E12, 16.705882352941178], [1.79147904E12, 10.047619047619047], [1.79147922E12, 10.500000000000002]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79147922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1064.0, "minX": 1.79147892E12, "maxY": 27962.0, "series": [{"data": [[1.79147916E12, 10654.0], [1.79147898E12, 18522.0], [1.79147892E12, 5141.0], [1.7914791E12, 9762.0], [1.79147904E12, 27962.0], [1.79147922E12, 9172.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79147916E12, 10460.0], [1.79147898E12, 17486.8], [1.79147892E12, 5141.0], [1.7914791E12, 8994.8], [1.79147904E12, 27509.4], [1.79147922E12, 9172.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79147916E12, 10654.0], [1.79147898E12, 18522.0], [1.79147892E12, 5141.0], [1.7914791E12, 9762.0], [1.79147904E12, 27962.0], [1.79147922E12, 9172.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79147916E12, 10654.0], [1.79147898E12, 18522.0], [1.79147892E12, 5141.0], [1.7914791E12, 9762.0], [1.79147904E12, 27922.6], [1.79147922E12, 9172.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79147916E12, 2174.0], [1.79147898E12, 7548.0], [1.79147892E12, 1261.0], [1.7914791E12, 1208.0], [1.79147904E12, 1665.0], [1.79147922E12, 1064.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79147916E12, 4694.0], [1.79147898E12, 13214.0], [1.79147892E12, 1995.0], [1.7914791E12, 5977.0], [1.79147904E12, 16801.0], [1.79147922E12, 5241.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79147922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4880.5, "minX": 1.0, "maxY": 9172.0, "series": [{"data": [[1.0, 7548.0], [5.0, 9172.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 4880.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 9172.0, "series": [{"data": [[1.0, 7548.0], [5.0, 9172.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.79147892E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.79147916E12, 0.18333333333333332], [1.79147898E12, 0.3333333333333333], [1.79147892E12, 0.06666666666666667], [1.7914791E12, 0.31666666666666665], [1.79147904E12, 0.23333333333333334], [1.79147922E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79147922E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.79147892E12, "maxY": 0.35, "series": [{"data": [[1.79147916E12, 0.21666666666666667], [1.79147898E12, 0.21666666666666667], [1.79147892E12, 0.06666666666666667], [1.7914791E12, 0.2833333333333333], [1.79147904E12, 0.35], [1.79147922E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79147922E12, 0.06666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79147922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.79147892E12, "maxY": 0.35, "series": [{"data": [[1.79147916E12, 0.21666666666666667], [1.79147898E12, 0.21666666666666667], [1.79147892E12, 0.06666666666666667], [1.7914791E12, 0.2833333333333333], [1.79147904E12, 0.35], [1.79147922E12, 0.13333333333333333]], "isOverall": false, "label": "POST /tickets-success", "isController": false}, {"data": [[1.79147922E12, 0.06666666666666667]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79147922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.79147892E12, "maxY": 0.35, "series": [{"data": [[1.79147916E12, 0.21666666666666667], [1.79147898E12, 0.21666666666666667], [1.79147892E12, 0.06666666666666667], [1.7914791E12, 0.2833333333333333], [1.79147904E12, 0.35], [1.79147922E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79147922E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79147922E12, "title": "Total Transactions Per Second"}},
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

