import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ConsultaCard } from "../components";
import { Consulta } from "../interfaces/consulta";
import { styles } from "../styles/app.styles";
export default function Home() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: {
      id: 1,
      nome: "Dr. José Silva",
      crm: "123456",
      especialidade: { id: 1, nome: "Clínica Geral" },
      ativo: true,
    },
    paciente: {
      nome: "João da Silva",
      cpf: "000.000.000-00",
      email: "joao@example.com",
      telefone: "(11) 99999-9999",
    },
    data: new Date(),
    valor: 150,
    status: "agendada",
    observacoes: "",
  });
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }
  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada",
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
          <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>
        <ConsultaCard
          consulta={consulta}
          onConfirmar={confirmarConsulta}
          onCancelar={cancelarConsulta}
        />
      </ScrollView>
    </View>
  );
}