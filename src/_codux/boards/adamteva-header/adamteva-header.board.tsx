import { createBoard } from '@wixc3/react-board';
import { AdamTevaHeader } from '../../../components/adamteva-header/adamteva-header';

export default createBoard({
    name: 'AdamTevaHeader',
    Board: () => (
        <AdamTevaHeader />
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowWidth: 1400,
    },
});
