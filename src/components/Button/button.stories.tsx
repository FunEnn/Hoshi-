import React from 'react';
import Button from './button';
import { action } from '@storybook/addon-actions';

// 默认导出，包含组件的元数据
export default {  
  title: 'Button Component',
  component: Button,
};

// 命名导出，定义具体的故事
export const DefaultButton = () => (
  <Button onClick={action('clicked')} >default button</Button>
);
DefaultButton.storyName = '默认 Button';

export const ButtonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
);
ButtonWithSize.storyName = '不同尺寸 Button';

export const ButtonWithType = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="https://google.com">link button</Button>
  </>
);
ButtonWithType.storyName = '不同类型 Button';