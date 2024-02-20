import { View, StatusBar } from "react-native";
import { Home } from "./src/screens/Home/home";

export default function App() {
  return (
    <>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent={true}
      />
      <Home />
    </>
  );
}