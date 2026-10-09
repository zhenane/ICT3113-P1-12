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
        data: {"result": {"minY": 1282.0, "minX": 0.0, "maxY": 38306.0, "series": [{"data": [[0.0, 1282.0], [0.1, 1282.0], [0.2, 1282.0], [0.3, 1282.0], [0.4, 1282.0], [0.5, 1282.0], [0.6, 1282.0], [0.7, 1282.0], [0.8, 1282.0], [0.9, 1282.0], [1.0, 1304.0], [1.1, 1304.0], [1.2, 1304.0], [1.3, 1304.0], [1.4, 1304.0], [1.5, 1304.0], [1.6, 1304.0], [1.7, 1304.0], [1.8, 1304.0], [1.9, 1304.0], [2.0, 1534.0], [2.1, 1534.0], [2.2, 1534.0], [2.3, 1534.0], [2.4, 1534.0], [2.5, 1534.0], [2.6, 1534.0], [2.7, 1534.0], [2.8, 1534.0], [2.9, 1534.0], [3.0, 1956.0], [3.1, 1956.0], [3.2, 1956.0], [3.3, 1956.0], [3.4, 1956.0], [3.5, 1956.0], [3.6, 1956.0], [3.7, 1956.0], [3.8, 1956.0], [3.9, 1956.0], [4.0, 2027.0], [4.1, 2027.0], [4.2, 2027.0], [4.3, 2027.0], [4.4, 2027.0], [4.5, 2027.0], [4.6, 2027.0], [4.7, 2027.0], [4.8, 2027.0], [4.9, 2027.0], [5.0, 2466.0], [5.1, 2466.0], [5.2, 2466.0], [5.3, 2466.0], [5.4, 2466.0], [5.5, 2466.0], [5.6, 2466.0], [5.7, 2466.0], [5.8, 2466.0], [5.9, 2466.0], [6.0, 2564.0], [6.1, 2564.0], [6.2, 2564.0], [6.3, 2564.0], [6.4, 2564.0], [6.5, 2564.0], [6.6, 2564.0], [6.7, 2564.0], [6.8, 2564.0], [6.9, 2564.0], [7.0, 2649.0], [7.1, 2649.0], [7.2, 2649.0], [7.3, 2649.0], [7.4, 2649.0], [7.5, 2649.0], [7.6, 2649.0], [7.7, 2649.0], [7.8, 2649.0], [7.9, 2649.0], [8.0, 2776.0], [8.1, 2776.0], [8.2, 2776.0], [8.3, 2776.0], [8.4, 2776.0], [8.5, 2776.0], [8.6, 2776.0], [8.7, 2776.0], [8.8, 2776.0], [8.9, 2776.0], [9.0, 2893.0], [9.1, 2893.0], [9.2, 2893.0], [9.3, 2893.0], [9.4, 2893.0], [9.5, 2893.0], [9.6, 2893.0], [9.7, 2893.0], [9.8, 2893.0], [9.9, 2893.0], [10.0, 3250.0], [10.1, 3250.0], [10.2, 3250.0], [10.3, 3250.0], [10.4, 3250.0], [10.5, 3250.0], [10.6, 3250.0], [10.7, 3250.0], [10.8, 3250.0], [10.9, 3250.0], [11.0, 3567.0], [11.1, 3567.0], [11.2, 3567.0], [11.3, 3567.0], [11.4, 3567.0], [11.5, 3567.0], [11.6, 3567.0], [11.7, 3567.0], [11.8, 3567.0], [11.9, 3567.0], [12.0, 3691.0], [12.1, 3691.0], [12.2, 3691.0], [12.3, 3691.0], [12.4, 3691.0], [12.5, 3691.0], [12.6, 3691.0], [12.7, 3691.0], [12.8, 3691.0], [12.9, 3691.0], [13.0, 3824.0], [13.1, 3824.0], [13.2, 3824.0], [13.3, 3824.0], [13.4, 3824.0], [13.5, 3824.0], [13.6, 3824.0], [13.7, 3824.0], [13.8, 3824.0], [13.9, 3824.0], [14.0, 3884.0], [14.1, 3884.0], [14.2, 3884.0], [14.3, 3884.0], [14.4, 3884.0], [14.5, 3884.0], [14.6, 3884.0], [14.7, 3884.0], [14.8, 3884.0], [14.9, 3884.0], [15.0, 3920.0], [15.1, 3920.0], [15.2, 3920.0], [15.3, 3920.0], [15.4, 3920.0], [15.5, 3920.0], [15.6, 3920.0], [15.7, 3920.0], [15.8, 3920.0], [15.9, 3920.0], [16.0, 4178.0], [16.1, 4178.0], [16.2, 4178.0], [16.3, 4178.0], [16.4, 4178.0], [16.5, 4178.0], [16.6, 4178.0], [16.7, 4178.0], [16.8, 4178.0], [16.9, 4178.0], [17.0, 5587.0], [17.1, 5587.0], [17.2, 5587.0], [17.3, 5587.0], [17.4, 5587.0], [17.5, 5587.0], [17.6, 5587.0], [17.7, 5587.0], [17.8, 5587.0], [17.9, 5587.0], [18.0, 6011.0], [18.1, 6011.0], [18.2, 6011.0], [18.3, 6011.0], [18.4, 6011.0], [18.5, 6011.0], [18.6, 6011.0], [18.7, 6011.0], [18.8, 6011.0], [18.9, 6011.0], [19.0, 6251.0], [19.1, 6251.0], [19.2, 6251.0], [19.3, 6251.0], [19.4, 6251.0], [19.5, 6251.0], [19.6, 6251.0], [19.7, 6251.0], [19.8, 6251.0], [19.9, 6251.0], [20.0, 6374.0], [20.1, 6374.0], [20.2, 6374.0], [20.3, 6374.0], [20.4, 6374.0], [20.5, 6374.0], [20.6, 6374.0], [20.7, 6374.0], [20.8, 6374.0], [20.9, 6374.0], [21.0, 6467.0], [21.1, 6467.0], [21.2, 6467.0], [21.3, 6467.0], [21.4, 6467.0], [21.5, 6467.0], [21.6, 6467.0], [21.7, 6467.0], [21.8, 6467.0], [21.9, 6467.0], [22.0, 6819.0], [22.1, 6819.0], [22.2, 6819.0], [22.3, 6819.0], [22.4, 6819.0], [22.5, 6819.0], [22.6, 6819.0], [22.7, 6819.0], [22.8, 6819.0], [22.9, 6819.0], [23.0, 6949.0], [23.1, 6949.0], [23.2, 6949.0], [23.3, 6949.0], [23.4, 6949.0], [23.5, 6949.0], [23.6, 6949.0], [23.7, 6949.0], [23.8, 6949.0], [23.9, 6949.0], [24.0, 7275.0], [24.1, 7275.0], [24.2, 7275.0], [24.3, 7275.0], [24.4, 7275.0], [24.5, 7275.0], [24.6, 7275.0], [24.7, 7275.0], [24.8, 7275.0], [24.9, 7275.0], [25.0, 7947.0], [25.1, 7947.0], [25.2, 7947.0], [25.3, 7947.0], [25.4, 7947.0], [25.5, 7947.0], [25.6, 7947.0], [25.7, 7947.0], [25.8, 7947.0], [25.9, 7947.0], [26.0, 8190.0], [26.1, 8190.0], [26.2, 8190.0], [26.3, 8190.0], [26.4, 8190.0], [26.5, 8190.0], [26.6, 8190.0], [26.7, 8190.0], [26.8, 8190.0], [26.9, 8190.0], [27.0, 8501.0], [27.1, 8501.0], [27.2, 8501.0], [27.3, 8501.0], [27.4, 8501.0], [27.5, 8501.0], [27.6, 8501.0], [27.7, 8501.0], [27.8, 8501.0], [27.9, 8501.0], [28.0, 8823.0], [28.1, 8823.0], [28.2, 8823.0], [28.3, 8823.0], [28.4, 8823.0], [28.5, 8823.0], [28.6, 8823.0], [28.7, 8823.0], [28.8, 8823.0], [28.9, 8823.0], [29.0, 9047.0], [29.1, 9047.0], [29.2, 9047.0], [29.3, 9047.0], [29.4, 9047.0], [29.5, 9047.0], [29.6, 9047.0], [29.7, 9047.0], [29.8, 9047.0], [29.9, 9047.0], [30.0, 9408.0], [30.1, 9408.0], [30.2, 9408.0], [30.3, 9408.0], [30.4, 9408.0], [30.5, 9408.0], [30.6, 9408.0], [30.7, 9408.0], [30.8, 9408.0], [30.9, 9408.0], [31.0, 9562.0], [31.1, 9562.0], [31.2, 9562.0], [31.3, 9562.0], [31.4, 9562.0], [31.5, 9562.0], [31.6, 9562.0], [31.7, 9562.0], [31.8, 9562.0], [31.9, 9562.0], [32.0, 9613.0], [32.1, 9613.0], [32.2, 9613.0], [32.3, 9613.0], [32.4, 9613.0], [32.5, 9613.0], [32.6, 9613.0], [32.7, 9613.0], [32.8, 9613.0], [32.9, 9613.0], [33.0, 9831.0], [33.1, 9831.0], [33.2, 9831.0], [33.3, 9831.0], [33.4, 9831.0], [33.5, 9831.0], [33.6, 9831.0], [33.7, 9831.0], [33.8, 9831.0], [33.9, 9831.0], [34.0, 10605.0], [34.1, 10605.0], [34.2, 10605.0], [34.3, 10605.0], [34.4, 10605.0], [34.5, 10605.0], [34.6, 10605.0], [34.7, 10605.0], [34.8, 10605.0], [34.9, 10605.0], [35.0, 10623.0], [35.1, 10623.0], [35.2, 10623.0], [35.3, 10623.0], [35.4, 10623.0], [35.5, 10623.0], [35.6, 10623.0], [35.7, 10623.0], [35.8, 10623.0], [35.9, 10623.0], [36.0, 10905.0], [36.1, 10905.0], [36.2, 10905.0], [36.3, 10905.0], [36.4, 10905.0], [36.5, 10905.0], [36.6, 10905.0], [36.7, 10905.0], [36.8, 10905.0], [36.9, 10905.0], [37.0, 11322.0], [37.1, 11322.0], [37.2, 11322.0], [37.3, 11322.0], [37.4, 11322.0], [37.5, 11322.0], [37.6, 11322.0], [37.7, 11322.0], [37.8, 11322.0], [37.9, 11322.0], [38.0, 11523.0], [38.1, 11523.0], [38.2, 11523.0], [38.3, 11523.0], [38.4, 11523.0], [38.5, 11523.0], [38.6, 11523.0], [38.7, 11523.0], [38.8, 11523.0], [38.9, 11523.0], [39.0, 11568.0], [39.1, 11568.0], [39.2, 11568.0], [39.3, 11568.0], [39.4, 11568.0], [39.5, 11568.0], [39.6, 11568.0], [39.7, 11568.0], [39.8, 11568.0], [39.9, 11568.0], [40.0, 11755.0], [40.1, 11755.0], [40.2, 11755.0], [40.3, 11755.0], [40.4, 11755.0], [40.5, 11755.0], [40.6, 11755.0], [40.7, 11755.0], [40.8, 11755.0], [40.9, 11755.0], [41.0, 12779.0], [41.1, 12779.0], [41.2, 12779.0], [41.3, 12779.0], [41.4, 12779.0], [41.5, 12779.0], [41.6, 12779.0], [41.7, 12779.0], [41.8, 12779.0], [41.9, 12779.0], [42.0, 13966.0], [42.1, 13966.0], [42.2, 13966.0], [42.3, 13966.0], [42.4, 13966.0], [42.5, 13966.0], [42.6, 13966.0], [42.7, 13966.0], [42.8, 13966.0], [42.9, 13966.0], [43.0, 13970.0], [43.1, 13970.0], [43.2, 13970.0], [43.3, 13970.0], [43.4, 13970.0], [43.5, 13970.0], [43.6, 13970.0], [43.7, 13970.0], [43.8, 13970.0], [43.9, 13970.0], [44.0, 14103.0], [44.1, 14103.0], [44.2, 14103.0], [44.3, 14103.0], [44.4, 14103.0], [44.5, 14103.0], [44.6, 14103.0], [44.7, 14103.0], [44.8, 14103.0], [44.9, 14103.0], [45.0, 14126.0], [45.1, 14126.0], [45.2, 14126.0], [45.3, 14126.0], [45.4, 14126.0], [45.5, 14126.0], [45.6, 14126.0], [45.7, 14126.0], [45.8, 14126.0], [45.9, 14126.0], [46.0, 14139.0], [46.1, 14139.0], [46.2, 14139.0], [46.3, 14139.0], [46.4, 14139.0], [46.5, 14139.0], [46.6, 14139.0], [46.7, 14139.0], [46.8, 14139.0], [46.9, 14139.0], [47.0, 14184.0], [47.1, 14184.0], [47.2, 14184.0], [47.3, 14184.0], [47.4, 14184.0], [47.5, 14184.0], [47.6, 14184.0], [47.7, 14184.0], [47.8, 14184.0], [47.9, 14184.0], [48.0, 14231.0], [48.1, 14231.0], [48.2, 14231.0], [48.3, 14231.0], [48.4, 14231.0], [48.5, 14231.0], [48.6, 14231.0], [48.7, 14231.0], [48.8, 14231.0], [48.9, 14231.0], [49.0, 14320.0], [49.1, 14320.0], [49.2, 14320.0], [49.3, 14320.0], [49.4, 14320.0], [49.5, 14320.0], [49.6, 14320.0], [49.7, 14320.0], [49.8, 14320.0], [49.9, 14320.0], [50.0, 14609.0], [50.1, 14609.0], [50.2, 14609.0], [50.3, 14609.0], [50.4, 14609.0], [50.5, 14609.0], [50.6, 14609.0], [50.7, 14609.0], [50.8, 14609.0], [50.9, 14609.0], [51.0, 14627.0], [51.1, 14627.0], [51.2, 14627.0], [51.3, 14627.0], [51.4, 14627.0], [51.5, 14627.0], [51.6, 14627.0], [51.7, 14627.0], [51.8, 14627.0], [51.9, 14627.0], [52.0, 14933.0], [52.1, 14933.0], [52.2, 14933.0], [52.3, 14933.0], [52.4, 14933.0], [52.5, 14933.0], [52.6, 14933.0], [52.7, 14933.0], [52.8, 14933.0], [52.9, 14933.0], [53.0, 14987.0], [53.1, 14987.0], [53.2, 14987.0], [53.3, 14987.0], [53.4, 14987.0], [53.5, 14987.0], [53.6, 14987.0], [53.7, 14987.0], [53.8, 14987.0], [53.9, 14987.0], [54.0, 15293.0], [54.1, 15293.0], [54.2, 15293.0], [54.3, 15293.0], [54.4, 15293.0], [54.5, 15293.0], [54.6, 15293.0], [54.7, 15293.0], [54.8, 15293.0], [54.9, 15293.0], [55.0, 15479.0], [55.1, 15479.0], [55.2, 15479.0], [55.3, 15479.0], [55.4, 15479.0], [55.5, 15479.0], [55.6, 15479.0], [55.7, 15479.0], [55.8, 15479.0], [55.9, 15479.0], [56.0, 15816.0], [56.1, 15816.0], [56.2, 15816.0], [56.3, 15816.0], [56.4, 15816.0], [56.5, 15816.0], [56.6, 15816.0], [56.7, 15816.0], [56.8, 15816.0], [56.9, 15816.0], [57.0, 16420.0], [57.1, 16420.0], [57.2, 16420.0], [57.3, 16420.0], [57.4, 16420.0], [57.5, 16420.0], [57.6, 16420.0], [57.7, 16420.0], [57.8, 16420.0], [57.9, 16420.0], [58.0, 16420.0], [58.1, 16420.0], [58.2, 16420.0], [58.3, 16420.0], [58.4, 16420.0], [58.5, 16420.0], [58.6, 16420.0], [58.7, 16420.0], [58.8, 16420.0], [58.9, 16420.0], [59.0, 17245.0], [59.1, 17245.0], [59.2, 17245.0], [59.3, 17245.0], [59.4, 17245.0], [59.5, 17245.0], [59.6, 17245.0], [59.7, 17245.0], [59.8, 17245.0], [59.9, 17245.0], [60.0, 17252.0], [60.1, 17252.0], [60.2, 17252.0], [60.3, 17252.0], [60.4, 17252.0], [60.5, 17252.0], [60.6, 17252.0], [60.7, 17252.0], [60.8, 17252.0], [60.9, 17252.0], [61.0, 17269.0], [61.1, 17269.0], [61.2, 17269.0], [61.3, 17269.0], [61.4, 17269.0], [61.5, 17269.0], [61.6, 17269.0], [61.7, 17269.0], [61.8, 17269.0], [61.9, 17269.0], [62.0, 17590.0], [62.1, 17590.0], [62.2, 17590.0], [62.3, 17590.0], [62.4, 17590.0], [62.5, 17590.0], [62.6, 17590.0], [62.7, 17590.0], [62.8, 17590.0], [62.9, 17590.0], [63.0, 17891.0], [63.1, 17891.0], [63.2, 17891.0], [63.3, 17891.0], [63.4, 17891.0], [63.5, 17891.0], [63.6, 17891.0], [63.7, 17891.0], [63.8, 17891.0], [63.9, 17891.0], [64.0, 19063.0], [64.1, 19063.0], [64.2, 19063.0], [64.3, 19063.0], [64.4, 19063.0], [64.5, 19063.0], [64.6, 19063.0], [64.7, 19063.0], [64.8, 19063.0], [64.9, 19063.0], [65.0, 19233.0], [65.1, 19233.0], [65.2, 19233.0], [65.3, 19233.0], [65.4, 19233.0], [65.5, 19233.0], [65.6, 19233.0], [65.7, 19233.0], [65.8, 19233.0], [65.9, 19233.0], [66.0, 20590.0], [66.1, 20590.0], [66.2, 20590.0], [66.3, 20590.0], [66.4, 20590.0], [66.5, 20590.0], [66.6, 20590.0], [66.7, 20590.0], [66.8, 20590.0], [66.9, 20590.0], [67.0, 21351.0], [67.1, 21351.0], [67.2, 21351.0], [67.3, 21351.0], [67.4, 21351.0], [67.5, 21351.0], [67.6, 21351.0], [67.7, 21351.0], [67.8, 21351.0], [67.9, 21351.0], [68.0, 21502.0], [68.1, 21502.0], [68.2, 21502.0], [68.3, 21502.0], [68.4, 21502.0], [68.5, 21502.0], [68.6, 21502.0], [68.7, 21502.0], [68.8, 21502.0], [68.9, 21502.0], [69.0, 21595.0], [69.1, 21595.0], [69.2, 21595.0], [69.3, 21595.0], [69.4, 21595.0], [69.5, 21595.0], [69.6, 21595.0], [69.7, 21595.0], [69.8, 21595.0], [69.9, 21595.0], [70.0, 22476.0], [70.1, 22476.0], [70.2, 22476.0], [70.3, 22476.0], [70.4, 22476.0], [70.5, 22476.0], [70.6, 22476.0], [70.7, 22476.0], [70.8, 22476.0], [70.9, 22476.0], [71.0, 23342.0], [71.1, 23342.0], [71.2, 23342.0], [71.3, 23342.0], [71.4, 23342.0], [71.5, 23342.0], [71.6, 23342.0], [71.7, 23342.0], [71.8, 23342.0], [71.9, 23342.0], [72.0, 24061.0], [72.1, 24061.0], [72.2, 24061.0], [72.3, 24061.0], [72.4, 24061.0], [72.5, 24061.0], [72.6, 24061.0], [72.7, 24061.0], [72.8, 24061.0], [72.9, 24061.0], [73.0, 25222.0], [73.1, 25222.0], [73.2, 25222.0], [73.3, 25222.0], [73.4, 25222.0], [73.5, 25222.0], [73.6, 25222.0], [73.7, 25222.0], [73.8, 25222.0], [73.9, 25222.0], [74.0, 25387.0], [74.1, 25387.0], [74.2, 25387.0], [74.3, 25387.0], [74.4, 25387.0], [74.5, 25387.0], [74.6, 25387.0], [74.7, 25387.0], [74.8, 25387.0], [74.9, 25387.0], [75.0, 25530.0], [75.1, 25530.0], [75.2, 25530.0], [75.3, 25530.0], [75.4, 25530.0], [75.5, 25530.0], [75.6, 25530.0], [75.7, 25530.0], [75.8, 25530.0], [75.9, 25530.0], [76.0, 26532.0], [76.1, 26532.0], [76.2, 26532.0], [76.3, 26532.0], [76.4, 26532.0], [76.5, 26532.0], [76.6, 26532.0], [76.7, 26532.0], [76.8, 26532.0], [76.9, 26532.0], [77.0, 27086.0], [77.1, 27086.0], [77.2, 27086.0], [77.3, 27086.0], [77.4, 27086.0], [77.5, 27086.0], [77.6, 27086.0], [77.7, 27086.0], [77.8, 27086.0], [77.9, 27086.0], [78.0, 27211.0], [78.1, 27211.0], [78.2, 27211.0], [78.3, 27211.0], [78.4, 27211.0], [78.5, 27211.0], [78.6, 27211.0], [78.7, 27211.0], [78.8, 27211.0], [78.9, 27211.0], [79.0, 27791.0], [79.1, 27791.0], [79.2, 27791.0], [79.3, 27791.0], [79.4, 27791.0], [79.5, 27791.0], [79.6, 27791.0], [79.7, 27791.0], [79.8, 27791.0], [79.9, 27791.0], [80.0, 28025.0], [80.1, 28025.0], [80.2, 28025.0], [80.3, 28025.0], [80.4, 28025.0], [80.5, 28025.0], [80.6, 28025.0], [80.7, 28025.0], [80.8, 28025.0], [80.9, 28025.0], [81.0, 28091.0], [81.1, 28091.0], [81.2, 28091.0], [81.3, 28091.0], [81.4, 28091.0], [81.5, 28091.0], [81.6, 28091.0], [81.7, 28091.0], [81.8, 28091.0], [81.9, 28091.0], [82.0, 28625.0], [82.1, 28625.0], [82.2, 28625.0], [82.3, 28625.0], [82.4, 28625.0], [82.5, 28625.0], [82.6, 28625.0], [82.7, 28625.0], [82.8, 28625.0], [82.9, 28625.0], [83.0, 29828.0], [83.1, 29828.0], [83.2, 29828.0], [83.3, 29828.0], [83.4, 29828.0], [83.5, 29828.0], [83.6, 29828.0], [83.7, 29828.0], [83.8, 29828.0], [83.9, 29828.0], [84.0, 29881.0], [84.1, 29881.0], [84.2, 29881.0], [84.3, 29881.0], [84.4, 29881.0], [84.5, 29881.0], [84.6, 29881.0], [84.7, 29881.0], [84.8, 29881.0], [84.9, 29881.0], [85.0, 30163.0], [85.1, 30163.0], [85.2, 30163.0], [85.3, 30163.0], [85.4, 30163.0], [85.5, 30163.0], [85.6, 30163.0], [85.7, 30163.0], [85.8, 30163.0], [85.9, 30163.0], [86.0, 30560.0], [86.1, 30560.0], [86.2, 30560.0], [86.3, 30560.0], [86.4, 30560.0], [86.5, 30560.0], [86.6, 30560.0], [86.7, 30560.0], [86.8, 30560.0], [86.9, 30560.0], [87.0, 31294.0], [87.1, 31294.0], [87.2, 31294.0], [87.3, 31294.0], [87.4, 31294.0], [87.5, 31294.0], [87.6, 31294.0], [87.7, 31294.0], [87.8, 31294.0], [87.9, 31294.0], [88.0, 33016.0], [88.1, 33016.0], [88.2, 33016.0], [88.3, 33016.0], [88.4, 33016.0], [88.5, 33016.0], [88.6, 33016.0], [88.7, 33016.0], [88.8, 33016.0], [88.9, 33016.0], [89.0, 33022.0], [89.1, 33022.0], [89.2, 33022.0], [89.3, 33022.0], [89.4, 33022.0], [89.5, 33022.0], [89.6, 33022.0], [89.7, 33022.0], [89.8, 33022.0], [89.9, 33022.0], [90.0, 33033.0], [90.1, 33033.0], [90.2, 33033.0], [90.3, 33033.0], [90.4, 33033.0], [90.5, 33033.0], [90.6, 33033.0], [90.7, 33033.0], [90.8, 33033.0], [90.9, 33033.0], [91.0, 33036.0], [91.1, 33036.0], [91.2, 33036.0], [91.3, 33036.0], [91.4, 33036.0], [91.5, 33036.0], [91.6, 33036.0], [91.7, 33036.0], [91.8, 33036.0], [91.9, 33036.0], [92.0, 33601.0], [92.1, 33601.0], [92.2, 33601.0], [92.3, 33601.0], [92.4, 33601.0], [92.5, 33601.0], [92.6, 33601.0], [92.7, 33601.0], [92.8, 33601.0], [92.9, 33601.0], [93.0, 34045.0], [93.1, 34045.0], [93.2, 34045.0], [93.3, 34045.0], [93.4, 34045.0], [93.5, 34045.0], [93.6, 34045.0], [93.7, 34045.0], [93.8, 34045.0], [93.9, 34045.0], [94.0, 34552.0], [94.1, 34552.0], [94.2, 34552.0], [94.3, 34552.0], [94.4, 34552.0], [94.5, 34552.0], [94.6, 34552.0], [94.7, 34552.0], [94.8, 34552.0], [94.9, 34552.0], [95.0, 34857.0], [95.1, 34857.0], [95.2, 34857.0], [95.3, 34857.0], [95.4, 34857.0], [95.5, 34857.0], [95.6, 34857.0], [95.7, 34857.0], [95.8, 34857.0], [95.9, 34857.0], [96.0, 35279.0], [96.1, 35279.0], [96.2, 35279.0], [96.3, 35279.0], [96.4, 35279.0], [96.5, 35279.0], [96.6, 35279.0], [96.7, 35279.0], [96.8, 35279.0], [96.9, 35279.0], [97.0, 35295.0], [97.1, 35295.0], [97.2, 35295.0], [97.3, 35295.0], [97.4, 35295.0], [97.5, 35295.0], [97.6, 35295.0], [97.7, 35295.0], [97.8, 35295.0], [97.9, 35295.0], [98.0, 36175.0], [98.1, 36175.0], [98.2, 36175.0], [98.3, 36175.0], [98.4, 36175.0], [98.5, 36175.0], [98.6, 36175.0], [98.7, 36175.0], [98.8, 36175.0], [98.9, 36175.0], [99.0, 38306.0], [99.1, 38306.0], [99.2, 38306.0], [99.3, 38306.0], [99.4, 38306.0], [99.5, 38306.0], [99.6, 38306.0], [99.7, 38306.0], [99.8, 38306.0], [99.9, 38306.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 4.0, "series": [{"data": [[1200.0, 1.0], [1300.0, 1.0], [1500.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [3200.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4100.0, 1.0], [5500.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7200.0, 1.0], [7900.0, 1.0], [8100.0, 1.0], [8500.0, 1.0], [8800.0, 1.0], [9000.0, 1.0], [9500.0, 1.0], [9600.0, 1.0], [9400.0, 1.0], [9800.0, 1.0], [10600.0, 2.0], [10900.0, 1.0], [11700.0, 1.0], [11500.0, 2.0], [11300.0, 1.0], [12700.0, 1.0], [14100.0, 4.0], [13900.0, 2.0], [14200.0, 1.0], [14300.0, 1.0], [14600.0, 2.0], [15200.0, 1.0], [14900.0, 2.0], [15800.0, 1.0], [15400.0, 1.0], [16400.0, 2.0], [17200.0, 3.0], [17800.0, 1.0], [17500.0, 1.0], [19000.0, 1.0], [19200.0, 1.0], [20500.0, 1.0], [21500.0, 2.0], [21300.0, 1.0], [22400.0, 1.0], [23300.0, 1.0], [24000.0, 1.0], [25200.0, 1.0], [25300.0, 1.0], [25500.0, 1.0], [26500.0, 1.0], [27200.0, 1.0], [27000.0, 1.0], [28000.0, 2.0], [27700.0, 1.0], [28600.0, 1.0], [29800.0, 2.0], [30500.0, 1.0], [30100.0, 1.0], [31200.0, 1.0], [33000.0, 4.0], [34800.0, 1.0], [34000.0, 1.0], [34500.0, 1.0], [33600.0, 1.0], [35200.0, 2.0], [36100.0, 1.0], [38300.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 38300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 98.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 98.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.1666666666666665, "minX": 1.79148996E12, "maxY": 9.789473684210526, "series": [{"data": [[1.79149002E12, 5.105263157894737], [1.7914902E12, 9.789473684210526], [1.79149008E12, 3.4285714285714284], [1.79149026E12, 5.2105263157894735], [1.79149014E12, 6.0], [1.79148996E12, 2.1666666666666665]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5902.235294117647, "minX": 1.0, "maxY": 33840.5, "series": [{"data": [[2.0, 5902.235294117647], [1.0, 6173.0], [4.0, 14855.57142857143], [8.0, 23313.25], [9.0, 18958.333333333332], [5.0, 16145.900000000001], [10.0, 26195.874999999996], [11.0, 33840.5], [3.0, 6178.875], [6.0, 21859.214285714283], [12.0, 32454.333333333332], [7.0, 18710.999999999996]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[5.630000000000002, 16390.260000000006]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 19.25, "minX": 1.79148996E12, "maxY": 380.46666666666664, "series": [{"data": [[1.79149002E12, 61.18333333333333], [1.7914902E12, 61.05], [1.79149008E12, 66.95], [1.79149026E12, 61.166666666666664], [1.79149014E12, 51.86666666666667], [1.79148996E12, 19.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79149002E12, 351.4], [1.7914902E12, 380.46666666666664], [1.79149008E12, 344.03333333333336], [1.79149026E12, 325.1333333333333], [1.79149014E12, 335.73333333333335], [1.79148996E12, 111.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5163.166666666666, "minX": 1.79148996E12, "maxY": 31128.736842105263, "series": [{"data": [[1.79149002E12, 8828.052631578948], [1.7914902E12, 31128.736842105263], [1.79149008E12, 13170.761904761906], [1.79149026E12, 18911.684210526317], [1.79149014E12, 13310.0], [1.79148996E12, 5163.166666666666]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5162.833333333333, "minX": 1.79148996E12, "maxY": 31128.684210526313, "series": [{"data": [[1.79149002E12, 8828.0], [1.7914902E12, 31128.684210526313], [1.79149008E12, 13170.714285714286], [1.79149026E12, 18911.63157894737], [1.79149014E12, 13309.875], [1.79148996E12, 5162.833333333333]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.736842105263158, "minX": 1.79148996E12, "maxY": 13.333333333333334, "series": [{"data": [[1.79149002E12, 9.736842105263158], [1.7914902E12, 12.05263157894737], [1.79149008E12, 10.333333333333334], [1.79149026E12, 10.789473684210526], [1.79149014E12, 10.6875], [1.79148996E12, 13.333333333333334]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1282.0, "minX": 1.79148996E12, "maxY": 38306.0, "series": [{"data": [[1.79149002E12, 19063.0], [1.7914902E12, 38306.0], [1.79149008E12, 28025.0], [1.79149026E12, 33601.0], [1.79149014E12, 22476.0], [1.79148996E12, 9562.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79149002E12, 15816.0], [1.7914902E12, 36175.0], [1.79149008E12, 27186.0], [1.79149026E12, 30163.0], [1.79149014E12, 20205.9], [1.79148996E12, 9562.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79149002E12, 19063.0], [1.7914902E12, 38306.0], [1.79149008E12, 28025.0], [1.79149026E12, 33601.0], [1.79149014E12, 22476.0], [1.79148996E12, 9562.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79149002E12, 19063.0], [1.7914902E12, 38306.0], [1.79149008E12, 27943.6], [1.79149026E12, 33601.0], [1.79149014E12, 22476.0], [1.79148996E12, 9562.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79149002E12, 1304.0], [1.7914902E12, 20590.0], [1.79149008E12, 1534.0], [1.79149026E12, 9408.0], [1.79149014E12, 2776.0], [1.79148996E12, 1282.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79149002E12, 8190.0], [1.7914902E12, 33022.0], [1.79149008E12, 9613.0], [1.79149026E12, 17252.0], [1.79149014E12, 14275.5], [1.79148996E12, 4642.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14464.5, "minX": 1.0, "maxY": 14464.5, "series": [{"data": [[1.0, 14464.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14464.5, "minX": 1.0, "maxY": 14464.5, "series": [{"data": [[1.0, 14464.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.79148996E12, "maxY": 0.4, "series": [{"data": [[1.79149002E12, 0.4], [1.7914902E12, 0.26666666666666666], [1.79149008E12, 0.26666666666666666], [1.79149026E12, 0.21666666666666667], [1.79149014E12, 0.38333333333333336], [1.79148996E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.79148996E12, "maxY": 0.35, "series": [{"data": [[1.79149002E12, 0.31666666666666665], [1.7914902E12, 0.31666666666666665], [1.79149008E12, 0.35], [1.79149026E12, 0.31666666666666665], [1.79149014E12, 0.26666666666666666], [1.79148996E12, 0.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79149026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.79148996E12, "maxY": 0.35, "series": [{"data": [[1.79149002E12, 0.31666666666666665], [1.7914902E12, 0.31666666666666665], [1.79149008E12, 0.35], [1.79149026E12, 0.31666666666666665], [1.79149014E12, 0.26666666666666666], [1.79148996E12, 0.1]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.79148996E12, "maxY": 0.35, "series": [{"data": [[1.79149002E12, 0.31666666666666665], [1.7914902E12, 0.31666666666666665], [1.79149008E12, 0.35], [1.79149026E12, 0.31666666666666665], [1.79149014E12, 0.26666666666666666], [1.79148996E12, 0.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79149026E12, "title": "Total Transactions Per Second"}},
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

