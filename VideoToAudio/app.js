const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

// Digite no terminal o caminho do video que vc deseja converter

var videoPath = process.argv[2];
if (!videoPath) {
  console.error('Por favor, especifique o caminho do arquivo de vídeo.');
  process.exit(1);
}

var audioPath = './toAudio/audio.mp3';

ffmpeg(videoPath)
  .audioCodec('libmp3lame')
  .output(audioPath)
  .on('end', function() {
    console.log('Conversão concluída com sucesso!');
  })
  .on('error', function(err) {
    console.error('Ocorreu um erro durante a conversão:', err.message);
  })
  .run();
