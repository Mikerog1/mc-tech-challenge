"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import Search from "@/components/Search";
import { Types } from "@/types";
import CategoryFilter from "./components/CategoryFilter";

export default function Page() {
  const [data, setData] = useState<Types[]>([]); // Original data
  const [filteredData, setFilteredData] = useState<Types[]>([]); // Filtered and sorted data
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category
  const [sortField, setSortField] = useState<keyof Types | null>(null); // Sorting field
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null); // Sorting order

  // Fetch data from the data.json file (in the public folder) when the component is mounted
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  // Suchfunktion: Wird bei onChange im Suchfeld aufgerufen. 
  // "query" enthält den aktuellen Wert des Input-Feldes.
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterData(query, selectedCategory);
  };

  // Kategorie-Filter: Wird aufgerufen, wenn der Benutzer eine Kategorie auswählt (im Dropdown). 
  // Aktualisiert den ausgewählten Kategorie-Status und filtert die Daten entsprechend.
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterData(searchQuery, category);
  };

  // Daten filtern nach Suchbegriff und Kategorie
  const filterData = (query: string, category: string) => {
    let filtered = data.filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) &&
        (category === "" || item.category === category)
    );
    setFilteredData(filtered);
  };

  
// Sortierfunktion: Sortiert die Daten nach dem angegebenen Feld (per Klick auf den Spaltenkopf) 
// und wechselt dabei die Sortierreihenfolge (aufsteigend "asc" / absteigend "desc").
  const handleSort = (field: keyof Types) => {
    let newSortOrder: "asc" | "desc" = sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newSortOrder);

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[field] < b[field]) return newSortOrder === "asc" ? -1 : 1;
      if (a[field] > b[field]) return newSortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };



  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
      <br />
      <div className="p-4 pb-1 flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <CategoryFilter categories={[...new Set(data.map((item) => item.category))]} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        <Search query={searchQuery} onSearch={handleSearch} />
      </div>

      <Table
        data={filteredData}
        onSort={handleSort}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  );
}
