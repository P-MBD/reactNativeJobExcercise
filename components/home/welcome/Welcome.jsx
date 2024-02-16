import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text,TextInput} from "react-native";
import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();
  return(
    <View>
        <View style={styles.container}>
            <Text style={styles.userName}> Hello Adrian</Text>
            <Text style={styles.welcomeMessage}> Find your perfect job</Text>
        </View>
        <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} />
            </View>
        </View>
    </View>
  );
};

export default Welcome;
