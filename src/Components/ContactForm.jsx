import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      alert("Please fill all required fields");
      return;
    }

    const whatsappNumber = "918919849050";

    const whatsappMessage = `
Hello Stone Studio 👋

Name: ${name}
Phone: ${phone}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-1 font-medium">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 tracking-wide hover:bg-accent transition rounded-2xl border-[px]"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
