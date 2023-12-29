import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

const App = () => {
  const handleClick = () => {
    alert("Merhabalar");
  };
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="click" onPress={() => alert("Merhabalar")} />
      <TouchableOpacity onPress={() => alert("Merhabalar")}>
        <Text>
          click TouchableOpacity
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={() => alert("pressed")}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => alert("Merhabalar")}>
        <Text>TouchableHighlight</Text>
      </TouchableWithoutFeedback>

      <Image
        // resize mode

        style={{
          width: "100%",
          height: 100,
          borderWidth: 2,
          borderColor: "red",
        }}
      >
        source  = {{
          uri: "https://github.com/botosstrike"
        }}
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});