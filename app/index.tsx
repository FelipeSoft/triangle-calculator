import { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Pressable, Touchable } from 'react-native';

export default function HomeScreen() {
  const [inputs, setInputs] = useState<{ base: string, height: string }>({ base: "", height: "" });
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState("");

  const handlePress = () => {
    const hasEmptyValues = inputs.base.toString() === "" || inputs.height.toString() === "";
    const hasInvalidNumeric = isNaN(Number(inputs.base)) || isNaN(Number(inputs.height));

    if (hasEmptyValues) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (hasInvalidNumeric) {
      setError("Por favor, separe as casas decimais por ponto.");
      return;
    }

    setError("");

    const area = (Math.abs(Number(inputs.base)) * Math.abs(Number(inputs.height))) / 2;
    setResult(area);
  }

  return (
    <View style={styles.containerArea}>
      <Text style={{ color: "#fff", fontWeight: "600", fontSize: 24, marginBottom: 24 }}>Calcule a Área do Triângulo</Text>
      <View style={styles.formContainerArea}>
        <View style={{ width: "100%" }}>
          <Text style={{ color: "#fff", marginBottom: 4 }}>Base (b)</Text>
          <TextInput keyboardType='numeric' onChangeText={(value) => setInputs({ ...inputs, base: value })} style={styles.textInput} />
        </View>
        <View style={{ width: "100%" }}>
          <Text style={{ color: "#fff", marginBottom: 4 }}>Altura (h)</Text>
          <TextInput keyboardType='numeric' onChangeText={(value) => setInputs({ ...inputs, height: value })} style={styles.textInput} />
        </View>
        <Button
          title="Calcular"
          onPress={handlePress}
          color="#841584"
        />
        {result !== 0 && error === "" && <Text style={{ color: "#fff", textAlign: "center" }}>Resultado: {result.toFixed(2)}</Text>}
        {error !== "" && <Text style={{ color: "#f00", textAlign: "center" }}>{error}</Text>}
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#555"
  }
});
