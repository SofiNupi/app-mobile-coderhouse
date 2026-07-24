import { View, StyleSheet } from 'react-native'
import ProfileCard from '../components/ProfileCard';
import { spacing } from '../theme';

const name = "Sofi Nupieri";

const ProfileScreen = () => {
  return (
    <View style={styles.profileContainer}> 
      <ProfileCard
        name={name}
        role="Senior Developer"
        avatarUrl="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzNHS0JacnV1T1dJTmZkclZoSnFFenIzeVhNbiJ9"
        isOnline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: spacing.paddingM
  }
})


export default ProfileScreen;
