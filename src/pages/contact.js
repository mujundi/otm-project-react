import React from "react";

export default () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="mx-auto text-center">
          <h1>Have some questions?</h1>
          <p>Call us at 1-800-555-5555, or send us a message below!</p>
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
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_need">Please specify your need *</label>
                <select
                  id="form_need"
                  name="need"
                  className="form-control"
                  required="required"
                  data-error="Please specify your need."
                >
                  <option value=""></option>
                  <option value="General inquiry">General inquiry</option>
                  <option value="Request quote">Request quote</option>
                  <option value="Request copy of invoice">
                    Request copy of an invoice
                  </option>
                  <option value="Give feedback">Give feedback</option>
                  <option value="Other">Other</option>
                </select>
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
