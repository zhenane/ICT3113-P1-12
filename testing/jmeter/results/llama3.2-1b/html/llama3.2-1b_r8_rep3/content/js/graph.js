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
        data: {"result": {"minY": 124.0, "minX": 0.0, "maxY": 3868.0, "series": [{"data": [[0.0, 124.0], [0.1, 124.0], [0.2, 124.0], [0.3, 124.0], [0.4, 124.0], [0.5, 124.0], [0.6, 124.0], [0.7, 124.0], [0.8, 124.0], [0.9, 126.0], [1.0, 126.0], [1.1, 126.0], [1.2, 126.0], [1.3, 126.0], [1.4, 126.0], [1.5, 126.0], [1.6, 126.0], [1.7, 126.0], [1.8, 126.0], [1.9, 126.0], [2.0, 126.0], [2.1, 127.0], [2.2, 127.0], [2.3, 127.0], [2.4, 127.0], [2.5, 127.0], [2.6, 127.0], [2.7, 127.0], [2.8, 127.0], [2.9, 127.0], [3.0, 128.0], [3.1, 128.0], [3.2, 128.0], [3.3, 128.0], [3.4, 128.0], [3.5, 128.0], [3.6, 128.0], [3.7, 128.0], [3.8, 129.0], [3.9, 129.0], [4.0, 129.0], [4.1, 129.0], [4.2, 129.0], [4.3, 129.0], [4.4, 129.0], [4.5, 129.0], [4.6, 129.0], [4.7, 129.0], [4.8, 129.0], [4.9, 129.0], [5.0, 129.0], [5.1, 129.0], [5.2, 129.0], [5.3, 129.0], [5.4, 129.0], [5.5, 129.0], [5.6, 129.0], [5.7, 129.0], [5.8, 129.0], [5.9, 130.0], [6.0, 130.0], [6.1, 130.0], [6.2, 130.0], [6.3, 130.0], [6.4, 130.0], [6.5, 130.0], [6.6, 130.0], [6.7, 130.0], [6.8, 130.0], [6.9, 130.0], [7.0, 130.0], [7.1, 130.0], [7.2, 130.0], [7.3, 130.0], [7.4, 130.0], [7.5, 130.0], [7.6, 131.0], [7.7, 131.0], [7.8, 131.0], [7.9, 131.0], [8.0, 131.0], [8.1, 131.0], [8.2, 131.0], [8.3, 131.0], [8.4, 131.0], [8.5, 131.0], [8.6, 131.0], [8.7, 131.0], [8.8, 131.0], [8.9, 131.0], [9.0, 131.0], [9.1, 131.0], [9.2, 131.0], [9.3, 131.0], [9.4, 131.0], [9.5, 131.0], [9.6, 131.0], [9.7, 131.0], [9.8, 131.0], [9.9, 131.0], [10.0, 132.0], [10.1, 132.0], [10.2, 132.0], [10.3, 132.0], [10.4, 132.0], [10.5, 132.0], [10.6, 132.0], [10.7, 132.0], [10.8, 132.0], [10.9, 132.0], [11.0, 132.0], [11.1, 132.0], [11.2, 132.0], [11.3, 132.0], [11.4, 132.0], [11.5, 132.0], [11.6, 132.0], [11.7, 132.0], [11.8, 132.0], [11.9, 132.0], [12.0, 132.0], [12.1, 132.0], [12.2, 132.0], [12.3, 132.0], [12.4, 132.0], [12.5, 132.0], [12.6, 132.0], [12.7, 132.0], [12.8, 132.0], [12.9, 132.0], [13.0, 132.0], [13.1, 132.0], [13.2, 132.0], [13.3, 132.0], [13.4, 133.0], [13.5, 133.0], [13.6, 133.0], [13.7, 133.0], [13.8, 133.0], [13.9, 133.0], [14.0, 133.0], [14.1, 133.0], [14.2, 133.0], [14.3, 133.0], [14.4, 133.0], [14.5, 133.0], [14.6, 133.0], [14.7, 133.0], [14.8, 133.0], [14.9, 133.0], [15.0, 133.0], [15.1, 133.0], [15.2, 133.0], [15.3, 133.0], [15.4, 133.0], [15.5, 133.0], [15.6, 133.0], [15.7, 133.0], [15.8, 133.0], [15.9, 133.0], [16.0, 133.0], [16.1, 133.0], [16.2, 133.0], [16.3, 133.0], [16.4, 133.0], [16.5, 133.0], [16.6, 133.0], [16.7, 134.0], [16.8, 134.0], [16.9, 134.0], [17.0, 134.0], [17.1, 134.0], [17.2, 134.0], [17.3, 134.0], [17.4, 134.0], [17.5, 134.0], [17.6, 134.0], [17.7, 134.0], [17.8, 134.0], [17.9, 134.0], [18.0, 134.0], [18.1, 134.0], [18.2, 134.0], [18.3, 134.0], [18.4, 135.0], [18.5, 135.0], [18.6, 135.0], [18.7, 135.0], [18.8, 135.0], [18.9, 135.0], [19.0, 135.0], [19.1, 135.0], [19.2, 135.0], [19.3, 135.0], [19.4, 135.0], [19.5, 135.0], [19.6, 135.0], [19.7, 135.0], [19.8, 135.0], [19.9, 135.0], [20.0, 135.0], [20.1, 135.0], [20.2, 135.0], [20.3, 135.0], [20.4, 135.0], [20.5, 135.0], [20.6, 135.0], [20.7, 135.0], [20.8, 135.0], [20.9, 136.0], [21.0, 136.0], [21.1, 136.0], [21.2, 136.0], [21.3, 136.0], [21.4, 136.0], [21.5, 136.0], [21.6, 136.0], [21.7, 136.0], [21.8, 136.0], [21.9, 136.0], [22.0, 136.0], [22.1, 136.0], [22.2, 136.0], [22.3, 136.0], [22.4, 136.0], [22.5, 136.0], [22.6, 136.0], [22.7, 136.0], [22.8, 136.0], [22.9, 136.0], [23.0, 137.0], [23.1, 137.0], [23.2, 137.0], [23.3, 137.0], [23.4, 137.0], [23.5, 137.0], [23.6, 137.0], [23.7, 137.0], [23.8, 137.0], [23.9, 137.0], [24.0, 137.0], [24.1, 137.0], [24.2, 137.0], [24.3, 137.0], [24.4, 137.0], [24.5, 137.0], [24.6, 138.0], [24.7, 138.0], [24.8, 138.0], [24.9, 138.0], [25.0, 138.0], [25.1, 138.0], [25.2, 138.0], [25.3, 138.0], [25.4, 138.0], [25.5, 138.0], [25.6, 138.0], [25.7, 138.0], [25.8, 138.0], [25.9, 138.0], [26.0, 138.0], [26.1, 138.0], [26.2, 138.0], [26.3, 138.0], [26.4, 138.0], [26.5, 138.0], [26.6, 138.0], [26.7, 138.0], [26.8, 138.0], [26.9, 138.0], [27.0, 138.0], [27.1, 138.0], [27.2, 138.0], [27.3, 138.0], [27.4, 138.0], [27.5, 138.0], [27.6, 139.0], [27.7, 139.0], [27.8, 139.0], [27.9, 139.0], [28.0, 140.0], [28.1, 140.0], [28.2, 140.0], [28.3, 140.0], [28.4, 141.0], [28.5, 141.0], [28.6, 141.0], [28.7, 141.0], [28.8, 141.0], [28.9, 141.0], [29.0, 141.0], [29.1, 141.0], [29.2, 141.0], [29.3, 141.0], [29.4, 141.0], [29.5, 141.0], [29.6, 141.0], [29.7, 141.0], [29.8, 141.0], [29.9, 141.0], [30.0, 141.0], [30.1, 141.0], [30.2, 141.0], [30.3, 141.0], [30.4, 141.0], [30.5, 142.0], [30.6, 142.0], [30.7, 142.0], [30.8, 142.0], [30.9, 142.0], [31.0, 142.0], [31.1, 142.0], [31.2, 142.0], [31.3, 142.0], [31.4, 142.0], [31.5, 142.0], [31.6, 142.0], [31.7, 142.0], [31.8, 142.0], [31.9, 142.0], [32.0, 142.0], [32.1, 143.0], [32.2, 143.0], [32.3, 143.0], [32.4, 143.0], [32.5, 143.0], [32.6, 143.0], [32.7, 143.0], [32.8, 143.0], [32.9, 143.0], [33.0, 143.0], [33.1, 143.0], [33.2, 143.0], [33.3, 143.0], [33.4, 143.0], [33.5, 143.0], [33.6, 143.0], [33.7, 143.0], [33.8, 144.0], [33.9, 144.0], [34.0, 144.0], [34.1, 144.0], [34.2, 144.0], [34.3, 144.0], [34.4, 144.0], [34.5, 144.0], [34.6, 145.0], [34.7, 145.0], [34.8, 145.0], [34.9, 145.0], [35.0, 146.0], [35.1, 146.0], [35.2, 146.0], [35.3, 146.0], [35.4, 146.0], [35.5, 146.0], [35.6, 146.0], [35.7, 146.0], [35.8, 146.0], [35.9, 147.0], [36.0, 147.0], [36.1, 147.0], [36.2, 147.0], [36.3, 148.0], [36.4, 148.0], [36.5, 148.0], [36.6, 148.0], [36.7, 148.0], [36.8, 148.0], [36.9, 148.0], [37.0, 148.0], [37.1, 148.0], [37.2, 148.0], [37.3, 148.0], [37.4, 148.0], [37.5, 149.0], [37.6, 149.0], [37.7, 149.0], [37.8, 149.0], [37.9, 149.0], [38.0, 150.0], [38.1, 150.0], [38.2, 150.0], [38.3, 150.0], [38.4, 151.0], [38.5, 151.0], [38.6, 151.0], [38.7, 151.0], [38.8, 151.0], [38.9, 151.0], [39.0, 151.0], [39.1, 151.0], [39.2, 152.0], [39.3, 152.0], [39.4, 152.0], [39.5, 152.0], [39.6, 157.0], [39.7, 157.0], [39.8, 157.0], [39.9, 157.0], [40.0, 161.0], [40.1, 161.0], [40.2, 161.0], [40.3, 161.0], [40.4, 161.0], [40.5, 161.0], [40.6, 161.0], [40.7, 161.0], [40.8, 161.0], [40.9, 207.0], [41.0, 207.0], [41.1, 207.0], [41.2, 207.0], [41.3, 250.0], [41.4, 250.0], [41.5, 250.0], [41.6, 250.0], [41.7, 289.0], [41.8, 289.0], [41.9, 289.0], [42.0, 289.0], [42.1, 426.0], [42.2, 426.0], [42.3, 426.0], [42.4, 426.0], [42.5, 460.0], [42.6, 460.0], [42.7, 460.0], [42.8, 460.0], [42.9, 460.0], [43.0, 539.0], [43.1, 539.0], [43.2, 539.0], [43.3, 539.0], [43.4, 580.0], [43.5, 580.0], [43.6, 580.0], [43.7, 580.0], [43.8, 586.0], [43.9, 586.0], [44.0, 586.0], [44.1, 586.0], [44.2, 590.0], [44.3, 590.0], [44.4, 590.0], [44.5, 590.0], [44.6, 599.0], [44.7, 599.0], [44.8, 599.0], [44.9, 599.0], [45.0, 602.0], [45.1, 602.0], [45.2, 602.0], [45.3, 602.0], [45.4, 602.0], [45.5, 616.0], [45.6, 616.0], [45.7, 616.0], [45.8, 616.0], [45.9, 672.0], [46.0, 672.0], [46.1, 672.0], [46.2, 672.0], [46.3, 672.0], [46.4, 672.0], [46.5, 672.0], [46.6, 672.0], [46.7, 674.0], [46.8, 674.0], [46.9, 674.0], [47.0, 674.0], [47.1, 679.0], [47.2, 679.0], [47.3, 679.0], [47.4, 679.0], [47.5, 701.0], [47.6, 701.0], [47.7, 701.0], [47.8, 701.0], [47.9, 701.0], [48.0, 723.0], [48.1, 723.0], [48.2, 723.0], [48.3, 723.0], [48.4, 730.0], [48.5, 730.0], [48.6, 730.0], [48.7, 730.0], [48.8, 750.0], [48.9, 750.0], [49.0, 750.0], [49.1, 750.0], [49.2, 750.0], [49.3, 750.0], [49.4, 750.0], [49.5, 750.0], [49.6, 754.0], [49.7, 754.0], [49.8, 754.0], [49.9, 754.0], [50.0, 757.0], [50.1, 757.0], [50.2, 757.0], [50.3, 757.0], [50.4, 757.0], [50.5, 763.0], [50.6, 763.0], [50.7, 763.0], [50.8, 763.0], [50.9, 780.0], [51.0, 780.0], [51.1, 780.0], [51.2, 780.0], [51.3, 786.0], [51.4, 786.0], [51.5, 786.0], [51.6, 786.0], [51.7, 786.0], [51.8, 786.0], [51.9, 786.0], [52.0, 786.0], [52.1, 813.0], [52.2, 813.0], [52.3, 813.0], [52.4, 813.0], [52.5, 826.0], [52.6, 826.0], [52.7, 826.0], [52.8, 826.0], [52.9, 826.0], [53.0, 838.0], [53.1, 838.0], [53.2, 838.0], [53.3, 838.0], [53.4, 841.0], [53.5, 841.0], [53.6, 841.0], [53.7, 841.0], [53.8, 843.0], [53.9, 843.0], [54.0, 843.0], [54.1, 843.0], [54.2, 849.0], [54.3, 849.0], [54.4, 849.0], [54.5, 849.0], [54.6, 853.0], [54.7, 853.0], [54.8, 853.0], [54.9, 853.0], [55.0, 857.0], [55.1, 857.0], [55.2, 857.0], [55.3, 857.0], [55.4, 857.0], [55.5, 861.0], [55.6, 861.0], [55.7, 861.0], [55.8, 861.0], [55.9, 862.0], [56.0, 862.0], [56.1, 862.0], [56.2, 862.0], [56.3, 864.0], [56.4, 864.0], [56.5, 864.0], [56.6, 864.0], [56.7, 866.0], [56.8, 866.0], [56.9, 866.0], [57.0, 866.0], [57.1, 873.0], [57.2, 873.0], [57.3, 873.0], [57.4, 873.0], [57.5, 878.0], [57.6, 878.0], [57.7, 878.0], [57.8, 878.0], [57.9, 878.0], [58.0, 898.0], [58.1, 898.0], [58.2, 898.0], [58.3, 898.0], [58.4, 914.0], [58.5, 914.0], [58.6, 914.0], [58.7, 914.0], [58.8, 946.0], [58.9, 946.0], [59.0, 946.0], [59.1, 946.0], [59.2, 947.0], [59.3, 947.0], [59.4, 947.0], [59.5, 947.0], [59.6, 955.0], [59.7, 955.0], [59.8, 955.0], [59.9, 955.0], [60.0, 963.0], [60.1, 963.0], [60.2, 963.0], [60.3, 963.0], [60.4, 963.0], [60.5, 970.0], [60.6, 970.0], [60.7, 970.0], [60.8, 970.0], [60.9, 981.0], [61.0, 981.0], [61.1, 981.0], [61.2, 981.0], [61.3, 993.0], [61.4, 993.0], [61.5, 993.0], [61.6, 993.0], [61.7, 1009.0], [61.8, 1009.0], [61.9, 1009.0], [62.0, 1009.0], [62.1, 1049.0], [62.2, 1049.0], [62.3, 1049.0], [62.4, 1049.0], [62.5, 1049.0], [62.6, 1049.0], [62.7, 1049.0], [62.8, 1049.0], [62.9, 1049.0], [63.0, 1051.0], [63.1, 1051.0], [63.2, 1051.0], [63.3, 1051.0], [63.4, 1065.0], [63.5, 1065.0], [63.6, 1065.0], [63.7, 1065.0], [63.8, 1082.0], [63.9, 1082.0], [64.0, 1082.0], [64.1, 1082.0], [64.2, 1108.0], [64.3, 1108.0], [64.4, 1108.0], [64.5, 1108.0], [64.6, 1133.0], [64.7, 1133.0], [64.8, 1133.0], [64.9, 1133.0], [65.0, 1158.0], [65.1, 1158.0], [65.2, 1158.0], [65.3, 1158.0], [65.4, 1158.0], [65.5, 1168.0], [65.6, 1168.0], [65.7, 1168.0], [65.8, 1168.0], [65.9, 1210.0], [66.0, 1210.0], [66.1, 1210.0], [66.2, 1210.0], [66.3, 1217.0], [66.4, 1217.0], [66.5, 1217.0], [66.6, 1217.0], [66.7, 1221.0], [66.8, 1221.0], [66.9, 1221.0], [67.0, 1221.0], [67.1, 1240.0], [67.2, 1240.0], [67.3, 1240.0], [67.4, 1240.0], [67.5, 1258.0], [67.6, 1258.0], [67.7, 1258.0], [67.8, 1258.0], [67.9, 1258.0], [68.0, 1263.0], [68.1, 1263.0], [68.2, 1263.0], [68.3, 1263.0], [68.4, 1270.0], [68.5, 1270.0], [68.6, 1270.0], [68.7, 1270.0], [68.8, 1282.0], [68.9, 1282.0], [69.0, 1282.0], [69.1, 1282.0], [69.2, 1287.0], [69.3, 1287.0], [69.4, 1287.0], [69.5, 1287.0], [69.6, 1288.0], [69.7, 1288.0], [69.8, 1288.0], [69.9, 1288.0], [70.0, 1294.0], [70.1, 1294.0], [70.2, 1294.0], [70.3, 1294.0], [70.4, 1294.0], [70.5, 1300.0], [70.6, 1300.0], [70.7, 1300.0], [70.8, 1300.0], [70.9, 1324.0], [71.0, 1324.0], [71.1, 1324.0], [71.2, 1324.0], [71.3, 1361.0], [71.4, 1361.0], [71.5, 1361.0], [71.6, 1361.0], [71.7, 1392.0], [71.8, 1392.0], [71.9, 1392.0], [72.0, 1392.0], [72.1, 1398.0], [72.2, 1398.0], [72.3, 1398.0], [72.4, 1398.0], [72.5, 1398.0], [72.6, 1398.0], [72.7, 1398.0], [72.8, 1398.0], [72.9, 1398.0], [73.0, 1436.0], [73.1, 1436.0], [73.2, 1436.0], [73.3, 1436.0], [73.4, 1440.0], [73.5, 1440.0], [73.6, 1440.0], [73.7, 1440.0], [73.8, 1505.0], [73.9, 1505.0], [74.0, 1505.0], [74.1, 1505.0], [74.2, 1513.0], [74.3, 1513.0], [74.4, 1513.0], [74.5, 1513.0], [74.6, 1515.0], [74.7, 1515.0], [74.8, 1515.0], [74.9, 1515.0], [75.0, 1518.0], [75.1, 1518.0], [75.2, 1518.0], [75.3, 1518.0], [75.4, 1518.0], [75.5, 1522.0], [75.6, 1522.0], [75.7, 1522.0], [75.8, 1522.0], [75.9, 1529.0], [76.0, 1529.0], [76.1, 1529.0], [76.2, 1529.0], [76.3, 1568.0], [76.4, 1568.0], [76.5, 1568.0], [76.6, 1568.0], [76.7, 1576.0], [76.8, 1576.0], [76.9, 1576.0], [77.0, 1576.0], [77.1, 1609.0], [77.2, 1609.0], [77.3, 1609.0], [77.4, 1609.0], [77.5, 1609.0], [77.6, 1612.0], [77.7, 1612.0], [77.8, 1612.0], [77.9, 1612.0], [78.0, 1621.0], [78.1, 1621.0], [78.2, 1621.0], [78.3, 1621.0], [78.4, 1626.0], [78.5, 1626.0], [78.6, 1626.0], [78.7, 1626.0], [78.8, 1646.0], [78.9, 1646.0], [79.0, 1646.0], [79.1, 1646.0], [79.2, 1647.0], [79.3, 1647.0], [79.4, 1647.0], [79.5, 1647.0], [79.6, 1655.0], [79.7, 1655.0], [79.8, 1655.0], [79.9, 1655.0], [80.0, 1655.0], [80.1, 1656.0], [80.2, 1656.0], [80.3, 1656.0], [80.4, 1656.0], [80.5, 1676.0], [80.6, 1676.0], [80.7, 1676.0], [80.8, 1676.0], [80.9, 1693.0], [81.0, 1693.0], [81.1, 1693.0], [81.2, 1693.0], [81.3, 1717.0], [81.4, 1717.0], [81.5, 1717.0], [81.6, 1717.0], [81.7, 1735.0], [81.8, 1735.0], [81.9, 1735.0], [82.0, 1735.0], [82.1, 1744.0], [82.2, 1744.0], [82.3, 1744.0], [82.4, 1744.0], [82.5, 1744.0], [82.6, 1745.0], [82.7, 1745.0], [82.8, 1745.0], [82.9, 1745.0], [83.0, 1753.0], [83.1, 1753.0], [83.2, 1753.0], [83.3, 1753.0], [83.4, 1755.0], [83.5, 1755.0], [83.6, 1755.0], [83.7, 1755.0], [83.8, 1778.0], [83.9, 1778.0], [84.0, 1778.0], [84.1, 1778.0], [84.2, 1841.0], [84.3, 1841.0], [84.4, 1841.0], [84.5, 1841.0], [84.6, 1872.0], [84.7, 1872.0], [84.8, 1872.0], [84.9, 1872.0], [85.0, 1872.0], [85.1, 1918.0], [85.2, 1918.0], [85.3, 1918.0], [85.4, 1918.0], [85.5, 1943.0], [85.6, 1943.0], [85.7, 1943.0], [85.8, 1943.0], [85.9, 1998.0], [86.0, 1998.0], [86.1, 1998.0], [86.2, 1998.0], [86.3, 2006.0], [86.4, 2006.0], [86.5, 2006.0], [86.6, 2006.0], [86.7, 2011.0], [86.8, 2011.0], [86.9, 2011.0], [87.0, 2011.0], [87.1, 2051.0], [87.2, 2051.0], [87.3, 2051.0], [87.4, 2051.0], [87.5, 2051.0], [87.6, 2058.0], [87.7, 2058.0], [87.8, 2058.0], [87.9, 2058.0], [88.0, 2064.0], [88.1, 2064.0], [88.2, 2064.0], [88.3, 2064.0], [88.4, 2067.0], [88.5, 2067.0], [88.6, 2067.0], [88.7, 2067.0], [88.8, 2067.0], [88.9, 2067.0], [89.0, 2067.0], [89.1, 2067.0], [89.2, 2092.0], [89.3, 2092.0], [89.4, 2092.0], [89.5, 2092.0], [89.6, 2104.0], [89.7, 2104.0], [89.8, 2104.0], [89.9, 2104.0], [90.0, 2104.0], [90.1, 2111.0], [90.2, 2111.0], [90.3, 2111.0], [90.4, 2111.0], [90.5, 2189.0], [90.6, 2189.0], [90.7, 2189.0], [90.8, 2189.0], [90.9, 2235.0], [91.0, 2235.0], [91.1, 2235.0], [91.2, 2235.0], [91.3, 2239.0], [91.4, 2239.0], [91.5, 2239.0], [91.6, 2239.0], [91.7, 2243.0], [91.8, 2243.0], [91.9, 2243.0], [92.0, 2243.0], [92.1, 2252.0], [92.2, 2252.0], [92.3, 2252.0], [92.4, 2252.0], [92.5, 2252.0], [92.6, 2295.0], [92.7, 2295.0], [92.8, 2295.0], [92.9, 2295.0], [93.0, 2301.0], [93.1, 2301.0], [93.2, 2301.0], [93.3, 2301.0], [93.4, 2335.0], [93.5, 2335.0], [93.6, 2335.0], [93.7, 2335.0], [93.8, 2366.0], [93.9, 2366.0], [94.0, 2366.0], [94.1, 2366.0], [94.2, 2389.0], [94.3, 2389.0], [94.4, 2389.0], [94.5, 2389.0], [94.6, 2463.0], [94.7, 2463.0], [94.8, 2463.0], [94.9, 2463.0], [95.0, 2463.0], [95.1, 2506.0], [95.2, 2506.0], [95.3, 2506.0], [95.4, 2506.0], [95.5, 2677.0], [95.6, 2677.0], [95.7, 2677.0], [95.8, 2677.0], [95.9, 2834.0], [96.0, 2834.0], [96.1, 2834.0], [96.2, 2834.0], [96.3, 2886.0], [96.4, 2886.0], [96.5, 2886.0], [96.6, 2886.0], [96.7, 2945.0], [96.8, 2945.0], [96.9, 2945.0], [97.0, 2945.0], [97.1, 3029.0], [97.2, 3029.0], [97.3, 3029.0], [97.4, 3029.0], [97.5, 3029.0], [97.6, 3439.0], [97.7, 3439.0], [97.8, 3439.0], [97.9, 3439.0], [98.0, 3449.0], [98.1, 3449.0], [98.2, 3449.0], [98.3, 3449.0], [98.4, 3482.0], [98.5, 3482.0], [98.6, 3482.0], [98.7, 3482.0], [98.8, 3605.0], [98.9, 3605.0], [99.0, 3605.0], [99.1, 3605.0], [99.2, 3618.0], [99.3, 3618.0], [99.4, 3618.0], [99.5, 3618.0], [99.6, 3868.0], [99.7, 3868.0], [99.8, 3868.0], [99.9, 3868.0], [100.0, 3868.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 98.0, "series": [{"data": [[600.0, 6.0], [700.0, 11.0], [800.0, 15.0], [900.0, 8.0], [1000.0, 6.0], [1100.0, 4.0], [1200.0, 11.0], [1300.0, 6.0], [1400.0, 2.0], [1500.0, 8.0], [100.0, 98.0], [1600.0, 10.0], [1700.0, 7.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 8.0], [2100.0, 3.0], [2200.0, 5.0], [2300.0, 4.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 3.0], [3400.0, 3.0], [3600.0, 2.0], [3800.0, 1.0], [400.0, 2.0], [500.0, 5.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 103.0, "series": [{"data": [[0.0, 103.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 74.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 63.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.79136882E12, "maxY": 1.4444444444444442, "series": [{"data": [[1.79136996E12, 1.0], [1.79136966E12, 1.0588235294117647], [1.79137026E12, 1.0], [1.79137038E12, 1.0], [1.79136936E12, 1.0], [1.79136906E12, 1.4444444444444442], [1.79136948E12, 1.0], [1.79136918E12, 1.0], [1.79137008E12, 1.1111111111111112], [1.79136978E12, 1.0], [1.7913702E12, 1.0], [1.7913699E12, 1.0], [1.79136888E12, 1.1428571428571428], [1.79137062E12, 1.0], [1.791369E12, 1.0], [1.7913705E12, 1.1250000000000002], [1.7913696E12, 1.0], [1.7913693E12, 1.0], [1.79136972E12, 1.125], [1.79136942E12, 1.1666666666666667], [1.79137032E12, 1.2], [1.79137002E12, 1.1], [1.79137044E12, 1.0], [1.79137014E12, 1.0833333333333333], [1.79136912E12, 1.2499999999999998], [1.79136882E12, 1.2], [1.79136924E12, 1.0], [1.79136894E12, 1.1818181818181819], [1.79137056E12, 1.25], [1.79136984E12, 1.3333333333333333], [1.79136954E12, 1.0]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79137062E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 825.7361111111113, "minX": 1.0, "maxY": 2834.0, "series": [{"data": [[2.0, 1736.9999999999998], [1.0, 825.7361111111113], [3.0, 2834.0]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.104166666666666, 921.4333333333336]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3.066666666666667, "minX": 1.79136882E12, "maxY": 311.18333333333334, "series": [{"data": [[1.79136996E12, 3.066666666666667], [1.79136966E12, 52.53333333333333], [1.79137026E12, 24.883333333333333], [1.79137038E12, 15.516666666666667], [1.79136936E12, 22.283333333333335], [1.79136906E12, 28.2], [1.79136948E12, 12.666666666666666], [1.79136918E12, 27.816666666666666], [1.79137008E12, 28.2], [1.79136978E12, 24.983333333333334], [1.7913702E12, 18.616666666666667], [1.7913699E12, 21.9], [1.79136888E12, 21.633333333333333], [1.79137062E12, 15.533333333333333], [1.791369E12, 12.233333333333333], [1.7913705E12, 25.166666666666668], [1.7913696E12, 12.533333333333333], [1.7913693E12, 27.95], [1.79136972E12, 24.966666666666665], [1.79136942E12, 38.11666666666667], [1.79137032E12, 15.583333333333334], [1.79137002E12, 30.866666666666667], [1.79137044E12, 28.2], [1.79137014E12, 37.6], [1.79136912E12, 37.31666666666667], [1.79136882E12, 15.683333333333334], [1.79136924E12, 15.65], [1.79136894E12, 33.983333333333334], [1.79137056E12, 25.083333333333332], [1.79136984E12, 28.0], [1.79136954E12, 21.816666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79136996E12, 8.716666666666667], [1.79136966E12, 311.18333333333334], [1.79137026E12, 186.53333333333333], [1.79137038E12, 88.55], [1.79136936E12, 151.76666666666668], [1.79136906E12, 151.51666666666668], [1.79136948E12, 60.416666666666664], [1.79136918E12, 183.31666666666666], [1.79137008E12, 169.13333333333333], [1.79136978E12, 139.56666666666666], [1.7913702E12, 94.1], [1.7913699E12, 154.75], [1.79136888E12, 138.86666666666667], [1.79137062E12, 81.05], [1.791369E12, 71.61666666666666], [1.7913705E12, 180.4], [1.7913696E12, 68.21666666666667], [1.7913693E12, 188.21666666666667], [1.79136972E12, 138.83333333333334], [1.79136942E12, 211.33333333333334], [1.79137032E12, 66.1], [1.79137002E12, 175.2], [1.79137044E12, 215.1], [1.79137014E12, 218.71666666666667], [1.79136912E12, 196.08333333333334], [1.79136882E12, 88.95], [1.79136924E12, 110.93333333333334], [1.79136894E12, 201.38333333333333], [1.79137056E12, 166.98333333333332], [1.79136984E12, 166.06666666666666], [1.79136954E12, 119.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79137062E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 421.0, "minX": 1.79136882E12, "maxY": 1711.7777777777778, "series": [{"data": [[1.79136996E12, 826.0], [1.79136966E12, 726.8235294117646], [1.79137026E12, 811.5000000000001], [1.79137038E12, 1307.0], [1.79136936E12, 794.0], [1.79136906E12, 1711.7777777777778], [1.79136948E12, 1422.0], [1.79136918E12, 992.0000000000001], [1.79137008E12, 1199.5555555555557], [1.79136978E12, 570.25], [1.7913702E12, 853.0], [1.7913699E12, 463.71428571428567], [1.79136888E12, 1060.0], [1.79137062E12, 1014.8], [1.791369E12, 421.0], [1.7913705E12, 649.75], [1.7913696E12, 503.5], [1.7913693E12, 712.5555555555555], [1.79136972E12, 1059.0], [1.79136942E12, 737.0], [1.79137032E12, 1176.2], [1.79137002E12, 896.5999999999999], [1.79137044E12, 519.1111111111111], [1.79137014E12, 933.75], [1.79136912E12, 1495.1666666666665], [1.79136882E12, 1099.4], [1.79136924E12, 463.6], [1.79136894E12, 800.8181818181819], [1.79137056E12, 1350.0], [1.79136984E12, 1048.5555555555557], [1.79136954E12, 712.4285714285714]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79137062E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 421.0, "minX": 1.79136882E12, "maxY": 1711.7777777777778, "series": [{"data": [[1.79136996E12, 826.0], [1.79136966E12, 726.7647058823528], [1.79137026E12, 811.375], [1.79137038E12, 1307.0], [1.79136936E12, 794.0], [1.79136906E12, 1711.7777777777778], [1.79136948E12, 1422.0], [1.79136918E12, 992.0000000000001], [1.79137008E12, 1199.4444444444443], [1.79136978E12, 570.125], [1.7913702E12, 853.0], [1.7913699E12, 463.71428571428567], [1.79136888E12, 1060.0], [1.79137062E12, 1014.8], [1.791369E12, 421.0], [1.7913705E12, 649.75], [1.7913696E12, 503.25], [1.7913693E12, 712.2222222222222], [1.79136972E12, 1058.875], [1.79136942E12, 736.9166666666666], [1.79137032E12, 1176.0], [1.79137002E12, 896.5999999999999], [1.79137044E12, 519.1111111111111], [1.79137014E12, 933.75], [1.79136912E12, 1495.0833333333333], [1.79136882E12, 1099.4], [1.79136924E12, 463.6], [1.79136894E12, 800.7272727272729], [1.79137056E12, 1350.0], [1.79136984E12, 1048.4444444444443], [1.79136954E12, 712.2857142857142]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79137062E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.25, "minX": 1.79136882E12, "maxY": 22.9, "series": [{"data": [[1.79136996E12, 11.0], [1.79136966E12, 8.117647058823529], [1.79137026E12, 10.25], [1.79137038E12, 8.0], [1.79136936E12, 8.428571428571429], [1.79136906E12, 8.666666666666666], [1.79136948E12, 7.75], [1.79136918E12, 8.222222222222221], [1.79137008E12, 9.333333333333334], [1.79136978E12, 8.375], [1.7913702E12, 9.666666666666666], [1.7913699E12, 8.571428571428571], [1.79136888E12, 8.714285714285714], [1.79137062E12, 12.6], [1.791369E12, 7.25], [1.7913705E12, 7.749999999999999], [1.7913696E12, 12.0], [1.7913693E12, 8.444444444444446], [1.79136972E12, 7.75], [1.79136942E12, 7.916666666666667], [1.79137032E12, 8.6], [1.79137002E12, 22.9], [1.79137044E12, 10.666666666666666], [1.79137014E12, 11.416666666666666], [1.79136912E12, 7.833333333333334], [1.79136882E12, 12.4], [1.79136924E12, 7.8], [1.79136894E12, 8.181818181818183], [1.79137056E12, 8.624999999999998], [1.79136984E12, 9.333333333333332], [1.79136954E12, 7.571428571428571]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79137062E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 124.0, "minX": 1.79136882E12, "maxY": 3868.0, "series": [{"data": [[1.79136996E12, 826.0], [1.79136966E12, 3605.0], [1.79137026E12, 3449.0], [1.79137038E12, 3618.0], [1.79136936E12, 2104.0], [1.79136906E12, 3868.0], [1.79136948E12, 2051.0], [1.79136918E12, 2239.0], [1.79137008E12, 3029.0], [1.79136978E12, 1529.0], [1.7913702E12, 1240.0], [1.7913699E12, 2011.0], [1.79136888E12, 2335.0], [1.79137062E12, 2092.0], [1.791369E12, 1287.0], [1.7913705E12, 2301.0], [1.7913696E12, 955.0], [1.7913693E12, 2463.0], [1.79136972E12, 1943.0], [1.79136942E12, 1735.0], [1.79137032E12, 1646.0], [1.79137002E12, 2252.0], [1.79137044E12, 1626.0], [1.79137014E12, 3439.0], [1.79136912E12, 3482.0], [1.79136882E12, 2945.0], [1.79136924E12, 1065.0], [1.79136894E12, 2189.0], [1.79137056E12, 2677.0], [1.79136984E12, 2389.0], [1.79136954E12, 1744.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79136996E12, 826.0], [1.79136966E12, 3029.7999999999993], [1.79137026E12, 3449.0], [1.79137038E12, 3618.0], [1.79136936E12, 2104.0], [1.79136906E12, 3868.0], [1.79136948E12, 2051.0], [1.79136918E12, 2239.0], [1.79137008E12, 3029.0], [1.79136978E12, 1529.0], [1.7913702E12, 1240.0], [1.7913699E12, 2011.0], [1.79136888E12, 2335.0], [1.79137062E12, 2092.0], [1.791369E12, 1287.0], [1.7913705E12, 2301.0], [1.7913696E12, 955.0], [1.7913693E12, 2463.0], [1.79136972E12, 1943.0], [1.79136942E12, 1700.8000000000002], [1.79137032E12, 1646.0], [1.79137002E12, 2226.6], [1.79137044E12, 1626.0], [1.79137014E12, 2858.800000000002], [1.79136912E12, 3125.9000000000015], [1.79136882E12, 2945.0], [1.79136924E12, 1065.0], [1.79136894E12, 2094.6000000000004], [1.79137056E12, 2677.0], [1.79136984E12, 2389.0], [1.79136954E12, 1744.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79136996E12, 826.0], [1.79136966E12, 3605.0], [1.79137026E12, 3449.0], [1.79137038E12, 3618.0], [1.79136936E12, 2104.0], [1.79136906E12, 3868.0], [1.79136948E12, 2051.0], [1.79136918E12, 2239.0], [1.79137008E12, 3029.0], [1.79136978E12, 1529.0], [1.7913702E12, 1240.0], [1.7913699E12, 2011.0], [1.79136888E12, 2335.0], [1.79137062E12, 2092.0], [1.791369E12, 1287.0], [1.7913705E12, 2301.0], [1.7913696E12, 955.0], [1.7913693E12, 2463.0], [1.79136972E12, 1943.0], [1.79136942E12, 1735.0], [1.79137032E12, 1646.0], [1.79137002E12, 2252.0], [1.79137044E12, 1626.0], [1.79137014E12, 3439.0], [1.79136912E12, 3482.0], [1.79136882E12, 2945.0], [1.79136924E12, 1065.0], [1.79136894E12, 2189.0], [1.79137056E12, 2677.0], [1.79136984E12, 2389.0], [1.79136954E12, 1744.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79136996E12, 826.0], [1.79136966E12, 3605.0], [1.79137026E12, 3449.0], [1.79137038E12, 3618.0], [1.79136936E12, 2104.0], [1.79136906E12, 3868.0], [1.79136948E12, 2051.0], [1.79136918E12, 2239.0], [1.79137008E12, 3029.0], [1.79136978E12, 1529.0], [1.7913702E12, 1240.0], [1.7913699E12, 2011.0], [1.79136888E12, 2335.0], [1.79137062E12, 2092.0], [1.791369E12, 1287.0], [1.7913705E12, 2301.0], [1.7913696E12, 955.0], [1.7913693E12, 2463.0], [1.79136972E12, 1943.0], [1.79136942E12, 1735.0], [1.79137032E12, 1646.0], [1.79137002E12, 2252.0], [1.79137044E12, 1626.0], [1.79137014E12, 3439.0], [1.79136912E12, 3482.0], [1.79136882E12, 2945.0], [1.79136924E12, 1065.0], [1.79136894E12, 2189.0], [1.79137056E12, 2677.0], [1.79136984E12, 2389.0], [1.79136954E12, 1744.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79136996E12, 826.0], [1.79136966E12, 126.0], [1.79137026E12, 127.0], [1.79137038E12, 142.0], [1.79136936E12, 132.0], [1.79136906E12, 128.0], [1.79136948E12, 841.0], [1.79136918E12, 131.0], [1.79137008E12, 135.0], [1.79136978E12, 127.0], [1.7913702E12, 142.0], [1.7913699E12, 129.0], [1.79136888E12, 130.0], [1.79137062E12, 135.0], [1.791369E12, 130.0], [1.7913705E12, 129.0], [1.7913696E12, 141.0], [1.7913693E12, 131.0], [1.79136972E12, 132.0], [1.79136942E12, 124.0], [1.79137032E12, 878.0], [1.79137002E12, 131.0], [1.79137044E12, 133.0], [1.79137014E12, 129.0], [1.79136912E12, 129.0], [1.79136882E12, 138.0], [1.79136924E12, 126.0], [1.79136894E12, 126.0], [1.79137056E12, 132.0], [1.79136984E12, 124.0], [1.79136954E12, 143.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79136996E12, 826.0], [1.79136966E12, 141.0], [1.79137026E12, 137.0], [1.79137038E12, 946.0], [1.79136936E12, 144.0], [1.79136906E12, 1778.0], [1.79136948E12, 1398.0], [1.79136918E12, 786.0], [1.79137008E12, 849.0], [1.79136978E12, 137.0], [1.7913702E12, 869.5], [1.7913699E12, 144.0], [1.79136888E12, 754.0], [1.79137062E12, 723.0], [1.791369E12, 133.5], [1.7913705E12, 200.0], [1.7913696E12, 459.0], [1.7913693E12, 149.0], [1.79136972E12, 1327.5], [1.79136942E12, 594.5], [1.79137032E12, 970.0], [1.79137002E12, 407.5], [1.79137044E12, 145.0], [1.79137014E12, 766.5], [1.79136912E12, 1456.5], [1.79136882E12, 750.0], [1.79136924E12, 135.0], [1.79136894E12, 763.0], [1.79137056E12, 1293.5], [1.79136984E12, 914.0], [1.79136954E12, 426.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79137062E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 750.0, "minX": 1.0, "maxY": 1279.0, "series": [{"data": [[1.0, 750.0], [2.0, 1279.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 750.0, "minX": 1.0, "maxY": 1279.0, "series": [{"data": [[1.0, 750.0], [2.0, 1279.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.79136882E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.79136996E12, 0.05], [1.79136966E12, 0.26666666666666666], [1.79137026E12, 0.11666666666666667], [1.79137038E12, 0.06666666666666667], [1.79136936E12, 0.11666666666666667], [1.79136906E12, 0.15], [1.79136948E12, 0.06666666666666667], [1.79136918E12, 0.13333333333333333], [1.79137008E12, 0.15], [1.79136978E12, 0.13333333333333333], [1.7913702E12, 0.11666666666666667], [1.7913699E12, 0.11666666666666667], [1.79136888E12, 0.11666666666666667], [1.79137062E12, 0.08333333333333333], [1.791369E12, 0.06666666666666667], [1.7913705E12, 0.13333333333333333], [1.7913696E12, 0.08333333333333333], [1.7913693E12, 0.15], [1.79136972E12, 0.13333333333333333], [1.79136942E12, 0.2], [1.79137032E12, 0.1], [1.79137002E12, 0.13333333333333333], [1.79137044E12, 0.15], [1.79137014E12, 0.2], [1.79136912E12, 0.21666666666666667], [1.79136882E12, 0.08333333333333333], [1.79136924E12, 0.08333333333333333], [1.79136894E12, 0.18333333333333332], [1.79137056E12, 0.13333333333333333], [1.79136984E12, 0.15], [1.79136954E12, 0.11666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79137062E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79136882E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79136996E12, 0.016666666666666666], [1.79136966E12, 0.2833333333333333], [1.79137026E12, 0.13333333333333333], [1.79137038E12, 0.08333333333333333], [1.79136936E12, 0.11666666666666667], [1.79136906E12, 0.15], [1.79136948E12, 0.06666666666666667], [1.79136918E12, 0.15], [1.79137008E12, 0.15], [1.79136978E12, 0.13333333333333333], [1.7913702E12, 0.1], [1.7913699E12, 0.11666666666666667], [1.79136888E12, 0.11666666666666667], [1.79137062E12, 0.08333333333333333], [1.791369E12, 0.06666666666666667], [1.7913705E12, 0.13333333333333333], [1.7913696E12, 0.06666666666666667], [1.7913693E12, 0.15], [1.79136972E12, 0.13333333333333333], [1.79136942E12, 0.2], [1.79137032E12, 0.08333333333333333], [1.79137002E12, 0.16666666666666666], [1.79137044E12, 0.15], [1.79137014E12, 0.2], [1.79136912E12, 0.2], [1.79136882E12, 0.08333333333333333], [1.79136924E12, 0.08333333333333333], [1.79136894E12, 0.18333333333333332], [1.79137056E12, 0.13333333333333333], [1.79136984E12, 0.15], [1.79136954E12, 0.11666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79137062E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79136882E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79136996E12, 0.016666666666666666], [1.79136966E12, 0.2833333333333333], [1.79137026E12, 0.13333333333333333], [1.79137038E12, 0.08333333333333333], [1.79136936E12, 0.11666666666666667], [1.79136906E12, 0.15], [1.79136948E12, 0.06666666666666667], [1.79136918E12, 0.15], [1.79137008E12, 0.15], [1.79136978E12, 0.13333333333333333], [1.7913702E12, 0.1], [1.7913699E12, 0.11666666666666667], [1.79136888E12, 0.11666666666666667], [1.79137062E12, 0.08333333333333333], [1.791369E12, 0.06666666666666667], [1.7913705E12, 0.13333333333333333], [1.7913696E12, 0.06666666666666667], [1.7913693E12, 0.15], [1.79136972E12, 0.13333333333333333], [1.79136942E12, 0.2], [1.79137032E12, 0.08333333333333333], [1.79137002E12, 0.16666666666666666], [1.79137044E12, 0.15], [1.79137014E12, 0.2], [1.79136912E12, 0.2], [1.79136882E12, 0.08333333333333333], [1.79136924E12, 0.08333333333333333], [1.79136894E12, 0.18333333333333332], [1.79137056E12, 0.13333333333333333], [1.79136984E12, 0.15], [1.79136954E12, 0.11666666666666667]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79137062E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79136882E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79136996E12, 0.016666666666666666], [1.79136966E12, 0.2833333333333333], [1.79137026E12, 0.13333333333333333], [1.79137038E12, 0.08333333333333333], [1.79136936E12, 0.11666666666666667], [1.79136906E12, 0.15], [1.79136948E12, 0.06666666666666667], [1.79136918E12, 0.15], [1.79137008E12, 0.15], [1.79136978E12, 0.13333333333333333], [1.7913702E12, 0.1], [1.7913699E12, 0.11666666666666667], [1.79136888E12, 0.11666666666666667], [1.79137062E12, 0.08333333333333333], [1.791369E12, 0.06666666666666667], [1.7913705E12, 0.13333333333333333], [1.7913696E12, 0.06666666666666667], [1.7913693E12, 0.15], [1.79136972E12, 0.13333333333333333], [1.79136942E12, 0.2], [1.79137032E12, 0.08333333333333333], [1.79137002E12, 0.16666666666666666], [1.79137044E12, 0.15], [1.79137014E12, 0.2], [1.79136912E12, 0.2], [1.79136882E12, 0.08333333333333333], [1.79136924E12, 0.08333333333333333], [1.79136894E12, 0.18333333333333332], [1.79137056E12, 0.13333333333333333], [1.79136984E12, 0.15], [1.79136954E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79137062E12, "title": "Total Transactions Per Second"}},
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

