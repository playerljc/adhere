import React from 'react';

import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';

import VscodeIconsDefaultFolder from './ResourceManager/Icons/VscodeIconsDefaultFolder';
import VscodeIconsFileTypeActionscript2 from './ResourceManager/Icons/VscodeIconsFileTypeActionscript2';
import VscodeIconsFileTypeVideo from './ResourceManager/Icons/VscodeIconsFileTypeVideo';
import VscodeIconsFileTypeZip from './ResourceManager/Icons/VscodeIconsFileTypeZip';
import VscodeIconsFolderTypeAudio from './ResourceManager/Icons/VscodeIconsFolderTypeAudio';
import VscodeIconsFolderTypeDocs from './ResourceManager/Icons/VscodeIconsFolderTypeDocs';
import VscodeIconsFolderTypeImages from './ResourceManager/Icons/VscodeIconsFolderTypeImages';

const AdhereSearchListDict = {
  initStatic() {
    /**
     * ResourceManagerIcon
     */
    Dict.handlers.AdhereSearchListResourceManagerIconMap = () =>
      new Map([
        ['directory', <VscodeIconsDefaultFolder />],
        ['doc', <VscodeIconsFolderTypeDocs />],
        ['video', <VscodeIconsFileTypeVideo />],
        ['audio', <VscodeIconsFolderTypeAudio />],
        ['image', <VscodeIconsFolderTypeImages />],
        ['compress', <VscodeIconsFileTypeZip />],
        ['other', <VscodeIconsFileTypeActionscript2 />],
      ]);

    /**
     * AdhereSearchListResourceManagerLabelValueSelect
     */
    Dict.handlers.AdhereSearchListResourceManagerLabelValue = () => [
      {
        label: Intl.get('all'),
        value: 'all',
      },
      {
        label: Intl.get('document'),
        value: 'doc',
      },
      {
        label: Intl.get('video'),
        value: 'video',
      },
      {
        label: Intl.get('audio'),
        value: 'audio',
      },
      {
        label: Intl.get('image'),
        value: 'image',
      },
      {
        label: Intl.get('compressed'),
        value: 'compress',
      },
      {
        label: Intl.get('others'),
        value: 'other',
      },
    ];

    /**
     * ResourceManagerLabelValueMap
     */
    Dict.handlers.AdhereSearchListResourceManagerLabelValueMap = () =>
      new Map([
        ['directory', Intl.get('folder')],
        ['all', Intl.get('all')],
        ['doc', Intl.get('document')],
        ['video', Intl.get('video')],
        ['audio', Intl.get('audio')],
        ['image', Intl.get('image')],
        ['compress', Intl.get('compressed')],
        ['other', Intl.get('others')],
      ]);
  },
  initRemote() {},
};

AdhereSearchListDict.initStatic();
AdhereSearchListDict.initRemote();

export default AdhereSearchListDict;
