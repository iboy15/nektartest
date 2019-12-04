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
export const DealsLead = props => {
  const renderList = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Detail", { data: item })}
        style={styles.dealsLeadContainer}
      >
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
        <Text style={styles.companyName}>{item.name}</Text>
        <View style={styles.progressbar}>
          <View style={[styles.fillprogress, { height: item.progress }]} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.todoListTitle}>
        <Text style={styles.todoTitle}>Deals and Lead</Text>

        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{props.dealsLead.length}</Text>
        </View>
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={props.dealsLead}
        renderItem={renderList}
      />
    </View>
  );
};
