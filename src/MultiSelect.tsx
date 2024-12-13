import React, { useState, useRef, useEffect } from "react";
import "./style.css";

interface Option {
  id: string | number;
  name: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  label: string;
  id: string;
}

const MultiSelect = ({
  options,
  selectedValues,
  onChange,
  label,
  id,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionId: string | number) => {
    const newSelectedValues = selectedValues.includes(optionId.toString())
      ? selectedValues.filter((id) => id !== optionId.toString())
      : [...selectedValues, optionId.toString()];
    onChange(newSelectedValues);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleRemoveOption = (optionId: string | number) => {
    const newSelectedValues = selectedValues.filter(
      (id) => id !== optionId.toString()
    );
    onChange(newSelectedValues);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current !== null &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="multi-select-container" ref={containerRef}>
      <label htmlFor={id}>{label}</label>
      <div className="multi-select-input" onClick={handleToggle}>
        {selectedValues.length === 0 ? (
          <span className="placeholder">Selecione...</span>
        ) : (
          <div className="selected-options">
            {selectedValues.map((value) => {
              const option = options.find((opt) => opt.id.toString() === value);
              return option !== null && option !== undefined ? (
                <span key={option.id} className="selected-option">
                  {option.name}
                  <button
                    onClick={() => {
                      handleRemoveOption(option.id);
                    }}
                  >
                    &times;
                  </button>
                </span>
              ) : null;
            })}
          </div>
        )}
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="options-container">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="search-input"
          />
          <div className="options-list">
            {filteredOptions.map((option) => (
              <div
                key={option.id}
                className={`option ${
                  selectedValues.includes(option.id.toString())
                    ? "selected"
                    : ""
                }`}
                onClick={() => {
                  handleOptionClick(option.id);
                }}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
