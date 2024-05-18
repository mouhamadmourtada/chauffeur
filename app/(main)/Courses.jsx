import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { doc, onSnapshot, getDocs, collection, getFirestore } from "firebase/firestore";
import Colors from '../../constants/Colors'

import { set } from "firebase/database";
// import {ref} from "firebase/firestore"
import { db } from "../../config";
import { ref } from 'firebase/storage';
import { ScrollView } from 'react-native-gesture-handler';
import { fontScale } from 'nativewind';

// function writeUserData(userId, name, email, imageUrl) {
// //   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }


const courseData = [
  {
    // c'est dans le cadre d'une application de covoiturage, propose moi les données que l'on pourrait avoir sur course
    id : 1,
    depart : 'Douala',
    destination : 'Yaoundé',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 2,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 3,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 4,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 5,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 6,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 7,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 8,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 9,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 10,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 11,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 12,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  },{
    id : 13,
    depart : 'Douala',
    destination : 'Bafoussam',
    date : '2022-09-12',
    heureDepart : '12:00',
    placesDisponibles : 3,
    prix : 5000,
    vehicule : 'Toyota',
    conducteur : 'Jean',
    telephone : '654321098'
  }

]



const Courses = () => {



  return (
    <ScrollView>
      <View>
        {courseData.map(course => (
          <CardCourse key={course.id} {...course}/>
        ))}
      </View>

    </ScrollView>
  )
}

export default Courses

const CardCourse = (course) => {
  // ce component doit afficher les informations d'une course, il faut styliser un peux quand même 
  return (
    <View>
      <CardStat courseData = {course}/>
      <View style = {styles.courseContainer}>
        <View style = {styles.courseInfo}>
          <OneInfo label = "Départ" donnee = {course.depart}/>
          <OneInfo label = "Destination" donnee = {course.destination}/>
          <OneInfo label = "Date" donnee = {course.date}/>
          <OneInfo label = "Heure de départ" donnee = {course.heureDepart}/>
          <OneInfo label = "Places disponibles" donnee = {course.placesDisponibles}/>
          <OneInfo label = "Prix" donnee = {course.prix}/>
          <OneInfo label = "Véhicule" donnee = {course.vehicule}/>
          <OneInfo label = "Conducteur" donnee = {course.conducteur}/>
          <OneInfo label = "Téléphone" donnee = {course.telephone}/>
        </View>
      </View>
    </View>
  )
}

const OneInfo = ({label, donnee}) =>{
  return (
    <View style = {styles.oneInfoContainer}>
      <Text style = {styles.labelOneInfo}>{label} : </Text>
      <Text>{donnee}</Text>
    </View>
  )

}

const CardStat = ({courseData}) => {
  return (
    <View>
      <Text>Statistique</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  courseContainer : {
    backgroundColor : 'white',
    padding : 10,
    margin : 10,
    borderRadius : 5,
    display : 'flex', 
    // flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 20
  }, 
  courseInfo : {
    display : 'flex',
    flexDirection : 'column',

  },
  oneInfoContainer : {
    // fontSize : fontScale(2),
    fontSize : 80,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'start',
    padding : 10,
    // height : 40,
  },
  labelOneInfo : {
    color : Colors.primaire,
    fontWeight : 'bold',
    marginRight : 15,
    width : '50%'
  },
  CardStat : {
    
  }
})