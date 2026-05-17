import { LoginHeader } from "@/components/HomeHeader";
import { colors, globalStyles } from "@/styles/global";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function LoginScreen() {
      const [staffId, setStaffId] = useState('');
      const [password, setPassword] = useState('');

  const handleAddMeal = () => {
    console.log({ staffId, password });
  };
    return (
        <ScrollView>
         <Text style={globalStyles.title}>Login</Text>
            
            <LoginHeader />

               <TextInput
                    style={globalStyles.input}
                    placeholder='Staff ID'
                    placeholderTextColor={colors.textSecondary}
                    value={staffId}
                    onChangeText={setStaffId}
                  />
            
                  <TextInput
                    style={globalStyles.input}
                    placeholder='Password'
                    placeholderTextColor={colors.textSecondary}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />


                        <TouchableOpacity style={globalStyles.button} onPress={handleAddMeal}>
                          <Text style={globalStyles.buttonText}>Add Meal</Text>
                        </TouchableOpacity>
        </ScrollView>
    )
}

 