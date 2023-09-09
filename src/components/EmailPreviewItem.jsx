import {useNavigate} from "react-router";
import {useState} from "react";

function EmailPreviewItem({pathname, mail, togglePreviewItemSelection}) {
    const [isSelected, setIsSelected] = useState(false)
    const navigate = useNavigate()
    function onPreviewItemClick(id) {
        navigate(`${id}`)
    }

    function onSelectItemCheckboxClick(event, id) {
        event.stopPropagation()
        togglePreviewItemSelection(id)
    }

    return (
        <article className="email-preview-item"
                 onClick={() => onPreviewItemClick(mail.id)}>
            <input className="email-preview-select-checkbox"
                   type="checkbox"
                   onClick={event => onSelectItemCheckboxClick(event, mail.id)}
                   defaultChecked={isSelected}
            />
            <div className="email-preview-item-from">
                {pathname === "/sent" ? `To:${mail.To.split('@')[0]}` : mail.From.split('@')[0]}
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