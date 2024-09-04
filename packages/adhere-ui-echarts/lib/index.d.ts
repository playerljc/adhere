declare const _default: {
    readonly merge: any;
    readonly options: {
        readonly baseOption: () => {
            grid: {
                left: string;
                right: string;
                top: string;
                bottom: string;
                containLabel: boolean;
            };
        };
        readonly valueToYOption: () => {
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
        };
        readonly valueToXOption: () => {
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
        };
        readonly barOption: () => {
            type: string;
        };
        readonly barToStackOption: (stack: string) => any;
        readonly barToRealtimeSortOption: () => any;
        readonly lineOption: () => {
            type: string;
        };
        readonly lineToStackOption: (stack: string) => any;
        readonly lineToAreaOption: (areaStyle: import("./types").AreaStyle) => any;
        readonly lineToSmoothOption: () => any;
        readonly lineToStepOption: (step: string) => any;
        readonly pieOption: () => {
            type: string;
        };
        readonly pieToRadiusOption: (radius: import("./types").Radius) => any;
        readonly pieToRoseOption: (roseType: boolean) => any;
        readonly scatterOption: () => {
            type: string;
        };
        readonly radarOption: () => {
            type: string;
        };
        readonly sunburstOption: () => {
            type: string;
        };
        readonly boxplotOption: () => {
            type: string;
        };
        readonly candlestickOption: () => {
            type: string;
        };
        readonly heatmapOption: () => {
            type: string;
        };
        readonly sankeyOption: () => {
            type: string;
        };
        readonly funnelOption: () => {
            type: string;
        };
        readonly gaugeOption: () => {
            type: string;
        };
        readonly barChart: (series?: import("echarts/charts").BarSeriesOption[] | undefined) => any;
        readonly barChartToStack: (stack: string | string[], series?: import("echarts/charts").BarSeriesOption[] | undefined) => any;
        readonly barChartToRealtimeSort: (series?: import("echarts/charts").BarSeriesOption[] | undefined) => any;
        readonly barChartValueToX: (series?: import("echarts/charts").BarSeriesOption[] | undefined) => any;
        readonly barChartToStackValueToX: (stack: string | string[], series?: import("echarts/charts").BarSeriesOption[] | undefined) => any;
        readonly barChartToRealtimeSortValueToX: (series?: import("echarts/charts").BarSeriesOption[] | undefined) => any;
        readonly lineChart: (series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToStack: (stack: string | string[], series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToArea: (areaStyle: import("./types").AreaStyle | import("./types").AreaStyle[], series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToSmooth: (series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToStep: (step: string | string[], series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartValueToX: (series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToStackValueToX: (stack: string | string[], series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToAreaValueToX: (areaStyle: import("./types").AreaStyle | import("./types").AreaStyle[], series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToSmoothValueToX: (series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly lineChartToStepValueToX: (step: string | string[], series?: import("echarts/charts").LineSeriesOption[] | undefined) => any;
        readonly pieChart: (series?: import("echarts/charts").PieSeriesOption[] | undefined) => any;
        readonly pieChartToRadius: (radius: import("./types").Radius | import("./types").Radius[], series?: import("echarts/charts").PieSeriesOption[] | undefined) => any;
        readonly pieChartToRose: (roseType: boolean | boolean[], series?: import("echarts/charts").PieSeriesOption[] | undefined) => any;
        readonly scatterChart: (series?: import("echarts/charts").ScatterSeriesOption[] | undefined) => any;
        readonly scatterChartValueToX: (series?: import("echarts/charts").ScatterSeriesOption[] | undefined) => any;
        readonly radarChart: (series?: import("echarts/charts").RadarSeriesOption[] | undefined) => any;
        readonly sunburstChart: (series?: import("echarts/charts").SunburstSeriesOption[] | undefined) => any;
        readonly boxplotChart: (series?: import("echarts/charts").BoxplotSeriesOption[] | undefined) => any;
        readonly candlestickChart: (series?: import("echarts/charts").CandlestickSeriesOption[] | undefined) => any;
        readonly heatmapChart: (series?: import("echarts/charts").HeatmapSeriesOption[] | undefined) => any;
        readonly sankeyChart: (series?: import("echarts/charts").SankeySeriesOption[] | undefined) => any;
        readonly funnelChart: (series?: import("echarts/charts").FunnelSeriesOption[] | undefined) => any;
        readonly gaugeChart: (series?: import("echarts/charts").GaugeSeriesOption[] | undefined) => any;
    };
    readonly colors: {
        color33: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color34: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color35: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color36: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color37: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color38: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color39: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color40: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color41: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color42: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color43: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color44: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color45: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color46: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color47: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color48: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color49: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color50: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color51: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color52: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color53: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color54: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color55: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color56: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color57: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color58: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color59: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color60: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color61: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color62: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color63: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color64: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color65: {
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: {
                offset: number;
                color: string;
            }[];
            global: boolean;
        };
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
        color6: string;
        color7: string;
        color8: string;
        color9: string;
        color10: string;
        color11: string;
        color12: string;
        color13: string;
        color14: string;
        color15: string;
        color16: string;
        color17: string;
        color18: string;
        color19: string;
        color20: string;
        color21: string;
        color22: string;
        color23: string;
        color24: string;
        color25: string;
        color26: string;
        color27: string;
        color28: string;
        color29: string;
        color30: string;
        color31: string;
        color32: string;
    };
};
export default _default;
