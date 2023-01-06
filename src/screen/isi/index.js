import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {SearchBar} from '@rneui/themed';

const Isi = ({navigation, route}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://equran.id/api/surat/${route.params.nomor_surah}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('Data Quran', result);
        setData(result.ayat);
      })
      .catch(error => console.log('error', error));
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.conterImg}>
        <Image
          source={require('../../assets/images/bismilah.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.bks}>
        {data.map((item, index) => {
          return (
            <View style={styles.bks2}>
              <Text style={styles.ayat1}>{item.ar}</Text>
              <Text style={styles.ayat}>{item.idn}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Isi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#042030',
  },
  conterImg: {
    alignItems: 'center',
  },
  img: {
    marginTop: 20,
  },
  bks: {
    flexDirection: 'column',
    marginTop: 20,
  },
  bks2: {
    paddingBottom: 10,
  },
  ayat1: {
    color: '#fff',
    fontSize: 30,
  },
  ayat: {
    marginBottom: 30,
    color: '#fff',
    fontSize: 20,
    borderBottomWidth: 1,
  },
});
