import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles'

const Home = () => {
  const participants = ['Adriano', 'Jane', 'Kenzo', 'Mel', ' Horito', 'Ana', 'Isa', 'Jack', 'Mike', 'João'];

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

      <FlatList
        data={['Adriano', 'Jane', 'Kenzo', 'Mel', 'Horito', 'Marcio', 'Marta', 'Jaime', 'Maria P', 'Betinha']}    
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key = {item}
            name={item}
            onRemove={()=> handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />



    </View>
  )
}

export default Home;

