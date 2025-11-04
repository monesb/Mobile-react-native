import { View } from "react-native";
import Parent from "./Parents";
 
const MyApp=()=> {
  const username = "Ronaldo";
  return (<View style={{margin:100}}><Parent username={username}/></View>)
}
 
export default MyApp