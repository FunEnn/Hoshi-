import React, { useState } from "react";

import { action } from "@storybook/addon-actions";
import { Menu } from "./menu";
import { MenuItem } from "./menuItem";
import SubMenu from "./subMenu";
export default {
  title: "Menu Component",
  component: Menu,
};

export const HMenu = () => {
  return (
    <Menu mode="horizontal">
      <MenuItem key="1">nav 1</MenuItem>
      <MenuItem key="2">nav 2</MenuItem>
      <MenuItem key="3">nav 3</MenuItem>
      <MenuItem key="4">nav 4</MenuItem>
    </Menu>
  );
};
HMenu.storyName = "横向 Menu";

export const VMenu = () => {
  return (
    <Menu mode="vertical">
      <MenuItem key="1">nav 1</MenuItem>
      <MenuItem key="2">nav 2</MenuItem>
      <MenuItem key="3">nav 3</MenuItem>
      <MenuItem key="4">nav 4</MenuItem>
    </Menu>
  );
};
VMenu.storyName = "纵向 Menu";

export const SbMenu = () => {
  return (
    <Menu>
      <MenuItem key="1">nav 1</MenuItem>
      <SubMenu title="sub menu">
        <MenuItem key="2">nav 2</MenuItem>
        <MenuItem key="3">nav 3</MenuItem>
        <MenuItem key="4">nav 4</MenuItem>
      </SubMenu>
      <MenuItem key="2">nav 2</MenuItem>
    </Menu>
  );
};
SbMenu.storyName = "分类 Menu";
