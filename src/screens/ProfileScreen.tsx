import { View, StyleSheet } from 'react-native'
import ProfileCard from '../components/ProfileCard';
import { colors, spacing } from '../theme';
import { userData } from '../data/userdata';


const ProfileScreen = () => {
  return (
    <View style={styles.profileContainer}> 
      <ProfileCard
        name={`${userData.firstName} ${userData.lastName}`}
        role={userData.role}
        avatarUrl="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzNHS0JacnV1T1dJTmZkclZoSnFFenIzeVhNbiJ9"
        isOnline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: spacing.paddingM,
    backgroundColor: colors.primaryLight,
    flex: 1,
  }
})


export default ProfileScreen;
