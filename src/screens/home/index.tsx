import { useCallback, useState } from "react";
import { View, ActivityIndicator, useWindowDimensions, Alert } from "react-native";
import YoutubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";
import { styles, VIDEO_HEIGHT, SCREEN_SPACE } from "./styles";
import * as ScreenOrientation from "expo-screen-orientation";

export function Home() {
  const [videoReady, setVideoReady] = useState(false);

  const { width } = useWindowDimensions();
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, [])

  const onChangeState = useCallback((state: string) => {
    if (state === PLAYER_STATES.ENDED) {
      Alert.alert("E aí, curtiu?", "Não deixe de curtir, comente e siga o canal!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe
          videoId="0GOUF8vNqzE"
          width={VIDEO_WIDTH}
          height={videoReady ? VIDEO_HEIGHT : 0}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
        {!videoReady && <ActivityIndicator color="red" />}
      </View>
    </View>
  )
}