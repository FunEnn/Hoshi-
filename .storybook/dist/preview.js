"use strict";
exports.__esModule = true;
require("../src/styles/index.scss");
var decorators_1 = require("./decorators");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var preview = {
    decorators: decorators_1.decorators,
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        info: {
            inline: true,
            header: false
        }
    }
};
exports["default"] = preview;
