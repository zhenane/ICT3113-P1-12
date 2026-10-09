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
        data: {"result": {"minY": 1475.0, "minX": 0.0, "maxY": 60173.0, "series": [{"data": [[0.0, 1475.0], [0.1, 1475.0], [0.2, 1475.0], [0.3, 1475.0], [0.4, 1475.0], [0.5, 1839.0], [0.6, 1839.0], [0.7, 1839.0], [0.8, 1839.0], [0.9, 6263.0], [1.0, 6263.0], [1.1, 6263.0], [1.2, 6263.0], [1.3, 23217.0], [1.4, 23217.0], [1.5, 23217.0], [1.6, 23217.0], [1.7, 28224.0], [1.8, 28224.0], [1.9, 28224.0], [2.0, 28224.0], [2.1, 30418.0], [2.2, 30418.0], [2.3, 30418.0], [2.4, 30418.0], [2.5, 47102.0], [2.6, 47102.0], [2.7, 47102.0], [2.8, 47102.0], [2.9, 47102.0], [3.0, 58040.0], [3.1, 58040.0], [3.2, 58040.0], [3.3, 58040.0], [3.4, 60028.0], [3.5, 60028.0], [3.6, 60028.0], [3.7, 60028.0], [3.8, 60032.0], [3.9, 60032.0], [4.0, 60032.0], [4.1, 60032.0], [4.2, 60033.0], [4.3, 60033.0], [4.4, 60033.0], [4.5, 60033.0], [4.6, 60033.0], [4.7, 60033.0], [4.8, 60033.0], [4.9, 60033.0], [5.0, 60033.0], [5.1, 60033.0], [5.2, 60033.0], [5.3, 60033.0], [5.4, 60033.0], [5.5, 60033.0], [5.6, 60033.0], [5.7, 60033.0], [5.8, 60033.0], [5.9, 60036.0], [6.0, 60036.0], [6.1, 60036.0], [6.2, 60036.0], [6.3, 60036.0], [6.4, 60036.0], [6.5, 60036.0], [6.6, 60036.0], [6.7, 60038.0], [6.8, 60038.0], [6.9, 60038.0], [7.0, 60038.0], [7.1, 60038.0], [7.2, 60038.0], [7.3, 60038.0], [7.4, 60038.0], [7.5, 60038.0], [7.6, 60038.0], [7.7, 60038.0], [7.8, 60038.0], [7.9, 60038.0], [8.0, 60039.0], [8.1, 60039.0], [8.2, 60039.0], [8.3, 60039.0], [8.4, 60039.0], [8.5, 60039.0], [8.6, 60039.0], [8.7, 60039.0], [8.8, 60040.0], [8.9, 60040.0], [9.0, 60040.0], [9.1, 60040.0], [9.2, 60040.0], [9.3, 60040.0], [9.4, 60040.0], [9.5, 60040.0], [9.6, 60040.0], [9.7, 60040.0], [9.8, 60040.0], [9.9, 60040.0], [10.0, 60041.0], [10.1, 60041.0], [10.2, 60041.0], [10.3, 60041.0], [10.4, 60041.0], [10.5, 60041.0], [10.6, 60041.0], [10.7, 60041.0], [10.8, 60041.0], [10.9, 60043.0], [11.0, 60043.0], [11.1, 60043.0], [11.2, 60043.0], [11.3, 60043.0], [11.4, 60043.0], [11.5, 60043.0], [11.6, 60043.0], [11.7, 60044.0], [11.8, 60044.0], [11.9, 60044.0], [12.0, 60044.0], [12.1, 60044.0], [12.2, 60044.0], [12.3, 60044.0], [12.4, 60044.0], [12.5, 60044.0], [12.6, 60045.0], [12.7, 60045.0], [12.8, 60045.0], [12.9, 60045.0], [13.0, 60045.0], [13.1, 60045.0], [13.2, 60045.0], [13.3, 60045.0], [13.4, 60045.0], [13.5, 60045.0], [13.6, 60045.0], [13.7, 60045.0], [13.8, 60046.0], [13.9, 60046.0], [14.0, 60046.0], [14.1, 60046.0], [14.2, 60047.0], [14.3, 60047.0], [14.4, 60047.0], [14.5, 60047.0], [14.6, 60047.0], [14.7, 60047.0], [14.8, 60047.0], [14.9, 60047.0], [15.0, 60047.0], [15.1, 60048.0], [15.2, 60048.0], [15.3, 60048.0], [15.4, 60048.0], [15.5, 60048.0], [15.6, 60048.0], [15.7, 60048.0], [15.8, 60048.0], [15.9, 60049.0], [16.0, 60049.0], [16.1, 60049.0], [16.2, 60049.0], [16.3, 60049.0], [16.4, 60049.0], [16.5, 60049.0], [16.6, 60049.0], [16.7, 60051.0], [16.8, 60051.0], [16.9, 60051.0], [17.0, 60051.0], [17.1, 60052.0], [17.2, 60052.0], [17.3, 60052.0], [17.4, 60052.0], [17.5, 60052.0], [17.6, 60052.0], [17.7, 60052.0], [17.8, 60052.0], [17.9, 60052.0], [18.0, 60056.0], [18.1, 60056.0], [18.2, 60056.0], [18.3, 60056.0], [18.4, 60056.0], [18.5, 60056.0], [18.6, 60056.0], [18.7, 60056.0], [18.8, 60056.0], [18.9, 60056.0], [19.0, 60056.0], [19.1, 60056.0], [19.2, 60058.0], [19.3, 60058.0], [19.4, 60058.0], [19.5, 60058.0], [19.6, 60061.0], [19.7, 60061.0], [19.8, 60061.0], [19.9, 60061.0], [20.0, 60061.0], [20.1, 60062.0], [20.2, 60062.0], [20.3, 60062.0], [20.4, 60062.0], [20.5, 60062.0], [20.6, 60062.0], [20.7, 60062.0], [20.8, 60062.0], [20.9, 60062.0], [21.0, 60062.0], [21.1, 60062.0], [21.2, 60062.0], [21.3, 60063.0], [21.4, 60063.0], [21.5, 60063.0], [21.6, 60063.0], [21.7, 60063.0], [21.8, 60063.0], [21.9, 60063.0], [22.0, 60063.0], [22.1, 60066.0], [22.2, 60066.0], [22.3, 60066.0], [22.4, 60066.0], [22.5, 60066.0], [22.6, 60067.0], [22.7, 60067.0], [22.8, 60067.0], [22.9, 60067.0], [23.0, 60070.0], [23.1, 60070.0], [23.2, 60070.0], [23.3, 60070.0], [23.4, 60070.0], [23.5, 60070.0], [23.6, 60070.0], [23.7, 60070.0], [23.8, 60072.0], [23.9, 60072.0], [24.0, 60072.0], [24.1, 60072.0], [24.2, 60073.0], [24.3, 60073.0], [24.4, 60073.0], [24.5, 60073.0], [24.6, 60075.0], [24.7, 60075.0], [24.8, 60075.0], [24.9, 60075.0], [25.0, 60075.0], [25.1, 60075.0], [25.2, 60075.0], [25.3, 60075.0], [25.4, 60075.0], [25.5, 60075.0], [25.6, 60075.0], [25.7, 60075.0], [25.8, 60075.0], [25.9, 60076.0], [26.0, 60076.0], [26.1, 60076.0], [26.2, 60076.0], [26.3, 60076.0], [26.4, 60076.0], [26.5, 60076.0], [26.6, 60076.0], [26.7, 60077.0], [26.8, 60077.0], [26.9, 60077.0], [27.0, 60077.0], [27.1, 60077.0], [27.2, 60077.0], [27.3, 60077.0], [27.4, 60077.0], [27.5, 60077.0], [27.6, 60079.0], [27.7, 60079.0], [27.8, 60079.0], [27.9, 60079.0], [28.0, 60079.0], [28.1, 60079.0], [28.2, 60079.0], [28.3, 60079.0], [28.4, 60080.0], [28.5, 60080.0], [28.6, 60080.0], [28.7, 60080.0], [28.8, 60081.0], [28.9, 60081.0], [29.0, 60081.0], [29.1, 60081.0], [29.2, 60081.0], [29.3, 60081.0], [29.4, 60081.0], [29.5, 60081.0], [29.6, 60081.0], [29.7, 60081.0], [29.8, 60081.0], [29.9, 60081.0], [30.0, 60081.0], [30.1, 60082.0], [30.2, 60082.0], [30.3, 60082.0], [30.4, 60082.0], [30.5, 60083.0], [30.6, 60083.0], [30.7, 60083.0], [30.8, 60083.0], [30.9, 60083.0], [31.0, 60083.0], [31.1, 60083.0], [31.2, 60083.0], [31.3, 60084.0], [31.4, 60084.0], [31.5, 60084.0], [31.6, 60084.0], [31.7, 60085.0], [31.8, 60085.0], [31.9, 60085.0], [32.0, 60085.0], [32.1, 60086.0], [32.2, 60086.0], [32.3, 60086.0], [32.4, 60086.0], [32.5, 60086.0], [32.6, 60086.0], [32.7, 60086.0], [32.8, 60086.0], [32.9, 60086.0], [33.0, 60086.0], [33.1, 60086.0], [33.2, 60086.0], [33.3, 60086.0], [33.4, 60086.0], [33.5, 60086.0], [33.6, 60086.0], [33.7, 60086.0], [33.8, 60086.0], [33.9, 60086.0], [34.0, 60086.0], [34.1, 60086.0], [34.2, 60087.0], [34.3, 60087.0], [34.4, 60087.0], [34.5, 60087.0], [34.6, 60087.0], [34.7, 60087.0], [34.8, 60087.0], [34.9, 60087.0], [35.0, 60087.0], [35.1, 60087.0], [35.2, 60087.0], [35.3, 60087.0], [35.4, 60087.0], [35.5, 60087.0], [35.6, 60087.0], [35.7, 60087.0], [35.8, 60087.0], [35.9, 60087.0], [36.0, 60087.0], [36.1, 60087.0], [36.2, 60087.0], [36.3, 60087.0], [36.4, 60087.0], [36.5, 60087.0], [36.6, 60087.0], [36.7, 60088.0], [36.8, 60088.0], [36.9, 60088.0], [37.0, 60088.0], [37.1, 60088.0], [37.2, 60088.0], [37.3, 60088.0], [37.4, 60088.0], [37.5, 60088.0], [37.6, 60088.0], [37.7, 60088.0], [37.8, 60088.0], [37.9, 60088.0], [38.0, 60088.0], [38.1, 60088.0], [38.2, 60088.0], [38.3, 60088.0], [38.4, 60088.0], [38.5, 60088.0], [38.6, 60088.0], [38.7, 60088.0], [38.8, 60088.0], [38.9, 60088.0], [39.0, 60088.0], [39.1, 60088.0], [39.2, 60088.0], [39.3, 60088.0], [39.4, 60088.0], [39.5, 60088.0], [39.6, 60089.0], [39.7, 60089.0], [39.8, 60089.0], [39.9, 60089.0], [40.0, 60089.0], [40.1, 60089.0], [40.2, 60089.0], [40.3, 60089.0], [40.4, 60089.0], [40.5, 60089.0], [40.6, 60089.0], [40.7, 60089.0], [40.8, 60089.0], [40.9, 60089.0], [41.0, 60089.0], [41.1, 60089.0], [41.2, 60089.0], [41.3, 60089.0], [41.4, 60089.0], [41.5, 60089.0], [41.6, 60089.0], [41.7, 60090.0], [41.8, 60090.0], [41.9, 60090.0], [42.0, 60090.0], [42.1, 60090.0], [42.2, 60090.0], [42.3, 60090.0], [42.4, 60090.0], [42.5, 60090.0], [42.6, 60090.0], [42.7, 60090.0], [42.8, 60090.0], [42.9, 60090.0], [43.0, 60090.0], [43.1, 60090.0], [43.2, 60090.0], [43.3, 60090.0], [43.4, 60090.0], [43.5, 60090.0], [43.6, 60090.0], [43.7, 60090.0], [43.8, 60090.0], [43.9, 60090.0], [44.0, 60090.0], [44.1, 60090.0], [44.2, 60091.0], [44.3, 60091.0], [44.4, 60091.0], [44.5, 60091.0], [44.6, 60091.0], [44.7, 60091.0], [44.8, 60091.0], [44.9, 60091.0], [45.0, 60091.0], [45.1, 60091.0], [45.2, 60091.0], [45.3, 60091.0], [45.4, 60091.0], [45.5, 60091.0], [45.6, 60091.0], [45.7, 60091.0], [45.8, 60091.0], [45.9, 60091.0], [46.0, 60091.0], [46.1, 60091.0], [46.2, 60091.0], [46.3, 60091.0], [46.4, 60091.0], [46.5, 60091.0], [46.6, 60091.0], [46.7, 60091.0], [46.8, 60091.0], [46.9, 60091.0], [47.0, 60091.0], [47.1, 60091.0], [47.2, 60091.0], [47.3, 60091.0], [47.4, 60091.0], [47.5, 60091.0], [47.6, 60091.0], [47.7, 60091.0], [47.8, 60091.0], [47.9, 60091.0], [48.0, 60091.0], [48.1, 60091.0], [48.2, 60091.0], [48.3, 60091.0], [48.4, 60091.0], [48.5, 60091.0], [48.6, 60091.0], [48.7, 60091.0], [48.8, 60092.0], [48.9, 60092.0], [49.0, 60092.0], [49.1, 60092.0], [49.2, 60092.0], [49.3, 60092.0], [49.4, 60092.0], [49.5, 60092.0], [49.6, 60092.0], [49.7, 60092.0], [49.8, 60092.0], [49.9, 60092.0], [50.0, 60092.0], [50.1, 60092.0], [50.2, 60092.0], [50.3, 60092.0], [50.4, 60092.0], [50.5, 60092.0], [50.6, 60092.0], [50.7, 60092.0], [50.8, 60092.0], [50.9, 60092.0], [51.0, 60092.0], [51.1, 60092.0], [51.2, 60092.0], [51.3, 60092.0], [51.4, 60092.0], [51.5, 60092.0], [51.6, 60092.0], [51.7, 60092.0], [51.8, 60092.0], [51.9, 60092.0], [52.0, 60092.0], [52.1, 60092.0], [52.2, 60092.0], [52.3, 60092.0], [52.4, 60092.0], [52.5, 60092.0], [52.6, 60092.0], [52.7, 60092.0], [52.8, 60092.0], [52.9, 60092.0], [53.0, 60092.0], [53.1, 60092.0], [53.2, 60092.0], [53.3, 60092.0], [53.4, 60092.0], [53.5, 60092.0], [53.6, 60092.0], [53.7, 60092.0], [53.8, 60092.0], [53.9, 60092.0], [54.0, 60092.0], [54.1, 60092.0], [54.2, 60092.0], [54.3, 60092.0], [54.4, 60092.0], [54.5, 60092.0], [54.6, 60092.0], [54.7, 60092.0], [54.8, 60092.0], [54.9, 60092.0], [55.0, 60092.0], [55.1, 60092.0], [55.2, 60092.0], [55.3, 60092.0], [55.4, 60092.0], [55.5, 60093.0], [55.6, 60093.0], [55.7, 60093.0], [55.8, 60093.0], [55.9, 60093.0], [56.0, 60093.0], [56.1, 60093.0], [56.2, 60093.0], [56.3, 60093.0], [56.4, 60093.0], [56.5, 60093.0], [56.6, 60093.0], [56.7, 60093.0], [56.8, 60093.0], [56.9, 60093.0], [57.0, 60093.0], [57.1, 60093.0], [57.2, 60093.0], [57.3, 60093.0], [57.4, 60093.0], [57.5, 60093.0], [57.6, 60093.0], [57.7, 60093.0], [57.8, 60093.0], [57.9, 60093.0], [58.0, 60093.0], [58.1, 60093.0], [58.2, 60093.0], [58.3, 60093.0], [58.4, 60093.0], [58.5, 60093.0], [58.6, 60093.0], [58.7, 60093.0], [58.8, 60093.0], [58.9, 60093.0], [59.0, 60093.0], [59.1, 60093.0], [59.2, 60093.0], [59.3, 60093.0], [59.4, 60093.0], [59.5, 60093.0], [59.6, 60094.0], [59.7, 60094.0], [59.8, 60094.0], [59.9, 60094.0], [60.0, 60094.0], [60.1, 60094.0], [60.2, 60094.0], [60.3, 60094.0], [60.4, 60094.0], [60.5, 60094.0], [60.6, 60094.0], [60.7, 60094.0], [60.8, 60094.0], [60.9, 60094.0], [61.0, 60094.0], [61.1, 60094.0], [61.2, 60094.0], [61.3, 60094.0], [61.4, 60094.0], [61.5, 60094.0], [61.6, 60094.0], [61.7, 60094.0], [61.8, 60094.0], [61.9, 60094.0], [62.0, 60094.0], [62.1, 60094.0], [62.2, 60094.0], [62.3, 60094.0], [62.4, 60094.0], [62.5, 60095.0], [62.6, 60095.0], [62.7, 60095.0], [62.8, 60095.0], [62.9, 60095.0], [63.0, 60095.0], [63.1, 60095.0], [63.2, 60095.0], [63.3, 60095.0], [63.4, 60095.0], [63.5, 60095.0], [63.6, 60095.0], [63.7, 60095.0], [63.8, 60095.0], [63.9, 60095.0], [64.0, 60095.0], [64.1, 60095.0], [64.2, 60095.0], [64.3, 60095.0], [64.4, 60095.0], [64.5, 60095.0], [64.6, 60095.0], [64.7, 60095.0], [64.8, 60095.0], [64.9, 60095.0], [65.0, 60095.0], [65.1, 60095.0], [65.2, 60095.0], [65.3, 60095.0], [65.4, 60095.0], [65.5, 60095.0], [65.6, 60095.0], [65.7, 60095.0], [65.8, 60095.0], [65.9, 60095.0], [66.0, 60095.0], [66.1, 60095.0], [66.2, 60095.0], [66.3, 60096.0], [66.4, 60096.0], [66.5, 60096.0], [66.6, 60096.0], [66.7, 60096.0], [66.8, 60096.0], [66.9, 60096.0], [67.0, 60096.0], [67.1, 60096.0], [67.2, 60096.0], [67.3, 60096.0], [67.4, 60096.0], [67.5, 60096.0], [67.6, 60096.0], [67.7, 60096.0], [67.8, 60096.0], [67.9, 60096.0], [68.0, 60096.0], [68.1, 60096.0], [68.2, 60096.0], [68.3, 60096.0], [68.4, 60096.0], [68.5, 60096.0], [68.6, 60096.0], [68.7, 60096.0], [68.8, 60096.0], [68.9, 60096.0], [69.0, 60096.0], [69.1, 60096.0], [69.2, 60097.0], [69.3, 60097.0], [69.4, 60097.0], [69.5, 60097.0], [69.6, 60097.0], [69.7, 60097.0], [69.8, 60097.0], [69.9, 60097.0], [70.0, 60097.0], [70.1, 60097.0], [70.2, 60097.0], [70.3, 60097.0], [70.4, 60097.0], [70.5, 60097.0], [70.6, 60097.0], [70.7, 60097.0], [70.8, 60097.0], [70.9, 60097.0], [71.0, 60097.0], [71.1, 60097.0], [71.2, 60097.0], [71.3, 60097.0], [71.4, 60097.0], [71.5, 60097.0], [71.6, 60097.0], [71.7, 60097.0], [71.8, 60097.0], [71.9, 60097.0], [72.0, 60097.0], [72.1, 60097.0], [72.2, 60097.0], [72.3, 60097.0], [72.4, 60097.0], [72.5, 60097.0], [72.6, 60097.0], [72.7, 60097.0], [72.8, 60097.0], [72.9, 60097.0], [73.0, 60097.0], [73.1, 60097.0], [73.2, 60097.0], [73.3, 60097.0], [73.4, 60098.0], [73.5, 60098.0], [73.6, 60098.0], [73.7, 60098.0], [73.8, 60098.0], [73.9, 60098.0], [74.0, 60098.0], [74.1, 60098.0], [74.2, 60098.0], [74.3, 60098.0], [74.4, 60098.0], [74.5, 60098.0], [74.6, 60098.0], [74.7, 60098.0], [74.8, 60098.0], [74.9, 60098.0], [75.0, 60098.0], [75.1, 60098.0], [75.2, 60098.0], [75.3, 60098.0], [75.4, 60098.0], [75.5, 60098.0], [75.6, 60098.0], [75.7, 60098.0], [75.8, 60098.0], [75.9, 60098.0], [76.0, 60098.0], [76.1, 60098.0], [76.2, 60098.0], [76.3, 60098.0], [76.4, 60098.0], [76.5, 60098.0], [76.6, 60098.0], [76.7, 60099.0], [76.8, 60099.0], [76.9, 60099.0], [77.0, 60099.0], [77.1, 60099.0], [77.2, 60099.0], [77.3, 60099.0], [77.4, 60099.0], [77.5, 60099.0], [77.6, 60099.0], [77.7, 60099.0], [77.8, 60099.0], [77.9, 60099.0], [78.0, 60099.0], [78.1, 60099.0], [78.2, 60099.0], [78.3, 60099.0], [78.4, 60099.0], [78.5, 60099.0], [78.6, 60099.0], [78.7, 60099.0], [78.8, 60099.0], [78.9, 60099.0], [79.0, 60099.0], [79.1, 60099.0], [79.2, 60100.0], [79.3, 60100.0], [79.4, 60100.0], [79.5, 60100.0], [79.6, 60100.0], [79.7, 60100.0], [79.8, 60100.0], [79.9, 60100.0], [80.0, 60100.0], [80.1, 60100.0], [80.2, 60100.0], [80.3, 60100.0], [80.4, 60100.0], [80.5, 60100.0], [80.6, 60100.0], [80.7, 60100.0], [80.8, 60100.0], [80.9, 60100.0], [81.0, 60100.0], [81.1, 60100.0], [81.2, 60100.0], [81.3, 60100.0], [81.4, 60100.0], [81.5, 60100.0], [81.6, 60100.0], [81.7, 60100.0], [81.8, 60100.0], [81.9, 60100.0], [82.0, 60100.0], [82.1, 60100.0], [82.2, 60100.0], [82.3, 60100.0], [82.4, 60100.0], [82.5, 60101.0], [82.6, 60101.0], [82.7, 60101.0], [82.8, 60101.0], [82.9, 60101.0], [83.0, 60101.0], [83.1, 60101.0], [83.2, 60101.0], [83.3, 60101.0], [83.4, 60101.0], [83.5, 60101.0], [83.6, 60101.0], [83.7, 60101.0], [83.8, 60101.0], [83.9, 60101.0], [84.0, 60101.0], [84.1, 60101.0], [84.2, 60102.0], [84.3, 60102.0], [84.4, 60102.0], [84.5, 60102.0], [84.6, 60102.0], [84.7, 60102.0], [84.8, 60102.0], [84.9, 60102.0], [85.0, 60103.0], [85.1, 60103.0], [85.2, 60103.0], [85.3, 60103.0], [85.4, 60103.0], [85.5, 60103.0], [85.6, 60103.0], [85.7, 60103.0], [85.8, 60103.0], [85.9, 60103.0], [86.0, 60103.0], [86.1, 60103.0], [86.2, 60103.0], [86.3, 60103.0], [86.4, 60103.0], [86.5, 60103.0], [86.6, 60103.0], [86.7, 60104.0], [86.8, 60104.0], [86.9, 60104.0], [87.0, 60104.0], [87.1, 60105.0], [87.2, 60105.0], [87.3, 60105.0], [87.4, 60105.0], [87.5, 60105.0], [87.6, 60105.0], [87.7, 60105.0], [87.8, 60105.0], [87.9, 60105.0], [88.0, 60105.0], [88.1, 60105.0], [88.2, 60105.0], [88.3, 60105.0], [88.4, 60106.0], [88.5, 60106.0], [88.6, 60106.0], [88.7, 60106.0], [88.8, 60106.0], [88.9, 60106.0], [89.0, 60106.0], [89.1, 60106.0], [89.2, 60106.0], [89.3, 60106.0], [89.4, 60106.0], [89.5, 60106.0], [89.6, 60107.0], [89.7, 60107.0], [89.8, 60107.0], [89.9, 60107.0], [90.0, 60107.0], [90.1, 60107.0], [90.2, 60107.0], [90.3, 60107.0], [90.4, 60107.0], [90.5, 60108.0], [90.6, 60108.0], [90.7, 60108.0], [90.8, 60108.0], [90.9, 60108.0], [91.0, 60108.0], [91.1, 60108.0], [91.2, 60108.0], [91.3, 60109.0], [91.4, 60109.0], [91.5, 60109.0], [91.6, 60109.0], [91.7, 60111.0], [91.8, 60111.0], [91.9, 60111.0], [92.0, 60111.0], [92.1, 60112.0], [92.2, 60112.0], [92.3, 60112.0], [92.4, 60112.0], [92.5, 60112.0], [92.6, 60112.0], [92.7, 60112.0], [92.8, 60112.0], [92.9, 60112.0], [93.0, 60113.0], [93.1, 60113.0], [93.2, 60113.0], [93.3, 60113.0], [93.4, 60113.0], [93.5, 60113.0], [93.6, 60113.0], [93.7, 60113.0], [93.8, 60115.0], [93.9, 60115.0], [94.0, 60115.0], [94.1, 60115.0], [94.2, 60116.0], [94.3, 60116.0], [94.4, 60116.0], [94.5, 60116.0], [94.6, 60117.0], [94.7, 60117.0], [94.8, 60117.0], [94.9, 60117.0], [95.0, 60117.0], [95.1, 60118.0], [95.2, 60118.0], [95.3, 60118.0], [95.4, 60118.0], [95.5, 60118.0], [95.6, 60118.0], [95.7, 60118.0], [95.8, 60118.0], [95.9, 60120.0], [96.0, 60120.0], [96.1, 60120.0], [96.2, 60120.0], [96.3, 60124.0], [96.4, 60124.0], [96.5, 60124.0], [96.6, 60124.0], [96.7, 60129.0], [96.8, 60129.0], [96.9, 60129.0], [97.0, 60129.0], [97.1, 60129.0], [97.2, 60129.0], [97.3, 60129.0], [97.4, 60129.0], [97.5, 60129.0], [97.6, 60132.0], [97.7, 60132.0], [97.8, 60132.0], [97.9, 60132.0], [98.0, 60135.0], [98.1, 60135.0], [98.2, 60135.0], [98.3, 60135.0], [98.4, 60140.0], [98.5, 60140.0], [98.6, 60140.0], [98.7, 60140.0], [98.8, 60141.0], [98.9, 60141.0], [99.0, 60141.0], [99.1, 60141.0], [99.2, 60151.0], [99.3, 60151.0], [99.4, 60151.0], [99.5, 60151.0], [99.6, 60173.0], [99.7, 60173.0], [99.8, 60173.0], [99.9, 60173.0], [100.0, 60173.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1400.0, "maxY": 182.0, "series": [{"data": [[1400.0, 1.0], [23200.0, 1.0], [47100.0, 1.0], [6200.0, 1.0], [28200.0, 1.0], [1800.0, 1.0], [58000.0, 1.0], [60000.0, 182.0], [60100.0, 50.0], [30400.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.428571428571429, "minX": 1.79143854E12, "maxY": 12.666666666666668, "series": [{"data": [[1.79143866E12, 4.428571428571429], [1.79143896E12, 11.0], [1.79144028E12, 7.307692307692308], [1.79143998E12, 7.0], [1.79144016E12, 6.285714285714286], [1.79143986E12, 9.6], [1.79143926E12, 6.571428571428571], [1.79143956E12, 9.285714285714286], [1.79143914E12, 7.999999999999999], [1.79143944E12, 7.125], [1.79143854E12, 11.0], [1.79143884E12, 10.2], [1.79143872E12, 9.333333333333334], [1.79144004E12, 4.5], [1.79143974E12, 10.399999999999999], [1.79143992E12, 9.666666666666668], [1.79143962E12, 11.461538461538462], [1.79143902E12, 7.75], [1.79143932E12, 10.0], [1.7914389E12, 10.799999999999999], [1.7914392E12, 9.799999999999999], [1.7914386E12, 9.272727272727272], [1.79144022E12, 7.666666666666666], [1.7914401E12, 6.75], [1.7914398E12, 12.666666666666668], [1.7914395E12, 5.5], [1.79143968E12, 10.125], [1.79143938E12, 6.25], [1.79143878E12, 8.375], [1.79143908E12, 9.11111111111111]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144028E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 53222.97222222222, "minX": 2.0, "maxY": 60101.0, "series": [{"data": [[8.0, 59088.32432432433], [2.0, 60100.0], [9.0, 60084.029411764706], [10.0, 60087.21052631579], [11.0, 60088.75862068965], [12.0, 60080.875], [3.0, 60056.0], [13.0, 60101.0], [14.0, 60092.0], [15.0, 60047.0], [4.0, 60093.2], [5.0, 60082.90909090909], [6.0, 60077.0], [7.0, 53222.97222222222]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[8.875000000000002, 58902.43333333334]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8.95, "minX": 1.79143854E12, "maxY": 437.18333333333334, "series": [{"data": [[1.79143866E12, 20.883333333333333], [1.79143896E12, 26.85], [1.79144028E12, 437.18333333333334], [1.79143998E12, 26.85], [1.79144016E12, 20.883333333333333], [1.79143986E12, 29.833333333333332], [1.79143926E12, 20.883333333333333], [1.79143956E12, 20.883333333333333], [1.79143914E12, 20.883333333333333], [1.79143944E12, 23.866666666666667], [1.79143854E12, 8.95], [1.79143884E12, 29.833333333333332], [1.79143872E12, 8.95], [1.79144004E12, 11.933333333333334], [1.79143974E12, 29.833333333333332], [1.79143992E12, 26.85], [1.79143962E12, 38.78333333333333], [1.79143902E12, 23.866666666666667], [1.79143932E12, 17.9], [1.7914389E12, 29.833333333333332], [1.7914392E12, 29.833333333333332], [1.7914386E12, 32.81666666666667], [1.79144022E12, 17.9], [1.7914401E12, 11.933333333333334], [1.7914398E12, 35.8], [1.7914395E12, 11.933333333333334], [1.79143968E12, 23.866666666666667], [1.79143938E12, 23.866666666666667], [1.79143878E12, 23.866666666666667], [1.79143908E12, 26.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79143866E12, 140.86666666666667], [1.79143896E12, 190.51666666666668], [1.79144028E12, 87.63333333333334], [1.79143998E12, 178.33333333333334], [1.79144016E12, 168.46666666666667], [1.79143986E12, 171.83333333333334], [1.79143926E12, 110.9], [1.79143956E12, 116.28333333333333], [1.79143914E12, 122.36666666666666], [1.79143944E12, 155.1], [1.79143854E12, 23.15], [1.79143884E12, 132.9], [1.79143872E12, 51.9], [1.79144004E12, 52.31666666666667], [1.79143974E12, 166.11666666666667], [1.79143992E12, 181.65], [1.79143962E12, 245.63333333333333], [1.79143902E12, 195.7], [1.79143932E12, 104.4], [1.7914389E12, 194.51666666666668], [1.7914392E12, 168.33333333333334], [1.7914386E12, 227.48333333333332], [1.79144022E12, 133.43333333333334], [1.7914401E12, 93.6], [1.7914398E12, 228.76666666666668], [1.7914395E12, 61.68333333333333], [1.79143968E12, 160.56666666666666], [1.79143938E12, 152.68333333333334], [1.79143878E12, 147.33333333333334], [1.79143908E12, 178.28333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144028E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 38232.07692307692, "minX": 1.79143854E12, "maxY": 60101.24999999999, "series": [{"data": [[1.79143866E12, 60091.14285714286], [1.79143896E12, 60095.0], [1.79144028E12, 38232.07692307692], [1.79143998E12, 60086.22222222222], [1.79144016E12, 60081.42857142857], [1.79143986E12, 60079.1], [1.79143926E12, 60093.42857142857], [1.79143956E12, 60086.142857142855], [1.79143914E12, 60072.28571428572], [1.79143944E12, 60079.5], [1.79143854E12, 60095.333333333336], [1.79143884E12, 60085.8], [1.79143872E12, 60083.0], [1.79144004E12, 60086.75], [1.79143974E12, 60090.700000000004], [1.79143992E12, 60082.666666666664], [1.79143962E12, 60084.769230769234], [1.79143902E12, 60097.0], [1.79143932E12, 60091.83333333333], [1.7914389E12, 60080.2], [1.7914392E12, 60093.0], [1.7914386E12, 60100.09090909091], [1.79144022E12, 60083.83333333333], [1.7914401E12, 60085.0], [1.7914398E12, 60082.25000000001], [1.7914395E12, 60093.25], [1.79143968E12, 60082.25], [1.79143938E12, 60069.0], [1.79143878E12, 60101.24999999999], [1.79143908E12, 60073.555555555555]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144028E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23110.692307692305, "minX": 1.79143854E12, "maxY": 60101.24999999999, "series": [{"data": [[1.79143866E12, 60091.14285714286], [1.79143896E12, 60095.0], [1.79144028E12, 23110.692307692305], [1.79143998E12, 60086.22222222222], [1.79144016E12, 60081.42857142857], [1.79143986E12, 60079.0], [1.79143926E12, 60093.142857142855], [1.79143956E12, 60086.142857142855], [1.79143914E12, 60072.28571428572], [1.79143944E12, 60079.5], [1.79143854E12, 60095.333333333336], [1.79143884E12, 60085.600000000006], [1.79143872E12, 60083.0], [1.79144004E12, 60086.75], [1.79143974E12, 60090.600000000006], [1.79143992E12, 60082.666666666664], [1.79143962E12, 60084.769230769234], [1.79143902E12, 60096.875], [1.79143932E12, 60091.83333333333], [1.7914389E12, 60080.1], [1.7914392E12, 60093.0], [1.7914386E12, 60099.909090909096], [1.79144022E12, 60083.5], [1.7914401E12, 60085.0], [1.7914398E12, 60082.16666666667], [1.7914395E12, 60093.0], [1.79143968E12, 60082.25], [1.79143938E12, 60069.0], [1.79143878E12, 60101.24999999999], [1.79143908E12, 60073.555555555555]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144028E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.5, "minX": 1.79143854E12, "maxY": 17.142857142857142, "series": [{"data": [[1.79143866E12, 17.142857142857142], [1.79143896E12, 12.555555555555555], [1.79144028E12, 12.076923076923077], [1.79143998E12, 10.11111111111111], [1.79144016E12, 11.142857142857144], [1.79143986E12, 10.200000000000001], [1.79143926E12, 9.000000000000002], [1.79143956E12, 9.857142857142858], [1.79143914E12, 10.857142857142856], [1.79143944E12, 9.375], [1.79143854E12, 13.0], [1.79143884E12, 10.700000000000001], [1.79143872E12, 12.666666666666666], [1.79144004E12, 9.5], [1.79143974E12, 10.0], [1.79143992E12, 10.333333333333336], [1.79143962E12, 12.23076923076923], [1.79143902E12, 12.375], [1.79143932E12, 9.833333333333334], [1.7914389E12, 9.700000000000001], [1.7914392E12, 10.0], [1.7914386E12, 10.363636363636362], [1.79144022E12, 8.5], [1.7914401E12, 13.0], [1.7914398E12, 8.833333333333332], [1.7914395E12, 11.0], [1.79143968E12, 9.75], [1.79143938E12, 9.125], [1.79143878E12, 12.0], [1.79143908E12, 10.444444444444445]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144028E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 28224.0, "minX": 1.0, "maxY": 60092.0, "series": [{"data": [[1.0, 60092.0], [2.0, 60092.0], [9.0, 28224.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 60092.0, "series": [{"data": [[1.0, 60092.0], [2.0, 60092.0], [9.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79143848E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143866E12, 0.05], [1.79143896E12, 0.13333333333333333], [1.79144028E12, 0.1], [1.79143998E12, 0.06666666666666667], [1.79144016E12, 0.1], [1.79143986E12, 0.13333333333333333], [1.79143926E12, 0.1], [1.79143956E12, 0.21666666666666667], [1.79143914E12, 0.16666666666666666], [1.79143944E12, 0.06666666666666667], [1.79143854E12, 0.18333333333333332], [1.79143884E12, 0.16666666666666666], [1.79143872E12, 0.13333333333333333], [1.79144004E12, 0.06666666666666667], [1.79143974E12, 0.2], [1.79143992E12, 0.15], [1.79143962E12, 0.13333333333333333], [1.79143902E12, 0.15], [1.79143932E12, 0.13333333333333333], [1.7914389E12, 0.15], [1.7914392E12, 0.11666666666666667], [1.7914386E12, 0.11666666666666667], [1.79144022E12, 0.11666666666666667], [1.79143848E12, 0.05], [1.7914401E12, 0.11666666666666667], [1.7914398E12, 0.18333333333333332], [1.7914395E12, 0.11666666666666667], [1.79143968E12, 0.16666666666666666], [1.79143938E12, 0.13333333333333333], [1.79143878E12, 0.16666666666666666], [1.79143908E12, 0.11666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144028E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79143854E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143866E12, 0.11666666666666667], [1.79143896E12, 0.15], [1.79144028E12, 0.08333333333333333], [1.79143998E12, 0.15], [1.79144016E12, 0.11666666666666667], [1.79143986E12, 0.16666666666666666], [1.79143926E12, 0.11666666666666667], [1.79143956E12, 0.11666666666666667], [1.79143914E12, 0.11666666666666667], [1.79143944E12, 0.13333333333333333], [1.79143854E12, 0.05], [1.79143884E12, 0.16666666666666666], [1.79143872E12, 0.05], [1.79144004E12, 0.06666666666666667], [1.79143974E12, 0.16666666666666666], [1.79143992E12, 0.15], [1.79143962E12, 0.21666666666666667], [1.79143902E12, 0.13333333333333333], [1.79143932E12, 0.1], [1.7914389E12, 0.16666666666666666], [1.7914392E12, 0.16666666666666666], [1.7914386E12, 0.18333333333333332], [1.79144022E12, 0.1], [1.7914401E12, 0.06666666666666667], [1.7914398E12, 0.2], [1.7914395E12, 0.06666666666666667], [1.79143968E12, 0.13333333333333333], [1.79143938E12, 0.13333333333333333], [1.79143878E12, 0.13333333333333333], [1.79143908E12, 0.15]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.79144028E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79144028E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79143854E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.79143866E12, 0.11666666666666667], [1.79143896E12, 0.15], [1.79144028E12, 0.21666666666666667], [1.79143998E12, 0.15], [1.79144016E12, 0.11666666666666667], [1.79143986E12, 0.16666666666666666], [1.79143926E12, 0.11666666666666667], [1.79143956E12, 0.11666666666666667], [1.79143914E12, 0.11666666666666667], [1.79143944E12, 0.13333333333333333], [1.79143854E12, 0.05], [1.79143884E12, 0.16666666666666666], [1.79143872E12, 0.05], [1.79144004E12, 0.06666666666666667], [1.79143974E12, 0.16666666666666666], [1.79143992E12, 0.15], [1.79143962E12, 0.21666666666666667], [1.79143902E12, 0.13333333333333333], [1.79143932E12, 0.1], [1.7914389E12, 0.16666666666666666], [1.7914392E12, 0.16666666666666666], [1.7914386E12, 0.18333333333333332], [1.79144022E12, 0.1], [1.7914401E12, 0.06666666666666667], [1.7914398E12, 0.2], [1.7914395E12, 0.06666666666666667], [1.79143968E12, 0.13333333333333333], [1.79143938E12, 0.13333333333333333], [1.79143878E12, 0.13333333333333333], [1.79143908E12, 0.15]], "isOverall": false, "label": "POST /tickets-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144028E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79143854E12, "maxY": 0.21666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79143866E12, 0.11666666666666667], [1.79143896E12, 0.15], [1.79144028E12, 0.21666666666666667], [1.79143998E12, 0.15], [1.79144016E12, 0.11666666666666667], [1.79143986E12, 0.16666666666666666], [1.79143926E12, 0.11666666666666667], [1.79143956E12, 0.11666666666666667], [1.79143914E12, 0.11666666666666667], [1.79143944E12, 0.13333333333333333], [1.79143854E12, 0.05], [1.79143884E12, 0.16666666666666666], [1.79143872E12, 0.05], [1.79144004E12, 0.06666666666666667], [1.79143974E12, 0.16666666666666666], [1.79143992E12, 0.15], [1.79143962E12, 0.21666666666666667], [1.79143902E12, 0.13333333333333333], [1.79143932E12, 0.1], [1.7914389E12, 0.16666666666666666], [1.7914392E12, 0.16666666666666666], [1.7914386E12, 0.18333333333333332], [1.79144022E12, 0.1], [1.7914401E12, 0.06666666666666667], [1.7914398E12, 0.2], [1.7914395E12, 0.06666666666666667], [1.79143968E12, 0.13333333333333333], [1.79143938E12, 0.13333333333333333], [1.79143878E12, 0.13333333333333333], [1.79143908E12, 0.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79144028E12, "title": "Total Transactions Per Second"}},
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

