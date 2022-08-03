"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Primary = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/Label",
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: "select" },
        customColor: { control: "color" },
    },
};
var Template = function (props) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, props))); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "h1",
    allCaps: false,
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: "normal",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: "normal",
    color: "tertiary",
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    size: "normal",
    color: "primary",
};
exports.CustomFontColor = Template.bind({});
exports.Primary.args = {
    size: "h1",
};
