
import { CheckIcon } from "@/components/ui/icon";
import React from "react";
import { View } from "@/components/ui/";
import { Actionsheet, ActionsheetFlatList, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, ActionsheetIcon } from "@/components/ui/";
import { ButtonText, Button } from "@/components/ui/button";


function MultiSelect({ options, onChange, value = [] }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [placeholder, setPlaceholder] = React.useState("Select Category");

    const handleOpen = () => {
        setIsOpen(!isOpen);
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
        <View>



            <Button size="lg" variant="outline" action="primary" onPress={handleOpen}>
                <ButtonText>{placeholder}</ButtonText>
            </Button>



            <Actionsheet
                isOpen={isOpen}
                onClose={handleOpen}
                snapPoints={[70]}
                closeOnOverlayClick={true}
            >
                <ActionsheetContent maxHeight="75%">
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>

                    <ActionsheetFlatList
                        data={options}
                        renderItem={({ item }) => <Item label={item} value={item}
                            isSelected={value.includes(item)}
                            onSelect={_onChange} />}
                        keyExtractor={item => item}
                        horizontal={false}
                        scrollEnabled={true}
                        contentContainerStyle={{}}
                    />

                    <ActionsheetItem onPress={handleOpen}>
                        <ActionsheetItemText>Scroll Down</ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </View>
    )
}

const Item = ({ label, onSelect, value, isSelected }) => {
    return (
        <ActionsheetItem
            onPress={() => {
                onSelect(value);
            }}
        >
            {isSelected && <ActionsheetIcon as={CheckIcon} />}

            <ActionsheetItemText>{label}</ActionsheetItemText>
        </ActionsheetItem >
    )
}
export default MultiSelect