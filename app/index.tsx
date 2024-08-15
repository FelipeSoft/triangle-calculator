import { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Pressable, Touchable } from 'react-native';

export default function HomeScreen() {
  const [inputs, setInputs] = useState<{ base: number, height: number }>({ base: 0, height: 0 });
  const [result, setResult] = useState<number>(0);

  const handlePress = () => {

  }

  return (
    <View style={styles.containerArea}>
      <View style={styles.formContainerArea}>
        <View style={{ width: "100%" }}>
          <Text style={{ color: "#fff", marginBottom: 4 }}>Base</Text>
          <TextInput onChangeText={(e) => setInputs({...inputs, base: Number(e)})} style={styles.textInput} />
        </View>
        <View style={{ width: "100%" }}>
          <Text style={{ color: "#fff", marginBottom: 4 }}>Altura</Text>
          <TextInput onChangeText={(e) => setInputs({...inputs, height: Number(e)})} style={styles.textInput} />
        </View>
        <Button
          title="Calcular"
          onPress={handlePress}
          color="#841584"
        />
        <Text style={{color: "#fff"}}>Resultado: {result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainerArea: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 20
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#841584",
  },
  containerArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: "100%",
    padding: 20
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    width: "100%",
    color: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555"
  }
});
