import loadTrendsFilterWidget from '../../widgets/TrendsFilter/trendsFilter.widget';
import loadTrendsChartWidget from '../../widgets/TrendsChart/trendsChart.widget';

export default [
	{
		path: 'trends-filter',
		getComponent(done) {
			loadTrendsFilterWidget(mod => done(mod.default));
		},
	},
	{
		path: 'trends-chart',
		getComponent(done) {
			loadTrendsChartWidget(mod => done(mod.default));
		},
	},
];
