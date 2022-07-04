export function ReportCommentModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/commentreport" className="ModalBtn">
                신고하기
            </a>
        </div>
    );
}

export function DeleteCommentModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/commentdelete" className="ModalBtn">
                삭제
            </a>
        </div>
    );
}
