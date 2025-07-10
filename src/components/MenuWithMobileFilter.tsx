import React, { useState, useEffect } from "react";
import type { MenuSection } from "../types";

interface Props {
  menuSections: MenuSection[];
}

export const MenuWithMobileFilter: React.FC<Props> = ({ menuSections }) => {
  const [selectedSectionId, setSelectedSectionId] = useState("");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  // Handle window resize to track if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 768;

      // If switching from mobile to desktop, clear selection
      setIsMobile((prevMobile) => {
        if (prevMobile && !nowMobile) {
          setSelectedSectionId(""); // Clear selection when moving to desktop
        }
        return nowMobile;
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredSections = selectedSectionId
    ? menuSections.filter((section) => section._id === selectedSectionId)
    : menuSections;

  return (
    <>
      {isMobile && (
        <div className="block md:hidden mb-10">
          <label htmlFor="section-select" className="sr-only">
            Select Menu Section
          </label>
          <select
            id="section-select"
            className="w-full px-4 py-3 text-lg rounded-xl bg-tree-bark border-2 border-stone-400 text-stone-100 focus:outline-none focus:ring-2 focus:ring-accent"
            value={selectedSectionId}
            onChange={(e) => setSelectedSectionId(e.target.value)}
          >
            <option value="">All Sections</option>
            {menuSections.map((section) => (
              <option key={section._id} value={section._id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredSections.map((section) => (
          <div key={section._id} className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-bayou-gold">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item._id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.description && (
                        <p className="text-sm">{item.description}</p>
                      )}
                    </div>
                    <span className="ml-4 font-bold text-accent">
                      {item.price}
                    </span>
                  </div>
                  {item.isHappyHour && (
                    <span className="text-xs text-accent">Happy Hour</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
