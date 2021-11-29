import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '4cf55dfa9a0ab63a939fffb8ae325498',
    lat: '1.2921',
    lon: '36.8219',
    lang: 'en',
    unit: 'metric', 
  });

  return (
    <div className='App'>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        locationLabel='Nairobi'
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
      <h3>React Player</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=pflXnUNMsNk' />
      <div>
      <h3>Video.js</h3>
      <video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>
</div>
    </div>
  );
}

export default App;
