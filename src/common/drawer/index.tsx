import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import IconBtn from "@/common/iconBtn";
import { CustomComponent } from "@/interfaces/customComponent";
import { X } from "phosphor-react";

const Index = (props: CustomComponent) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <>
      <IconBtn ariaLabel="Search" onClick={onOpen} icon={props.icon} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerHeader mt="3" fontWeight="light" mb="0">
            {props.title}
          </DrawerHeader>

          <DrawerBody>{props.children}</DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              w="100%"
              fontWeight="light"
              leftIcon={<X size={16} />}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Index;
