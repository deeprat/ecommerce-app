import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const CategoryList = () => {
    // Hooks
    const navigate = useNavigate();
    const [category, setCategory] = useState("");

    // Test data
    const categories = ["Audio", "Computers", "Phones"];

    // Category Change handler
    const handleChange = (event) => {
        setCategory(event.target.value);
        navigate(`/category/${event.target.value}`);
    }

    return (
        <FormControl variant={"filled"} sx={{minWidth: 180}} size={"small"}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
            >
                {categories.map((category, index) => <MenuItem key={index} value={category}>{category}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default CategoryList;