import React from"react";import Dict from"@baifendian/adhere-util-dict";import Intl from"@baifendian/adhere-util-intl";import VscodeIconsDefaultFolder from"./ResourceManager/Icons/VscodeIconsDefaultFolder";import VscodeIconsFileTypeActionscript2 from"./ResourceManager/Icons/VscodeIconsFileTypeActionscript2";import VscodeIconsFileTypeVideo from"./ResourceManager/Icons/VscodeIconsFileTypeVideo";import VscodeIconsFileTypeZip from"./ResourceManager/Icons/VscodeIconsFileTypeZip";import VscodeIconsFolderTypeAudio from"./ResourceManager/Icons/VscodeIconsFolderTypeAudio";import VscodeIconsFolderTypeDocs from"./ResourceManager/Icons/VscodeIconsFolderTypeDocs";import VscodeIconsFolderTypeImages from"./ResourceManager/Icons/VscodeIconsFolderTypeImages";var AdhereSearchListDict={initStatic:function(){Dict.handlers.AdhereSearchListResourceManagerIconMap=function(){return new Map([["directory",React.createElement(VscodeIconsDefaultFolder,null)],["doc",React.createElement(VscodeIconsFolderTypeDocs,null)],["video",React.createElement(VscodeIconsFileTypeVideo,null)],["audio",React.createElement(VscodeIconsFolderTypeAudio,null)],["image",React.createElement(VscodeIconsFolderTypeImages,null)],["compress",React.createElement(VscodeIconsFileTypeZip,null)],["other",React.createElement(VscodeIconsFileTypeActionscript2,null)]])},Dict.handlers.AdhereSearchListResourceManagerLabelValue=function(){return[{label:Intl.v("全部"),value:"all"},{label:Intl.v("文档"),value:"doc"},{label:Intl.v("视频"),value:"video"},{label:Intl.v("音频"),value:"audio"},{label:Intl.v("图片"),value:"image"},{label:Intl.v("压缩"),value:"compress"},{label:Intl.v("其他"),value:"other"}]},Dict.handlers.AdhereSearchListResourceManagerLabelValueMap=function(){return new Map([["directory",Intl.v("文件夹")],["all",Intl.v("全部")],["doc",Intl.v("文档")],["video",Intl.v("视频")],["audio",Intl.v("音频")],["image",Intl.v("图片")],["compress",Intl.v("压缩")],["other",Intl.v("其他")]])}},initRemote:function(){}};AdhereSearchListDict.initStatic(),AdhereSearchListDict.initRemote();export default AdhereSearchListDict;
//# sourceMappingURL=dict.js.map
