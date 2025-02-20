
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from "@/components/ui/checkbox";
import { Popover, PopoverBackdrop, PopoverBody, PopoverContent } from "@/components/ui/popover";
import { CheckIcon } from "@/components/ui/icon";
import { Divider } from "@/components/ui/divider";
import React from "react";
import { Input, InputField } from "@/components/ui/input";
import { FlatList, SafeAreaView, Pressable } from 'react-native'



function MultiSelect({ options, onChange, value = [] }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [placeholder, setPlaceholder] = React.useState("Select Category");


    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const _onChange = (selected) => {

        const newValues = [...value];
        if (newValues.includes(selected)) {
            newValues.splice(newValues.indexOf(selected), 1);
        } else {
            newValues.push(selected);
        }

        if (newValues.length > 0) {
            const newplaceholder = newValues.length === 1 ? newValues[0] : `${newValues[0]}  +${newValues.length - 1}`
            setPlaceholder(newplaceholder);
        } else {
            setPlaceholder("Select Category");
        }

        onChange(newValues);
    }

    return (
        <Popover
            style={{ flex: 1 }}
            isOpen={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            offset={8}
            trigger={(triggerProps) => {
                return (
                    <Pressable {...triggerProps}>
                        <Input variant="outline" size="lg">
                            <InputField placeholder={placeholder} />
                        </Input>
                    </Pressable >

                );
            }}
        >
            <PopoverBackdrop />
            <PopoverContent style={{ flex: 1 }}>
                <PopoverBody style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <FlatList
                            data={options}
                            renderItem={({ item }) => <Item label={item} value={item}
                                isSelected={value.includes(item)}
                                onSelect={_onChange} />}
                            keyExtractor={item => item}
                            horizontal={false}
                            scrollEnabled={true}
                            contentContainerStyle={{}}
                            style={{
                                width: '100%', // this line so the list can't be dragged around
                                backgroundColor: 'white',
                            }}
                        />
                    </SafeAreaView>

                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

const Item = ({ label, onSelect, value, isSelected }) => {
    return (
        <Pressable style={{
            margin: 3
        }}
            onPress={() => {
                onSelect(value);
            }}
        >
            <Checkbox isChecked={isSelected} size="md">
                <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>{label}</CheckboxLabel>
            </Checkbox>
            <Divider className="my-0.5" />
        </Pressable >
    )
}
export default MultiSelect