# ChinaMobilePhoneNumberRegex

一组匹配中国大陆手机号码的正则表达式。

## 限制

中国大陆已于中国标准时间 2019 年 12 月 1 日正式开启携号转网服务，通过手机号码检测移动通信运营商已经不再精准。然而目前还没有其他替代方案。

## 正则表达式 ([PCRE])

###### 如果你需要 POSIX 标准的正则表达式，[点击这里](/POSIX-CN.md)

### 匹配所有号码（手机卡 + 数据卡 + 上网卡）
[`^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$`][匹配所有号码（手机卡 + 数据卡 + 上网卡）]

### 匹配所有支持短信功能的号码（手机卡 + 上网卡）
[`^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$`][匹配所有支持短信功能的号码（手机卡 + 上网卡）]

### 手机卡

#### 匹配所有
[`^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$`][匹配基础运营商]

#### 匹配中国移动
[`^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$`][匹配基础运营商中国移动]

#### 匹配中国联通
[`^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$`][匹配基础运营商中国联通]

#### 匹配中国电信
[`^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$`][匹配基础运营商中国电信]

#### 匹配中国广电
[`^(?:\+?86)?192\d{8}$`][匹配基础运营商中国广电]

#### 匹配北京船舶通信导航有限公司（海事卫星通信）
[`^(?:\+?86)?1749\d{7}$`][匹配北京船舶通信导航有限公司（海事卫星通信）]

#### 工业和信息化部应急通信保障中心（应急通信）
[`^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$`][工业和信息化部应急通信保障中心（应急通信）]

### 虚拟运营商

#### 匹配所有
[`^(?:\+?86)?1(?:7[01]|6[257])\d{8}$`][匹配虚拟运营商]

#### 匹配中国移动
[`^(?:\+?86)?1(?:65\d|70[356])\d{7}$`][匹配虚拟运营商中国移动]

#### 匹配中国联通
[`^(?:\+?86)?1(?:70[4789]|71\d|67\d)\d{7}$`][匹配虚拟运营商中国联通]

#### 匹配中国电信
[`^(?:\+?86)?1(?:70[012]|62\d)\d{7}$`][匹配虚拟运营商中国电信]

### 物联网数据卡

#### 匹配所有
[`^(?:\+?86)?14(?:[14]0|41|[68]\d)\d{9}$`][匹配所有物联网数据卡]

#### 匹配中国移动
[`^(?:\+?86)?14(?:4[01]|8\d)\d{9}$`][匹配物联网中国移动]

#### 匹配中国联通
[`^(?:\+?86)?146\d{10}$`][匹配物联网中国联通]

#### 匹配中国电信
[`^(?:\+?86)?1410\d{9}$`][匹配物联网中国电信]

### 上网卡

#### 匹配所有
[`^(?:\+?86)?14[579]\d{8}$`][匹配所有上网卡]

#### 匹配中国移动
[`^(?:\+?86)?147\d{8}$`][匹配上网卡中国移动]

#### 匹配中国联通
[`^(?:\+?86)?145\d{8}$`][匹配上网卡中国联通]

#### 匹配中国电信
[`^(?:\+?86)?149\d{8}$`][匹配上网卡中国电信]

## 在线测试/调试

https://regex101.com   
https://regexr.com   
https://www.debuggex.com （PCRE 在线视觉化）

## 规则

#### 手机卡 - 基础运营商

- 支持语音通话 / 短信 / 数据流量
- 号码长度 11 位
 
| 运营商 <sup>[1]<sup/> | 号段 |
| --- | --- |
| 中国移动 | 134-0~8 / 135 / 136 / 137 / 138 / 139 / 150 / 151 / 152 / 157 / 158 / 159 / 172 / 178 / 182 / 183 / 184 / 187 / 188 / 195 / 197 / 198 |
| 中国联通 | 130 / 131 / 132 / 155 / 156 / 166 / 175 / 176 / 185 / 186 / 196 |
| 中国电信 | 133 / 134-9 / 153 / 173 / 174-00~05 / 177 / 180 / 181 / 189 / 190 / 191 / 193 / 199 |
| 中国广电 | 192 |
| 北京船舶通信导航有限公司（海事卫星通信） | 174-9 |
| 工业和信息化部应急通信保障中心（应急通信） | 174-06~12 |


#### 手机卡 - 虚拟运营商

- 支持语音通话 / 短信 / 数据流量
- 号码长度 11 位

| 运营商 <sup>[1]<sup/> | 号段 |
| --- | --- |
| 中国移动 | 165 / 1703 / 1705 / 1706 |
| 中国联通 | 167 / 1704 / 1707 / 1708 / 1709 / 171 |
| 中国电信 | 162 / 1700 / 1701 / 1702 |

#### 物联网数据卡

- 支持数据流量
- 号码长度 13 位

| 运营商 <sup>[1]<sup/> | 号段 |
| --- | --- |
| 中国移动 | 1440X / 1441X / 148XX |
| 中国联通 | 146XX |
| 中国电信 | 1410X |

#### 上网卡

- 支持语音通话（部分） / 短信 / 数据流量
- 号码长度 11 位

| 运营商<sup>[1]<sup/> | 号段 | 语音通话 <sup>[2]<sup/> |
| --- | --- | --- |
| 中国移动 | 147 | 支持 |
| 中国联通 | 145 | 不支持 |
| 中国电信 | 149 | 支持 |

