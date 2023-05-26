import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  // Função para lidar com a funcionalidade de compartilhamento
  const onShare = async () => {
    const result = await Share.share({
      message: "MEU IMC DE HOJE É: " + props.resultImc
    });
  };

  return (
    <View style={styles.corpo}>
      {/* Exibe o título para a média de resultado */}
      <Text style={styles.titulo}>{props.messageResultImc}</Text>
      <Text style={styles.resultado}>{props.resultImc}</Text>

      <View style={styles.caixaBotaoCompartilhar}>
        {/* Verifica se há um resultado de média para exibir o botão de compartilhamento */}
        {props.resultImc != null ? (
          <TouchableOpacity onPress={onShare} style={styles.botaoCompartilhar}>
            <Text style={styles.textoBotaoCompartilhar}>Compartilhar</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}
