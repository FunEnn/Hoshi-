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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("@testing-library/jest-dom/extend-expect");
var react_1 = require("react");
var axios_1 = require("axios");
var react_2 = require("@testing-library/react");
var upload_1 = require("./upload");
jest.mock('../Icon/icon', function () {
    return function (_a) {
        var icon = _a.icon, onClick = _a.onClick;
        return react_1["default"].createElement("span", { onClick: onClick }, icon);
    };
});
jest.mock('axios');
var mockedAxios = axios_1["default"];
var testProps = {
    action: "fakeurl.com",
    onSuccess: jest.fn(),
    onChange: jest.fn(),
    onRemove: jest.fn(),
    drag: true
};
var wrapper, fileInput, uploadArea;
var testFile = new File(['xyz'], 'test.png', { type: 'image/png' });
describe('test upload component', function () {
    beforeEach(function () {
        wrapper = react_2.render(react_1["default"].createElement(upload_1.Upload, __assign({}, testProps), "Click to upload"));
        fileInput = wrapper.container.querySelector('.viking-file-input');
        uploadArea = wrapper.queryByText('Click to upload');
    });
    it('upload process should works fine', function () { return __awaiter(void 0, void 0, void 0, function () {
        var queryByText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryByText = wrapper.queryByText;
                    // mockedAxios.post.mockImplementation(() => {
                    //   return Promise.resolve({'data': 'cool'})
                    // })
                    mockedAxios.post.mockResolvedValue({ 'data': 'cool' });
                    expect(uploadArea).toBeInTheDocument();
                    expect(fileInput).not.toBeVisible();
                    react_2.fireEvent.change(fileInput, { target: { files: [testFile] } });
                    expect(queryByText('spinner')).toBeInTheDocument();
                    return [4 /*yield*/, react_2.waitFor(function () {
                            expect(queryByText('test.png')).toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    expect(queryByText('check-circle')).toBeInTheDocument();
                    expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile);
                    expect(testProps.onChange).toHaveBeenCalledWith(testFile);
                    //remove the uploaded file
                    expect(queryByText('times')).toBeInTheDocument();
                    react_2.fireEvent.click(queryByText('times'));
                    expect(queryByText('test.png')).not.toBeInTheDocument();
                    expect(testProps.onRemove).toHaveBeenCalledWith(expect.objectContaining({
                        raw: testFile,
                        status: 'success',
                        name: 'test.png'
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it('drag and drop files should works fine', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockDropEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    react_2.fireEvent.dragOver(uploadArea);
                    expect(uploadArea).toHaveClass('is-dragover');
                    react_2.fireEvent.dragLeave(uploadArea);
                    expect(uploadArea).not.toHaveClass('is-dragover');
                    mockDropEvent = react_2.createEvent.drop(uploadArea);
                    Object.defineProperty(mockDropEvent, "dataTransfer", {
                        value: {
                            files: [testFile]
                        }
                    });
                    react_2.fireEvent(uploadArea, mockDropEvent);
                    return [4 /*yield*/, wait(function () {
                            expect(wrapper.queryByText('test.png')).toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile);
                    return [2 /*return*/];
            }
        });
    }); });
});
