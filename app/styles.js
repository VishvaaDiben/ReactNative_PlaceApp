import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  customMarker: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  infoCard: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
  },
  collapsibleContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
    borderRadius: 8,
    elevation: 2,
    maxHeight: 200,
  },

  collapsibleHeader: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#007aff",
    marginBottom: 8,
    textAlign: "center",
  },

  historyScroll: {
    maxHeight: 150,
  },

  historyItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },

  historyItemText: {
    fontSize: 14,
    flex: 1,
    marginRight: 8,
  },

  deleteButton: {
    fontSize: 16,
    color: "#ff3b30",
    paddingHorizontal: 5,
  },

  emptyText: {
    fontStyle: "italic",
    color: "#888",
    textAlign: "center",
    paddingVertical: 10,
  },

  cardContainer: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  bodyContainer: {
    paddingVertical: 10,
    alignItems: "center", 
    justifyContent: "center",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },
});
