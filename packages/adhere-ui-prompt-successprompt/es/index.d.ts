/// <reference types="react" />
declare const _default: {
    openSuccessMessage: (content?: import("react").ReactNode | import("antd/lib/message").ArgsProps, duration?: number | VoidFunction | undefined, onClose?: VoidFunction | undefined) => import("antd/es/message/interface").MessageType;
    openSuccessDialog: (props?: import("antd/lib/modal/Modal").ModalProps | undefined) => {
        destroy: () => void;
        update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
    };
};
export default _default;
