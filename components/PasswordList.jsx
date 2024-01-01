// PasswordList.jsx
"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Link from "next/link";

const PasswordList = () => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setPasswords(data.passwordList);
    } catch (error) {
      console.error("Error init(): ", error);
    }
  };

  const removePassword = async (id) => {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/contact?id=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          console.log(`Password with ID ${id} deleted successfully`);
          setPasswords((passwords) => {
            console.log(passwords);
            // return passwords.filter((password) => password.id !== id);
          });
        } else {
          const data = await response.json();
          console.error(`Error deleting password: ${data.message}`);
        }
      } catch (error) {
        console.error("Error during delete request:", error);
      }
    }
  };

  return (
    <div>
      <div className="col_2">
        {passwords.length > 0 ? (
          passwords.map((t) => (
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
              <div className="flex justify-center ">
                <button
                  className="px-2 py-2 rounded-full shadow-lg ring-2 ring-violet-50 text-red-500 hover:text-white hover:bg-red-400 bg-violet-100 dark:text-red-400  dark:bg-black  dark:hover:text-black dark:hover:bg-red-400"
                  onClick={() => removePassword(t._id)}
                >
                  <HiOutlineTrash size={24} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text justify-center flex w-[80vw]">
            {" "}
            :( nothing is here to show, save a password!
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordList;
