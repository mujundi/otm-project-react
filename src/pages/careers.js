import React from "react";

export default () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="mx-auto text-center">
          <h1>Looking for new opportunities?</h1>
          <p>
            Fusce ut placerat orci nulla pellentesque dignissim. Morbi blandit
            cursus risus at ultrices. Diam quam nulla porttitor massa id neque
            aliquam vestibulum morbi. Odio eu feugiat pretium nibh. Elit at
            imperdiet dui accumsan sit amet nulla. Aliquet nec ullamcorper sit
            amet risus nullam eget. Volutpat ac tincidunt vitae semper quis
            lectus nulla at volutpat. Iaculis urna id volutpat lacus.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <form id="contact-form" method="post" action="contact.php" role="form">
        <div className="messages"></div>

        <div className="controls">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_name">First name *</label>
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Please enter your first name *"
                  required="required"
                  data-error="First name is required."
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_lastname">Last name *</label>
                <input
                  id="form_lastname"
                  type="text"
                  name="surname"
                  className="form-control"
                  placeholder="Please enter your last name *"
                  required="required"
                  data-error="Last name is required."
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_email">Email *</label>
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Please enter your email *"
                  required="required"
                  data-error="Valid email is required."
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="form_message">Message *</label>
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Message for us *"
                  rows="4"
                  required="required"
                  data-error="Please, leave us a message."
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-12">
              <input
                type="submit"
                className="btn btn-primary btn-send"
                value="Send message"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);
