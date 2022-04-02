import { Text, View } from 'react-native'
import { styles } from './styles'

export default function SingIn() {
    return(
        <View style={styles.container}>
            <Text style={styles.textLogin}>login</Text>
            <Text>Email</Text>
            <Text>senha</Text>
        </View>
        
    )
    
}