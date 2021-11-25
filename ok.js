server.get('/', function(req, res) {
  const about = {
    avatar_url: 'https://avatars1.githubusercontent.com/u/56355762?s=460&v=4',
    name: 'Alefhi Lima',
    role: 'Acadêmico do Curso de Sistema de Informação',
    description: 'Aluno do Bootcamp LaunchBase, realizado pela empresa e plataforma de ensino <a href="https://rocketseat.com.br/" target="www.rocketseat.com.br">Rocketseat</a> . Estudando a linguagem JavaScript, para então focar as tecnologias(Node.js, ReactJS, React Native).',
    links: [
      {name: 'Github', url: 'https://www.github.com/alefhilima'},
      {name: 'Instagram', url: 'https://www.Instagram.com/alefhilima'},
      {name: 'Linkedin', url: 'https://www.linkedin.com/in/alefhi-lima-37b777184/'}
    ]
  }

 return res.render('about', { about })
})

server.get('/portfolio', function(req, res) {
 
 return res.render('portfolio', { items:videos })
})

server.get('/video', function(req, res) {
 const id = req.query.id

 const video = videos.find(function(video){
   return video.id == id  
 })

 if (!video) {
   return res.send('Video not found!')
 }
 
 return res.render('video', { item: video })

})