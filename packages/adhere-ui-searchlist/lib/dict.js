"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),VscodeIconsDefaultFolder_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsDefaultFolder")),VscodeIconsFileTypeActionscript2_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsFileTypeActionscript2")),VscodeIconsFileTypeVideo_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsFileTypeVideo")),VscodeIconsFileTypeZip_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsFileTypeZip")),VscodeIconsFolderTypeAudio_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsFolderTypeAudio")),VscodeIconsFolderTypeDocs_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsFolderTypeDocs")),VscodeIconsFolderTypeImages_1=__importDefault(require("./ResourceManager/Icons/VscodeIconsFolderTypeImages")),AdhereSearchListDict={initStatic:function(){adhere_util_dict_1.default.handlers.AdhereSearchListResourceManagerIconMap=function(){return new Map([["directory",react_1.default.createElement(VscodeIconsDefaultFolder_1.default,null)],["doc",react_1.default.createElement(VscodeIconsFolderTypeDocs_1.default,null)],["video",react_1.default.createElement(VscodeIconsFileTypeVideo_1.default,null)],["audio",react_1.default.createElement(VscodeIconsFolderTypeAudio_1.default,null)],["image",react_1.default.createElement(VscodeIconsFolderTypeImages_1.default,null)],["compress",react_1.default.createElement(VscodeIconsFileTypeZip_1.default,null)],["other",react_1.default.createElement(VscodeIconsFileTypeActionscript2_1.default,null)]])},adhere_util_dict_1.default.handlers.AdhereSearchListResourceManagerLabelValueSelect=function(){return[{label:adhere_util_intl_1.default.v("全部"),value:"all"},{label:adhere_util_intl_1.default.v("文档"),value:"doc"},{label:adhere_util_intl_1.default.v("视频"),value:"video"},{label:adhere_util_intl_1.default.v("音频"),value:"audio"},{label:adhere_util_intl_1.default.v("图片"),value:"image"},{label:adhere_util_intl_1.default.v("压缩"),value:"compress"},{label:adhere_util_intl_1.default.v("其他"),value:"other"}]},adhere_util_dict_1.default.handlers.AdhereSearchListResourceManagerLabelValueMap=function(){return new Map([["directory",adhere_util_intl_1.default.v("文件夹")],["all",adhere_util_intl_1.default.v("全部")],["doc",adhere_util_intl_1.default.v("文档")],["video",adhere_util_intl_1.default.v("视频")],["audio",adhere_util_intl_1.default.v("音频")],["image",adhere_util_intl_1.default.v("图片")],["compress",adhere_util_intl_1.default.v("压缩")],["other",adhere_util_intl_1.default.v("其他")]])}},initRemote:function(){}};AdhereSearchListDict.initStatic(),AdhereSearchListDict.initRemote(),console.log("Dict Init"),exports.default=AdhereSearchListDict;
//# sourceMappingURL=dict.js.map
