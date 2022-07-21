function ReportCommentModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/commentreport" className="ModalBtn">
                신고하기
            </a>
        </div>
    );
}

function DeleteCommentModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/commentdelete" className="ModalBtn">
                삭제
            </a>
        </div>
    );
}
export {DeleteCommentModal as default, ReportCommentModal};