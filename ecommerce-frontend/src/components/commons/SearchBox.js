import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import Button from "@mui/material/Button";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const SearchBox = () => {
    // Hooks
    const [userRecentSearch, setUserRecentSearch] = useState(["LED TV", "16GB Ram Phone", "iphone 32"]);
    const [searchText, setSearchText] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();

    // Search Field Handler
    const searchTextHandler = (event) => {
        setSearchText(event.target.value);
    }

    const searchHandler = () => {
        // Only When Query text in Box
        if (searchText.length > 0) {
            if (!(location.pathname === 'search'))
                // navigate to search
                navigate(`search?query=${searchText}`);
            else
                // change Query
                setParams({'query': searchText})
        }
    }

    return (
        <>
            <Autocomplete
                size={"small"}
                fullWidth
                freeSolo
                disableClearable
                id="search-field"
                options={userRecentSearch.map((search) => search)}
                renderInput={(params) => (
                    <TextField
                        value={searchText}
                        onChange={searchTextHandler}
                        variant={"filled"}
                        size={"small"}
                        {...params}
                        label="Search"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                sx={{minWidth: 250}}
            />
            <Button
                variant={"outlined"}
                sx={{color: 'text.primary'}}
                onClick={searchHandler}
            >
                Search
            </Button>
        </>
    );
}

export default SearchBox;