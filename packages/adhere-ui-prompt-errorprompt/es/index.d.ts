/// <reference types="react" />
declare const _default: {
    openErrorDialog: (props?: import("antd/lib/modal/Modal").ModalProps | undefined) => {
        destroy: () => void;
        update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
    };
    openErrorMessage: (content?: import("react").ReactNode | import("antd/lib/message").ArgsProps, duration?: number | VoidFunction | undefined, onClose?: VoidFunction | undefined) => import("antd/es/message/interface").MessageType;
};
export default _default;
