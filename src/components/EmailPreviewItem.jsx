import {useNavigate} from "react-router";

function EmailPreviewItem({mail}) {
    const navigate = useNavigate()
    function onPreviewItemClick(id) {
        navigate(`${id}`)
    }

    return (
        <article className="email-preview-item"
                 onClick={() => onPreviewItemClick(mail.id)}>
            <div className="email-preview-item-from">
                {mail.From.split('@')[0]}
            </div>
            <div className="email-preview-item-content">
                {mail.Subject}
            </div>
            <div className="email-preview-item-date">
                {new Date(mail.Date).toLocaleDateString()}
            </div>
        </article>
    );
}

export default EmailPreviewItem;