"use client";
import React, { useState } from "react";
import axios from "axios";
import { DashboardLayout } from "@/components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./search.module.css";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedMemeCoin, setSelectedMemeCoin] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const data = [
    {
      id: 1,
      title: "Bonk",
      location: "Solana",
      availabilityDate: "2024-03-21T00:00:00.000Z",
      occupants: 2,
      description:
        "Bonk is the first dog token on Solana. It aims to bring fun and excitement to the Solana community.",
      imageUrl:
        "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1720967231/eye-svgrepo-com_2_fmbqru.svg",
    },
    {
      id: 2,
      title: "Dwh",
      location: "Solana",
      availabilityDate: "2024-03-22T00:00:00.000Z",
      occupants: 4,
      description:
        "Dwh is a meme token that provides utilities such as staking and governance within the Solana ecosystem.",
      imageUrl:
        "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1720967231/eye-svgrepo-com_2_fmbqru.svg",
    },
    {
      id: 3,
      title: "Wif",
      location: "Solana",
      availabilityDate: "2024-03-22T00:00:00.000Z",
      occupants: 4,
      description:
        "Wif is a playful meme coin known for its strong community and frequent airdrops.",
      imageUrl:
        "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1720967231/eye-svgrepo-com_2_fmbqru.svg",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredResults = data.filter((item) => {
      return (
        item.title.toLowerCase() === selectedMemeCoin.toLowerCase() &&
        item.availabilityDate === startDate.toISOString() &&
        item.occupants === parseInt(numberOfPeople)
      );
    });

    setSearchResults(filteredResults);
  };

  const handleMemeCoinChange = (e) => {
    setSelectedMemeCoin(e.target.value);
  };

  const copyBlinkLink = () => {
    navigator.clipboard.writeText("https://your-blink-link.com");
    alert("Blink link copied to clipboard!");
  };

  return (
    <DashboardLayout>
      <main>
        <section>
          <div className={styles.container}>
            <form onSubmit={handleSubmit}>
              <div className={styles.wrapper}>
                <div className={styles.searchcontainer}>
                  <select
                    id="memeCoin"
                    className={styles.inputstyle}
                    name="memeCoin"
                    onChange={handleMemeCoinChange}
                    required
                  >
                    <option value="">Select meme coin</option>
                    <option value="Bonk">Bonk</option>
                    <option value="Dwh">Dwh</option>
                    <option value="Wif">Wif</option>
                  </select>

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className={styles.inputstyle}
                  />
                  <input
                    type="Number"
                    className={styles.inputstyle}
                    placeholder="Number of Blink's"
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                  />
                  <button type="submit" className={styles.button}>
                    <FaSearch className={styles.searchIcon} /> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <br />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {[...data, ...searchResults].map((result) => (
            <div
              key={result.id}
              className={`${styles.searchResult} bg-gray-100 p-4 rounded shadow-md mb-4`}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={result.imageUrl}
                  alt={result.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h3 className="text-sm mt-2 text-dashbg font-semibold">
                {result.title}
              </h3>
              <p className="text-sm">
                <strong>Location:</strong> {result.location}
              </p>
              <p className="text-sm"> {result.description}</p>
              <button
                onClick={copyBlinkLink}
                className="bg-wizard hover:bg-hover w-60 hover:text-black mt-2 text-white font-bold py-2 px-4 rounded"
              >
                Get Blink
              </button>
            </div>
          ))}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default page;
