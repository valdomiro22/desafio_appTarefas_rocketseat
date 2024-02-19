import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 24,
  },
  title: {
    color: '#0000ff',
    fontSize: 40,
    marginTop: 20,
    textAlign: 'center'
  }, 
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    paddingLeft: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonText: {
    color: '#ff00ff',
    fontWeight: 'bold',
    fontSize: 18
  },
  statusTarefa: {
    width: '100%',
    // height: 40,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    // backgroundColor: '#00ff00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  textStatus: {
    fontSize: 16,
    color: '#fff',
  },
});