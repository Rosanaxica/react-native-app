import { useRef, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";
import { IconPause, IconPlay } from "../components/Icons";

import { useAudioPlayer } from "expo-audio";

const pomodoro = [
  {
    id: "foco",
    initialValue: 25 * 60,
    image: require("./foco.png"),
    name: "Foco",
  },
  {
    id: "curto",
    initialValue: 5 * 60,
    image: require("./curto.png"),
    name: "Pausa Curta",
  },
  {
    id: "longo",
    initialValue: 15 * 60,
    image: require("./longo.png"),
    name: "Pausa Longa",
  },
];
export default function Index() {
  const audioSource = require("./tick.mp3");
  const audioSourceEnd = require("./alarm.mp3");
  const player = useAudioPlayer(audioSource);
  const playerEnd = useAudioPlayer(audioSourceEnd);

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
      player.pause();
    }
  };

  const timerRef = useRef(null);

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }
    setTimerRunning(true);
    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          player.pause();
          playerEnd.play();
          return timerType.initialValue;
        }
        player.play();

        return oldState - 1;
      });
    }, 1000);
    timerRef.current = id;
  };
  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              name={p.name}
            ></ActionButton>
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
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
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0a8",
    fontSize: 12.5,
  },
});
