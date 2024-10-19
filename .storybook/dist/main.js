"use strict";
exports.__esModule = true;
var config = {
    stories: ["../src/welcome.stories.tsx", "../src/**/*.stories.tsx"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    docs: {
        //👇 See the table below for the list of supported options
        defaultName: 'Documentation'
    },
    staticDirs: ["..\\public"]
};
exports["default"] = config;
