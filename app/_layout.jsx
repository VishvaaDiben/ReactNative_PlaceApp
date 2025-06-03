import { Text, View } from 'react-native';

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ color: '#4285F4', fontSize: 20, fontWeight: 'bold' }}>P</Text>
              <Text style={{ color: '#EA4335', fontSize: 20, fontWeight: 'bold' }}>l</Text>
              <Text style={{ color: '#FBBC05', fontSize: 20, fontWeight: 'bold' }}>a</Text>
              <Text style={{ color: '#4285F4', fontSize: 20, fontWeight: 'bold' }}>c</Text>
              <Text style={{ color: '#34A853', fontSize: 20, fontWeight: 'bold' }}>e</Text>
              <Text style={{ color: '#EA4335', fontSize: 20, fontWeight: 'bold' }}> Finder</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </Stack>
  );
}
