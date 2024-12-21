import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const AutoCompleteSearch = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setOptions(storedSearches);
  }, []);
  const saveSearchToLocalStorage = (value) => {
    if (!value.trim()) return;
    const updatedSearches = Array.from(new Set([value, ...options])).slice(
      0,
      10
    );
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearches));
    setOptions(updatedSearches);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      saveSearchToLocalStorage(inputValue);
      console.log(`Searching for: ${inputValue}`);
      event.preventDefault();
    }
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 300, mx: "auto" }}>
      <Autocomplete
        freeSolo
        options={options}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            variant="outlined"
            fullWidth
            onKeyDown={handleKeyDown}
            InputLabelProps={{
              sx: {
                transform: "translate(14px, 12px)",
                fontSize: "0.9rem",
              },
            }}
            InputProps={{
              ...params.InputProps,
              sx: {
                height: "40px",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
              },
            }}
          />
        )}
        sx={{
          width: 200,
          "& .MuiOutlinedInput-root": {
            borderRadius: theme.shape.borderRadius,
            padding: "0.1rem",
          },
          "& .MuiAutocomplete-listbox": {
            maxHeight: 200,
            overflow: "auto",
          },
          "& .MuiAutocomplete-option:hover": {
            backgroundColor: "primary.light",
            color: "white",
          },
        }}
      />
    </Box>
  );
};
export default AutoCompleteSearch;
