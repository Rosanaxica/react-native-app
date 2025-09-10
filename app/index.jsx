import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
const pomodoro = [{
  id: "foco",
  initialValue: 25,
  image: require("./foco.png"),
  name: "Foco"
},
{
  id: "curto",
  initialValue: 5,
  image: require("./curto.png"),
  name: "Pausa Curta"
},
{
  id: "longo",
  initialValue: 15,
  image: require("./longo.png"),
  name: "Pausa Longa"
}]
export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])
  return (
    <View
      style={styles.container}
    >
      <Image
        source={timerType.image}

      />
      <View style={styles.actions} >
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton key={p.id} active={timerType.id === p.id} onPress={()=>setTimerType(p)} name={p.name}></ActionButton>
          ))}
        </View>
        <Text style={styles.timer}>{new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", { minute: "2-digit", second: "2-digit" })}</Text>

        <FokusButton />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText} >
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    borderRadius: 32,
    borderWidth: 2,
    width: "80%",
    borderColor: "#144480",
    gap: 32
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  timer: {
    fontWeight: "bold",
    fontSize: 54,
    color: "#FFF",
    textAlign: "center"
  },
  footer: {
    width: "80%"
  },
  footerText: {
    textAlign: "center",
    color: "#98A0a8",
    fontSize: 12.5
  }
});

