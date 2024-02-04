import { createBoard } from '@wixc3/react-board';
import { Video } from '../../../components/video/video';

export default createBoard({
    name: 'Video',
    Board: () => (
        <Video
            src={'https://adamteva.org.il/wp-content/uploads/2022/06/סרטון-חדש-מכווץ.mp4'}
            autoPlay
            muted
            playsInline
            loop
        />
    ),
    isSnippet: true,
});
