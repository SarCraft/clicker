import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from '@react-navigation/elements';

export function Navbar() {
    const navigation = useNavigation();

    return (
        <View> 
            <Button title="Home" onPress={() => navigation.navigate('Home')}>Home</Button>
            <Button title="Profile" onPress={() => navigation.navigate('Profile')}>Profile</Button>
            <Button title="Shop" onPress={() => navigation.navigate('Shop')}>Shop</Button>
            <Button title="Settings" onPress={() => navigation.navigate('Settings')}>Settings</Button>
            <Button title="About" onPress={() => navigation.navigate('Guild')}>Guild</Button>
        </View>
    );
}

