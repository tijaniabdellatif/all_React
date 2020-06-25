# all_React :
## api URL : 
URL TheMovieDB
Les films les plus populaires du moment en français.

https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=votreClé

Recommendation de films pour un id de film particulier en français

https://api.themoviedb.org/3/movie/idDeFilm/recommendations?api_key=votreClé&language=fr&include_adult=false

Rechercher un film par son titre en français

https://api.themoviedb.org/3/search/movie?api_key=votreClé&query=Un+Titre+De+film&language=fr&include_adult=false
chercher des url de video pour un id de film en particulier (en anglais)

Note : si vous appliquez un filtre avec language=fr vous aurez malheureusement moins de résultats qu'en anglais.

https://api.themoviedb.org/3/movie/[id]?api_key=votreClé&append_to_response=videos&include_adult=false

Définition des constantes

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=[votreClé]"

API key : 6f001d57bda6a9d2051b0740c79b1a9b

how to make releases :  git tag -a v1.0.7 a1e6210 -m 'Youtube_id'

Documentation : Virtual dom , states , props et classes 

Documentation : the component LifeCycle https://fr.reactjs.org/docs/react-component.html


==> les props sont jamais modifiable

==> ajax avec axios

==> 2 state , deux render()


URL : teaseer => "https://www.youtube.ma/embed/

URL base : ${API_END_POINT}movie/[movieId]?append_to_response=videos&include_adult=false&${API_KEY}


a1e62109589a678e7c16c4d5e8d2ceeb710b638f
