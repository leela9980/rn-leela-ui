import React from "react";
import { Select as GsSelect, View, Icon } from "@/components/ui/";
import {
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,

} from "@/components/ui/";
import { ChevronDownIcon } from "@/components/ui/icon"
import { SelectFlatList } from "@/components/ui/";

const Select = ({
  onChange,
  options = [],
  placeholder = "Select Type",
  value,
  size = "lg",
  variant = "outline",
}) => {
  return (
    <View testID={"TaskSetProgressDropdownContainer"}>
      <GsSelect
        onValueChange={onChange}
        defaultValue={value}
        testID={"TaskSetProgressDropdown"}
      >
        <SelectTrigger variant={variant} size={size}>
          <SelectInput placeholder={placeholder} />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            <SelectFlatList
              data={options}
              renderItem={({ item }) => (
                <SelectItem key={item} label={item} value={item} />
              )}
              keyExtractor={item => item}
            />
            {/* {options.map((option) => (
              <SelectItem key={option} label={option} value={option} />
            ))} */}
          </SelectContent>
        </SelectPortal>
      </GsSelect>
    </View>
  );
};

export default Select;
