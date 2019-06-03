//临时用inc数组
var index=new Array(100000);
for(var i=0;i<99999;i++){
    index[i]=i;
}
//曲线颜色列表
const color_chart=["red","blue","black","green","yellow","gray"];
//设置异步传输
$.ajaxSetup({
        async : true
    });

//添加曲线的高层封装,data字典中包含lengend 以及数据
function addChart(title, dictSeries, dictLine, currentPos, MyDiv,start, end){
    //曲线参数设置
    var  options = {
        chart: {
	    	type: 'line',
            zoomType: 'xy', //xy方向均可缩放
			animation: false
        },
        boost: {
            useGPUTranslations: true
        },
        title: {
            text: title
        },
		exporting: {
            enabled:false
		},
        xAxis: {
            categories: index.slice(start,end)
        },
		yAxis: {
		    tickInterval: 0.05
		},
  		legend: {
	    	layout: 'vertical',
	    	align: 'right',
	    	verticalAlign: 'middle',
	    	enabled: true
		},
		tooltip: {
            valueDecimals: 2,  //显示精度
	    	shared: true
		},
		plotOptions: {
			series: {
				marker: {
					enabled: false
				},

			},
		},
    };
    options.series = new Array();
    var i=0;
    for(key in dictSeries){
        options.series[i] = new Object();
        options.series[i].color = color_chart[i];
        options.series[i].lineWidth = 1;
        options.series[i].name = key;
        options.series[i].data = dictSeries[key].slice(start,end);
        i++;
    }
    var chart = Highcharts.chart(MyDiv,options);
	i=0;
	for(key in dictLine){
		for(i in dictLine[key]){
			 chart.xAxis[0].addPlotLine({           //在x轴上增加
			    value:dictLine[key][i]-start,                           //在值为2的地方
				width:1, //标示线的宽度为2px
    			color: color_chart[i]//标示线的颜色
			});
		}
		i++;
	}
	chart.xAxis[0].addPlotLine({           //在x轴上增加
		value:currentPos-start,                           //在值为2的地方
		width:2, //标示线的宽度为2px
    	color: "green"//标示线的颜色
	});

}

