import { IconButton } from "@chakra-ui/react";
import CustomTooltip from "@/common/tooltip";
import { CustomComponent } from "@/interfaces/customComponent";

const Index = (props: CustomComponent) => {
  return (
    <CustomTooltip message={props.ariaLabel}>
      <IconButton
        variant="ghost"
        aria-label={props.ariaLabel}
        icon={props.icon}
        onClick={props.onClick}
        isDisabled={props.isDisabled}
        isLoading={props.isLoading}
      />
    </CustomTooltip>
  );
};

export default Index;
