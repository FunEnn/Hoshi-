import React, { useState } from "react";

import { action } from "@storybook/addon-actions";
import { Input } from "./input";

export default {
  title: "Input component",
  component: Input,
};
const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
export const DefaultInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <ControlledInput />
  </>
);

DefaultInput.storyName = "Input";

export const DisabledInput = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);
DisabledInput.storyName = "被禁用的 Input";

export const IconInput = () => (
  <Input
    style={{ width: "300px" }}
    placeholder="input with icon"
    icon="search"
  />
);
IconInput.storyName = "带图标的 Input";

export const SizeInput = () => (
  <>
    <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </>
);
SizeInput.storyName = "大小不同的 Input";

export const PandInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
  </>
);
PandInput.storyName = "带前后缀的 Input";
