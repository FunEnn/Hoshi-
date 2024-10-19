// storyWrapper.js
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import "../src/components/Icon/icon"

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};

const storyWrapper = (storyFn: any) => {
  return (
    <div style={wrapperStyle}>
      <h3>组件演示</h3>
      {storyFn()}
    </div>
  );
};

export const decorators = [storyWrapper, withInfo];