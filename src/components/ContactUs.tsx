import * as React from "react";
import { Form, required, minLength, IValues, ISubmitResult } from "../containers/Form";
import {style} from "styled-system";

interface IProps {
    onSubmit: (values: IValues) => Promise<ISubmitResult>
}

const ContactUs: React.SFC<IProps> = props => {

    const handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
        const result = await props.onSubmit(values);
        return result;
    };

    return (
        <div dangerouslySetInnerHTML={{__html:`
            <!-- Begin Mailchimp Signup Form -->
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                <style type="text/css">
                    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
                    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                </style>
                <style type="text/css">
                    #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
                    #mergeRow-gdpr {margin-top: 20px;}
                    #mergeRow-gdpr fieldset label {font-weight: normal;}
                    #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
                </style>
                <div id="mc_embed_signup">
                    <form action="https://gmail.us4.list-manage.com/subscribe/post?u=c769570b7d71cae132c3372ff&amp;id=0c83eb54d4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe</h2>
                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                                </label>
                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                            </div>
                            <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                                <div class="content__gdpr">
                                    <label>Marketing Permissions</label>
                                    <p>Please select all the ways you would like to hear from Coffee2go:</p>
                                    <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                        <label class="checkbox subfield" for="gdpr_12973"><input type="checkbox" id="gdpr_12973" name="gdpr[12973]" value="Y" class="av-checkbox "><span>Email</span> </label><label class="checkbox subfield" for="gdpr_12977"><input type="checkbox" id="gdpr_12977" name="gdpr[12977]" value="Y" class="av-checkbox "><span>Direct Mail</span> </label><label class="checkbox subfield" for="gdpr_12981"><input type="checkbox" id="gdpr_12981" name="gdpr[12981]" value="Y" class="av-checkbox "><span>Customized Online Advertising</span> </label>
                                    </fieldset>
                                    <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
                                </div>
                                <div class="content__gdprLegal">
                                    <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
                                </div>
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c769570b7d71cae132c3372ff_0c83eb54d4" tabindex="-1" value=""></div>
                            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                        </div>
                    </form>
                </div>
                <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
                <!--End mc_embed_signup-->
            `}}/>
    );
};

export default ContactUs;
