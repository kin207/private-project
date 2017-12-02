(function(){
    $(function(){
        function getOption(title, color, val1, val2){
            return {
                title: {
                    left: 'center',
                    text: title,
                    textStyle : {
                        fontSize : 10
                    }
                },
                grid : {top:'10%'},
                series: [{
                    name:title,
                    type:'pie',
                    radius: ['30%', '60%'],
                    color : ['#FFFFFF', color],
                    avoidLabelOverlap: false,
                    itemStyle : {normal:{borderWidth:1, borderColor : color}},
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    silent : true,
                    labelLine: {normal: {show: false}},
                    data:[
                        {value:val1, name:''},
                        {value:val2, name:''}
                    ]
                }]
            }
        }

        var myChart = echarts.init($('.graph-temperature').get(0));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(getOption('温度', '#FF9800', 335, 310));


        myChart = echarts.init($('.graph-humidity').get(0));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(getOption('湿度', '#ED62A7', 135, 210));


        myChart = echarts.init($('.graph-electric').get(0));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(getOption('电量', '#65D743', 134, 100));


        myChart = echarts.init($('.graph-signal').get(0));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(getOption('信号', '#1AA3FC', 134, 100));
    });


    $(function(){

    });
}());


