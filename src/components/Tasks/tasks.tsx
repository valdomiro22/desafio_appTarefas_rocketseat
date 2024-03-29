import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './tasksStyles';
import { AntDesign, Entypo, Ionicons  } from '@expo/vector-icons';


type Props = {
  tarefa: String;
  onRemove: () => void;
}

export function Tasks({tarefa, onRemove}: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  // const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <View style={styles.areaCheckBox}>
          <AntDesign name="checkcircleo" size={24} color="#ccaaff" />
          {/* <Entypo name="circle" size={24} color="#ffaabb" /> */}
        </View>


        <Text style={styles.text}>{ tarefa }</Text>

        <Ionicons name="trash-outline" size={30} color="black" onPress={onRemove} />

      </View>
    </View>
  );
}