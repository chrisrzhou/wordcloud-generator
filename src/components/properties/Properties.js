import InputNumber from 'antd/lib/input-number';
import Form, {Item as FormItem} from 'antd/lib/form';
import {Button as RadioButton, Group as RadioGroup} from 'antd/lib/radio';
import Select, {Option} from 'antd/lib/select';
import Slider from 'antd/lib/slider';
import Switch from 'antd/lib/switch';
import React from 'react';

const Properties = () => (
  <Form>
    <FormItem label="Font Family">
      <Select placeholder="select a font" defaultValue="Impact">
        <Option value="Times New Roman">Times New Roman</Option>
        <Option value="Impact">Impact</Option>
        <Option value="Courier">Courier</Option>
      </Select>
    </FormItem>
    <FormItem label="Displayed Words">
      <InputNumber max={500} min={10} step={10} defaultValue={100} />
    </FormItem>
    <FormItem label="Enable Tooltip">
      <Switch defaultChecked={true} />
    </FormItem>
    <FormItem label="Orientations">
      <InputNumber max={5} min={0} step={1} defaultValue={0} />
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
        defaultValue={[0, 0]}
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
        defaultValue={1000}
      />
    </FormItem>
    <FormItem label="Word Layout">
      <RadioGroup defaultValue="archimedean">
        <RadioButton value="rectangular">rectangular</RadioButton>
        <RadioButton value="archimedean">archimedean</RadioButton>
      </RadioGroup>
    </FormItem>
    <FormItem label="Word Scale">
      <RadioGroup defaultValue="log">
        <RadioButton value="sqrt">Square Root</RadioButton>
        <RadioButton value="log">Log</RadioButton>
        <RadioButton value="linear">Linear</RadioButton>
      </RadioGroup>
    </FormItem>
  </Form>
);

export default Properties;
