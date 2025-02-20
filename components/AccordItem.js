import React from "react";
import { AccordionItem, AccordionHeader } from "@/components/ui/";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionTitleText,
  AccordionIcon,
} from "@/components/ui/";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react-native";

const AccordItem = ({ title, value, children, openItems }) => {
  const isOpened = openItems.includes(value);
  return (
    <AccordionItem
      value={value}
      style={{ borderWidth: 0.5, borderColor: "#cfcccc", marginRight: 10 }}
    >
      <AccordionHeader
        style={[isOpened === false && { background: "#cfcccc" }]}
      >
        <AccordionTrigger>
          {({ isExpanded }) => {
            return (
              <>
                <AccordionTitleText>{title}</AccordionTitleText>
                <AccordionIcon
                  as={isExpanded ? ChevronUpIcon : ChevronDownIcon}
                  ml="$3"
                />
              </>
            );
          }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};
export default AccordItem;
