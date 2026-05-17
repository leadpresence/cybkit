import HomeHeader from '@/components/HomeHeader';
import MacroGrid from '@/components/MacroGrid';
import RecentMealsTrxns from '@/components/RecentMealTrxn';
import { getMeals, Meal } from '@/storage/meals';
import { globalStyles } from '@/styles/global';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import ShareButton from '@/components/ShareButton';
import CopyButton from '@/components/CopyButton';

import ReminderToggle from '@/components/ReminderToggle';

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log('Loaded meals:', data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Cybkit
      </Text>
       <ShareButton meals={meals} />
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      
      <ReminderToggle />
     <RecentMealsTrxns meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}



