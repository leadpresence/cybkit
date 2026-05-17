import { LoginHeader } from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

export default function LoginScreen() {
    return (
        <ScrollView>
         <Text style={globalStyles.title}>Login</Text>
            
            <LoginHeader />
        </ScrollView>
    )
}