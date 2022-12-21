declare const _default: {
    openSuccessMessage: (content?: import("react").ReactNode | import("antd").MessageArgsProps, duration?: (number | (() => void)) | undefined, onClose?: import("antd/lib/message").ConfigOnClose | undefined) => import("antd/lib/message").MessageType;
    openSuccessDialog: (props?: import("antd").ModalProps | undefined) => {
        destroy: () => void;
        update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
    };
};
export default _default;
