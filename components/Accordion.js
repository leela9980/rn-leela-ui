import React from "react";
import { Accordion as AccordionComponent } from "@/components/ui/";

const Accordion = ({ children, defaultOpen = [1, 2] }) => {
  const [openItems, setOpenItems] = React.useState(defaultOpen);

  return (
    <AccordionComponent
      m="$5"
      size="md"
      variant="unfilled"
      isCollapsible={true}
      type="multiple"
      defaultValue={defaultOpen}
      onValueChange={(value) => setOpenItems(value)}
      style={{ margin: 10 }}
    >
      {children({ openItems })}
    </AccordionComponent>
  );
};

export default Accordion;
