import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    // view == div
    // text == (h1->h6) & <p>
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          alert("You Pressed!");
        }}
      >
        <Image
          source={{
            uri: "https://abk.eahli.com/media/original_images/yellow_logo_1.png",
          }}
          width={250}
          height={150}
        />
      </TouchableOpacity>
      <Text style={styles.greeting}>Hello World 2 !!!</Text>

      <TextInput
        placeholder="Enter your username"
        style={styles.inputField}
        onChangeText={(text) => {
          console.log(text);
        }}
      ></TextInput> */}

      <View style={styles.profileThumbnail}>
        <Image
          style={styles.imageThumb}
          source={{
            uri: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
          }}
          width={135}
          height={135}
        />
        <Text style={styles.greeting}> Abdulaziz Marafi</Text>
        <Text style={styles.mutedText}>Kuwait</Text>
        <View style={styles.line}></View>

        <View style={styles.statsCollection}>
          <View style={styles.stat}>
            <Text style={styles.greeting}>89K</Text>
            <Text style={styles.mutedText}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.greeting}>890K</Text>
            <Text style={styles.mutedText}>Likes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.greeting}>1.04K</Text>
            <Text style={styles.mutedText}>Pictures</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01697a",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 2,
  },
  inputField: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  profileThumbnail: {
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    height: 270,
    width: 270,
    borderRadius: 15,
  },
  imageThumb: {
    margin: 1,
  },
  mutedText: {
    fontWeight: "light",
    color: "#6c757d",
  },
  statsCollection: {
    display: "flex",
    justifyContent: "space-around" /* Distribute space evenly */,
    alignItems: "center" /* CenterS items vertically */,
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5 /* Space between number and label */,
  },
  line: {
    height: 1,
    backgroundColor: "black",
    width: "85%",
    marginVertical: 3,
  },
});
