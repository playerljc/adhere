import React, { useImperativeHandle, useRef, useState } from 'react';

import { Popup } from '@baifendian/adhere';

import styles from './index.less';

const PopupInner = React.forwardRef((props, ref) => {
  const popupRef = useRef();

  const [id, setId] = useState('');

  useImperativeHandle(ref, () => ({
    setPopup: (popup) => {
      popupRef.current = popup;
      setId(popup.getId());
    },
  }));

  return (
    <div className={styles.Wrap}>
      <div className={styles.Fixed}>
        <a
          onClick={() => {
            const tref = React.createRef();

            const popup = Popup.create({
              onCreate: () => {},
              onBeforeShow: () => {},
              onAfterShow: () => {},
              onBeforeClose: () => Promise.resolve(),
              onAfterClose: () => Popup.destroy(popup),
              onDestroy: () => {},
              children: <PopupInner ref={tref} />,
              zIndex: 9999,
            });

            tref.current.setPopup(popup);

            popup.show();
          }}
        >
          OpenNewPopup
        </a>
        <div>Popup{id} Title</div>
        <a
          onClick={() => {
            Popup.close(popupRef.current);
          }}
        >
          Close
        </a>
        <a
          onClick={() => {
            Popup.closeAll();
          }}
        >
          CloseAll
        </a>
      </div>

      <div className={styles.Auto}>
        <div className="block">
          <p className="">
            Here comes popup. You can put here anything, even independent view with its own
            navigation. Also not, that by default popup looks a bit different on iPhone/iPod and
            iPad, on iPhone it is fullscreen.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
            ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
            quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
            Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
            pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
            convallis blandit dui sit amet, gravida adipiscing libero.
          </p>
        </div>
      </div>
    </div>
  );
});

const PopupClosePreInner = React.forwardRef((props, ref) => {
  const popupRef = useRef();

  const [id, setId] = useState('');

  useImperativeHandle(ref, () => ({
    setPopup: (popup) => {
      popupRef.current = popup;
      setId(popup.getId());
    },
  }));

  return (
    <div className={styles.Wrap}>
      <div className={styles.Fixed}>
        <a
          onClick={() => {
            const tref = React.createRef();

            const popup = Popup.create({
              onCreate: () => {},
              onBeforeShow: () => {},
              onAfterShow: () => {},
              onBeforeClose: () => Promise.resolve(),
              onAfterClose: () => Popup.destroy(popup),
              onDestroy: () => {},
              children: <PopupClosePreInner ref={tref} />,
              zIndex: 9999,
            });

            tref.current.setPopup(popup);

            popup.showClosePrePopup();
          }}
        >
          OpenNewPopup
        </a>
        <div>Popup{id} Title</div>
        <a
          onClick={() => {
            Popup.close(popupRef.current);
          }}
        >
          Close
        </a>
        <a
          onClick={() => {
            Popup.closeAll();
          }}
        >
          CloseAll
        </a>
      </div>

      <div className={styles.Auto}>
        <div className="block">
          <p className="">
            Here comes popup. You can put here anything, even independent view with its own
            navigation. Also not, that by default popup looks a bit different on iPhone/iPod and
            iPad, on iPhone it is fullscreen.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
            ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
            quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
            Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
            pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
            convallis blandit dui sit amet, gravida adipiscing libero.
          </p>
        </div>
      </div>
    </div>
  );
});

export { PopupInner, PopupClosePreInner };
