import React from "react";
import { Button, StyleSheet, Text, FlatList } from "react-native";

const MyLists = ({ lists }) => {
  function renderItem({ item }) {
    return <Text style={styles.li}>{item.name}</Text>;
  }

  return <FlatList data={lists} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  li: {
    textAlign: "center",
    fontSize: 20,
    width: 300,
    borderWidth: 2,
    borderColor: "blue",
    padding: 5,
    margin: 5,
  },
});

export default MyLists;
