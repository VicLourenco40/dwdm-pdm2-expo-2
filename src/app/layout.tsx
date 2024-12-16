import { Stack } from 'expo-router';
import '../lang/i18n';

export default function Layout({children}: any) {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      {children}
    </Stack>
  )
}
