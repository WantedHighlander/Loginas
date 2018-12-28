import {AsyncStorage} from 'react-native';
const deviceStorage = {
    async saveItem( key, value ) {
        try{
            await AsyncStorage.setItem(key,value);
            console.log(value);
        }
        catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadJWT() {
        try{
            const value = await AsyncStorage.getItem('verisecret');
            if (value !== null ) {
                this.setState({
                    token_: value,
                    loading: false
                });
            }
            else {
                this.setState({
                    loading: false
                });
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async deleteJWT() {
        try{
            await AsyncStorage.removeItem('verisecret')
                .then(
                    () => {
                        this.setState({
                            token_: ''
                        })
                    }
                );
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }
};

export default deviceStorage;