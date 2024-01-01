"use client";
import { useState } from "react";

const PasswordForm = ({  }) => {
  const [application, setApplication] = useState("");
  const [clientName, setClientName] = useState("");
  const [url, setUrl] = useState("");
  const [project, setProject] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState("");

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        application,
        clientName,
        url,
        project,
        password,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setProject("");
      setPassword("");
      setUrl("");
      setClientName("");
      setApplication("");
      triggerRerender();
    }
  };

  return (
    <>
      <form onSubmit={handleSave} className="passwordForm">
        <div className="col">
          <div className="mb-5">
            <label htmlFor="application" className="label">
              Application Name
            </label>
            <input
              onChange={(e) => setApplication(e.target.value)}
              value={application}
              type="text"
              id="application"
              className="input"
              placeholder="fullcircle.com"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "fullcircle.com")}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="clientName" className="label">
              Client Name
            </label>
            <input
              onChange={(e) => setClientName(e.target.value)}
              value={clientName}
              type="text"
              id="clientName"
              className="input"
              placeholder="Gorge, smith ..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Gorge, smith ...")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="url" className="label">
            URL
          </label>
          <input
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            type="url"
            id="url"
            className="input"
            placeholder="https://www.google.com"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "https://www.google.com")}
          />
        </div>
        <div className="col">
          <div>
            <label htmlFor="userName" className="label">
              Project
            </label>
            <input
              onChange={(e) => setProject(e.target.value)}
              value={project}
              type="text"
              id="userName"
              className="input"
              placeholder="bella ..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "bella ...")}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              id="password"
              className="input"
              placeholder="root@123"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "root@123")}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" className="button">
            Save
          </button>
        </div>
      </form>
      <div className="flex justify-center bg-slate-100 mt-10 mb-10 max-w-[70%] flex-col lg:ml-[10%] ml-[5%]">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-600" : "text-red-600"
              } px-[5%]`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
};

export default PasswordForm;
