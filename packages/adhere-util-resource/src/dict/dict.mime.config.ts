import Dict from '@baifendian/adhere-util-dict';
import type { MimeConfigDict } from '../types';

/**
 * MIME类型配置字典
 * 提供各种文件类型的MIME类型映射
 */
const MimeConfig: MimeConfigDict = {
  /**
   * 初始化静态MIME类型配置
   * 设置各种文件扩展名对应的MIME类型
   */
  initStatic(): void {
    // 常用文档格式
    Dict.handlers.ResourceMimepdf = (): string => 'application/pdf';
    Dict.handlers.ResourceMimedoc = (): string => 'application/msword';
    Dict.handlers.ResourceMimedocx = (): string =>
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    Dict.handlers.ResourceMimexls = (): string => 'application/vnd.ms-excel';
    Dict.handlers.ResourceMimexlsx = (): string =>
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    Dict.handlers.ResourceMimeppt = (): string => 'application/vnd.ms-powerpoint';
    Dict.handlers.ResourceMimepptx = (): string =>
      'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    Dict.handlers.ResourceMimetxt = (): string => 'text/plain';
    Dict.handlers.ResourceMimecsv = (): string => 'text/csv';
    Dict.handlers.ResourceMimejson = (): string => 'application/json';
    Dict.handlers.ResourceMimexml = (): string => 'application/xml';

    // 图像格式
    Dict.handlers.ResourceMimejpg = (): string => 'image/jpeg';
    Dict.handlers.ResourceMimejpeg = (): string => 'image/jpeg';
    Dict.handlers.ResourceMimepng = (): string => 'image/png';
    Dict.handlers.ResourceMimegif = (): string => 'image/gif';
    Dict.handlers.ResourceMimebmp = (): string => 'image/bmp';
    Dict.handlers.ResourceMimesvg = (): string => 'image/svg+xml';
    Dict.handlers.ResourceMimewebp = (): string => 'image/webp';
    Dict.handlers.ResourceMimeico = (): string => 'image/x-icon';

    // 音频格式
    Dict.handlers.ResourceMimemp3 = (): string => 'audio/mpeg';
    Dict.handlers.ResourceMimewav = (): string => 'audio/x-wav';
    Dict.handlers.ResourceMimeogg = (): string => 'audio/ogg';
    Dict.handlers.ResourceMimeaac = (): string => 'audio/x-aac';
    Dict.handlers.ResourceMimeflac = (): string => 'audio/flac';

    // 视频格式
    Dict.handlers.ResourceMimemp4 = (): string => 'video/mp4';
    Dict.handlers.ResourceMimeavi = (): string => 'video/x-msvideo';
    Dict.handlers.ResourceMimemov = (): string => 'video/quicktime';
    Dict.handlers.ResourceMimewebm = (): string => 'video/webm';
    Dict.handlers.ResourceMimeflv = (): string => 'video/x-flv';
    Dict.handlers.ResourceMime3gp = (): string => 'video/3gpp';

    // 压缩格式
    Dict.handlers.ResourceMimezip = (): string => 'application/zip';
    Dict.handlers.ResourceMimerar = (): string => 'application/x-rar-compressed';
    Dict.handlers.ResourceMime7z = (): string => 'application/x-7z-compressed';
    Dict.handlers.ResourceMimegz = (): string => 'application/x-gzip';
    Dict.handlers.ResourceMimebz2 = (): string => 'application/x-bzip2';
    Dict.handlers.ResourceMimetar = (): string => 'application/x-tar';

    // 编程语言文件
    Dict.handlers.ResourceMimejs = (): string => 'application/javascript';
    Dict.handlers.ResourceMimecss = (): string => 'text/css';
    Dict.handlers.ResourceMimehtml = (): string => 'text/html';
    Dict.handlers.ResourceMimehtm = (): string => 'text/html';
    Dict.handlers.ResourceMimephp = (): string => 'application/x-httpd-php';
    Dict.handlers.ResourceMimepy = (): string => 'text/x-python';
    Dict.handlers.ResourceMimejava = (): string => 'text/x-java-source';
    Dict.handlers.ResourceMimec = (): string => 'text/x-c';
    Dict.handlers.ResourceMimecpp = (): string => 'text/x-c';
    Dict.handlers.ResourceMimecs = (): string => 'text/x-csharp';

    // 字体文件
    Dict.handlers.ResourceMimewoff = (): string => 'font/woff';
    Dict.handlers.ResourceMimewoff2 = (): string => 'font/woff2';
    Dict.handlers.ResourceMimettf = (): string => 'font/ttf';
    Dict.handlers.ResourceMimeotf = (): string => 'font/otf';

    // 其他常用格式
    Dict.handlers.ResourceMimebin = (): string => 'application/octet-stream';
    Dict.handlers.ResourceMimeexe = (): string => 'application/octet-stream';
    Dict.handlers.ResourceMimeapk = (): string => 'application/vnd.android.package-archive';
    Dict.handlers.ResourceMimeipa = (): string => 'application/octet-stream';
    Dict.handlers.ResourceMimeiso = (): string => 'application/x-iso9660-image';
    Dict.handlers.ResourceMimedmg = (): string => 'application/x-apple-diskimage';
  },
};

export default MimeConfig;
