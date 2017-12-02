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
        var myChart = echarts.init($('.hours .temperature-graph').get(0));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid : {
                top : '10%'
            },
            color : ['#FC9362', '#F7BC34'],
            legend: {
                data:['室外','设备'],
                bottom : 15, left:30,
                textStyle : {fontSize : 10},
                itemWidth : 20, itemHeight : 10
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                axisLabel : {
                    fontSize : 9,
                    interval : 1
                },
                data: _.range(0, 25)
            },
            yAxis: {
                type: 'value',
                nameGap : 25,
                offset : -5,
                axisLabel: {fontSize: 9},
                axisLine : {show:false},
                axisTick : {length:6.5},
                name : '温度 (°C)',
                nameLocation : 'center'
            },
            series: [{
                name: '室外',
                type: 'line',
                // lineStyle : {normal:{color : '#FC9362'}},
                data: _.map(_.range(24), function(){ return _.random(0, 30, true);}),
                smooth : true
            }, {
                name: '设备',
                // lineStyle : {normal:{color : '#F7BC34'}},
                symbol : 'none',
                type: 'line',
                data: _.map(_.range(24), function(){ return _.random(0, 30, true);}),
                smooth : true
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);



        myChart = echarts.init($('.hours .humidity-graph').get(0));
        // 指定图表的配置项和数据
        option = {
            grid : {
                top : '10%'
            },
            color : ['#CB3780', '#864892'],
            legend: {
                data:['室外','设备'],
                bottom : 15, left:30,
                textStyle : {fontSize : 10},
                itemWidth : 20, itemHeight : 10
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                axisLabel : {
                    fontSize : 9,
                    interval : 1
                },
                data: _.range(0, 25)
            },
            yAxis: {
                type: 'value',
                axisLabel: {fontSize: 9, formatter : '{value}%'},
                axisLine : {show:false},
                axisTick : {length:6.5}
            },
            series: [{
                name: '室外',
                type: 'line',
                // lineStyle : {normal:{color : '#FC9362'}},
                data: _.map(_.range(24), function(){ return _.random(0, 100, true);}),
                smooth : true
            }, {
                name: '设备',
                // lineStyle : {normal:{color : '#F7BC34'}},
                symbol : 'none',
                type: 'line',
                data: _.map(_.range(24), function(){ return _.random(0, 100, true);}),
                smooth : true
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);



        myChart = echarts.init($('.hours .electric-graph').get(0));
        // 指定图表的配置项和数据
        option = {
            grid : {
                top : '10%'
            },
            color : ['#69D847'],
            legend: {
                data:['设备'],
                bottom : 15, left:30,
                textStyle : {fontSize : 10},
                itemWidth : 20, itemHeight : 10
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                axisLabel : {
                    fontSize : 9,
                    interval : 1
                },
                data: _.range(0, 25)
            },
            yAxis: {
                type: 'value',
                nameGap : 25,
                offset : -5,
                axisLabel: {fontSize: 9},
                axisLine : {show:false},
                axisTick : {length:6.5},
                name : '电量 (100%)',
                nameLocation : 'center'
            },
            series: [{
                name: '设备',
                symbol : 'none',
                type: 'line',
                data: _.map(_.range(24), function(){ return _.random(0, 100, true);}),
                smooth : true
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


        myChart = echarts.init($('.hours .signal-graph').get(0));
        // 指定图表的配置项和数据
        option = {
            grid : {
                top : '10%'
            },
            color : ['#5CC2FC'],
            legend: {
                data:['设备'],
                bottom : 15, left:30,
                textStyle : {fontSize : 10},
                itemWidth : 20, itemHeight : 10
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                axisLabel : {
                    fontSize : 9,
                    interval : 1
                },
                axisLine: { onZero: false },
                data: _.range(0, 25)
            },
            yAxis: {
                type: 'value',
                nameGap : 25,
                offset : -5,
                max : 0,
                axisLabel: {fontSize: 9},
                axisLine : {show:false},
                axisTick : {length:6.5},
                name : '信号强度 (dbm)',
                nameLocation : 'center'
            },
            series: [{
                name: '设备',
                symbol : 'none',
                type: 'line',
                data: _.map(_.range(24), function(){ return -_.random(0, 100, true);}),
                smooth : true
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    });
}());


