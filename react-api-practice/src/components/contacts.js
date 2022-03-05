import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>연락처 목록</h1>
      </center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">이름: {contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              이메일: {contact.email}
            </h6>
            <p class="card-text">소속: {contact.company.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
