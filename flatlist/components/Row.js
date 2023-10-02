import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Row({person}) {
    return (
        <Text styles={styles.row}> {person.item.firstname} {person.item.lastname}</Text>
    )
}

const styles = StyleSheet.create({
    row: {
        marginBottom: 8,
        marginTop: 8
    },
});