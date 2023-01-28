import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 180;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: SCREEN_SPACE,
  },
  player: {
    width: "100%",
    height: VIDEO_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
});
