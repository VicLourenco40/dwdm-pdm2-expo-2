import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { colors } from '../styles/colors';
import { styles } from '../styles/tracking-page';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Link href={''}>
            <View style={styles.link}>
              <Text style={styles.loginText}>Sign In</Text>
              <Feather style={styles.loginIcon} name={'chevron-right'} />
            </View>
          </Link>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Track your delivery</Text>
          <Text style={styles.subtitle}>Enter your tracking number to follow your package</Text>
          <View style={styles.inputWrapper}>
            <Feather style={styles.inputIcon} name={'package'} />
            <TextInput
              placeholder={'Enter your tracking number'}
              placeholderTextColor={colors.gray[500]}
              maxLength={8} />
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Track</Text>
            <Feather style={styles.buttonIcon} name={'search'}></Feather>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
