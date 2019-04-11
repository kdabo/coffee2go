import * as React from 'react';
import ContactUs from "./ContactUs";


class ContactUsPage extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="page-container">
                <h1>Contact us</h1>
                <p>Let us know your details so we can contact you as soon as we can.</p>
                <ContactUs />
            </div>
        )
    }
}

export default ContactUsPage;
