import { Text, View } from "react-native";
import Login from "./../Components/Login";
import { auth } from "./../Configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href="/mytrip" /> : <Login />}
    </View>
  );
}
