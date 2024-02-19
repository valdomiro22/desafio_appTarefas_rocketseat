import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  FlatList
} from "react-native";
import { styles } from "./homeStyles";
import { Tasks }  from "../../components/Tasks/tasks";

export function Home() {
  const tarefas = [
    'Agendar terapia',
    'Fazer a barba',
    'Cortar o cabelo',
    'Comptar passagem',
    'Cortar as unhas'
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Tarefa"
          placeholderTextColor='#fff'
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusTarefa}>
        <Text style={styles.textStatus}>Criadas</Text>
        <Text style={styles.textStatus}>Concluidas</Text>
      </View>

      <FlatList 
        data={tarefas}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Tasks 
            key={item}
            tarefa={item}
          />
        )}
      />
    </View>
  );
}