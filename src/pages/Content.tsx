import { useIonAlert, IonThumbnail, IonItem, IonButtons, IonBackButton, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { planet } from 'ionicons/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

interface ContentProps
    extends RouteComponentProps<{
        firstName: string;
    }> {}

const Content: React.FC<ContentProps> = ({ match }) => {
    console.log(match.params);
    let initialStarWars = [
        {
            "title": "Star Wars IV: A New Hope",
            "year": "1977",
            "type": "Movie",
            "description": "With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.",
            "imgURL": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480"
        },
        {
            "title": "Star Wars V: The Empire Strikes Back",
            "year": "1980",
            "type": "Movie",
            "description": "While the Death Star has been destroyed, the battle between the Empire and the Rebel Alliance rages on...and the evil Darth Vader continues his relentless search for Luke Skywalker.",
            "imgURL": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480"
        },
        {
            "title": "Star Wars VI: Return of the Jedi",
            "year": "1983",
            "type": "Movie",
            "description": "Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.",
            "imgURL": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480"    
        }
    ];
  const [starWars, setStarWars] = useState(initialStarWars);
  const [presentAlert] = useIonAlert();
  function goGetData() {
    let theURL = "assets/content/starWars.json";
    axios.get(theURL).then(
      (theResponse) => {
        // console.log(theResponse);
        setStarWars(theResponse.data);
      }
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle slot="start">
          <IonIcon icon={planet}/> Star Wars <IonIcon icon={planet}/>
          </IonTitle>
          {/* <IonTitle slot="end">Zo DiSanto</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>May the Force be with you, {match.params.firstName}</h1>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle><b>Star Wars</b></IonCardTitle>
            <IonCardSubtitle>Click the buttons below for a different ordered list of the complete Star Wars franchise</IonCardSubtitle>
            <IonCardContent>
              <IonButton color="warning" onClick={goGetData}>
                Chronological Order
              </IonButton> 
              {/* <IonButton color="warning" onClick={goGetData}>
                Initial Release Order
              </IonButton>  */}
              </IonCardContent>
          </IonCardHeader>
        </IonCard>

        <IonCard> 
          {/* <h1>The Origional Star Wars Trilogy:</h1>  */}
          {starWars.map((info, index) => (
          <IonCardHeader key={index}
            onClick={() =>
              presentAlert({
                header: 'Release Date',
                // subHeader: info.imgURL,
                message: 'This ' + info.type + ' came out in ' + info.year,
                buttons: ['OK'],
              })
            }
          >
            {/* <IonCard> */}
              <IonCardTitle>{info.title}</IonCardTitle>
              {/* <IonCardSubtitle>{info.year} / {info.type}</IonCardSubtitle> */}
              <IonCardContent>
                {/* <IonItem> */}
                  <IonThumbnail slot="start">
                    <img alt="Movie Poster" src={info.imgURL} width="100px" />
                  </IonThumbnail>
                  {info.description}
                {/* </IonItem> */}
              </IonCardContent>
            {/* </IonCard> */}
          </IonCardHeader>
          ))}
        </IonCard>
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Content;
