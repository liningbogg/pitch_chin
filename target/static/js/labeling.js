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
function addChart(title, dict, MyDiv,start, end){
    //曲线参数设置
    var options = {
        chart: {
            zoomType: 'xy' //xy方向均可缩放
        },
        boost: {
            useGPUTranslations: true
        },
        title: {
            text: title
        },
        xAxis: {
            categories: index.slice(start,end)
        },
        tooltip: {
            valueDecimals: 2  //显示精度
        },
        legend: {
			layout: 'vertical',
		    align: 'right',
		    verticalAlign: 'middle',
		    enabled: true
		},
        series: []
    };
    options.series = new Array();
    //有待找到更规范的判断嵌套层数的方法 2019-01-31 12:44:35 李宁波
    var i=0;
    for(key in dict){
        options.series[i] = new Object();
        options.series[i].color = color_chart[i];
        options.series[i].lineWidth = 1;
        options.series[i].name = key;
        options.series[i].data = dict[key].slice(start,end);
        i++;
    }
    // 生成chart
    Highcharts.chart(MyDiv,options);
}

