import { StyleSheet } from 'react-native';

import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.violet[100],
    flex: 1
  },
  content: {
    flex: 1,
    padding: 24
  },
  header: {
    alignItems: 'flex-end'
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  loginText: {
    color: colors.violet[900],
    fontWeight: '700'
  },
  loginIcon: {
    color: colors.violet[900],
    fontSize: 16
  },
  main: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: colors.violet[900],
    fontSize: 28,
    fontWeight: '700'
  },
  subtitle: {
    color: colors.gray[500],
    fontSize: 16
  },
  inputWrapper: {
    backgroundColor: colors.violet[50],
    borderColor: colors.violet[300],
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  inputIcon: {
    color: colors.violet[900],
    fontSize: 20
  },
  button: {
    backgroundColor: colors.violet[900],
    borderRadius: 12,
    marginTop: 16,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  buttonText: {
    color: colors.violet[300],
    fontSize: 16,
    fontWeight: 700
  },
  buttonIcon: {
    color: colors.violet[300],
    fontSize: 20
  }
});
