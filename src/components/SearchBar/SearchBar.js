import { useEffect, useState } from "react"
import Select from "react-select"
import { useSearchParams } from "react-router-dom"

export default function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [formData, setFormData] = useState({
        zipcode: '',
        cuisine: ''
    })
    const [selectedOption, setSelectedOption] = useState({ value: searchParams.get("cuisine"), label: searchParams.get("cuisine") })
    const cuisineOptions = [
        { value: "american", label: "american", },
        { value: "chinese", label: "chinese" },
        { value: "japanese", label: "japanese" },
        { value: "mediterranean", label: "mediterranean" },
        { value: "thai", label: "thai" },
        { value: "indian", label: "indian" },
        { value: "filipino", label: "filipino" },
        { value: "french", label: "french" },
        { value: "haitian", label: "haitian" },
        { value: "cuban", label: "cuban" },
        { value: "tex-mex", label: "tex-mex" },
        { value: "vietnamese", label: "vietnamese" },
        { value: "mexican", label: "mexican" },
        { value: "korean", label: "korean" },
        { value: "soul food", label: "soul food" },
        { value: "polish", label: "polish" },
        { value: "ethiopian", label: "ethiopian" },
        { value: "greek", label: "greek" },
        { value: "asian-fusion", label: "asian-fusion" },
        { value: "nigerian", label: "nigerian" }
    ]

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSelect = (evt) => {
        setFormData({ ...formData, cuisine: evt.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setSearchParams(formData)
        console.log(formData)
    }
    useEffect(() => {
        setFormData({ zipcode: searchParams.get("zipcode"), cuisine: searchParams.get("cuisine") })
    }, [])
    console.log(formData)
    return (
        <div>
            <form>
                <input type="text" onChange={handleChange} name="zipcode" value={formData.zipcode} placeholder="Location">
                </input>
                <Select
                    defaultValue={selectedOption}
                    onChange={(e) => { handleSelect(e) }}
                    options={cuisineOptions}
                    name="cuisine"
                    placeholder="Cuisine"
                    isSearchable
                    isClearable
                />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
