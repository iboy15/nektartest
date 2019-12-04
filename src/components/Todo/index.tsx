import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { styles } from "./styles";
import { width } from "../../utils";
export const Todo = props => {
  return (
    <View style={styles.container}>
      <View style={styles.todoListTitle}>
        <Text style={styles.todoTitle}>Things to do</Text>

        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{props.todo.length}</Text>
        </View>
      </View>

      {props.todo.map((item, index) => {
        return (
          <TouchableOpacity style={styles.todoListContainer} key={index}>
            <View style={styles.imageListContainer}>
              <Image style={styles.avatar} source={{ uri: item.avatar }} />
              <Image
                style={styles.companyBadge}
                source={{ uri: item.companyBadge }}
              />
            </View>
            <Text style={styles.titleList}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
