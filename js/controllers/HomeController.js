app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
	{ 
      title:      'Cowspiracy: The Sustainability Secret', 
      iscore:     8.3,
      rating:     'NR',
      runtime:    85,
      released:   new Date('2015', '09', '15'),
      country:    'USA',
      posters:    ['img/cowspiracy.jpg', 'img/cowspiracy2.jpg'],
      imdb:       'https://www.imdb.com/title/tt3302820/?ref_=nv_sr_1',
      website:    'https://www.cowspiracy.com',
      likes:      1111,
      dislikes:   0,
      posterindex: 0
      },
      { 
      title:      'The Matrix', 
      iscore:     8.7,
      rating:     'R',
      runtime:    136,
      released:   new Date('1999', '03', '31'),
      country:    'USA',
      posters:    ['img/matrix.jpg','img/matrix2.jpg'],
      imdb:       'https://www.imdb.com/title/tt0133093/?ref_=nv_sr_1',
      website:    'https://www.warnerbros.com/matrix',
      likes:      999,
      dislikes:   11,
      posterindex: 0
      },
      { 
      title:      'Pursuit of Happyness', 
      iscore:     8.0,
      rating:     'PG-13',
      runtime:    117,
      released:   new Date('2006', '12', '15'),
      country:    'USA',
      posters:    ['img/happyness.jpg','img/happyness2.jpg'],
      imdb:       'https://www.imdb.com/title/tt0454921/?ref_=nv_sr_1',
      website:    'http://www.sonypictures.com/movies/thepursuitofhappyness/',
      likes:      777,
      dislikes:   44,
      posterindex: 0
      },
  ];
	
	
	/* ADD VARIABLES FOR STEP 3 HERE */
      $scope.title = "IMDB + Christian's Top 8 Movies";
      $scope.owner = 'Christian Gomez';
      $scope.github = 'https://github.com/cog3/IS219Gomez-p3';
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index){
            $scope.movies[index].likes++;
            console.log("like function works");
      }
	$scope.dislike = function(index){
            $scope.movies[index].dislikes++;
            console.log("dislike function works")
      }
      $scope.posterClick = function(index){
            if($scope.movies[index].posters.length == 0){
                  $scope.movies[index].posterindex = 0;
                  console.log($scope.movies[index].posterindex);
            }
            else if($scope.movies[index].posterindex < $scope.movies[index].posters.length-1){
                  $scope.movies[index].posterindex++;
                  console.log($scope.movies[index].posterindex);
            }
            else{
                  $scope.movies[index].posterindex = 0;
                  console.log($scope.movies[index].posterindex);
            }
      }

      $scope.timeText = function(minutes){
            if(minutes < 60){
                  return (minutes) + 'm';        
            }
            else if(minutes%60==0){
                  return (minutes-minutes%60)/60 + 'h';        
            }
            else{
                  return (minutes-minutes%60)/60 + 'h' + ' ' + minutes%60 + 'm';
            }
      }	
}]);