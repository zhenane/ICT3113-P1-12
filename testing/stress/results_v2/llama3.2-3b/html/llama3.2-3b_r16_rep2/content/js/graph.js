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
        data: {"result": {"minY": 1047.0, "minX": 0.0, "maxY": 22332.0, "series": [{"data": [[0.0, 1047.0], [0.1, 1047.0], [0.2, 1047.0], [0.3, 1047.0], [0.4, 1047.0], [0.5, 1047.0], [0.6, 1047.0], [0.7, 1047.0], [0.8, 1047.0], [0.9, 1047.0], [1.0, 1047.0], [1.1, 1047.0], [1.2, 1047.0], [1.3, 1065.0], [1.4, 1065.0], [1.5, 1065.0], [1.6, 1065.0], [1.7, 1065.0], [1.8, 1065.0], [1.9, 1065.0], [2.0, 1065.0], [2.1, 1065.0], [2.2, 1065.0], [2.3, 1065.0], [2.4, 1065.0], [2.5, 1069.0], [2.6, 1069.0], [2.7, 1069.0], [2.8, 1069.0], [2.9, 1069.0], [3.0, 1069.0], [3.1, 1069.0], [3.2, 1069.0], [3.3, 1069.0], [3.4, 1069.0], [3.5, 1069.0], [3.6, 1069.0], [3.7, 1069.0], [3.8, 1272.0], [3.9, 1272.0], [4.0, 1272.0], [4.1, 1272.0], [4.2, 1272.0], [4.3, 1272.0], [4.4, 1272.0], [4.5, 1272.0], [4.6, 1272.0], [4.7, 1272.0], [4.8, 1272.0], [4.9, 1272.0], [5.0, 1613.0], [5.1, 1613.0], [5.2, 1613.0], [5.3, 1613.0], [5.4, 1613.0], [5.5, 1613.0], [5.6, 1613.0], [5.7, 1613.0], [5.8, 1613.0], [5.9, 1613.0], [6.0, 1613.0], [6.1, 1613.0], [6.2, 1613.0], [6.3, 1769.0], [6.4, 1769.0], [6.5, 1769.0], [6.6, 1769.0], [6.7, 1769.0], [6.8, 1769.0], [6.9, 1769.0], [7.0, 1769.0], [7.1, 1769.0], [7.2, 1769.0], [7.3, 1769.0], [7.4, 1769.0], [7.5, 1896.0], [7.6, 1896.0], [7.7, 1896.0], [7.8, 1896.0], [7.9, 1896.0], [8.0, 1896.0], [8.1, 1896.0], [8.2, 1896.0], [8.3, 1896.0], [8.4, 1896.0], [8.5, 1896.0], [8.6, 1896.0], [8.7, 1896.0], [8.8, 2216.0], [8.9, 2216.0], [9.0, 2216.0], [9.1, 2216.0], [9.2, 2216.0], [9.3, 2216.0], [9.4, 2216.0], [9.5, 2216.0], [9.6, 2216.0], [9.7, 2216.0], [9.8, 2216.0], [9.9, 2216.0], [10.0, 2297.0], [10.1, 2297.0], [10.2, 2297.0], [10.3, 2297.0], [10.4, 2297.0], [10.5, 2297.0], [10.6, 2297.0], [10.7, 2297.0], [10.8, 2297.0], [10.9, 2297.0], [11.0, 2297.0], [11.1, 2297.0], [11.2, 2297.0], [11.3, 2517.0], [11.4, 2517.0], [11.5, 2517.0], [11.6, 2517.0], [11.7, 2517.0], [11.8, 2517.0], [11.9, 2517.0], [12.0, 2517.0], [12.1, 2517.0], [12.2, 2517.0], [12.3, 2517.0], [12.4, 2517.0], [12.5, 2644.0], [12.6, 2644.0], [12.7, 2644.0], [12.8, 2644.0], [12.9, 2644.0], [13.0, 2644.0], [13.1, 2644.0], [13.2, 2644.0], [13.3, 2644.0], [13.4, 2644.0], [13.5, 2644.0], [13.6, 2644.0], [13.7, 2644.0], [13.8, 2682.0], [13.9, 2682.0], [14.0, 2682.0], [14.1, 2682.0], [14.2, 2682.0], [14.3, 2682.0], [14.4, 2682.0], [14.5, 2682.0], [14.6, 2682.0], [14.7, 2682.0], [14.8, 2682.0], [14.9, 2682.0], [15.0, 2769.0], [15.1, 2769.0], [15.2, 2769.0], [15.3, 2769.0], [15.4, 2769.0], [15.5, 2769.0], [15.6, 2769.0], [15.7, 2769.0], [15.8, 2769.0], [15.9, 2769.0], [16.0, 2769.0], [16.1, 2769.0], [16.2, 2769.0], [16.3, 2911.0], [16.4, 2911.0], [16.5, 2911.0], [16.6, 2911.0], [16.7, 2911.0], [16.8, 2911.0], [16.9, 2911.0], [17.0, 2911.0], [17.1, 2911.0], [17.2, 2911.0], [17.3, 2911.0], [17.4, 2911.0], [17.5, 2965.0], [17.6, 2965.0], [17.7, 2965.0], [17.8, 2965.0], [17.9, 2965.0], [18.0, 2965.0], [18.1, 2965.0], [18.2, 2965.0], [18.3, 2965.0], [18.4, 2965.0], [18.5, 2965.0], [18.6, 2965.0], [18.7, 2965.0], [18.8, 2999.0], [18.9, 2999.0], [19.0, 2999.0], [19.1, 2999.0], [19.2, 2999.0], [19.3, 2999.0], [19.4, 2999.0], [19.5, 2999.0], [19.6, 2999.0], [19.7, 2999.0], [19.8, 2999.0], [19.9, 2999.0], [20.0, 3154.0], [20.1, 3154.0], [20.2, 3154.0], [20.3, 3154.0], [20.4, 3154.0], [20.5, 3154.0], [20.6, 3154.0], [20.7, 3154.0], [20.8, 3154.0], [20.9, 3154.0], [21.0, 3154.0], [21.1, 3154.0], [21.2, 3154.0], [21.3, 3382.0], [21.4, 3382.0], [21.5, 3382.0], [21.6, 3382.0], [21.7, 3382.0], [21.8, 3382.0], [21.9, 3382.0], [22.0, 3382.0], [22.1, 3382.0], [22.2, 3382.0], [22.3, 3382.0], [22.4, 3382.0], [22.5, 3535.0], [22.6, 3535.0], [22.7, 3535.0], [22.8, 3535.0], [22.9, 3535.0], [23.0, 3535.0], [23.1, 3535.0], [23.2, 3535.0], [23.3, 3535.0], [23.4, 3535.0], [23.5, 3535.0], [23.6, 3535.0], [23.7, 3535.0], [23.8, 3596.0], [23.9, 3596.0], [24.0, 3596.0], [24.1, 3596.0], [24.2, 3596.0], [24.3, 3596.0], [24.4, 3596.0], [24.5, 3596.0], [24.6, 3596.0], [24.7, 3596.0], [24.8, 3596.0], [24.9, 3596.0], [25.0, 3603.0], [25.1, 3603.0], [25.2, 3603.0], [25.3, 3603.0], [25.4, 3603.0], [25.5, 3603.0], [25.6, 3603.0], [25.7, 3603.0], [25.8, 3603.0], [25.9, 3603.0], [26.0, 3603.0], [26.1, 3603.0], [26.2, 3603.0], [26.3, 3729.0], [26.4, 3729.0], [26.5, 3729.0], [26.6, 3729.0], [26.7, 3729.0], [26.8, 3729.0], [26.9, 3729.0], [27.0, 3729.0], [27.1, 3729.0], [27.2, 3729.0], [27.3, 3729.0], [27.4, 3729.0], [27.5, 3735.0], [27.6, 3735.0], [27.7, 3735.0], [27.8, 3735.0], [27.9, 3735.0], [28.0, 3735.0], [28.1, 3735.0], [28.2, 3735.0], [28.3, 3735.0], [28.4, 3735.0], [28.5, 3735.0], [28.6, 3735.0], [28.7, 3735.0], [28.8, 3747.0], [28.9, 3747.0], [29.0, 3747.0], [29.1, 3747.0], [29.2, 3747.0], [29.3, 3747.0], [29.4, 3747.0], [29.5, 3747.0], [29.6, 3747.0], [29.7, 3747.0], [29.8, 3747.0], [29.9, 3747.0], [30.0, 4010.0], [30.1, 4010.0], [30.2, 4010.0], [30.3, 4010.0], [30.4, 4010.0], [30.5, 4010.0], [30.6, 4010.0], [30.7, 4010.0], [30.8, 4010.0], [30.9, 4010.0], [31.0, 4010.0], [31.1, 4010.0], [31.2, 4010.0], [31.3, 4196.0], [31.4, 4196.0], [31.5, 4196.0], [31.6, 4196.0], [31.7, 4196.0], [31.8, 4196.0], [31.9, 4196.0], [32.0, 4196.0], [32.1, 4196.0], [32.2, 4196.0], [32.3, 4196.0], [32.4, 4196.0], [32.5, 4560.0], [32.6, 4560.0], [32.7, 4560.0], [32.8, 4560.0], [32.9, 4560.0], [33.0, 4560.0], [33.1, 4560.0], [33.2, 4560.0], [33.3, 4560.0], [33.4, 4560.0], [33.5, 4560.0], [33.6, 4560.0], [33.7, 4560.0], [33.8, 4647.0], [33.9, 4647.0], [34.0, 4647.0], [34.1, 4647.0], [34.2, 4647.0], [34.3, 4647.0], [34.4, 4647.0], [34.5, 4647.0], [34.6, 4647.0], [34.7, 4647.0], [34.8, 4647.0], [34.9, 4647.0], [35.0, 4790.0], [35.1, 4790.0], [35.2, 4790.0], [35.3, 4790.0], [35.4, 4790.0], [35.5, 4790.0], [35.6, 4790.0], [35.7, 4790.0], [35.8, 4790.0], [35.9, 4790.0], [36.0, 4790.0], [36.1, 4790.0], [36.2, 4790.0], [36.3, 4967.0], [36.4, 4967.0], [36.5, 4967.0], [36.6, 4967.0], [36.7, 4967.0], [36.8, 4967.0], [36.9, 4967.0], [37.0, 4967.0], [37.1, 4967.0], [37.2, 4967.0], [37.3, 4967.0], [37.4, 4967.0], [37.5, 5033.0], [37.6, 5033.0], [37.7, 5033.0], [37.8, 5033.0], [37.9, 5033.0], [38.0, 5033.0], [38.1, 5033.0], [38.2, 5033.0], [38.3, 5033.0], [38.4, 5033.0], [38.5, 5033.0], [38.6, 5033.0], [38.7, 5033.0], [38.8, 5104.0], [38.9, 5104.0], [39.0, 5104.0], [39.1, 5104.0], [39.2, 5104.0], [39.3, 5104.0], [39.4, 5104.0], [39.5, 5104.0], [39.6, 5104.0], [39.7, 5104.0], [39.8, 5104.0], [39.9, 5104.0], [40.0, 5347.0], [40.1, 5347.0], [40.2, 5347.0], [40.3, 5347.0], [40.4, 5347.0], [40.5, 5347.0], [40.6, 5347.0], [40.7, 5347.0], [40.8, 5347.0], [40.9, 5347.0], [41.0, 5347.0], [41.1, 5347.0], [41.2, 5347.0], [41.3, 5793.0], [41.4, 5793.0], [41.5, 5793.0], [41.6, 5793.0], [41.7, 5793.0], [41.8, 5793.0], [41.9, 5793.0], [42.0, 5793.0], [42.1, 5793.0], [42.2, 5793.0], [42.3, 5793.0], [42.4, 5793.0], [42.5, 6026.0], [42.6, 6026.0], [42.7, 6026.0], [42.8, 6026.0], [42.9, 6026.0], [43.0, 6026.0], [43.1, 6026.0], [43.2, 6026.0], [43.3, 6026.0], [43.4, 6026.0], [43.5, 6026.0], [43.6, 6026.0], [43.7, 6026.0], [43.8, 6029.0], [43.9, 6029.0], [44.0, 6029.0], [44.1, 6029.0], [44.2, 6029.0], [44.3, 6029.0], [44.4, 6029.0], [44.5, 6029.0], [44.6, 6029.0], [44.7, 6029.0], [44.8, 6029.0], [44.9, 6029.0], [45.0, 6052.0], [45.1, 6052.0], [45.2, 6052.0], [45.3, 6052.0], [45.4, 6052.0], [45.5, 6052.0], [45.6, 6052.0], [45.7, 6052.0], [45.8, 6052.0], [45.9, 6052.0], [46.0, 6052.0], [46.1, 6052.0], [46.2, 6052.0], [46.3, 6246.0], [46.4, 6246.0], [46.5, 6246.0], [46.6, 6246.0], [46.7, 6246.0], [46.8, 6246.0], [46.9, 6246.0], [47.0, 6246.0], [47.1, 6246.0], [47.2, 6246.0], [47.3, 6246.0], [47.4, 6246.0], [47.5, 6364.0], [47.6, 6364.0], [47.7, 6364.0], [47.8, 6364.0], [47.9, 6364.0], [48.0, 6364.0], [48.1, 6364.0], [48.2, 6364.0], [48.3, 6364.0], [48.4, 6364.0], [48.5, 6364.0], [48.6, 6364.0], [48.7, 6364.0], [48.8, 6530.0], [48.9, 6530.0], [49.0, 6530.0], [49.1, 6530.0], [49.2, 6530.0], [49.3, 6530.0], [49.4, 6530.0], [49.5, 6530.0], [49.6, 6530.0], [49.7, 6530.0], [49.8, 6530.0], [49.9, 6530.0], [50.0, 6563.0], [50.1, 6563.0], [50.2, 6563.0], [50.3, 6563.0], [50.4, 6563.0], [50.5, 6563.0], [50.6, 6563.0], [50.7, 6563.0], [50.8, 6563.0], [50.9, 6563.0], [51.0, 6563.0], [51.1, 6563.0], [51.2, 6563.0], [51.3, 6721.0], [51.4, 6721.0], [51.5, 6721.0], [51.6, 6721.0], [51.7, 6721.0], [51.8, 6721.0], [51.9, 6721.0], [52.0, 6721.0], [52.1, 6721.0], [52.2, 6721.0], [52.3, 6721.0], [52.4, 6721.0], [52.5, 7079.0], [52.6, 7079.0], [52.7, 7079.0], [52.8, 7079.0], [52.9, 7079.0], [53.0, 7079.0], [53.1, 7079.0], [53.2, 7079.0], [53.3, 7079.0], [53.4, 7079.0], [53.5, 7079.0], [53.6, 7079.0], [53.7, 7079.0], [53.8, 7306.0], [53.9, 7306.0], [54.0, 7306.0], [54.1, 7306.0], [54.2, 7306.0], [54.3, 7306.0], [54.4, 7306.0], [54.5, 7306.0], [54.6, 7306.0], [54.7, 7306.0], [54.8, 7306.0], [54.9, 7306.0], [55.0, 7565.0], [55.1, 7565.0], [55.2, 7565.0], [55.3, 7565.0], [55.4, 7565.0], [55.5, 7565.0], [55.6, 7565.0], [55.7, 7565.0], [55.8, 7565.0], [55.9, 7565.0], [56.0, 7565.0], [56.1, 7565.0], [56.2, 7565.0], [56.3, 7634.0], [56.4, 7634.0], [56.5, 7634.0], [56.6, 7634.0], [56.7, 7634.0], [56.8, 7634.0], [56.9, 7634.0], [57.0, 7634.0], [57.1, 7634.0], [57.2, 7634.0], [57.3, 7634.0], [57.4, 7634.0], [57.5, 7789.0], [57.6, 7789.0], [57.7, 7789.0], [57.8, 7789.0], [57.9, 7789.0], [58.0, 7789.0], [58.1, 7789.0], [58.2, 7789.0], [58.3, 7789.0], [58.4, 7789.0], [58.5, 7789.0], [58.6, 7789.0], [58.7, 7789.0], [58.8, 8026.0], [58.9, 8026.0], [59.0, 8026.0], [59.1, 8026.0], [59.2, 8026.0], [59.3, 8026.0], [59.4, 8026.0], [59.5, 8026.0], [59.6, 8026.0], [59.7, 8026.0], [59.8, 8026.0], [59.9, 8026.0], [60.0, 8357.0], [60.1, 8357.0], [60.2, 8357.0], [60.3, 8357.0], [60.4, 8357.0], [60.5, 8357.0], [60.6, 8357.0], [60.7, 8357.0], [60.8, 8357.0], [60.9, 8357.0], [61.0, 8357.0], [61.1, 8357.0], [61.2, 8357.0], [61.3, 8796.0], [61.4, 8796.0], [61.5, 8796.0], [61.6, 8796.0], [61.7, 8796.0], [61.8, 8796.0], [61.9, 8796.0], [62.0, 8796.0], [62.1, 8796.0], [62.2, 8796.0], [62.3, 8796.0], [62.4, 8796.0], [62.5, 9120.0], [62.6, 9120.0], [62.7, 9120.0], [62.8, 9120.0], [62.9, 9120.0], [63.0, 9120.0], [63.1, 9120.0], [63.2, 9120.0], [63.3, 9120.0], [63.4, 9120.0], [63.5, 9120.0], [63.6, 9120.0], [63.7, 9120.0], [63.8, 9665.0], [63.9, 9665.0], [64.0, 9665.0], [64.1, 9665.0], [64.2, 9665.0], [64.3, 9665.0], [64.4, 9665.0], [64.5, 9665.0], [64.6, 9665.0], [64.7, 9665.0], [64.8, 9665.0], [64.9, 9665.0], [65.0, 10417.0], [65.1, 10417.0], [65.2, 10417.0], [65.3, 10417.0], [65.4, 10417.0], [65.5, 10417.0], [65.6, 10417.0], [65.7, 10417.0], [65.8, 10417.0], [65.9, 10417.0], [66.0, 10417.0], [66.1, 10417.0], [66.2, 10417.0], [66.3, 10710.0], [66.4, 10710.0], [66.5, 10710.0], [66.6, 10710.0], [66.7, 10710.0], [66.8, 10710.0], [66.9, 10710.0], [67.0, 10710.0], [67.1, 10710.0], [67.2, 10710.0], [67.3, 10710.0], [67.4, 10710.0], [67.5, 11211.0], [67.6, 11211.0], [67.7, 11211.0], [67.8, 11211.0], [67.9, 11211.0], [68.0, 11211.0], [68.1, 11211.0], [68.2, 11211.0], [68.3, 11211.0], [68.4, 11211.0], [68.5, 11211.0], [68.6, 11211.0], [68.7, 11211.0], [68.8, 11214.0], [68.9, 11214.0], [69.0, 11214.0], [69.1, 11214.0], [69.2, 11214.0], [69.3, 11214.0], [69.4, 11214.0], [69.5, 11214.0], [69.6, 11214.0], [69.7, 11214.0], [69.8, 11214.0], [69.9, 11214.0], [70.0, 11280.0], [70.1, 11280.0], [70.2, 11280.0], [70.3, 11280.0], [70.4, 11280.0], [70.5, 11280.0], [70.6, 11280.0], [70.7, 11280.0], [70.8, 11280.0], [70.9, 11280.0], [71.0, 11280.0], [71.1, 11280.0], [71.2, 11280.0], [71.3, 11636.0], [71.4, 11636.0], [71.5, 11636.0], [71.6, 11636.0], [71.7, 11636.0], [71.8, 11636.0], [71.9, 11636.0], [72.0, 11636.0], [72.1, 11636.0], [72.2, 11636.0], [72.3, 11636.0], [72.4, 11636.0], [72.5, 11779.0], [72.6, 11779.0], [72.7, 11779.0], [72.8, 11779.0], [72.9, 11779.0], [73.0, 11779.0], [73.1, 11779.0], [73.2, 11779.0], [73.3, 11779.0], [73.4, 11779.0], [73.5, 11779.0], [73.6, 11779.0], [73.7, 11779.0], [73.8, 12367.0], [73.9, 12367.0], [74.0, 12367.0], [74.1, 12367.0], [74.2, 12367.0], [74.3, 12367.0], [74.4, 12367.0], [74.5, 12367.0], [74.6, 12367.0], [74.7, 12367.0], [74.8, 12367.0], [74.9, 12367.0], [75.0, 12612.0], [75.1, 12612.0], [75.2, 12612.0], [75.3, 12612.0], [75.4, 12612.0], [75.5, 12612.0], [75.6, 12612.0], [75.7, 12612.0], [75.8, 12612.0], [75.9, 12612.0], [76.0, 12612.0], [76.1, 12612.0], [76.2, 12612.0], [76.3, 12685.0], [76.4, 12685.0], [76.5, 12685.0], [76.6, 12685.0], [76.7, 12685.0], [76.8, 12685.0], [76.9, 12685.0], [77.0, 12685.0], [77.1, 12685.0], [77.2, 12685.0], [77.3, 12685.0], [77.4, 12685.0], [77.5, 12992.0], [77.6, 12992.0], [77.7, 12992.0], [77.8, 12992.0], [77.9, 12992.0], [78.0, 12992.0], [78.1, 12992.0], [78.2, 12992.0], [78.3, 12992.0], [78.4, 12992.0], [78.5, 12992.0], [78.6, 12992.0], [78.7, 12992.0], [78.8, 13513.0], [78.9, 13513.0], [79.0, 13513.0], [79.1, 13513.0], [79.2, 13513.0], [79.3, 13513.0], [79.4, 13513.0], [79.5, 13513.0], [79.6, 13513.0], [79.7, 13513.0], [79.8, 13513.0], [79.9, 13513.0], [80.0, 15129.0], [80.1, 15129.0], [80.2, 15129.0], [80.3, 15129.0], [80.4, 15129.0], [80.5, 15129.0], [80.6, 15129.0], [80.7, 15129.0], [80.8, 15129.0], [80.9, 15129.0], [81.0, 15129.0], [81.1, 15129.0], [81.2, 15129.0], [81.3, 15645.0], [81.4, 15645.0], [81.5, 15645.0], [81.6, 15645.0], [81.7, 15645.0], [81.8, 15645.0], [81.9, 15645.0], [82.0, 15645.0], [82.1, 15645.0], [82.2, 15645.0], [82.3, 15645.0], [82.4, 15645.0], [82.5, 15653.0], [82.6, 15653.0], [82.7, 15653.0], [82.8, 15653.0], [82.9, 15653.0], [83.0, 15653.0], [83.1, 15653.0], [83.2, 15653.0], [83.3, 15653.0], [83.4, 15653.0], [83.5, 15653.0], [83.6, 15653.0], [83.7, 15653.0], [83.8, 16083.0], [83.9, 16083.0], [84.0, 16083.0], [84.1, 16083.0], [84.2, 16083.0], [84.3, 16083.0], [84.4, 16083.0], [84.5, 16083.0], [84.6, 16083.0], [84.7, 16083.0], [84.8, 16083.0], [84.9, 16083.0], [85.0, 16914.0], [85.1, 16914.0], [85.2, 16914.0], [85.3, 16914.0], [85.4, 16914.0], [85.5, 16914.0], [85.6, 16914.0], [85.7, 16914.0], [85.8, 16914.0], [85.9, 16914.0], [86.0, 16914.0], [86.1, 16914.0], [86.2, 16914.0], [86.3, 18125.0], [86.4, 18125.0], [86.5, 18125.0], [86.6, 18125.0], [86.7, 18125.0], [86.8, 18125.0], [86.9, 18125.0], [87.0, 18125.0], [87.1, 18125.0], [87.2, 18125.0], [87.3, 18125.0], [87.4, 18125.0], [87.5, 18605.0], [87.6, 18605.0], [87.7, 18605.0], [87.8, 18605.0], [87.9, 18605.0], [88.0, 18605.0], [88.1, 18605.0], [88.2, 18605.0], [88.3, 18605.0], [88.4, 18605.0], [88.5, 18605.0], [88.6, 18605.0], [88.7, 18605.0], [88.8, 18819.0], [88.9, 18819.0], [89.0, 18819.0], [89.1, 18819.0], [89.2, 18819.0], [89.3, 18819.0], [89.4, 18819.0], [89.5, 18819.0], [89.6, 18819.0], [89.7, 18819.0], [89.8, 18819.0], [89.9, 18819.0], [90.0, 18865.0], [90.1, 18865.0], [90.2, 18865.0], [90.3, 18865.0], [90.4, 18865.0], [90.5, 18865.0], [90.6, 18865.0], [90.7, 18865.0], [90.8, 18865.0], [90.9, 18865.0], [91.0, 18865.0], [91.1, 18865.0], [91.2, 18865.0], [91.3, 19096.0], [91.4, 19096.0], [91.5, 19096.0], [91.6, 19096.0], [91.7, 19096.0], [91.8, 19096.0], [91.9, 19096.0], [92.0, 19096.0], [92.1, 19096.0], [92.2, 19096.0], [92.3, 19096.0], [92.4, 19096.0], [92.5, 19292.0], [92.6, 19292.0], [92.7, 19292.0], [92.8, 19292.0], [92.9, 19292.0], [93.0, 19292.0], [93.1, 19292.0], [93.2, 19292.0], [93.3, 19292.0], [93.4, 19292.0], [93.5, 19292.0], [93.6, 19292.0], [93.7, 19292.0], [93.8, 20416.0], [93.9, 20416.0], [94.0, 20416.0], [94.1, 20416.0], [94.2, 20416.0], [94.3, 20416.0], [94.4, 20416.0], [94.5, 20416.0], [94.6, 20416.0], [94.7, 20416.0], [94.8, 20416.0], [94.9, 20416.0], [95.0, 21291.0], [95.1, 21291.0], [95.2, 21291.0], [95.3, 21291.0], [95.4, 21291.0], [95.5, 21291.0], [95.6, 21291.0], [95.7, 21291.0], [95.8, 21291.0], [95.9, 21291.0], [96.0, 21291.0], [96.1, 21291.0], [96.2, 21291.0], [96.3, 21863.0], [96.4, 21863.0], [96.5, 21863.0], [96.6, 21863.0], [96.7, 21863.0], [96.8, 21863.0], [96.9, 21863.0], [97.0, 21863.0], [97.1, 21863.0], [97.2, 21863.0], [97.3, 21863.0], [97.4, 21863.0], [97.5, 22127.0], [97.6, 22127.0], [97.7, 22127.0], [97.8, 22127.0], [97.9, 22127.0], [98.0, 22127.0], [98.1, 22127.0], [98.2, 22127.0], [98.3, 22127.0], [98.4, 22127.0], [98.5, 22127.0], [98.6, 22127.0], [98.7, 22127.0], [98.8, 22332.0], [98.9, 22332.0], [99.0, 22332.0], [99.1, 22332.0], [99.2, 22332.0], [99.3, 22332.0], [99.4, 22332.0], [99.5, 22332.0], [99.6, 22332.0], [99.7, 22332.0], [99.8, 22332.0], [99.9, 22332.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 3.0, "series": [{"data": [[1000.0, 3.0], [1200.0, 1.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [2200.0, 2.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [2900.0, 3.0], [3100.0, 1.0], [3300.0, 1.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [5700.0, 1.0], [6000.0, 3.0], [6200.0, 1.0], [6300.0, 1.0], [6500.0, 2.0], [6700.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [8000.0, 1.0], [8300.0, 1.0], [8700.0, 1.0], [9100.0, 1.0], [9600.0, 1.0], [10700.0, 1.0], [10400.0, 1.0], [11200.0, 3.0], [11600.0, 1.0], [11700.0, 1.0], [12600.0, 2.0], [12300.0, 1.0], [12900.0, 1.0], [13500.0, 1.0], [15100.0, 1.0], [15600.0, 2.0], [16000.0, 1.0], [16900.0, 1.0], [18100.0, 1.0], [19000.0, 1.0], [18600.0, 1.0], [18800.0, 2.0], [19200.0, 1.0], [20400.0, 1.0], [21200.0, 1.0], [22300.0, 1.0], [21800.0, 1.0], [22100.0, 1.0]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 76.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 76.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7915211E12, "maxY": 5.117647058823529, "series": [{"data": [[1.79152116E12, 5.117647058823529], [1.79152134E12, 2.0625], [1.79152128E12, 2.1875], [1.7915214E12, 2.0714285714285716], [1.7915211E12, 1.0], [1.79152122E12, 3.4375000000000004]], "isOverall": false, "label": "Open-loop arrivals", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915214E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3783.5882352941176, "minX": 1.0, "maxY": 16288.083333333332, "series": [{"data": [[1.0, 3783.5882352941176], [2.0, 6145.799999999999], [4.0, 11134.2], [5.0, 15631.0], [6.0, 16288.083333333332], [3.0, 7531.9285714285725], [7.0, 16251.0]], "isOverall": false, "label": "POST /tickets", "isController": false}, {"data": [[3.0, 8564.975]], "isOverall": false, "label": "POST /tickets-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 7.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3.2333333333333334, "minX": 1.7915211E12, "maxY": 340.6, "series": [{"data": [[1.79152116E12, 54.63333333333333], [1.79152134E12, 51.35], [1.79152128E12, 51.016666666666666], [1.7915214E12, 44.983333333333334], [1.7915211E12, 3.2333333333333334], [1.79152122E12, 51.516666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79152116E12, 323.9], [1.79152134E12, 340.6], [1.79152128E12, 257.65], [1.7915214E12, 278.76666666666665], [1.7915211E12, 7.55], [1.79152122E12, 297.21666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915214E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1272.0, "minX": 1.7915211E12, "maxY": 13316.764705882353, "series": [{"data": [[1.79152116E12, 13316.764705882353], [1.79152134E12, 6121.875], [1.79152128E12, 4914.812500000001], [1.7915214E12, 5923.5714285714275], [1.7915211E12, 1272.0], [1.79152122E12, 12376.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915214E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1272.0, "minX": 1.7915211E12, "maxY": 13316.70588235294, "series": [{"data": [[1.79152116E12, 13316.70588235294], [1.79152134E12, 6121.875], [1.79152128E12, 4914.750000000001], [1.7915214E12, 5923.5], [1.7915211E12, 1272.0], [1.79152122E12, 12376.5]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915214E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.785714285714285, "minX": 1.7915211E12, "maxY": 19.0, "series": [{"data": [[1.79152116E12, 11.352941176470589], [1.79152134E12, 10.75], [1.79152128E12, 10.000000000000002], [1.7915214E12, 9.785714285714285], [1.7915211E12, 19.0], [1.79152122E12, 10.812499999999998]], "isOverall": false, "label": "POST /tickets", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915214E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1047.0, "minX": 1.7915211E12, "maxY": 22332.0, "series": [{"data": [[1.79152116E12, 22332.0], [1.79152134E12, 10710.0], [1.79152128E12, 11636.0], [1.7915214E12, 11779.0], [1.7915211E12, 1272.0], [1.79152122E12, 22127.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79152116E12, 20799.199999999997], [1.79152134E12, 9597.000000000002], [1.79152128E12, 10256.300000000001], [1.7915214E12, 11098.0], [1.7915211E12, 1272.0], [1.79152122E12, 21942.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79152116E12, 22332.0], [1.79152134E12, 10710.0], [1.79152128E12, 11636.0], [1.7915214E12, 11779.0], [1.7915211E12, 1272.0], [1.79152122E12, 22127.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79152116E12, 22332.0], [1.79152134E12, 10710.0], [1.79152128E12, 11636.0], [1.7915214E12, 11779.0], [1.7915211E12, 1272.0], [1.79152122E12, 22127.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79152116E12, 1069.0], [1.79152134E12, 1896.0], [1.79152128E12, 1065.0], [1.7915214E12, 2216.0], [1.7915211E12, 1272.0], [1.79152122E12, 1047.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79152116E12, 12992.0], [1.79152134E12, 5909.5], [1.79152128E12, 3741.0], [1.7915214E12, 5688.0], [1.7915211E12, 1272.0], [1.79152122E12, 14583.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915214E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6546.5, "minX": 1.0, "maxY": 6546.5, "series": [{"data": [[1.0, 6546.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6546.5, "minX": 1.0, "maxY": 6546.5, "series": [{"data": [[1.0, 6546.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7915211E12, "maxY": 0.35, "series": [{"data": [[1.79152116E12, 0.35], [1.79152134E12, 0.23333333333333334], [1.79152128E12, 0.2833333333333333], [1.7915214E12, 0.23333333333333334], [1.7915211E12, 0.016666666666666666], [1.79152122E12, 0.21666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915214E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7915211E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79152116E12, 0.2833333333333333], [1.79152134E12, 0.26666666666666666], [1.79152128E12, 0.26666666666666666], [1.7915214E12, 0.23333333333333334], [1.7915211E12, 0.016666666666666666], [1.79152122E12, 0.26666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7915214E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7915211E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79152116E12, 0.2833333333333333], [1.79152134E12, 0.26666666666666666], [1.79152128E12, 0.26666666666666666], [1.7915214E12, 0.23333333333333334], [1.7915211E12, 0.016666666666666666], [1.79152122E12, 0.26666666666666666]], "isOverall": false, "label": "POST /tickets-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915214E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7915211E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.79152116E12, 0.2833333333333333], [1.79152134E12, 0.26666666666666666], [1.79152128E12, 0.26666666666666666], [1.7915214E12, 0.23333333333333334], [1.7915211E12, 0.016666666666666666], [1.79152122E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7915214E12, "title": "Total Transactions Per Second"}},
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

