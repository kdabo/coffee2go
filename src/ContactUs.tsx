import * as React from "react";

interface IProps {
    name: string;
    email: string;
    reason: string;
    notes: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onReasonChange: (email: string) => void;
    onNotesChange: (notes: string) => void;
}

const ContactUs: React.SFC<IProps> = props => {

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onNameChange(e.currentTarget.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEmailChange(e.currentTarget.value);
    };

    const handleReasonChange =  (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onReasonChange(e.currentTarget.value);
    };

    const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onNotesChange(e.currentTarget.value);
    };

    return (
        <form className="form" noValidate={true}>
            <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" value={props.name} onChange={handleNameChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input type="email" id="name" value={props.email} onChange={handleEmailChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="reason">Reason you need to contact us</label>
                <select id="reason"
                        value={props.reason}
                        onChange={handleReasonChange}>
                    <option value="Marketing">Marketing</option>
                    <option value="Marketing">Support</option>
                    <option value="Marketing">Feedback</option>
                    <option value="Marketing">Jobs</option>
                    <option value="Marketing">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="notes">Additional notes</label>
                <input type="text" id="name" value={props.notes} onChange={handleNotesChange}/>
            </div>
        </form>
    )
};

export default ContactUs;