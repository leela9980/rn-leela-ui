
import React from "react";
import { Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel } from "@/components/ui/";
import { CheckIcon } from "@/components/ui/icon"

const CheckBox = ({
    onChange,
    value,
    label = "",
}) => {
    return (
        <Checkbox value={value} size="md" isInvalid={false} isDisabled={false}
            onChange={onChange}>
            <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>{label}</CheckboxLabel>
        </Checkbox>
    );
};

export default CheckBox;
