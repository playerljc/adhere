declare const _default: {
    openErrorDialog: (props: import("antd").ModalProps) => {
        destroy: () => void;
        update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
    };
    openErrorMessage: (content?: import("react").ReactNode | import("antd").MessageArgsProps, duration?: (number | (() => void)) | undefined, onClose?: import("antd/lib/message").ConfigOnClose | undefined) => import("antd/lib/message").MessageType;
};
export default _default;
