import "./UploadFileBtn.css";

function UploadFileBtn(props) {
    return (
        <>
            <label
                htmlFor={props.forAndId}
                className={`UploadFileLabel ${props.type}`}
                style={{
                    right: `${props.right}`,
                    bottom: `${props.bottom}`,
                    position: `${props.position}`,
                }}
            />
            <input type="file" id={props.forAndId} accept="image/*" />
        </>
    );
}

export default UploadFileBtn;