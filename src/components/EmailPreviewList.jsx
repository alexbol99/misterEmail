import EmailPreviewItem from "./EmailPreviewItem.jsx";
import {NavLink} from "react-router-dom";

function EmailPreviewList({mails}) {
    return (
        <div className="items-list">
            <div className="list-header">
                <input type="checkbox" className="select-all-checkbox"/>
                <button className="sort-button">Date</button>
                <button className="sort-button">Subject</button>
                <div className="pagination">1-10 of 25</div>
                <button className="pagination-button">&#8249;</button>
                <button className="pagination-button">&#8250;</button>
            </div>

            <div className="email-preview">
                <ul className="items-list">
                    {mails
                        .sort((a,b) => new Date(b.Date) - new Date(a.Date))
                        .slice(1,15)
                        .map(mail =>
                            <EmailPreviewItem key={mail.id}
                                              mail={mail}
                            />
                        )}
                </ul>
            </div>
        </div>
    );
}

export default EmailPreviewList;