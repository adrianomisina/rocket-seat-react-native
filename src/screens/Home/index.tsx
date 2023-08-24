import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles'

const Home = () => {
  const handleParticipantAdd = () => {
    console.log('você clicou no botão de Adicionar!')
  }

  const handleParticipantRemove = (name:string) => {
    console.log(`Você clicou em remover o participante ${name}`);
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text> 
      
      <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor="#6b6b6b" 
        />    
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Adriano" onRemove={()=> handleParticipantRemove("Adriano")} />
    </View>
  )
}

export default Home;

