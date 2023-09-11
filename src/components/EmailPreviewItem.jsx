import {useNavigate} from "react-router";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

function EmailPreviewItem({pathname, mail,
                              toggleIsSelected, toggleIsStarred, toogleIsViewed}) {
    const [isSelected, setIsSelected] = useState(false)
    const navigate = useNavigate()
    const [_, setSearchParams] = useSearchParams()

    function onPreviewItemClick(mail) {
        toogleIsViewed(mail)
        if (pathname==="/drafts") {
            setSearchParams({"compose":mail.id})
        }
        else {
            navigate(`${mail.id}`)
        }
    }

    function onSelectItemCheckboxClick(event, id) {
        event.stopPropagation()
        toggleIsSelected(id)
    }

    function onStarMailClick(event, id) {
        event.stopPropagation()
        toggleIsStarred(id)
    }

    const itemIsViewed = mail.isViewed ? "" : "email-preview-item-unread"
    const starCheckStyle = mail.isStarred ? "email-preview-star-checked" : "email-preview-star-unchecked"

    return (
        <article className={`email-preview-item ${itemIsViewed}`}
                 onClick={() => onPreviewItemClick(mail)}>
            <input className="email-preview-select-checkbox"
                   type="checkbox"
                   onClick={event => onSelectItemCheckboxClick(event, mail.id)}
                   defaultChecked={isSelected}
            />
            <span className={`email-preview-star ${starCheckStyle}`}
                  title={mail.isStarred ? "Starred" : "Not starred"}
                  onClick={event => onStarMailClick(event, mail)}
            ></span>
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