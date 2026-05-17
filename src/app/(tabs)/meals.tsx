import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
///list meals here
export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
}