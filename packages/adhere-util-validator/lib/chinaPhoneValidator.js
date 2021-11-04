export default{isAllChinaPhoneNumber:function(t){return/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/.test(t)},isSMSChinaPhoneNumber:function(t){return/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/.test(t)},isSIMCard:function(t){return/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/.test(t)},isChinaMobileSIMCard:function(t){return/^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/.test(t)},isChinaUnicomSIMCard:function(t){return/^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/.test(t)},isChinaTelecomSIMCard:function(t){return/^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/.test(t)},isChinaSARFTSIMCard:function(t){return/^(?:\+?86)?192\d{8}$/.test(t)},isINMARSATSIMCard:function(t){return/^(?:\+?86)?1749\d{7}$/.test(t)},isOnedowSIMCard:function(t){return/^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/.test(t)},isVirtualSIMCard:function(t){return/^(?:\+?86)?1(?:7[01]|6[257])\d{8}$/.test(t)},isChinaMobileVirtualSIMCard:function(t){return/^(?:\+?86)?1(?:65\d|70[356])\d{7}$/.test(t)},isChinaUnicomVirtualSIMCard:function(t){return/^(?:\+?86)?1(?:70[4789]|71\d|67\d)\d{7}$/.test(t)},isChinaTelecomVirtualSIMCard:function(t){return/^(?:\+?86)?1(?:70[012]|62\d)\d{7}$/.test(t)},isIoTSIMCard:function(t){return/^(?:\+?86)?14(?:[14]0|41|[68]\d)\d{9}$/.test(t)},isChinaMobileIoTSIMCard:function(t){return/^(?:\+?86)?14(?:4[01]|8\d)\d{9}$/.test(t)},isChinaUnicomIoTSIMCard:function(t){return/^(?:\+?86)?146\d{10}$/.test(t)},isChinaTelecomIoTSIMCard:function(t){return/^(?:\+?86)?1410\d{9}$/.test(t)},isWIETSIMCard:function(t){return/^(?:\+?86)?14[579]\d{8}$/.test(t)},isChinaMobileWIETSIMCard:function(t){return/^(?:\+?86)?147\d{8}$/.test(t)},isChinaUnicomWIETSIMCard:function(t){return/^(?:\+?86)?145\d{8}$/.test(t)},isChinaTelecomWIETSIMCard:function(t){return/^(?:\+?86)?149\d{8}$/.test(t)}};
//# sourceMappingURL=chinaPhoneValidator.js.map