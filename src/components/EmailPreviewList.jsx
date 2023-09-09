import EmailPreviewItem from "./EmailPreviewItem.jsx";

function EmailPreviewList({mails, pathname, togglePreviewItemSelection, deletedSelectedItems}) {
    return (
        <div className="items-list">
            <div className="list-header">
                <input type="checkbox" className="select-all-checkbox"/>
                <button className="sort-button" onClick={deletedSelectedItems}>
                    Delete
                </button>
                <button className="sort-button">Sort By Date</button>
                <button className="sort-button">Sort By Subject</button>
                <div className="pagination">1-10 of 25</div>
                <button className="pagination-button">&#8249;</button>
                <button className="pagination-button">&#8250;</button>
            </div>

            <div className="email-preview">
                <ul className="items-list">
                    {mails
                        .sort((a,b) => new Date(b.Date) - new Date(a.Date))
                        .slice(0,14)
                        .map(mail =>
                            <EmailPreviewItem key={mail.id}
                                              pathname={pathname}
                                              mail={mail}
                                              togglePreviewItemSelection={togglePreviewItemSelection}
                            />
                        )}
                </ul>
            </div>
        </div>
    );
}

export default EmailPreviewList;