1. 注意：由于[携号转网]的在部分地区已经试行，对于成功进行携号转网的用户，手机号段不再能体现其当前所属运营商。
2. 根据工信部相关文件，145 / 147 / 149 号段允许提供语音通话功能，运营商可以根据用户需要自主决定是否提供语音通话功能。目前 147 / 149 号段已经有支持语音通话的号码卡放出。

## 参考

[中国内地移动终端通讯号码 - 维基百科]

## 关注更新

由于手机号码正则表达式具有时效性，所以当任何正则表达式出现变更时，都会发布一个新版本来触发 GitHub 的邮件系统通知所有观察了本项目的用户。如果您希望在任何正则表达式出现变更时及时得到通知，请观察本项目。

[如何观察项目新版本？]

## 更新日志

#### 2020.05.03
- 添加 1441 号段支持。

#### 2020.04.16
- 添加 192 号段支持。

#### 2020.04.07
- 添加 172 号段支持。

#### 2019.12.26
- 添加 190 / 196 / 197 号段支持。

#### 2019.12.24
- 添加 162 / 193 / 195 号段支持。

#### 2019.12.01
- 添加对于携号转网服务的提醒。

#### 2019.01.10
- 优化部分正则表达式在 JavaScript 中的兼容性。

#### 2019.01.07
- 添加 165 号段支持。

#### 2018.12.30
- 加入可选的国家码匹配。
- 加入正则表达式可视化链接。
- 修复 17X 号段在匹配非 174X 时无法匹配（例如 178）。
- 修复排除型字符集合和排除型的字符范围中未排除非数字。 
- 优化部分正则表达式。

#### 2018.12.29
- 添加 146 / 149 / 167 / 191 / 1440X / 148XX / 1410X / 174\-00\~05 / 174\-06\~12 / 174\-9 号段支持。

#### 2017.08.09
- 添加 166 / 198 / 199 号段支持。

#### 2016.10.15
- 添加英文文档。
- 添加 175 号段支持。
- 移除测试工程。
- 修复 1349 号段匹配问题。

#### 2016.04.05
- 添加 171 号段支持。
- 分离 14\* 号段匹配。
- 完善虚拟运营商号段匹配。

#### 2014.12.19
- 初次发布。

## 协议

MIT

[PCRE]: https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions

[匹配所有号码（手机卡 + 数据卡 + 上网卡）]: https://www.debuggex.com/r/dwRbKIxaFfBEIkxh

[匹配所有支持短信功能的号码（手机卡 + 上网卡）]: https://www.debuggex.com/r/IivlZsRjoXSX_FJ3

[匹配基础运营商]: https://www.debuggex.com/r/J1CfULu4yR_8AF9w

[匹配基础运营商中国移动]: https://www.debuggex.com/r/yVWOF0Gglm9xCCqF

[匹配基础运营商中国联通]: https://www.debuggex.com/r/ntO95QNIS8SEsHet

[匹配基础运营商中国电信]: https://www.debuggex.com/r/liI6MhT97bNIQTp-

[匹配基础运营商中国广电]: https://www.debuggex.com/r/cFcG0x8htmWNm-xF

[匹配北京船舶通信导航有限公司（海事卫星通信）]: https://www.debuggex.com/r/Ewdta8YJfreoXguf

[工业和信息化部应急通信保障中心（应急通信）]: https://www.debuggex.com/r/ueZ3m3NQr400LWmF

[匹配虚拟运营商]: https://www.debuggex.com/r/Gu0hy7G2qrGY3YlU

[匹配虚拟运营商中国移动]: https://www.debuggex.com/r/eXKVlO3E5W9wn5RJ

[匹配虚拟运营商中国联通]: https://www.debuggex.com/r/bKyapelcUxT0KZXb

[匹配虚拟运营商中国电信]: https://www.debuggex.com/r/j22iLshKfI_avga-

[匹配所有物联网数据卡]: https://www.debuggex.com/r/paDEMqjp1F5dM40F

[匹配物联网中国移动]: https://www.debuggex.com/r/lVn_7eMXVOEiXXK_

[匹配物联网中国联通]: https://www.debuggex.com/r/esYULNSOSyXxoACe

[匹配物联网中国电信]: https://www.debuggex.com/r/9g8nJMl_hWpaGLTi

[匹配所有上网卡]: https://www.debuggex.com/r/IHFTe5Z099QxCyvb

[匹配上网卡中国移动]: https://www.debuggex.com/r/zu-yH27vlHT3oSJ7

[匹配上网卡中国联通]: https://www.debuggex.com/r/4YLUXlvZD6VcvPtQ

[匹配上网卡中国电信]: https://www.debuggex.com/r/uzvr1c395PsqG-K6

[携号转网]: https://zh.wikipedia.org/zh-cn/%E9%9B%BB%E8%A9%B1%E8%99%9F%E7%A2%BC%E5%8F%AF%E6%94%9C%E6%9C%8D%E5%8B%99

[中国内地移动终端通讯号码 - 维基百科]: https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E7%A7%BB%E5%8A%A8%E7%BB%88%E7%AB%AF%E9%80%9A%E8%AE%AF%E5%8F%B7%E7%A0%81

[如何观察项目新版本？]: https://help.github.com/articles/watching-and-unwatching-releases-for-a-repository/#watching-releases-for-a-repository
