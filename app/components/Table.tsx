"use client";

import React from "react";
import { Types } from "@/types";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface TableProps {
    data: Types[];
    onSort: (field: keyof Types) => void;
    sortField: keyof Types | null;
    sortOrder: "asc" | "desc" | null;
}

const Table: React.FC<TableProps> = ({
    data,
    onSort,
    sortField,
    sortOrder,
}) => {
    // Gibt das passende Sortier-Icon zurück, basierend auf dem aktuellen Sortierfeld und der Sortierreihenfolge.
    const getSortIcon = (field: keyof Types) => {
        if (sortField === field) {
            return sortOrder === "asc" ? <FaSortUp className="ml-1 text-blue-500 inline-block" /> : <FaSortDown className="ml-1 text-blue-500 inline-block" />;
        }
        return <FaSort className="ml-1 text-gray-400 inline-block" />;
    };

    return (
        <div className="overflow-x-auto bg-white rounded-xl p-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="">
                        <th className="p-4 hover:text-blue-600" onClick={() => onSort("label")}>Label {getSortIcon("label")}</th>
                        <th className="p-4 cursor-pointer hover:text-blue-600" onClick={() => onSort("category")}>Category {getSortIcon("category")}</th>
                        <th className="p-4 cursor-pointer hover:text-blue-600" onClick={() => onSort("system_value")}>System Value {getSortIcon("system_value")}</th>
                        <th className="p-4 cursor-pointer hover:text-blue-600" onClick={() => onSort("user_value")}>User Value {getSortIcon("user_value")}</th>
                        <th className="p-4 ">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4 border-b">{item.label}</td>
                            <td className="p-4 border-b">{item.category}</td>
                            <td className="p-4 border-b">{item.system_value}</td>
                            <td className="p-4 border-b">{item.user_value}</td>
                            <td className="p-4 border-b">{item.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
