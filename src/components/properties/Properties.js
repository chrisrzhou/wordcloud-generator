import InputNumber from 'antd/lib/input-number';
import Form, {Item as FormItem} from 'antd/lib/form';
import {Button as RadioButton, Group as RadioGroup} from 'antd/lib/radio';
import Select, {Option} from 'antd/lib/select';
import Slider from 'antd/lib/slider';
import Switch from 'antd/lib/switch';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import properties from 'store/modules/properties';
const {actions, selectors} = properties;

const Properties = ({properties, onEdit}) => {
  const {
    fontFamily,
    maxWords,
    orientations,
    orientationAngles,
    scale,
    spiral,
    tooltipEnabled,
    transitionDuration,
  } = properties;
  return (
    <Form>
      <FormItem label="Font Family">
        <Select
          placeholder="select a font"
          value={fontFamily}
          onChange={value => onEdit({field: 'fontFamily', value})}>
          <Option value="Times New Roman">Times New Roman</Option>
          <Option value="Impact">Impact</Option>
          <Option value="Courier">Courier</Option>
        </Select>
      </FormItem>
      <FormItem label="Displayed Words">
        <InputNumber
          max={500}
          min={10}
          step={10}
          value={maxWords}
          onChange={value => onEdit({field: 'maxWords', value})}
        />
      </FormItem>
      <FormItem label="Enable Tooltip">
        <Switch
          checked={tooltipEnabled}
          onChange={value => onEdit({field: 'tooltipEnabled', value})}
        />
      </FormItem>
      <FormItem label="Orientations">
        <InputNumber
          max={5}
          min={0}
          step={1}
          value={orientations}
          onChange={value => onEdit({field: 'orientations', value})}
        />
      </FormItem>
      <FormItem label="Orientation Angles">
        <Slider
          marks={{
            [-180]: '-180',
            180: '180',
          }}
          max={180}
          min={-180}
          range={true}
          step={5}
          value={orientationAngles}
          onChange={value => onEdit({field: 'orientationAngles', value})}
        />
      </FormItem>
      <FormItem label="Transition Duration">
        <Slider
          marks={{
            100: '100',
            3000: '3000',
          }}
          max={3000}
          min={100}
          step={100}
          value={transitionDuration}
          onChange={value => onEdit({field: 'transitionDuration', value})}
        />
      </FormItem>
      <FormItem label="Word Layout">
        <RadioGroup
          value={spiral}
          onChange={e => onEdit({field: 'spiral', value: e.target.value})}>
          <RadioButton value="rectangular">rectangular</RadioButton>
          <RadioButton value="archimedean">archimedean</RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem label="Word Scale">
        <RadioGroup
          value={scale}
          onChange={e => onEdit({field: 'scale', value: e.target.value})}>
          <RadioButton value="sqrt">Square Root</RadioButton>
          <RadioButton value="log">Log</RadioButton>
          <RadioButton value="linear">Linear</RadioButton>
        </RadioGroup>
      </FormItem>
    </Form>
  );
};

export default connect(
  createStructuredSelector({
    properties: selectors.getProperties,
  }),
  {
    onEdit: actions.edit,
  },
)(Properties);
