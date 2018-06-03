import React from 'react'
import PropTypes from 'prop-types'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ChartInputs from './ChartInputs.js'
import chartDefinitions from '../utilities/chartDefinitions.js'
import Sidebar from '../common/Sidebar'
import SidebarBody from '../common/SidebarBody'

import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'

class VisSidebar extends React.Component {
  render() {
    const {
      isChartable,
      onChartConfigurationFieldsChange,
      onChartTypeChange,
      onSaveImageClick,
      onVisualizeClick,
      query,
      queryResult
    } = this.props

    const chartOptions = chartDefinitions.map(d => {
      return (
        <option key={d.chartType} value={d.chartType}>
          {d.chartLabel}
        </option>
      )
    })

    return (
      <Sidebar>
        <SidebarBody>
          <FormGroup controlId="formControlsSelect" bsSize="small">
            <FormControl
              value={query.chartConfiguration.chartType}
              onChange={onChartTypeChange}
              componentClass="select"
              className="input-small"
            >
              <option value="">Choose a chart type...</option>
              {chartOptions}
            </FormControl>
          </FormGroup>
          <ChartInputs
            chartType={query.chartConfiguration.chartType}
            queryChartConfigurationFields={query.chartConfiguration.fields}
            onChartConfigurationFieldsChange={onChartConfigurationFieldsChange}
            queryResult={queryResult}
          />
        </SidebarBody>
        <div className="pa4 bt b--near-white">
          <Button
            className="w-100 mb3"
            onClick={onVisualizeClick}
            disabled={!isChartable}
          >
            Visualize
          </Button>
          <Button className="w-100 mb3" onClick={onSaveImageClick}>
            <Glyphicon glyph="save" /> Save Chart Image
          </Button>
        </div>
      </Sidebar>
    )
  }
}

VisSidebar.propTypes = {
  isChartable: PropTypes.bool,
  onChartConfigurationFieldsChange: PropTypes.func,
  onChartTypeChange: PropTypes.func,
  onSaveImageClick: PropTypes.func,
  onVisualizeClick: PropTypes.func,
  query: PropTypes.object,
  queryResult: PropTypes.object
}

export default VisSidebar
