import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export function Navbar() {
  return (
    <View style={styles.navbar}>
      <Link style={styles.button} href="/shop">Shop</Link>
      <Link style={styles.button} href="/upgrade">Upgrade</Link>
      <Link style={styles.button} href="/guild">Guild</Link>
    </View>
  );
}

// ======================================
// =============== Styles ===============
// ======================================

const styles = StyleSheet.create({
  navbar: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f8f8f8",
    paddingVertical: 10,
  },

  button: {
    padding: 12,
    flex: 1,
    textAlign: "center",
    marginHorizontal: 5,
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: 5,
  }
});