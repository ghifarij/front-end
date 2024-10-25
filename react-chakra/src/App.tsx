import { Flex } from "@chakra-ui/react";
import DemoDrawer from "./components/myComp/drawer";
import { Avatar } from "./components/ui/avatar";

function App() {
  return (
    <div>
      <Flex
        bgColor={"#88C273"}
        h={"60px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"black"}
        fontWeight={"medium"}
        px={"10px"}
      >
        <DemoDrawer />
        <Avatar />
      </Flex>
    </div>
  );
}

export default App;
