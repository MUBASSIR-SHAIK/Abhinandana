import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  applicantName: "",
  applicantAge: "",
  occupation: "",
  fatherHusbandName: "",
  address: "",
  phone: "",
  pan: "",
  aadhaar: "",
  pin: "",
  nomineeName: "",
  nomineeRelation: "",
  nomineePan: "",
  plotArea: "",
  plotFacing: "",
  nomineeAge: "",
  nomineeAadhaar: "",
  mktPerson: "",
  teamHead: "",
  place: "",
  date: "",
};

export default function ApplicationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // <-- Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",   // <-- Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"     // <-- Replace with your EmailJS Public key
      )
      .then(
        () => {
          setStatus("Application successfully sent!");
          setForm(initialState);
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  }

  return (
    <form className="ventures-application-form" onSubmit={handleSubmit} autoComplete="off" ref={formRef}>
      <h3>Application for House Site</h3>
      <div className="form-row">
        <label>
          Name of the Applicant (Mr./Mrs./Ms):
          <input type="text" name="applicantName" value={form.applicantName} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="applicantAge" value={form.applicantAge} onChange={handleChange} required min={0} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Occupation:
          <input type="text" name="occupation" value={form.occupation} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Father's / Husband's Name (Mr.):
          <input type="text" name="fatherHusbandName" value={form.fatherHusbandName} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Address for Communication:
          <input type="text" name="address" value={form.address} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone/Mobile No:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          PAN:
          <input type="text" name="pan" value={form.pan} onChange={handleChange} />
        </label>
        <label>
          Aadhaar No:
          <input type="text" name="aadhaar" value={form.aadhaar} onChange={handleChange} />
        </label>
        <label>
          Pin code:
          <input type="text" name="pin" value={form.pin} onChange={handleChange} />
        </label>
      </div>
      <br />
      <h4>Nominee Details</h4>
      <div className="form-row">
        <label>
          Name of the Nominee:
          <input type="text" name="nomineeName" value={form.nomineeName} onChange={handleChange} />
        </label>
        <label>
          Relationship:
          <input type="text" name="nomineeRelation" value={form.nomineeRelation} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          PAN:
          <input type="text" name="nomineePan" value={form.nomineePan} onChange={handleChange} />
        </label>
        <label>
          Required Area of the Plot (Sq.Yds):
          <input type="number" name="plotArea" value={form.plotArea} onChange={handleChange} min={0} />
        </label>
        <label>
          Facing:
          <input type="text" name="plotFacing" value={form.plotFacing} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Age:
          <input type="number" name="nomineeAge" value={form.nomineeAge} onChange={handleChange} min={0} />
        </label>
        <label>
          Aadhaar No:
          <input type="text" name="nomineeAadhaar" value={form.nomineeAadhaar} onChange={handleChange} />
        </label>
      </div>
      <br />
      <h4>References & Witnesses</h4>
      <div className="form-row">
        <label>
          1. Mktq. Person:
          <input type="text" name="mktPerson" value={form.mktPerson} onChange={handleChange} />
        </label>
        <label>
          2. Team Head:
          <input type="text" name="teamHead" value={form.teamHead} onChange={handleChange} />
        </label>
      </div>
      <br />
      <div className="form-row">
        <label>
          Place:
          <input type="text" name="place" value={form.place} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>
      </div>
      <div style={{ fontWeight: 500, margin: "1.2rem 0 0.5rem" }}>
        Yours Faithfully<br />
        Applicant's signature (Guardian's signature in case of minor)
      </div>
      <button type="submit" className="ventures-application-btn">Submit Application</button>
      <div style={{marginTop:10, color:"#708037", fontWeight:600}}>{status}</div>
    </form>
  );
}