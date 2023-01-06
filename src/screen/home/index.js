import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {SearchBar} from '@rneui/themed';
import TopTab from '../topTabNavigator';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://equran.id/api/surat', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('Data Quran', result);
        setData(result);
      })
      .catch(error => console.log('error', error));
  }, []);
  return (
    <View>
      <ScrollView style={styles.container}>
        <SearchBar
          style={styles.search}
          placeholder="Cari"
          onChangeText={updateSearch}
          value={search}
        />
        <View style={styles.gbr}>
          {/* <Text style={styles.ayat1}>Assalamualaikum</Text> */}
          <Image
            source={require('../../assets/images/bismilah.png')}
            style={styles.img}
          />
        </View>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Isi', {
                nomor_surah: item.nomor,
              })
            }
            style={styles.bksText}>
            <View style={styles.bksSemua}>
              <View style={styles.bks}>
                <Text style={styles.nmr}>{item.nomor}</Text>
                <Icon name="octagon" color={'#A44AFF'} size={50} />
              </View>
              <View style={styles.bksKet}>
                <Text style={styles.surat}>{item.nama_latin}</Text>
                <View style={styles.bksAyat}>
                  <Text style={styles.jAyat}>{item.jumlah_ayat} Ayat</Text>
                  <Text style={styles.jAyat}>-</Text>
                  <Text style={styles.jAyat}>{item.tempat_turun}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.ayat}>{item.nama}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#042030',
  },
  gbr: {
    alignItems: 'center',
    borderBottomWidth: 5,
  },
  img: {
    marginTop: 20,
  },

  ayat1: {
    fontSize: 35,
    fontFamily: 'Poppins-Medium',
    color: '#aff',
  },
  bksText: {
    borderBottomWidth: 5,
  },
  bksSemua: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bks: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  nmr: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    top: 38.5,
  },
  bksKet: {
    padding: 5,
    justifyContent: 'center',
    top: 7.5,
  },
  bksAyat: {
    flexDirection: 'row',
  },
  surat: {
    fontFamily: 'Poppins-Normal',
    fontSize: 16,
    color: '#fff',
    padding: 5,
  },
  jAyat: {
    fontFamily: 'Poppins-Normal',
    fontSize: 12,
    color: '#7B80AD',
  },
  ayat: {
    color: '#A44AFF',
    fontSize: 25,
  },
});
