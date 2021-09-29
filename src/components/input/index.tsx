import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { setFetchSubDog } from '../../store/reducer/creator';
import './input.css'
// interface Input {
//     data: string[]
// }

const SuggestionsList = (props: any) => {
    const {
        suggestions,
        inputValue,
        onSelectSuggestion,
        displaySuggestions,
        selectedSuggestion
    } = props;
    const dispatch = useDispatch()
    const h = useHistory()
    const handelClick = (index: number, name: string) => {
        localStorage.setItem('subDog', name)
        h.push('/sub-dog/' + name)
        dispatch(setFetchSubDog(name))
        onSelectSuggestion(index)
    }
    if (inputValue && displaySuggestions) {
        if (suggestions.length > 0) {
            return (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion: string, index: number) => {
                        const isSelected = selectedSuggestion === index;
                        const classname = `suggestion ${isSelected ? "selected" : ""}`;
                        return (
                            <li
                                key={index}
                                className={classname}
                                onClick={() => handelClick(index, suggestion)}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return <div>No suggestions available...</div>;
        }
    }
    return <></>;
};


const SearchBox = () => {
    const data = useSelector((state: any) => state.listDog)
    const [inputValue, setInputValue] = React.useState('')
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);
    const [displaySuggestions, setDisplaySuggestions] = React.useState(false);
    const onChange = (e: any) => {
        const value = e.target.value;
        setInputValue(value);
        const filteredSuggestions = data.filter((val: any) =>
            val.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filteredSuggestions);
        setDisplaySuggestions(true);
    }
    const onSelectSuggestion = (index: any) => {
        setSelectedSuggestion(index);
        setInputValue(filteredSuggestions[index]);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);
    };
    return (
        <>
            <div className="container">
                <input
                    className="user-input"
                    type="text"
                    onChange={onChange}
                    value={inputValue}
                />
            </div>
            <SuggestionsList
                inputValue={inputValue}
                selectedSuggestion={selectedSuggestion}
                onSelectSuggestion={onSelectSuggestion}
                displaySuggestions={displaySuggestions}
                suggestions={filteredSuggestions}
            />
        </>
    )
}

export default SearchBox