import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { width } from "../../utils";
export const Carousel = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 10
        }}
        horizontal
        centerContent
        bounces
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        // scrollEventThrottle={16}
        snapToAlignment="center"
        snapToInterval={width - 100}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30
        }}
      >
        {props.carousels.map((data, index) => (
          <TouchableOpacity style={styles.carousel} key={`${index}-${data}`}>
            <Text>{data.title}</Text>
            <View style={styles.progressbar}>
              <View style={[styles.fillprogress, { width: data.progress }]} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
