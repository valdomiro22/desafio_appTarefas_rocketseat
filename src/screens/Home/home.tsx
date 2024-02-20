import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView
} from "react-native";
import { styles } from "./homeStyles";
import { Tasks }  from "../../components/Tasks/tasks";
import { MaterialCommunityIcons  } from '@expo/vector-icons';

export function Home() {

  // const [tarefas, setTarefas] = useState(['João']);
  const [tarefas, setTarefas] = useState<string[]>([]);

  // Para capturar o que foi digitado no input
  const [tarefaName, setTarefaName] = useState('');

  function handleTaskAdd() {
    if(tarefas.includes(tarefaName)) {
      return Alert.alert('Tarefa já existe');
    }

    // tarefas.push('ana');
    // setTarefas(conteudoAnterior => [...conteudoAnterior, 'Ana']);  // Agora cada click no botão ira criar um item novo
    setTarefas(conteudoAnterior => [...conteudoAnterior, tarefaName]);  // Agora cada click no botão ira criar um item novo
    setTarefaName('');
  }

  function handleTaskRemove(name: string) {
    Alert.alert('Botão Remove Clicado');

    // tarefas.push('Abastecer a moto');
    console.log(tarefas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Tarefa"
          placeholderTextColor='#fff'
          // onChangeText={text => setTarefaName(text)}
          onChangeText={setTarefaName}  // Forma simplificada
          value={tarefaName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusTarefa}>
        <Text style={styles.textStatus}>Criadas</Text>
        <Text style={styles.textStatus}>Concluidas</Text>
      </View>

      <FlatList 
        data={tarefas}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Tasks
            key={item}
            tarefa={item}
            onRemove={() => handleTaskRemove('Rodrigo')}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="black" />
            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Text>Crie tarefas e organize seus à fazeres</Text>
          </View>
        )}
      />

    </View>
  );
}