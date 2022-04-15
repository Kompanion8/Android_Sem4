import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";
 
const images = [
  'https://mail.ozersk74.press/uploads/posts/2020-12/1608114304_korzina_s_produktami.jpg',
  'https://myprezent.ru/image/cache/data/alcogol/2992c3030d10d20f6f934f9f34e7f98f-800x6001.jpg',
  'https://alau.kz/wp-content/uploads/2020/01/produkty.jpg',
  'https://vokak.org/wp-content/uploads/2019/01/podschet-kalorij-28.jpg'
];
 
const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current 
 
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])

 
  return (
      <Animated.View style={[styles.scrollContainer, {opacity: fadeAnim}]}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={[{flex: 1, }, { width: windowWidth, height: 250 }]}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                </ImageBackground>
                <View style={{paddingHorizontal: 16, paddingTop: 5}}>
                  <Button
                    title="Подробнее"
                    color="#436367"
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </Animated.View>
  );
}
 
const styles = StyleSheet.create({
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
});
 
export default Slider;
