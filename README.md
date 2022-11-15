# StarWars.info
An Ionic application to view the original trilogy or all of the Star Wars movies and/or series in (_canon_) order.

The application can be found <a href="https://homework9-zd009.web.app">here</a>.
## How?
- I created my own data and used Axios because my original data from <a href="https://kanye.rest">kanye.rest</a> only outputted one data object (a singular quote), and the assignment was to output multiple data objects.
  - The created data can be found <a href="https://github.com/zdisanto/StarWars/blob/main/public/assets/content/starWars.json">here</a>.
- I then displayed and rendered the data using ```<IonCard>``` and ```.map()```. and used ```<IonButtons>``` to display different ways to view the data. 

Below are the contents of my .TSX page that renders my data:

```javascript
const [starWars, setStarWars] = useState(initialStarWars);
function goGetData() {
    let theURL = "assets/content/starWars.json";
    axios.get(theURL).then(
        (theResponse) => {
            console.log(theResponse);
            setStarWars(theResponse.data);
        }
    );
}
```
Below is a quick visual of the application:

https://user-images.githubusercontent.com/70993217/201770582-e51c4e02-95c9-4c77-9cc7-4c3b34275532.mov

