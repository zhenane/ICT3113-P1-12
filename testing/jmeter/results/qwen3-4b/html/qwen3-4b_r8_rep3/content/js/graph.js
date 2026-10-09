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
        data: {"result": {"minY": 1550.0, "minX": 0.0, "maxY": 60282.0, "series": [{"data": [[0.0, 1550.0], [0.1, 1550.0], [0.2, 1550.0], [0.3, 1550.0], [0.4, 1550.0], [0.5, 8360.0], [0.6, 8360.0], [0.7, 8360.0], [0.8, 8360.0], [0.9, 11307.0], [1.0, 11307.0], [1.1, 11307.0], [1.2, 11307.0], [1.3, 38193.0], [1.4, 38193.0], [1.5, 38193.0], [1.6, 38193.0], [1.7, 40491.0], [1.8, 40491.0], [1.9, 40491.0], [2.0, 40491.0], [2.1, 42713.0], [2.2, 42713.0], [2.3, 42713.0], [2.4, 42713.0], [2.5, 58819.0], [2.6, 58819.0], [2.7, 58819.0], [2.8, 58819.0], [2.9, 58819.0], [3.0, 60027.0], [3.1, 60027.0], [3.2, 60027.0], [3.3, 60027.0], [3.4, 60030.0], [3.5, 60030.0], [3.6, 60030.0], [3.7, 60030.0], [3.8, 60032.0], [3.9, 60032.0], [4.0, 60032.0], [4.1, 60032.0], [4.2, 60034.0], [4.3, 60034.0], [4.4, 60034.0], [4.5, 60034.0], [4.6, 60035.0], [4.7, 60035.0], [4.8, 60035.0], [4.9, 60035.0], [5.0, 60035.0], [5.1, 60035.0], [5.2, 60035.0], [5.3, 60035.0], [5.4, 60035.0], [5.5, 60037.0], [5.6, 60037.0], [5.7, 60037.0], [5.8, 60037.0], [5.9, 60038.0], [6.0, 60038.0], [6.1, 60038.0], [6.2, 60038.0], [6.3, 60039.0], [6.4, 60039.0], [6.5, 60039.0], [6.6, 60039.0], [6.7, 60039.0], [6.8, 60039.0], [6.9, 60039.0], [7.0, 60039.0], [7.1, 60040.0], [7.2, 60040.0], [7.3, 60040.0], [7.4, 60040.0], [7.5, 60041.0], [7.6, 60041.0], [7.7, 60041.0], [7.8, 60041.0], [7.9, 60041.0], [8.0, 60042.0], [8.1, 60042.0], [8.2, 60042.0], [8.3, 60042.0], [8.4, 60042.0], [8.5, 60042.0], [8.6, 60042.0], [8.7, 60042.0], [8.8, 60044.0], [8.9, 60044.0], [9.0, 60044.0], [9.1, 60044.0], [9.2, 60045.0], [9.3, 60045.0], [9.4, 60045.0], [9.5, 60045.0], [9.6, 60047.0], [9.7, 60047.0], [9.8, 60047.0], [9.9, 60047.0], [10.0, 60047.0], [10.1, 60047.0], [10.2, 60047.0], [10.3, 60047.0], [10.4, 60047.0], [10.5, 60047.0], [10.6, 60047.0], [10.7, 60047.0], [10.8, 60047.0], [10.9, 60049.0], [11.0, 60049.0], [11.1, 60049.0], [11.2, 60049.0], [11.3, 60050.0], [11.4, 60050.0], [11.5, 60050.0], [11.6, 60050.0], [11.7, 60050.0], [11.8, 60050.0], [11.9, 60050.0], [12.0, 60050.0], [12.1, 60050.0], [12.2, 60050.0], [12.3, 60050.0], [12.4, 60050.0], [12.5, 60050.0], [12.6, 60050.0], [12.7, 60050.0], [12.8, 60050.0], [12.9, 60050.0], [13.0, 60053.0], [13.1, 60053.0], [13.2, 60053.0], [13.3, 60053.0], [13.4, 60053.0], [13.5, 60053.0], [13.6, 60053.0], [13.7, 60053.0], [13.8, 60053.0], [13.9, 60053.0], [14.0, 60053.0], [14.1, 60053.0], [14.2, 60054.0], [14.3, 60054.0], [14.4, 60054.0], [14.5, 60054.0], [14.6, 60054.0], [14.7, 60054.0], [14.8, 60054.0], [14.9, 60054.0], [15.0, 60054.0], [15.1, 60054.0], [15.2, 60054.0], [15.3, 60054.0], [15.4, 60054.0], [15.5, 60055.0], [15.6, 60055.0], [15.7, 60055.0], [15.8, 60055.0], [15.9, 60055.0], [16.0, 60055.0], [16.1, 60055.0], [16.2, 60055.0], [16.3, 60055.0], [16.4, 60055.0], [16.5, 60055.0], [16.6, 60055.0], [16.7, 60056.0], [16.8, 60056.0], [16.9, 60056.0], [17.0, 60056.0], [17.1, 60056.0], [17.2, 60056.0], [17.3, 60056.0], [17.4, 60056.0], [17.5, 60056.0], [17.6, 60056.0], [17.7, 60056.0], [17.8, 60056.0], [17.9, 60056.0], [18.0, 60057.0], [18.1, 60057.0], [18.2, 60057.0], [18.3, 60057.0], [18.4, 60058.0], [18.5, 60058.0], [18.6, 60058.0], [18.7, 60058.0], [18.8, 60058.0], [18.9, 60058.0], [19.0, 60058.0], [19.1, 60058.0], [19.2, 60059.0], [19.3, 60059.0], [19.4, 60059.0], [19.5, 60059.0], [19.6, 60060.0], [19.7, 60060.0], [19.8, 60060.0], [19.9, 60060.0], [20.0, 60062.0], [20.1, 60062.0], [20.2, 60062.0], [20.3, 60062.0], [20.4, 60062.0], [20.5, 60062.0], [20.6, 60062.0], [20.7, 60062.0], [20.8, 60062.0], [20.9, 60062.0], [21.0, 60062.0], [21.1, 60062.0], [21.2, 60062.0], [21.3, 60063.0], [21.4, 60063.0], [21.5, 60063.0], [21.6, 60063.0], [21.7, 60063.0], [21.8, 60063.0], [21.9, 60063.0], [22.0, 60063.0], [22.1, 60063.0], [22.2, 60063.0], [22.3, 60063.0], [22.4, 60063.0], [22.5, 60063.0], [22.6, 60063.0], [22.7, 60063.0], [22.8, 60063.0], [22.9, 60063.0], [23.0, 60063.0], [23.1, 60063.0], [23.2, 60063.0], [23.3, 60063.0], [23.4, 60064.0], [23.5, 60064.0], [23.6, 60064.0], [23.7, 60064.0], [23.8, 60065.0], [23.9, 60065.0], [24.0, 60065.0], [24.1, 60065.0], [24.2, 60066.0], [24.3, 60066.0], [24.4, 60066.0], [24.5, 60066.0], [24.6, 60067.0], [24.7, 60067.0], [24.8, 60067.0], [24.9, 60067.0], [25.0, 60067.0], [25.1, 60069.0], [25.2, 60069.0], [25.3, 60069.0], [25.4, 60069.0], [25.5, 60072.0], [25.6, 60072.0], [25.7, 60072.0], [25.8, 60072.0], [25.9, 60073.0], [26.0, 60073.0], [26.1, 60073.0], [26.2, 60073.0], [26.3, 60076.0], [26.4, 60076.0], [26.5, 60076.0], [26.6, 60076.0], [26.7, 60077.0], [26.8, 60077.0], [26.9, 60077.0], [27.0, 60077.0], [27.1, 60078.0], [27.2, 60078.0], [27.3, 60078.0], [27.4, 60078.0], [27.5, 60078.0], [27.6, 60081.0], [27.7, 60081.0], [27.8, 60081.0], [27.9, 60081.0], [28.0, 60082.0], [28.1, 60082.0], [28.2, 60082.0], [28.3, 60082.0], [28.4, 60082.0], [28.5, 60082.0], [28.6, 60082.0], [28.7, 60082.0], [28.8, 60082.0], [28.9, 60082.0], [29.0, 60082.0], [29.1, 60082.0], [29.2, 60084.0], [29.3, 60084.0], [29.4, 60084.0], [29.5, 60084.0], [29.6, 60085.0], [29.7, 60085.0], [29.8, 60085.0], [29.9, 60085.0], [30.0, 60085.0], [30.1, 60085.0], [30.2, 60085.0], [30.3, 60085.0], [30.4, 60085.0], [30.5, 60085.0], [30.6, 60085.0], [30.7, 60085.0], [30.8, 60085.0], [30.9, 60085.0], [31.0, 60085.0], [31.1, 60085.0], [31.2, 60085.0], [31.3, 60085.0], [31.4, 60085.0], [31.5, 60085.0], [31.6, 60085.0], [31.7, 60085.0], [31.8, 60085.0], [31.9, 60085.0], [32.0, 60085.0], [32.1, 60085.0], [32.2, 60085.0], [32.3, 60085.0], [32.4, 60085.0], [32.5, 60085.0], [32.6, 60086.0], [32.7, 60086.0], [32.8, 60086.0], [32.9, 60086.0], [33.0, 60086.0], [33.1, 60086.0], [33.2, 60086.0], [33.3, 60086.0], [33.4, 60086.0], [33.5, 60086.0], [33.6, 60086.0], [33.7, 60086.0], [33.8, 60086.0], [33.9, 60086.0], [34.0, 60086.0], [34.1, 60086.0], [34.2, 60087.0], [34.3, 60087.0], [34.4, 60087.0], [34.5, 60087.0], [34.6, 60087.0], [34.7, 60087.0], [34.8, 60087.0], [34.9, 60087.0], [35.0, 60087.0], [35.1, 60088.0], [35.2, 60088.0], [35.3, 60088.0], [35.4, 60088.0], [35.5, 60088.0], [35.6, 60088.0], [35.7, 60088.0], [35.8, 60088.0], [35.9, 60088.0], [36.0, 60088.0], [36.1, 60088.0], [36.2, 60088.0], [36.3, 60088.0], [36.4, 60088.0], [36.5, 60088.0], [36.6, 60088.0], [36.7, 60088.0], [36.8, 60088.0], [36.9, 60088.0], [37.0, 60088.0], [37.1, 60088.0], [37.2, 60088.0], [37.3, 60088.0], [37.4, 60088.0], [37.5, 60088.0], [37.6, 60088.0], [37.7, 60088.0], [37.8, 60088.0], [37.9, 60088.0], [38.0, 60088.0], [38.1, 60088.0], [38.2, 60088.0], [38.3, 60088.0], [38.4, 60089.0], [38.5, 60089.0], [38.6, 60089.0], [38.7, 60089.0], [38.8, 60089.0], [38.9, 60089.0], [39.0, 60089.0], [39.1, 60089.0], [39.2, 60089.0], [39.3, 60089.0], [39.4, 60089.0], [39.5, 60089.0], [39.6, 60089.0], [39.7, 60089.0], [39.8, 60089.0], [39.9, 60089.0], [40.0, 60089.0], [40.1, 60089.0], [40.2, 60089.0], [40.3, 60089.0], [40.4, 60089.0], [40.5, 60089.0], [40.6, 60089.0], [40.7, 60089.0], [40.8, 60089.0], [40.9, 60089.0], [41.0, 60089.0], [41.1, 60089.0], [41.2, 60089.0], [41.3, 60089.0], [41.4, 60089.0], [41.5, 60089.0], [41.6, 60089.0], [41.7, 60089.0], [41.8, 60089.0], [41.9, 60089.0], [42.0, 60089.0], [42.1, 60089.0], [42.2, 60089.0], [42.3, 60089.0], [42.4, 60089.0], [42.5, 60089.0], [42.6, 60089.0], [42.7, 60089.0], [42.8, 60089.0], [42.9, 60089.0], [43.0, 60090.0], [43.1, 60090.0], [43.2, 60090.0], [43.3, 60090.0], [43.4, 60090.0], [43.5, 60090.0], [43.6, 60090.0], [43.7, 60090.0], [43.8, 60090.0], [43.9, 60090.0], [44.0, 60090.0], [44.1, 60090.0], [44.2, 60090.0], [44.3, 60090.0], [44.4, 60090.0], [44.5, 60090.0], [44.6, 60090.0], [44.7, 60090.0], [44.8, 60090.0], [44.9, 60090.0], [45.0, 60090.0], [45.1, 60090.0], [45.2, 60090.0], [45.3, 60090.0], [45.4, 60090.0], [45.5, 60091.0], [45.6, 60091.0], [45.7, 60091.0], [45.8, 60091.0], [45.9, 60091.0], [46.0, 60091.0], [46.1, 60091.0], [46.2, 60091.0], [46.3, 60091.0], [46.4, 60091.0], [46.5, 60091.0], [46.6, 60091.0], [46.7, 60091.0], [46.8, 60091.0], [46.9, 60091.0], [47.0, 60091.0], [47.1, 60091.0], [47.2, 60091.0], [47.3, 60091.0], [47.4, 60091.0], [47.5, 60091.0], [47.6, 60091.0], [47.7, 60091.0], [47.8, 60091.0], [47.9, 60091.0], [48.0, 60092.0], [48.1, 60092.0], [48.2, 60092.0], [48.3, 60092.0], [48.4, 60092.0], [48.5, 60092.0], [48.6, 60092.0], [48.7, 60092.0], [48.8, 60092.0], [48.9, 60092.0], [49.0, 60092.0], [49.1, 60092.0], [49.2, 60093.0], [49.3, 60093.0], [49.4, 60093.0], [49.5, 60093.0], [49.6, 60093.0], [49.7, 60093.0], [49.8, 60093.0], [49.9, 60093.0], [50.0, 60093.0], [50.1, 60093.0], [50.2, 60093.0], [50.3, 60093.0], [50.4, 60093.0], [50.5, 60093.0], [50.6, 60093.0], [50.7, 60093.0], [50.8, 60093.0], [50.9, 60093.0], [51.0, 60093.0], [51.1, 60093.0], [51.2, 60093.0], [51.3, 60093.0], [51.4, 60093.0], [51.5, 60093.0], [51.6, 60093.0], [51.7, 60094.0], [51.8, 60094.0], [51.9, 60094.0], [52.0, 60094.0], [52.1, 60094.0], [52.2, 60094.0], [52.3, 60094.0], [52.4, 60094.0], [52.5, 60094.0], [52.6, 60094.0], [52.7, 60094.0], [52.8, 60094.0], [52.9, 60094.0], [53.0, 60094.0], [53.1, 60094.0], [53.2, 60094.0], [53.3, 60094.0], [53.4, 60095.0], [53.5, 60095.0], [53.6, 60095.0], [53.7, 60095.0], [53.8, 60095.0], [53.9, 60095.0], [54.0, 60095.0], [54.1, 60095.0], [54.2, 60095.0], [54.3, 60095.0], [54.4, 60095.0], [54.5, 60095.0], [54.6, 60095.0], [54.7, 60095.0], [54.8, 60095.0], [54.9, 60095.0], [55.0, 60095.0], [55.1, 60095.0], [55.2, 60095.0], [55.3, 60095.0], [55.4, 60095.0], [55.5, 60095.0], [55.6, 60095.0], [55.7, 60095.0], [55.8, 60095.0], [55.9, 60095.0], [56.0, 60095.0], [56.1, 60095.0], [56.2, 60095.0], [56.3, 60095.0], [56.4, 60095.0], [56.5, 60095.0], [56.6, 60095.0], [56.7, 60096.0], [56.8, 60096.0], [56.9, 60096.0], [57.0, 60096.0], [57.1, 60096.0], [57.2, 60096.0], [57.3, 60096.0], [57.4, 60096.0], [57.5, 60096.0], [57.6, 60096.0], [57.7, 60096.0], [57.8, 60096.0], [57.9, 60096.0], [58.0, 60096.0], [58.1, 60096.0], [58.2, 60096.0], [58.3, 60096.0], [58.4, 60096.0], [58.5, 60096.0], [58.6, 60096.0], [58.7, 60096.0], [58.8, 60096.0], [58.9, 60096.0], [59.0, 60096.0], [59.1, 60096.0], [59.2, 60096.0], [59.3, 60096.0], [59.4, 60096.0], [59.5, 60096.0], [59.6, 60096.0], [59.7, 60096.0], [59.8, 60096.0], [59.9, 60096.0], [60.0, 60096.0], [60.1, 60096.0], [60.2, 60096.0], [60.3, 60096.0], [60.4, 60096.0], [60.5, 60096.0], [60.6, 60096.0], [60.7, 60096.0], [60.8, 60096.0], [60.9, 60097.0], [61.0, 60097.0], [61.1, 60097.0], [61.2, 60097.0], [61.3, 60097.0], [61.4, 60097.0], [61.5, 60097.0], [61.6, 60097.0], [61.7, 60097.0], [61.8, 60097.0], [61.9, 60097.0], [62.0, 60097.0], [62.1, 60097.0], [62.2, 60097.0], [62.3, 60097.0], [62.4, 60097.0], [62.5, 60097.0], [62.6, 60097.0], [62.7, 60097.0], [62.8, 60097.0], [62.9, 60097.0], [63.0, 60097.0], [63.1, 60097.0], [63.2, 60097.0], [63.3, 60097.0], [63.4, 60097.0], [63.5, 60097.0], [63.6, 60097.0], [63.7, 60097.0], [63.8, 60097.0], [63.9, 60097.0], [64.0, 60097.0], [64.1, 60097.0], [64.2, 60097.0], [64.3, 60097.0], [64.4, 60097.0], [64.5, 60097.0], [64.6, 60097.0], [64.7, 60097.0], [64.8, 60097.0], [64.9, 60097.0], [65.0, 60097.0], [65.1, 60097.0], [65.2, 60097.0], [65.3, 60097.0], [65.4, 60097.0], [65.5, 60098.0], [65.6, 60098.0], [65.7, 60098.0], [65.8, 60098.0], [65.9, 60098.0], [66.0, 60098.0], [66.1, 60098.0], [66.2, 60098.0], [66.3, 60098.0], [66.4, 60098.0], [66.5, 60098.0], [66.6, 60098.0], [66.7, 60099.0], [66.8, 60099.0], [66.9, 60099.0], [67.0, 60099.0], [67.1, 60099.0], [67.2, 60099.0], [67.3, 60099.0], [67.4, 60099.0], [67.5, 60099.0], [67.6, 60099.0], [67.7, 60099.0], [67.8, 60099.0], [67.9, 60099.0], [68.0, 60099.0], [68.1, 60099.0], [68.2, 60099.0], [68.3, 60099.0], [68.4, 60099.0], [68.5, 60099.0], [68.6, 60099.0], [68.7, 60099.0], [68.8, 60100.0], [68.9, 60100.0], [69.0, 60100.0], [69.1, 60100.0], [69.2, 60100.0], [69.3, 60100.0], [69.4, 60100.0], [69.5, 60100.0], [69.6, 60100.0], [69.7, 60100.0], [69.8, 60100.0], [69.9, 60100.0], [70.0, 60100.0], [70.1, 60100.0], [70.2, 60100.0], [70.3, 60100.0], [70.4, 60100.0], [70.5, 60100.0], [70.6, 60100.0], [70.7, 60100.0], [70.8, 60100.0], [70.9, 60100.0], [71.0, 60100.0], [71.1, 60100.0], [71.2, 60100.0], [71.3, 60101.0], [71.4, 60101.0], [71.5, 60101.0], [71.6, 60101.0], [71.7, 60101.0], [71.8, 60101.0], [71.9, 60101.0], [72.0, 60101.0], [72.1, 60101.0], [72.2, 60101.0], [72.3, 60101.0], [72.4, 60101.0], [72.5, 60101.0], [72.6, 60101.0], [72.7, 60101.0], [72.8, 60101.0], [72.9, 60101.0], [73.0, 60102.0], [73.1, 60102.0], [73.2, 60102.0], [73.3, 60102.0], [73.4, 60102.0], [73.5, 60102.0], [73.6, 60102.0], [73.7, 60102.0], [73.8, 60102.0], [73.9, 60102.0], [74.0, 60102.0], [74.1, 60102.0], [74.2, 60102.0], [74.3, 60102.0], [74.4, 60102.0], [74.5, 60102.0], [74.6, 60102.0], [74.7, 60102.0], [74.8, 60102.0], [74.9, 60102.0], [75.0, 60102.0], [75.1, 60102.0], [75.2, 60102.0], [75.3, 60102.0], [75.4, 60102.0], [75.5, 60102.0], [75.6, 60102.0], [75.7, 60102.0], [75.8, 60102.0], [75.9, 60103.0], [76.0, 60103.0], [76.1, 60103.0], [76.2, 60103.0], [76.3, 60103.0], [76.4, 60103.0], [76.5, 60103.0], [76.6, 60103.0], [76.7, 60103.0], [76.8, 60103.0], [76.9, 60103.0], [77.0, 60103.0], [77.1, 60103.0], [77.2, 60103.0], [77.3, 60103.0], [77.4, 60103.0], [77.5, 60103.0], [77.6, 60103.0], [77.7, 60103.0], [77.8, 60103.0], [77.9, 60103.0], [78.0, 60103.0], [78.1, 60103.0], [78.2, 60103.0], [78.3, 60103.0], [78.4, 60104.0], [78.5, 60104.0], [78.6, 60104.0], [78.7, 60104.0], [78.8, 60104.0], [78.9, 60104.0], [79.0, 60104.0], [79.1, 60104.0], [79.2, 60104.0], [79.3, 60104.0], [79.4, 60104.0], [79.5, 60104.0], [79.6, 60104.0], [79.7, 60104.0], [79.8, 60104.0], [79.9, 60104.0], [80.0, 60104.0], [80.1, 60104.0], [80.2, 60104.0], [80.3, 60104.0], [80.4, 60104.0], [80.5, 60105.0], [80.6, 60105.0], [80.7, 60105.0], [80.8, 60105.0], [80.9, 60105.0], [81.0, 60105.0], [81.1, 60105.0], [81.2, 60105.0], [81.3, 60105.0], [81.4, 60105.0], [81.5, 60105.0], [81.6, 60105.0], [81.7, 60105.0], [81.8, 60105.0], [81.9, 60105.0], [82.0, 60105.0], [82.1, 60106.0], [82.2, 60106.0], [82.3, 60106.0], [82.4, 60106.0], [82.5, 60106.0], [82.6, 60106.0], [82.7, 60106.0], [82.8, 60106.0], [82.9, 60106.0], [83.0, 60106.0], [83.1, 60106.0], [83.2, 60106.0], [83.3, 60106.0], [83.4, 60106.0], [83.5, 60106.0], [83.6, 60106.0], [83.7, 60106.0], [83.8, 60107.0], [83.9, 60107.0], [84.0, 60107.0], [84.1, 60107.0], [84.2, 60107.0], [84.3, 60107.0], [84.4, 60107.0], [84.5, 60107.0], [84.6, 60107.0], [84.7, 60107.0], [84.8, 60107.0], [84.9, 60107.0], [85.0, 60107.0], [85.1, 60107.0], [85.2, 60107.0], [85.3, 60107.0], [85.4, 60107.0], [85.5, 60108.0], [85.6, 60108.0], [85.7, 60108.0], [85.8, 60108.0], [85.9, 60108.0], [86.0, 60108.0], [86.1, 60108.0], [86.2, 60108.0], [86.3, 60109.0], [86.4, 60109.0], [86.5, 60109.0], [86.6, 60109.0], [86.7, 60109.0], [86.8, 60109.0], [86.9, 60109.0], [87.0, 60109.0], [87.1, 60109.0], [87.2, 60109.0], [87.3, 60109.0], [87.4, 60109.0], [87.5, 60109.0], [87.6, 60109.0], [87.7, 60109.0], [87.8, 60109.0], [87.9, 60109.0], [88.0, 60110.0], [88.1, 60110.0], [88.2, 60110.0], [88.3, 60110.0], [88.4, 60110.0], [88.5, 60110.0], [88.6, 60110.0], [88.7, 60110.0], [88.8, 60110.0], [88.9, 60110.0], [89.0, 60110.0], [89.1, 60110.0], [89.2, 60110.0], [89.3, 60110.0], [89.4, 60110.0], [89.5, 60110.0], [89.6, 60111.0], [89.7, 60111.0], [89.8, 60111.0], [89.9, 60111.0], [90.0, 60111.0], [90.1, 60111.0], [90.2, 60111.0], [90.3, 60111.0], [90.4, 60111.0], [90.5, 60111.0], [90.6, 60111.0], [90.7, 60111.0], [90.8, 60111.0], [90.9, 60113.0], [91.0, 60113.0], [91.1, 60113.0], [91.2, 60113.0], [91.3, 60115.0], [91.4, 60115.0], [91.5, 60115.0], [91.6, 60115.0], [91.7, 60115.0], [91.8, 60115.0], [91.9, 60115.0], [92.0, 60115.0], [92.1, 60115.0], [92.2, 60115.0], [92.3, 60115.0], [92.4, 60115.0], [92.5, 60115.0], [92.6, 60116.0], [92.7, 60116.0], [92.8, 60116.0], [92.9, 60116.0], [93.0, 60118.0], [93.1, 60118.0], [93.2, 60118.0], [93.3, 60118.0], [93.4, 60119.0], [93.5, 60119.0], [93.6, 60119.0], [93.7, 60119.0], [93.8, 60119.0], [93.9, 60119.0], [94.0, 60119.0], [94.1, 60119.0], [94.2, 60120.0], [94.3, 60120.0], [94.4, 60120.0], [94.5, 60120.0], [94.6, 60121.0], [94.7, 60121.0], [94.8, 60121.0], [94.9, 60121.0], [95.0, 60121.0], [95.1, 60121.0], [95.2, 60121.0], [95.3, 60121.0], [95.4, 60121.0], [95.5, 60125.0], [95.6, 60125.0], [95.7, 60125.0], [95.8, 60125.0], [95.9, 60126.0], [96.0, 60126.0], [96.1, 60126.0], [96.2, 60126.0], [96.3, 60129.0], [96.4, 60129.0], [96.5, 60129.0], [96.6, 60129.0], [96.7, 60129.0], [96.8, 60129.0], [96.9, 60129.0], [97.0, 60129.0], [97.1, 60151.0], [97.2, 60151.0], [97.3, 60151.0], [97.4, 60151.0], [97.5, 60151.0], [97.6, 60154.0], [97.7, 60154.0], [97.8, 60154.0], [97.9, 60154.0], [98.0, 60157.0], [98.1, 60157.0], [98.2, 60157.0], [98.3, 60157.0], [98.4, 60158.0], [98.5, 60158.0], [98.6, 60158.0], [98.7, 60158.0], [98.8, 60158.0], [98.9, 60158.0], [99.0, 60158.0], [99.1, 60158.0], [99.2, 60187.0], [99.3, 60187.0], [99.4, 60187.0], [99.5, 60187.0], [99.6, 60282.0], [99.7, 60282.0], [99.8, 60282.0], [99.9, 60282.0], [100.0, 60282.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 158.0, "series": [{"data": [[8300.0, 1.0], [38100.0, 1.0], [40400.0, 1.0], [42700.0, 1.0], [11300.0, 1.0], [1500.0, 1.0], [58800.0, 1.0], [60000.0, 158.0], [60100.0, 74.0], [60200.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 240.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 240.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 240.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.79144274E12, "maxY": 13.909090909090908, "series": [{"data": [[1.79144412E12, 8.2], [1.79144382E12, 2.5], [1.7914428E12, 10.375], [1.79144442E12, 9.666666666666668], [1.7914431E12, 6.166666666666667], [1.7914434E12, 7.0], [1.791444E12, 9.875], [1.7914437E12, 10.9], [1.7914443E12, 10.0], [1.79144298E12, 12.666666666666666], [1.79144328E12, 12.285714285714286], [1.79144388E12, 9.5], [1.79144358E12, 10.666666666666666], [1.79144448E12, 7.454545454545455], [1.79144418E12, 6.222222222222222], [1.79144286E12, 5.857142857142858], [1.79144316E12, 10.833333333333332], [1.79144346E12, 6.833333333333334], [1.79144376E12, 6.8999999999999995], [1.79144436E12, 7.5], [1.79144406E12, 8.923076923076923], [1.79144274E12, 8.222222222222223], [1.79144304E12, 9.909090909090908], [1.79144334E12, 6.636363636363637], [1.79144364E12, 6.166666666666666], [1.79144424E12, 5.0], [1.79144394E12, 10.0], [1.79144292E12, 9.166666666666666], [1.79144322E12, 7.454545454545455], [1.79144352E12, 13.909090909090908]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144448E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 55190.11999999999, "minX": 2.0, "maxY": 60111.0, "series": [{"data": [[8.0, 55190.11999999999], [2.0, 60111.0], [9.0, 60094.529411764706], [10.0, 60092.62962962963], [11.0, 60095.64000000001], [12.0, 60083.82608695653], [3.0, 60098.0], [13.0, 60084.0], [14.0, 60067.71428571429], [15.0, 60102.0], [4.0, 60101.5], [16.0, 60081.0], [17.0, 60087.0], [5.0, 60085.18749999999], [6.0, 57485.34782608696], [7.0, 58857.899999999994]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[8.954166666666666, 59176.07083333334]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 17.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5.966666666666667, "minX": 1.79144274E12, "maxY": 431.21666666666664, "series": [{"data": [[1.79144412E12, 14.916666666666666], [1.79144382E12, 5.966666666666667], [1.7914428E12, 23.866666666666667], [1.79144442E12, 17.9], [1.7914431E12, 17.9], [1.7914434E12, 8.95], [1.791444E12, 23.866666666666667], [1.7914437E12, 29.833333333333332], [1.7914443E12, 20.883333333333333], [1.79144298E12, 35.8], [1.79144328E12, 20.883333333333333], [1.79144388E12, 17.9], [1.79144358E12, 35.8], [1.79144448E12, 431.21666666666664], [1.79144418E12, 26.85], [1.79144286E12, 20.883333333333333], [1.79144316E12, 17.9], [1.79144346E12, 17.9], [1.79144376E12, 29.833333333333332], [1.79144436E12, 23.866666666666667], [1.79144406E12, 38.78333333333333], [1.79144274E12, 26.85], [1.79144304E12, 32.81666666666667], [1.79144334E12, 32.81666666666667], [1.79144364E12, 17.9], [1.79144424E12, 11.933333333333334], [1.79144394E12, 26.85], [1.79144292E12, 17.9], [1.79144322E12, 32.81666666666667], [1.79144352E12, 32.81666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79144412E12, 113.86666666666666], [1.79144382E12, 47.9], [1.7914428E12, 131.9], [1.79144442E12, 121.6], [1.7914431E12, 141.03333333333333], [1.7914434E12, 43.733333333333334], [1.791444E12, 177.23333333333332], [1.7914437E12, 173.65], [1.7914443E12, 137.61666666666667], [1.79144298E12, 166.58333333333334], [1.79144328E12, 119.06666666666666], [1.79144388E12, 98.16666666666667], [1.79144358E12, 223.21666666666667], [1.79144448E12, 52.55], [1.79144418E12, 154.75], [1.79144286E12, 130.35], [1.79144316E12, 120.48333333333333], [1.79144346E12, 115.25], [1.79144376E12, 194.41666666666666], [1.79144436E12, 193.15], [1.79144406E12, 223.73333333333332], [1.79144274E12, 181.15], [1.79144304E12, 217.78333333333333], [1.79144334E12, 200.71666666666667], [1.79144364E12, 106.75], [1.79144424E12, 78.01666666666667], [1.79144394E12, 139.5], [1.79144292E12, 113.65], [1.79144322E12, 231.68333333333334], [1.79144352E12, 193.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144448E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 40162.909090909096, "minX": 1.79144274E12, "maxY": 60120.833333333336, "series": [{"data": [[1.79144412E12, 60088.2], [1.79144382E12, 60105.5], [1.7914428E12, 60073.625], [1.79144442E12, 60099.666666666664], [1.7914431E12, 60086.666666666664], [1.7914434E12, 60092.333333333336], [1.791444E12, 60071.5], [1.7914437E12, 60096.3], [1.7914443E12, 60088.857142857145], [1.79144298E12, 60088.0], [1.79144328E12, 60094.85714285714], [1.79144388E12, 60092.333333333336], [1.79144358E12, 60080.666666666664], [1.79144448E12, 40162.909090909096], [1.79144418E12, 60091.77777777778], [1.79144286E12, 60086.0], [1.79144316E12, 60120.833333333336], [1.79144346E12, 60082.66666666667], [1.79144376E12, 60087.9], [1.79144436E12, 60083.0], [1.79144406E12, 60087.153846153844], [1.79144274E12, 60088.444444444445], [1.79144304E12, 60103.545454545456], [1.79144334E12, 60087.63636363637], [1.79144364E12, 60081.5], [1.79144424E12, 60094.5], [1.79144394E12, 60097.22222222222], [1.79144292E12, 60073.833333333336], [1.79144322E12, 60097.0], [1.79144352E12, 60086.72727272728]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144448E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 16391.272727272728, "minX": 1.79144274E12, "maxY": 60120.666666666664, "series": [{"data": [[1.79144412E12, 60088.2], [1.79144382E12, 60105.5], [1.7914428E12, 60073.625], [1.79144442E12, 60099.5], [1.7914431E12, 60086.666666666664], [1.7914434E12, 60092.333333333336], [1.791444E12, 60071.5], [1.7914437E12, 60096.3], [1.7914443E12, 60088.857142857145], [1.79144298E12, 60088.0], [1.79144328E12, 60094.85714285714], [1.79144388E12, 60092.16666666667], [1.79144358E12, 60080.666666666664], [1.79144448E12, 16391.272727272728], [1.79144418E12, 60091.77777777778], [1.79144286E12, 60086.0], [1.79144316E12, 60120.666666666664], [1.79144346E12, 60082.5], [1.79144376E12, 60087.8], [1.79144436E12, 60082.875], [1.79144406E12, 60087.07692307693], [1.79144274E12, 60088.444444444445], [1.79144304E12, 60103.545454545456], [1.79144334E12, 60087.63636363637], [1.79144364E12, 60081.33333333333], [1.79144424E12, 60094.5], [1.79144394E12, 60097.11111111111], [1.79144292E12, 60073.833333333336], [1.79144322E12, 60096.90909090909], [1.79144352E12, 60086.63636363637]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144448E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.846153846153845, "minX": 1.79144274E12, "maxY": 19.454545454545457, "series": [{"data": [[1.79144412E12, 9.4], [1.79144382E12, 17.0], [1.7914428E12, 9.625], [1.79144442E12, 11.5], [1.7914431E12, 10.0], [1.7914434E12, 9.0], [1.791444E12, 9.750000000000002], [1.7914437E12, 10.2], [1.7914443E12, 16.857142857142858], [1.79144298E12, 10.833333333333336], [1.79144328E12, 11.142857142857144], [1.79144388E12, 9.833333333333332], [1.79144358E12, 11.333333333333334], [1.79144448E12, 10.636363636363637], [1.79144418E12, 9.0], [1.79144286E12, 14.857142857142858], [1.79144316E12, 9.666666666666666], [1.79144346E12, 12.166666666666668], [1.79144376E12, 11.4], [1.79144436E12, 12.25], [1.79144406E12, 8.846153846153845], [1.79144274E12, 13.11111111111111], [1.79144304E12, 10.909090909090908], [1.79144334E12, 19.454545454545457], [1.79144364E12, 13.833333333333332], [1.79144424E12, 11.75], [1.79144394E12, 17.666666666666668], [1.79144292E12, 11.666666666666666], [1.79144322E12, 18.545454545454543], [1.79144352E12, 10.454545454545453]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144448E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 39342.0, "minX": 1.0, "maxY": 60095.5, "series": [{"data": [[1.0, 60093.0], [2.0, 60095.5], [8.0, 39342.0], [3.0, 60074.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 60095.5, "series": [{"data": [[1.0, 60093.0], [2.0, 60095.5], [8.0, 0.0], [3.0, 60074.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79144268E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79144412E12, 0.15], [1.79144382E12, 0.1], [1.7914428E12, 0.11666666666666667], [1.79144442E12, 0.13333333333333333], [1.7914431E12, 0.1], [1.7914434E12, 0.1], [1.791444E12, 0.21666666666666667], [1.7914437E12, 0.16666666666666666], [1.79144268E12, 0.15], [1.7914443E12, 0.13333333333333333], [1.79144298E12, 0.18333333333333332], [1.79144328E12, 0.18333333333333332], [1.79144388E12, 0.15], [1.79144358E12, 0.1], [1.79144448E12, 0.05], [1.79144418E12, 0.06666666666666667], [1.79144286E12, 0.1], [1.79144316E12, 0.18333333333333332], [1.79144346E12, 0.18333333333333332], [1.79144376E12, 0.03333333333333333], [1.79144436E12, 0.1], [1.79144406E12, 0.08333333333333333], [1.79144274E12, 0.13333333333333333], [1.79144304E12, 0.1], [1.79144334E12, 0.05], [1.79144364E12, 0.16666666666666666], [1.79144424E12, 0.11666666666666667], [1.79144394E12, 0.13333333333333333], [1.79144292E12, 0.2], [1.79144322E12, 0.11666666666666667], [1.79144352E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144448E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79144274E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79144412E12, 0.08333333333333333], [1.79144382E12, 0.03333333333333333], [1.7914428E12, 0.13333333333333333], [1.79144442E12, 0.1], [1.7914431E12, 0.1], [1.7914434E12, 0.05], [1.791444E12, 0.13333333333333333], [1.7914437E12, 0.16666666666666666], [1.7914443E12, 0.11666666666666667], [1.79144298E12, 0.2], [1.79144328E12, 0.11666666666666667], [1.79144388E12, 0.1], [1.79144358E12, 0.2], [1.79144448E12, 0.05], [1.79144418E12, 0.15], [1.79144286E12, 0.11666666666666667], [1.79144316E12, 0.1], [1.79144346E12, 0.1], [1.79144376E12, 0.16666666666666666], [1.79144436E12, 0.13333333333333333], [1.79144406E12, 0.21666666666666667], [1.79144274E12, 0.15], [1.79144304E12, 0.18333333333333332], [1.79144334E12, 0.18333333333333332], [1.79144364E12, 0.1], [1.79144424E12, 0.06666666666666667], [1.79144394E12, 0.15], [1.79144292E12, 0.1], [1.79144322E12, 0.18333333333333332], [1.79144352E12, 0.18333333333333332]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.79144448E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144448E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79144274E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79144412E12, 0.08333333333333333], [1.79144382E12, 0.03333333333333333], [1.7914428E12, 0.13333333333333333], [1.79144442E12, 0.1], [1.7914431E12, 0.1], [1.7914434E12, 0.05], [1.791444E12, 0.13333333333333333], [1.7914437E12, 0.16666666666666666], [1.7914443E12, 0.11666666666666667], [1.79144298E12, 0.2], [1.79144328E12, 0.11666666666666667], [1.79144388E12, 0.1], [1.79144358E12, 0.2], [1.79144448E12, 0.18333333333333332], [1.79144418E12, 0.15], [1.79144286E12, 0.11666666666666667], [1.79144316E12, 0.1], [1.79144346E12, 0.1], [1.79144376E12, 0.16666666666666666], [1.79144436E12, 0.13333333333333333], [1.79144406E12, 0.21666666666666667], [1.79144274E12, 0.15], [1.79144304E12, 0.18333333333333332], [1.79144334E12, 0.18333333333333332], [1.79144364E12, 0.1], [1.79144424E12, 0.06666666666666667], [1.79144394E12, 0.15], [1.79144292E12, 0.1], [1.79144322E12, 0.18333333333333332], [1.79144352E12, 0.18333333333333332]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144448E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.79144274E12, "maxY": 0.21666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79144412E12, 0.08333333333333333], [1.79144382E12, 0.03333333333333333], [1.7914428E12, 0.13333333333333333], [1.79144442E12, 0.1], [1.7914431E12, 0.1], [1.7914434E12, 0.05], [1.791444E12, 0.13333333333333333], [1.7914437E12, 0.16666666666666666], [1.7914443E12, 0.11666666666666667], [1.79144298E12, 0.2], [1.79144328E12, 0.11666666666666667], [1.79144388E12, 0.1], [1.79144358E12, 0.2], [1.79144448E12, 0.18333333333333332], [1.79144418E12, 0.15], [1.79144286E12, 0.11666666666666667], [1.79144316E12, 0.1], [1.79144346E12, 0.1], [1.79144376E12, 0.16666666666666666], [1.79144436E12, 0.13333333333333333], [1.79144406E12, 0.21666666666666667], [1.79144274E12, 0.15], [1.79144304E12, 0.18333333333333332], [1.79144334E12, 0.18333333333333332], [1.79144364E12, 0.1], [1.79144424E12, 0.06666666666666667], [1.79144394E12, 0.15], [1.79144292E12, 0.1], [1.79144322E12, 0.18333333333333332], [1.79144352E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144448E12, "title": "Total Transactions Per Second"}},
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

