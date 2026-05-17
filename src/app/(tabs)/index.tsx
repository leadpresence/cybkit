import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";
import{Link} from "expo-router";

export default function HomeScreen() {


  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>CybKit</Text>
      <HomeHeader />
      
    </ScrollView>
  );
}




