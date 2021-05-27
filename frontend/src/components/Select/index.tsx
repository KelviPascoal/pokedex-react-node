import { SelectHTMLAttributes, useEffect, useState } from "react";
import { Option } from "./types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

function Select(props: SelectProps) {
    const fistOption: Option = {
        label: "Todos",
        value: ""
    }
    const { options, ...rest } = props;

    return (
        <select {...rest}>
            <option value="" >Todos</option>
            {options.map((option: Option) => <option
                key={option.value} value={option.value}>{option.label}</option>)}
        </select>
    )
}

export default Select;