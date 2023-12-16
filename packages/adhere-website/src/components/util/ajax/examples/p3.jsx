import { Avatar, Progress } from 'antd';
import React, { useRef, useState } from 'react';

import { Ajax } from '@baifendian/adhere';
import { Space } from '@baifendian/adhere';

const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

export default () => {
  const uploadFormFef = useRef();
  const uploadRef = useRef();
  const [img, setImg] = useState(null);
  const [percent, setPercent] = useState(0);

  return (
    <form encType="multipart/form-data" method="post" ref={uploadFormFef}>
      <div>
        <Avatar shape="square" size="large" icon={img ? <img src={img} alt="" /> : null} />

        <Space direction="vertical" />

        <input
          type="file"
          ref={uploadRef}
          onChange={() => {
            const file = uploadRef.current.files[0];

            const { size } = file;

            const reader = new FileReader();
            reader.onload = (e) => {
              setImg(e.target.result);
            };

            reader.readAsDataURL(file);

            k007Ajax
              .post({
                path: '/api/personControl/monitorPerson/image/upload',
                data: {
                  form: uploadFormFef.current,
                  data: {
                    file,
                  },
                },
                loading: {
                  show: true,
                },
                onProgress: (e) => {
                  setPercent((e.loaded / size) * 100);
                },
                onLoadend: () => {
                  setPercent(100);
                },
              })
              .promise.then((res) => {
                setPercent(100);

                if (res) {
                  if (res.data.code === 200) {
                    alert(JSON.stringify(res.data.data));
                  }

                  res.hideIndicator();
                }
              });
          }}
        />

        <Space direction="vertical" />

        <Progress percent={percent} />
      </div>
    </form>
  );
};
