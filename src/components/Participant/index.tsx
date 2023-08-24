import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

interface ParticipantProps {
    name: string,
    onRemove: ()=> void
}

const Participant = ({name, onRemove}:ParticipantProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={onRemove}>
           -
          </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Participant