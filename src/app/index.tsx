import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { colors } from '../styles/colors';
import { styles } from '../styles/tracking-page';

export default function Index() {
  const {t} = useTranslation();
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearchOrder() {
    setLoading(true);
    setError('');

    await fetch(`http://10.0.2.2:8000/api/orders/${trackingCode}`)
      .then(async response => await response.json())
      .then(data => {
        if (data.error) {
          setError(t('TRACKING_PAGE.ERROR_ORDER_NOT_FOUND'));
          return;
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Link href={''}>
            <View style={styles.link}>
              <Text style={styles.loginText}>{t('TRACKING_PAGE.SIGN_IN')}</Text>
              <Feather style={styles.loginIcon} name={'chevron-right'} />
            </View>
          </Link>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>{t('TRACKING_PAGE.TITLE')}</Text>
          <Text style={styles.subtitle}>{t('TRACKING_PAGE.SUBTITLE')}</Text>
          <View style={styles.inputWrapper}>
            <Feather style={styles.inputIcon} name={'package'} />
            <TextInput
              placeholder={t('TRACKING_PAGE.PLACEHOLDER')}
              placeholderTextColor={colors.gray[500]}
              maxLength={8}
              onChangeText={value => setTrackingCode(value)}
              onFocus={() => setError('')} />
          </View>
          <Text>{error}</Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            disabled={loading}
            onPress={handleSearchOrder}>
            {loading ? (
                <ActivityIndicator />
              ) : (
                <>
                  <Text style={styles.buttonText}>{t('TRACKING_PAGE.BUTTON')}</Text>
                  <Feather style={styles.buttonIcon} name={'search'}></Feather>
                </>
              )
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
