import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CheckPermission from './CheckPermission';
import PermissionComponent from './PermissionComponent';
import PermissionFunDemo from './PermissionFunDemo';
import PermissionUtilsDemo from './PermissionUtilsDemo';

e2e.PC({
  children: <PermissionComponent />,
});
