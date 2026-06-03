import Intl from '@baifendian/adhere-util-intl';

type PathInsertRequest = {
  title: string;
  onInsert: (path: string) => void;
};

type BuildMenuConfOptions = {
  requestPathInsert: (req: PathInsertRequest) => void;
};

function buildPathBrowseAndUpload(requestPathInsert: (req: PathInsertRequest) => void, title: string) {
  return (insertFn: (url: string, alt?: string, href?: string) => void) => {
    requestPathInsert({
      title,
      onInsert: (path) => {
        insertFn(path, path, path);
      },
    });
  };
}

/** 媒体插入固定为路径方式 */
export function buildRichEditorMenuConf(options: BuildMenuConfOptions): Record<string, unknown> {
  const { requestPathInsert } = options;

  return {
    uploadImage: {
      customBrowseAndUpload: buildPathBrowseAndUpload(
        requestPathInsert,
        Intl.get('rich_editor_image'),
      ),
    },
    uploadVideo: {
      customBrowseAndUpload: buildPathBrowseAndUpload(
        requestPathInsert,
        Intl.get('rich_editor_video'),
      ),
    },
    insertLink: {
      checkLink: () => true,
      parseLinkUrl: (url: string) => url,
      customBrowseAndUpload: (insertFn: (url: string, text?: string) => void) => {
        requestPathInsert({
          title: Intl.get('rich_editor_file'),
          onInsert: (path) => insertFn(path, path),
        });
      },
    },
  };
}
