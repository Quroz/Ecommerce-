import "react-native-reanimated";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
}
