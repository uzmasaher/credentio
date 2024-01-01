// components/ShowSearch.js
"use client";

import React from "react";

import Link from "next/link";
import PasswordList from "./PasswordList";

const ShowSearch = (props) => {
  const result = props.result.results;
  const searchTerm = props.searchTerm;
  const isEmpty = props.isEmpty;
  if (isEmpty) {
    <PasswordList />;
    return null;
  }
  if (!result || result.length === 0) {
    return (
      <div>
        <p className="text flex justify-center mt-3">
          No search results found for "{searchTerm}"
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text flex justify-center mt-3">
        Showing results for {searchTerm}
      </p>
      <div className="col_2">
        {result.map((t) => (
          <div key={t._id} className="password_box ">
            <h5 className="h5_card">Project : {t.project}</h5>
            <div className="line mb-2" />
            <div className="my-3">
              <b className="text">Client Name : </b> {t.clientName}
            </div>
            <div className="my-3">
              <b className="text">Password : </b> {t.password}
            </div>
            <div className="my-3">
              <b className="text">Application : </b> {t.application}
            </div>
            <div className="my-3">
              <b className="text">userName : </b>{" "}
              <span className="ml-4">{t.userName}</span>
            </div>
            <div className="my-3">
              <b className="text">URL : </b>
              <Link href={t.url} target="_blank" className="link text ">
                {t.url}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default ShowSearch;
