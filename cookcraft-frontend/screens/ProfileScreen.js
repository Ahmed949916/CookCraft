import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  // Placeholder for profile data and recipe images
  const profileData = {
    name: "Tasya Aulianza",
    username: "@tasyaaauz",
    recipesCount: 29,
    followersCount: 144,
    followingCount: 306,
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    recipes: [
      {
        id: "1",
        name: "Shrimp with Garlic",
        likes: 186,
        image: "https://via.placeholder.com/150",
      },
      {
        id: "2",
        name: "Spicy Sausage",
        likes: 503,
        image: "https://via.placeholder.com/150",
      },
      // ...more recipes
    ],
  };

  const renderRecipe = ({ item }) => (
    <View style={styles.recipeCard}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{item.name}</Text>
      <View style={styles.likesContainer}>
        <Icon name="heart" size={16} color="#888" />
        <Text style={styles.likesCount}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: profileData.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{profileData.name}</Text>
        <Text style={styles.profileUsername}>{profileData.username}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>{profileData.recipesCount} Recipes</Text>
          <Text style={styles.stat}>
            {profileData.followersCount} Followers
          </Text>
          <Text style={styles.stat}>
            {profileData.followingCount} Following
          </Text>
        </View>
        <TouchableOpacity style={styles.manageProfileButton}>
          <Text style={styles.manageProfileButtonText}>Manage profile</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={profileData.recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.recipesList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileUsername: {
    color: "#aaa",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  stat: {
    fontSize: 16,
    fontWeight: "500",
  },
  manageProfileButton: {
    backgroundColor: "#FFD700", // Your button color
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  manageProfileButtonText: {
    color: "#fff",
  },
  recipesList: {
    paddingHorizontal: 10,
  },
  recipeCard: {
    flex: 1 / 2,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: 150, // Adjust as needed
  },
  recipeName: {
    fontWeight: "bold",
    margin: 5,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  likesCount: {
    marginLeft: 5,
  },
});

export default ProfileScreen;