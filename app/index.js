import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import { Stack, useRouter } from "expo-router";
import {NearbyJobCard, Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';
import { COLORS,SIZES,icons,images } from '../constants';


const Home = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
              <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: ""
        }}
      />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                    <Welcome />
                    <Popularjobs />
                    <NearbyJobCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;