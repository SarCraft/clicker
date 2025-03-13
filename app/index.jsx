import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Navbar } from "@/components/Navbar";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
    </SafeAreaView>
  );
}

// ======================================
// =============== Styles ===============
// ======================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});