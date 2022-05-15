import React, { useState } from "react";
import "../../App.css";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submitted", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("email is missing or invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("User is filling out form..", formState);
    }
  };

  return (
    <>
      <div className="contact mt-0">
        <h1 className="title mb-0 mt-0">Contact</h1>
        <div
          className="columns is-desktop is-centered contact-body"
          id="contact-columns"
        >
          <div className="column" id="contact-column">
            <section>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      className="input is-danger"
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Name"
                      onBlur={handleChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      className="input is-danger"
                      type="email"
                      name="email"
                      placeholder="Email"
                      defaultValue={email}
                      onBlur={handleChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <textarea
                    className="textarea is-danger is-rounded"
                    name="message"
                    rows="5"
                    defaultValue={message}
                    onBlur={handleChange}
                    placeholder="Leave a message!"
                  />
                </div>
                {errorMessage && (
                  <div className="is-flex is-justify-content-right">
                    <p className="error-msg">{errorMessage}</p>
                  </div>
                )}
                <button
                  className="button btn--outline btn--medium"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
