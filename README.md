# all_React :

## api URL : 

 https://www.themoviedb.org/ 
 
## Les films les plus populaires du moment en français.

https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=votreClé

## Recommendation de films pour un id de film particulier en français

https://api.themoviedb.org/3/movie/idDeFilm/recommendations?api_key=votreClé&language=fr&include_adult=false

## Rechercher un film par son titre en français

https://api.themoviedb.org/3/search/movie?api_key=votreClé&query=Un+Titre+De+film&language=fr&include_adult=false
chercher des url de video pour un id de film en particulier (en anglais)

## Note :

 si vous appliquez un filtre avec language=fr vous aurez malheureusement moins de résultats qu'en anglais.


## Définition des constantes

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=[votreClé]"



## how to make releases :  

git tag -a v1.0.7 a1e6210 -m 'Youtube_id'

## Mot clés : 

Virtual dom , states , props et classes 

## Documentation : 

the component LifeCycle https://fr.reactjs.org/docs/react-component.html


## May be Useful: 

 https://github.com/MicheleBertoli/css-in-js