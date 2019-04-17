import * as React from 'react';
import ContactUs from "./ContactUs";
import {ISubmitResult, IValues} from "./Form";

const wait = (ms :number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

class ContactUsPage extends React.Component<{}, {}> {

    private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
        await wait(1000);
        return {
            success: true
        }
    };

    public render() {
        return (
            <div className="page-container">
                <h1>Contact us</h1>
                <p>Let us know your details so we can contact you as soon as we can.</p>
                <ContactUs onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default ContactUsPage;
