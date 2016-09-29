import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { EmailButton } from 'react-social';

let message = "Trump or Rump?";
let url = "www.trumporrump.com";

export default class Details extends Component {


	render() {
		return (
			<div className="details">
				<h2>All about me</h2>
				<h4>My name is Hamilton Smith and I built this.
				 I thought this would be fun, so I did it.
			    It's my first web app. I used Meteor, D3, and React. 
			    I'm teaching myself to code and 
			    I'm interested in politics. I hope you enjoyed it.
			    God Bless America.
			    We're going to be alright.
			 	</h4>
			 	<h4>If you'd like to see this site stay open until the election, and also have new stuff, please</h4>


			 	<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick"/>
					<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHHgYJKoZIhvcNAQcEoIIHDzCCBwsCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCWhtt0iG8fT1L0YCeCgQsKyfikQJtgl2tcsP2qhctZOu/SAMIEJCN+Fy35bh5aevV9Fq1ftux5Bcc0OhgzIvCZ4AVUoJd9/c3Osgx+jHZa6x7b5w3w+sPQ8YohPiGXthd/11wyZdyyC6ducqeBd+vPG8NposyeoLDZ4lZKtmO2ejELMAkGBSsOAwIaBQAwgZsGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIjwyM0ILTr2OAeL+iWYkHp0ghtGpTxHhv64A3ivsAEh1C2YXVU8td7v8qzRVBeOA+d9Xo53q23e53k42Wkc2ZMvUXZlzCnOn2ZN2oIGSb1C+tfYv/awkjl6YVPxdeMmIJw6O57NpigKfgKoirdAv14h8MQYuE/Up1Aw2BwCs0mqXN8qCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE2MDkyOTE2MDUyMVowIwYJKoZIhvcNAQkEMRYEFLjSQMzsJWX2bXhGQZOimKQrWZHIMA0GCSqGSIb3DQEBAQUABIGADLx6Nz9Jv2+wpJMv6QDisEtN3ySyIx/4yAPRsxW+e6YIzd8F1E4PT+ltGPY2o7uryIohJf9WvsWyjnFOh98KTAhRmvufgVnTXA5pmHYOS599xPJZ7QogdNzSlHszQz9nxqB9BKBAxGJQSakfAMmL8qtpkxE3uE3H6GySOYCPESU=-----END PKCS7-----"/>
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>








			 <h4>If you need some coding done, contact me</h4>
			   <EmailButton title="Share via E-Mail" message={message} url={url} id="contact1"className="btn btn-primary">
                    <i className="fa fa-at"/> trumporrump@gmail.com
			   </EmailButton>
				{/*<div id="aboutcontact"><button className="btn btn-primary" id="contact" type="submit"><a href="#">Contact Me</a></button></div>*/}				
			</div>
		)
	}
}