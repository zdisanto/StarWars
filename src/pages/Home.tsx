import { IonIcon, IonInput, IonItem, IonLabel, IonButton, useIonAlert, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { planet, informationCircleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const [firstName, setFirstName] = useState('%00');
  const [presentAlert] = useIonAlert();

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
        <IonTitle slot="start">
        <IonIcon icon={planet}/> Star Wars <IonIcon icon={planet}/>
        </IonTitle>
          {/* <IonTitle slot="end">by Zo DiSanto</IonTitle> */}
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Welcome to the Star Wars Database!</h1>
        <p>What is your name? <IonIcon icon={informationCircleOutline} onClick={() =>
                presentAlert({
                  header: 'Why is this here?',
                  // subHeader: 'Why not?',
                  message: 'Why not?',
                  buttons: ['OK'],
                })
              }
            ></IonIcon></p>
        <IonItem>
          <IonLabel position="stacked">
          </IonLabel>
          <IonInput name="firstName" placeholder="Enter Your Name" type="text" onIonChange={
            (e: any) => setFirstName(e.target.value)
          }>
          </IonInput>
        </IonItem>
        <IonButton expand="block" routerLink={"/Content/" + firstName}>
          Sign 
        </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Home;
