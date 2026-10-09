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
        data: {"result": {"minY": 123.0, "minX": 0.0, "maxY": 5056.0, "series": [{"data": [[0.0, 123.0], [0.1, 123.0], [0.2, 123.0], [0.3, 123.0], [0.4, 123.0], [0.5, 124.0], [0.6, 124.0], [0.7, 124.0], [0.8, 124.0], [0.9, 125.0], [1.0, 125.0], [1.1, 125.0], [1.2, 125.0], [1.3, 127.0], [1.4, 127.0], [1.5, 127.0], [1.6, 127.0], [1.7, 127.0], [1.8, 127.0], [1.9, 127.0], [2.0, 127.0], [2.1, 129.0], [2.2, 129.0], [2.3, 129.0], [2.4, 129.0], [2.5, 130.0], [2.6, 130.0], [2.7, 130.0], [2.8, 130.0], [2.9, 130.0], [3.0, 130.0], [3.1, 130.0], [3.2, 130.0], [3.3, 130.0], [3.4, 131.0], [3.5, 131.0], [3.6, 131.0], [3.7, 131.0], [3.8, 132.0], [3.9, 132.0], [4.0, 132.0], [4.1, 132.0], [4.2, 132.0], [4.3, 132.0], [4.4, 132.0], [4.5, 132.0], [4.6, 132.0], [4.7, 132.0], [4.8, 132.0], [4.9, 132.0], [5.0, 133.0], [5.1, 133.0], [5.2, 133.0], [5.3, 133.0], [5.4, 133.0], [5.5, 134.0], [5.6, 134.0], [5.7, 134.0], [5.8, 134.0], [5.9, 134.0], [6.0, 134.0], [6.1, 134.0], [6.2, 134.0], [6.3, 135.0], [6.4, 135.0], [6.5, 135.0], [6.6, 135.0], [6.7, 135.0], [6.8, 135.0], [6.9, 135.0], [7.0, 135.0], [7.1, 136.0], [7.2, 136.0], [7.3, 136.0], [7.4, 136.0], [7.5, 136.0], [7.6, 136.0], [7.7, 136.0], [7.8, 136.0], [7.9, 136.0], [8.0, 136.0], [8.1, 136.0], [8.2, 136.0], [8.3, 136.0], [8.4, 136.0], [8.5, 136.0], [8.6, 136.0], [8.7, 136.0], [8.8, 136.0], [8.9, 136.0], [9.0, 136.0], [9.1, 136.0], [9.2, 136.0], [9.3, 136.0], [9.4, 136.0], [9.5, 136.0], [9.6, 136.0], [9.7, 136.0], [9.8, 136.0], [9.9, 136.0], [10.0, 137.0], [10.1, 137.0], [10.2, 137.0], [10.3, 137.0], [10.4, 137.0], [10.5, 137.0], [10.6, 137.0], [10.7, 137.0], [10.8, 137.0], [10.9, 138.0], [11.0, 138.0], [11.1, 138.0], [11.2, 138.0], [11.3, 139.0], [11.4, 139.0], [11.5, 139.0], [11.6, 139.0], [11.7, 139.0], [11.8, 139.0], [11.9, 139.0], [12.0, 139.0], [12.1, 139.0], [12.2, 139.0], [12.3, 139.0], [12.4, 139.0], [12.5, 139.0], [12.6, 139.0], [12.7, 139.0], [12.8, 139.0], [12.9, 139.0], [13.0, 139.0], [13.1, 139.0], [13.2, 139.0], [13.3, 139.0], [13.4, 139.0], [13.5, 139.0], [13.6, 139.0], [13.7, 139.0], [13.8, 139.0], [13.9, 139.0], [14.0, 139.0], [14.1, 139.0], [14.2, 140.0], [14.3, 140.0], [14.4, 140.0], [14.5, 140.0], [14.6, 141.0], [14.7, 141.0], [14.8, 141.0], [14.9, 141.0], [15.0, 142.0], [15.1, 142.0], [15.2, 142.0], [15.3, 142.0], [15.4, 142.0], [15.5, 142.0], [15.6, 142.0], [15.7, 142.0], [15.8, 142.0], [15.9, 142.0], [16.0, 142.0], [16.1, 142.0], [16.2, 142.0], [16.3, 142.0], [16.4, 142.0], [16.5, 142.0], [16.6, 142.0], [16.7, 142.0], [16.8, 142.0], [16.9, 142.0], [17.0, 142.0], [17.1, 142.0], [17.2, 142.0], [17.3, 142.0], [17.4, 142.0], [17.5, 142.0], [17.6, 142.0], [17.7, 142.0], [17.8, 142.0], [17.9, 142.0], [18.0, 143.0], [18.1, 143.0], [18.2, 143.0], [18.3, 143.0], [18.4, 143.0], [18.5, 143.0], [18.6, 143.0], [18.7, 143.0], [18.8, 143.0], [18.9, 143.0], [19.0, 143.0], [19.1, 143.0], [19.2, 143.0], [19.3, 143.0], [19.4, 143.0], [19.5, 143.0], [19.6, 144.0], [19.7, 144.0], [19.8, 144.0], [19.9, 144.0], [20.0, 144.0], [20.1, 144.0], [20.2, 144.0], [20.3, 144.0], [20.4, 144.0], [20.5, 147.0], [20.6, 147.0], [20.7, 147.0], [20.8, 147.0], [20.9, 147.0], [21.0, 147.0], [21.1, 147.0], [21.2, 147.0], [21.3, 147.0], [21.4, 147.0], [21.5, 147.0], [21.6, 147.0], [21.7, 147.0], [21.8, 147.0], [21.9, 147.0], [22.0, 147.0], [22.1, 147.0], [22.2, 147.0], [22.3, 147.0], [22.4, 147.0], [22.5, 148.0], [22.6, 148.0], [22.7, 148.0], [22.8, 148.0], [22.9, 148.0], [23.0, 149.0], [23.1, 149.0], [23.2, 149.0], [23.3, 149.0], [23.4, 150.0], [23.5, 150.0], [23.6, 150.0], [23.7, 150.0], [23.8, 150.0], [23.9, 150.0], [24.0, 150.0], [24.1, 150.0], [24.2, 151.0], [24.3, 151.0], [24.4, 151.0], [24.5, 151.0], [24.6, 152.0], [24.7, 152.0], [24.8, 152.0], [24.9, 152.0], [25.0, 152.0], [25.1, 152.0], [25.2, 152.0], [25.3, 152.0], [25.4, 152.0], [25.5, 153.0], [25.6, 153.0], [25.7, 153.0], [25.8, 153.0], [25.9, 156.0], [26.0, 156.0], [26.1, 156.0], [26.2, 156.0], [26.3, 157.0], [26.4, 157.0], [26.5, 157.0], [26.6, 157.0], [26.7, 158.0], [26.8, 158.0], [26.9, 158.0], [27.0, 158.0], [27.1, 162.0], [27.2, 162.0], [27.3, 162.0], [27.4, 162.0], [27.5, 162.0], [27.6, 162.0], [27.7, 162.0], [27.8, 162.0], [27.9, 162.0], [28.0, 166.0], [28.1, 166.0], [28.2, 166.0], [28.3, 166.0], [28.4, 167.0], [28.5, 167.0], [28.6, 167.0], [28.7, 167.0], [28.8, 168.0], [28.9, 168.0], [29.0, 168.0], [29.1, 168.0], [29.2, 170.0], [29.3, 170.0], [29.4, 170.0], [29.5, 170.0], [29.6, 339.0], [29.7, 339.0], [29.8, 339.0], [29.9, 339.0], [30.0, 339.0], [30.1, 342.0], [30.2, 342.0], [30.3, 342.0], [30.4, 342.0], [30.5, 473.0], [30.6, 473.0], [30.7, 473.0], [30.8, 473.0], [30.9, 495.0], [31.0, 495.0], [31.1, 495.0], [31.2, 495.0], [31.3, 521.0], [31.4, 521.0], [31.5, 521.0], [31.6, 521.0], [31.7, 526.0], [31.8, 526.0], [31.9, 526.0], [32.0, 526.0], [32.1, 548.0], [32.2, 548.0], [32.3, 548.0], [32.4, 548.0], [32.5, 548.0], [32.6, 561.0], [32.7, 561.0], [32.8, 561.0], [32.9, 561.0], [33.0, 572.0], [33.1, 572.0], [33.2, 572.0], [33.3, 572.0], [33.4, 589.0], [33.5, 589.0], [33.6, 589.0], [33.7, 589.0], [33.8, 591.0], [33.9, 591.0], [34.0, 591.0], [34.1, 591.0], [34.2, 594.0], [34.3, 594.0], [34.4, 594.0], [34.5, 594.0], [34.6, 604.0], [34.7, 604.0], [34.8, 604.0], [34.9, 604.0], [35.0, 608.0], [35.1, 608.0], [35.2, 608.0], [35.3, 608.0], [35.4, 608.0], [35.5, 615.0], [35.6, 615.0], [35.7, 615.0], [35.8, 615.0], [35.9, 630.0], [36.0, 630.0], [36.1, 630.0], [36.2, 630.0], [36.3, 640.0], [36.4, 640.0], [36.5, 640.0], [36.6, 640.0], [36.7, 641.0], [36.8, 641.0], [36.9, 641.0], [37.0, 641.0], [37.1, 655.0], [37.2, 655.0], [37.3, 655.0], [37.4, 655.0], [37.5, 667.0], [37.6, 667.0], [37.7, 667.0], [37.8, 667.0], [37.9, 667.0], [38.0, 713.0], [38.1, 713.0], [38.2, 713.0], [38.3, 713.0], [38.4, 720.0], [38.5, 720.0], [38.6, 720.0], [38.7, 720.0], [38.8, 756.0], [38.9, 756.0], [39.0, 756.0], [39.1, 756.0], [39.2, 757.0], [39.3, 757.0], [39.4, 757.0], [39.5, 757.0], [39.6, 761.0], [39.7, 761.0], [39.8, 761.0], [39.9, 761.0], [40.0, 780.0], [40.1, 780.0], [40.2, 780.0], [40.3, 780.0], [40.4, 780.0], [40.5, 791.0], [40.6, 791.0], [40.7, 791.0], [40.8, 791.0], [40.9, 795.0], [41.0, 795.0], [41.1, 795.0], [41.2, 795.0], [41.3, 798.0], [41.4, 798.0], [41.5, 798.0], [41.6, 798.0], [41.7, 799.0], [41.8, 799.0], [41.9, 799.0], [42.0, 799.0], [42.1, 816.0], [42.2, 816.0], [42.3, 816.0], [42.4, 816.0], [42.5, 820.0], [42.6, 820.0], [42.7, 820.0], [42.8, 820.0], [42.9, 820.0], [43.0, 822.0], [43.1, 822.0], [43.2, 822.0], [43.3, 822.0], [43.4, 828.0], [43.5, 828.0], [43.6, 828.0], [43.7, 828.0], [43.8, 829.0], [43.9, 829.0], [44.0, 829.0], [44.1, 829.0], [44.2, 837.0], [44.3, 837.0], [44.4, 837.0], [44.5, 837.0], [44.6, 849.0], [44.7, 849.0], [44.8, 849.0], [44.9, 849.0], [45.0, 849.0], [45.1, 849.0], [45.2, 849.0], [45.3, 849.0], [45.4, 849.0], [45.5, 857.0], [45.6, 857.0], [45.7, 857.0], [45.8, 857.0], [45.9, 899.0], [46.0, 899.0], [46.1, 899.0], [46.2, 899.0], [46.3, 901.0], [46.4, 901.0], [46.5, 901.0], [46.6, 901.0], [46.7, 905.0], [46.8, 905.0], [46.9, 905.0], [47.0, 905.0], [47.1, 909.0], [47.2, 909.0], [47.3, 909.0], [47.4, 909.0], [47.5, 919.0], [47.6, 919.0], [47.7, 919.0], [47.8, 919.0], [47.9, 919.0], [48.0, 956.0], [48.1, 956.0], [48.2, 956.0], [48.3, 956.0], [48.4, 966.0], [48.5, 966.0], [48.6, 966.0], [48.7, 966.0], [48.8, 970.0], [48.9, 970.0], [49.0, 970.0], [49.1, 970.0], [49.2, 971.0], [49.3, 971.0], [49.4, 971.0], [49.5, 971.0], [49.6, 976.0], [49.7, 976.0], [49.8, 976.0], [49.9, 976.0], [50.0, 981.0], [50.1, 981.0], [50.2, 981.0], [50.3, 981.0], [50.4, 981.0], [50.5, 987.0], [50.6, 987.0], [50.7, 987.0], [50.8, 987.0], [50.9, 1002.0], [51.0, 1002.0], [51.1, 1002.0], [51.2, 1002.0], [51.3, 1034.0], [51.4, 1034.0], [51.5, 1034.0], [51.6, 1034.0], [51.7, 1048.0], [51.8, 1048.0], [51.9, 1048.0], [52.0, 1048.0], [52.1, 1055.0], [52.2, 1055.0], [52.3, 1055.0], [52.4, 1055.0], [52.5, 1059.0], [52.6, 1059.0], [52.7, 1059.0], [52.8, 1059.0], [52.9, 1059.0], [53.0, 1065.0], [53.1, 1065.0], [53.2, 1065.0], [53.3, 1065.0], [53.4, 1076.0], [53.5, 1076.0], [53.6, 1076.0], [53.7, 1076.0], [53.8, 1078.0], [53.9, 1078.0], [54.0, 1078.0], [54.1, 1078.0], [54.2, 1104.0], [54.3, 1104.0], [54.4, 1104.0], [54.5, 1104.0], [54.6, 1126.0], [54.7, 1126.0], [54.8, 1126.0], [54.9, 1126.0], [55.0, 1129.0], [55.1, 1129.0], [55.2, 1129.0], [55.3, 1129.0], [55.4, 1129.0], [55.5, 1130.0], [55.6, 1130.0], [55.7, 1130.0], [55.8, 1130.0], [55.9, 1132.0], [56.0, 1132.0], [56.1, 1132.0], [56.2, 1132.0], [56.3, 1167.0], [56.4, 1167.0], [56.5, 1167.0], [56.6, 1167.0], [56.7, 1180.0], [56.8, 1180.0], [56.9, 1180.0], [57.0, 1180.0], [57.1, 1197.0], [57.2, 1197.0], [57.3, 1197.0], [57.4, 1197.0], [57.5, 1204.0], [57.6, 1204.0], [57.7, 1204.0], [57.8, 1204.0], [57.9, 1204.0], [58.0, 1209.0], [58.1, 1209.0], [58.2, 1209.0], [58.3, 1209.0], [58.4, 1240.0], [58.5, 1240.0], [58.6, 1240.0], [58.7, 1240.0], [58.8, 1246.0], [58.9, 1246.0], [59.0, 1246.0], [59.1, 1246.0], [59.2, 1254.0], [59.3, 1254.0], [59.4, 1254.0], [59.5, 1254.0], [59.6, 1289.0], [59.7, 1289.0], [59.8, 1289.0], [59.9, 1289.0], [60.0, 1300.0], [60.1, 1300.0], [60.2, 1300.0], [60.3, 1300.0], [60.4, 1300.0], [60.5, 1305.0], [60.6, 1305.0], [60.7, 1305.0], [60.8, 1305.0], [60.9, 1317.0], [61.0, 1317.0], [61.1, 1317.0], [61.2, 1317.0], [61.3, 1330.0], [61.4, 1330.0], [61.5, 1330.0], [61.6, 1330.0], [61.7, 1345.0], [61.8, 1345.0], [61.9, 1345.0], [62.0, 1345.0], [62.1, 1345.0], [62.2, 1345.0], [62.3, 1345.0], [62.4, 1345.0], [62.5, 1388.0], [62.6, 1388.0], [62.7, 1388.0], [62.8, 1388.0], [62.9, 1388.0], [63.0, 1396.0], [63.1, 1396.0], [63.2, 1396.0], [63.3, 1396.0], [63.4, 1407.0], [63.5, 1407.0], [63.6, 1407.0], [63.7, 1407.0], [63.8, 1436.0], [63.9, 1436.0], [64.0, 1436.0], [64.1, 1436.0], [64.2, 1446.0], [64.3, 1446.0], [64.4, 1446.0], [64.5, 1446.0], [64.6, 1467.0], [64.7, 1467.0], [64.8, 1467.0], [64.9, 1467.0], [65.0, 1471.0], [65.1, 1471.0], [65.2, 1471.0], [65.3, 1471.0], [65.4, 1471.0], [65.5, 1490.0], [65.6, 1490.0], [65.7, 1490.0], [65.8, 1490.0], [65.9, 1497.0], [66.0, 1497.0], [66.1, 1497.0], [66.2, 1497.0], [66.3, 1499.0], [66.4, 1499.0], [66.5, 1499.0], [66.6, 1499.0], [66.7, 1500.0], [66.8, 1500.0], [66.9, 1500.0], [67.0, 1500.0], [67.1, 1507.0], [67.2, 1507.0], [67.3, 1507.0], [67.4, 1507.0], [67.5, 1520.0], [67.6, 1520.0], [67.7, 1520.0], [67.8, 1520.0], [67.9, 1520.0], [68.0, 1541.0], [68.1, 1541.0], [68.2, 1541.0], [68.3, 1541.0], [68.4, 1544.0], [68.5, 1544.0], [68.6, 1544.0], [68.7, 1544.0], [68.8, 1546.0], [68.9, 1546.0], [69.0, 1546.0], [69.1, 1546.0], [69.2, 1547.0], [69.3, 1547.0], [69.4, 1547.0], [69.5, 1547.0], [69.6, 1582.0], [69.7, 1582.0], [69.8, 1582.0], [69.9, 1582.0], [70.0, 1630.0], [70.1, 1630.0], [70.2, 1630.0], [70.3, 1630.0], [70.4, 1630.0], [70.5, 1672.0], [70.6, 1672.0], [70.7, 1672.0], [70.8, 1672.0], [70.9, 1685.0], [71.0, 1685.0], [71.1, 1685.0], [71.2, 1685.0], [71.3, 1706.0], [71.4, 1706.0], [71.5, 1706.0], [71.6, 1706.0], [71.7, 1711.0], [71.8, 1711.0], [71.9, 1711.0], [72.0, 1711.0], [72.1, 1715.0], [72.2, 1715.0], [72.3, 1715.0], [72.4, 1715.0], [72.5, 1726.0], [72.6, 1726.0], [72.7, 1726.0], [72.8, 1726.0], [72.9, 1726.0], [73.0, 1727.0], [73.1, 1727.0], [73.2, 1727.0], [73.3, 1727.0], [73.4, 1734.0], [73.5, 1734.0], [73.6, 1734.0], [73.7, 1734.0], [73.8, 1740.0], [73.9, 1740.0], [74.0, 1740.0], [74.1, 1740.0], [74.2, 1741.0], [74.3, 1741.0], [74.4, 1741.0], [74.5, 1741.0], [74.6, 1744.0], [74.7, 1744.0], [74.8, 1744.0], [74.9, 1744.0], [75.0, 1770.0], [75.1, 1770.0], [75.2, 1770.0], [75.3, 1770.0], [75.4, 1770.0], [75.5, 1774.0], [75.6, 1774.0], [75.7, 1774.0], [75.8, 1774.0], [75.9, 1774.0], [76.0, 1774.0], [76.1, 1774.0], [76.2, 1774.0], [76.3, 1793.0], [76.4, 1793.0], [76.5, 1793.0], [76.6, 1793.0], [76.7, 1829.0], [76.8, 1829.0], [76.9, 1829.0], [77.0, 1829.0], [77.1, 1838.0], [77.2, 1838.0], [77.3, 1838.0], [77.4, 1838.0], [77.5, 1866.0], [77.6, 1866.0], [77.7, 1866.0], [77.8, 1866.0], [77.9, 1866.0], [78.0, 1875.0], [78.1, 1875.0], [78.2, 1875.0], [78.3, 1875.0], [78.4, 1883.0], [78.5, 1883.0], [78.6, 1883.0], [78.7, 1883.0], [78.8, 1883.0], [78.9, 1883.0], [79.0, 1883.0], [79.1, 1883.0], [79.2, 1892.0], [79.3, 1892.0], [79.4, 1892.0], [79.5, 1892.0], [79.6, 1902.0], [79.7, 1902.0], [79.8, 1902.0], [79.9, 1902.0], [80.0, 1909.0], [80.1, 1909.0], [80.2, 1909.0], [80.3, 1909.0], [80.4, 1909.0], [80.5, 1909.0], [80.6, 1909.0], [80.7, 1909.0], [80.8, 1909.0], [80.9, 1926.0], [81.0, 1926.0], [81.1, 1926.0], [81.2, 1926.0], [81.3, 1941.0], [81.4, 1941.0], [81.5, 1941.0], [81.6, 1941.0], [81.7, 1959.0], [81.8, 1959.0], [81.9, 1959.0], [82.0, 1959.0], [82.1, 1984.0], [82.2, 1984.0], [82.3, 1984.0], [82.4, 1984.0], [82.5, 1984.0], [82.6, 1997.0], [82.7, 1997.0], [82.8, 1997.0], [82.9, 1997.0], [83.0, 2000.0], [83.1, 2000.0], [83.2, 2000.0], [83.3, 2000.0], [83.4, 2010.0], [83.5, 2010.0], [83.6, 2010.0], [83.7, 2010.0], [83.8, 2030.0], [83.9, 2030.0], [84.0, 2030.0], [84.1, 2030.0], [84.2, 2086.0], [84.3, 2086.0], [84.4, 2086.0], [84.5, 2086.0], [84.6, 2097.0], [84.7, 2097.0], [84.8, 2097.0], [84.9, 2097.0], [85.0, 2097.0], [85.1, 2152.0], [85.2, 2152.0], [85.3, 2152.0], [85.4, 2152.0], [85.5, 2152.0], [85.6, 2152.0], [85.7, 2152.0], [85.8, 2152.0], [85.9, 2181.0], [86.0, 2181.0], [86.1, 2181.0], [86.2, 2181.0], [86.3, 2214.0], [86.4, 2214.0], [86.5, 2214.0], [86.6, 2214.0], [86.7, 2225.0], [86.8, 2225.0], [86.9, 2225.0], [87.0, 2225.0], [87.1, 2257.0], [87.2, 2257.0], [87.3, 2257.0], [87.4, 2257.0], [87.5, 2257.0], [87.6, 2275.0], [87.7, 2275.0], [87.8, 2275.0], [87.9, 2275.0], [88.0, 2290.0], [88.1, 2290.0], [88.2, 2290.0], [88.3, 2290.0], [88.4, 2303.0], [88.5, 2303.0], [88.6, 2303.0], [88.7, 2303.0], [88.8, 2313.0], [88.9, 2313.0], [89.0, 2313.0], [89.1, 2313.0], [89.2, 2351.0], [89.3, 2351.0], [89.4, 2351.0], [89.5, 2351.0], [89.6, 2414.0], [89.7, 2414.0], [89.8, 2414.0], [89.9, 2414.0], [90.0, 2414.0], [90.1, 2419.0], [90.2, 2419.0], [90.3, 2419.0], [90.4, 2419.0], [90.5, 2458.0], [90.6, 2458.0], [90.7, 2458.0], [90.8, 2458.0], [90.9, 2553.0], [91.0, 2553.0], [91.1, 2553.0], [91.2, 2553.0], [91.3, 2582.0], [91.4, 2582.0], [91.5, 2582.0], [91.6, 2582.0], [91.7, 2639.0], [91.8, 2639.0], [91.9, 2639.0], [92.0, 2639.0], [92.1, 2656.0], [92.2, 2656.0], [92.3, 2656.0], [92.4, 2656.0], [92.5, 2656.0], [92.6, 2667.0], [92.7, 2667.0], [92.8, 2667.0], [92.9, 2667.0], [93.0, 2674.0], [93.1, 2674.0], [93.2, 2674.0], [93.3, 2674.0], [93.4, 2779.0], [93.5, 2779.0], [93.6, 2779.0], [93.7, 2779.0], [93.8, 2841.0], [93.9, 2841.0], [94.0, 2841.0], [94.1, 2841.0], [94.2, 2849.0], [94.3, 2849.0], [94.4, 2849.0], [94.5, 2849.0], [94.6, 2852.0], [94.7, 2852.0], [94.8, 2852.0], [94.9, 2852.0], [95.0, 2852.0], [95.1, 2946.0], [95.2, 2946.0], [95.3, 2946.0], [95.4, 2946.0], [95.5, 3006.0], [95.6, 3006.0], [95.7, 3006.0], [95.8, 3006.0], [95.9, 3137.0], [96.0, 3137.0], [96.1, 3137.0], [96.2, 3137.0], [96.3, 3483.0], [96.4, 3483.0], [96.5, 3483.0], [96.6, 3483.0], [96.7, 3532.0], [96.8, 3532.0], [96.9, 3532.0], [97.0, 3532.0], [97.1, 3539.0], [97.2, 3539.0], [97.3, 3539.0], [97.4, 3539.0], [97.5, 3539.0], [97.6, 3748.0], [97.7, 3748.0], [97.8, 3748.0], [97.9, 3748.0], [98.0, 3988.0], [98.1, 3988.0], [98.2, 3988.0], [98.3, 3988.0], [98.4, 4544.0], [98.5, 4544.0], [98.6, 4544.0], [98.7, 4544.0], [98.8, 4714.0], [98.9, 4714.0], [99.0, 4714.0], [99.1, 4714.0], [99.2, 4735.0], [99.3, 4735.0], [99.4, 4735.0], [99.5, 4735.0], [99.6, 5056.0], [99.7, 5056.0], [99.8, 5056.0], [99.9, 5056.0], [100.0, 5056.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 71.0, "series": [{"data": [[600.0, 8.0], [700.0, 10.0], [800.0, 10.0], [900.0, 11.0], [1000.0, 8.0], [1100.0, 8.0], [1200.0, 6.0], [1300.0, 8.0], [1400.0, 8.0], [1500.0, 8.0], [100.0, 71.0], [1600.0, 3.0], [1700.0, 13.0], [1800.0, 7.0], [1900.0, 8.0], [2000.0, 5.0], [2100.0, 3.0], [2300.0, 3.0], [2200.0, 5.0], [2400.0, 3.0], [2500.0, 2.0], [2600.0, 4.0], [2700.0, 1.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3700.0, 1.0], [3900.0, 1.0], [4500.0, 1.0], [4700.0, 2.0], [300.0, 2.0], [5000.0, 1.0], [400.0, 2.0], [500.0, 8.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 86.0, "series": [{"data": [[0.0, 75.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 86.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 79.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7913669E12, "maxY": 1.8181818181818186, "series": [{"data": [[1.79136774E12, 1.0], [1.79136804E12, 1.1428571428571428], [1.79136864E12, 1.2857142857142856], [1.79136834E12, 1.1666666666666665], [1.79136846E12, 1.2857142857142856], [1.79136714E12, 1.0], [1.79136744E12, 1.0], [1.79136726E12, 1.1666666666666665], [1.79136756E12, 1.1666666666666665], [1.79136786E12, 1.25], [1.79136816E12, 1.0], [1.79136798E12, 1.0], [1.79136828E12, 1.125], [1.79136696E12, 1.0], [1.79136858E12, 1.0], [1.79136708E12, 1.090909090909091], [1.7913687E12, 1.0], [1.79136738E12, 1.1818181818181819], [1.79136768E12, 1.125], [1.7913675E12, 1.0], [1.7913678E12, 1.1], [1.7913684E12, 1.0], [1.7913681E12, 1.0], [1.79136852E12, 1.375], [1.79136822E12, 1.0], [1.7913669E12, 1.0], [1.7913672E12, 1.8181818181818186], [1.79136702E12, 1.0], [1.79136732E12, 1.2999999999999998], [1.79136762E12, 1.0], [1.79136792E12, 1.2000000000000002]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913687E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1073.9295774647892, "minX": 1.0, "maxY": 3532.0, "series": [{"data": [[1.0, 1073.9295774647892], [2.0, 1540.6363636363633], [4.0, 3532.0], [3.0, 3344.5]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[1.1375, 1164.7958333333343]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9.233333333333333, "minX": 1.7913669E12, "maxY": 228.7, "series": [{"data": [[1.79136774E12, 18.616666666666667], [1.79136804E12, 21.666666666666668], [1.79136864E12, 21.866666666666667], [1.79136834E12, 18.5], [1.79136846E12, 21.866666666666667], [1.79136714E12, 27.85], [1.79136744E12, 12.75], [1.79136726E12, 18.8], [1.79136756E12, 18.616666666666667], [1.79136786E12, 25.133333333333333], [1.79136816E12, 18.916666666666668], [1.79136798E12, 12.45], [1.79136828E12, 24.983333333333334], [1.79136696E12, 34.31666666666667], [1.79136858E12, 18.683333333333334], [1.79136708E12, 34.333333333333336], [1.7913687E12, 31.383333333333333], [1.79136738E12, 34.833333333333336], [1.79136768E12, 24.566666666666666], [1.7913675E12, 28.716666666666665], [1.7913678E12, 31.15], [1.7913684E12, 21.816666666666666], [1.7913681E12, 21.733333333333334], [1.79136852E12, 25.216666666666665], [1.79136822E12, 18.983333333333334], [1.7913669E12, 9.233333333333333], [1.7913672E12, 34.15], [1.79136702E12, 27.866666666666667], [1.79136732E12, 31.283333333333335], [1.79136762E12, 28.416666666666668], [1.79136792E12, 31.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79136774E12, 104.58333333333333], [1.79136804E12, 133.5], [1.79136864E12, 131.2], [1.79136834E12, 125.2], [1.79136846E12, 114.1], [1.79136714E12, 118.45], [1.79136744E12, 81.88333333333334], [1.79136726E12, 129.7], [1.79136756E12, 93.86666666666666], [1.79136786E12, 138.55], [1.79136816E12, 126.3], [1.79136798E12, 63.7], [1.79136828E12, 152.4], [1.79136696E12, 227.48333333333332], [1.79136858E12, 136.41666666666666], [1.79136708E12, 199.46666666666667], [1.7913687E12, 203.35], [1.79136738E12, 199.51666666666668], [1.79136768E12, 151.83333333333334], [1.7913675E12, 149.38333333333333], [1.7913678E12, 176.03333333333333], [1.7913684E12, 128.08333333333334], [1.7913681E12, 95.45], [1.79136852E12, 184.93333333333334], [1.79136822E12, 110.93333333333334], [1.7913669E12, 23.15], [1.7913672E12, 218.1], [1.79136702E12, 178.56666666666666], [1.79136732E12, 228.7], [1.79136762E12, 166.9], [1.79136792E12, 211.41666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913687E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 393.0, "minX": 1.7913669E12, "maxY": 2839.363636363637, "series": [{"data": [[1.79136774E12, 1046.3333333333333], [1.79136804E12, 1026.4285714285713], [1.79136864E12, 982.4285714285714], [1.79136834E12, 2191.3333333333335], [1.79136846E12, 1329.0], [1.79136714E12, 1155.6666666666667], [1.79136744E12, 393.0], [1.79136726E12, 1452.0], [1.79136756E12, 935.6666666666666], [1.79136786E12, 1300.5], [1.79136816E12, 1120.0], [1.79136798E12, 854.5], [1.79136828E12, 900.25], [1.79136696E12, 972.7272727272727], [1.79136858E12, 682.8333333333334], [1.79136708E12, 1305.090909090909], [1.7913687E12, 1057.6], [1.79136738E12, 1094.3636363636365], [1.79136768E12, 982.6250000000001], [1.7913675E12, 1254.3333333333333], [1.7913678E12, 1280.1999999999998], [1.7913684E12, 688.7142857142858], [1.7913681E12, 1080.0], [1.79136852E12, 801.5], [1.79136822E12, 1491.8333333333333], [1.7913669E12, 708.3333333333334], [1.7913672E12, 2839.363636363637], [1.79136702E12, 861.4444444444445], [1.79136732E12, 1282.0], [1.79136762E12, 613.0], [1.79136792E12, 1180.6000000000001]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913687E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 393.0, "minX": 1.7913669E12, "maxY": 2839.272727272727, "series": [{"data": [[1.79136774E12, 1046.3333333333333], [1.79136804E12, 1026.4285714285713], [1.79136864E12, 982.4285714285714], [1.79136834E12, 2191.3333333333335], [1.79136846E12, 1329.0], [1.79136714E12, 1155.6666666666667], [1.79136744E12, 393.0], [1.79136726E12, 1451.8333333333335], [1.79136756E12, 935.5], [1.79136786E12, 1300.5], [1.79136816E12, 1120.0], [1.79136798E12, 854.5], [1.79136828E12, 900.25], [1.79136696E12, 972.3636363636363], [1.79136858E12, 682.8333333333334], [1.79136708E12, 1305.0], [1.7913687E12, 1057.6], [1.79136738E12, 1094.3636363636365], [1.79136768E12, 982.6250000000001], [1.7913675E12, 1254.3333333333333], [1.7913678E12, 1280.1], [1.7913684E12, 688.7142857142858], [1.7913681E12, 1080.0], [1.79136852E12, 801.5], [1.79136822E12, 1491.8333333333333], [1.7913669E12, 708.3333333333334], [1.7913672E12, 2839.272727272727], [1.79136702E12, 861.2222222222222], [1.79136732E12, 1282.0], [1.79136762E12, 613.0], [1.79136792E12, 1180.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913687E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.7913669E12, "maxY": 20.0, "series": [{"data": [[1.79136774E12, 9.166666666666666], [1.79136804E12, 8.857142857142858], [1.79136864E12, 7.999999999999999], [1.79136834E12, 8.833333333333334], [1.79136846E12, 8.714285714285715], [1.79136714E12, 8.777777777777779], [1.79136744E12, 7.0], [1.79136726E12, 7.833333333333333], [1.79136756E12, 8.5], [1.79136786E12, 9.75], [1.79136816E12, 10.5], [1.79136798E12, 10.5], [1.79136828E12, 8.25], [1.79136696E12, 9.181818181818182], [1.79136858E12, 9.333333333333332], [1.79136708E12, 8.363636363636363], [1.7913687E12, 8.0], [1.79136738E12, 8.636363636363637], [1.79136768E12, 7.5], [1.7913675E12, 8.88888888888889], [1.7913678E12, 8.3], [1.7913684E12, 9.0], [1.7913681E12, 8.857142857142858], [1.79136852E12, 8.125], [1.79136822E12, 9.0], [1.7913669E12, 20.0], [1.7913672E12, 9.090909090909092], [1.79136702E12, 10.777777777777779], [1.79136732E12, 8.4], [1.79136762E12, 10.0], [1.79136792E12, 8.9]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913687E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 123.0, "minX": 1.7913669E12, "maxY": 5056.0, "series": [{"data": [[1.79136774E12, 2849.0], [1.79136804E12, 1984.0], [1.79136864E12, 2010.0], [1.79136834E12, 3988.0], [1.79136846E12, 3748.0], [1.79136714E12, 2313.0], [1.79136744E12, 1132.0], [1.79136726E12, 3137.0], [1.79136756E12, 1866.0], [1.79136786E12, 2419.0], [1.79136816E12, 3006.0], [1.79136798E12, 1941.0], [1.79136828E12, 2414.0], [1.79136696E12, 2779.0], [1.79136858E12, 2458.0], [1.79136708E12, 2946.0], [1.7913687E12, 2290.0], [1.79136738E12, 2225.0], [1.79136768E12, 2181.0], [1.7913675E12, 2257.0], [1.7913678E12, 2582.0], [1.7913684E12, 1959.0], [1.7913681E12, 1926.0], [1.79136852E12, 1715.0], [1.79136822E12, 3483.0], [1.7913669E12, 761.0], [1.7913672E12, 5056.0], [1.79136702E12, 2097.0], [1.79136732E12, 2656.0], [1.79136762E12, 1685.0], [1.79136792E12, 2852.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79136774E12, 2849.0], [1.79136804E12, 1984.0], [1.79136864E12, 2010.0], [1.79136834E12, 3988.0], [1.79136846E12, 3748.0], [1.79136714E12, 2313.0], [1.79136744E12, 1132.0], [1.79136726E12, 3137.0], [1.79136756E12, 1866.0], [1.79136786E12, 2419.0], [1.79136816E12, 3006.0], [1.79136798E12, 1941.0], [1.79136828E12, 2414.0], [1.79136696E12, 2683.8], [1.79136858E12, 2458.0], [1.79136708E12, 2884.6000000000004], [1.7913687E12, 2276.2], [1.79136738E12, 2134.8], [1.79136768E12, 2181.0], [1.7913675E12, 2257.0], [1.7913678E12, 2523.8], [1.7913684E12, 1959.0], [1.7913681E12, 1926.0], [1.79136852E12, 1715.0], [1.79136822E12, 3483.0], [1.7913669E12, 761.0], [1.7913672E12, 4991.8], [1.79136702E12, 2097.0], [1.79136732E12, 2645.7], [1.79136762E12, 1685.0], [1.79136792E12, 2833.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79136774E12, 2849.0], [1.79136804E12, 1984.0], [1.79136864E12, 2010.0], [1.79136834E12, 3988.0], [1.79136846E12, 3748.0], [1.79136714E12, 2313.0], [1.79136744E12, 1132.0], [1.79136726E12, 3137.0], [1.79136756E12, 1866.0], [1.79136786E12, 2419.0], [1.79136816E12, 3006.0], [1.79136798E12, 1941.0], [1.79136828E12, 2414.0], [1.79136696E12, 2779.0], [1.79136858E12, 2458.0], [1.79136708E12, 2946.0], [1.7913687E12, 2290.0], [1.79136738E12, 2225.0], [1.79136768E12, 2181.0], [1.7913675E12, 2257.0], [1.7913678E12, 2582.0], [1.7913684E12, 1959.0], [1.7913681E12, 1926.0], [1.79136852E12, 1715.0], [1.79136822E12, 3483.0], [1.7913669E12, 761.0], [1.7913672E12, 5056.0], [1.79136702E12, 2097.0], [1.79136732E12, 2656.0], [1.79136762E12, 1685.0], [1.79136792E12, 2852.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79136774E12, 2849.0], [1.79136804E12, 1984.0], [1.79136864E12, 2010.0], [1.79136834E12, 3988.0], [1.79136846E12, 3748.0], [1.79136714E12, 2313.0], [1.79136744E12, 1132.0], [1.79136726E12, 3137.0], [1.79136756E12, 1866.0], [1.79136786E12, 2419.0], [1.79136816E12, 3006.0], [1.79136798E12, 1941.0], [1.79136828E12, 2414.0], [1.79136696E12, 2779.0], [1.79136858E12, 2458.0], [1.79136708E12, 2946.0], [1.7913687E12, 2290.0], [1.79136738E12, 2225.0], [1.79136768E12, 2181.0], [1.7913675E12, 2257.0], [1.7913678E12, 2582.0], [1.7913684E12, 1959.0], [1.7913681E12, 1926.0], [1.79136852E12, 1715.0], [1.79136822E12, 3483.0], [1.7913669E12, 761.0], [1.7913672E12, 5056.0], [1.79136702E12, 2097.0], [1.79136732E12, 2656.0], [1.79136762E12, 1685.0], [1.79136792E12, 2852.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79136774E12, 127.0], [1.79136804E12, 130.0], [1.79136864E12, 139.0], [1.79136834E12, 798.0], [1.79136846E12, 132.0], [1.79136714E12, 134.0], [1.79136744E12, 135.0], [1.79136726E12, 143.0], [1.79136756E12, 140.0], [1.79136786E12, 139.0], [1.79136816E12, 136.0], [1.79136798E12, 135.0], [1.79136828E12, 125.0], [1.79136696E12, 139.0], [1.79136858E12, 136.0], [1.79136708E12, 134.0], [1.7913687E12, 129.0], [1.79136738E12, 139.0], [1.79136768E12, 137.0], [1.7913675E12, 150.0], [1.7913678E12, 124.0], [1.7913684E12, 133.0], [1.7913681E12, 127.0], [1.79136852E12, 130.0], [1.79136822E12, 123.0], [1.7913669E12, 608.0], [1.7913672E12, 162.0], [1.79136702E12, 138.0], [1.79136732E12, 137.0], [1.79136762E12, 142.0], [1.79136792E12, 132.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79136774E12, 799.5], [1.79136804E12, 987.0], [1.79136864E12, 837.0], [1.79136834E12, 1987.0], [1.79136846E12, 966.0], [1.79136714E12, 1076.0], [1.79136744E12, 152.5], [1.79136726E12, 1464.5], [1.79136756E12, 671.5], [1.79136786E12, 1522.5], [1.79136816E12, 866.5], [1.79136798E12, 671.0], [1.79136828E12, 984.0], [1.79136696E12, 757.0], [1.79136858E12, 149.5], [1.79136708E12, 1289.0], [1.7913687E12, 980.0], [1.79136738E12, 1167.0], [1.79136768E12, 774.0], [1.7913675E12, 1436.0], [1.7913678E12, 1237.0], [1.7913684E12, 170.0], [1.7913681E12, 795.0], [1.79136852E12, 764.5], [1.79136822E12, 1442.5], [1.7913669E12, 756.0], [1.7913672E12, 2841.0], [1.79136702E12, 780.0], [1.79136732E12, 1151.0], [1.79136762E12, 168.0], [1.79136792E12, 862.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913687E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 495.0, "minX": 1.0, "maxY": 1349.5, "series": [{"data": [[1.0, 966.0], [2.0, 1349.5], [3.0, 495.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 495.0, "minX": 1.0, "maxY": 1349.5, "series": [{"data": [[1.0, 966.0], [2.0, 1349.5], [3.0, 495.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7913669E12, "maxY": 0.18333333333333332, "series": [{"data": [[1.79136774E12, 0.1], [1.79136804E12, 0.11666666666666667], [1.79136864E12, 0.11666666666666667], [1.79136834E12, 0.1], [1.79136846E12, 0.13333333333333333], [1.79136714E12, 0.15], [1.79136744E12, 0.06666666666666667], [1.79136726E12, 0.1], [1.79136756E12, 0.1], [1.79136786E12, 0.13333333333333333], [1.79136816E12, 0.1], [1.79136798E12, 0.06666666666666667], [1.79136828E12, 0.11666666666666667], [1.79136696E12, 0.18333333333333332], [1.79136858E12, 0.08333333333333333], [1.79136708E12, 0.18333333333333332], [1.7913687E12, 0.16666666666666666], [1.79136738E12, 0.18333333333333332], [1.79136768E12, 0.13333333333333333], [1.7913675E12, 0.15], [1.7913678E12, 0.16666666666666666], [1.7913684E12, 0.11666666666666667], [1.7913681E12, 0.11666666666666667], [1.79136852E12, 0.13333333333333333], [1.79136822E12, 0.11666666666666667], [1.7913669E12, 0.05], [1.7913672E12, 0.18333333333333332], [1.79136702E12, 0.15], [1.79136732E12, 0.16666666666666666], [1.79136762E12, 0.15], [1.79136792E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913687E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7913669E12, "maxY": 0.18333333333333332, "series": [{"data": [[1.79136774E12, 0.1], [1.79136804E12, 0.11666666666666667], [1.79136864E12, 0.11666666666666667], [1.79136834E12, 0.1], [1.79136846E12, 0.11666666666666667], [1.79136714E12, 0.15], [1.79136744E12, 0.06666666666666667], [1.79136726E12, 0.1], [1.79136756E12, 0.1], [1.79136786E12, 0.13333333333333333], [1.79136816E12, 0.1], [1.79136798E12, 0.06666666666666667], [1.79136828E12, 0.13333333333333333], [1.79136696E12, 0.18333333333333332], [1.79136858E12, 0.1], [1.79136708E12, 0.18333333333333332], [1.7913687E12, 0.16666666666666666], [1.79136738E12, 0.18333333333333332], [1.79136768E12, 0.13333333333333333], [1.7913675E12, 0.15], [1.7913678E12, 0.16666666666666666], [1.7913684E12, 0.11666666666666667], [1.7913681E12, 0.11666666666666667], [1.79136852E12, 0.13333333333333333], [1.79136822E12, 0.1], [1.7913669E12, 0.05], [1.7913672E12, 0.18333333333333332], [1.79136702E12, 0.15], [1.79136732E12, 0.16666666666666666], [1.79136762E12, 0.15], [1.79136792E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7913687E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7913669E12, "maxY": 0.18333333333333332, "series": [{"data": [[1.79136774E12, 0.1], [1.79136804E12, 0.11666666666666667], [1.79136864E12, 0.11666666666666667], [1.79136834E12, 0.1], [1.79136846E12, 0.11666666666666667], [1.79136714E12, 0.15], [1.79136744E12, 0.06666666666666667], [1.79136726E12, 0.1], [1.79136756E12, 0.1], [1.79136786E12, 0.13333333333333333], [1.79136816E12, 0.1], [1.79136798E12, 0.06666666666666667], [1.79136828E12, 0.13333333333333333], [1.79136696E12, 0.18333333333333332], [1.79136858E12, 0.1], [1.79136708E12, 0.18333333333333332], [1.7913687E12, 0.16666666666666666], [1.79136738E12, 0.18333333333333332], [1.79136768E12, 0.13333333333333333], [1.7913675E12, 0.15], [1.7913678E12, 0.16666666666666666], [1.7913684E12, 0.11666666666666667], [1.7913681E12, 0.11666666666666667], [1.79136852E12, 0.13333333333333333], [1.79136822E12, 0.1], [1.7913669E12, 0.05], [1.7913672E12, 0.18333333333333332], [1.79136702E12, 0.15], [1.79136732E12, 0.16666666666666666], [1.79136762E12, 0.15], [1.79136792E12, 0.16666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913687E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7913669E12, "maxY": 0.18333333333333332, "series": [{"data": [[1.79136774E12, 0.1], [1.79136804E12, 0.11666666666666667], [1.79136864E12, 0.11666666666666667], [1.79136834E12, 0.1], [1.79136846E12, 0.11666666666666667], [1.79136714E12, 0.15], [1.79136744E12, 0.06666666666666667], [1.79136726E12, 0.1], [1.79136756E12, 0.1], [1.79136786E12, 0.13333333333333333], [1.79136816E12, 0.1], [1.79136798E12, 0.06666666666666667], [1.79136828E12, 0.13333333333333333], [1.79136696E12, 0.18333333333333332], [1.79136858E12, 0.1], [1.79136708E12, 0.18333333333333332], [1.7913687E12, 0.16666666666666666], [1.79136738E12, 0.18333333333333332], [1.79136768E12, 0.13333333333333333], [1.7913675E12, 0.15], [1.7913678E12, 0.16666666666666666], [1.7913684E12, 0.11666666666666667], [1.7913681E12, 0.11666666666666667], [1.79136852E12, 0.13333333333333333], [1.79136822E12, 0.1], [1.7913669E12, 0.05], [1.7913672E12, 0.18333333333333332], [1.79136702E12, 0.15], [1.79136732E12, 0.16666666666666666], [1.79136762E12, 0.15], [1.79136792E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7913687E12, "title": "Total Transactions Per Second"}},
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

