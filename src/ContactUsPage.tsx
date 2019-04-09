import * as React from 'react';
import ContactUs from "./ContactUs";

interface IState {
    name: string;
    email: string;
    reason: string;
    notes: string;
}

class ContactUsPage extends React.Component<{}, IState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            reason: "",
            notes: ""
        }
    }

    private handleNameChange = (name: string) => {
       this.setState({ name });
    };

    private handleEmailChange = (email: string) => {
        this.setState({ email });
    };

    private handleReasonChange = (reason: string) => {
        this.setState({ reason });
    };

    private handleNotesChange = (notes: string) => {
        this.setState({ notes });
    };

    public render() {
        return (
            <div className="page-container">
                <h1>Contact us</h1>
                <p>Let us know your details so we can contact you as soon as we can.</p>
                <ContactUs name={this.state.name}
                           onNameChange={this.handleNameChange}
                           email={this.state.email}
                           onEmailChange={this.handleEmailChange}
                           reason={this.state.reason}
                           onReasonChange={this.handleReasonChange}
                           notes={this.state.notes}
                           onNotesChange={this.handleNotesChange}
                />
            </div>
        )
    }
}

export default ContactUsPage;