"use client";
import React, { useState } from "react";

// ReservationForm: styled to match dark theme, gold accent, rounded inputs
const RESERVATION_EMAIL = "shihebamrii@gmail.com";

export default function ReservationForm() {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RESERVATION_EMAIL}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-10">
      <h3 className="font-playfair text-xl font-light mb-4 text-golden">Reservation Form</h3>
      {status === "success" && (
        <div className="mb-4 p-3 rounded bg-green-700 text-white text-center">Reservation sent successfully!</div>
      )}
      {status === "error" && (
        <div className="mb-4 p-3 rounded bg-red-700 text-white text-center">There was an error. Please try again.</div>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input type="hidden" name="_template" value="table" />
        <div>
          <label className="block text-neutral-400 mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-golden"
          />
        </div>
        <div>
          <label className="block text-neutral-400 mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-golden"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-neutral-400 mb-1">Date</label>
            <input
              name="date"
              type="date"
              required
              className="w-full p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-golden"
            />
          </div>
          <div className="flex-1">
            <label className="block text-neutral-400 mb-1">Time</label>
            <input
              name="time"
              type="time"
              required
              className="w-full p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-golden"
            />
          </div>
        </div>
        <div>
          <label className="block text-neutral-400 mb-1">How many people?</label>
          <input
            name="people"
            type="number"
            min="1"
            required
            className="w-full p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-golden"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-golden text-black py-2 rounded font-semibold hover:bg-yellow-400 transition"
        >
          Reserve
        </button>
      </form>
    </div>
  );
}
