import { Button, ButtonText, HStack } from "@/components/ui/";
import React, { useState } from "react";

const ActionBar = ({ defaultFilter, buttons, extraComponents, style }) => {
  const [selectedFilter, setSelectedFilter] = useState(defaultFilter || "");

  const onFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  return (
    <HStack
      style={{
        justifyContent: "space-around",
        paddingVertical: 6,
        borderWidth: 0.25,
        borderColor: "#cfcccc",
        marginBottom: 10,
        ...style,
      }}
    >
      {buttons.map((button, index) => (
        <Button
          action="secondary"
          size={"sm"}
          key={index}
          style={{ width: button.width }}
          variant={selectedFilter === button.label ? "solid" : "link"}
          onPress={() => {
            onFilterChange(button.label);
            if (button.action) {
              button.action(button.label);
            }
          }}
        >
          <ButtonText
            fontSize={selectedFilter === button.label ? "$xs" : "$sm"}
          >
            {button.label}
          </ButtonText>
        </Button>
      ))}
      {extraComponents &&
        extraComponents.map((component, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(component, {
              ...component.props,
              variant:
                selectedFilter === component.props.text ? "solid" : "link",
              action: "secondary",
              size: "sm",
              ...(component.props.onPress && {
                onPress: (value) => {
                  onFilterChange(component.props.text);
                  component.props.onPress(value);
                },
              }),
              ...(component.props.onChange && {
                onChange: (value) => {
                  onFilterChange(component.props.text);
                  component.props.onChange(value);
                },
              }),
              ...(component.props.onClick && {
                onChange: (value) => {
                  onFilterChange(component.props.text);
                  component.props.onClick(value);
                },
              }),
            })}
          </React.Fragment>
        ))}
    </HStack>
  );
};

export default ActionBar;
